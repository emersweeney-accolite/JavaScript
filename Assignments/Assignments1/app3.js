
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const button = document.querySelector('#button1');

button.addEventListener('click', function(){
    const value1 = input1.value;
    const value2 = input2.value;
    const out = parseFloat(value1) + parseFloat(value2);
    document.querySelector('#output').value= out; 
    console.log("clicked");
});