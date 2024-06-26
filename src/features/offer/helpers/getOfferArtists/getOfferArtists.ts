import { CategoryIdEnum, OfferResponseV2 } from 'api/gen'

export function getOfferArtists(
  categoryId: CategoryIdEnum,
  offer: OfferResponseV2
): string | undefined {
  const { extraData } = offer

  switch (categoryId) {
    case CategoryIdEnum.LIVRE:
      return extraData?.author ?? undefined
    case CategoryIdEnum.MUSIQUE_ENREGISTREE:
    case CategoryIdEnum.MUSIQUE_LIVE:
      return extraData?.performer ?? undefined
    case CategoryIdEnum.SPECTACLE:
    case CategoryIdEnum.CINEMA:
      return extraData?.stageDirector ?? undefined
    default:
      return undefined
  }
}
