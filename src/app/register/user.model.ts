export class User{
    public name: string;
    public birthPlace: string;
    public birthDate: string;
    public phoneNo: string;
    public email: string;
    public password: string;
    public mrn : string;

    constructor(name: string, birthPlace: string, birthDate: string, phoneNo: string, email: string, password: string, mrn: string){
        this.name = name;
        this.birthPlace = birthPlace;
        this.birthDate = birthDate;
        this.phoneNo = phoneNo;
        this.email = email;
        this.password = password;
        this.mrn = mrn;
    }
}