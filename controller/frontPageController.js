function filter(checked, fylket) {
    const fylkeListaMi = model.data.fylkeLista;

    if(checked === true){
        fylkeListaMi.push(fylket)
    } else if(checked === false){
        fylkeListaMi.splice(minEgenIndexFunksjon(fylkeListaMi, fylket), 1);
    };
    updateView();
};


function minEgenIndexFunksjon(listaMi, elementetMedIndex) {
    for(let i = 0; i < listaMi.length; i++){
        if(listaMi[i] === elementetMedIndex){
            return i;
        };
    };
    return -1;
};


function upperCaseStandard(value) {
    return value[0].toUpperCase() + value.slice(1).toLowerCase()
};


function theCreatorOfNameAndCounty(inputten, navn) {
    if(inputten === 'input'){
        model.inputs.newUser.navn = upperCaseStandard(navn);
    }
    else if(inputten === 'dropdown'){
        model.inputs.newUser.fylke = upperCaseStandard(navn);
    };
};


function theSearch(verdien) {
    model.inputs.search = upperCaseStandard(verdien);
    updateView();
}