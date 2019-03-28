import { api } from "./api";
import { async } from "q";

export function GetFriends(){
     api("users")
    .then(x=> console.log(x));
}