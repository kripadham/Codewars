function inArray(arr1, arr2) {
    let result = [];
    for (let str of arr2) {
        for (let checkStr of arr1) {
            if (str.includes(checkStr)==true) {
                if (result.includes(checkStr) == false) {
                    result.push(checkStr);
                }
            }
        }
    }
    return result;
}

inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"])


// describe("Tests", () => {
//     it("test", () => {
//         a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
//         a1 = ["xyz", "live", "strong"]
//         Test.assertSimilar(inArray(a1, a2), ["live", "strong"])
//         a1 = ["live", "strong", "arp"]
//         Test.assertSimilar(inArray(a1, a2), ["arp", "live", "strong"])
//         a1 = ["tarp", "mice", "bull"]
//         Test.assertSimilar(inArray(a1, a2), [])

//     });
// });
