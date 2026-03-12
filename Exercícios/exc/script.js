var hora = document.getElementById('HORA')
var img = document.getElementById('foto')
var horaatual =20


switch(true) {

case (horaatual >= 0 && horaatual < 12):
    hora.innerHTML = `Agora são ${horaatual} horas. Bom dia!`
    img.src = 'IMG/manha.jpg'
    document.body.style.background = '#88c4e0'
    
     break
 case (horaatual >= 12 && horaatual < 18):
    hora.innerHTML = `Agora são ${horaatual} horas. Boa tarde!`
    img.src = 'IMG/tarde.jpg'
    document.body.style.background = '#deb270'
  
     break
 default: 
    hora.innerHTML = `Agora são ${horaatual} horas. Boa noite!`
    img.src = 'IMG/noite.jpg'
     document.body.style.background =  '#020419'
}    

