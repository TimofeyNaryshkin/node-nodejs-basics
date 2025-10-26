const parseArgs = () => {
  const argsArr = process.argv.slice(2).reduce((acc, cur, i, arr) => {
    if (i % 2 === 0) {
      const name = cur.slice(2);
      const value = arr[i + 1];
      acc.push(`${name} is ${value}`)
    }
    return acc
  }, []);
  console.log(argsArr.join(', '))
};

parseArgs();
