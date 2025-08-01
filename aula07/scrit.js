    function carregar(){
        let msg = document.getElementById('msg')
        let img = document.getElementById('imagem')
        let data = new Date()
        //let hora = data.getHours()
        let hora = 22
        msg.innerHTML =` Agora são ${hora} horas`
        if(hora >= 0 && hora < 12){
            //bom dia
            img.src = 'img/manha.png'
            document.body.style.background = '#F1BE25 '
        }else if(hora >= 12 && hora < 18){
            //Boa Tarde
            document.body.style.background ='#DA7E42'
            img.src = 'img/tarde.png'
        }else {
            // boa noite
            document.body.style.background = '#141b2eff'
            img.src = 'img/noite.png'
        }
    }
