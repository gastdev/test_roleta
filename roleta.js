function rodar(){


   function descontoAcertado(acertado){
     
     var venda = 500
     var acertado = acertado
   	 var desconto = (acertado / 100)* venda
   	 var pagar = venda - desconto

   	 alert("Acertou o desconto de:"+acertado+"%" )

	 var descontoIdv = document.getElementById('descontov').innerHTML = desconto+",00"
	 var descontoIdp = document.getElementById('descontop').innerHTML = acertado+"%"
	 var descontoIdp = document.getElementById('pagar').innerHTML = pagar

   }

   var ponto = Math.floor(Math.random() * 16)

   if(ponto == 3 || ponto == 6 || ponto == 9 || ponto == 12) {

   	    ponto = 10
   }else if(ponto == 2 || ponto == 7 || ponto == 8 || ponto == 15){

   	   ponto = 5
   }else if(ponto == 1 || ponto == 4 || ponto == 11 || ponto == 14){
   	   ponto = 3
   }else if(ponto == 0 || ponto == 5 || ponto == 10 || ponto == 13){
   	   ponto = 0
   }

   var acertado = ponto

   descontoAcertado(acertado)
} 

	