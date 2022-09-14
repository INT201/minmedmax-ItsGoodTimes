const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  let arrMid = [n1, n2, n3]
  arrMid.sort(compareFn)
  let min = Math.min(n1, n2, n3)
  let mid = arrMid[1]
  let max = Math.max(n1, n2, n3)
  let ans = {min, mid, max}
  return  ans
}

function compareFn(a,b) {
  return a - b
}
module.exports = minMedMax
