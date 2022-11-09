export const categoryIdMappingSnap = {
  ABO_BIBLIOTHEQUE: 'LIVRE',
  ABO_CONCERT: 'MUSIQUE_LIVE',
  ABO_JEU_VIDEO: 'JEU',
  ABO_LIVRE_NUMERIQUE: 'LIVRE',
  ABO_LUDOTHEQUE: 'JEU',
  ABO_MEDIATHEQUE: 'FILM',
  ABO_MUSEE: 'MUSEE',
  ABO_PLATEFORME_MUSIQUE: 'MUSIQUE_ENREGISTREE',
  ABO_PLATEFORME_VIDEO: 'FILM',
  ABO_PRATIQUE_ART: 'PRATIQUE_ART',
  ABO_PRESSE_EN_LIGNE: 'MEDIA',
  ABO_SPECTACLE: 'SPECTACLE',
  ACHAT_INSTRUMENT: 'INSTRUMENT',
  ACTIVATION_EVENT: 'TECHNIQUE',
  ACTIVATION_THING: 'TECHNIQUE',
  APP_CULTURELLE: 'MEDIA',
  ATELIER_PRATIQUE_ART: 'PRATIQUE_ART',
  AUTRE_SUPPORT_NUMERIQUE: 'FILM',
  BON_ACHAT_INSTRUMENT: 'INSTRUMENT',
  CAPTATION_MUSIQUE: 'MUSIQUE_ENREGISTREE',
  CARTE_CINE_ILLIMITE: 'CINEMA',
  CARTE_CINE_MULTISEANCES: 'CINEMA',
  CARTE_JEUNES: 'CARTE_JEUNES',
  CARTE_MUSEE: 'MUSEE',
  CINE_PLEIN_AIR: 'CINEMA',
  CINE_VENTE_DISTANCE: 'CINEMA',
  CONCERT: 'MUSIQUE_LIVE',
  CONCOURS: 'JEU',
  CONFERENCE: 'CONFERENCE',
  DECOUVERTE_METIERS: 'CONFERENCE',
  ESCAPE_GAME: 'JEU',
  EVENEMENT_CINE: 'CINEMA',
  EVENEMENT_JEU: 'JEU',
  EVENEMENT_MUSIQUE: 'MUSIQUE_LIVE',
  EVENEMENT_PATRIMOINE: 'MUSEE',
  FESTIVAL_ART_VISUEL: 'MUSEE',
  FESTIVAL_CINE: 'CINEMA',
  FESTIVAL_LIVRE: 'LIVRE',
  FESTIVAL_MUSIQUE: 'MUSIQUE_LIVE',
  FESTIVAL_SPECTACLE: 'SPECTACLE',
  JEU_EN_LIGNE: 'JEU',
  JEU_SUPPORT_PHYSIQUE: 'TECHNIQUE',
  LIVESTREAM_EVENEMENT: 'SPECTACLE',
  LIVESTREAM_MUSIQUE: 'MUSIQUE_LIVE',
  LIVESTREAM_PRATIQUE_ARTISTIQUE: 'PRATIQUE_ART',
  LIVRE_AUDIO_PHYSIQUE: 'LIVRE',
  LIVRE_NUMERIQUE: 'LIVRE',
  LIVRE_PAPIER: 'LIVRE',
  LOCATION_INSTRUMENT: 'INSTRUMENT',
  MATERIEL_ART_CREATIF: 'BEAUX_ARTS',
  MUSEE_VENTE_DISTANCE: 'MUSEE',
  OEUVRE_ART: 'TECHNIQUE',
  PARTITION: 'INSTRUMENT',
  PLATEFORME_PRATIQUE_ARTISTIQUE: 'PRATIQUE_ART',
  PODCAST: 'MEDIA',
  PRATIQUE_ART_VENTE_DISTANCE: 'PRATIQUE_ART',
  RENCONTRE: 'CONFERENCE',
  RENCONTRE_EN_LIGNE: 'CONFERENCE',
  RENCONTRE_JEU: 'JEU',
  SALON: 'CONFERENCE',
  SEANCE_CINE: 'CINEMA',
  SEANCE_ESSAI_PRATIQUE_ART: 'PRATIQUE_ART',
  SPECTACLE_ENREGISTRE: 'SPECTACLE',
  SPECTACLE_REPRESENTATION: 'SPECTACLE',
  SPECTACLE_VENTE_DISTANCE: 'SPECTACLE',
  SUPPORT_PHYSIQUE_FILM: 'FILM',
  SUPPORT_PHYSIQUE_MUSIQUE: 'MUSIQUE_ENREGISTREE',
  TELECHARGEMENT_LIVRE_AUDIO: 'LIVRE',
  TELECHARGEMENT_MUSIQUE: 'MUSIQUE_ENREGISTREE',
  VISITE: 'MUSEE',
  VISITE_GUIDEE: 'MUSEE',
  VISITE_VIRTUELLE: 'MUSEE',
  VOD: 'FILM',
}

