import { LandInfoProps } from '@/types/island/land'

interface TalkIconProps {
  primary: LandInfoProps['color']['primary']['hex']
  secondary: LandInfoProps['color']['secondary']['hex']
}

const TalkIcon: React.FC<TalkIconProps> = ({ primary, secondary }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="사각형_215"
            data-name="사각형 215"
            width="28.663"
            height="25.26"
            fill={primary}
          />
        </clipPath>
      </defs>
      <g id="그룹_389" data-name="그룹 389" transform="translate(0 -23)">
        <path
          id="패스_67"
          data-name="패스 67"
          d="M24,0A24,24,0,1,1,0,24,24,24,0,0,1,24,0Z"
          transform="translate(0 23)"
          fill={secondary}
        />
        <g id="그룹_355" data-name="그룹 355" transform="translate(9.669 36)">
          <g
            id="그룹_352"
            data-name="그룹 352"
            transform="translate(0 0)"
            clip-path="url(#clip-path)"
          >
            <path
              id="패스_580"
              data-name="패스 580"
              d="M24.793,0H3.87A3.872,3.872,0,0,0,0,3.87V15.53A3.872,3.872,0,0,0,3.87,19.4H8.8v5.86l6.765-5.86h9.227a3.872,3.872,0,0,0,3.87-3.87V3.87A3.872,3.872,0,0,0,24.793,0m-8.72,5.3a1.852,1.852,0,1,1-1.855,1.855A1.856,1.856,0,0,1,16.073,5.3m-4.342,0A1.852,1.852,0,1,1,9.876,7.157,1.852,1.852,0,0,1,11.73,5.3m4.689,8.8-2.453-2.126L11.514,14.1,8.489,11.479,9.62,10.172l1.895,1.638L13.967,9.69l2.453,2.121L20.048,8.67l1.131,1.307Z"
              transform="translate(0 0)"
              fill={primary}
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default TalkIcon
