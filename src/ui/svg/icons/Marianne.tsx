import * as React from 'react'
import { Path } from 'react-native-svg'
import styled from 'styled-components/native'

import { AccessibleSvg } from 'ui/svg/AccessibleSvg'

import { AccessibleIcon } from './types'

const MarianneSvg: React.FunctionComponent<AccessibleIcon> = ({
  size,
  color,
  accessibilityLabel,
  testID,
}) => (
  <AccessibleSvg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    accessibilityLabel={accessibilityLabel}
    testID={testID}>
    <Path
      fill={color}
      d="M39.9001 0.00388044C39.9111 0.0118804 39.9391 -0.0151196 39.9371 0.0228804C39.9351 0.0718805 39.9371 0.12188 39.9371 0.17088C39.9371 13.3909 39.9371 26.6109 39.9401 39.8309C39.9401 39.9699 39.9091 40.0009 39.7701 40.0009C26.5141 39.9969 13.2581 39.9979 0.00309375 39.9979C0.00309375 39.3439 0.00309375 38.6909 0.00309375 38.0369C0.170094 37.8929 0.335094 37.7449 0.505094 37.6039C1.68109 36.6279 2.99209 35.8659 4.35509 35.1899C5.88909 34.4289 7.43409 33.6889 8.96809 32.9289C9.57409 32.6289 10.1861 32.3239 10.6831 31.8589C11.2491 31.3289 11.7751 30.7569 12.2901 30.1769C13.1331 29.2269 13.9931 28.2959 15.0161 27.5339C15.1061 27.4669 15.1481 27.3819 15.1501 27.2609C15.0281 27.2879 14.9461 27.3639 14.8561 27.4249C14.7181 27.5169 14.5831 27.6139 14.4431 27.7029C14.3991 27.7309 14.3351 27.7619 14.2971 27.6959C14.2641 27.6379 14.3211 27.6089 14.3591 27.5799C14.5111 27.4649 14.6671 27.3539 14.8151 27.2349C14.8591 27.1999 14.9441 27.1899 14.9101 27.0869C14.8771 26.9869 14.8181 26.9609 14.7251 26.9579C14.3961 26.9449 14.0921 27.0259 13.8061 27.1839C13.4751 27.3669 13.1871 27.6069 12.9101 27.8609C12.8421 27.9239 12.7631 27.9819 12.6811 27.9329C12.5211 27.8369 12.3901 27.9079 12.2501 27.9699C11.7391 28.1949 11.3051 28.5419 10.8511 28.8569C10.3251 29.2229 10.3211 29.2189 9.81509 29.3089C9.67309 29.3339 9.53809 29.4089 9.40709 29.4759C8.91909 29.7259 8.39609 29.8339 7.85509 29.8009C7.26609 29.7659 6.68809 29.8219 6.11409 29.9379C5.39909 30.0819 4.67209 30.1809 3.99709 30.4829C3.73809 30.5989 3.48309 30.7139 3.30809 30.9549C3.24009 31.0489 3.14909 31.1289 3.04409 31.1839C2.48809 31.4749 2.07409 31.9489 1.58309 32.3249C1.32609 32.5219 1.10809 32.7709 0.872094 32.9959C0.807094 33.0579 0.741094 33.1209 0.628094 33.0749C0.813094 32.7459 1.01709 32.4399 1.22709 32.1369C1.25609 32.0959 1.32809 32.0489 1.27009 31.9969C1.18909 31.9249 1.25109 31.8959 1.29409 31.8569C1.49109 31.6799 1.69009 31.4979 1.92509 31.3789C2.13009 31.2749 2.20609 31.0999 2.28709 30.9149C2.30309 30.8789 2.31209 30.8409 2.27809 30.8139C2.25009 30.7919 2.22009 30.8159 2.19509 30.8319C2.06509 30.9139 1.93909 31.0009 1.84409 31.1269C1.77409 31.2199 1.70509 31.3159 1.60109 31.3759C1.51609 31.4249 1.40809 31.4509 1.34209 31.3889C1.28209 31.3329 1.37509 31.2579 1.40609 31.1979C1.49109 31.0349 1.65409 30.8789 1.66109 30.7149C1.67209 30.4659 1.84409 30.3959 1.98509 30.2819C2.07009 30.2129 2.17409 30.1679 2.26909 30.1119C2.43609 30.0139 2.60409 29.9169 2.78209 29.8129C2.69009 29.7609 2.63009 29.8079 2.57209 29.8329C2.34709 29.9309 2.13009 30.0459 1.92209 30.1779C1.86509 30.2139 1.80509 30.2459 1.74209 30.2699C1.69209 30.2879 1.64709 30.2619 1.61009 30.2239C1.58309 30.1949 1.59009 30.1679 1.61309 30.1429C1.72409 30.0269 1.86809 29.8719 1.99609 29.8819C2.16109 29.8959 2.24109 29.8129 2.34109 29.7449C3.27209 29.1069 4.33109 28.8319 5.42109 28.6419C6.39009 28.4739 7.37009 28.3749 8.33009 28.1579C8.86509 28.0369 9.37209 27.8729 9.83609 27.5489C10.1821 27.3069 10.5261 27.0569 10.8781 26.8219C11.3691 26.4929 11.7221 26.0369 11.9091 25.4649C11.9311 25.3969 11.9571 25.3209 11.8901 25.2799C11.8161 25.2339 11.7901 25.3279 11.7531 25.3659C11.4631 25.6599 11.1661 25.9459 10.8411 26.2009C9.99509 26.8659 9.10409 27.4519 8.05109 27.7389C7.23909 27.9609 6.39909 27.9789 5.56609 28.0489C5.34009 28.0679 5.11409 28.0899 4.88109 28.1119C4.90409 28.0499 4.94809 28.0199 4.98509 28.0219C5.12109 28.0309 5.16809 27.9529 5.21309 27.8409C5.25209 27.7439 5.34109 27.6389 5.43509 27.6369C5.65009 27.6319 5.77609 27.4279 6.02409 27.4569C5.89709 27.3129 5.78609 27.3329 5.67109 27.3679C5.53109 27.4099 5.39509 27.4799 5.24209 27.4609C5.20709 27.4569 5.16609 27.4509 5.14109 27.4299C5.11009 27.4039 5.24609 27.0489 5.28409 27.0569C5.50009 27.1009 5.57409 26.9529 5.66109 26.8059C5.68609 26.7629 5.74909 26.7419 5.79709 26.7149C6.24109 26.4649 6.68509 26.2139 7.13009 25.9659C7.53509 25.7409 7.94209 25.5189 8.37409 25.2819C8.25209 25.2549 8.19109 25.3269 8.11509 25.3379C8.06409 25.3449 7.97509 25.3899 7.96909 25.3039C7.96509 25.2449 7.93909 25.1499 8.06109 25.1169C8.60909 24.9679 9.10309 24.6869 9.61709 24.4549C9.70509 24.4149 9.80709 24.3989 9.90709 24.2999C9.69809 24.3349 9.52009 24.4279 9.34409 24.2979C9.40309 24.2209 9.47209 24.1609 9.55109 24.1379C9.65509 24.1079 9.69409 24.0649 9.70109 23.9499C9.70909 23.8109 9.74609 23.6659 9.94209 23.6659C9.97909 23.6659 10.0401 23.6509 10.0471 23.5879C10.0011 23.5599 9.91709 23.5989 9.90909 23.5269C9.90509 23.4939 9.95909 23.4489 9.99509 23.4169C10.1271 23.2999 10.2911 23.2489 10.4571 23.1989C10.5391 23.1739 10.6381 23.1919 10.7101 23.1149C10.6851 23.0999 10.6701 23.0859 10.6531 23.0819C10.3951 23.0259 10.3201 22.8239 10.4751 22.6009C10.5811 22.4479 10.6631 22.2839 10.7131 22.1049C10.7891 21.8329 10.8621 21.5589 10.9311 21.2849C10.9421 21.2429 11.0121 21.1919 10.9231 21.1469C10.8541 21.1109 10.8091 21.1149 10.7511 21.1739C10.4061 21.5219 9.98109 21.7409 9.52909 21.9089C8.94109 22.1269 8.33909 22.2789 7.71509 22.3639C7.28409 22.4229 6.89409 22.3679 6.58209 22.0699C6.08009 21.5909 5.48009 21.2869 4.84309 21.0569C3.27909 20.4919 1.65909 20.2349 -0.00290625 20.2439C-0.00290625 20.1949 -0.00290625 20.1449 -0.00290625 20.0959C1.48109 19.7649 2.92209 19.2669 4.42309 18.9739C4.27709 18.9739 4.13609 18.9639 3.99709 18.9759C2.94709 19.0639 1.92709 19.3029 0.916094 19.5919C0.611094 19.6789 0.317094 19.8079 -0.00390625 19.8379C-0.00390625 19.5669 -0.00390625 19.2949 -0.00390625 19.0239C0.105094 19.0109 0.176094 18.9299 0.263094 18.8769C0.858094 18.5179 1.52409 18.4629 2.18709 18.4689C3.80909 18.4849 5.40809 18.7019 6.98809 19.0729C7.24009 19.1319 7.41409 19.2409 7.53109 19.4609C7.60809 19.6049 7.72409 19.6959 7.88809 19.7239C8.23309 19.7819 8.59509 19.7419 8.93509 19.9429C8.92509 19.8729 8.92109 19.8439 8.91609 19.8139C8.87309 19.5519 8.97409 19.4409 9.23809 19.4679C9.32909 19.4769 9.42009 19.4989 9.50909 19.5199C9.65509 19.5539 9.78409 19.5279 9.86609 19.3969C9.94409 19.2719 9.90009 19.1489 9.82409 19.0349C9.69309 18.8389 9.52009 18.6799 9.36009 18.5099C9.26709 18.4119 9.18109 18.3069 9.09409 18.2039C9.05809 18.1609 9.05509 18.1059 9.09509 18.0689C9.14009 18.0269 9.17509 18.0829 9.20109 18.1079C9.34909 18.2469 9.49409 18.3899 9.63909 18.5319C9.91609 18.8039 10.2011 19.0669 10.5461 19.2529C10.7941 19.3869 11.0611 19.4549 11.3401 19.4669C11.6291 19.4789 11.6931 19.3789 11.5601 19.1279C11.4851 18.9869 11.4021 18.8499 11.3121 18.7179C11.0151 18.2849 10.6461 17.9119 10.3071 17.5139C10.2151 17.4059 10.1141 17.3049 10.1471 17.1429C10.1531 17.1159 10.1561 17.0769 10.1181 17.0649C9.96109 17.0159 9.94009 16.8959 9.95009 16.7569C9.95309 16.7129 9.93309 16.6809 9.90309 16.6439C9.69109 16.3799 9.57209 16.0649 9.53509 15.7399C9.49109 15.3549 9.43109 14.9779 9.34709 14.5979C9.11009 13.5289 8.93009 12.4479 8.69409 11.3789C8.50009 10.5009 8.63909 9.69488 9.08509 8.92788C9.38209 8.41788 9.67209 7.90288 9.97109 7.39488C10.3991 6.66788 10.8891 5.99288 11.6141 5.52788C11.6651 5.49488 11.6851 5.44788 11.7031 5.39388C12.0571 4.37788 12.6801 3.54788 13.5021 2.87388C14.3001 2.21988 15.1601 1.66388 15.9061 0.95888C16.3321 0.55688 16.8531 0.28188 17.3661 0.00288044C19.8531 0.00288044 22.3411 0.00288044 24.8281 0.00288044C24.9141 0.0648805 25.0171 0.0328804 25.1111 0.0488805C26.5381 0.29388 27.9051 0.71788 29.1791 1.41488C29.8091 1.75988 30.4691 2.05088 31.0711 2.44588C31.4541 2.69688 31.7571 3.02388 31.9461 3.44688C32.0121 3.59388 32.0671 3.75288 32.0201 3.91288C31.9471 4.15988 31.8591 4.40288 31.7671 4.64388C31.6981 4.82588 31.5611 4.93988 31.3751 5.00688C31.0921 5.10788 30.8011 5.14188 30.5041 5.11988C30.1971 5.09688 29.8901 5.06488 29.5601 5.03388C29.5911 5.05688 29.5991 5.06488 29.6091 5.06888C30.4201 5.40188 31.1801 5.81488 31.7261 6.52588C31.9031 6.75588 32.0921 6.89188 32.3841 6.88788C32.4961 6.88588 32.5431 7.00488 32.4741 7.09688C32.4491 7.13088 32.4101 7.15388 32.3811 7.18588C32.3131 7.26188 32.2411 7.36688 32.3241 7.44288C32.4001 7.51288 32.5241 7.48688 32.6061 7.39988C32.6521 7.35088 32.6911 7.29488 32.7251 7.23688C32.7711 7.15788 32.8051 7.06988 32.8531 6.99188C32.9361 6.85588 33.0541 6.81788 33.2011 6.88788C33.5741 7.06588 33.6711 7.64788 33.3681 7.92588C33.2051 8.07588 33.0331 8.21688 32.8591 8.35288C32.6171 8.54288 32.5781 8.73988 32.7421 9.00288C32.8171 9.12288 32.8821 9.24888 32.9231 9.38488C33.2111 10.3439 33.5411 11.2909 33.7491 12.2729C33.9061 13.0119 34.0101 13.7599 33.8361 14.5069C33.6941 15.1159 33.8441 15.6469 34.1491 16.1629C34.5791 16.8889 35.1001 17.5529 35.5481 18.2679C35.7211 18.5439 35.9301 18.7979 36.0321 19.1139C36.1721 19.5499 36.1381 20.1019 35.4401 20.2629C35.2251 20.3119 35.0081 20.3589 34.8031 20.4469C34.5801 20.5429 34.4921 20.6789 34.4991 20.9209C34.5071 21.1779 34.6391 21.3889 34.7621 21.6009C34.9481 21.9209 34.9151 22.1519 34.6451 22.4079C34.5371 22.5099 34.4131 22.5899 34.2831 22.6609C34.1841 22.7149 34.0831 22.7649 33.9791 22.8199C34.0851 22.9279 34.0851 22.9299 34.2561 22.9809C34.3501 23.0089 34.4161 23.0499 34.4441 23.1579C34.4681 23.2509 34.5271 23.3359 34.5731 23.4219C34.7251 23.7049 34.6991 23.8589 34.4561 24.0689C34.3211 24.1859 34.1751 24.2899 34.0451 24.4119C33.8521 24.5909 33.8091 24.7829 33.9351 24.9909C34.1161 25.2909 34.1381 25.6039 34.0621 25.9339C33.9451 26.4409 33.7931 26.9249 33.2911 27.1979C32.8191 27.4539 32.3191 27.5589 31.7811 27.5179C31.5601 27.5009 31.3791 27.3689 31.1631 27.3499C30.7891 27.3179 30.4211 27.2429 30.0521 27.1759C29.3741 27.0529 28.6981 26.9009 28.0071 26.9149C27.6101 26.9229 27.2051 26.9989 26.8821 27.2639C25.3181 28.5459 24.5771 30.1989 24.6851 32.2239C24.7041 32.5749 24.7701 32.9199 24.9041 33.2489C24.9651 33.3979 25.0591 33.5009 25.2151 33.5659C26.3131 34.0279 27.4091 34.4919 28.5021 34.9649C29.7301 35.4959 30.9801 35.9839 32.1501 36.6379C33.5431 37.4179 34.7031 38.4549 35.4941 39.8649C35.5521 39.9679 35.6221 39.9589 35.7061 39.9589C37.0241 39.9589 38.3411 39.9589 39.6591 39.9589C39.9001 39.9589 39.9001 39.9589 39.9001 39.7169C39.9001 26.4799 39.9001 13.2419 39.9001 0.00388044ZM30.5381 16.7979C30.9301 16.8899 31.3271 16.8959 31.7241 16.8199C31.9731 16.7719 32.0761 16.6799 32.0311 16.4499C31.9691 16.1349 32.1291 15.8249 32.0211 15.5159C32.0051 15.4699 32.0551 15.4409 32.0811 15.4089C32.2051 15.2559 32.3281 15.1179 32.5471 15.0789C32.7541 15.0419 32.7861 14.9369 32.6701 14.8189C32.5131 14.6599 32.5131 14.6599 32.6931 14.5189C32.9041 14.3519 33.0851 14.1619 33.1521 13.8909C33.2081 13.6649 33.1281 13.5199 32.9091 13.4559C32.8091 13.4269 32.7071 13.4069 32.6051 13.3859C32.3081 13.3259 32.0261 13.1939 31.7051 13.2559C31.2371 13.3469 30.7721 13.4339 30.3141 13.5809C29.8941 13.7159 29.5171 13.9109 29.1251 14.1699C29.5511 14.0139 29.9591 13.9259 30.3671 13.8519C30.9031 13.7549 31.4421 13.7859 31.9711 13.9269C32.1521 13.9759 32.1741 14.0399 32.0761 14.2049C31.9761 14.3749 31.8191 14.4839 31.6591 14.5879C31.3921 14.7619 31.1041 14.9079 30.8941 15.1589C30.8761 15.1809 30.8421 15.2099 30.8201 15.2069C30.6001 15.1769 30.5541 15.3379 30.5031 15.4919C30.4631 15.6119 30.4051 15.6769 30.2591 15.6399C30.1031 15.6009 29.9551 15.6579 29.7971 15.7189C30.0471 15.9599 30.3111 16.1119 30.6501 16.0829C30.7731 16.0719 30.8441 16.1339 30.8981 16.2339C30.9171 16.2689 30.9071 16.3499 30.9891 16.3069C31.1691 16.2109 31.1881 16.3199 31.1881 16.4599C31.1881 16.6469 31.1001 16.7509 30.9051 16.7749C30.7821 16.7889 30.6601 16.7899 30.5381 16.7979Z"
    />
    <Path
      fill="#E0000F"
      d="M40.0009 0.00390625C40.0009 13.2419 39.9709 26.4619 39.9709 39.6999C39.9709 39.9419 40.0119 39.9999 39.7709 39.9999C38.4529 39.9999 36.9889 39.9999 35.6709 39.9999C35.5869 39.9999 35.5529 39.9679 35.4949 39.8649C34.7039 38.4549 33.5439 37.4179 32.1509 36.6379C30.9809 35.9829 29.7309 35.4959 28.5029 34.9649C27.4099 34.4919 26.3139 34.0269 25.2159 33.5659C25.0599 33.5009 24.9659 33.3979 24.9049 33.2489C24.7709 32.9199 24.7049 32.5749 24.6859 32.2239C24.5789 30.1989 25.3189 28.5459 26.8829 27.2639C27.2059 26.9989 27.6109 26.9229 28.0079 26.9149C28.6989 26.9009 29.3759 27.0529 30.0529 27.1759C30.4219 27.2429 30.7899 27.3179 31.1639 27.3499C31.3799 27.3689 31.5609 27.5009 31.7819 27.5179C32.3199 27.5589 32.8199 27.4539 33.2919 27.1979C33.7939 26.9259 33.9459 26.4409 34.0629 25.9339C34.1389 25.6039 34.1169 25.2909 33.9359 24.9909C33.8109 24.7829 33.8529 24.5909 34.0459 24.4119C34.1769 24.2909 34.3219 24.1859 34.4569 24.0689C34.6999 23.8589 34.7249 23.7049 34.5739 23.4219C34.5279 23.3349 34.4689 23.2509 34.4449 23.1579C34.4169 23.0509 34.3509 23.0089 34.2569 22.9809C34.0859 22.9299 34.0859 22.9279 33.9799 22.8199C34.0839 22.7659 34.1849 22.7149 34.2839 22.6609C34.4139 22.5909 34.5379 22.5109 34.6459 22.4079C34.9169 22.1519 34.9489 21.9209 34.7629 21.6009C34.6399 21.3879 34.5079 21.1779 34.4999 20.9209C34.4929 20.6799 34.5809 20.5429 34.8039 20.4469C35.0089 20.3589 35.2259 20.3119 35.4409 20.2629C36.1389 20.1029 36.1719 19.5499 36.0329 19.1139C35.9319 18.7979 35.7219 18.5439 35.5489 18.2679C35.1019 17.5539 34.5799 16.8889 34.1499 16.1629C33.8449 15.6469 33.6949 15.1159 33.8369 14.5069C34.0109 13.7599 33.9059 13.0119 33.7499 12.2729C33.5419 11.2909 33.2119 10.3439 32.9239 9.38491C32.8829 9.24891 32.8179 9.12291 32.7429 9.00291C32.5779 8.73991 32.6179 8.54291 32.8599 8.35291C33.0339 8.21591 33.2059 8.07491 33.3689 7.92591C33.6719 7.64791 33.5749 7.06591 33.2019 6.88791C33.0549 6.81791 32.9369 6.85591 32.8539 6.99191C32.8059 7.06991 32.7729 7.15791 32.7259 7.23691C32.6919 7.29491 32.6519 7.35091 32.6069 7.39991C32.5259 7.48691 32.4019 7.51291 32.3249 7.44291C32.2419 7.36591 32.3139 7.26191 32.3819 7.18591C32.4109 7.15391 32.4499 7.13091 32.4749 7.09691C32.5439 7.00491 32.4969 6.88591 32.3849 6.88791C32.0929 6.89291 31.9029 6.75691 31.7269 6.52591C31.1809 5.81491 30.4209 5.40191 29.6099 5.06891C29.5999 5.06491 29.5919 5.05691 29.5609 5.03391C29.8909 5.06391 30.1979 5.09691 30.5049 5.11991C30.8019 5.14191 31.0929 5.10891 31.3759 5.00691C31.5619 4.93991 31.6989 4.82591 31.7679 4.64391C31.8599 4.40291 31.9489 4.15991 32.0209 3.91291C32.0679 3.75291 32.0129 3.59391 31.9469 3.44691C31.7579 3.02391 31.4549 2.69691 31.0719 2.44591C30.4689 2.05191 29.8099 1.75991 29.1799 1.41491C27.9059 0.718906 26.5389 0.294906 25.1119 0.0499063C25.0179 0.0339063 24.9159 0.0659063 24.8289 0.00390625C29.8529 0.00390625 34.9769 0.00390625 40.0009 0.00390625Z"
    />
    <Path
      fill="#000091"
      d="M17.366 0.004C16.853 0.283 16.332 0.558 15.906 0.96C15.16 1.664 14.3 2.22 13.511 2.868C12.689 3.543 12.066 4.373 11.712 5.388C11.693 5.442 11.674 5.489 11.623 5.522C10.897 5.987 10.408 6.662 9.98 7.389C9.68 7.897 9.39 8.412 9.094 8.922C8.648 9.689 8.509 10.495 8.703 11.373C8.939 12.442 9.119 13.524 9.356 14.592C9.44 14.972 9.5 15.349 9.544 15.734C9.581 16.059 9.7 16.374 9.912 16.638C9.942 16.675 9.962 16.707 9.959 16.751C9.949 16.89 9.97 17.011 10.127 17.059C10.165 17.071 10.162 17.109 10.156 17.137C10.123 17.299 10.224 17.4 10.316 17.508C10.655 17.906 11.024 18.279 11.321 18.712C11.411 18.844 11.495 18.981 11.569 19.122C11.702 19.374 11.639 19.474 11.349 19.461C11.07 19.449 10.803 19.381 10.555 19.247C10.21 19.061 9.925 18.798 9.648 18.526C9.503 18.384 9.358 18.241 9.21 18.102C9.183 18.077 9.149 18.021 9.104 18.063C9.065 18.099 9.067 18.155 9.103 18.198C9.19 18.301 9.277 18.406 9.369 18.504C9.529 18.674 9.702 18.833 9.833 19.029C9.909 19.143 9.953 19.266 9.875 19.391C9.793 19.522 9.664 19.548 9.518 19.514C9.428 19.493 9.338 19.472 9.247 19.462C8.984 19.435 8.882 19.546 8.925 19.808C8.93 19.837 8.934 19.867 8.944 19.937C8.603 19.736 8.241 19.776 7.897 19.718C7.732 19.69 7.617 19.6 7.54 19.455C7.423 19.236 7.249 19.126 6.997 19.067C5.417 18.696 3.817 18.48 2.196 18.463C1.533 18.456 0.867 18.511 0.272 18.871C0.186 18.923 0.114 19.005 0.005 19.018C0.005 18.611 0.005 18.204 0.005 17.797C0.07 17.783 0.135 17.842 0.201 17.8C0.348 17.706 0.521 17.681 0.68 17.619C0.776 17.582 0.874 17.546 0.925 17.437C0.623 17.338 0.324 17.254 0.005 17.279C0.004 11.574 0.004 5.867 0 0.161C0 0.027 0.027 0 0.161 0C5.896 0.004 11.631 0.004 17.366 0.004Z"
    />
    <Path
      fill="#000091"
      d="M0.00390625 20.2409C1.66591 20.2329 3.28591 20.4899 4.84991 21.0539C5.48691 21.2839 6.08691 21.5879 6.58891 22.0669C6.90091 22.3649 7.29091 22.4199 7.72191 22.3609C8.34591 22.2759 8.94791 22.1239 9.53591 21.9059C9.98891 21.7379 10.4139 21.5189 10.7579 21.1709C10.8159 21.1129 10.8609 21.1089 10.9299 21.1439C11.0189 21.1899 10.9479 21.2399 10.9379 21.2819C10.8689 21.5559 10.7959 21.8289 10.7199 22.1019C10.6699 22.2809 10.5879 22.4459 10.4819 22.5979C10.3259 22.8209 10.4019 23.0229 10.6599 23.0789C10.6769 23.0829 10.6909 23.0969 10.7169 23.1119C10.6449 23.1889 10.5459 23.1709 10.4639 23.1959C10.2979 23.2459 10.1349 23.2969 10.0019 23.4139C9.96691 23.4449 9.91291 23.4909 9.91591 23.5239C9.92391 23.5959 10.0089 23.5579 10.0539 23.5849C10.0469 23.6479 9.98491 23.6629 9.94891 23.6629C9.75291 23.6629 9.71591 23.8079 9.70791 23.9469C9.70191 24.0619 9.66191 24.1049 9.55791 24.1349C9.47891 24.1579 9.40991 24.2179 9.35091 24.2949C9.52691 24.4249 9.70491 24.3319 9.91391 24.2969C9.81391 24.3959 9.71191 24.4129 9.62391 24.4519C9.10991 24.6839 8.61591 24.9649 8.06791 25.1139C7.94491 25.1469 7.97091 25.2429 7.97591 25.3009C7.98291 25.3869 8.07091 25.3419 8.12191 25.3349C8.19791 25.3249 8.25991 25.2529 8.38091 25.2789C7.94991 25.5159 7.54291 25.7369 7.13691 25.9629C6.69091 26.2109 6.24791 26.4609 5.80391 26.7119C5.75591 26.7389 5.69291 26.7609 5.66791 26.8029C5.58091 26.9499 5.50591 27.0979 5.29091 27.0539C5.25191 27.0459 5.11691 27.4009 5.14791 27.4269C5.17291 27.4479 5.21391 27.4539 5.24891 27.4579C5.40191 27.4759 5.53691 27.4069 5.67791 27.3649C5.79291 27.3299 5.90291 27.3089 6.03091 27.4539C5.78291 27.4239 5.65591 27.6279 5.44191 27.6339C5.34791 27.6359 5.25891 27.7409 5.21991 27.8379C5.17591 27.9499 5.12791 28.0279 4.99191 28.0189C4.95491 28.0169 4.91091 28.0459 4.88791 28.1089C5.12191 28.0879 5.34691 28.0649 5.57291 28.0459C6.40591 27.9759 7.24591 27.9579 8.05791 27.7359C9.10991 27.4489 10.0019 26.8629 10.8479 26.1979C11.1729 25.9429 11.4699 25.6569 11.7599 25.3629C11.7969 25.3259 11.8229 25.2319 11.8969 25.2769C11.9639 25.3179 11.9379 25.3939 11.9159 25.4619C11.7279 26.0339 11.3749 26.4899 10.8849 26.8189C10.5329 27.0549 10.1889 27.3039 9.84291 27.5459C9.37891 27.8709 8.87191 28.0349 8.33691 28.1549C7.37591 28.3719 6.39591 28.4699 5.42791 28.6389C4.33791 28.8279 3.27891 29.1039 2.34791 29.7419C2.24791 29.8109 2.16791 29.8929 2.00291 29.8789C1.87491 29.8679 1.73091 30.0229 1.61991 30.1399C1.59691 30.1639 1.58991 30.1919 1.61691 30.2209C1.65291 30.2599 1.69891 30.2859 1.74891 30.2669C1.81191 30.2439 1.87191 30.2109 1.92891 30.1749C2.13691 30.0429 2.35291 29.9279 2.57891 29.8299C2.63691 29.8049 2.69591 29.7579 2.78891 29.8099C2.61091 29.9139 2.44291 30.0109 2.27591 30.1089C2.18091 30.1649 2.07691 30.2099 1.99191 30.2789C1.85091 30.3929 1.67891 30.4629 1.66791 30.7119C1.66091 30.8759 1.49791 31.0309 1.41291 31.1949C1.38091 31.2559 1.28791 31.3299 1.34891 31.3859C1.41491 31.4479 1.52291 31.4219 1.60791 31.3729C1.71191 31.3129 1.78191 31.2169 1.85091 31.1239C1.94591 30.9979 2.07091 30.9109 2.20191 30.8289C2.22691 30.8129 2.25691 30.7899 2.28491 30.8109C2.31991 30.8369 2.30991 30.8759 2.29391 30.9119C2.21291 31.0969 2.13691 31.2719 1.93191 31.3759C1.69691 31.4949 1.49791 31.6769 1.30091 31.8539C1.25791 31.8919 1.19491 31.9209 1.27691 31.9939C1.33491 32.0459 1.26291 32.0929 1.23391 32.1339C1.02391 32.4369 0.819906 32.7429 0.634906 33.0719C0.746906 33.1169 0.813906 33.0549 0.878906 32.9929C1.11491 32.7679 1.33291 32.5189 1.58991 32.3219C2.07991 31.9459 2.49391 31.4719 3.05091 31.1809C3.15491 31.1259 3.24591 31.0459 3.31491 30.9519C3.48991 30.7119 3.74491 30.5969 4.00391 30.4799C4.67891 30.1779 5.40591 30.0789 6.12091 29.9349C6.69491 29.8189 7.27291 29.7629 7.86191 29.7979C8.40291 29.8309 8.92491 29.7229 9.41391 29.4729C9.54491 29.4059 9.67991 29.3309 9.82191 29.3059C10.3289 29.2159 10.3319 29.2199 10.8579 28.8539C11.3119 28.5379 11.7459 28.1919 12.2569 27.9669C12.3979 27.9049 12.5289 27.8339 12.6879 27.9299C12.7699 27.9789 12.8479 27.9209 12.9169 27.8579C13.1929 27.6029 13.4819 27.3629 13.8129 27.1809C14.0989 27.0229 14.4029 26.9419 14.7319 26.9549C14.8239 26.9589 14.8839 26.9839 14.9169 27.0839C14.9509 27.1879 14.8659 27.1969 14.8219 27.2319C14.6729 27.3509 14.5179 27.4619 14.3659 27.5769C14.3279 27.6059 14.2709 27.6349 14.3039 27.6929C14.3419 27.7589 14.4059 27.7279 14.4499 27.6999C14.5899 27.6109 14.7249 27.5149 14.8629 27.4219C14.9529 27.3619 15.0339 27.2859 15.1569 27.2579C15.1549 27.3789 15.1119 27.4639 15.0229 27.5309C13.9999 28.2929 13.1399 29.2239 12.2969 30.1739C11.7819 30.7539 11.2559 31.3269 10.6899 31.8559C10.1929 32.3219 9.57991 32.6259 8.97491 32.9259C7.44091 33.6859 5.89591 34.4249 4.36191 35.1869C2.99991 35.8629 1.68791 36.6249 0.511906 37.6009C0.341906 37.7419 0.176906 37.8889 0.00990625 38.0339C0.00990625 35.1479 0.00990625 32.2629 0.00990625 29.3769C0.0999063 29.3249 0.189906 29.2729 0.294906 29.2119C0.187906 29.1499 0.107906 29.1049 0.00990625 29.1179C0.00990625 27.9459 0.00990625 26.7749 0.00990625 25.6029C0.0759063 25.6509 0.166906 25.5889 0.232906 25.6429C0.192906 25.7389 0.0829063 25.6879 0.0299063 25.7509C0.196906 25.8999 0.482906 25.9219 0.764906 25.7739C0.956906 25.6739 1.15291 25.6289 1.36391 25.6219C1.41091 25.6199 1.48991 25.6399 1.49591 25.5869C1.52091 25.3689 1.65791 25.4839 1.75991 25.4869C1.86391 25.4899 1.97191 25.5079 2.07191 25.4869C3.28091 25.2389 4.48691 24.9759 5.63791 24.5149C5.90191 24.4089 6.16791 24.3049 6.42891 24.1499C4.82791 22.9409 2.93891 22.5009 1.07291 21.9649C1.13991 21.9139 1.21691 21.9239 1.24291 21.8459C0.971906 21.6139 0.588906 21.7259 0.280906 21.5479C0.363906 21.5279 0.442906 21.5649 0.487906 21.4759C0.336906 21.3959 0.183906 21.3259 0.0109063 21.3119C0.00390625 20.9559 0.00390625 20.5979 0.00390625 20.2409ZM2.64991 26.3999C2.54891 26.2939 2.38091 26.3249 2.29191 26.2199C2.19391 26.1049 2.08891 26.1129 1.97991 26.1759C1.78091 26.2899 1.56391 26.3549 1.34691 26.4219C1.23491 26.4569 1.12791 26.5079 1.06291 26.6139C1.03391 26.6599 0.993906 26.7149 1.02491 26.7659C1.05191 26.8109 1.11691 26.7979 1.16191 26.7869C1.53291 26.6979 1.91491 26.6839 2.28691 26.6069C2.42691 26.5799 2.55391 26.5179 2.64991 26.3999Z"
    />
    <Path
      fill={color}
      d="M0.00490625 21.313C0.178906 21.327 0.331906 21.397 0.481906 21.477C0.436906 21.567 0.357906 21.529 0.274906 21.549C0.582906 21.728 0.965906 21.616 1.23691 21.847C1.21091 21.924 1.13391 21.915 1.06691 21.966C2.93191 22.502 4.82191 22.942 6.42291 24.151C6.16191 24.306 5.89591 24.41 5.63191 24.516C4.48091 24.977 3.27491 25.24 2.06591 25.488C1.96591 25.508 1.85791 25.491 1.75391 25.488C1.65291 25.485 1.51591 25.37 1.48991 25.588C1.48391 25.641 1.40491 25.621 1.35791 25.623C1.14691 25.631 0.950906 25.675 0.758906 25.775C0.475906 25.922 0.189906 25.9 0.0239063 25.752C0.0769063 25.689 0.186906 25.741 0.226906 25.644C0.160906 25.589 0.0709063 25.652 0.00390625 25.604C0.00490625 24.174 0.00490625 22.744 0.00490625 21.313Z"
    />
    <Path
      fill="#000091"
      d="M0.00390625 19.834C0.324906 19.804 0.618906 19.676 0.923906 19.588C1.93391 19.3 2.95491 19.06 4.00491 18.972C4.14391 18.96 4.28391 18.97 4.43091 18.97C2.92991 19.263 1.48891 19.761 0.00490625 20.092C0.00390625 20.006 0.00390625 19.92 0.00390625 19.834Z"
    />
    <Path
      fill={color}
      d="M0.00390625 17.2811C0.321906 17.2551 0.620906 17.3401 0.923906 17.4391C0.872906 17.5481 0.773906 17.5841 0.678906 17.6211C0.519906 17.6831 0.346906 17.7081 0.199906 17.8021C0.133906 17.8441 0.0699062 17.7861 0.00390625 17.7991C0.00390625 17.6261 0.00390625 17.4531 0.00390625 17.2811Z"
    />
    <Path
      fill="white"
      d="M0.00390625 29.1199C0.101906 29.1069 0.181906 29.1519 0.288906 29.2139C0.183906 29.2739 0.0939062 29.3259 0.00390625 29.3789C0.00390625 29.2919 0.00390625 29.2059 0.00390625 29.1199Z"
    />
    <Path
      fill="#808080"
      d="M30.538 16.7979C30.66 16.7909 30.782 16.7889 30.903 16.7739C31.098 16.7499 31.187 16.6459 31.186 16.4589C31.186 16.3199 31.167 16.2109 30.987 16.3059C30.906 16.3489 30.915 16.2689 30.896 16.2329C30.842 16.1329 30.771 16.0709 30.648 16.0819C30.309 16.1109 30.044 15.9589 29.795 15.7179C29.953 15.6569 30.102 15.5999 30.257 15.6389C30.403 15.6759 30.461 15.6109 30.501 15.4909C30.552 15.3369 30.598 15.1759 30.818 15.2059C30.84 15.2089 30.873 15.1799 30.892 15.1579C31.102 14.9069 31.39 14.7609 31.657 14.5869C31.817 14.4819 31.974 14.3739 32.074 14.2039C32.172 14.0389 32.15 13.9739 31.969 13.9259C31.44 13.7849 30.901 13.7539 30.365 13.8509C29.957 13.9249 29.549 14.0129 29.123 14.1689C29.515 13.9099 29.893 13.7149 30.312 13.5799C30.769 13.4329 31.235 13.3459 31.703 13.2549C32.024 13.1929 32.306 13.3249 32.603 13.3849C32.705 13.4049 32.807 13.4259 32.907 13.4549C33.126 13.5189 33.206 13.6639 33.15 13.8899C33.083 14.1609 32.902 14.3519 32.691 14.5179C32.511 14.6599 32.511 14.6589 32.668 14.8179C32.784 14.9349 32.752 15.0409 32.545 15.0779C32.326 15.1169 32.203 15.2549 32.079 15.4079C32.053 15.4399 32.003 15.4689 32.019 15.5149C32.127 15.8239 31.968 16.1339 32.029 16.4489C32.074 16.6789 31.97 16.7709 31.722 16.8189C31.327 16.8959 30.93 16.8899 30.538 16.7979Z"
    />
    <Path
      fill={color}
      d="M2.6499 26.4001C2.5539 26.5181 2.4269 26.5801 2.2869 26.6091C1.9149 26.6851 1.5329 26.6991 1.1619 26.7891C1.1159 26.8001 1.0519 26.8121 1.0249 26.7681C0.993896 26.7171 1.0339 26.6621 1.0629 26.6161C1.1289 26.5101 1.2349 26.4591 1.3469 26.4241C1.5639 26.3561 1.7809 26.2921 1.9799 26.1781C2.0889 26.1161 2.1939 26.1071 2.2919 26.2221C2.3809 26.3251 2.5489 26.2941 2.6499 26.4001Z"
    />
  </AccessibleSvg>
)

export const Marianne = styled(MarianneSvg).attrs(({ color, size, theme }) => ({
  color: color ?? theme.colors.white,
  size: size ?? theme.icons.sizes.standard,
}))``