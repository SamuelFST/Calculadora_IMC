
var peso;
var altura;
var imc;
var resultado;

function estilizacao(){
	document.getElementById('resultado').style.color="white";
	document.getElementById('resultado').style.fontFamily="Arial";
	document.getElementById('resultado').style.marginLeft="300px";
	document.getElementById('resultado').style.padding="50px";
	document.getElementById('resultado').style.borderRadius="20px";
	document.getElementById('resultado').style.fontSize="25px";
	document.getElementById('resultado').style.marginTop="30px";
}

function CalcularIMC(){
	estilizacao();
	peso= document.getElementById('peso').value;
	altura= document.getElementById('altura').value;
	imc= peso/(altura*altura);

	if(imc < 17 && imc > 0){
		document.getElementById('resultado').style.backgroundColor="#e60000";
		resultado= document.getElementById('resultado');
		resultado.innerHTML= '<br/> Seu IMC: ' +imc.toFixed(2) + '<h3><br/>Você está muito abaixo do peso.</h3>'
		document.getElementById('peso').value = '';
		document.getElementById('altura').value= '';
		return false;
	}

	else if(imc > 16.99 && imc < 18.50){
		document.getElementById('resultado').style.backgroundColor="#e6b800";
		resultado= document.getElementById('resultado');
		resultado.innerHTML= '<br/> Seu IMC: ' +imc.toFixed(2) + '<h3><br/>Você está abaixo do peso.</h3>'
		document.getElementById('peso').value = '';
		document.getElementById('altura').value= '';
		return false;
	}

	else if(imc > 18.49 && imc < 25){
		document.getElementById('resultado').style.backgroundColor="#00ff00";
		resultado= document.getElementById('resultado');
		resultado.innerHTML= '<br/> Seu IMC: ' +imc.toFixed(2) + '<h3><br/>Você está com peso normal.</h3>'
		document.getElementById('peso').value = '';
		document.getElementById('altura').value= '';
		return false;
	}

	else if(imc > 24.99 && imc < 30){
		document.getElementById('resultado').style.backgroundColor="#e6b800";
		resultado= document.getElementById('resultado');
		resultado.innerHTML= '<br/> Seu IMC: ' +imc.toFixed(2) + '<h3><br/>Você está acima do peso.</h3>'
		document.getElementById('peso').value = '';
		document.getElementById('altura').value= '';
		return false;
	}

	else if(imc > 29.99 && imc < 35){
		document.getElementById('resultado').style.backgroundColor="#e60000";
		resultado= document.getElementById('resultado');
		resultado.innerHTML= '<br/> Seu IMC: ' +imc.toFixed(2) + '<h3><br/>Você está com obesidade grau I.</h3>'
		document.getElementById('peso').value = '';
		document.getElementById('altura').value= '';
		return false;
	}

	else if(imc > 34.99 && imc < 40){
		document.getElementById('resultado').style.backgroundColor="#e60000";
		resultado= document.getElementById('resultado');
		resultado.innerHTML= '<br/> Seu IMC: ' +imc.toFixed(2) + '<h3><br/>Você está com obesidade grau II.</h3>'
		document.getElementById('peso').value = '';
		document.getElementById('altura').value= '';
		return false;
	}

	else if(imc >= 40 && imc < 100){
		document.getElementById('resultado').style.backgroundColor="#e60000";
		resultado= document.getElementById('resultado');
		resultado.innerHTML= '<br/> Seu IMC: ' +imc.toFixed(2) + '<h3><br/>Você está com obesidade grau III.</h3>'
		document.getElementById('peso').value = '';
		document.getElementById('altura').value= '';
		return false;
	}

	else{
		document.getElementById('resultado').style.backgroundColor="#ff3300";
		resultado= document.getElementById('resultado');
		resultado.innerHTML='<h3>Erro: não foi possível calcular seu IMC.</h3>'
		return false;
	}
	
}