module.exports = function reverse (str) {
  if (str < 0)
    str = str* (-1);
    return +str.toString().split("").reverse().join("");
}
