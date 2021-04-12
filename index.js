const formulario= document.getElementById("formulario");
console.log(formulario);
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellidos: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
	edad: /^\d{1,2}$/ // 1 a 2 numeros.
}


const campos = {
	nombre: false,
	apellidos: false,
	correo: false,
	telefono: false,
	edad: false,
	terminos:false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellidos":
			validarCampo(expresiones.apellidos, e.target, 'apellidos');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
		case "edad":
			validarCampo(expresiones.edad, e.target, 'edad');
		break;
		
	}
}

const validarCampo = (expresion, input, campo) => {
	
	if(expresion.test(input.value)){
		
		document.getElementById(`grupo_${campo}`).classList.remove("error");
		document.getElementById(`grupo_${campo}`).classList.add("noError");
		document.getElementById(`${campo}`).classList.remove("borderError");
		
		campos[campo] = true;
	} else {
		
		document.getElementById(`grupo_${campo}`).classList.remove("noError");
		document.getElementById(`grupo_${campo}`).classList.add("error");
		document.getElementById(`${campo}`).classList.add("borderError");
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});


const validarFormularioInput = (input) => {
	switch (input.name) {
		
		case "nombre":
			validarCampoInput(expresiones.nombre, input, 'nombre');
		break;
		case "apellidos":
			validarCampoInput(expresiones.apellidos, input, 'apellidos');
		break;
		case "correo":
			validarCampoInput(expresiones.correo, input, 'correo');
		break;
		case "telefono":
			validarCampoInput(expresiones.telefono, input, 'telefono');
		break;
		case "edad":
			validarCampoInput(expresiones.edad, input, 'edad');
		break;
	}
}

const validarCampoInput = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo_${campo}`).classList.remove("error");
		document.getElementById(`grupo_${campo}`).classList.add("noError");
		document.getElementById(`${campo}`).classList.remove("borderError");
		
		campos[campo] = true;
	} else {
		document.getElementById(`grupo_${campo}`).classList.remove("noError");
		document.getElementById(`grupo_${campo}`).classList.add("error");
		document.getElementById(`${campo}`).classList.add("borderError");
		campos[campo] = false;
	}
}


 formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	const terminos = document.getElementById('terminos');
	console.log(terminos.checked);
	if(campos.nombre && campos.apellidos && campos.correo && campos.telefono&& campos.edad && terminos.checked ){
		
		formulario.reset();
		document.getElementById('formulario_mensaje').classList.remove("error");
		document.getElementById('formulario_mensaje').classList.add("noError");
	} else {
		document.getElementById('formulario_mensaje').classList.remove("noError");
		document.getElementById('formulario_mensaje').classList.add("error");
		inputs.forEach((input) => {
			validarFormularioInput(input);
		});
	}
})