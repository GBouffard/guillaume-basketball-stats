const addStats = arr => arr.reduce((total, number) => {
  return number !== '-' ? total + number : total
}, 0)

const divider = arr => {
  let noValuesLength = 0
  noValuesLength = arr.filter(el => el === '-').length
  return arr.length - noValuesLength
}

export const calculateTotal = (arr) => arr
  ? addStats(arr)
  : '-'

export const calculateAverage = (arr) => arr
  ? (addStats(arr) / divider(arr)).toFixed(2)
  : '-'
