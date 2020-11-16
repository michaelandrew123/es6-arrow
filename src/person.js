import React from 'react'
//JavaScript ES6 Arrow Functions Tutorial
export default function person() {

    
class Person {
    constructor(name){
        this.name = name
    }

    printNameArrow(){
        setTimeout(() =>{ 
            console.log('Arrow: ' + this.name)
        }, 100) 
    }

    printNameFunction(){
        setTimeout(function(){
            console.log('Function: ' + this.name)
        }, 100)    
    }


}

let person = new Person('Bob')

person.printNameArrow()
person.printNameFunction()
 

    return (
        <div>
            
        </div>
    )
}

 