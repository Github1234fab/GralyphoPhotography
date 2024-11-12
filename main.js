const splitting = Splitting();
console.log(splitting);

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".text").forEach((textBlock) => {
        gsap.fromTo(
                textBlock.querySelectorAll(".char"),
                { opacity: 0, autoAlpha: 0 },
                {
                        opacity: 1,
                        autoAlpha: 1,
                        duration: 1,
                        stagger: 0.1,
                        scrollTrigger: {
                                trigger: textBlock,
                                start: "top 100%",
                                toggleActions: "play none none reverse",
                                markers: true,
                        },
                }
        );
});

let header = document.querySelector(".header");

window.addEventListener("scroll", function () {
        if (window.scrollY > 500) {
                header.style.opacity = "0"; // Modifier l'opacité du header lors du défilement
                header.style.transition = "1.5s";
        } else {
                header.style.opacity = "1"; // Restaurer l'opacité du header lorsque le défilement est en haut
        }
});

let txtOne = document.querySelector(".txtOne");
let txtTwo = document.querySelector(".txtTwo");
let imgBook = document.querySelector(".img_book");

let containerLeftSide = document.querySelector(".container_leftSide");
let wrapperLeftSide = document.querySelector(".wrapper_txt");

for (let i = 0; i < 2; i++) {
        let clone = wrapperLeftSide.cloneNode(true);
        containerLeftSide.appendChild(clone);
}

// ===============================================
