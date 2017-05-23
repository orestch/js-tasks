/**
 * Redefines array push method
 * @param {String} el
 * @returns {String} Converted string plus bro
 */
Array.prototype.push = function(el) {
  return this[this.length] = el + ' bro';
}

// Test it
var a = [2, 4];
a.push(34);

console.log(a);
