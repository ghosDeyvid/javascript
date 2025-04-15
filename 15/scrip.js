function tabuada(){
    let numero = document.getElementById('tx')
    let tabuada = document.getElementById( 'seltab')
    if(numero.value == 0){
       alert('[ERRO] Diginte um Numero') 
    }else{
      let n = Number(numero.value)
      let c = 1
      for(let c = 1; c <= 10; c++){
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tabuada.appendChild(item)
      }
    }
        
}


















/*function tabuada(){
    let nun = document.getElementById('tx')
    let tab = document.getElementById('seltab')
    if(nun.value == 0 ){
        alert('Por favor, diginte um  numero!')
    }else{
        let n = Number(nun.value)
        let c = 1
        tab.innerHTML = 
        for(let c = 1; c <= 10; c++ ){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${ n * c}`
            tab.appendChild(item)    
        }
    
       }     
 }*/