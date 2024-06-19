import { SearchResponse } from '@algolia/client-search'
import mockdate from 'mockdate'
import React from 'react'

import { useRoute } from '__mocks__/@react-navigation/native'
import { SubcategoryIdEnum, VenueResponse } from 'api/gen'
import { useGTLPlaylists } from 'features/gtlPlaylist/hooks/useGTLPlaylists'
import { Referrals } from 'features/navigation/RootNavigator/types'
import { venueResponseSnap } from 'features/venue/fixtures/venueResponseSnap'
import { Venue } from 'features/venue/pages/Venue/Venue'
import { analytics } from 'libs/analytics'
import * as useFeatureFlag from 'libs/firebase/firestore/featureFlags/useFeatureFlag'
import { PLACEHOLDER_DATA } from 'libs/subcategories/placeholderData'
import { Offer } from 'shared/offer/types'
import { mockServer } from 'tests/mswServer'
import { reactQueryProviderHOC } from 'tests/reactQueryProviderHOC'
import { act, render, screen, waitFor } from 'tests/utils'

jest.spyOn(useFeatureFlag, 'useFeatureFlag').mockReturnValue(false)

// TODO(PC-29000): Use fakeTimers modern instead
jest.useFakeTimers({ legacyFakeTimers: true })

mockdate.set(new Date('2021-08-15T00:00:00Z'))

jest.mock('libs/network/NetInfoWrapper')
jest.mock('libs/firebase/analytics/analytics')
jest.mock('libs/itinerary/useItinerary')
jest.mock('features/venue/api/useVenueOffers')
jest.mock('features/search/context/SearchWrapper')
jest.mock('libs/location')

const mockSubcategories = PLACEHOLDER_DATA.subcategories
const mockHomepageLabels = PLACEHOLDER_DATA.homepageLabels
jest.mock('libs/subcategories/useSubcategories', () => ({
  useSubcategories: () => ({
    data: {
      subcategories: mockSubcategories,
      homepageLabels: mockHomepageLabels,
    },
  }),
}))
const venueId = venueResponseSnap.id

jest.mock('features/gtlPlaylist/hooks/useGTLPlaylists')
const mockUseGTLPlaylists = useGTLPlaylists as jest.Mock
mockUseGTLPlaylists.mockReturnValue({
  gtlPlaylists: [
    {
      title: 'Test',
      offers: {
        hits: [
          {
            offer: {
              name: 'Test',
              subcategoryId: SubcategoryIdEnum.ABO_BIBLIOTHEQUE,
            },
            venue: {
              address: 'Avenue des Tests',
              city: 'Jest',
            },
            _geoloc: {
              lat: 2,
              lng: 2,
            },
            objectID: '12',
          },
        ],
      } as SearchResponse<Offer>,
      layout: 'one-item-medium',
      entryId: '2xUlLBRfxdk6jeYyJszunX',
      minNumberOfOffers: 1,
    },
  ],
  isLoading: false,
})

describe('<Venue />', () => {
  beforeEach(() => {
    mockServer.getApi<VenueResponse>(`/v1/venue/${venueId}`, venueResponseSnap)
  })

  it('should match snapshot', async () => {
    renderVenue(venueId)
    await act(async () => {})

    expect(screen).toMatchSnapshot()
  })

  describe('analytics', () => {
    it('should log consult venue when URL has from param with deeplink', async () => {
      renderVenue(venueId, 'deeplink')

      await waitFor(() => {
        expect(analytics.logConsultVenue).toHaveBeenNthCalledWith(1, {
          venueId,
          from: 'deeplink',
        })
      })
    })

    it('should not log consult venue when URL has "from" param with something other than deeplink', async () => {
      renderVenue(venueId, 'searchresults')
      await act(async () => {})

      expect(analytics.logConsultVenue).not.toHaveBeenCalled()
    })

    it('should not log consult venue when URL has not "from" param', async () => {
      renderVenue(venueId)
      await act(async () => {})

      expect(analytics.logConsultVenue).not.toHaveBeenCalled()
    })
  })
})

async function renderVenue(id: number, from?: Referrals) {
  useRoute.mockImplementation(() => ({ params: { id, from } }))
  render(reactQueryProviderHOC(<Venue />))
}
