
import { Student } from "./student.js";

const pa = new Student('papa' , 'laye');

const ma = new Student('mama','laye');

const to = new Student('toto' , 'laye');

function setNom(id,obj) {
    
    document.getElementById(`${id}_nom`).innerText = obj.name;
    document.getElementById(`${id}_prenom`).innerText = obj.prenom;
}


document.getElementById('first_card').addEventListener('click' , e => {
    
    e.preventDefault()

    changeParams('first' , pa , 'momo');


})

document.getElementById('second_card').addEventListener('click' , e => {
    
    e.preventDefault()

    changeParams('second' , ma , 'hakill');


})

document.getElementById('three_card').addEventListener('click' , e => {
    
    e.preventDefault()

    changeParams('three' , to , 'lili');


})


function changeParams(id , obj , name) {
    obj.setName(name);
    setNom(id , obj);
}

setNom('first' , pa);
setNom('second' , ma);
setNom('three' , to);
