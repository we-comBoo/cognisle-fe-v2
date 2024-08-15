const Icon = ({
  path,
  file,
  icon,
  height,
  width,
}: {
  path: string
  file: string
  icon: string
  height: number
  width: number
}) => (
  <svg width={width} height={height}>
    <use xlinkHref={`/${path}/${file}_sprite.svg#${icon}`} />
  </svg>
)

export default Icon
