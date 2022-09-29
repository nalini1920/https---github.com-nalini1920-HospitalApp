import { Injectable } from "@angular/core";
import { Route } from "@angular/router";
import { User } from "./user.model";

@Injectable()
export class UserService{
    public isLoginMode:boolean = false; 
    public isPatient: boolean ;
    public users: User[] = [];
    public result: User;
    public doctors: {'doctorNumber': number,
    'name': string,
    'email': string,
    'phoneNo': string,
    'speciality': string,
    'password':  string}[];

    constructor(){}

    registerUser(user: User){
        this.users = JSON.parse(localStorage.getItem("userObject") || "[]");
        let allDetail = {
           'name': user.name,
           'birthPlace': user.birthPlace,
           'birthDate': user.birthDate,
           'email' : user.email,
           'password': user.password,
           'phoneNo': user.phoneNo,
           'mrn': user.mrn
        };
        this.users.push(allDetail);
        console.log(this.users);
        localStorage.setItem("userObject", JSON.stringify(this.users));
        
    }

    registerDoctor(){
        this.doctors = [
            {
                'doctorNumber': 100,
                'name': 'Dr Hetvi Parikh',
                'email': 'hk@p.com',
                'phoneNo': '6344567811',
                'speciality': 'Orthopedic',
                'password': 'test@test'
            },
            {
                'doctorNumber': 101,
                'name': 'Dr Nalini Patel',
                'email': 'n@p.com',
                'phoneNo': '1234567890',
                'speciality': 'psychologist',
                'password': 'test1@test1'
            },
            {
                'doctorNumber': 102,
                'name': 'Dr Freya Shah',
                'email': 'f@s.com',
                'phoneNo': '6344567813',
                'speciality': 'Dentist',
                'password': 'test2@test2'
            }
        ];
        localStorage.setItem("doctorObject", JSON.stringify(this.doctors));
    }

    loginUser(newuser: {'type': string, 'email': string, 'password': string}){
        this.users = JSON.parse(localStorage.getItem("userObject"));
        console.log(this.users);
        this.result = this.users.find((user) => 
            user.email === newuser.email && user.password === newuser.password
            
        );
        console.log(this.result);
        if(this.result){
            console.log('login as patient'); 
            this.isLoginMode = true;
            this.isPatient = true;
            return this.isLoginMode, this.isPatient
        } else{
            console.log('Credentials not exist');
            return this.isLoginMode
        }
    }

    loginDoctor(newuser: {'type': string, 'email': string, 'password': string}){
        // if(user.email || user.password === null){
        //     console.log('type valid data');
        // } 
        this.doctors = JSON.parse(localStorage.getItem("doctorObject"));
        console.log(this.doctors);
        const result = this.doctors.find((user) => 
            user.email === newuser.email && user.password === newuser.password
            
        );
        console.log(result);
        if(result){
            console.log('login as doctor.');
            this.isLoginMode = true;
            this.isPatient = false;
            return this.isLoginMode, this.isPatient;
        } else{
            console.log('Crendentials not exists.');
            return this.isLoginMode
        }
    }
    getAllUsers(){
        return JSON.parse(localStorage.getItem("userObject") || "[]");
    }
    
}