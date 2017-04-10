function onSuccess(contacts) {
    alert('Found ' + contacts.length + ' contacts.');
};
 
function onError(contactError) {
    alert('onError!');
};
 
var options      = new ContactFindOptions();
options.multiple = true;
var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
navigator.contacts.find(fields, onSuccess, onError, options);