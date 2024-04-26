import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { useMutation } from 'react-query'

import { api } from 'api/api'
import { ApiError } from 'api/ApiError'
import { MaintenancePageType } from 'api/gen'
import { useGetStepperInfo } from 'features/identityCheck/api/useGetStepperInfo'
import { REDIRECT_URL_UBBLE } from 'features/identityCheck/constants'
import { UseNavigationType } from 'features/navigation/RootNavigator/types'
import { MutationKeys } from 'libs/queryKeys'

export function useIdentificationUrl() {
  const { data: subscription } = useGetStepperInfo()
  const [identificationUrl, setIdentificationUrl] = useState<string | undefined>()
  const { navigate } = useNavigation<UseNavigationType>()

  const { mutate: postIdentificationUrl } = useMutation(
    [MutationKeys.IDENTIFICATION_URL],
    async () => {
      try {
        const data = await api.postNativeV1UbbleIdentification({ redirectUrl: REDIRECT_URL_UBBLE })
        setIdentificationUrl(data.identificationUrl)
      } catch (err) {
        const error = (err as ApiError)?.content.code
        if (error === 'IDCHECK_ALREADY_PROCESSED') {
          navigate('IdentityCheckPending')
        } else {
          const withDMS = subscription?.maintenancePageType === MaintenancePageType['with-dms']
          navigate('IdentityCheckUnavailable', { withDMS })
        }
      }
    }
  )

  useEffect(() => {
    if (identificationUrl) return
    postIdentificationUrl()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return identificationUrl
}
