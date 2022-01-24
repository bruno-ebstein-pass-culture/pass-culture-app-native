import * as React from 'react'
import Svg, { G, Path } from 'react-native-svg'

// eslint-disable-next-line no-restricted-imports
import { ColorsEnum } from 'ui/theme/colors'

import { IconInterface } from './types'

export function ProfileDeletionLight({
  size = 120,
  color = ColorsEnum.WHITE,
  testID,
}: IconInterface) {
  return (
    <Svg width={size} height={size} viewBox="0 0 121 120" testID={testID}>
      <G fill="none" fillRule="evenodd">
        <G fill={color} fillRule="nonzero">
          <Path
            d="M88.706 57.356c17.066 0 30.898 13.833 30.898 30.902 0 17.066-13.833 30.899-30.898 30.899-17.065 0-30.898-13.833-30.898-30.899 0-17.069 13.832-30.902 30.898-30.902zm0 4.5c-14.58 0-26.398 11.819-26.398 26.402 0 14.58 11.818 26.399 26.398 26.399s26.398-11.819 26.398-26.399c0-14.583-11.817-26.402-26.398-26.402zm-52.292-9.963l.082.002.547.005c6.91.117 13.52 2.146 19.222 5.813 1.045.673 1.348 2.065.676 3.11-.673 1.045-2.065 1.347-3.11.675-5.154-3.315-11.15-5.103-17.417-5.103-11.895 0-22.414 6.485-28.01 16.26-.025.041-.048.083-.072.124l.072-.124c-.228.397-.447.8-.658 1.209-.011.019-.02.038-.03.058l.03-.058c-.122.236-.241.473-.358.713l-.106.218.106-.218c-.393.809-.754 1.638-1.08 2.484l-.076.198.076-.198c-.11.283-.215.568-.316.855l-.074.21.074-.21c-.05.14-.098.281-.146.422l.072-.212c-.155.448-.3.901-.435 1.358-.018.057-.034.115-.051.172l.05-.172c-.203.686-.385 1.382-.543 2.088-.031.135-.06.271-.09.407-.05.242-.099.485-.145.728 8.043 8.943 19.449 14.16 31.712 14.16h.02l.742-.005c3.56-.063 7.052-.562 10.41-1.479 1.2-.327 2.437.38 2.764 1.578.327 1.199-.38 2.436-1.578 2.763-3.985 1.088-8.135 1.644-12.36 1.644-13.945 0-26.901-6.11-35.818-16.516-.216-.252-.37-.545-.458-.858l-.009-.034c-.01-.034-.018-.069-.025-.104l-.011-.058c-.007-.036-.013-.072-.018-.109l-.005-.041c-.005-.04-.008-.078-.01-.118-.002-.02-.003-.042-.003-.063-.002-.028-.002-.057-.002-.085 0-.033.001-.067.003-.1.003-.08.01-.159.023-.238.418-2.697 1.125-5.291 2.086-7.751 5.39-13.805 18.797-23.4 34.247-23.4zm60.83 24.285c.884-.757 2.216-.717 3.053.12.879.879.879 2.303 0 3.182l-8.592 8.592 8.592 8.593c.879.879.879 2.303 0 3.182-.837.837-2.169.877-3.053.12l-.129-.12-8.592-8.593-8.593 8.593-.13.12c-.883.757-2.215.717-3.052-.12-.879-.879-.879-2.303 0-3.182l8.593-8.593-8.593-8.592c-.879-.879-.879-2.303 0-3.182.837-.837 2.169-.877 3.053-.12l.129.12 8.593 8.592 8.592-8.592zM36.414.053c10.516 0 19.038 8.522 19.038 19.038v9.295c0 10.52-8.521 19.043-19.038 19.043-10.514 0-19.038-8.525-19.038-19.043v-9.295C17.376 8.577 25.901.053 36.414.053zm0 4.5c-8.028 0-14.538 6.51-14.538 14.538v9.295c0 8.033 6.51 14.543 14.538 14.543 8.031 0 14.538-6.508 14.538-14.543v-9.295c0-8.03-6.507-14.538-14.538-14.538z"
            transform="translate(-128 -152) translate(128.5 152)"
          />
        </G>
      </G>
    </Svg>
  )
}
