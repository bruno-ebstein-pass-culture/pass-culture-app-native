import { useMemo } from 'react'

import {
  CategoryHomeLabelMapping,
  CategoryIdMapping,
  HomeLabelMapping,
  SubcategoriesMapping,
} from 'libs/subcategories/types'
import { useSubcategories } from 'libs/subcategories/useSubcategories'

export const useSubcategoriesMapping = (): SubcategoriesMapping => {
  const { data } = useSubcategories()
  const { subcategories = [] } = data || {}

  return useMemo(() => {
    const mapping = {} as SubcategoriesMapping
    subcategories.forEach((curr) => {
      const { id, ...subcategory } = curr
      mapping[id] = subcategory
    })
    return mapping
  }, [subcategories.length])
}

export const useCategoryIdMapping = (): CategoryIdMapping => {
  const { data } = useSubcategories()
  const { subcategories = [] } = data || {}

  return useMemo(() => {
    const mapping = {} as CategoryIdMapping
    subcategories.forEach((curr) => {
      mapping[curr.id] = curr.categoryId
    })
    return mapping
  }, [subcategories.length])
}

export const useHomeLabelMapping = (): HomeLabelMapping => {
  const { data } = useSubcategories()
  const { homepageLabels = [] } = data || {}

  return useMemo(() => {
    const mapping = {} as HomeLabelMapping
    homepageLabels.forEach((curr) => {
      mapping[curr.name] = curr.value || null
    })
    return mapping
  }, [homepageLabels.length])
}

export const useCategoryHomeLabelMapping = (): CategoryHomeLabelMapping => {
  const homeLabelMapping = useHomeLabelMapping()
  const { data } = useSubcategories()
  const { subcategories = [] } = data || {}

  return useMemo(() => {
    const mapping = {} as CategoryHomeLabelMapping
    subcategories.forEach((curr) => {
      mapping[curr.id] = homeLabelMapping[curr.homepageLabelName]
    })
    return mapping
  }, [subcategories.length, homeLabelMapping])
}
