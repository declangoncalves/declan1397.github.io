// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {

    (function () {
        'use strict';

        /* ==============================================
             Testimonial Slider
             =============================================== */

        $('a.page-scroll').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 40
                    }, 900);
                    return false;
                }
            }
        });

        /*====================================
        Show Menu on Book
        ======================================*/
        $(window).bind('scroll', function () {
            var navHeight = $(window).height() - 300;
            if ($(window).scrollTop() > navHeight) {
                $('.navbar-default').addClass('on');
            } else {
                $('.navbar-default').removeClass('on');
            }
        });

        $('body').scrollspy({
            target: '.navbar-default',
            offset: 80
        })

        $(document).ready(function () {
            $("#team").owlCarousel({

                navigation: false, // Show next and prev buttons
                slideSpeed: 300,
                paginationSpeed: 400,
                autoHeight: true,
                itemsCustom: [
                    [0, 1],
                    [450, 2],
                    [600, 2],
                    [700, 2],
                    [1000, 4],
                    [1200, 4],
                    [1400, 4],
                    [1600, 4]
                ],
            });

            $("#clients").owlCarousel({

                navigation: false, // Show next and prev buttons
                slideSpeed: 300,
                paginationSpeed: 400,
                autoHeight: true,
                itemsCustom: [
                    [0, 1],
                    [450, 2],
                    [600, 2],
                    [700, 2],
                    [1000, 4],
                    [1200, 5],
                    [1400, 5],
                    [1600, 5]
                ],
            });

            $("#testimonial").owlCarousel({
                navigation: false, // Show next and prev buttons
                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: true
            });

        });

  	/*====================================
    Technical Skills / Projects Isotope Filter
    ======================================*/
        $(window).load(function () {
            var $container = [$('#lightbox1'), $('#lightbox2')];

            $container[0].isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });

            $container[1].isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });

            $('.cat1 a').click(function () {
                $('.cat1 .active').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');

                $container[0].isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });

                return false;
            });

            $('.cat2 a').click(function () {
                $('.cat2 .active').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');

                $container[1].isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });

                return false;
            });

        });

    } ());

    /////////////// Vex Modals/////////////////
    // $('.communication-icon').click(function () {
    //     vex.dialog.alert({
    //         message: 'Testing the wireframe theme.',
    //     });
    // });

    // $('.teamwork-icon').click(function () {
    //     vex.dialog.alert({
    //         message: 'Testing the wireframe theme.',
    //     });
    // });

    // $('.motivation-icon').click(function () {
    //     vex.dialog.alert({
    //         message: 'Testing the wireframe theme.',
    //     });
    // });

    // $('.creativity-icon').click(function () {
    //     vex.dialog.alert({
    //         message: 'Testing the wireframe theme.',
    //     });
    // });

    /* ---- particles.js config ---- */

    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 40, "density": {
                    "enable": true
                }
            }, "color": {
                "value": "#ffffff"
            }, "shape": {
                "type": "edge", "stroke": {
                    "width": 0, "color": "#000000"
                }, "polygon": {
                    "nb_sides": 5
                }, "image": {
                    "src": "img/github.svg", "width": 100, "height": 100
                }
            }, "opacity": {
                "value": 0.3, "random": true, "anim": {
                    "enable": true, "speed": 0.2, "opacity_min": 0.15, "sync": false
                }
            }, "size": {
                "value": 25, "random": true, "anim": {
                    "enable": false, "speed": 4, "size_min": 5, "sync": false
                }
            }, "line_linked": {
                "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.2, "width": 1
            }, "move": {
                "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": {
                    "enable": false, "rotateX": 600, "rotateY": 600
                }
            }
        }, "interactivity": {
            "detect_on": "canvas", "events": {
                "onhover": {
                    "enable": false, "mode": "push"
                }, "resize": true
            }, "modes": {
                "grab": {
                    "distance": 400, "line_linked": {
                        "opacity": 1
                    }
                }, "bubble": {
                    "distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3
                }, "repulse": {
                    "distance": 100, "duration": 2
                }, "push": { "particles_nb": 4
            }, "remove": {
                "particles_nb": 2
            }
        }
    }, "retina_detect": true
}); 

var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function () { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);


}
main();