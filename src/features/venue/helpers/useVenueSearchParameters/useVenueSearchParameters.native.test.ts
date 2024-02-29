import { VenueResponse } from 'api/gen'
import { initialSearchState } from 'features/search/context/reducer'
import { SearchView } from 'features/search/types'
import { venueResponseSnap as venue } from 'features/venue/fixtures/venueResponseSnap'
import { useVenueSearchParameters } from 'features/venue/helpers/useVenueSearchParameters/useVenueSearchParameters'
import { LocationMode } from 'libs/location/types'
import { renderHook } from 'tests/utils'

let mockSearchState = initialSearchState
jest.mock('features/search/context/SearchWrapper', () => ({
  useSearch: () => ({ searchState: mockSearchState, dispatch: jest.fn() }),
}))

const mockVenue: VenueResponse = venue
jest.mock('features/venue/api/useVenue', () => ({
  useVenue: jest.fn((venueId) => ({ data: venueId === mockVenue.id ? mockVenue : undefined })),
}))
jest.mock('features/search/helpers/useMaxPrice/useMaxPrice', () => ({
  useMaxPrice: jest.fn(() => 300),
}))

describe('useVenueSearchParameters', () => {
  afterEach(() => {
    mockSearchState = initialSearchState
  })

  it('should retrieve the default search parameters', () => {
    const { result } = renderHook(() => useVenueSearchParameters())

    expect(result.current).toEqual({
      beginningDatetime: undefined,
      endingDatetime: undefined,
      hitsPerPage: 30,
      locationFilter: { locationType: LocationMode.EVERYWHERE },
      offerCategories: [],
      offerSubcategories: [],
      offerIsDuo: false,
      offerIsFree: false,
      isDigital: false,
      priceRange: [0, 300],
      tags: [],
      date: null,
      timeRange: null,
      view: SearchView.Landing,
      query: '',
    })
  })

  it('should retrieve the the venue if available', () => {
    const { result } = renderHook(() => useVenueSearchParameters(venue))

    expect(result.current.venue).toEqual({
      info: 'Paris',
      label: 'Le Petit Rintintin 1',
      geolocation: { latitude: venue.latitude, longitude: venue.longitude },
      venueId: 5543,
    })
  })

  it('should retrieve the locationFilter filtered around me if no venue - position available', () => {
    mockSearchState = {
      ...initialSearchState,
      locationFilter: { aroundRadius: 100, locationType: LocationMode.AROUND_ME },
    }
    const { result } = renderHook(() => useVenueSearchParameters())

    expect(result.current.locationFilter).toEqual({
      aroundRadius: 100,
      locationType: LocationMode.AROUND_ME,
    })
  })

  it('should retrieve the locationFilter filtered everywhere if no venue - position unavailable', () => {
    const { result } = renderHook(() => useVenueSearchParameters())

    expect(result.current.locationFilter).toEqual({
      locationType: LocationMode.EVERYWHERE,
    })
  })
})
