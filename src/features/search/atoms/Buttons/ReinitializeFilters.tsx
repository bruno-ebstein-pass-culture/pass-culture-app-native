import { t } from '@lingui/macro'
import React from 'react'
import styled from 'styled-components/native'

import { useStagedSearch } from 'features/search/pages/SearchWrapper'
import { useMaxPrice } from 'features/search/utils/useMaxPrice'
import { analytics } from 'libs/analytics'
import useFunctionOnce from 'libs/hooks/useFunctionOnce'
import { accessibilityAndTestId } from 'tests/utils'
import { Typo } from 'ui/theme'
// eslint-disable-next-line no-restricted-imports
import { ColorsEnum } from 'ui/theme/colors'
export const ReinitializeFilters = () => {
  const { dispatch } = useStagedSearch()
  const logReinitializeFilters = useFunctionOnce(() => {
    analytics.logReinitializeFilters()
  })
  const maxPrice = useMaxPrice()
  const reinitializeFilters = () => {
    dispatch({ type: 'INIT' })
    dispatch({
      type: 'SET_STATE',
      payload: {
        priceRange: [0, maxPrice],
      },
    })
    logReinitializeFilters()
  }

  return (
    <TouchableOpacity
      onPress={reinitializeFilters}
      {...accessibilityAndTestId(t`Réinitialiser les filtres`)}>
      <Typo.ButtonText color={ColorsEnum.WHITE}>{t`Réinitialiser`}</Typo.ButtonText>
    </TouchableOpacity>
  )
}

const TouchableOpacity = styled.TouchableOpacity.attrs(({ theme }) => ({
  activeOpacity: theme.activeOpacity,
}))``
