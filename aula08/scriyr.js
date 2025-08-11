function Verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano) {
        alert('{ERRO} Verifique os dados!')
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero =''
        
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                // criança
                img.setAttribute('src' , 'img/bebê-homen.png')
            }else if (idade < 21){
                // jovem
                img.setAttribute('src' , 'img/adolecente-homem.png')

            }else if(idade < 50){
                img.setAttribute('src' , 'img/homem.png')
            }else{
                // idoso
                 img.setAttribute('src' , 'img/idoso-home.png')

            }

        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                // criança
                img.setAttribute('src' , 'img/bebê-mulh.png')
            }else if (idade < 21){
                // jovem
                img.setAttribute('src' , 'img/adoleceite.mulh.png')

            }else if(idade < 50){
                // adulto
                img.setAttribute('src' , 'img/mulher.png')
            }else{
                // idoso
                img.setAttribute('src' , 'img/idoso-mulh.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }

}
