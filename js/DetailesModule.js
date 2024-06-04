
export class Detailes {


    CountDawnEvent() {
        let DaTe = new Date();
        let Dateconv = (Date.parse(DaTe));
        let DaTe2 = new Date('Oct 25 2024 21:38:30 GMT+0200 (Eastern European Standard Time)');
        let Dateconv2 = (Date.parse(DaTe2));
        let theFinalDate = Dateconv - Dateconv2;
        console.log(theFinalDate);
        let getdays = Math.floor(theFinalDate / 86400000);
        let gethours = Math.floor(theFinalDate % 86400000 / 3600000);
        let getminutes = Math.floor((theFinalDate % (3600000) / 60000));
        let getseconds = Math.floor((theFinalDate % 60000) / 1000);
        $('.day').html(`${getdays} D`);
        $('.hours').html(`${-gethours} h`);
        $('.mins').html(`${-getminutes} m`);
        $('.seconds').html(`${-getseconds} s`);
    }
setin(){
    setInterval(this.CountDawnEvent , 1000)
}
}