/// <reference types="../@types/jquery" />

import { Party , ClickNav } from "./PartyModule.js"; 
import { Sliderss } from "./SingerModule.js";
import {Contact} from "./ContactModule.js";
import { Detailes } from "./DetailesModule.js";


let part = new Party();
part.Partyy();
part.partyclose();


let CliNav = new ClickNav();
CliNav.ClickNavTab();


let slid = new Sliderss();
slid.slider_sec();

let Detai = new Detailes();
Detai.CountDawnEvent();
Detai.setin();




let contValue = new Contact();
contValue.EventCon();
