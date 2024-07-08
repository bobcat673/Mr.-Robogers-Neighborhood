# Mr. Roboger's Neighborhood

#### By Aidan Portwood
#### 

## Technologies Used

* HTML
* CSS
* JAVASCRIPT

## Description

Takes a user number input and creates an array up to that number then replaces each number with 1, 2, or 3 with "beep" , "boop", and "Won't you be my neighbor?"

## Setup/Installation Requirements

* open bash or similar terminal
* run the command ```git clone https://github.com/bobcat673/Mr.-Robogers-Neighborhood.git```
* run index.html

## Known Bugs

* None

## License

MIT License

Copyright (c) 2024 Aidan portwood

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Tests

  Describe formatInput(input) 

    Test: takes user input and formats it to an array of that length + 1
    code: formatInput(5)
    result: [0,1,2,3,4,5]


  Describe replaceNumber(input)
  
    Test: takes the input array and checks for numbers that have a 1 or 2 or 3 and replaces them with "Beep!" or "Boop!" or "Won't you be my neighbor?" 
    code: replace([0,1,2,3,4])
    result: "[0, "Beep!", "Boop", "Won't you be my neighbor?", 4, 5]"