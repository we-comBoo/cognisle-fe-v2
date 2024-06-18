import { useEffect, useState } from 'react'
import VisitLoading from '@/components/pages/Visit/loading'
import VistFinding from '@/components/pages/Visit/finding'

const Visit = () => {
  const [loading, setLoading] = useState(false)
  // 2초 뒤에 홈 메뉴 화면으로 이동
  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 10000)
  }, [])
  return loading ? <VisitLoading /> : <VistFinding />
}

export default Visit
