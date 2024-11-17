import { Time } from "@angular/common";
import { Profesor } from "./Profesor";
import { Users } from "./users";
import { Modalidad } from "./Modalidad";

export class ReservaAsesoria{
    idRes:number=0
    fechaRes: Date = new Date(Date.now())
    hInicioRes: Time = {hours: 0, minutes: 0}
    hFinRes: Time = {hours: 0, minutes: 0}
    viaRes:string=""

    Pro:Profesor = new Profesor()
    Us:Users = new Users()
    Mo:Modalidad = new Modalidad()
}