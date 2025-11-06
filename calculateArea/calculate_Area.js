let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    let area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function calculateGrocery() {
    let id='grocery';
    let amount=0;
    for(let i=1; i<=3; i++) {
        let name=id+i;
        amount += parseFloat(document.getElementById(name).value);
    }
    document.getElementById('totalamount').innerText = `The total amount is: ${amount}`;
    
}