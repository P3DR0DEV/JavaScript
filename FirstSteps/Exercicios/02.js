function ePaisagem(width, height){
    if (height,width !== 0){
        if (width > height) console.log(`${width}x${height} modo paisagem`)
        else console.log(`${width}x${height} modo retrato`)
    } else if (height === width) { 
        console.log(`${width}x${height} é um quadrado`)
    } else{
        console.log(`Medidas informadas são inválidas`)
    }
}

const ePaisagem2 = (width, height) => { return width> height }


ePaisagem(1280,720)
console.log(ePaisagem2(1280,720))
