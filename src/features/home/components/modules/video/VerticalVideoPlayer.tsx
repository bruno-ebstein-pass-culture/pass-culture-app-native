import colorAlpha from 'color-alpha'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useWindowDimensions, AppState } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import YoutubePlayer, { YoutubeIframeRef } from 'react-native-youtube-iframe'
import styled, { useTheme } from 'styled-components/native'

import {
  getVideoPlayerDimensions,
  RATIO710,
} from 'features/home/components/helpers/getVideoPlayerDimensions'
import { ButtonWithCaption } from 'features/home/components/modules/video/ButtonWithCaption'
import { VerticalVideoEndView } from 'features/home/components/modules/video/VerticalVideoEndView'
import { IntersectionObserver } from 'shared/IntersectionObserver/IntersectionObserver'
import { theme } from 'theme'
import { PlayV2 } from 'ui/svg/icons/PlayV2'
import { getSpacing, Typo } from 'ui/theme'

const PLAYER_CONTROLS_HEIGHT = getSpacing(33)

interface VideoPlayerProps {
  videoSources: string[]
  playNextVideo: () => void
  currentIndex: number
  isPlaying: boolean
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
  hasFinishedPlaying: boolean
  setHasFinishedPlaying: React.Dispatch<React.SetStateAction<boolean>>
}

export const VerticalVideoPlayer: React.FC<VideoPlayerProps> = ({
  videoSources,
  currentIndex,
  playNextVideo,
  isPlaying,
  setIsPlaying,
  hasFinishedPlaying,
  setHasFinishedPlaying,
}) => {
  const [showErrorView, setShowErrorView] = useState(false)
  const { isDesktopViewport } = useTheme()
  const { width: windowWidth } = useWindowDimensions()
  const { playerHeight, playerWidth } = getVideoPlayerDimensions(
    isDesktopViewport,
    windowWidth,
    RATIO710
  )

  const playerRef = useRef<YoutubeIframeRef>(null)

  // Make sure the video stop playing when app is not in an active state (eg: background/inactive)
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (nextAppState !== 'active') {
        setIsPlaying(false)
      }
    })

    return () => {
      subscription.remove()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const playVideo = () => {
    setIsPlaying(true)
    setHasFinishedPlaying(false)
  }

  const pauseVideo = () => {
    setIsPlaying(false)
  }

  const replayVideo = () => {
    playerRef.current?.seekTo(0, false)
    setHasFinishedPlaying(false)
    setIsPlaying(true)
  }

  const intersectionObserverListener = (isInView: boolean) => {
    if (!isInView) pauseVideo()
  }

  const onChangeState = useCallback(
    (state: string) => {
      if (state === 'ended') {
        setHasFinishedPlaying(true)
        setIsPlaying(false)
        setIsPlaying(false)
      } else if (state === 'paused') {
        setIsPlaying(false)
      } else if (state === 'playing') {
        setIsPlaying(true)
      } else if (state === 'unstarted') {
        setIsPlaying(true)
      }
    },
    [setIsPlaying, setHasFinishedPlaying]
  )

  const PlayerCalque = () => {
    if (hasFinishedPlaying) {
      return (
        <VerticalVideoEndView
          style={{ height: playerHeight, width: windowWidth }}
          onPressReplay={replayVideo}
          onPressNext={playNextVideo}
        />
      )
    }
    return (
      <PressListener onPress={togglePlay}>
        <Calque
          style={{ height: playerHeight - PLAYER_CONTROLS_HEIGHT }}
          start={{ x: 0, y: 0.9 }}
          end={{ x: 0, y: 1 }}
          colors={[colorAlpha(theme.colors.black, 0.9), colorAlpha(theme.colors.black, 0)]}>
          <ButtonsContainer>
            <ButtonWithCaption
              onPress={togglePlay}
              accessibilityLabel="Continuer à regarder"
              wording="Continuer à regarder"
              icon={StyledPlayIcon}
            />
          </ButtonsContainer>
        </Calque>
      </PressListener>
    )
  }

  return (
    <IntersectionObserver
      onChange={(inView) => intersectionObserverListener(inView)}
      key="verticalVideoPlayer">
      <StyledVideoPlayerContainer style={{ height: playerHeight }}>
        <YoutubePlayer
          ref={playerRef}
          initialPlayerParams={{
            modestbranding: true,
            color: 'white',
            showClosedCaptions: false,
          }}
          height={playerHeight}
          width={playerWidth}
          play={isPlaying}
          onReady={playVideo}
          onError={() => setShowErrorView(true)}
          videoId={videoSources[currentIndex]}
          mute
          webViewProps={{
            injectedJavaScript: `
            var element = document.getElementsByClassName("container")[0];
            element.style.position = "unset";
            true;
          `,
            scrollEnabled: false,
          }}
          onChangeState={onChangeState}
        />
      </StyledVideoPlayerContainer>

      {isPlaying ? (
        <PressListener
          style={{ height: playerHeight - PLAYER_CONTROLS_HEIGHT }}
          onPress={togglePlay}
        />
      ) : (
        <React.Fragment>
          <PlayerCalque />
        </React.Fragment>
      )}

      {showErrorView ? (
        <ErrorView style={{ height: playerHeight }}>
          <Typo.Caption>Erreur player</Typo.Caption>
        </ErrorView>
      ) : null}
    </IntersectionObserver>
  )
}

const StyledVideoPlayerContainer = styled.View({
  backgroundColor: theme.colors.black,
  alignSelf: 'stretch',
})

const Calque = styled(LinearGradient)({
  position: 'absolute',
  left: -getSpacing(6),
  right: -getSpacing(6),
  top: 0,
  bottom: 0,
  alignItems: 'center',
  justifyContent: 'center',
})

const PressListener = styled.Pressable({
  position: 'absolute',
  left: -getSpacing(6),
  right: -getSpacing(6),
  top: 0,
  flexDirection: 'row',
})

const ButtonsContainer = styled.View({
  flexDirection: 'row',
  justifyContent: 'center',
})

const StyledPlayIcon = styled(PlayV2).attrs(({ theme }) => ({
  color: theme.colors.black,
  size: theme.icons.sizes.standard,
}))``

const ErrorView = styled.View({
  position: 'absolute',
  left: -getSpacing(6),
  right: -getSpacing(6),
  top: 0,
  bottom: 0,
  backgroundColor: theme.colors.black,
})
