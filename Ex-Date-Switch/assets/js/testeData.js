let data = new Date()

data <=10? `0${data.getMinutes()}`: data
console.log(data)

if (data <= 10) {
    console.log(`0${data}`)
}else{
    console.log(data)
}