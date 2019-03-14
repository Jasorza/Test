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

function  validarFecha(elemento){
    if (elemento.value != "") {
        var fecha = new Date(elemento.value);
        console.log(fecha);
        if (fecha) {
            console.log("fecha correcta");
            var y = fecha.getUTCFullYear();
            var m = fecha.getUTCMonth() + 1;
            var d = fecha.getUTCDate();
            //var diaActual = (new Date(y, m, 0)).getDate();
            var diaActual = new Date().getUTCDate();
            console.log(diaActual);
            console.log("año" + y, "mes" + m, "dia" + d);
            var resultado = m >= 0 && m < 12 && y > 1900 && y < 32768 && d > 0 && d <= diaActual;
            elemento.value["fechaIng"] = resultado;
            if (resultado) {
                document.querySelector("[for=" + input.target.id + "] .error").parentNode.removeChild(document.querySelector("[for=" + input.target.id + "] .error"))
            } else {
                document.querySelector("[for=" + input.target.id + "] .error").innerHTML = '<span style="color:red">*Error al ingresar los datos: El formato correcto es dd/mm/yyyy la fecha no puede ser superior a la actual </span>';
            }
        }
    }
};

    function validar() {
        datosCorrectos = true;
        error = '';
        if (document.getElementById('nombre').value == '') {
            datosCorrectos = false;
            error = 'El nombre esta vacio';
            return false;
        };

        if (document.getElementById('telefono').value == '') {
            datosCorrectos = false;
            error = 'El telefono esta vacio';
            return false;
        };

        var regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
        if (!regexp_password.test(document.getElementById('password').value)) {
            datosCorrectos = false;
            error = 'La contraseña no debe ser inferior a 8 caracteres debe tener: letras, números, caracteres especiales, mayúscula y mínuscula';
            return false;
        };

        var exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!exp.test(document.getElementById('mail').value)) {
            datosCorrectos = false;
            error = 'El Correo es invalido';
            return false;
        };



        if (!datosCorrectos) {
            alert('Hay errores en el formulario ' + error);
        };
        return datosCorrectos;

    }