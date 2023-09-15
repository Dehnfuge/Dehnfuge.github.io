target = `rgb(30, 30, 30) - Charcoal Gray
rgb(150, 75, 30) - Rust Red
rgb(255, 140, 70) - Caramel Brown
rgb(200, 100, 40) - Burnt Sienna
rgb(255, 165, 110) - Salmon
rgb(255, 120, 50) - Tangerine
rgb(255, 140, 75) - Apricot
rgb(40, 40, 40) - Dark Slate
rgb(0, 80, 160) - Deep Blue
rgb(220, 150, 150) - Dusty Rose
rgb(150, 60, 180) - Mauve
rgb(90, 45, 40) - Mahogany
rgb(0, 120, 210) - Sapphire Blue
rgb(170, 200, 100) - Olive Green
rgb(20, 70, 130) - Midnight Blue
rgb(60, 30, 25) - Espresso
rgb(220, 170, 160) - Antique Rose
rgb(20, 60, 110) - Deep Navy
rgb(10, 50, 90) - Navy
rgb(0, 130, 255) - Electric Blue
rgb(50, 50, 50) - Onyx
rgb(60, 40, 60) - Plum
rgb(70, 60, 55) - Taupe
rgb(170, 180, 190) - Silver
rgb(200, 60, 170) - Orchid
rgb(30, 40, 50) - Deep Ocean Blue`.split("\n").map(e=>{d=e.match(/rgb\((\d+), (\d+), (\d+)\)/); d.shift(); return d.map(f=>Number(f))})

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

colorChanges = origin.map((e,i)=>{return {original:origin[i].map(e=>Number(e)), target:target[i].map(e=>Number(e))}})