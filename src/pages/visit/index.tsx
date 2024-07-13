import { useEffect, useState } from 'react'
import VisitLoading from '@/components/pages/Visit/loading'
import VistFinding from '@/components/pages/Visit/finding'
import { useTimer } from '@/hooks'

const Visit = () => {
  const [loading, setLoading] = useState(false)
  // 2초 뒤에 홈 메뉴 화면으로 이동
  useTimer(10000, () => setLoading(true))

  return loading ? <VisitLoading /> : <VistFinding />
}

export default Visit
