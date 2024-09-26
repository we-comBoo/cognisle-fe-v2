import { useIsEdit } from '@/store/island/isEdit'
import { LandInfoProps } from '@/types/island/land'

interface EditIconProps {
  primary: LandInfoProps['color']['primary']
  secondary: LandInfoProps['color']['secondary']
  base: LandInfoProps['color']['base']
}
const EditIcon: React.FC<EditIconProps> = ({ primary, secondary, base }) => {
  const isEdit = useIsEdit()
  return (
    <svg
      id="수정_버튼"
      data-name="수정 버튼"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="48"
      height="48"
      viewBox="0 0 48 48"
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="사각형_31"
            data-name="사각형 31"
            width="29"
            height="29"
            transform="translate(0.09 0)"
            fill={primary.hex}
          />
        </clipPath>
      </defs>
      <path
        id="패스_67"
        data-name="패스 67"
        d="M24,0A24,24,0,1,1,0,24,24,24,0,0,1,24,0Z"
        fill={isEdit ? primary.hex : base.hex}
      />
      <g id="그룹_50" data-name="그룹 50" transform="translate(9.91 9.975)">
        <g
          id="그룹_49"
          data-name="그룹 49"
          transform="translate(0 0.025)"
          clipPath="url(#clip-path)"
        >
          <path
            id="패스_66"
            data-name="패스 66"
            d="M28.629,4.47a.6.6,0,0,0-.995-.206L23.971,7.927,21.187,5.143,24.851,1.48a.621.621,0,0,0,.17-.552.605.605,0,0,0-.376-.443,7.037,7.037,0,0,0-9.262,8.722L1.42,21.683a4.257,4.257,0,1,0,6.011,6.011L19.907,13.732a7.018,7.018,0,0,0,7.145-1.716A7.031,7.031,0,0,0,28.629,4.47M4.4,26.6a1.9,1.9,0,0,1-1.34-3.233,1.942,1.942,0,0,1,2.681,0A1.9,1.9,0,0,1,4.4,26.6"
            transform="translate(0 -0.023)"
            fill={isEdit ? secondary.hex : primary.hex}
          />
        </g>
      </g>
    </svg>
  )
}

export default EditIcon
