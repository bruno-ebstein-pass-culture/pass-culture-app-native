import React, { FunctionComponent } from 'react'
import { View } from 'react-native'
import styled, { useTheme } from 'styled-components/native'

import { LocationWidget } from 'features/location/components/LocationWidget'
import { SearchLocationWidgetDesktopView } from 'features/location/components/SearchLocationWidgetDesktopView'
import { ScreenOrigin } from 'features/location/enums'
import { useFeatureFlag } from 'libs/firebase/firestore/featureFlags/useFeatureFlag'
import { RemoteStoreFeatureFlags } from 'libs/firebase/firestore/types'
import { InputLabel } from 'ui/components/InputLabel/InputLabel'
import { styledInputLabel } from 'ui/components/InputLabel/styledInputLabel'
import { getSpacing, Typo } from 'ui/theme'
import { getHeadingAttrs } from 'ui/theme/typographyAttrs/getHeadingAttrs'

type Props = {
  shouldDisplaySubtitle?: boolean
  searchInputID: string
}

export const SearchTitleAndWidget: FunctionComponent<Props> = ({
  shouldDisplaySubtitle = false,
  searchInputID,
}) => {
  const subtitle = 'Toutes les offres à portée de main'
  const enableAppLocation = useFeatureFlag(RemoteStoreFeatureFlags.WIP_ENABLE_APP_LOCATION)
  const { isDesktopViewport } = useTheme()
  const shouldDisplayMobileLocationWidget =
    enableAppLocation && shouldDisplaySubtitle && !isDesktopViewport
  const shouldDisplayDesktopLocationWidget = enableAppLocation && isDesktopViewport
  return (
    <TitleAndWidgetContainer>
      <TitleContainer testID="SearchHeaderTitleContainer">
        <TitleMainWrapper>
          <StyledTitleMainView {...getHeadingAttrs(1)}>
            <StyledTitleMainText htmlFor={searchInputID}>Rechercher</StyledTitleMainText>
          </StyledTitleMainView>
          {!!shouldDisplayDesktopLocationWidget && <SearchLocationWidgetDesktopView />}
        </TitleMainWrapper>
        {
          // eslint-disable-next-line local-rules/no-string-check-before-component
          shouldDisplaySubtitle && <CaptionSubtitle>{subtitle}</CaptionSubtitle>
        }
      </TitleContainer>
      <View testID="InsideLocationWidget">
        {!!shouldDisplayMobileLocationWidget && (
          <LocationWidget screenOrigin={ScreenOrigin.SEARCH} />
        )}
      </View>
    </TitleAndWidgetContainer>
  )
}

const StyledTitleMainText = styledInputLabel(InputLabel)(({ theme }) => ({
  ...theme.typography.title1,
}))

const CaptionSubtitle = styled(Typo.Caption)(({ theme }) => ({
  marginTop: getSpacing(1),
  color: theme.colors.greyDark,
}))

const TitleAndWidgetContainer = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
})

const TitleContainer = styled.View({
  flexShrink: 1,
  width: '100%',
})

const TitleMainWrapper = styled.View({
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
})

const StyledTitleMainView = styled.View({
  alignItems: 'center',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  maxWidth: '75%',
})
