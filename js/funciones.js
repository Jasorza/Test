'use strict'
let ProForm = {
    entry: document.querySelectorAll('input.validar'),
    worth: null,
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
        for (var i = 0; i < propForm.entry.length; i++) {
            propForm.entry[i].addEventListener('change', metForm.chagueInput);
        }
    },

}