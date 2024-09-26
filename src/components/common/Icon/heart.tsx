import { useIsEdit } from '@/store/island/isEdit'
import { LandInfoProps } from '@/types/island/land'

interface HeartIconProps {
  primary: LandInfoProps['color']['primary']['hex']
  secondary: LandInfoProps['color']['secondary']['hex']
  isActive: boolean
}
const HeartIcon: React.FC<HeartIconProps> = ({
  isActive,
  primary,
  secondary,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
    >
      <g id="그룹_388" data-name="그룹 388" transform="translate(0 -23)">
        <path
          id="패스_67"
          data-name="패스 67"
          d="M24,0A24,24,0,1,1,0,24,24,24,0,0,1,24,0Z"
          transform="translate(0 23)"
          fill={isActive ? primary : secondary}
        />
        <path
          id="패스_42"
          data-name="패스 42"
          d="M75.047,13.491,67.135,21.4a4.641,4.641,0,0,1-6.563,0L52.5,13.336a7.816,7.816,0,0,1,.28-11.314,7.961,7.961,0,0,1,10.924.421l.145.151.306-.306a7.814,7.814,0,0,1,11.308.275,7.957,7.957,0,0,1-.421,10.929"
          transform="translate(-39.83 36.618)"
          fill={isActive ? secondary : primary}
        />
      </g>
    </svg>
  )
}

export default HeartIcon
