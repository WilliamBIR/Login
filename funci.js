if(!localStorage.getItem('usuario')){
	localStorage.setItem('usuario',"William");
}

if(!localStorage.getItem('contraseña')){
	localStorage.setItem('contraseña',"12345");
}


function iniciar(){
	const usuariointer=document.querySelector('#usuario').value;
	const contrainter=document.querySelector('#contrasena').value;
	const user = localStorage.getItem('usuario');
	const contra=localStorage.getItem('contraseña');
	
	if(usuariointer==user && contrainter==contra){
		alert(`Welcome ${user}`);
	}
	else{
		alert('User or password incorrect');
	}
	
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