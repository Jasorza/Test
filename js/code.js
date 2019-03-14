function revisar(elemento) {
    if (elemento.value == '') {
        elemento.className = 'error';
    } else {
        elemento.className = 'input';
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

function revisaPass(elemento) {
    if (elemento.value !== '') {
        var data = elemento.value;
        regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
        if (!regexp_password.test(data)) {
            elemento.className = 'error';
        } else {
            elemento.className = 'input';
        }
    }
};

function validar() {
    datosCorrectos = true;
    error = '';
    if (document.getElementById('nombre').value == '') {
        datosCorrectos = false;
        error = 'El nombre esta vacio';
    };

    if (document.getElementById('telefono').value == '') {
        datosCorrectos = false;
        error = 'El telefono esta vacio';
    };

    var regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
    if (!regexp_password.test(document.getElementById('password').value)) {
        datosCorrectos = false;
        error = 'La contraseña no debe ser inferior a 8 caracteres debe tener: letras, números, caracteres especiales, mayúscula y mínuscula';
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