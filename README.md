# BetterTools

Some basic tools to make your project easier and better!
All of these function are not used in other function.
That mean you can just copy the code of one of the function that you need without downloading all the function.
And some will have comments to explain how it works


Some categories are:

- Utilities
- Misc
- Strings
- Math
- More

## Setup

First Run

```Shell
git clone https://github.com/GamerXR-637/BetterTools-js.git
```

in you terminal or download the file `BetterTools`

Second, in your main file, add:

```JavaScript
const "name" = require("File Path to the "BetterTools" folder");
// Name can be anything
//or
const { "Functions you want to use" } = require("File Path to the "BetterTools" folder");
// This is better to allow you to use only certain functions
// [See at the end for a list of function]
```
[List](https://github.com/GamerXR-637/BetterTools-js/edit/main/README.md#functions-names)

If you use the first option, then the function should be called as
Due to you are using this option you are importing all the function.
```JavaScript
"name".FunctionName(parameters)
```

Else, this works fine with the second option
You will be importing the function that you only need

```JavaScript
FunctionName(parameters)
// Only the function that you are calling
```

## Examples and Usage

## betterUUID(number)

```JavaScript
// betterUUID(number)
// Allows you to have a custom-made UUID based on your needs
// Input: Number how many sections to have ( Default: 3 )
  let uuid = betterUUID()
  console.log(uuid)
// Output: UF7lsEa6-yuB0-QPd82
```

## Randcolor(number, hash)

```JavaScript
// Randcolor(number, hash)
// Allows you to get any amount of random colors with the # or out
// Input:
// number / how many color to be returned ( Default: 1 )
// hash / True or False
  let color = Randcolor(3, true)
  console.log(color)
// Output: #eba3b5,#5c9f33,#4c7bd5

  let color_no_hash = Randcolor(3, false)
  console.log(color_no_hash)
// Output: eba3b5,5c9f33,4c7bd5
```


# Functions Names

## Math

inRange,
cylinderVolume,
circleArea,
randomInt,
average,
multiplyPoly,
pointY,
triangle,
pointX,
median,
pointSlope,
quadratic

## Text

truncate
morseCode
textToBinary

## Tools

seededRandom,
colorTerminal,
betterUUID,
rgbToHex,
Randcolor,
sleep,
percent

## Useless

FtM,
cat,

