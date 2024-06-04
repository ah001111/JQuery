import { open, bg_nav, close, content, clickTab } from "./varsModule.js";


export class Party {

    Partyy() {

        let widthNav = bg_nav.outerWidth();
        console.log(widthNav);
        let NavLeft = bg_nav.css('left');
        console.log(NavLeft);

        open.on('click', function () {

            if (NavLeft == '-244.562px') {

                bg_nav.animate({ left: '0px' }, 1000);
                open.animate({ left: `${widthNav + 20.8}px` }, 1000);
                // content.animate({ left: `${widthNav + 400}px`}, 1000);
                // content.animate({ left: widthNav + 500 }, 800)
            }
        })
    }

    
    partyclose() {

        close.on('click', function () {

            bg_nav.animate({ left: `-244.562px` }, 1000);
            open.animate({ left: '1.3rem' }, 1000);
            // content.animate({ left: 675 }, 800)
        })
    }
}

export class ClickNav {

    ClickNavTab() {

        clickTab.on('click', function (e) {

            let anchorNav = e.target;
            let hrefAttr = $(anchorNav).attr('href');
            let OffsetHeight = $(hrefAttr).offset().top;

            $('body , html').animate({ scrollTop: `${OffsetHeight}px` }, 1000)
        })
    }
}









