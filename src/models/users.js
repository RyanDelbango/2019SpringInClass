import { api } from "./api";
import { async } from "q";

export async function GetFriends(){
     const  x  = await api("users")
    console.log(x)
    return x;
}