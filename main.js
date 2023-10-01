import { NEVEK } from "./adat.js";
import NevMegjelenit from "./Megtekint.js";

$(function(){
    const szuloElem=$(".adatok");
    new NevMegjelenit(NEVEK, szuloElem);
})