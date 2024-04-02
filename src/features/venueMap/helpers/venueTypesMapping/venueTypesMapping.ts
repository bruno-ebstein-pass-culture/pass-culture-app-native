import { VenueTypeCodeKey } from 'api/gen'
import { MAP_VENUE_TYPE_TO_LABEL } from 'libs/parsers/venueType'

export const venueTypesMapping = {
  trip: {
    title: 'Sorties',
    children: {
      [VenueTypeCodeKey.MOVIE]: MAP_VENUE_TYPE_TO_LABEL[VenueTypeCodeKey.MOVIE],
      [VenueTypeCodeKey.TRAVELING_CINEMA]:
        MAP_VENUE_TYPE_TO_LABEL[VenueTypeCodeKey.TRAVELING_CINEMA],
      [VenueTypeCodeKey.CONCERT_HALL]: MAP_VENUE_TYPE_TO_LABEL[VenueTypeCodeKey.CONCERT_HALL],
      [VenueTypeCodeKey.PERFORMING_ARTS]: MAP_VENUE_TYPE_TO_LABEL[VenueTypeCodeKey.PERFORMING_ARTS],
      [VenueTypeCodeKey.FESTIVAL]: MAP_VENUE_TYPE_TO_LABEL[VenueTypeCodeKey.FESTIVAL],
      [VenueTypeCodeKey.MUSEUM]: MAP_VENUE_TYPE_TO_LABEL[VenueTypeCodeKey.MUSEUM],
      [VenueTypeCodeKey.LIBRARY]: MAP_VENUE_TYPE_TO_LABEL[VenueTypeCodeKey.LIBRARY],
      [VenueTypeCodeKey.GAMES]: MAP_VENUE_TYPE_TO_LABEL[VenueTypeCodeKey.GAMES],
      [VenueTypeCodeKey.VISUAL_ARTS]: MAP_VENUE_TYPE_TO_LABEL[VenueTypeCodeKey.VISUAL_ARTS],
    },
  },
  shop: {
    title: 'Boutiques',
    children: {
      [VenueTypeCodeKey.BOOKSTORE]: MAP_VENUE_TYPE_TO_LABEL[VenueTypeCodeKey.BOOKSTORE],
      [VenueTypeCodeKey.CREATIVE_ARTS_STORE]:
        MAP_VENUE_TYPE_TO_LABEL[VenueTypeCodeKey.CREATIVE_ARTS_STORE],
      [VenueTypeCodeKey.DISTRIBUTION_STORE]:
        MAP_VENUE_TYPE_TO_LABEL[VenueTypeCodeKey.DISTRIBUTION_STORE],
      [VenueTypeCodeKey.MUSICAL_INSTRUMENT_STORE]:
        MAP_VENUE_TYPE_TO_LABEL[VenueTypeCodeKey.MUSICAL_INSTRUMENT_STORE],
      [VenueTypeCodeKey.RECORD_STORE]: MAP_VENUE_TYPE_TO_LABEL[VenueTypeCodeKey.RECORD_STORE],
    },
  },
  other: {
    title: 'Autres',
    children: {
      [VenueTypeCodeKey.ARTISTIC_COURSE]: MAP_VENUE_TYPE_TO_LABEL[VenueTypeCodeKey.ARTISTIC_COURSE],
      [VenueTypeCodeKey.CULTURAL_CENTRE]: MAP_VENUE_TYPE_TO_LABEL[VenueTypeCodeKey.CULTURAL_CENTRE],
      [VenueTypeCodeKey.PATRIMONY_TOURISM]:
        MAP_VENUE_TYPE_TO_LABEL[VenueTypeCodeKey.PATRIMONY_TOURISM],
      [VenueTypeCodeKey.SCIENTIFIC_CULTURE]:
        MAP_VENUE_TYPE_TO_LABEL[VenueTypeCodeKey.SCIENTIFIC_CULTURE],
    },
  },
}
