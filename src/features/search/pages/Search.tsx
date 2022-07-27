import { useRoute } from '@react-navigation/native'
import algoliasearch, { SearchClient } from 'algoliasearch'
import React, { useEffect } from 'react'
import { Configure, InstantSearch } from 'react-instantsearch-hooks'
import styled from 'styled-components/native'
import { v4 as uuidv4 } from 'uuid'

import { useAppSettings } from 'features/auth/settings'
import { UseRouteType } from 'features/navigation/RootNavigator'
import { SearchResults } from 'features/search/components'
import { CategoriesButtons } from 'features/search/components/CategoriesButtons'
import { SearchAutocomplete } from 'features/search/components/SearchAutocomplete'
import { SearchAutocompleteItem } from 'features/search/components/SearchAutocompleteItem'
import { SearchHeader } from 'features/search/components/SearchHeader'
import { useSearch } from 'features/search/pages/SearchWrapper'
import { useShowResultsForCategory } from 'features/search/pages/useShowResultsForCategory'
import { SearchView } from 'features/search/types'
import { AlgoliaHit } from 'libs/algolia'
import { env } from 'libs/environment'
import { OfflinePage } from 'libs/network/OfflinePage'
import { useNetInfo } from 'libs/network/useNetInfo'
import { Spacer } from 'ui/theme'
import { Form } from 'ui/web/form/Form'

const searchInputID = uuidv4()
const algoliaClient = algoliasearch(env.ALGOLIA_APPLICATION_ID, env.ALGOLIA_SEARCH_API_KEY)
const searchClient: SearchClient = {
  ...algoliaClient,
  search(requests) {
    if (requests.every(({ params }) => !params?.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          page: 0,
          nbPages: 0,
          hitsPerPage: 0,
          processingTimeMS: 0,
          exhaustiveNbHits: false,
          query: '',
          params: '',
        })),
      })
    }
    return algoliaClient.search(requests)
  },
}
const offersIndex = env.ALGOLIA_OFFERS_INDEX_NAME

export function Search() {
  const netInfo = useNetInfo()
  const { params } = useRoute<UseRouteType<'Search'>>()
  const { dispatch } = useSearch()
  const showResultsForCategory = useShowResultsForCategory()
  const { data: appSettings } = useAppSettings()
  const appEnableAutocomplete = appSettings?.appEnableAutocomplete ?? false

  useEffect(() => {
    dispatch({ type: 'SET_STATE_FROM_NAVIGATE', payload: params || { view: SearchView.Landing } })
  }, [dispatch, params])

  const bodySearch = () => {
    if (params?.view === SearchView.Suggestions)
      return (
        <React.Fragment>
          {!!appEnableAutocomplete && <SearchAutocomplete hitComponent={Hit} />}
        </React.Fragment>
      )
    if (params?.view === SearchView.Results) return <SearchResults />
    return (
      <Container>
        <CategoriesButtons onPressCategory={showResultsForCategory} />
        <Spacer.TabBar />
      </Container>
    )
  }

  if (!netInfo.isConnected) {
    return <OfflinePage />
  }

  return (
    <Form.Flex>
      {appEnableAutocomplete ? (
        <InstantSearch searchClient={searchClient} indexName={offersIndex}>
          <Configure restrictSearchableAttributes={['offer.name']} hitsPerPage={5} />
          <SearchHeader
            searchInputID={searchInputID}
            appEnableAutocomplete={appEnableAutocomplete}
          />
          {bodySearch()}
        </InstantSearch>
      ) : (
        <React.Fragment>
          <SearchHeader
            searchInputID={searchInputID}
            appEnableAutocomplete={appEnableAutocomplete}
          />
          {bodySearch()}
        </React.Fragment>
      )}
    </Form.Flex>
  )
}

const Container = styled.View({ flex: 1 })

export type HitProps = {
  hit: AlgoliaHit
  index: number
}

export function Hit({ hit, index }: HitProps) {
  return <SearchAutocompleteItem hit={hit} index={index} />
}
