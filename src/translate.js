let vowels = ["a", "e", "i", "o", "u"];

const translate = (apple) => {
  if (apple.includes(vowels)) {
    return "appleway";
  }
};

module.exports = translate;
