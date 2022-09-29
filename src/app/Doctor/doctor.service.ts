import { Injectable } from "@angular/core";
import { User } from "../register/user.model";
import { UserService } from "../register/user.service";

@Injectable()
export class DoctorService{
    private user: User[];
    result: User;
    index: number;
    public medicine: {
        'aurthopaedic':any,
        'psychologist':any,
        'Dentist':any
}[];
    constructor(private userService: UserService) {}
    onGo(newUser: {'mrn': string}){
        this.user = JSON.parse(localStorage.getItem("userObject"));
        this.result = this.user.find((user) => 
            user.mrn === newUser.mrn
            
        );
        this.index = this.user.indexOf(this.result);
        console.log(this.result);
        // console.log(index);
        
        // return {result, index};
    }

    allMedicine(){
        this.medicine = [
            {'aurthopaedic':["Phenytoin","paroxetine","naproxen", "Tylenol", "diclofenac"],
            'psychologist':["Acebutolol","Acebrophylline","Dalteparin","Ketamine","Felodipine"],
           'Dentist':["ibuprofen", "acetaminophen","aspirin"]}
        ];
        localStorage.setItem("medicineObject", JSON.stringify(this.medicine));
    }

}