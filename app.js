
function updateView() {
    document.getElementById('app').innerHTML = /*html*/`
    <div id="navBar"></div>
    <div id="Main">${thePages()}</div>
    <div id="footer">${model.app.currentView === 'frontPage' || model.app.currentView === 'mottattMelding'? '' : /*HTML*/`
            <button onclick="navigate('frontPage')">
            tilbakeKnappenMin
            </button>
            `}
    </div>
    `;
};


function thePages() {
    theView = '';

    switch(model.app.currentView) {
        case 'frontPage':
            theView = frontPageView();
            break;
        case 'profil':
            theView = userProfileView();
            break;
        case 'melding':
            theView = skrivMeldingView();
            break;
        case 'mottattMelding':
            theView = mottattMeldingView();
            break;
        case 'editMode':
            theView = editModeView();
            break;
    };

    return theView;
}

