const details = {
    name:"Ian Morvin",
    id:12345678,
    tasks:['eat','sleep','repeat']
}
json_details = JSON.stringify(details)

sessionStorage.setItem('sessionstore', json_details);
const data_session= sessionStorage.getItem('sessionstore')
console.log(JSON.parse(data_session))

localStorage.setItem('localstore', json_details);
const data= localStorage.getItem('localstore')
console.log(data)

// Other methods
// localStorage.clear()
// localStorage.removeItem('name')
// localStorage.key(index(0,1,2...))
// localStorage.length