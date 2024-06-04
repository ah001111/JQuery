import { h3, textslider } from "./varsModule.js";


export class Sliderss {

    slider_sec() {

        h3.on('click', function (e) {

            let divNext = $(e.target).next().slideToggle(800);
            let textsliderAll = textslider.not($(e.target).next()).slideUp(800);
        });
    }
}
