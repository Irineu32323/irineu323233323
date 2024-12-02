function opennav()
{
    document.getElementById("menu").style.width='100%';    
}

function closemenu()
{
    document.getElementById("menu").style.width='0%';
}

function closenav()
{
	document.getElementById('menu').style.width='0%';
}
        

        
    
   

     
    /* Carrosel*/
	var contador = 1; //variável pública criada fora da function
	var img1="moto1g.gif";
	var img2="moto4g.gif";
	var img3="moto5g.gif";
	var img4="moto3g.gif";
	var tempo= 1500; //2500(milessegundos) : 1000 (milessegundo) = 2.5s
	var exibir=setInterval("Exibindo()",tempo);
	  
	function Exibindo()
	{
	  	document.images["slide"].src=eval("img"+contador);	
		
		if (contador<4)
			contador++;
		else
			contador=1;
	} 

	function openvimi()
	{
		window.getElementsById('aba').style.display='block';
	}

	function closemi()
	{
		document.getElementsById('aba').style.display='none';
	}
	
	function openhi()
	{
		document.getElementById('hist').style.width='100%;'
	}
	function closehi()
	{
		document.getElementById('hist').style.width='0%';
	}


	function alertafals()
	{
		this.alert("Esse processo ainda está em desenvolvimento pelo site da radmotos, para seguir com o procedimento para se candidatar a vaga ligue para o número: (11) 4002-8922. Ou para o whatsapp:(11)96500-9016. Obrigado pela compreensão");		
	}





	function exibir_resposta(x)
{
    if( document.getElementById(x).className.indexOf("exibida") ==-1)
    {
      document.getElementById(x).className = document.getElementById(x).className.replace("escondida","exibida");
    }
    else
    {
     document.getElementById(x).className = document.getElementById(x).className.replace("exibida","escondida"); 
    }    
}

	function showima()
	{
		document.getElementById('apareça').display='inline';
		
	}