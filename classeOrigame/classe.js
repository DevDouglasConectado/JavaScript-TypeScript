/*
function Button(text, backgroud){
    this.text = text;
    this.backgroud = backgroud;
}

Button.prototype.element = function(){
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    return buttonElement;
}*/
class Button{
    constructor(text, backgroud,color){
        this.text = text;
        this.backgroud = backgroud;
        this.color = color;
    }
    element(){
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        buttonElement.style.color = this.color;
        return buttonElement;
    }
}
const blueButton = new Button('comprar','blue','white');


console.log(blueButton.element());

console.log(blueButton);