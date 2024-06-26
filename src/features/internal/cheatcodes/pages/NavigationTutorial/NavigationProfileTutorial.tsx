import React from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components/native'

import { CheatcodesHeader } from 'features/internal/cheatcodes/components/CheatcodesHeader'
import { LinkToComponent } from 'features/internal/cheatcodes/components/LinkToComponent'
import { TutorialTypes } from 'features/tutorial/enums'
import { Spacer } from 'ui/theme'

export function NavigationProfileTutorial(): React.JSX.Element {
  return (
    <ScrollView>
      <CheatcodesHeader title="Tutoriel profil" />
      <StyledContainer>
        <LinkToComponent
          name="AgeSelection"
          navigationParams={{ type: TutorialTypes.PROFILE_TUTORIAL }}
        />
        <LinkToComponent
          name="AgeSelectionOther"
          navigationParams={{ type: TutorialTypes.PROFILE_TUTORIAL }}
        />
        <LinkToComponent
          name="ProfileTutorialAgeInformation"
          title="Page 15 ans"
          navigationParams={{ age: 15 }}
        />
        <LinkToComponent
          name="ProfileTutorialAgeInformation"
          title="Page 16 ans"
          navigationParams={{ age: 16 }}
        />
        <LinkToComponent
          name="ProfileTutorialAgeInformation"
          title="Page 17 ans"
          navigationParams={{ age: 17 }}
        />
        <LinkToComponent
          name="ProfileTutorialAgeInformation"
          title="Page 18 ans"
          navigationParams={{ age: 18 }}
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
