var agora = new Date()
let horas = agora.getHours()
console.log (`A gora são ${horas} horas`)
if(horas <12){
    console.log('Bom Dia!')
}else if (horas <= 18){
    console.log('BOA Tarde!')
}else{
    console.log('Boa Noite!')
}