const lengthp = document.querySelector('#length-number');
const upper = document.querySelector('#uppercase');
const lower = document.querySelector('#lowercase');
const number = document.querySelector('#numbers');
const symbol= document.querySelector('#symbols');
const input = document.querySelector('#input');

console.log(lengthp.value)
console.log(upper.checked)
console.log(lower.checked)
console.log(number.checked)
console.log(symbol.checked)

const uppercasestr = 'ABVCXZDFGHJKLMNBEQWTYUIOPL';
const lowercasestr = 'abvcxzdfghjklmnbewtyuioplk';
const numberstr = '0987654321';
const symbols = '!~@#$%^&*()';
generate.addEventListener('click', () => {
     let str = '';
     if( upper.checked){
        str += uppercasestr;
     }
     if(lower.checked){
        str += lowercasestr;
     }
     if(number.checked){
        str += numberstr;
     }
     if (symbols.checked){
        str += symbols;
     }
     console.log(str, "str")
     let password = '';
     for (let i=0; i < lengthp.value; i++){
        console.log(str.length,"str.length")
        let index = Math.floor(Math.random() * str.length);
        console.log(index,"index")
        console.log("Math.random()", Math.random())
        console.log("Math.random() * str.length", Math.random() * str.length);
        console.log("Math.floor(Math.random() * str.length)", Math.floor(Math.random() * str.length));
        console.log(str[index]);
        password += str[index];
     }
     console.log(password,"password")
     input.value = password;
});
   copy.addEventListener('click', () => {
    if (input.value === ''){
        alert('Please Generate  a Password First');
    }else {
        const newele = document.createElement('textarea');
        newele.value = input.value;
        document.body.appendChild(newele);
        newele.select();
        input.ariaSelected();
        document.execCommand('copy');
        alert('Password Copied to Clipboard');
        newele.remove();
    }
   })