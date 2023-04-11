// The function here takes the parameters that you
// have declared in the `glide.json` file, in the
// same order.
window.function = function (digit, wordFor1, wordFor2_4, wordFor5_14) {
  // For each parameter, its `.value` contains
  // either its value in the type you've declared,
  // or it's `undefined`.  This is a good place to
  // extract the `.value`s and assign default
  // values.

  const d = digit.toString().slice(-2);
  return d[0] === '1' || d[1] >= '5' || d[1] === '0' ? wordFor5_14 :
         d[1] === '1' ? wordFor1 : d[1] >= '2' && d[1] <= '4' ? wordFor2_4 : wordFor5_14;
}
