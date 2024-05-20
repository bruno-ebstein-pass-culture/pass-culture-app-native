import { SearchCategoriesIllustrations } from 'features/search/enums'
import { PLACEHOLDER_DATA } from 'libs/subcategories/placeholderData'
import { renderHook } from 'tests/utils'

import {
  categoriesSortPredicate,
  MappingOutput,
  useSortedSearchCategories,
} from './useSortedSearchCategories'

const mockData = PLACEHOLDER_DATA
jest.mock('libs/subcategories/useSubcategories', () => ({
  useSubcategories: () => ({
    data: mockData,
  }),
}))

describe('useSortedSearchCategories', () => {
  const options = { initialProps: jest.fn() }

  it('should return all categories', () => {
    const { result } = renderHook(useSortedSearchCategories, options)

    expect(result.current).toHaveLength(13)
  })

  it("should format category's label", () => {
    const { result } = renderHook(useSortedSearchCategories, options)

    // @ts-expect-error: because of noUncheckedIndexedAccess
    expect(result.current[10].label).toEqual('Cartes jeunes')
  })

  it('should set illustration for category', () => {
    const { result } = renderHook(useSortedSearchCategories, options)

    // @ts-expect-error: because of noUncheckedIndexedAccess
    expect(result.current[10].Illustration).toEqual(SearchCategoriesIllustrations.YouthCards)
  })

  it('should sort search group names by the key position', () => {
    const { result } = renderHook(useSortedSearchCategories, options)

    const actualCategoriesLabels = result.current.map((category) => category.label)

    expect(actualCategoriesLabels).toEqual([
      'Concerts & festivals',
      'Cinéma, films et séries',
      'Livres',
      'CD, vinyles, musique en ligne',
      'Arts & loisirs créatifs',
      'Spectacles',
      'Musées & visites culturelles',
      'Jeux & jeux vidéos',
      'Instruments de musique',
      'Médias & presse',
      'Cartes jeunes',
      'Conférences & rencontres',
      'Évènements en ligne',
    ])
  })
})

describe('categoriesSortPredicate', () => {
  it('should sort when example is simple', () => {
    const itemA = { position: 2, label: 'Example 1' } as MappingOutput
    const itemB = { position: 1, label: 'Example 2' } as MappingOutput

    expect(categoriesSortPredicate(itemA, itemB)).toEqual(1)
    expect(categoriesSortPredicate(itemB, itemA)).toEqual(-1)
  })

  it('should sort when undefined', () => {
    const itemA = { position: undefined, label: 'Example 1' } as MappingOutput
    const itemB = { position: 1, label: 'Example 2' } as MappingOutput

    expect(categoriesSortPredicate(itemA, itemB)).toEqual(-1)
    expect(categoriesSortPredicate(itemB, itemA)).toEqual(1)
  })
})
