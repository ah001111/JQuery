import { textarea, numbers } from "./varsModule.js";



export class Contact {

    Contact_Sec() {

        let textValue = textarea.val().length;
        console.log(textValue);

        if (textValue > 99) {
            numbers.text('your available character finished');
        }
        else {
            numbers.text(`${100 - textValue}`)
        }
    }

    EventCon() {
        textarea.on('keyup', this.Contact_Sec)
    }
}













