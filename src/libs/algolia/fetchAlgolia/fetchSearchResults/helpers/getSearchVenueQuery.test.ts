import { NativeCategoryIdEnumv2, SearchGroupNameEnumv2 } from 'api/gen'
import { getSearchVenueQuery } from 'libs/algolia/fetchAlgolia/fetchSearchResults/helpers/getSearchVenueQuery'
import { searchQueryParametersFixture } from 'libs/algolia/fixtures/searchQueryParametersFixture'

describe('getVenuesQuery', () => {
  describe('When query is empty string', () => {
    it('should return the native category when category and native category are not empty', () => {
      const parameters = {
        ...searchQueryParametersFixture,
        offerCategories: [SearchGroupNameEnumv2.LIVRES],
        offerNativeCategories: [NativeCategoryIdEnumv2.LIVRES_PAPIER],
      }
      const venuesQuery = getSearchVenueQuery(parameters)

      expect(venuesQuery).toEqual('LIVRES_PAPIER')
    })

    it('should return the native category when native category is not empty', () => {
      const parameters = {
        ...searchQueryParametersFixture,
        offerNativeCategories: [NativeCategoryIdEnumv2.LIVRES_PAPIER],
      }
      const venuesQuery = getSearchVenueQuery(parameters)

      expect(venuesQuery).toEqual('LIVRES_PAPIER')
    })

    it('should return the category when category is not empty', () => {
      const parameters = {
        ...searchQueryParametersFixture,
        offerCategories: [SearchGroupNameEnumv2.LIVRES],
      }
      const venuesQuery = getSearchVenueQuery(parameters)

      expect(venuesQuery).toEqual('LIVRES')
    })

    it('should return an empty string when category and native category are empty', () => {
      const parameters = {
        ...searchQueryParametersFixture,
      }
      const venuesQuery = getSearchVenueQuery(parameters)

      expect(venuesQuery).toEqual('')
    })
  })

  describe('When query is not empty string', () => {
    it('should return the native category when category and native category are not empty', () => {
      const parameters = {
        ...searchQueryParametersFixture,
        offerCategories: [SearchGroupNameEnumv2.LIVRES],
        offerNativeCategories: [NativeCategoryIdEnumv2.LIVRES_PAPIER],
        query: 'fnac',
      }
      const venuesQuery = getSearchVenueQuery(parameters)

      expect(venuesQuery).toEqual('LIVRES_PAPIER fnac')
    })

    it('should return the native category when native category is not empty', () => {
      const parameters = {
        ...searchQueryParametersFixture,
        offerNativeCategories: [NativeCategoryIdEnumv2.LIVRES_PAPIER],
        query: 'fnac',
      }
      const venuesQuery = getSearchVenueQuery(parameters)

      expect(venuesQuery).toEqual('LIVRES_PAPIER fnac')
    })

    it('should return the category when category is not empty', () => {
      const parameters = {
        ...searchQueryParametersFixture,
        offerCategories: [SearchGroupNameEnumv2.LIVRES],
        query: 'fnac',
      }
      const venuesQuery = getSearchVenueQuery(parameters)

      expect(venuesQuery).toEqual('LIVRES fnac')
    })

    it('should return an empty string when category and native category are empty', () => {
      const parameters = {
        ...searchQueryParametersFixture,
        query: 'fnac',
      }
      const venuesQuery = getSearchVenueQuery(parameters)

      expect(venuesQuery).toEqual('fnac')
    })
  })
})
