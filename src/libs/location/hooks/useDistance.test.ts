import { ILocationContext, useLocation } from 'libs/location'
import { useDistance } from 'libs/location/hooks/useDistance'
import { LocationMode } from 'libs/location/types'
import { formatDistance } from 'libs/parsers/formatDistance'

jest.mock('libs/parsers/formatDistance')

jest.mock('libs/location')
const mockUseGeolocation = jest.mocked(useLocation)

const DEFAULT_POSITION = { latitude: 90, longitude: 90 }

const OFFER_POSITION = { lat: 31, long: 56 }
const UNDEFINED_OFFER_POSITION = {
  lat: undefined,
  lng: undefined,
}

describe('useDistance()', () => {
  it('should call useLocation and formatDistance when geolocation is on', () => {
    // eslint-disable-next-line local-rules/independent-mocks
    mockUseGeolocation.mockReturnValue({ userLocation: DEFAULT_POSITION } as ILocationContext)
    useDistance(OFFER_POSITION)

    expect(formatDistance).toHaveBeenCalledWith(OFFER_POSITION, DEFAULT_POSITION)
  })

  it('should return undefined when no offerPosition given', () => {
    // eslint-disable-next-line local-rules/independent-mocks
    mockUseGeolocation.mockReturnValue({
      userLocation: DEFAULT_POSITION,
    } as ILocationContext)

    expect(useDistance(UNDEFINED_OFFER_POSITION)).toEqual(undefined)
  })

  it('should return undefined when user position and custom position are null', () => {
    // eslint-disable-next-line local-rules/independent-mocks
    mockUseGeolocation.mockReturnValue({
      userLocation: null,
    } as ILocationContext)

    expect(useDistance(OFFER_POSITION)).toEqual(undefined)
  })

  it('should return undefined when custom position is defined and type is municipality', () => {
    // eslint-disable-next-line local-rules/independent-mocks
    mockUseGeolocation.mockReturnValue({
      userLocation: DEFAULT_POSITION,
      selectedLocationMode: LocationMode.AROUND_PLACE,
      selectedPlace: {
        type: 'municipality',
        label: 'Kourou',
        info: 'Kourou',
        geolocation: DEFAULT_POSITION,
      },
    } as ILocationContext)

    expect(useDistance(OFFER_POSITION)).toEqual(undefined)
  })

  it('should call useLocation and formatDistance when user have a custom position and type is housnumber', () => {
    // eslint-disable-next-line local-rules/independent-mocks
    mockUseGeolocation.mockReturnValue({
      userLocation: DEFAULT_POSITION,
      selectedLocationMode: LocationMode.AROUND_PLACE,
      selectedPlace: {
        type: 'housenumber',
        label: 'Kourou',
        info: 'Kourou',
        geolocation: DEFAULT_POSITION,
      },
    } as ILocationContext)

    useDistance(OFFER_POSITION)

    expect(formatDistance).toHaveBeenCalledWith(OFFER_POSITION, DEFAULT_POSITION)
  })
})
