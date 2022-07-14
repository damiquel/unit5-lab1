const translate = require("../src/translate");
let vowels = ["a", "e", "i", "o", "u"];

describe("translate function", () => {
  test("words that start with the vowel a", () => {
    let results = translate("apple");
    expect(results).toBe("appleway");
  });
});
//   test("words that start with the vowel e", () => {
//     let results = translate("edward");
//     expect(results).toBe("appleway");
//   });
//   test("words that start with the vowel i", () => {
//     let results = translate("iguana");
//     expect(results).toBe("appleway");
//   });
//   test("words that start with the vowel o", () => {
//     let results = translate("apple");
//     expect(results).toBe("appleway");
//   });
//   test("words that start with the vowel u", () => {
//     let results = translate("apple");
//     expect(results).toBe("appleway");
//   });
// });
