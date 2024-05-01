import { Specialist } from "./specialist";
import { User } from "./user";

export interface Review {
    "id": any,
    "user": User,
    "specialist": Specialist,
    "description": string
}