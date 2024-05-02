## Tests

Describe formatInput(input) 

  Test: takes user input and formats it to an array of that length + 1
  code: formatInput(5)
  result: [0,1,2,3,4,5]


  Describe replace(input)
  
    Test: takes the input array and checks for numbers that have a 1 or 2 or 3 and replaces them with "Beep!" or "Boop!" or "Won't you be my neighbor?" 
    code: replace([0,1,2,3,4])
    result: "[0, "Beep!", "Boop", "Won't you be my neighbor?", 4, 5]"