
function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[prueba="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.name);
    });
    return values;
}


function UpdateCost()  {
    document.getElementById('container').innerHTML = "";
    for(const number of getSelectedCheckboxValues('color') ){
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'car';
    checkbox.name = 'interest';
    checkbox.value = 'car';
    checkbox.checked = true;
    checkbox.disabled = true;
 
    var label = document.createElement('label')
    label.htmlFor = 'car';

    label.appendChild(document.createTextNode(number));
 
    var br = document.createElement('br');
 
    var container = document.getElementById('container');
    container.appendChild(checkbox);
    container.appendChild(label);
    container.appendChild(br);
    }
}