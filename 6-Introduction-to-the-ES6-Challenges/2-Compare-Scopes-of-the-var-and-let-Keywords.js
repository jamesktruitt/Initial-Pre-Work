function checkScope() {
  "use strict";
  const i = "function scope";
  if (true)
  {
    const i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}