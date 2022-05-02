// //selecting with id
// const cont = document.querySelector(".container")
// cont.style.backgroundColor = 'red';
// const header = document.querySelector('h1')
// header.style.cursor='pointer'
// console.log(header)
// evenNo = cont.querySelectorAll('.No:nth-of-type(2n)')
// console.log(evenNo);

// for(i=0; i<evenNo.length ;i++){
//     evenNo[i].style.backgroundColor="green";
// }

// // lastNo = document.getElementById('view6')
// // lastNo.style.color="red";

// header.addEventListener('click',()=>{

//     alert("Clicked")

// })


const myform = document.getElementById('myform')
const myname = myform.querySelector('.name')
const phone = myform.querySelector('.phone')
const email = myform.querySelector('.email')

myform.addEventListener('submit',(event) =>{
    event.preventDefault();

    if(myname.value.length < 2){
        alert(myname.value.length)}
    
    else if(phone.value.isNumber==false)
        {alert("Phone length should be 10")}
    
    else{alert(phone.value)}  
})