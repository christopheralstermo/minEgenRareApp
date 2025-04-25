function editModeView() {
    let html = '<div>';
    for(bruker of model.data.users){
        if(bruker.id === model.inputs.edit.id){
            html += /*html*/`
            Endre navnet ditt, ${bruker.name}?<br>
            <input id="nameChanger" onchange="editInput(this.value)">
            <button onclick="saveChange(${bruker.id})">lagre</button>
            `; 
        };
    };
    html += `</div>`;
    return html;
};