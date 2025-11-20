# BetterTools

Some basic tools to make your project easier and better!
All of the function are not dependent for each other and can run by it self.
That mean you can just copy the code of one of the function that you need without downloading all the function.
And some will have comments to explain how it works


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

## [List of Function](https://github.com/GamerXR-637/BetterTools-js?tab=readme-ov-file#functions-names)

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
// Output: 7Uyzvv-ZXhsvFp-K9025qqGPG
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

## seededRandom(seed)

```JavaScript
console.log(seededRandom(37))
// Will return 0.0002615799930373639
```


# Functions Names

## Math

**cylinderVolume** - Calculate the volume of a cylinder | Input: [radius (Default: 3), pi (Default: true), hight (Default: 2)]
<br>**multiplyPoly** - Calculate the product of 2 polynomials | Input: [poly1 (Array), poly2 (Array)]
<br>**pointSlope** - Calculate the y=mx+b formula from 2 point | Input: [x1, y1, x2, y2]
<br>**circleArea** - Calculate the area of a circle | Input: [radius (Default: 3), pi (Default: true)]
<br>**randomInt** - Get a random Integer | Input: [number (Default: 10)]
<br>**quadratic** - Get the zeros of a quadratic formula | Input: [a (Default: 1), b (Default: 4), c (Default: 3)]
<br>**triangle** - Calculate the area of a triangle | Input: [legOne (Default: 3), legTwo (Default: 4)]
<br>**average** - Calculate the average of a array | Input: [numbers (Array)]
<br>**inRange** - Get if a number is in range | Input: [x (Default: 0), y (Default: 10), value (Default: 1)]
<br>**percent** - Calculate the percentage of a ratio | Input: [numerator (Default: 3), denominator (Default: 4)]
<br>**median** - Calculate the median of a array | Input: [numbers (Array)]
<br>**pointY** -  Calculates where the p0int is when y = n | Input: [x (Default: 3), y (Default: 4), n (Default: 1)]
<br>**pointX** - Calculates where the p0int is when x = n | Input: [x (Default: 3), y (Default: 4), n (Default: 1)]
<br>**temp** - Calculate the temperature conversion | Input: [n, from, to]

## Text

**binary** - Turn text into Binary | Input: [text]
<br>**morseCode** - Turn text into Morse Code | Input: [text]
<br>**truncate** - Cut the text with "..." | Input: [text, number (Default: 5)]

## Tools

**colorTerminal** -> Logs in color | Input: [text, color]
<br>**seededRandom** -> Get a random number based on a seed | Input: [seed (Default: 37)]
<br>**seededRandom** -> Get a random number based on a seed with Math.random() | Input: [seed (Default: 37)]
<br>**betterUUID** -> Create a custom UUID | Input: [number (Default: 3)]
<br>**Randcolor** -> Get random color | Input: [number (Default: 1), hash (Default: true)]
<br>**rgbtohex** -> Convert RGB to Hex | Input: [r, g, b]
<br>**sleep** -> Cause a the code to pause for n | Input: [seconds (Default: 10)]

## Useless


**cat** - Just Cat | Input: [text]
<br>**load** - Create a loading sign | Input: [message, n]