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
        this.firstName = firstName;
    }

    sendMessage(){
        console.log("send message!");
    }

    addToFavortes(){
    console.log("adding to favortes!");
    }

    formatNumber(): void {
        console.log(this.phoneNumber.toNumberString());
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