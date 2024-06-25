import { Specialist } from "./specialist";
import { User } from "./user";

export interface Review {
    "id": any,
    "user": any,
    "specialist": Specialist,
    "description": string
}
