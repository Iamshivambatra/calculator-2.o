class Calculator{
constructor(output){
    this.output = output;
    this.clear()
}

clear(){
this.output = '';
this.operation = undefined;
}


delete(){


}

appendnumber(number){

this.output = number;

}


chooseoperation(operation){


}

compute(){


}

updatedisplay(){
this.output.innerText = this.output

}

}



const operationbuttons = document.querySelectorAll('[data-operations]');
const numberbuttons = document.querySelectorAll('[data-value]');
const equalbutton = document.querySelectorAll('[data-equals]');
const allclearbutton = document.querySelectorAll('[data-all-clear]');
const deletebutton = document.querySelectorAll('[data-delete]');
const plusminusbutton = document.querySelectorAll('[data-plus-minus]');
const output = document.querySelectorAll('#input');
const calculator = new Calculator(output);

numberbuttons.forEach(button =>{
    button.addEventListener('click', () => { 
        calculator.appendnumber(button.innertext);
        calculator.updatedisplay();

    })
})
