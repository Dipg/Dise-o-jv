var values = [15+'s',30+'s',45+'s',60+'s',2+'m',3+'m'];   
var myRange = document.querySelector('#myRange');
var myValue = document.querySelector('#myValue');
var myUnits = 'myUnits';
var off = myRange.offsetWidth / (parseInt(myRange.max) - parseInt(myRange.min));
var px =  ((myRange.valueAsNumber - parseInt(myRange.min)) * off) - (myValue.offsetParent.offsetWidth / 2);

  myValue.parentElement.style.left = px + 'px';
  myValue.parentElement.style.top = myRange.offsetHeight + 'px';
  myValue.innerHTML = myRange.value + ' ' + myUnits;

  myRange.oninput =function(){
      
      
    let px = ((myRange.valueAsNumber - parseInt(myRange.min)) * off) - (myValue.offsetWidth / 2);
    myValue.innerHTML = values[this.value];
    myValue.parentElement.style.left = px + 'px';
  };
  