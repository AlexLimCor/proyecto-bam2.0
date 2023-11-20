
// VALIDACION DE FORMULARIO


const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario,e.target, 'usuario');
		break;
		case "nombre":
			validarCampo(expresiones.nombre,e.target, 'nombre');
		break;
		case "apellido":
			validarCampo(expresiones.apellido,e.target ,'apellido')
		break;
		case "correo":
			validarCampo(expresiones.correo,e.target, 'correo')
		break;
		case "clave":
			validarCampo(expresiones.password,e.target, 'clave')
			validarLasClaves()
		break;
		case "repetirClave":
			validarLasClaves()
		break;
		case "celular":
			validarCampo(expresiones.telefono,e.target, 'celular')
		break;
	}	
}

const estados = {
	usuario: false,
	nombre: false,
	apellido: false,
	clave: false,
	celular: false,
	correo: false
}

const validarCampo = (expresion,input,campo) =>{
	if (expresion.test(input.value)){
		document.getElementById(`grupo-${campo}`).classList.remove('formulario-grupo-incorrecto');
		document.getElementById(`grupo-${campo}`).classList.add('formulario-grupo-correcto');
		document.querySelector(`#grupo-${campo} i`).classList.remove('fa-circle-xmark');
		document.querySelector(`#grupo-${campo} i`).classList.add('fa-circle-check');
		document.querySelector(`#grupo-${campo} .formulario-info`).classList.remove('formulario-info-activo')
		estados[campo] = true;
	}else{
		document.getElementById(`grupo-${campo}`).classList.add('formulario-grupo-incorrecto');
		document.getElementById(`grupo-${campo}`).classList.remove('formulario-grupo-correcto');
		document.querySelector(`#grupo-${campo} i`).classList.add('fa-circle-xmark');
		document.querySelector(`#grupo-${campo} i`).classList.remove('fa-circle-check');
		document.querySelector(`#grupo-${campo} .formulario-info`).classList.add('formulario-info-activo')
		estados[campo] = false
	}
}

const validarLasClaves = () =>{
	const inputClave = document.getElementById('clave')
	const inputRepetirClave = document.getElementById('repetirClave')

	if (inputClave.value !== inputRepetirClave.value ){
		document.getElementById(`grupo-repetirClave`).classList.add('formulario-grupo-incorrecto');
		document.getElementById(`grupo-repetirClave`).classList.remove('formulario-grupo-correcto');
		document.querySelector(`#grupo-repetirClave i`).classList.add('fa-circle-xmark');
		document.querySelector(`#grupo-repetirClave i`).classList.remove('fa-circle-check');
		document.querySelector(`#grupo-repetirClave .formulario-info`).classList.add('formulario-info-activo')
		estados['clave'] = false;
	} else{
		document.getElementById(`grupo-repetirClave`).classList.remove('formulario-grupo-incorrecto');
		document.getElementById(`grupo-repetirClave`).classList.add('formulario-grupo-correcto');
		document.querySelector(`#grupo-repetirClave i`).classList.remove('fa-circle-xmark');
		document.querySelector(`#grupo-repetirClave i`).classList.add('fa-circle-check');
		document.querySelector(`#grupo-repetirClave .formulario-info`).classList.remove('formulario-info-activo')
		estados['clave'] = true;
	}
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	const terminos = document.getElementById('terminos')
	if (estados.usuario && estados.nombre && estados.clave && estados.apellido && estados.correo && estados.celular && terminos.checked){
		formulario.reset();
		document.getElementById('formulario-mensaje-exito').classList.add('formulario-mensaje-exito-activo');
		document.getElementById('formulario-mensaje-error').classList.remove('formulario-mensaje-error-activo')
		setTimeout(() => {
			document.getElementById('formulario-mensaje-exito').classList.remove('formulario-mensaje-exito-activo');
		},5000)
		document.querySelectorAll('.formulario-grupo-correcto').forEach((icono) =>{
			icono.classList.remove('formulario-grupo-correcto')
		})
	} else{
		document.getElementById('formulario-mensaje-error').classList.add('formulario-mensaje-error-activo');
		setTimeout(() => {
			document.getElementById('formulario-mensaje-error').classList.remove('formulario-mensaje-error-activo');
		},5000)
	}
});

