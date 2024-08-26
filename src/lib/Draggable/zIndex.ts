import { ItemProps } from '@/types/island'

export function getMax(key: string, lst: ItemProps) {
  let max_ = Number.MIN_SAFE_INTEGER
  for (const item of Object.values(lst)) {
    max_ = Math.max(max_, item['locations'][key])
  }
  return max_
}
