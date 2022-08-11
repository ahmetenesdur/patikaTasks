const toTitleCase = (phrase) => {
  return phrase
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

let result = toTitleCase('maRy hAd a lIttLe LaMb');
console.log(result);