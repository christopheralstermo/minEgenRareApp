function saveUser() {
    let nyttNavn = model.inputs.newUser.navn;
    let nyttFylke = model.inputs.newUser.fylke;
    let nyId = model.inputs.newUser.id;
    let nyLogin = model.inputs.newUser.login;
    let brukere = model.data.users

    if(nyttNavn !== null && nyttFylke !== null){
        nyId = model.data.users.length + 1;
        nyLogin = false;
        const nyBruker = {
            id: nyId, 
            name: nyttNavn, 
            fylke: nyttFylke, 
            login: nyLogin, 
            message: [], 
            messageSender: [],
        }
        if(nyttNavn !== null){
            brukere.push(nyBruker)
        };
    };
    model.inputs.newUser.navn = null;
    updateView();
};


function userProfile(id, login) {
    if(login){
        for(let index in model.data.users){
            if(model.data.users[index].id === id && model.data.users[index].login === false){
                model.app.selectedUserId = id;
            }else{
                model.app.selectedUserId = id;
            };
        };
    } else{
        for(let index in model.data.users){
            if(model.data.users[index].id === id && model.data.users[index].login === false){
                model.app.selectedUserId = id;
                navigate('profil');
            }else{
                model.app.selectedUserId = id;
                navigate('profil');
            };
        };
    }
};

