
function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[prueba="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.name);
    });
    return values;
}


function UpdateCost()  {

    var sum = 0;
    var gn, elem;
    var gn, elem;

    for (i=0; i<3; i++) {
        gn = 'game'+i;
        elem = document.getElementById(gn);
        if (elem.checked == true) {   
          sum += Number(elem.value); } 
      }  

    document.getElementById('Total').innerHTML='$'+ sum.toFixed(0);






    document.getElementById('Bloque').innerHTML = "";
    for(const number of getSelectedCheckboxValues('color') ){
    var Bloque= document.getElementById('Bloque');
    const todo= document.createElement("div");

    todo.classList.add('page__toggle');
    Bloque.appendChild(todo);

    const Segundo= document.createElement("label");

    Segundo.classList.add('toggle');
    todo.appendChild(Segundo);

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = true;
    checkbox.disabled = true;
    checkbox.classList.add('toggle__input', 'form-check-input');
    Segundo.appendChild(checkbox );

    var Cuarto= document.createElement('span');

 
    Cuarto.classList.add('toggle__label');
    Segundo.appendChild(Cuarto );

    var Quinto= document.createElement('span');
    Quinto.textContent = number;
    Quinto.classList.add('toggle__text');
    Cuarto.appendChild(Quinto);
 
    }
}
