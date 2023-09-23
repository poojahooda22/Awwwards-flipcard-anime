var cardOne = document.querySelector(".card1");

var cardTwo = document.querySelector(".card2");

var cardThree = document.querySelector(".card3");

var cardFour = document.querySelector(".card4");


cardOne.addEventListener("mouseenter", function() {
    anime({
        targets: document.querySelector(".card1"),
        rotateY:"+=180",
        easing: 'easeInOutSine',
        duration: 500,
    });
})

cardOne.addEventListener("mouseleave", function() {
    anime({
        targets: document.querySelector(".card1"),
        rotateY:"+=180",
        easing: 'easeInOutSine',
        duration: 500,
    });
})


cardTwo.addEventListener("mouseenter", function() {
    anime({
        targets: document.querySelector(".card2"),
        rotateY:"+=180",
        easing: 'easeInOutSine',
        duration: 500,
    });
})


cardTwo.addEventListener("mouseleave", function() {
    anime({
        targets: document.querySelector(".card2"),
        rotateY:"+=180",
        easing: 'easeInOutSine',
        duration: 500,
    });
})

cardThree.addEventListener("mouseenter", function() {
    anime({
        targets: document.querySelector(".card3"),
        rotateY:"+=180",
        easing: 'easeInOutSine',
        duration: 500,
    });
})

cardThree.addEventListener("mouseleave", function() {
    anime({
        targets: document.querySelector(".card3"),
        rotateY:"+=180",
        easing: 'easeInOutSine',
        duration: 500,
    });
})

cardFour.addEventListener("mouseenter", function() {
    anime({
        targets: document.querySelector(".card4"),
        rotateY:"+=180",
        easing: 'easeInOutSine',
        duration: 500,
    });
})

cardFour.addEventListener("mouseleave", function() {
    anime({
        targets: document.querySelector(".card4"),
        rotateY:"+=180",
        easing: 'easeInOutSine',
        duration: 500,
    });
})