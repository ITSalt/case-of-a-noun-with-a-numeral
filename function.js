// The function here takes the parameters that you
// have declared in the `glide.json` file, in the
// same order.
window.function = function (in_digit, in_wordFor1, in_wordFor2_4, in_wordFor5_14) {
  // For each parameter, its `.value` contains
  // either its value in the type you've declared,
  // or it's `undefined`.  This is a good place to
  // extract the `.value`s and assign default
  // values.
  
  const digit = String(in_digit.value) ?? null;
  const wordFor1 = String(in_wordFor1.value) ?? ""; 
  const wordFor2_4 = String(in_wordFor2_4.value) ?? "";
  const wordFor5_14 = String(in_wordFor5_14.value) ?? "";
  
  const lastTwoDigits = digit.toString().slice(-2);
  const lastDigit = parseInt(lastTwoDigits.slice(-1));

  if (lastTwoDigits === '11' || lastTwoDigits === '12' || lastTwoDigits === '13' || lastTwoDigits === '14') {
    return wordFor5_14;
  } else if (lastDigit === 1) {
    return wordFor1;
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return wordFor2_4;
  } else {
    return wordFor5_14;
  }

}
