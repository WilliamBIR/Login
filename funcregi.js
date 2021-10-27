if(!localStorage.getItem('usuario')){
	localStorage.setItem('usuario',"William");
}

if(!localStorage.getItem('contraseña')){
	localStorage.setItem('contraseña',"12345");
}


function iniciar(){
	const usuariointer=document.querySelector('#usuario').value;
	const contrainter=document.querySelector('#contrasena').value;
	localStorage.setItem('usuario',usuariointer);
	localStorage.setItem('contraseña',contrainter);
	alert('Usuario registrado, puede entrar ahora.')
}





document.addEventListener('DOMContentLoaded',function()
	{		
	//desactivar submit
	document.querySelector('#submit').disabled=true;
	document.querySelector('#contrasena').onkeyup=() =>
	{
		if(document.querySelector('#contrasena').value.length>0 && document.querySelector('#usuario').value.length>0)
		{
			document.querySelector('#submit').disabled=false;
		}
		else
		{
			document.querySelector('#submit').disabled=true;
		}
	}
	document.querySelector('#submit').onclick=iniciar;
	});