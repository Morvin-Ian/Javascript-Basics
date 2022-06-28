
//Objects
const object = {
        name:"Ian Morvin",
        position:78,
        languages:['Python','Javascript'],
        specialization:{
                Python:"Backend",
                Javascript:"Frontend"
        },

        combination: function(){
                return `${this.name}" is a ${this.languages[1]} Developer` 
        }
}

// delete object.name

// console.log(object.combination())
// console.log(object["specialization"]["Python"])

const Captain = Object.create(object); //Inheritance
Captain.name ="dCaptain Kenya"
console.log(Captain.position)
console.log(Captain.name)
console.log(Object.keys(Captain))
console.log(Object.values(Captain))

//Destructing objects

function codes({name}){
        return `${name} usually codes`
}
// console.log(codes(object))

const {languages, name:title} = object;
// console.log(languages);
// console.log(title);


//Classess

class Universities{
    #nickname = "KU" //private
    constructor(rivals){
            this.size = 'large',
            this.name = 'Kenyatta University'
            this.rivals = rivals
            this.branches = [];
    }

    getSize(){return this.size}
    setSize(newsize){this.size = newsize}

    getBranches(){return this.branches}
    setBranches(branch){this.branches.push(branch)}

    list_branch(){ return `Branches: ${this.branches} (${this.#nickname})`}
    combination(){return `${this.name} is a ${this.size} Univeristy and its rival is ${this.rivals}`}
}

const Uni = new Universities("University of Nairobi");
Uni.setSize("Normal")
Uni.setBranches("Nairobi")
Uni.setBranches("Kisumu")

// console.log(Uni.combination())
// console.log(Uni.list_branch())

class child_class extends Universities{
 
    constructor(name, rivals){
        super(name, rivals)
        this.type = "International University"
      
    }

    state_type(){return `${this.name}: ${this.type}` }
}

const Child = new child_class("University of Nairobi")
// console.log(Child.state_type());
// console.log(Child.rivals);

// Factory function
function Unifactory(name){
    const rivals = "University of Nairobi";
  
  

    return{
        combination:() => console.log(`${name} has ${rivals} as Rivals`)  
    };
}

const call = Unifactory('Kenyata University')
// console.log(call.combination())