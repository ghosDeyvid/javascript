function contar(){
    let ini= document.getElementById('txti')
    let  = document.getElementById('txtf')
    let txp = document.getElementById('txtp')
    let res = document.getElementById('res')
    if(txi.value.length == 0 || txf.value.length == 0  || txi.value.length == 0 ){
       alert('[ERRO] Algo errado ') 
    }else{
        res.innerHTML = 'contando: '
        let i = Number(txi.value)
        let f = Number(txf.value)
        let p = Number(txp.value)
        if(i < f){
            for(let c = i; c < f; c += p )
                res.innerHTML+= `${c} \u{1F449}`
        }else{
            for(let c = i; c > f; c-=p)
                res.innerHTML+=`${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3c1}`
    }
}