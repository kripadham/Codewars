function house(n) {
    maxRow = (n * 2) - 1;
    let result = [];
    for (let col = 0; col < n; col++) {
        let str = ' '.repeat(n - 1 - col) + '*'.repeat(col * 2 + 1) + ' '.repeat(n - 1 - col);
        result.push(str);
    }
   return result
}
house(3)
