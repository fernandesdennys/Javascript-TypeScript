let varA = "A"; //B
let varB = "B"; //C
let varC = "C"; //A

const varAtemp = varA;
varA = varC; // B
varB = varB; // C
varC = varAtemp; // A
console.log(varA, varB, varC);

[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);
