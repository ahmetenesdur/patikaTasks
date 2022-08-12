function LetterChanges(str) { 


  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var newAlpha = "bcdEfghIjklmnOpqrstUvwxyzA";
  var answer = "";
  
  for (i = 0; i < str.length; i++)
  {
      if (alpha.indexOf(str[i]) !== -1) {
          answer += newAlpha.charAt(alpha.indexOf(str[i]));
      } else {
          answer += str[i];
      }
  }
  return answer;
}

console.log(LetterChanges("deneme*5"));