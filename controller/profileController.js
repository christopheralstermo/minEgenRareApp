function saveChange(id) {
    for(bruker of model.data.users){
        if(bruker.id === id){
            model.inputs.deleteName = bruker.name;
            delete bruker.name;
            bruker.name = model.inputs.edit.name;
        };
    };

    // endrer navn i allerede sendte meldinger
    for(bruker of model.data.users){
        if(bruker.messageSender){
            for(index in bruker.messageSender){
                console.log(bruker.messageSender[index])
                if(bruker.messageSender[index] === model.inputs.deleteName){
                    bruker.messageSender[index] = model.inputs.edit.name;
                };
            };
        };
    };
    document.getElementById('nameChanger').value = '';
    updateView();
}