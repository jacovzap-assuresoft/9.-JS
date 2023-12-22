const moneyCuts = [200, 100, 50, 20, 10, 5, 2, 1]

const combine = price => {
  let cuts = []
  const comb = (target, curr = [], sum = 0, index = 0) => {
    if (sum === target) {
      cuts.push([...curr])
    } else if (sum < target) {
      moneyCuts.slice(index).forEach((cut, i) => {
        curr.push(cut)
        comb(target, curr, sum + cut, index + i)
        curr.pop()
      })
    }
  }
  comb(price)
  return cuts
}

const result = combine(5)
console.log(result.length)
