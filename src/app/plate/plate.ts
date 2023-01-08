import { Restaurant } from "../restaurants/restaurant";

export interface Plate {
    id: number;
    name: String;
    cooktime: String;
    image:String;
    restaurant: Restaurant;
}
