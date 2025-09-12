const avanca=document.querySelectorAll('.btn-proximo');
const reiniciarBtn=document.getElementById('btn-reiniciar');


avanca.forEach(button => {
    button.addEventListener('click', function (){
      const atual=document.querySelector('.ativo');
      const proximoPasso='passo-'+this.gatAttribute('data-proximo');

      atual.classList.remove('ativo');
      const proximoelemento=document.getElementById(proximopasso);

      if(proximoElemento){
        proximoElemento.classList.add('ativo');
      } else{
        console.error(`Elemento com ID "${proximoPasso}" não encontrado.`);
      }
    })
})