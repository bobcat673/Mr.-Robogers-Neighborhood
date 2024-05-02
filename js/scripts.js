function formatInput(input) {
  let numberArray = []
  for (let i = 0; i < parseInt(input+1); i++) {
    numberArray.push(i);
  };
return numberArray
};

function replaceNumber(numberArray) {
  let mixedArray = [];
  numberArray.forEach(function(number) {
      console.log(number)
    if (number.toString().includes(3) === true) {
      mixedArray.push("Won't you be my neighbor?");
    } else if (number.toString().includes(2) === true) {
      mixedArray.push("Boop");
    } else if (number.toString().includes(1) === true) {
      mixedArray.push("Beep!");
    } else {
      mixedArray.push(number);
    };
  });
return mixedArray
};