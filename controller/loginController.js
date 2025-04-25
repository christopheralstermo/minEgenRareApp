function logOut(){
    const loginLista = model.data.selectedLogin;
    let brukere = model.data.users;
    for(bruker of brukere){
        if(bruker.login){
            bruker.login = !bruker.login
        };
    };
    loginLista.splice(0,1);
    model.inputs.logIn.navn = null;
    updateView();
}


function loginInput(verdien) {
    return model.inputs.logIn.navn = upperCaseStandard(verdien);
}


function login() {
    let brukere = model.data.users;
    for(let bruker of brukere){
        if(bruker.name === model.inputs.logIn.navn){
            bruker.login = true;
            model.data.selectedLogin.push(bruker)
            userProfile(bruker.id, true);
        };
    };
    updateView();
}