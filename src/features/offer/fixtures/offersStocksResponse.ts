import type { ReadonlyDeep } from 'type-fest'

import { OffersStocksResponse } from 'api/gen'
import { toMutable } from 'shared/types/toMutable'

export const offersStocksResponseSnap = toMutable({
  offers: [
    {
      id: 2051,
      durationMinutes: 125,
      extraData: {
        allocineId: 5981,
        author: null,
        durationMinutes: null,
        ean: null,
        musicSubType: null,
        musicType: null,
        performer: null,
        showSubType: null,
        showType: null,
        stageDirector: 'David Lynch',
        speaker: null,
        visa: '74 823',
        releaseDate: '2011-05-25',
        cast: ['Nicolas Cage', 'Laura Dern', 'Willem Dafoe'],
        editeur: null,
        gtlLabels: null,
        genres: ['Comédie dramatique', 'Romance', 'Thriller'],
      },
      image: {
        url: 'https://storage.googleapis.com/passculture-metier-ehp-testing-assets-fine-grained/thumbs/mediations/AQBA',
        credit: null,
      },
      last30DaysBookings: null,
      name: 'Sailor et Lula',
      stocks: [
        {
          id: 10559,
          beginningDatetime: '2024-05-08T12:50:00Z',
          bookingLimitDatetime: '2024-05-08T12:50:00Z',
          cancellationLimitDatetime: '2024-05-01T08:35:31.652786Z',
          features: ['VO'],
          isBookable: true,
          isForbiddenToUnderage: false,
          isSoldOut: false,
          isExpired: false,
          price: 570,
          activationCode: null,
          priceCategoryLabel: 'Tarif unique',
          remainingQuantity: 1000,
        },
        {
          id: 10560,
          beginningDatetime: '2024-05-11T08:30:00Z',
          bookingLimitDatetime: '2024-05-11T08:30:00Z',
          cancellationLimitDatetime: '2024-05-01T08:35:31.652862Z',
          features: ['VO'],
          isBookable: true,
          isForbiddenToUnderage: false,
          isSoldOut: false,
          isExpired: false,
          price: 570,
          activationCode: null,
          priceCategoryLabel: 'Tarif unique',
          remainingQuantity: 1000,
        },
        {
          id: 10561,
          beginningDatetime: '2024-05-12T16:45:00Z',
          bookingLimitDatetime: '2024-05-12T16:45:00Z',
          cancellationLimitDatetime: '2024-05-01T08:35:31.652935Z',
          features: ['VO'],
          isBookable: true,
          isForbiddenToUnderage: false,
          isSoldOut: false,
          isExpired: false,
          price: 570,
          activationCode: null,
          priceCategoryLabel: 'Tarif unique',
          remainingQuantity: 1000,
        },
        {
          id: 10562,
          beginningDatetime: '2024-05-16T19:40:00Z',
          bookingLimitDatetime: '2024-05-16T19:40:00Z',
          cancellationLimitDatetime: '2024-05-01T08:35:31.653007Z',
          features: ['VO'],
          isBookable: true,
          isForbiddenToUnderage: false,
          isSoldOut: false,
          isExpired: false,
          price: 570,
          activationCode: null,
          priceCategoryLabel: 'Tarif unique',
          remainingQuantity: 1000,
        },
        {
          id: 10563,
          beginningDatetime: '2024-05-18T16:10:00Z',
          bookingLimitDatetime: '2024-05-18T16:10:00Z',
          cancellationLimitDatetime: '2024-05-01T08:35:31.653077Z',
          features: ['VO'],
          isBookable: true,
          isForbiddenToUnderage: false,
          isSoldOut: false,
          isExpired: false,
          price: 570,
          activationCode: null,
          priceCategoryLabel: 'Tarif unique',
          remainingQuantity: 1000,
        },
        {
          id: 10564,
          beginningDatetime: '2024-05-21T11:40:00Z',
          bookingLimitDatetime: '2024-05-21T11:40:00Z',
          cancellationLimitDatetime: '2024-05-01T08:35:31.653148Z',
          features: ['VO'],
          isBookable: true,
          isForbiddenToUnderage: false,
          isSoldOut: false,
          isExpired: false,
          price: 570,
          activationCode: null,
          priceCategoryLabel: 'Tarif unique',
          remainingQuantity: 1000,
        },
      ],
    },
    {
      id: 2054,
      durationMinutes: 103,
      extraData: {
        allocineId: 2659,
        author: null,
        durationMinutes: null,
        ean: null,
        musicSubType: null,
        musicType: null,
        performer: null,
        showSubType: null,
        showType: null,
        stageDirector: 'Joseph L. Mankiewicz',
        speaker: null,
        visa: '8825',
        releaseDate: '2016-12-07',
        cast: ['Jeanne Crain', 'Linda Darnell', 'Ann Sothern'],
        editeur: null,
        gtlLabels: null,
        genres: ['Comédie dramatique'],
      },
      image: {
        url: 'https://storage.googleapis.com/passculture-metier-ehp-testing-assets-fine-grained/thumbs/mediations/AQCA',
        credit: null,
      },
      last30DaysBookings: null,
      name: 'Chaînes conjugales',
      stocks: [
        {
          id: 10566,
          beginningDatetime: '2024-05-05T08:45:00Z',
          bookingLimitDatetime: '2024-05-05T08:45:00Z',
          cancellationLimitDatetime: '2024-05-01T08:35:31.653460Z',
          features: ['VO'],
          isBookable: true,
          isForbiddenToUnderage: false,
          isSoldOut: false,
          isExpired: false,
          price: 570,
          activationCode: null,
          priceCategoryLabel: 'Tarif unique',
          remainingQuantity: 1000,
        },
      ],
    },
    {
      id: 2055,
      durationMinutes: 135,
      extraData: {
        allocineId: 7401,
        author: null,
        durationMinutes: null,
        ean: null,
        musicSubType: null,
        musicType: null,
        performer: null,
        showSubType: null,
        showType: null,
        stageDirector: 'David Lynch',
        speaker: null,
        visa: '80321',
        releaseDate: '2017-05-31',
        cast: ['Sheryl Lee', 'Ray Wise', 'Mädchen Amick'],
        editeur: null,
        gtlLabels: null,
        genres: ['Policier', 'Fantastique', 'Thriller'],
      },
      image: {
        url: 'https://storage.googleapis.com/passculture-metier-ehp-testing-assets-fine-grained/thumbs/mediations/AQCQ',
        credit: null,
      },
      last30DaysBookings: null,
      name: 'Twin Peaks - Fire Walk With Me',
      stocks: [
        {
          id: 10570,
          beginningDatetime: '2024-05-16T12:00:00Z',
          bookingLimitDatetime: '2024-05-16T12:00:00Z',
          cancellationLimitDatetime: '2024-05-01T08:35:31.654236Z',
          features: ['VO'],
          isBookable: true,
          isForbiddenToUnderage: false,
          isSoldOut: false,
          isExpired: false,
          price: 570,
          activationCode: null,
          priceCategoryLabel: 'Tarif unique',
          remainingQuantity: 1000,
        },
        {
          id: 10571,
          beginningDatetime: '2024-05-17T17:00:00Z',
          bookingLimitDatetime: '2024-05-17T17:00:00Z',
          cancellationLimitDatetime: '2024-05-01T08:35:31.654318Z',
          features: ['VO'],
          isBookable: true,
          isForbiddenToUnderage: false,
          isSoldOut: false,
          isExpired: false,
          price: 570,
          activationCode: null,
          priceCategoryLabel: 'Tarif unique',
          remainingQuantity: 1000,
        },
        {
          id: 10572,
          beginningDatetime: '2024-05-19T19:30:00Z',
          bookingLimitDatetime: '2024-05-19T19:30:00Z',
          cancellationLimitDatetime: '2024-05-01T08:35:31.654391Z',
          features: ['VO'],
          isBookable: true,
          isForbiddenToUnderage: false,
          isSoldOut: false,
          isExpired: false,
          price: 570,
          activationCode: null,
          priceCategoryLabel: 'Tarif unique',
          remainingQuantity: 1000,
        },
        {
          id: 10567,
          beginningDatetime: '2024-05-09T11:45:00Z',
          bookingLimitDatetime: '2024-05-09T11:45:00Z',
          cancellationLimitDatetime: '2024-05-01T08:35:31.654462Z',
          features: ['VO'],
          isBookable: true,
          isForbiddenToUnderage: false,
          isSoldOut: false,
          isExpired: false,
          price: 570,
          activationCode: null,
          priceCategoryLabel: 'Tarif unique',
          remainingQuantity: 1000,
        },
        {
          id: 10568,
          beginningDatetime: '2024-05-13T14:30:00Z',
          bookingLimitDatetime: '2024-05-13T14:30:00Z',
          cancellationLimitDatetime: '2024-05-01T08:35:31.654534Z',
          features: ['VO'],
          isBookable: true,
          isForbiddenToUnderage: false,
          isSoldOut: false,
          isExpired: false,
          price: 570,
          activationCode: null,
          priceCategoryLabel: 'Tarif unique',
          remainingQuantity: 1000,
        },
        {
          id: 10569,
          beginningDatetime: '2024-05-14T19:00:00Z',
          bookingLimitDatetime: '2024-05-14T19:00:00Z',
          cancellationLimitDatetime: '2024-05-01T08:35:31.654652Z',
          features: ['VO'],
          isBookable: true,
          isForbiddenToUnderage: false,
          isSoldOut: false,
          isExpired: false,
          price: 570,
          activationCode: null,
          priceCategoryLabel: 'Tarif unique',
          remainingQuantity: 1000,
        },
      ],
    },
    {
      id: 2243,
      durationMinutes: 108,
      extraData: {
        allocineId: 42127,
        author: null,
        durationMinutes: null,
        ean: null,
        musicSubType: null,
        musicType: null,
        performer: null,
        showSubType: null,
        showType: null,
        stageDirector: 'Joseph L. Mankiewicz',
        speaker: null,
        visa: '12630',
        releaseDate: '2019-11-06',
        cast: ['James Mason', 'Danielle Darrieux', 'Michael Rennie'],
        editeur: null,
        gtlLabels: null,
        genres: ['Drame', 'Espionnage', 'Thriller'],
      },
      image: {
        url: 'https://storage.googleapis.com/passculture-metier-ehp-testing-assets-fine-grained/thumbs/mediations/AQDQ',
        credit: null,
      },
      last30DaysBookings: null,
      name: 'L’Affaire Cicéron',
      stocks: [
        {
          id: 11842,
          beginningDatetime: '2024-05-26T08:45:00Z',
          bookingLimitDatetime: '2024-05-26T08:45:00Z',
          cancellationLimitDatetime: '2024-05-01T08:35:31.675429Z',
          features: ['VO'],
          isBookable: true,
          isForbiddenToUnderage: false,
          isSoldOut: false,
          isExpired: false,
          price: 570,
          activationCode: null,
          priceCategoryLabel: 'Tarif unique',
          remainingQuantity: 1000,
        },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<OffersStocksResponse>)