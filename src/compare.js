export default function (a,b){
  var word1 = a.split("").sort().join(""),
      word2 = b.split("").sort().join("");
      return word2 === word1
}
