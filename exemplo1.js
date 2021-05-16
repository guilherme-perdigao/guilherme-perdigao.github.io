// var valorRecebido = document.getElementById("idDoElemento").value;

// Atividade 1

function calcular() {
    var total;
    var numero1 = document.getElementById("num1").value;
    var numero2 = document.getElementById("num2").value;
    total = parseFloat(numero1) + parseFloat(numero2);
    console.log(total);
    document.getElementById("mensagem").innerHTML = total;
    return total;
}




// Atividade 2


function maior_numero() {
    var numero1 = document.getElementById("num1").value;
    var numero2 = document.getElementById("num2").value;
    var maior=0;
    if( numero1 > numero2 )
        maior = numero1;
    else
        maior = numero2;
    console.log(maior);
    document.getElementById("mensagem").innerHTML = maior;
    return maior_numero;
    
    

}



// Atividade 3
/*
function eh_primo() {
    var numero1 = document.getElementById("num1").value;
    var primo;
    if( numero1 %2 == 0 )
        primo = false;
    else if( numero1 %3  == 0 )
        primo = false;
    else if( numero1 %5  == 0 )
        primo = false;
    else if( numero1 %7  == 0 )
        primo = false;
    else{
        primo = true;
    }
    console.log(primo)
    return primo;

}
*/
function primo(num) {
    // verifica se o numero digitado é "1", que não é primo
     if(num!=1){
      for (var i = 2; i < num; i++)
        if (num % i == 0) return false;
      return num !== 1;
    }
}

    function verificaPrimo() {
      var num = document.getElementById("name").value;
      var resl="";
      // verifica se é número
     if(!isNaN(num)){
      // verifica se é primo
      if (primo(num)) {
       resl = "O número " + (num) + " é primo";
        
      } else {
       resl = "O número " + (num) + " nao é primo";
      }
      document.getElementById("mensagem").innerHTML = resl;
    }

else{
 document.getElementById("mensagem").innerHTML = "Vish, nem número é";
}
}




//Atividade 4

function calcula_hipotenusa(){
    var numero1 = document.getElementById("num1").value;
    var numero2 = document.getElementById("num2").value;
    var hipotenusa = (parseFloat(numero1*numero1)) + (parseFloat(numero2*numero2));
    console.log(Math.sqrt(hipotenusa));
    document.getElementById("mensagem").innerHTML = hipotenusa;

}


//Ativade 5

function rajusta_salario(){
    var salario = document.getElementById("num1").value;
    var reajuste = document.getElementById("num2").value;
    var salario_novo;
    parseFloat(salario);
    parseFloat(reajuste);
    salario_novo = parseFloat(salario) + ((reajuste/100) * salario);
    console.log(salario_novo);
    document.getElementById("mensagem").innerHTML = salario_novo;

}


//Atividade 6

function custo_final(){
    var custo_fabrica = document.getElementById("num1").value;
    var custo_final;
    custo_final = parseFloat(custo_fabrica) + parseFloat(custo_fabrica*28/100) + parseFloat(custo_fabrica*43/100) ;
    console.log( custo_final );
    document.getElementById("mensagem").innerHTML = custo_final;
}



//Atividade 7

function salario_final(){
    var carros_vendidos = document.getElementById("num1").value;
    var total_venda = document.getElementById("num2").value;
    var salario = document.getElementById("num3").value;
    var comissao_por_carro = document.getElementById("num4").value; 
    var salario_final;
    salario_final = parseFloat(salario) + parseFloat(comissao_por_carro*carros_vendidos) + parseFloat(total_venda*0.05) ;
    console.log( salario_final );
    document.getElementById("mensagem").innerHTML =  salario_final;
}



//Atividade 8
function temperatura(){
    var temperatura_f = document.getElementById("num1").value;
    var temperatura_c;
    temperatura_c = parseFloat((temperatura_f - 32)*5/9) ;
    console.log(temperatura_c);
    document.getElementById("mensagem").innerHTML =  temperatura_c;
}



//Atividade 9
function media(){
    var nota1 = document.getElementById("num1").value;
    var nota2 = document.getElementById("num2").value;
    var nota3 = document.getElementById("num3").value;
    var media_final;
    media_final = parseFloat(nota1 * 2) + parseFloat(nota2 * 3) + parseFloat(nota3 * 5) ;
    console.log(media_final/10);
    media_final = media_final/10;
    document.getElementById("mensagem").innerHTML =  media_final;
}


//Atividade 10

function total_compra(){
    var qtd_macas = document.getElementById("num1").value;
    var total;
    if( parseInt(qtd_macas) >= 12  ){
        total = parseInt(qtd_macas) * 1;
    }else
        total = parseInt(qtd_macas) * 1.30;    
    console.log(total);
    document.getElementById("mensagem").innerHTML =  total;
}




