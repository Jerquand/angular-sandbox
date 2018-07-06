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
    lastName: string;
    birthday: Date;
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
        console.log(this.newMethod().phoneNumber.toString());
    }

    private newMethod() {
        return this;
    }

}

const contactCard = new ContactCard("Sam");

contactCard.firstName();
contactCard.phoneNumber()
contactCard.formatNumber();