
export class Student {
    constructor(name , prenom) {
        this.name = name ; 
        this.prenom = prenom ;
    }

    setName(_name) {
        this.prenom = _name ; 
    }

    getName() {
         return this.prenom + ' => ' +  this.name;
    }
}