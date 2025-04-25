function userProfileView(){
    let brukere = model.data.users; 
    let valgtBruker = model.app.selectedUserId; 
    html = '<div>';

    for(let i = 0; i < model.data.users.length; i++){
        if(brukere[i].id === valgtBruker && brukere[i].login === false){
            html += /*html*/`
                ${brukere[i].name}<br>
            `;
        }
        else if(brukere[i].id === valgtBruker && brukere[i].login === true){
            html += /*html*/`
                ${brukere[i].name}
                <br><br>
                <button onclick="editMode(${brukere[i].id})">Rediger</button>
                <br><br>
                <button onclick="motattMelding(${brukere[i].id})">Meldinger</button>
                <br><br>
                <button onclick="mldFunksjon(); model.app.mldFunk = !model.app.mldFunk; updateView()">Finn bruker</button>
                <br><br>
                ${model.app.mldFunk ? mldFunksjon() : ''}
            `;
        }
    };

    html += '</div>';
    return html;
};





