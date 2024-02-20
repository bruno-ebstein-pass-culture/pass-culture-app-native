import { logEventAnalytics as actualLogEventAnalytics } from '../logEventAnalytics'

export const logEventAnalytics: typeof actualLogEventAnalytics = {
  logAcceptNotifications: jest.fn(),
  logAccountCreatedStartClicked: jest.fn(),
  logAccountDeletion: jest.fn(),
  logAccountReactivation: jest.fn(),
  logActivateGeolocfromSearchResults: jest.fn(),
  logAllModulesSeen: jest.fn(),
  logAllTilesSeen: jest.fn(),
  logBackToHomeFromEduconnectError: jest.fn(),
  logBookingConfirmation: jest.fn(),
  logBookingDetailsScrolledToBottom: jest.fn(),
  logBookingError: jest.fn(),
  logBookingImpossibleiOS: jest.fn(),
  logBookingOfferConfirmDates: jest.fn(),
  logBookingProcessStart: jest.fn(),
  logBookingsScrolledToBottom: jest.fn(),
  logBusinessBlockClicked: jest.fn(),
  logCampaignTrackerEnabled: jest.fn(),
  logCancelBooking: jest.fn(),
  logCancelBookingFunnel: jest.fn(),
  logCancelSignup: jest.fn(),
  logCategoryBlockClicked: jest.fn(),
  logCheckEduconnectDataClicked: jest.fn(),
  logChooseEduConnectMethod: jest.fn(),
  logChooseUbbleMethod: jest.fn(),
  logClickBookOffer: jest.fn(),
  logClickForceUpdate: jest.fn(),
  logClickSeeMore: jest.fn(),
  logClickSocialNetwork: jest.fn(),
  logComeBackLaterClicked: jest.fn(),
  logConfirmBookingCancellation: jest.fn(),
  logConnectWithEduconnectClicked: jest.fn(),
  logConsultAccessibility: jest.fn(),
  logConsultApplicationProcessingModal: jest.fn(),
  logConsultArticleAccountDeletion: jest.fn(),
  logConsultAuthenticationModal: jest.fn(),
  logConsultAvailableDates: jest.fn(),
  logConsultDescriptionDetails: jest.fn(),
  logConsultDisclaimerValidationMail: jest.fn(),
  logConsultErrorApplicationModal: jest.fn(),
  logConsultFinishSubscriptionModal: jest.fn(),
  logConsultHome: jest.fn(),
  logConsultItinerary: jest.fn(),
  logConsultModalBeneficiaryCeilings: jest.fn(),
  logConsultModalExpiredGrant: jest.fn(),
  logConsultOffer: jest.fn(),
  logConsultPracticalInformations: jest.fn(),
  logConsultTutorial: jest.fn(),
  logConsultVenue: jest.fn(),
  logConsultVenueOffers: jest.fn(),
  logConsultVideo: jest.fn(),
  logConsultWholeOffer: jest.fn(),
  logConsultWithdrawal: jest.fn(),
  logContactFraudTeam: jest.fn(),
  logContinueCGU: jest.fn(),
  logContinueIdentityCheck: jest.fn(),
  logContinueSignup: jest.fn(),
  logCopyAddress: jest.fn(),
  logCulturalSurveyScrolledToBottom: jest.fn(),
  logDiscoverOffers: jest.fn(),
  logDismissAccountSecurity: jest.fn(),
  logDismissNotifications: jest.fn(),
  logDismissShareApp: jest.fn(),
  logDisplayForcedLoginHelpMessage: jest.fn(),
  logEduconnectExplanationClicked: jest.fn(),
  logEmailConfirmationConsultEmailClicked: jest.fn(),
  logEmailValidated: jest.fn(),
  logErrorSavingNewEmail: jest.fn(),
  logExclusivityBlockClicked: jest.fn(),
  logFavoriteListButtonClicked: jest.fn(),
  logFavoriteListDisplayed: jest.fn(),
  logGoToProfil: jest.fn(),
  logGoToUbble: jest.fn(),
  logHasAcceptedAllCookies: jest.fn(),
  logHasActivateGeolocFromTutorial: jest.fn(),
  logHasAddedOfferToFavorites: jest.fn(),
  logHasAppliedFavoritesSorting: jest.fn(),
  logHasChangedPassword: jest.fn(),
  logHasClickedMissingCode: jest.fn(),
  logHasCorrectedEmail: jest.fn(),
  logHasDismissedAppSharingModal: jest.fn(),
  logHasDismissedModal: jest.fn(),
  logHasMadeAChoiceForCookies: jest.fn(),
  logHasOpenedCookiesAccordion: jest.fn(),
  logHasRefusedCookie: jest.fn(),
  logHasRequestedCode: jest.fn(),
  logHasSeenAllVideo: jest.fn(),
  logHasSharedApp: jest.fn(),
  logHasSkippedCulturalSurvey: jest.fn(),
  logHasSkippedTutorial: jest.fn(),
  logHasStartedCulturalSurvey: jest.fn(),
  logHelpCenterContactSignupConfirmationEmailSent: jest.fn(),
  logHighlightBlockClicked: jest.fn(),
  logIdentityCheckAbort: jest.fn(),
  logIdentityCheckStep: jest.fn(),
  logIdentityCheckSuccess: jest.fn(),
  logLocationToggle: jest.fn(),
  logLogin: jest.fn(),
  logLogout: jest.fn(),
  logMailTo: jest.fn(),
  logModifyMail: jest.fn(),
  logModuleDisplayed: jest.fn(),
  logModuleDisplayedOnHomepage: jest.fn(),
  logMultivenueOptionDisplayed: jest.fn(),
  logNoSearchResult: jest.fn(),
  logNotificationToggle: jest.fn(),
  logOfferSeenDuration: jest.fn(),
  logOnboardingAgeInformationClicked: jest.fn(),
  logOnboardingGeolocationClicked: jest.fn(),
  logOnboardingStarted: jest.fn(),
  logOpenApp: jest.fn(),
  logOpenDMSForeignCitizenURL: jest.fn(),
  logOpenDMSFrenchCitizenURL: jest.fn(),
  logOpenExternalUrl: jest.fn(),
  logOpenLocationSettings: jest.fn(),
  logOpenNotificationSettings: jest.fn(),
  logPerformSearch: jest.fn(),
  logPhoneNumberClicked: jest.fn(),
  logPhoneValidationCodeClicked: jest.fn(),
  logPlaylistHorizontalScroll: jest.fn(),
  logPlaylistVerticalScroll: jest.fn(),
  logProfilScrolledToBottom: jest.fn(),
  logProfilSignUp: jest.fn(),
  logQuitAuthenticationMethodSelection: jest.fn(),
  logQuitAuthenticationModal: jest.fn(),
  logQuitFavoriteModalForSignIn: jest.fn(),
  logQuitIdentityCheck: jest.fn(),
  logQuitSignup: jest.fn(),
  logReinitializeFilters: jest.fn(),
  logResendEmailResetPasswordExpiredLink: jest.fn(),
  logResendEmailSignupConfirmationExpiredLink: jest.fn(),
  logResendEmailValidation: jest.fn(),
  logSaveNewMail: jest.fn(),
  logScreenshot: jest.fn(),
  logScreenViewComeBackLater: jest.fn(),
  logScreenViewDMSIntroduction: jest.fn(),
  logScreenViewExpiredOrLostId: jest.fn(),
  logScreenViewIdentityCheckEnd: jest.fn(),
  logScreenViewIdentityCheckHonor: jest.fn(),
  logScreenViewIdentityFork: jest.fn(),
  logScreenViewSelectIdOrigin: jest.fn(),
  logScreenViewSelectIdStatus: jest.fn(),
  logScreenViewSetAddress: jest.fn(),
  logScreenViewSetCity: jest.fn(),
  logScreenViewSetEmail: jest.fn(),
  logScreenViewSetName: jest.fn(),
  logScreenViewSetPhoneNumber: jest.fn(),
  logScreenViewSetPhoneValidationCode: jest.fn(),
  logScreenViewSetStatus: jest.fn(),
  logSearchScrollToPage: jest.fn(),
  logSeeMyBooking: jest.fn(),
  logSelectAge: jest.fn(),
  logSelectIdStatusClicked: jest.fn(),
  logSendActivationMailAgain: jest.fn(),
  logSetAddressClicked: jest.fn(),
  logSetIdOriginClicked: jest.fn(),
  logSetNameClicked: jest.fn(),
  logSetPostalCodeClicked: jest.fn(),
  logSetStatusClicked: jest.fn(),
  logShare: jest.fn(),
  logShareApp: jest.fn(),
  logShowParentInformationModal: jest.fn(),
  logSignInFromAuthenticationModal: jest.fn(),
  logSignInFromFavorite: jest.fn(),
  logSignInFromOffer: jest.fn(),
  logSignUpClicked: jest.fn(),
  logSignUpFromAuthenticationModal: jest.fn(),
  logSignUpFromFavorite: jest.fn(),
  logSignUpFromOffer: jest.fn(),
  logSignUpTooYoung: jest.fn(),
  logStartDMSTransmission: jest.fn(),
  logStepperDisplayed: jest.fn(),
  logTrySelectDeposit: jest.fn(),
  logUserSetLocation: jest.fn(),
  logUserSetVenue: jest.fn(),
  logVenueContact: jest.fn(),
  logVenuePlaylistDisplayedOnSearchResults: jest.fn(),
  logVenueSeeAllOffersClicked: jest.fn(),
  logVenueSeeMoreClicked: jest.fn(),
}
