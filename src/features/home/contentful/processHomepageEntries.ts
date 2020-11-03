import {
  AlgoliaFields,
  BusinessFields,
  ExclusivityFields,
  HomepageEntries,
  HomepageModule,
  CONTENT_TYPES,
  Image,
} from './contentful'
import {
  Offers,
  OffersWithCover,
  ExclusivityPane,
  BusinessPane,
  ProcessedModule,
} from './moduleTypes'

function moveExcluModuleOnTop(modules: Array<ProcessedModule>) {
  const excluModules = modules.filter((m) => m instanceof ExclusivityPane)
  if (!excluModules.length) return modules

  const otherModules = modules.filter((m) => !(m instanceof ExclusivityPane))
  return [excluModules[0], ...otherModules]
}

export const processHomepageEntries = (homepage: HomepageEntries): ProcessedModule[] => {
  const {
    fields: { modules },
  } = homepage

  const processedModules = modules.map((module) => {
    const { fields } = module
    if (!fields || !hasAtLeastOneField(fields)) return

    const contentType = getContentType(module)
    if (contentType === 'algolia') {
      const { algoliaParameters, displayParameters, cover } = fields as AlgoliaFields
      if (!hasAtLeastOneField(algoliaParameters)) return

      const { fields: algolia } = algoliaParameters
      const { fields: display } = displayParameters

      if (cover && hasAtLeastOneField(cover)) {
        return new OffersWithCover({ algolia, cover: buildImageUrl(cover.fields.image), display })
      }
      return new Offers({ algolia, display })
    }

    if (contentType === 'exclusivity') {
      const { alt, offerId, image } = fields as ExclusivityFields
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return new ExclusivityPane({ alt, image: buildImageUrl(image)!, offerId })
    }

    if (contentType === CONTENT_TYPES.BUSINESS) {
      const { firstLine, secondLine, url, image } = fields as BusinessFields
      return new BusinessPane({
        firstLine,
        image: buildImageUrl(image),
        secondLine,
        url,
      })
    }

    return
  })

  const filteredModules = processedModules.filter(Boolean) as ProcessedModule[]
  return moveExcluModuleOnTop(filteredModules)
}

const buildImageUrl = (image: Image): string | null => {
  if (image && hasAtLeastOneField(image.fields)) {
    const { url } = image.fields.file
    return url ? `https:${url}` : null
  }
  return null
}

// eslint-disable-next-line
const hasAtLeastOneField = (object: any) => {
  return Object.keys(object).length > 0
}

const getContentType = (module: HomepageModule) => {
  const { contentType } = module.sys
  return contentType && contentType.sys.id
}
