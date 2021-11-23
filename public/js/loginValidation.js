window.addEventListener("load", function(e){
    let form = document.querySelector("#form1");

    form.addEventListener("submit", function(e){
        //Login Email Validation
        let emailLogin = document.getElementsByName("emailLogin")[0].value;
        if(emailLogin == ""){
            alert("El email debe estar completo.");
            e.preventDefault()
        } else if (emailLogin.length < 6) {
            alert("El campo debe tener al menos 6 caracteres")
            e.preventDefault()
        }
    })
});