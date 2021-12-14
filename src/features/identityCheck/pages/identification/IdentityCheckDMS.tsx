import { t } from '@lingui/macro'
import React from 'react'
import styled, { useTheme } from 'styled-components/native'

import { CenteredTitle } from 'features/identityCheck/atoms/CenteredTitle'
import { PageWithHeader } from 'features/identityCheck/components/layout/PageWithHeader'
import { openUrl } from 'features/navigation/helpers'
import { analytics } from 'libs/analytics'
import { env } from 'libs/environment'
import { ButtonTertiaryBlack } from 'ui/components/buttons/ButtonTertiaryBlack'
import { OrSeparator } from 'ui/components/OrSeparator'
import { BicolorIdCardWithMagnifyingGlass } from 'ui/svg/icons/BicolorIdCardWithMagnifyingGlass'
import { ExternalSite } from 'ui/svg/icons/ExternalSite'
import { ColorsEnum, getSpacing, Spacer, Typo } from 'ui/theme'

export const IdentityCheckDMS = () => {
  const theme = useTheme()

  const openDMSFrenchCitizenURL = () => {
    analytics.logOpenDMSFrenchCitizenURL()
    openUrl(env.DMS_FRENCH_CITIZEN_URL)
  }

  const openDMSForeignCitizenURL = () => {
    analytics.logOpenDMSForeignCitizenURL()
    openUrl(env.DMS_FOREIGN_CITIZEN_URL)
  }

  return (
    <PageWithHeader
      title={t`Identification`}
      fixedTopChildren={
        <Container>
          <Spacer.Column numberOfSpaces={5} />
          <BicolorIdCardWithMagnifyingGlass size={getSpacing(30)} />
          <Spacer.Column numberOfSpaces={5} />
          <CenteredTitle title={t`Créer un dossier sur le site des Démarches Simplifiées`} />
          <Spacer.Column numberOfSpaces={5} />
          <StyledBody>
            {t`La vérification de ton identité n’a pas pu aboutir. Tu peux créer un dossier sur le site des Démarches Simplifiées afin d’obtenir ton pass Cutlure.`}
          </StyledBody>
          {theme.isMobileViewport ? <Spacer.Flex /> : <Spacer.Column numberOfSpaces={5} />}
          <ChoicesContainer>
            <ButtonContainer>
              <CustomButtonTertiaryBlack
                title={t`Je suis de nationalité française`}
                onPress={openDMSFrenchCitizenURL}
                icon={ExternalSite}
              />
              <Typo.Caption color={ColorsEnum.GREY_DARK}>
                {t`Carte d’identité ou passeport.`}
              </Typo.Caption>
            </ButtonContainer>
            <OrSeparator />
            <ButtonContainer>
              <CustomButtonTertiaryBlack
                title={t`Je suis de nationalité étrangère`}
                onPress={openDMSForeignCitizenURL}
                icon={ExternalSite}
              />
              <Typo.Caption color={ColorsEnum.GREY_DARK}>
                {t`Titre de séjour, carte d'identité ou passeport.`}
              </Typo.Caption>
            </ButtonContainer>
          </ChoicesContainer>
          <Spacer.BottomScreen />
        </Container>
      }
    />
  )
}

const Container = styled.View({ height: '100%', alignItems: 'center' })
const StyledBody = styled(Typo.Body).attrs({
  color: ColorsEnum.GREY_DARK,
})({
  textAlign: 'center',
})
const ChoicesContainer = styled.View({ paddingVertical: getSpacing(10) })
const CustomButtonTertiaryBlack = styled(ButtonTertiaryBlack)({
  justifyContent: 'flex-start',
  paddingLeft: 0,
  paddingRight: 0,
})

const ButtonContainer = styled.View({
  alignItems: 'center',
})
