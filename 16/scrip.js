    let numeros = document.getElementById('txt')
    let listas = document.getElementById('flista')
    let res = document.getElementById('res')
    let verificar =[]
    function innume(n){
        if(Number(n) >= 1 && Number(n) <= 100){
            return true
        }else{
            return false
        }
    }
    function innlis(n,l){
        if(l.indexOf(Number(n)) != -1){
            return true
        }else{
            return false
        }
    }

    function adisionar(){
        if(innume(numeros.value) && !innlis(numeros.value,verificar)){
            alert('tudo ok')
        }else{
            alert('ERRO diginte numero ou numero correspodente')
        }
    }