export const subcategoriesMappingSnap = {
  ABO_BIBLIOTHEQUE: {
    appLabel: 'Abonnement (bibliothèques, médiathèques...)',
    categoryId: 'LIVRE',
    homepageLabelName: 'LIVRES',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'BIBLIOTHEQUES_MEDIATHEQUE',
  },
  ABO_CONCERT: {
    appLabel: 'Abonnement concert',
    categoryId: 'MUSIQUE_LIVE',
    homepageLabelName: 'CONCERT',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'CONCERTS_FESTIVALS',
  },
  ABO_JEU_VIDEO: {
    appLabel: 'Abonnement jeux vidéos',
    categoryId: 'JEU',
    homepageLabelName: 'JEUX',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'JEUX_JEUX_VIDEOS',
  },
  ABO_LIVRE_NUMERIQUE: {
    appLabel: 'Abonnement livres numériques',
    categoryId: 'LIVRE',
    homepageLabelName: 'LIVRES',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'LIVRES',
  },
  ABO_LUDOTHEQUE: {
    appLabel: 'Abonnement ludothèque',
    categoryId: 'JEU',
    homepageLabelName: 'JEUX',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'JEUX_JEUX_VIDEOS',
  },
  ABO_MEDIATHEQUE: {
    appLabel: 'Abonnement médiathèque',
    categoryId: 'FILM',
    homepageLabelName: 'FILMS',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'BIBLIOTHEQUES_MEDIATHEQUE',
  },
  ABO_MUSEE: {
    appLabel: 'Entrée libre ou abonnement musée',
    categoryId: 'MUSEE',
    homepageLabelName: 'MUSEE',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'MUSEES_VISITES_CULTURELLES',
  },
  ABO_PLATEFORME_MUSIQUE: {
    appLabel: 'Abonnement plateforme musicale',
    categoryId: 'MUSIQUE_ENREGISTREE',
    homepageLabelName: 'MUSIQUE',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'CD_VINYLE_MUSIQUE_EN_LIGNE',
  },
  ABO_PLATEFORME_VIDEO: {
    appLabel: 'Abonnement plateforme streaming',
    categoryId: 'FILM',
    homepageLabelName: 'FILMS',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'FILMS_SERIES_CINEMA',
  },
  ABO_PRATIQUE_ART: {
    appLabel: 'Abonnement pratique artistique',
    categoryId: 'PRATIQUE_ART',
    homepageLabelName: 'BEAUX_ARTS',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'ARTS_LOISIRS_CREATIFS',
  },
  ABO_PRESSE_EN_LIGNE: {
    appLabel: 'Abonnement presse en ligne',
    categoryId: 'MEDIA',
    homepageLabelName: 'MEDIAS',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'MEDIA_PRESSE',
  },
  ABO_SPECTACLE: {
    appLabel: 'Abonnement spectacle',
    categoryId: 'SPECTACLE',
    homepageLabelName: 'SPECTACLES',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'SPECTACLES',
  },
  ACHAT_INSTRUMENT: {
    appLabel: 'Achat instrument',
    categoryId: 'INSTRUMENT',
    homepageLabelName: 'INSTRUMENT',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'INSTRUMENTS',
  },
  ACTIVATION_EVENT: {
    appLabel: "Catégorie technique d'évènement d'activation ",
    categoryId: 'TECHNIQUE',
    homepageLabelName: 'NONE',
    isEvent: true,
    onlineOfflinePlatform: 'ONLINE_OR_OFFLINE',
    searchGroupName: 'NONE',
  },
  ACTIVATION_THING: {
    appLabel: "Catégorie technique de thing d'activation",
    categoryId: 'TECHNIQUE',
    homepageLabelName: 'NONE',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE_OR_OFFLINE',
    searchGroupName: 'NONE',
  },
  APP_CULTURELLE: {
    appLabel: 'Application culturelle',
    categoryId: 'MEDIA',
    homepageLabelName: 'MEDIAS',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'MEDIA_PRESSE',
  },
  ATELIER_PRATIQUE_ART: {
    appLabel: 'Atelier, stage de pratique artistique',
    categoryId: 'PRATIQUE_ART',
    homepageLabelName: 'BEAUX_ARTS',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'ARTS_LOISIRS_CREATIFS',
  },
  AUTRE_SUPPORT_NUMERIQUE: {
    appLabel: 'Autre support numérique',
    categoryId: 'FILM',
    homepageLabelName: 'FILMS',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'FILMS_SERIES_CINEMA',
  },
  BON_ACHAT_INSTRUMENT: {
    appLabel: "Bon d'achat instrument",
    categoryId: 'INSTRUMENT',
    homepageLabelName: 'INSTRUMENT',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'INSTRUMENTS',
  },
  CAPTATION_MUSIQUE: {
    appLabel: 'Captation musicale',
    categoryId: 'MUSIQUE_ENREGISTREE',
    homepageLabelName: 'MUSIQUE',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'CD_VINYLE_MUSIQUE_EN_LIGNE',
  },
  CARTE_CINE_ILLIMITE: {
    appLabel: 'Carte cinéma illimité',
    categoryId: 'CINEMA',
    homepageLabelName: 'CINEMA',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'FILMS_SERIES_CINEMA',
  },
  CARTE_CINE_MULTISEANCES: {
    appLabel: 'Carte cinéma multi-séances',
    categoryId: 'CINEMA',
    homepageLabelName: 'CINEMA',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'FILMS_SERIES_CINEMA',
  },
  CARTE_JEUNES: {
    appLabel: 'Carte jeunes',
    categoryId: 'CARTE_JEUNES',
    homepageLabelName: 'CARTE_JEUNES',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'CARTES_JEUNES',
  },
  CARTE_MUSEE: {
    appLabel: 'Cartes musées, patrimoine...',
    categoryId: 'MUSEE',
    homepageLabelName: 'MUSEE',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'MUSEES_VISITES_CULTURELLES',
  },
  CINE_PLEIN_AIR: {
    appLabel: 'Cinéma plein air',
    categoryId: 'CINEMA',
    homepageLabelName: 'CINEMA',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'FILMS_SERIES_CINEMA',
  },
  CINE_VENTE_DISTANCE: {
    appLabel: 'Cinéma',
    categoryId: 'CINEMA',
    homepageLabelName: 'CINEMA',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'FILMS_SERIES_CINEMA',
  },
  CONCERT: {
    appLabel: 'Concert',
    categoryId: 'MUSIQUE_LIVE',
    homepageLabelName: 'CONCERT',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'CONCERTS_FESTIVALS',
  },
  CONCOURS: {
    appLabel: 'Concours - jeux',
    categoryId: 'JEU',
    homepageLabelName: 'JEUX',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'JEUX_JEUX_VIDEOS',
  },
  CONFERENCE: {
    appLabel: 'Conférence',
    categoryId: 'CONFERENCE',
    homepageLabelName: 'RENCONTRES',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'RENCONTRES_CONFERENCES',
  },
  DECOUVERTE_METIERS: {
    appLabel: 'Découverte des métiers',
    categoryId: 'CONFERENCE',
    homepageLabelName: 'RENCONTRES',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'RENCONTRES_CONFERENCES',
  },
  ESCAPE_GAME: {
    appLabel: 'Escape game',
    categoryId: 'JEU',
    homepageLabelName: 'JEUX',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'JEUX_JEUX_VIDEOS',
  },
  EVENEMENT_CINE: {
    appLabel: 'Évènement cinéma',
    categoryId: 'CINEMA',
    homepageLabelName: 'CINEMA',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'FILMS_SERIES_CINEMA',
  },
  EVENEMENT_JEU: {
    appLabel: 'Évènements - jeux',
    categoryId: 'JEU',
    homepageLabelName: 'JEUX',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'JEUX_JEUX_VIDEOS',
  },
  EVENEMENT_MUSIQUE: {
    appLabel: "Autre type d'évènement musical",
    categoryId: 'MUSIQUE_LIVE',
    homepageLabelName: 'CONCERT',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'CONCERTS_FESTIVALS',
  },
  EVENEMENT_PATRIMOINE: {
    appLabel: 'Évènement et atelier patrimoine',
    categoryId: 'MUSEE',
    homepageLabelName: 'VISITES',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'MUSEES_VISITES_CULTURELLES',
  },
  FESTIVAL_ART_VISUEL: {
    appLabel: "Festival d'arts visuels / arts numériques",
    categoryId: 'MUSEE',
    homepageLabelName: 'FESTIVAL',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'MUSEES_VISITES_CULTURELLES',
  },
  FESTIVAL_CINE: {
    appLabel: 'Festival de cinéma',
    categoryId: 'CINEMA',
    homepageLabelName: 'CINEMA',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'FILMS_SERIES_CINEMA',
  },
  FESTIVAL_LIVRE: {
    appLabel: 'Festival et salon du livre',
    categoryId: 'LIVRE',
    homepageLabelName: 'LIVRES',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'LIVRES',
  },
  FESTIVAL_MUSIQUE: {
    appLabel: 'Festival de musique',
    categoryId: 'MUSIQUE_LIVE',
    homepageLabelName: 'FESTIVAL',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'CONCERTS_FESTIVALS',
  },
  FESTIVAL_SPECTACLE: {
    appLabel: 'Festival',
    categoryId: 'SPECTACLE',
    homepageLabelName: 'SPECTACLES',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'SPECTACLES',
  },
  JEU_EN_LIGNE: {
    appLabel: 'Jeux en ligne',
    categoryId: 'JEU',
    homepageLabelName: 'JEUX',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'JEUX_JEUX_VIDEOS',
  },
  JEU_SUPPORT_PHYSIQUE: {
    appLabel: 'Catégorie technique Jeu support physique',
    categoryId: 'TECHNIQUE',
    homepageLabelName: 'NONE',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE_OR_OFFLINE',
    searchGroupName: 'NONE',
  },
  LIVESTREAM_EVENEMENT: {
    appLabel: "Live stream d'évènement",
    categoryId: 'SPECTACLE',
    homepageLabelName: 'SPECTACLES',
    isEvent: true,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'EVENEMENTS_EN_LIGNE',
  },
  LIVESTREAM_MUSIQUE: {
    appLabel: 'Livestream musical',
    categoryId: 'MUSIQUE_LIVE',
    homepageLabelName: 'MUSIQUE',
    isEvent: true,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'EVENEMENTS_EN_LIGNE',
  },
  LIVESTREAM_PRATIQUE_ARTISTIQUE: {
    appLabel: 'Pratique artistique - livestream',
    categoryId: 'PRATIQUE_ART',
    homepageLabelName: 'COURS',
    isEvent: true,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'EVENEMENTS_EN_LIGNE',
  },
  LIVRE_AUDIO_PHYSIQUE: {
    appLabel: 'Livre audio sur support physique',
    categoryId: 'LIVRE',
    homepageLabelName: 'LIVRES',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'LIVRES',
  },
  LIVRE_NUMERIQUE: {
    appLabel: 'Livre numérique, e-book',
    categoryId: 'LIVRE',
    homepageLabelName: 'LIVRES',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'LIVRES',
  },
  LIVRE_PAPIER: {
    appLabel: 'Livre',
    categoryId: 'LIVRE',
    homepageLabelName: 'LIVRES',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'LIVRES',
  },
  LOCATION_INSTRUMENT: {
    appLabel: 'Location instrument',
    categoryId: 'INSTRUMENT',
    homepageLabelName: 'INSTRUMENT',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'INSTRUMENTS',
  },
  MATERIEL_ART_CREATIF: {
    appLabel: 'Matériel arts créatifs',
    categoryId: 'BEAUX_ARTS',
    homepageLabelName: 'BEAUX_ARTS',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'ARTS_LOISIRS_CREATIFS',
  },
  MUSEE_VENTE_DISTANCE: {
    appLabel: 'Musée vente à distance',
    categoryId: 'MUSEE',
    homepageLabelName: 'MUSEE',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'MUSEES_VISITES_CULTURELLES',
  },
  OEUVRE_ART: {
    appLabel: "Catégorie technique d'oeuvre d'art",
    categoryId: 'TECHNIQUE',
    homepageLabelName: 'NONE',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE_OR_OFFLINE',
    searchGroupName: 'ARTS_LOISIRS_CREATIFS',
  },
  PARTITION: {
    appLabel: 'Partition',
    categoryId: 'INSTRUMENT',
    homepageLabelName: 'INSTRUMENT',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'INSTRUMENTS',
  },
  PLATEFORME_PRATIQUE_ARTISTIQUE: {
    appLabel: 'Plateforme de pratique artistique',
    categoryId: 'PRATIQUE_ART',
    homepageLabelName: 'PLATEFORME',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'ARTS_LOISIRS_CREATIFS',
  },
  PODCAST: {
    appLabel: 'Podcast',
    categoryId: 'MEDIA',
    homepageLabelName: 'MEDIAS',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'MEDIA_PRESSE',
  },
  PRATIQUE_ART_VENTE_DISTANCE: {
    appLabel: 'Pratique artistique - vente à distance',
    categoryId: 'PRATIQUE_ART',
    homepageLabelName: 'BEAUX_ARTS',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'ARTS_LOISIRS_CREATIFS',
  },
  RENCONTRE: {
    appLabel: 'Rencontre',
    categoryId: 'CONFERENCE',
    homepageLabelName: 'RENCONTRES',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'RENCONTRES_CONFERENCES',
  },
  RENCONTRE_EN_LIGNE: {
    appLabel: 'Rencontre en ligne',
    categoryId: 'CONFERENCE',
    homepageLabelName: 'RENCONTRES',
    isEvent: true,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'RENCONTRES_CONFERENCES',
  },
  RENCONTRE_JEU: {
    appLabel: 'Rencontres - jeux',
    categoryId: 'JEU',
    homepageLabelName: 'JEUX',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'JEUX_JEUX_VIDEOS',
  },
  SALON: {
    appLabel: 'Salon, Convention',
    categoryId: 'CONFERENCE',
    homepageLabelName: 'RENCONTRES',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'RENCONTRES_CONFERENCES',
  },
  SEANCE_CINE: {
    appLabel: 'Séance de cinéma',
    categoryId: 'CINEMA',
    homepageLabelName: 'CINEMA',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'FILMS_SERIES_CINEMA',
  },
  SEANCE_ESSAI_PRATIQUE_ART: {
    appLabel: "Séance d'essai",
    categoryId: 'PRATIQUE_ART',
    homepageLabelName: 'BEAUX_ARTS',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'ARTS_LOISIRS_CREATIFS',
  },
  SPECTACLE_ENREGISTRE: {
    appLabel: 'Spectacle enregistré',
    categoryId: 'SPECTACLE',
    homepageLabelName: 'SPECTACLES',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'SPECTACLES',
  },
  SPECTACLE_REPRESENTATION: {
    appLabel: 'Spectacle, représentation',
    categoryId: 'SPECTACLE',
    homepageLabelName: 'SPECTACLES',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'SPECTACLES',
  },
  SPECTACLE_VENTE_DISTANCE: {
    appLabel: 'Spectacle vivant - vente à distance',
    categoryId: 'SPECTACLE',
    homepageLabelName: 'SPECTACLES',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'SPECTACLES',
  },
  SUPPORT_PHYSIQUE_FILM: {
    appLabel: 'Support physique (DVD, Blu-ray...)',
    categoryId: 'FILM',
    homepageLabelName: 'FILMS',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'FILMS_SERIES_CINEMA',
  },
  SUPPORT_PHYSIQUE_MUSIQUE: {
    appLabel: 'Support physique (CD, vinyle...)',
    categoryId: 'MUSIQUE_ENREGISTREE',
    homepageLabelName: 'MUSIQUE',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'CD_VINYLE_MUSIQUE_EN_LIGNE',
  },
  TELECHARGEMENT_LIVRE_AUDIO: {
    appLabel: 'Livre audio à télécharger',
    categoryId: 'LIVRE',
    homepageLabelName: 'PLATEFORME',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'PLATEFORMES_EN_LIGNE',
  },
  TELECHARGEMENT_MUSIQUE: {
    appLabel: 'Téléchargement de musique',
    categoryId: 'MUSIQUE_ENREGISTREE',
    homepageLabelName: 'MUSIQUE',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'CD_VINYLE_MUSIQUE_EN_LIGNE',
  },
  VISITE: {
    appLabel: 'Visite',
    categoryId: 'MUSEE',
    homepageLabelName: 'VISITES',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'MUSEES_VISITES_CULTURELLES',
  },
  VISITE_GUIDEE: {
    appLabel: 'Visite guidée',
    categoryId: 'MUSEE',
    homepageLabelName: 'VISITES',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'MUSEES_VISITES_CULTURELLES',
  },
  VISITE_VIRTUELLE: {
    appLabel: 'Visite virtuelle',
    categoryId: 'MUSEE',
    homepageLabelName: 'VISITES',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'MUSEES_VISITES_CULTURELLES',
  },
  VOD: {
    appLabel: 'Vidéo à la demande',
    categoryId: 'FILM',
    homepageLabelName: 'FILMS',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'FILMS_SERIES_CINEMA',
  },
}

