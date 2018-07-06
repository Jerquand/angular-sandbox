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
        this.firstName= new Person();
    }

    sendMessage(){
        console.log(this.sendMessage!());
    }
}
   addToFavortes(){
        console.log(this.sendMessage!());
    }
}

const ContactCard = new Person(sam);

ContactCard.printName();