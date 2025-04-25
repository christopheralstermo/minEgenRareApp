function frontPageView() {
    let html = '<div style="display: flex;">';
    
    html += /*html*/`
        ${fylker()}
        ${htmlProfileCards()}
    `;
    html += `</div> ${searchBox()} ${createUserHtml()}  ${loginHtml()}`;

    return html;
};


function searchBox() {
    return /*html*/`
        <input 
            style="margin-top: 20px;"
            onchange="theSearch(this.value)"
            placeholder="søk bruker"
        >
    `;
};


function createUserHtml() {
    return /*html*/`
    <div style="border:solid; width: 175px; margin-top: 10px">
        Ny Bruker
        <input 
            style="margin-top: 20px;"
            onchange="theCreatorOfNameAndCounty('input',this.value)"
            placeholder="Navn"
        >
        ${theFylkerHtml()}
        <button onclick="saveUser()">Lagre</button>
    </div>
    `;
}


function loginHtml() {
    let brukere = model.data.users;
    const loginLista = model.data.selectedLogin;
    if(loginLista.length === 0){
        return /*html*/`
            <div style="border:solid; width: 175px; margin-top: 10px">
                Logg inn
                <input 
                    style="margin-top: 20px;"
                    onchange="loginInput(this.value);"
                    placeholder="Navn"
                >
                <button onclick="login()">Logg inn</button>
            </div>
        `;
    }else{
        return /*html*/`
            <div style="border:solid; width: 175px; margin-top: 10px">
                <button onclick="logOut()">Logg ut</button>
            </div>
        `;
    };
};


function theFylkerHtml() {
    let optionValue = 1;
    
    let html = /*html*/`
        <select name="Fylke" onclick="theCreatorOfNameAndCounty('dropdown', this.value)">
        <option value="" disabled selected>Fylke</option> 
    `;

    for(let fylker of model.data.fylker){
        html += /*html*/`
            <option 
                value="${fylker}"
                >
                ${fylker}
            </option>
        `;
        optionValue++;
    };
    html += '</select>';
    
    return html;
};


function fylker() {
    let html = '<div>';
    let fylker = model.data.fylker.sort()
    let fylkeLista = model.data.fylkeLista
    
    for(let fylke of fylker){
        const isChecked = fylkeLista.includes(fylke) ? 'checked' : '';
        html += /*HTML*/`
        <label class="fylkeRuter">
            ${fylke}
            <input 
                onchange="filter(this.checked, '${fylke}')"
                type="checkbox"
                ${isChecked}
            >
        </label>
        `;
    };

    html += '</div>';
    return html;
};


function htmlProfileCards() {
    let brukere = model.data.users;
    let fylkeFilter = model.data.fylkeLista;
    let buttonId = 1;
    let html = '<div>';
    
    for(let bruker of brukere){
        if(fylkeFilter == 0 || fylkeFilter.includes(bruker.fylke)){
            if(bruker.name.includes(model.inputs.search)){
                html += /*HTML*/`
                        ${searchMode(bruker, true, buttonId)}
                    `;
                    buttonId++;
            }else{
                html += /*HTML*/`
                        ${searchMode(bruker, false, buttonId)}
                    `;
                    buttonId++;
            };
        };
    };

    html += '</div>';

    return html;
};


function searchMode(inputten, mode, buttonid) {
    if(mode){
        return /*html*/`
            <div id="theLabel">
                id: ${inputten.id}, 
                navn: <b style="font-size: 20px;">${inputten.name}</b>, 
                fylke: ${inputten.fylke}
                <button
                    id="${buttonid}"
                    style="margin-left: 10px;"
                    onclick="userProfile(${inputten.id})"
                >
                ${model.data.selectedLogin.length > 0 && 
                    model.data.selectedLogin[0].id === buttonid  ?
                     'Rediger profil' : 'Se profil'}
                </button>
            </div>
        `;
    }
    
    return /*html*/`
            <div id="theLabel">
                id: ${inputten.id}, 
                navn: ${inputten.name}, 
                fylke: ${inputten.fylke}
                <button 
                    id="${buttonid}"
                    style="margin-left: 10px;"
                    onclick="userProfile(${inputten.id})"
                >
                ${model.data.selectedLogin.length > 0 &&
                     model.data.selectedLogin[0].id === buttonid  ?
                      'Rediger profil' : 'Se profil'}
                </button>
            </div>
        `;
    
};





