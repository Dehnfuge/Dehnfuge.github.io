`    rgb(15, 15, 15) - Dark Gray
    rgb(100, 50, 20) - Rust Brown
    rgb(230, 130, 70) - Light Copper
    rgb(180, 80, 30) - Sienna
    rgb(240, 160, 100) - Peach
    rgb(220, 100, 40) - Tangerine
    rgb(230, 120, 60) - Apricot
    rgb(20, 20, 20) - Charcoal
    rgb(0, 60, 120) - Navy Blue
    rgb(200, 140, 140) - Pale Pink
    rgb(130, 40, 170) - Lavender
    rgb(70, 35, 30) - Dark Brown
    rgb(0, 80, 140) - Royal Blue
    rgb(255, 210, 190) - Blush
    rgb(10, 50, 100) - Midnight Blue
    rgb(40, 20, 18) - Espresso
    rgb(230, 180, 170) - Antique White
    rgb(20, 50, 90) - Deep Blue
    rgb(10, 40, 70) - Dark Navy
    rgb(0, 100, 200) - Electric Blue
    rgb(30, 30, 30) - Ebony
    rgb(40, 30, 40) - Plum
    rgb(50, 45, 40) - Slate
    rgb(150, 160, 165) - Silver Gray
    rgb(180, 50, 150) - Orchid
    rgb(20, 30, 40) - Deep Ocean Blue`.split("\n").map(e=>{d=e.match(/rgb\((\d+), (\d+), (\d+)\)/); d.shift(); return d.map(f=>Number(f))})
