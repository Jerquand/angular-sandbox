interface Person {
    firstName: string;
    lastName: string;
    birthday: Date;
}

interface Contact {
    phoneNumber: number;
    email: string;
    slack: string;
    formatNumber: void;
}

class ContactCard implements Person, Contact {
    firstName: string;
    phoneNumber: number;

    constructor(firstName: string) {
        this.firstName = new ContactCard (firstName);
    }

    sendMessage(){
        console.log(this.sendMessage!());
    }

    addToFavortes(){
        console.log(this.sendMessage!());
    }
    phoneNumber(): void {
        console.log(this.currentNumber.toNumberString());
    }
}

const ContactCard = new Person("Sam");

ContactCard.firstName();
ContactCard.LastName();
ContactCard.birthday();
ContactCard.phoneNumber()
ContactCard.email();
ContactCard.slack();
ContactCard.formatNumber();