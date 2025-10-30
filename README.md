# BetterTools

Some basic tools to make your project easier and better!
Some categories are:

- Untilites
- Misc
- Strings
- ects

## Setup

First Run

```
git clone https://github.com/GamerXR-637/BetterTools-js.git
```

in you terminal or download file `BetterTools`

Second, in your main file, add:

```JavaScript
const "name" = require("File Path to the "BetterTools" folder");
// or
const { "Functions you want to use" } = require("File Path to the "BetterTools" folder");
```

If you use the first option, then the function should be called as

```JavaScript
"name".FunctionName(paramters)
```

Else, this works fine with the second option

```JavaScript
FunctionName(paramters)
```

# Examples and Usage

## betterUUID(number)

```JavaScript
// betterUUID(number)
// Allows you to have a custom-made UUID based on your needs
// Input: Number how many sections to have ( Default: 3 )
  let uuid = betterUUID()
  console.log(uuid)
// Output: UF7lsEa6-yuB0-Q-p2L
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

  let colornohash = Randcolor(3, false)
  console.log(colornohash)
// Output: eba3b5,5c9f33,4c7bd5
```
