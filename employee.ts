export class Employee{
    photo_url?:string;
    id?:number;    //? making this an optional parameter
    emp_no: string;
first_name: string;
last_name: string;
city: string;
fullname? : string

constructor(){
this.photo_url= "http://lorempixel.com/640/480";
    this.emp_no = '';
    //this.id = 0;
    this.city = '';
    this.first_name= '';
    this.last_name = '';
}
}