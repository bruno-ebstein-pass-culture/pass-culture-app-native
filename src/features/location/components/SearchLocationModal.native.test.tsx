import React from 'react'
import { Button } from 'react-native'

import { SearchLocationModal } from 'features/location/components/SearchLocationModal'
import { checkGeolocPermission, GeolocPermissionState, LocationWrapper } from 'libs/geolocation'
import { getPosition } from 'libs/geolocation/getPosition'
import { requestGeolocPermission } from 'libs/geolocation/requestGeolocPermission'
import { fireEvent, render, screen, waitForModalToHide, waitForModalToShow, act } from 'tests/utils'

const hideModalMock = jest.fn()
const showModalMock = jest.fn()

jest.unmock('libs/geolocation')

jest.mock('libs/geolocation/getPosition')
const getPositionMock = getPosition as jest.MockedFunction<typeof getPosition>

jest.mock('libs/geolocation/requestGeolocPermission')
const mockRequestGeolocPermission = requestGeolocPermission as jest.MockedFunction<
  typeof requestGeolocPermission
>

jest.mock('libs/geolocation/checkGeolocPermission')
const mockCheckGeolocPermission = checkGeolocPermission as jest.MockedFunction<
  typeof checkGeolocPermission
>
mockCheckGeolocPermission.mockResolvedValue(GeolocPermissionState.GRANTED)

describe('SearchLocationModal', () => {
  it('should render correctly if modal visible', async () => {
    renderSearchLocationModal()
    await waitForModalToShow()

    expect(screen).toMatchSnapshot()
  })

  it('should hide modal on close modal button press', async () => {
    renderSearchLocationModal()
    await waitForModalToShow()

    fireEvent.press(screen.getByLabelText('Fermer la modale'))

    expect(hideModalMock).toHaveBeenCalledTimes(1)
  })

  it('should highlight geolocation button if geolocation is enabled', async () => {
    getPositionMock.mockResolvedValueOnce({ latitude: 0, longitude: 0 })

    renderSearchLocationModal()
    await waitForModalToShow()

    expect(screen.getByText('Utiliser ma position actuelle')).toHaveStyle({ color: '#eb0055' })
  })

  it('should hide Géolocalisation désactivée if geolocation is enabled', async () => {
    getPositionMock.mockResolvedValueOnce({ latitude: 0, longitude: 0 })

    renderSearchLocationModal()
    await waitForModalToShow()

    expect(screen.queryByText('Géolocalisation désactivée')).toBeNull()
  })

  it('should request geolocation if geolocation is denied and the geolocation button pressed', async () => {
    mockCheckGeolocPermission.mockResolvedValueOnce(GeolocPermissionState.DENIED)

    renderSearchLocationModal()
    await waitForModalToShow()

    await act(async () => {
      fireEvent.press(screen.getByText('Utiliser ma position actuelle'))
    })
    expect(mockRequestGeolocPermission).toHaveBeenCalledTimes(1)
  })

  it('should show geolocation modal if geolocation is never_ask_again on closing the modal after a geolocation button press', async () => {
    mockCheckGeolocPermission.mockResolvedValueOnce(GeolocPermissionState.NEVER_ASK_AGAIN)
    hideModalMock.mockImplementationOnce(() => {
      // simulate the modal closing
      fireEvent.press(screen.getByText('Close'))
    })

    const Container = () => {
      const [visible, setVisible] = React.useState(true)
      return (
        <LocationWrapper>
          <React.Fragment>
            <SearchLocationModal
              visible={visible}
              dismissModal={hideModalMock}
              showVenueModal={showModalMock}
            />
            <Button title="Close" onPress={() => setVisible(false)} />
          </React.Fragment>
        </LocationWrapper>
      )
    }
    render(<Container />)
    await waitForModalToShow()

    fireEvent.press(screen.getByText('Utiliser ma position actuelle'))

    expect(hideModalMock).toHaveBeenCalledTimes(1)

    await waitForModalToHide()
    await waitForModalToShow()

    expect(screen.getByText('Paramètres de localisation')).toBeOnTheScreen()
  })
})

function renderSearchLocationModal() {
  render(
    <LocationWrapper>
      <SearchLocationModal visible dismissModal={hideModalMock} showVenueModal={showModalMock} />
    </LocationWrapper>
  )
}