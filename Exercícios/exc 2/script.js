function verificar() {
   var ano = new Date().getFullYear()
   var form = document.getElementById('text')
   var res = document.querySelector('div#res')

   if (form.value.length == 0 || Number(form.value) > ano) {
      window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
      var fsex = document.getElementsByName('sex')
      var idade = ano - Number(form.value)
      var genero = ''
      var img = document.querySelector('img#foto')

      if (fsex[0].checked) {
         genero = 'homem'
         if (idade >= 0 && idade < 10) {
            img.src = 'IMG/bebe-homem.jpg'
         } else if (idade < 21) {
            img.src = 'IMG/jovem-homem.jpg'
         } else if (idade < 40) {
            img.src = 'IMG/adulto-homem.jpg'
         } else {
            img.src = 'IMG/idoso-homem.jpg'
         }
      } else {
         genero = 'mulher'
         if (idade >= 0 && idade < 10) {
            img.src = 'IMG/bebe-mulher.jpg'
         } else if (idade < 21) {
            img.src = 'IMG/jovem-mulher.jpg'
         } else if (idade < 40) {
            img.src = 'IMG/adulto-mulher.jpg'
         } else {
            img.src = 'IMG/idoso-mulher.jpg'
         }
      }
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
      res.appendChild(img)
   
   }
   
}