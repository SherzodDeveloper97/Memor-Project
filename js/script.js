/* navbar sticky - open */

window.addEventListener('scroll', function(){
    var headerContent = document.querySelector(".header_navbar");
    headerContent.classList.toggle("sticky",window.scrollY > 0);
})

/* navbar sticky - close */

// Tiny-Slider - open
var slider = tns({
    container: '.slider_container',
    items: 1,   //nechta slide chiqishi
    // controls: false,  //next,prev ni o'chirish
    // nav: false    // pastki control nav ni o'chirish
    // gutter: 20,   //slide lar orasini 20px ajratish
    // edgePadding: 20,  //slider ni ikki chap va o'ng chegaradan 20px itarish
    slideBy: 'page',   //bitta slide page ni to'liqligicha o'tkazib, keyingi page ni chiqarish
    // slideBy: 2    //slide dan 2 ta qismni o'tkazib slide ni davom etish, default:1 ya'ni default holatda u 1 ta qismni o'tkazib davom etadi
    // loop: false,    //slide page oxirgisiga keganda next yoki prev noactive holatga o'tishi 
    controlsPosition: 'bottom',  //control - bu next va prev ni ifadalayapti, so'ng uning joylashuvini ko'rsatib berayapti
    navPosition: false,   //nav - bu pastki slide control ni bildiradi, va bu joyda uning joylashuvi ko'rsatilayapti
    mouseDrag: true,   //cursor b-n surish imkonini beradi
    // autoplay: true,    //slide avtomatik o'tib turishini ta'minlaydi
    preventScrollOnTouch: 'auto',
    autoplayButtonOutput: false,  //slide avtomatik o'tishini to'xtatib turadigan bir tugma bor, bu amal o'sha tugmani ko'rinmay turishini ta'minlaydi
    controlsContainer: '#custom-control',   //bu next,prev arrow larga slide ni controlini berish
    // loop: false, 
    speed:1000,   //slide ni yuklab ochish ko'rsatish vaqti
    animateIn: "scale",

    responsive: {
        0: {
            items: 1,
            // autoplay: true,
        },
        768: {
            items: 1,
        },
        1024: {
            items: 1,
        }
    }

})
// Tiny-Slider - close