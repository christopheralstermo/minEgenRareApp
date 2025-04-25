function sendMelding() {
    let messageSender;
    let theMessage = model.inputs.message;
    // finner ut hvem som er logget inn og legger til navnet som avsender
    for(let index in model.data.users){
        if(model.data.users[index].login === true)
        messageSender = model.data.users[index].name;
    };
    // finner ut hvilken ID som er mottaker 
    // og pusher melding og avsender til mottakers liste
    for(let bruker of model.data.users){
        if (bruker.id === model.app.recieverId){
            bruker.message.push(theMessage)
            bruker.messageSender.push(messageSender)
        };
    };
    // legger inn ID til avsender
    for(bruker of model.data.users){
        if(bruker.login === true){
            model.app.senderId = bruker.id
        };
    };

    document.getElementById('mldInputten').value = '';
};


function lesMelding(mld) {
    model.inputs.theReadingMessage = mld;
    updateView();
};


function skrivMelding(idTilMottaker) {
    // henter id til mottaker
    model.app.recieverId = idTilMottaker;
    navigate('melding');
}


function mldFunksjon() {
    // henter og viser en liste med alle brukere
    let brukere = model.data.users;
    let html = '<div style="border: solid; width: 200px; height: 300px;">'
    for(bruker of brukere){
        if(!bruker.login){
            html += /*html*/`
                ${bruker.name} <button onclick="skrivMelding(${bruker.id})">skriv mld</button><br><br>
            `;
        };
    };
    html += '</div>'
    return html;
};


function motattMelding(id){
    model.app.senderId = id;
    navigate('mottattMelding')
};


function listerMedMeldingOgAvsender(melding, avsender){
    for(index in model.data.users){
        if(model.data.users[index].id === model.app.senderId){     
            melding = model.data.users[index].message;
            avsender = model.data.users[index].messageSender;
        };
    };
    return [melding, avsender]
};


function resetMessageBox() {
    // nullstiller-hack så ikke siste leste melding blir med over i andre profiler
    if(model.app.currentview !== 'mottattMelding'){
        model.inputs.theReadingMessage = '';
    };
};
