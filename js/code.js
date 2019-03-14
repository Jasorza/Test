function revisar(elemento) {
	if (elemento.value == '') {
		elemento.className = 'error';
	} else {
		elemento.className = 'input';
	}
};

function revisaNumero(elemento) {
	if (elemento.value !== '') {
		var data = elemento.value;
		if (isNaN(data)) {
			elemento.className = 'error';
		} else {
			elemento.className = 'input';
		}
	}
};

function revisaLongintud(elemento, min) {
	if (elemento.value == '') {
		var data = elemento.value;
		if (data.length < min) {
			elemento.className = 'error';
		} else {
			elemento.className = 'input';
		}
	}
};

function revisaMail(elemento) {
	if (elemento.value !== '') {
		var data = elemento.value;
		var exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!exp.test(data)) {
			elemento.className = 'error';
		} else {
			elemento.className = 'input';
		}
	}
};

function validar() {
	datosCorrectos = true;
	error='';
	if (document.getElementById('nombre').value == '') {
		datosCorrectos = false;
		error = 'El nombre esta vacio';
	};

	if (document.getElementById('telefono').value == '') {
		datosCorrectos = false;
		error = 'El telefono esta vacio';
	};

	if (isNaN(document.getElementById('telefono').value)) {
		datosCorrectos = false;
		error = 'El telefono solo debe tener numeros';
	};

	var exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!exp.test(document.getElementById('mail').value)) {
		datosCorrectos = false;
		error = 'El Correo es invalido';
	};

	if (!datosCorrectos) {
		alert('Hay errores en el formulario ' + error);
	}

	return datosCorrectos;
};