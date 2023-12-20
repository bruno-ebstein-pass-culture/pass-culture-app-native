import algoliasearch from 'algoliasearch'

import { SearchGroupNameEnumv2 } from 'api/gen'
import {
  buildAlgoliaFilter,
  fetchOffersByArtist,
} from 'features/offer/components/OfferPlaylist/api/fetchOffersByArtist'
import { offerAttributesToRetrieve } from 'libs/algolia/fetchAlgolia/buildAlgoliaParameters/offerAttributesToRetrieve'

jest.mock('algoliasearch')

const mockInitIndex = algoliasearch('', '').initIndex
const search = mockInitIndex('').search as jest.Mock

describe('fetchOffersByArtist', () => {
  it('should execute the query if artist, ean are provided and searchGroupName is a book', async () => {
    await fetchOffersByArtist({
      artists: 'Eiichiro Oda',
      ean: '9782723492607',
      searchGroupName: SearchGroupNameEnumv2.LIVRES,
      venueLocation: { latitude: 47.65904, longitude: -2.75922 },
    })

    expect(search).toHaveBeenCalledWith('', {
      page: 0,
      filters: `offer.artist:"Eiichiro Oda" AND NOT offer.ean:"9782723492607"`,
      hitsPerPage: 30,
      attributesToRetrieve: [...offerAttributesToRetrieve, 'offer.artist', 'offer.ean'],
      attributesToHighlight: [],
      aroundRadius: 50000,
      aroundLatLng: '47.65904, -2.75922',
    })
  })

  it('should execute the query with artist, ean and searchGroupName but without venueLocation if offer is a book', async () => {
    await fetchOffersByArtist({
      artists: 'Eiichiro Oda',
      ean: '9782723492607',
      searchGroupName: SearchGroupNameEnumv2.LIVRES,
      venueLocation: undefined,
    })

    expect(search).toHaveBeenCalledWith('', {
      page: 0,
      filters: `offer.artist:"Eiichiro Oda" AND NOT offer.ean:"9782723492607"`,
      hitsPerPage: 30,
      attributesToRetrieve: [...offerAttributesToRetrieve, 'offer.artist', 'offer.ean'],
      attributesToHighlight: [],
      aroundRadius: 'all',
    })
  })

  it('should not execute the query if artist, ean, searchGroupName are missing', async () => {
    await fetchOffersByArtist({
      artists: '',
      ean: '',
      searchGroupName: undefined,
      venueLocation: undefined,
    })

    expect(search).not.toHaveBeenCalled()
  })

  it('should execute the query if artist is provided and searchGroupName is a book', async () => {
    await fetchOffersByArtist({
      artists: 'Eiichiro Oda',
      ean: '',
      searchGroupName: SearchGroupNameEnumv2.LIVRES,
      venueLocation: { latitude: 47.65904, longitude: -2.75922 },
    })

    expect(search).toHaveBeenCalledWith('', {
      page: 0,
      filters: 'offer.artist:"Eiichiro Oda"',
      hitsPerPage: 30,
      attributesToRetrieve: [...offerAttributesToRetrieve, 'offer.artist', 'offer.ean'],
      attributesToHighlight: [],
      aroundRadius: 50000,
      aroundLatLng: '47.65904, -2.75922',
    })
  })

  it('should not execute the query with only ean', async () => {
    await fetchOffersByArtist({
      artists: '',
      ean: '9782723492607',
      searchGroupName: undefined,
      venueLocation: undefined,
    })

    expect(search).not.toHaveBeenCalled()
  })

  it('should not execute the query if artist, ean are provided and searchGroupName is not a book', async () => {
    await fetchOffersByArtist({
      artists: 'Eiichiro Oda',
      ean: '9782723492607',
      searchGroupName: SearchGroupNameEnumv2.FILMS_SERIES_CINEMA,
      venueLocation: { latitude: 47.65904, longitude: -2.75922 },
    })

    expect(search).not.toHaveBeenCalled()
  })

  it('should not execute the query if artist is provided and searchGroupName is not a book', async () => {
    await fetchOffersByArtist({
      artists: 'Eiichiro Oda',
      ean: '',
      searchGroupName: SearchGroupNameEnumv2.FILMS_SERIES_CINEMA,
      venueLocation: { latitude: 47.65904, longitude: -2.75922 },
    })

    expect(search).not.toHaveBeenCalled()
  })
})

describe('buildAlgoliaFilter', () => {
  it('should build the correct filter when ean is provided', () => {
    const filter = buildAlgoliaFilter({
      artists: 'Eiichiro Oda',
      ean: '9782344037102',
    })

    expect(filter).toEqual('offer.artist:"Eiichiro Oda" AND NOT offer.ean:"9782344037102"')
  })

  it('should build the correct filter when ean is not provided', () => {
    const filter = buildAlgoliaFilter({
      artists: 'Eiichiro Oda',
      ean: undefined,
    })

    expect(filter).toEqual('offer.artist:"Eiichiro Oda"')
  })

  it('should handle multiple artists and ean', () => {
    const filter = buildAlgoliaFilter({
      artists: 'Eiichiro Oda ; Another Artist',
      ean: '9782344037102',
    })

    expect(filter).toEqual('offer.artist:"Eiichiro Oda" AND NOT offer.ean:"9782344037102"')
  })
})