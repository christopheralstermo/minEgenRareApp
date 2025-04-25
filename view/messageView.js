function mottattMeldingView() {
    let html = '<div>Nye meldinger<br><br>'
    let meldingsLista;
    let avsenderLista;

    // lager ei liste med meldinger og avsendere med samme index
    [meldingsLista, avsenderLista] = listerMedMeldingOgAvsender(meldingsLista, avsenderLista)
    
    // finner avsendere i lista og knytter mld og avsender med riktig index
    for(index in avsenderLista){
        html += /*html*/`
        <div 
            onmouseover="this.style.backgroundColor='rgb(205, 235, 233)'"
            onmouseout="this.style.backgroundColor=''"
            style="
                    border: solid; 
                    width: 100px; 
                    padding: 3px" 
            onclick="lesMelding('${meldingsLista[index]}')"
        >
        ${avsenderLista[index]}
        </div>
        <br>`;
    }
    html += /*HTML*/`
            <div style="
                    border: solid; 
                    width: 200px; 
                    height: 300px;"
            >
                ${model.inputs.theReadingMessage ?? ''}
            </div>`;

    html += '</div><button onclick=navigate("profil")>Forrige side</button>';

    resetMessageBox();

    return html;
};


function skrivMeldingView() {
    return /*HTML*/`
        <input id="mldInputten" onchange="model.inputs.message = this.value"><br>
        <button onclick="sendMelding()">Send</button>
    `;
}

