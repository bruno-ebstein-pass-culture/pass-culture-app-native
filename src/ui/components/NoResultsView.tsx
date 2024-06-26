import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native'

import { getSearchStackConfig } from 'features/navigation/SearchStackNavigator/helpers'
import { useLogBeforeNavToSearchResults } from 'features/search/helpers/useLogBeforeNavToSearchResults/useLogBeforeNavToSearchResults'
import { ButtonPrimary } from 'ui/components/buttons/ButtonPrimary'
import { InternalTouchableLink } from 'ui/components/touchableLink/InternalTouchableLink'
import { MagnifyingGlass } from 'ui/svg/icons/MagnifyingGlass'
import { AccessibleIcon } from 'ui/svg/icons/types'
import { getSpacing, Spacer, Typo } from 'ui/theme'

type Props = {
  title: string
  explanations: string
  icon: FunctionComponent<AccessibleIcon>
  offline?: boolean
  trackingExplorerOffersFrom: 'bookings' | 'favorites'
}

export const NoResultsView = ({
  title,
  explanations,
  icon,
  offline = false,
  trackingExplorerOffersFrom,
}: Props) => {
  const onPressExploreOffers = useLogBeforeNavToSearchResults({ from: trackingExplorerOffersFrom })
  const searchNavConfig = getSearchStackConfig('SearchLanding')

  const Icon =
    !!icon &&
    styled(icon).attrs(({ theme }) => ({
      size: theme.illustrations.sizes.fullPage,
      color: theme.colors.greyMedium,
    }))``

  return (
    <Container>
      <CaptionTitle>{title}</CaptionTitle>
      <CenteredContainer>
        <Spacer.Flex />
        {Icon ? <Icon /> : null}
        <Spacer.Column numberOfSpaces={4} />
        <StyledBody>{explanations}</StyledBody>
        <Spacer.Column numberOfSpaces={4} />
        {offline ? null : (
          <ButtonContainer>
            <InternalTouchableLink
              as={ButtonPrimary}
              navigateTo={{ screen: searchNavConfig[0], params: searchNavConfig[1] }}
              wording="Découvrir le catalogue"
              onBeforeNavigate={onPressExploreOffers}
              buttonHeight="tall"
              icon={MagnifyingGlass}
            />
          </ButtonContainer>
        )}
        <Spacer.Flex />
      </CenteredContainer>
    </Container>
  )
}

const Container = styled.View(({ theme }) => ({
  flex: 1,
  marginBottom: theme.tabBar.height,
  marginHorizontal: theme.contentPage.marginHorizontal,
}))

const CaptionTitle = styled(Typo.Caption)(({ theme }) => ({
  color: theme.colors.greyDark,
}))

const CenteredContainer = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
})

const StyledBody = styled(Typo.Body)(({ theme }) => ({
  maxWidth: theme.contentPage.maxWidth,
  textAlign: 'center',
}))

const ButtonContainer = styled.View({
  marginTop: getSpacing(2),
})
