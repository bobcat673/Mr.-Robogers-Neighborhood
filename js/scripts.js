function formatInput(input) {
  let numberArray = []
  for (let i = 0; i < parseInt(input)+1; i++) {
    numberArray.push(i);
  };
return numberArray
};

function replaceNumber(numberArray) {
  let mixedArray = [];
  numberArray.forEach(function(number) {
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


// UI logic

window.onload = function() {
  let output = document.getElementById("output");
  document.getElementById("submit").onclick = function(event) {
    output.innerHTML = ""
    event.preventDefault();
    let numberArray = replaceNumber(formatInput(document.getElementById("input").value));
    numberArray.forEach(function(number) {
      let listItem = document.createElement("li");
      listItem.innerText = number;
      output.append(listItem);
      document.querySelector("body").append(output);
    });
  };
};