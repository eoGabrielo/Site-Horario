function carregar(){
    var msg= document.getElementById("horas")//Guarda o elemento que vai a frase das horas.
    var img= document.getElementById("img") //Guarda o elemento que vai as imagens.
    var educacao= document.getElementById("educacao") //Guarrda o elemento que deseja Bom(HorarioDoDia).
    var data= new Date() //Adiciona data ao codigo (Puxa do computador).
    var hora= data.getHours() //Adiciona a variavel hora, a hora do computador(Sem os minutos).
    var minuto= data.getMinutes()//Adiciona a variavel minuto, o minuto do computador(Sem as horas).
    var manhaTardeNoite; //Recebe manha, tarde e noite para completar a frase.
    
    var texto= prompt("Olá, qual seu nome? ")

    if (hora >= 1 && hora < 12 ){ // Maior ou igual a 1 e menor que 12 - BOM DIA.
        img.src= "manha.png"
        manhaTardeNoite= "manhã."
        document.body.style.background= "#FF8C7F"
        educacao.innerHTML= "Bom dia, seja bem-vindo(a) " + texto[0].toUpperCase() + texto.substring(1) +"."
    }else if (hora >= 12 && hora < 18){ // Maior ou igual a 12 e menor que 18 - BOA TARDE.
        img.src= "tarde.png"
        document.body.style.background= "#B1B0E1"
        manhaTardeNoite= "tarde."
        educacao.innerHTML= "Boa tarde, seja bem-vindo(a) " + texto[0].toUpperCase() + texto.substring(1) +"."
    }else{ // Maior ou igual a 18 e menor que 1 - BOA NOITE.
        img.src= "noite.png"
        document.body.style.background= "#3F3E93"
        manhaTardeNoite= "noite."
        educacao.innerHTML= "Boa noite, seja bem-vindo(a) " + texto[0].toUpperCase() + texto.substring(1) +"."
    }

    msg.innerHTML= "Agora são " + hora // Menssagem das horas.
    + ":"
    + minuto 
    + " da " 
    + manhaTardeNoite

    
}

//toUpperCase - Letra maiuscula
//substring() - escreve pos letra escolhida nos parentes
