import { Hit } from '@algolia/client-search'

import { Response } from 'features/search/pages/useSearchResults'
import { captureAlgoliaError } from 'libs/algolia/fetchAlgolia/AlgoliaError'
import { buildOfferSearchParameters } from 'libs/algolia/fetchAlgolia/buildAlgoliaParameters/buildOfferSearchParameters.ts'
import { offerAttributesToRetrieve } from 'libs/algolia/fetchAlgolia/buildAlgoliaParameters/offerAttributesToRetrieve'
import { client } from 'libs/algolia/fetchAlgolia/clients'
import { buildHitsPerPage } from 'libs/algolia/fetchAlgolia/utils'
import { SearchParametersQuery } from 'libs/algolia/types'
import { env } from 'libs/environment'
import { GeoCoordinates } from 'libs/geolocation'
import { SearchHit } from 'libs/search'

type FetchOfferArgs = {
  parameters: SearchParametersQuery
  userLocation: GeoCoordinates | null
  isUserUnderage: boolean
}

export const fetchOffer = async ({
  parameters,
  userLocation,
  isUserUnderage,
}: FetchOfferArgs): Promise<Response> => {
  const searchParameters = buildOfferSearchParameters(parameters, userLocation, isUserUnderage)
  const index = client.initIndex(env.ALGOLIA_OFFERS_INDEX_NAME)

  try {
    return await index.search<SearchHit>(parameters.query || '', {
      page: parameters.page || 0,
      ...buildHitsPerPage(parameters.hitsPerPage),
      ...searchParameters,
      attributesToRetrieve: offerAttributesToRetrieve,
      attributesToHighlight: [], // We disable highlighting because we don't need it
    })
  } catch (error) {
    captureAlgoliaError(error)
    return { hits: [] as Hit<SearchHit>[], nbHits: 0, page: 0, nbPages: 0 }
  }
}