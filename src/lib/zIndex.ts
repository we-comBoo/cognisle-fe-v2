export function getMax(key: string, lst: any) {
  let max_ = Number.MIN_SAFE_INTEGER
  for (const item of lst) {
    max_ = Math.max(max_, item[key])
  }
  return max_
}
