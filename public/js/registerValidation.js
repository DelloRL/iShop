window.addEventListener("load", function (e) {
    let form = document.querySelector("#registerForm");

    form.addEventListener("submit", function (e) {
        //Register Name Validation
        let nameRegister = document.getElementsByName("nameRegister")[0].value;
        if (nameRegister == "") {
            alert("El Nombre debe estar completo.");
            e.preventDefault()
        }

        //Register Email Validation
        let emailRegister = document.getElementsByName("emailRegister")[0].value;
        if (emailRegister == "") {
            alert("El Email debe estar completo.");
            e.preventDefault()
        } else if (emailRegister.length < 6) {
            alert("El campo debe tener al menos 6 caracteres")
            e.preventDefault()
        }

        //Register Password Validation
        let passwordRegister = document.getElementsByName("passwordRegister")[0].value;
        if (passwordRegister == "") {
            alert("La contraseña debe estar completa.");
            e.preventDefault()
        } else if (passwordRegister.length < 6) {
            alert("El mínimo de caracteres para la contraseña es 6");
            e.preventDefault()
        }

        //Register Avatar Validation
        let avatar = document.getElementsByName("avatar")[0].value;
        if (avatar == "") {
            alert("Por favor seleccione una imagen de perfil.");
            e.preventDefault()
        }
    })
});
