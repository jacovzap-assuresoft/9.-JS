const nbonacciSeries = (N, M) => {
    let series = Array(M).fill(0);
    series[N - 1] = 1;

    for (let i = N; i < M; i++) {
        series[i] = series.slice(i - N, i).reduce((sum, num) => sum + num, 0);
    }
    return series[M - 1];
}

const N = 2
const M = 5
const result = nbonacciSeries(N, M);
console.log('result', result)