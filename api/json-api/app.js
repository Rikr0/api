const cargarPosts = document.querySelector('#cargar').addEventListener('click', cargarAPI);

function cargarAPI(){
	//console.log('OK')
	const xhr = new XMLHttpRequest();
	//abrir la conexión
	xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
	//carga y leer datos
	xhr.onload = function(){
		if (this.status == 200) {
			//console.log(JSON.parse(this.responseText));
			const respuesta = JSON.parse(this.responseText);
			let contenido = '';
			respuesta.forEach(function(post){
				contenido += `
					<h3>${post.title}</h3>
					<p>${post.body}</p>
				`;
			});
			document.getElementById('listado').innerHTML = contenido;
		}
	}

	//enviar la conexión 
	xhr.send();
}