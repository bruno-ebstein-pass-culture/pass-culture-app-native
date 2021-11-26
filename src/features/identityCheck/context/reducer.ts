import { IdentityCheckState, Action } from 'features/identityCheck/context/types'

export const initialIdentityCheckState: IdentityCheckState = {
  step: null,
  profile: {
    name: null,
    city: null,
    cityCode: null,
    postalCode: null,
    address: null,
    status: null,
  },
  identification: {
    done: false,
  },
  confirmation: {
    accepted: false,
  },
}

export const identityCheckReducer = (
  state: IdentityCheckState,
  action: Action
): IdentityCheckState => {
  switch (action.type) {
    case 'INIT':
      return initialIdentityCheckState
    case 'SET_STATE':
      return { ...initialIdentityCheckState, ...action.payload }
    case 'SET_STEP':
      return { ...state, step: action.payload }
    case 'SET_NAME':
      return { ...state, profile: { ...state.profile, name: action.payload } }
    case 'SET_CITY':
      return { ...state, profile: { ...state.profile, city: action.payload } }
    case 'SET_CITY_CODE':
      return { ...state, profile: { ...state.profile, cityCode: action.payload } }
    case 'SET_POSTAL_CODE':
      return { ...state, profile: { ...state.profile, postalCode: action.payload } }
    case 'SET_ADDRESS':
      return { ...state, profile: { ...state.profile, address: action.payload } }
    default:
      return state
  }
}
