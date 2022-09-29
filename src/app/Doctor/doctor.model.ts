export class Doctor{
    public id: number;
    public patientproblem: [];
    public medicine?: [];
    public time : string;

    constructor(id: number, patientproblem: [], medicine: [], time: string){
        this.id = id;
        this.patientproblem = patientproblem;
        this.medicine = medicine;
        this.time = time;
    }
}