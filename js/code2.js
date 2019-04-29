function validar() {
    datosCorrectos = true;
    error = '';
    if (document.getElementById('nombre').value == 'admin') {
        datosCorrectos = false;
        error = 'El nombre esta vacio';
        return false;
    };

        if (!regexp_password.test(document.getElementById('password').value == 'admin')) {
        datosCorrectos = false;
        error = 'La contraseña no debe ser inferior a 8 caracteres debe tener: letras, números, caracteres especiales, mayúscula y mínuscula';
        return false;
    };

    if (!datosCorrectos) {
        alert('Hay errores en el formulario ' + error);
    };
    return datosCorrectos;
}
validar();