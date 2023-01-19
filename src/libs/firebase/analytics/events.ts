// Event names can be up to 40 characters long, may only contain alphanumeric characters and underscores
export enum AnalyticsEvent {
  ACCEPT_NOTIFICATIONS = 'AcceptNotifications',
  ACCESS_EXTERNAL_OFFER = 'AccessExternalOffer',
  ACCOUNT_DELETION = 'AccountDeletion',
  ACCOUNT_REACTIVATION = 'AccountReactivation',
  ACTIVATE_GEOLOC_FROM_SEARCH_RESULTS = 'ActivateGeolocfromSearchResults',
  ALL_MODULES_SEEN = 'AllModulesSeen',
  ALL_TILES_SEEN = 'AllTilesSeen',
  BACK_TO_HOME_FROM_EDUCONNECT_ERROR = 'BackToHomeFromEduconnectError',
  BOOKING_CONFIRMATION = 'BookingConfirmation',
  BOOKING_DETAILS_SCROLLED_TO_BOTTOM = 'BookingDetailsScrolledToBottom',
  BOOKING_ERROR = 'BookingError',
  BOOKING_IMPOSSIBLE_IOS = 'BookingImpossibleiOS',
  BOOKING_OFFER_CONFIRM_DATES = 'BookOfferConfirmDates',
  BOOKING_PROCESS_START = 'BookingProcessStart',
  BOOKINGS_SCROLLED_TO_BOTTOM = 'BookingsScrolledToBottom',
  BUSINESS_BLOCK_CLICKED = 'BusinessBlockClicked',
  CAMPAIGN_TRACKER_ENABLED = 'CampaignTrackerEnabled',
  CANCEL_BOOKING = 'CancelBooking',
  CANCEL_SIGNUP = 'CancelSignup',
  CATEGORY_BLOCK_CLICKED = 'CategoryBlockClicked',
  CHANGE_SEARCH_LOCATION = 'ChangeSearchLocation',
  CHOOSE_EDUCONNECT_METHOD = 'ChooseEduConnectMethod',
  CHOOSE_UBBLE_METHOD = 'ChooseUbbleMethod',
  CLICK_BOOK_OFFER = 'ClickBookOffer',
  CLICK_SOCIAL_NETWORK = 'ClickSocialNetwork',
  CONFIRM_BOOKING_CANCELLATION = 'ConfirmBookingCancellation',
  CONSULT_ACCESSIBILITY_MODALITIES = 'ConsultAccessibilityModalities',
  CONSULT_APPLICATION_PROCESSING_MODAL = 'ConsultApplicationProcessingModal',
  CONSULT_ARTICLE_ACCOUNT_DELETION = 'ConsultArticleAccountDeletion',
  CONSULT_AUTHENTICATION_MODAL = 'ConsultAuthenticationModal',
  CONSULT_AVAILABLE_DATES = 'ConsultAvailableDates',
  CONSULT_DESCRIPTION_DETAILS = 'ConsultDescriptionDetails',
  CONSULT_DISCLAIMER_VALIDATION_MAIL = 'ConsultDisclaimerValidationMail',
  CONSULT_ERROR_APPLICATION_MODAL = 'ConsultErrorApplicationModal',
  CONSULT_FINISH_SUBSCRIPTION_MODAL = 'ConsultFinishSubscriptionModal',
  CONSULT_HOME = 'ConsultHome',
  CONSULT_ITINERARY = 'ConsultLocationItinerary',
  CONSULT_MODAL_BENEFICIARY_CEILINGS = 'ConsultModalBeneficiaryCeilings',
  CONSULT_MODAL_EXPIRED_GRANT = 'ConsultModalExpiredGrant',
  CONSULT_MODAL_NO_MORE_CREDIT = 'ConsultModalNoMoreCredit',
  CONSULT_OFFER = 'ConsultOffer',
  CONSULT_TUTORIAL = 'ConsultTutorial',
  CONSULT_VENUE = 'ConsultVenue',
  CONSULT_WHOLE_OFFER = 'ConsultWholeOffer',
  CONSULT_WITHDRAWAL_MODALITIES = 'ConsultWithdrawalModalities',
  CONTINUE_CGU = 'ContinueCGU',
  CONTINUE_IDENTITY_CHECK = 'ContinueIdentityCheck',
  CONTINUE_SET_BIRTHDAY = 'ContinueSetBirthday',
  CONTINUE_SET_EMAIL = 'ContinueSetEmail',
  CONTINUE_SET_PASSWORD = 'ContinueSetPassword',
  CONTINUE_SIGNUP = 'ContinueSignup',
  CULTURAL_SURVEY_SCROLLED_TO_BOTTOM = 'CulturalSurveyScrolledToBottom',
  DISCOVER_OFFERS = 'DiscoverOffers',
  DISMISS_NOTIFICATIONS = 'DismissNotifications',
  DISMISS_SHARE_APP = 'DismissShareApp',
  ERROR_SAVING_NEW_EMAIL = 'ErrorSavingNewMail',
  EXCLUSIVITY_BLOCK_CLICKED = 'ExclusivityBlockClicked',
  GO_TO_PARENTS_FAQ = 'GoToParentsFAQ',
  GO_TO_PROFIL = 'GoToProfil',
  HAS_ACCEPTED_ALL_COOKIES = 'HasAcceptedAllCookies',
  HAS_ACTIVATE_GEOLOC_FROM_TUTORIAL = 'HasActivateGeolocFromTutorial',
  HAS_ADDED_OFFER_TO_FAVORITES = 'HasAddedOfferToFavorites',
  HAS_APPLIED_FAVORITES_SORTING = 'HasAppliedFavoritesSorting',
  HAS_CHANGED_PASSWORD = 'HasChangedPassword',
  HAS_CLICKED_MISSING_CODE = 'HasClickedMissingCode',
  HAS_CORRECTED_EMAIL = 'HasCorrectedEmail',
  HAS_DISMISSED_APP_SHARING_MODAL = 'HasDismissedAppSharingModal',
  HAS_MADE_A_CHOICE_FOR_COOKIES = 'HasMadeAChoiceForCookies',
  HAS_OPENED_COOKIES_ACCORDION = 'HasOpenedCookiesAccordion',
  HAS_REFUSED_COOKIE = 'HasRefusedCookie',
  HAS_REQUESTED_CODE = 'HasRequestedCode',
  HAS_SHARED_APP = 'HasSharedApp',
  HAS_SKIPPED_CULTURAL_SURVEY = 'hasSkippedCulturalSurvey',
  HAS_SKIPPED_TUTORIAL = 'HasSkippedTutorial',
  HAS_STARTED_CULTURAL_SURVEY = 'hasStartedCulturalSurvey',
  HELP_CENTER_CONTACT_SIGNUP_CONFIRMATION_EMAIL_SENT = 'HelpCenterContactSignUpConfirmation',
  IDENTITY_CHECK_ABORT = 'IdentityCheckAbort',
  IDENTITY_CHECK_STEP = 'IdentityCheckStep',
  IDENTITY_CHECK_SUCCESS = 'IdentityCheckSuccess',
  LOCATION_TOGGLE = 'LocationToggle',
  LOGIN = 'Login',
  LOGOUT = 'Logout',
  MAIL_TO = 'MailTo',
  MODIFY_MAIL = 'ModifyMail',
  MODULE_DISPLAYED_ON_HOMEPAGE = 'ModuleDisplayedOnHomePage',
  NO_SEARCH_RESULT = 'NoSearchResult',
  NOTIFICATION_TOGGLE = 'NotificationToggle',
  OFFER_SEEN_DURATION = 'OfferSeenDuration',
  OPEN_DMS_FOREIGN_CITIZEN_URL = 'OpenDMSForeignCitizenURL',
  OPEN_DMS_FRENCH_CITIZEN_URL = 'OpenDMSFrenchCitizenURL',
  OPEN_EXTERNAL_URL = 'OpenExternalURL',
  OPEN_LOCATION_SETTINGS = 'OpenLocationSettings',
  OPEN_NOTIFICATION_SETTINGS = 'OpenNotificationSettings',
  PROFIL_SCROLLED_TO_BOTTOM = 'ProfilScrolledToBottom',
  PROFIL_SIGN_UP = 'ProfilSignUp',
  QUIT_AUTHENTICATION_METHOD_SELECTION = 'QuitAuthenticationMethodSelection',
  QUIT_AUTHENTICATION_MODAL = 'QuitAuthenticationModal',
  QUIT_FAVORITE_MODAL_FOR_SIGN_IN = 'QuitFavoriteModalForSignIn',
  QUIT_IDENTITY_CHECK = 'QuitIdentityCheck',
  RECOMMENDATION_MODULE_SEEN = 'RecommendationModuleSeen',
  REINITIALIZE_FILTERS = 'ReinitializeFilters',
  RESEND_EMAIL_RESET_PASSWORD_EXPIRED_LINK = 'ResendEmailResetPasswordExpiredLink',
  RESEND_EMAIL_SIGNUP_CONFIRMATION_EXPIRED_LINK = 'ResendEmailSignupConfirmationExpiredLink',
  SAVE_NEW_MAIL = 'SaveNewMail',
  SCREEN_VIEW = 'screen_view',
  PERFORM_SEARCH = 'PerformSearch',
  SEARCH_SCROLL_TO_PAGE = 'SearchScrollToPage',
  SEE_MORE_CLICKED = 'SeeMoreClicked',
  SEE_MY_BOOKING = 'SeeMyBooking',
  SELECT_AGE = 'SelectAge',
  SEND_ACTIVATION_MAIL_AGAIN = 'SendActivationMailAgain',
  SHARE = 'Share',
  SHARE_APP = 'ShareApp',
  SIGN_IN_FROM_AUTHENTICATION_MODAL = 'SignInFromAuthenticationModal',
  SIGN_IN_FROM_FAVORITE = 'SignInFromFavorite',
  SIGN_IN_FROM_OFFER = 'SignInFromOffer',
  SIGN_UP = 'SignUp',
  SIGN_UP_FROM_AUTHENTICATION_MODAL = 'SignUpFromAuthenticationModal',
  SIGN_UP_FROM_FAVORITE = 'SignUpFromFavorite',
  SIGN_UP_FROM_OFFER = 'SignUpFromOffer',
  SIGN_UP_TOO_YOUNG = 'SignUpTooYoung',
  PLAYLIST_HORIZONTAL_SCROLL = 'PlaylistHorizontalScroll',
  SIMILAR_OFFER_PLAYLIST_VERTICAL_SCROLL = 'SimilarOfferPlaylistVerticalScroll',
  START_DMS_TRANSMISSION = 'StartDMSTransmission',
  TRY_SELECT_DEPOSIT = 'TrySelectDeposit',
  USE_FILTER = 'UseFilter',
  USE_LANDING_CATEGORY = 'UseLandingCategory',
  VENUE_CONTACT = 'VenueContact',
  VENUE_SEE_ALL_OFFERS_CLICKED = 'VenueSeeAllOffersClicked',
  VENUE_SEE_MORE_CLICKED = 'VenueSeeMoreClicked',
}

const RESERVED_PREFIXES = ['firebase_', 'google_', 'ga_']

const FIREBASE_NAME_FORMAT = /^[a-zA-Z][0-9a-zA-Z_]+$/

/* Firebase event naming rules :
https://firebase.google.com/docs/reference/cpp/group/event-names#:~:text=Event%20names%20can%20be%20up,and%20should%20not%20be%20used */
export function validateAnalyticsEvent(eventName: string) {
  if (eventName.length > 40) {
    return false
  }
  for (const reservedKeyword of RESERVED_PREFIXES) {
    if (eventName.startsWith(reservedKeyword)) {
      return false
    }
  }
  if (!eventName.match(FIREBASE_NAME_FORMAT)) {
    return false
  }
  return true
}
