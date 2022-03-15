const input1 = document.querySelector('#input');
const button = document.querySelector('#button');

button.addEventListener('click', function(){
    const value1 = input1.value;
    let out = "";
    for (let i=0; i<value1.length; i++){
        let curr = value1[i];
        if (curr == curr.toLowerCase()){
            out += curr.toUpperCase();
        } else { out += curr.toLowerCase(); }
    }
    document.querySelector('#output').value= out; 
    console.log("clicked");
});