export const useSearchGroupLabelMappingSnap = {
  ARTS_LOISIRS_CREATIFS: 'Arts & loisirs créatifs',
  BIBLIOTHEQUES_MEDIATHEQUE: 'Bibliothèques, Médiathèques',
  CARTES_JEUNES: 'Cartes jeunes',
  CD_VINYLE_MUSIQUE_EN_LIGNE: 'CD, vinyles, musique en ligne',
  CONCERTS_FESTIVALS: 'Concerts & festivals',
  RENCONTRES_CONFERENCES: 'Conférences & rencontres',
  EVENEMENTS_EN_LIGNE: 'Évènements en ligne',
  FILMS_SERIES_CINEMA: 'Films, séries, cinéma',
  INSTRUMENTS: 'Instruments de musique',
  JEUX_JEUX_VIDEOS: 'Jeux & jeux vidéos',
  LIVRES: 'Livres',
  MEDIA_PRESSE: 'Médias & presse',
  MUSEES_VISITES_CULTURELLES: 'Musées & visites culturelles',
  NONE: 'Toutes les catégories',
  PLATEFORMES_EN_LIGNE: 'Plateformes en ligne',
  SPECTACLES: 'Spectacles',
}

export const useCategoryHomeLabelMappingSnap = {
  ABO_BIBLIOTHEQUE: 'Livre',
  ABO_CONCERT: 'Concert',
  ABO_JEU_VIDEO: 'Jeux',
  ABO_LIVRE_NUMERIQUE: 'Livre',
  ABO_LUDOTHEQUE: 'Jeux',
  ABO_MEDIATHEQUE: 'Films',
  ABO_MUSEE: 'Musée',
  ABO_PLATEFORME_MUSIQUE: 'Musique',
  ABO_PLATEFORME_VIDEO: 'Films',
  ABO_PRATIQUE_ART: 'Beaux-Arts',
  ABO_PRESSE_EN_LIGNE: 'Médias',
  ABO_SPECTACLE: 'Spectacle',
  ACHAT_INSTRUMENT: 'Instrument',
  ACTIVATION_EVENT: null,
  ACTIVATION_THING: null,
  APP_CULTURELLE: 'Médias',
  ATELIER_PRATIQUE_ART: 'Beaux-Arts',
  AUTRE_SUPPORT_NUMERIQUE: 'Films',
  BON_ACHAT_INSTRUMENT: 'Instrument',
  CAPTATION_MUSIQUE: 'Musique',
  CARTE_CINE_ILLIMITE: 'Cinéma',
  CARTE_CINE_MULTISEANCES: 'Cinéma',
  CARTE_JEUNES: 'Carte jeunes',
  CARTE_MUSEE: 'Musée',
  CINE_PLEIN_AIR: 'Cinéma',
  CINE_VENTE_DISTANCE: 'Cinéma',
  CONCERT: 'Concert',
  CONCOURS: 'Jeux',
  CONFERENCE: 'Rencontres',
  DECOUVERTE_METIERS: 'Rencontres',
  ESCAPE_GAME: 'Jeux',
  EVENEMENT_CINE: 'Cinéma',
  EVENEMENT_JEU: 'Jeux',
  EVENEMENT_MUSIQUE: 'Concert',
  EVENEMENT_PATRIMOINE: 'Visites',
  FESTIVAL_ART_VISUEL: 'Festival',
  FESTIVAL_CINE: 'Cinéma',
  FESTIVAL_LIVRE: 'Livre',
  FESTIVAL_MUSIQUE: 'Festival',
  FESTIVAL_SPECTACLE: 'Spectacle',
  JEU_EN_LIGNE: 'Jeux',
  JEU_SUPPORT_PHYSIQUE: null,
  LIVESTREAM_EVENEMENT: 'Spectacle',
  LIVESTREAM_MUSIQUE: 'Musique',
  LIVESTREAM_PRATIQUE_ARTISTIQUE: 'Cours',
  LIVRE_AUDIO_PHYSIQUE: 'Livre',
  LIVRE_NUMERIQUE: 'Livre',
  LIVRE_PAPIER: 'Livre',
  LOCATION_INSTRUMENT: 'Instrument',
  MATERIEL_ART_CREATIF: 'Beaux-Arts',
  MUSEE_VENTE_DISTANCE: 'Musée',
  OEUVRE_ART: null,
  PARTITION: 'Instrument',
  PLATEFORME_PRATIQUE_ARTISTIQUE: 'Plateforme',
  PODCAST: 'Médias',
  PRATIQUE_ART_VENTE_DISTANCE: 'Beaux-Arts',
  RENCONTRE: 'Rencontres',
  RENCONTRE_EN_LIGNE: 'Rencontres',
  RENCONTRE_JEU: 'Jeux',
  SALON: 'Rencontres',
  SEANCE_CINE: 'Cinéma',
  SEANCE_ESSAI_PRATIQUE_ART: 'Beaux-Arts',
  SPECTACLE_ENREGISTRE: 'Spectacle',
  SPECTACLE_REPRESENTATION: 'Spectacle',
  SPECTACLE_VENTE_DISTANCE: 'Spectacle',
  SUPPORT_PHYSIQUE_FILM: 'Films',
  SUPPORT_PHYSIQUE_MUSIQUE: 'Musique',
  TELECHARGEMENT_LIVRE_AUDIO: 'Plateforme',
  TELECHARGEMENT_MUSIQUE: 'Musique',
  VISITE: 'Visites',
  VISITE_GUIDEE: 'Visites',
  VISITE_VIRTUELLE: 'Visites',
  VOD: 'Films',
}
