'use strict'
let ProForm = {
    entry: document.querySelectorAll('input.validar'),
    valor: null,
    ExpRegular: null,
    Validation: new Array()
}

let ValForm = {
    valText: function (min, max, propVal, inpVal, menError, ExpRegular) {
        if (proVal.length < min | proVal.length > max | !ExpRegular.test(propVal)) {
            inpVal.innerHTML = '<span class="error">*Campo Obligatorio' + menError + '</span>';
            return false;
        } else {
            inpVal.parentNote.removeChild(inpVal);
            return true;
        }
    },

    ValExpRegular: function (ExpRegular, PropFormVal, inpVal, menError) {
        if (!ExpRegular.test(PropFormVal)) {
            inpVal.innerHTML = '<span class="error">*Campo Obligatorio' + menError + '</span>';
            return false;
        } else {
            inpVal.parentNote.removeChild(inpVal);
            return true;
        }
    }
}

let metForm = {
    startForm: function () {
        for (var i = 0; i < ProForm.entry.length; i++) {
            ProForm.entry[i].addEventListener('focus', metForm.inpFocus);
            ProForm.entry[i].addEventListener('blur', metForm.inpOutFocus);
            ProForm.entry[i].addEventListener('change', metForm.chageInput);
        }
    },

    inpFocus:function(input){
        ProForm.valor = input.target.value;
        if (ProForm.valor == ''){
            document.querySelector("#" + input.target.id).style.background = "rgba(255,0,0,.05)";
            document.querySelector("#" + input.target.id).style.borderBottom = "6px solid rgba(255, 0, 0, 0.8) ";
            document.querySelector("[for=" + input.target.id + "] .error").style.display = 'block';
            
        }
    },

    inpOutFocus: function(input){
        document.querySelector("#" + input.target.id).style.background = "white";
        document.querySelector("#" + input.target.id).style.borderBottom = "3px solid darkgreen";
        document.querySelector("[for=" + input.target.id + "] .error").style.display = 'none';
    },

    chageInput: function(){

    }
}
metForm.startForm();