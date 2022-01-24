import { t } from '@lingui/macro'
import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components/native'

import { useSearch } from 'features/search/pages/SearchWrapper'
import { analytics } from 'libs/analytics'
import { useGeolocation } from 'libs/geolocation'
import { NoOfferDeprecated as NoOffer } from 'ui/svg/icons/NoOffer_deprecated'
import { getSpacing, Spacer, Typo } from 'ui/theme'
// eslint-disable-next-line no-restricted-imports
import { ColorsEnum } from 'ui/theme/colors'

export const NoSearchResult: React.FC = () => {
  const { position } = useGeolocation()
  const { searchState, dispatch } = useSearch()
  const { query } = searchState

  useEffect(() => {
    analytics.logNoSearchResult(query)
  }, [query])

  const handlePressAroundMe = useCallback(() => {
    dispatch({ type: 'INIT' })
    dispatch({ type: 'SET_QUERY', payload: '' })

    const actionType = position ? 'SET_LOCATION_AROUND_ME' : 'SET_LOCATION_EVERYWHERE'
    dispatch({ type: actionType })
  }, [!position])

  const errorMessage =
    query.length > 0 ? t`Pas de résultat trouvé pour` + ` "${query}"` : t`Pas de résultat trouvé.`

  return (
    <Container>
      <Spacer.Flex />
      <NoOffer size={156} />
      <MainTitle>{t`Oups\u00a0!`}</MainTitle>
      <DescriptionErrorTextContainer>
        <DescriptionErrorText aria-live="assertive">{errorMessage}</DescriptionErrorText>
      </DescriptionErrorTextContainer>
      <DescriptionErrorTextContainer>
        <DescriptionErrorText>
          {t`Modifie ta recherche ou découvre toutes les offres` + ' '}
        </DescriptionErrorText>
        <AroundMeText onPress={handlePressAroundMe}>{t`autour de toi`}</AroundMeText>
      </DescriptionErrorTextContainer>
      <Spacer.Flex />
    </Container>
  )
}

const Container = styled.View({
  flex: 1,
  minHeight: 250,
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: getSpacing(14.5),
})

const MainTitle = styled(Typo.Title4)({
  color: ColorsEnum.GREY_DARK,
  marginTop: getSpacing(2),
})

const DescriptionErrorText = styled(Typo.Body)({
  color: ColorsEnum.GREY_DARK,
})

const DescriptionErrorTextContainer = styled.Text({
  marginTop: getSpacing(6.5),
  textAlign: 'center',
})

const AroundMeText = styled(Typo.ButtonText)({
  color: ColorsEnum.PRIMARY,
})
