import Drag from '@/components/drag'
import styled from '@emotion/styled'

const data = [
  { originalX: 100, originalY: 100, originalZ: 3 },
  { originalX: 150, originalY: 200, originalZ: 2 },
  { originalX: 200, originalY: 300, originalZ: 1 },
]
export default function DragPage() {
  return (
    <div>
      <span>fdnskankl</span>
      <Container>
        {data.map((d, idx) => (
          <Drag
            key={idx}
            originalX={d.originalX}
            originalY={d.originalY}
            originalZ={d.originalZ}
          />
        ))}
      </Container>
    </div>
  )
}
const Container = styled.div`
  position: absolute;
`
