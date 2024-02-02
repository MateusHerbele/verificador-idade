function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let anoDigitado = window.document.getElementById('txtano')
    let res = window.document.querySelector('div#res')

    if(anoDigitado.value.length == 0 || anoDigitado.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano -  Number(anoDigitado.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10)
                img.setAttribute('src', 'criancahomem.png')
            else if(idade < 21)
                img.setAttribute('src', 'jovemhomem.png')
            else if(idade < 50)
                img.setAttribute('src', 'adulto.png')
            else
                img.setAttribute('src', 'idoso.png')
        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 10)
                img.setAttribute('src', 'criancamulher.png')
            else if(idade < 21)
                img.setAttribute('src', 'jovemmulher.png')
            else if(idade < 50)
                img.setAttribute('src', 'adulta.png')
            else
                img.setAttribute('src', 'idosa.png')
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }        
} 