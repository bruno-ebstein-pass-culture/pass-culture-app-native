import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components/native'

import { CheatcodesHeader } from 'features/internal/cheatcodes/components/CheatcodesHeader'
import { LinkToComponent } from 'features/internal/cheatcodes/components/LinkToComponent'
import { UseNavigationType } from 'features/navigation/RootNavigator/types'
import { Spacer } from 'ui/theme'

export function NavigationTutorial(): React.JSX.Element {
  const { navigate } = useNavigation<UseNavigationType>()

  return (
    <ScrollView>
      <CheatcodesHeader title="Tutorial ❔" />
      <StyledContainer>
        <LinkToComponent
          title="Onboarding  🛶"
          onPress={() => navigate('CheatcodeNavigationOnboarding')}
        />
        <LinkToComponent
          title="ProfileTutorial 👤"
          onPress={() => navigate('CheatcodeNavigationProfileTutorial')}
        />
      </StyledContainer>
      <Spacer.BottomScreen />
    </ScrollView>
  )
}

const StyledContainer = styled.View({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
})
