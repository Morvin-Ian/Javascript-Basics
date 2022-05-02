//Fetch Api


// Promises states(pending, fullfiled, rejected) && Thenables
const myprom = new Promise((resolve, reject)=>{
    const error = false
    if(!error){
        resolve("Resolved the promise");
    }
    else{
        reject("Rejected Promise");
    }
})

// myprom.then(value=>{
//     return value+1;
// })

// .then(newval => {
//     console.log(newval)
// })

// .catch(err =>{
//     console.log(err)
// })

// const lastprom = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         resolve("This Promise also resolved")
//     },3000);
// })


// lastprom.then(value=>{
//     console.log(value)
// })


// myprom.then(value=>{
//     console.log(value);
// })



// const users = fetch("https://jsonplaceholder.typicode.com/users");
// //pending state
// // console.log(users)

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response=>{
//         return response.json()

//     })
//     .then(data=>{
//         data.forEach(user => {
//             console.log(`${user.email}-${user.name}`)
            
//         });
//     })

// Async and await

const Jokes_func = async () =>{
    const response = await fetch("https://icanhazdadjoke.com/", {
        method:"GET",
        headers:{
            Accept:"application/json"
        }
    });


    const joke_data = await response.json();
    console.log(joke_data.joke)

}

Jokes_func()

// const getEmails = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const user_data = await response.json();

//     const det_array = user_data.map(user =>{
//         console.log(`${user.email}-${user.name}`);
//     });
// }

// getEmails()