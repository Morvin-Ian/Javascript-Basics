//Objects
const object = {
    name:"Ian Morvin",
    position:78,
    languages :['Python','Javascript'],
    specialization:{
            Python:"Backend",
            Javascript:"Frontend"
    },

    combination: function(){
            return `${this.name}" is a ${this.languages[1]} Developer` 
    }
}

//converting object to JSON
const json_format = JSON.stringify(object)
// console.log(json_format)


//json_format (type=string)
// {
    
// "name":"Ian Morvin",
// "position":78,
// "languages":["Python","Javascript"],
// "specialization":{"Python":"Backend",
//                 "Javascript":"Frontend"}
            
// }

// converting JSON to object
const object_format = JSON.parse(json_format)
console.log(object_format)