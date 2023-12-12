import image, change color

```js
origin = `rgb(0, 0, 0)
rgb(107, 53, 18)
rgb(246, 159, 94)
rgb(187, 90, 28)
rgb(248, 177, 123)
rgb(241, 124, 44)
rgb(244, 141, 67)
rgb(18, 21, 36)
rgb(0, 48, 98)
rgb(218, 149, 147)
rgb(131, 36, 178)
rgb(62, 31, 28)
rgb(0, 85, 152)
rgb(255, 228, 210)
rgb(5, 63, 121)
rgb(38, 21, 19)
rgb(242, 194, 183)
rgb(9, 42, 79)
rgb(4, 29, 55)
rgb(0, 99, 197)
rgb(29, 26, 25)
rgb(32, 25, 32)
rgb(45, 40, 37)
rgb(145, 163, 170)
rgb(187, 35, 148)
rgb(15, 24, 37)`.split("\n").map(e=>e.replace("rgb(","").replace(")","").split(", "))
```

```js
JSON.stringify(origin.map((e,i)=>{return {original:origin[i].map(e=>Number(e)), target:target[i].map(e=>Number(e))}}))
```