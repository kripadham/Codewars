function findShort(s) {
    let length = s.split(' ').map((i) => i.length);
    let result = Math.min(...length);
    return result;
}
findShort("bitcoin take over the world maybe who knows perhaps");
findShort("turns out random test cases are easier than writing out basic ones");
findShort("Let's travel abroad shall we");