import { Url } from "url";

export interface ICaterers {
    CatererId : number,
    Name : string,
    Desciption : string,
    MininumOrderQuantity : number,
    Availability : boolean,
    MenusStartingFrom : number,
    DeliveryFee : number,
    LiveKitchen : boolean,
    Image : Url,
    BaseOfOperation : string
}