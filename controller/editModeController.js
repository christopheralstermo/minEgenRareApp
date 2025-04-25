function editMode(id) {
    model.inputs.edit.id = id;
    navigate('editMode');
}

function editInput(verdien) {
    return model.inputs.edit.name = upperCaseStandard(verdien);
}