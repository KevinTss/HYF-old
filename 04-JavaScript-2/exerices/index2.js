// const myFisrtName = `Kevin`;
// const myLastName = `Tassi`;

// const fullName = myFisrtName + ` ` + myLastName;
// const fullName2 = `${myFisrtName} ${myLastName}`;

// console.log(fullName);
// console.log(fullName2);

const list = ["Kevin", "Arthur", "Agron", "Walid", "Hanim"];

let result = '';
// const loopNumber = list.length;
for (let i = 0; i < list.length; i++) {
  let coma;
  if (i === 0) {
    coma = '';
  } else {
    coma = ', ';
  }
  result = result + coma + list[i];
}
console.log(result);

