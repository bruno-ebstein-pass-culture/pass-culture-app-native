export interface Environment {
  ACCESSIBILITY_LINK: string
  ALGOLIA_APPLICATION_ID: string
  ALGOLIA_OFFERS_INDEX_NAME: string
  ALGOLIA_SEARCH_API_KEY: string
  ALGOLIA_VENUES_INDEX_NAME: string
  AMPLITUDE_API_KEY?: string
  ANDROID_APP_ID: string
  API_BASE_URL: string
  APPS_FLYER_DEV_KEY: string
  BATCH_API_KEY_WEB: string
  BATCH_AUTH_KEY: string
  BATCH_SUBDOMAIN: string
  BATCH_VAPID_PUBLIC_KEY: string
  CGU_LINK: string
  CONTENTFUL_ACCESS_TOKEN: string
  CONTENTFUL_ENVIRONMENT: string
  CONTENTFUL_SPACE_ID: string
  COOKIES_POLICY_LINK: string
  CULTURAL_SURVEY_TYPEFORM_ID: string
  DATA_PRIVACY_CHART_LINK: string
  DOC_CGU_URL: string
  DOC_PERSONAL_DATA_URL: string
  DSM_URL: string
  DMS_FRENCH_CITIZEN_URL: string
  DMS_FOREIGN_CITIZEN_URL: string
  EMAIL_PROVIDER_CUSTOM_DOMAIN: string
  ENABLE_WHY_DID_YOU_RENDER: boolean
  ENV: string
  FAQ_LINK: string
  FAQ_LINK_EDUCONNECT_URL: string
  FAQ_LINK_RESET_PASSORD_EMAIL_NOT_RECEIVED: string
  FAQ_LINK_SIGNUP_CONFIRMATION_EMAIL_NOT_RECEIVED: string
  FEATURE_FLIPPING_ONLY_VISIBLE_ON_TESTING: boolean
  FIREBASE_APIKEY: string
  FIREBASE_APPID: string
  FIREBASE_AUTHDOMAIN: string
  FIREBASE_DYNAMIC_LINK_DOMAIN: string
  FIREBASE_MESSAGINGSENDERID: string
  FIREBASE_PROJECTID: string
  FIREBASE_STORAGEBUCKET: string
  IOS_APP_ID: string
  IOS_APP_STORE_ID: string
  PRIVACY_POLICY_LINK: string
  PUBLIC_URL: string
  RECOMMENDATION_ENDPOINT: string
  RECOMMENDATION_TOKEN: string
  SENTRY_DSN: string
  SIGNIN_IDENTIFIER: string
  SIGNIN_PASSWORD: string
  SIGNUP_POSTAL_CODE: string
  SITE_KEY: string
  SUPPORT_EMAIL_ADDRESS: string
  TMX_FPSERVER: string
  TMX_ORGID: string
  URL_PREFIX: string
  WEBAPP_V2_DOMAIN: string
  // Below envs are injected by webpack and are defined only on the Webapp
  COMMIT_HASH: string
  BRANCH: string
  LAST_COMMIT_DATETIME: string
}
