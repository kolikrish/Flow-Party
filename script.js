const lenis = new Lenis({
  duration: 1.3,
  easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  smoothTouch: true,
  touchMultiplier: 0.25
});

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

window.addEventListener("load", () => {
  document.fonts.ready.then(() => {

    gsap.to("#page1", {
      transform: "translateY(70%)",
      rotation: -7,
      scale: 0.7,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        start: "top top",
        end: "bottom -90%",
        scrub: true
      }
    });

    gsap.from("#page2", {
      transform: "translateY(0%)",
      rotation: 8.5,
      scale: 0.7,
      ease: "sine.out",
      scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        start: "top 20%",
        end: "top -90%",
        scrub: true,
      }
    });

    const split = new SplitText("#main-heading", { type: "chars" });
    const split2 = new SplitText("#heading-1", { type: "words" });
    const split3 = new SplitText("#heading-2", { type: "words" });
    const split4 = new SplitText("#page3-heading-4", { type: "words" });
    const split5 = new SplitText("#page3-heading-5", { type: "words" });
    const split6 = new SplitText("#page3-heading-6", { type: "words" });
    const split7 = new SplitText("#page3-heading-7", { type: "words" });
    const split8 = new SplitText("#page6-heading-1", { type: "chars" });
    const split9 = new SplitText("#page4-heading-1", { type: "chars" });
    const split10 = new SplitText("#page2-heading-1", { type: "chars" });
    const split11 = new SplitText("#page5-heading-1", { type: "chars" });
    const split12 = new SplitText("#loader-txt", { type: "chars" });
    const split13 = new SplitText("#page3-heading-1",{type: "chars"});
    const split14 = new SplitText("#section2-heading-1",{type: "chars"});

    const tl = gsap.timeline();
    tl.from(split12.chars, {
      autoAlpha: 0,
      stagger: 0.05,
      scale: 0.5,
      y: 400,
      duration: 1,
      ease: "power3.out"
    });
    tl.to("#loader div", {
      height: "0vh",
      duration: 1.3,
      stagger: {
        amount: 1,
        from: "start",
        each: 0.5
      },
      ease: "power2.out"
    }, "anim");
    tl.to("#loader", { y: -980, duration: 3, ease: "power3.out" }, "anim");
    tl.to("#loader-txt", { opacity: 0, ease: "power2.out" }, "anim+=0.2");
    tl.set("#loader-txt", { display: "none" }, "anim+=1");
    tl.set("#loader", { display: "none" }, "anim+=3.1");

    tl.from(split.chars, {
      opacity: 0,
      y: 250,
      duration: 1,
      stagger: 0.15,
      ease: "power2.out"
    }, "anim");
    tl.from("#smiley", {
      opacity: 0,
      scale: 0.5,
      ease: "expoScale.out"
    }, "anim+=0.3");
    tl.from("#page1-img-1", {
      opacity: 0,
      width: "0%",
      duration: 1,
      ease: "power2.out"
    }, "anim+=0.3");
    tl.from("#page1-img-2", {
      opacity: 0,
      width: "0%",
      duration: 1,
      ease: "power2.out"
    }, "anim+=0.1");
    tl.from(split2.words, {
      opacity: 0,
      y: 80,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.out"
    }, "anim");
    tl.from(split3.words, {
      opacity: 0,
      y: 100,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.out"
    }, "anim");

    gsap.from(split10.chars, {
      opacity: 0,
      y: 80,
      stagger: 0.1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#page2-heading-1",
        scroller: "body",
        start: "top 90%",
        end: "top 60%",
        scrub: 2.5,
        once: true
      }
    });
    gsap.from(split13.chars,{
      y: 120,
      autoAlpha: 0,
      duration: 1.3,
      stagger: {
        amount: 0.8,
        from: "start"
      },
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#page3-heading-1",
        scroller: "body",
        start: "top 90%",
        end: "top 60%",
        scrub: 7,
        once: true
      }
    });
    gsap.from(split14.chars,{
      y: 120,
      autoAlpha: 0,
      duration: 1.3,
      stagger: {
        amount: 0.8,
        from: "start"
      },
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#section2-heading-1",
        scroller: "body",
        start: "top 90%",
        end: "top 60%",
        scrub: 5.5,
        once: true
      }
    });
    function animateHeading(split, triggerId, offset = 0) {
      gsap.from(split.words, {
        opacity: 0,
        y: 80,
        stagger: 0.1,
        ease: "sine.out",
        scrollTrigger: {
          trigger: triggerId,
          scroller: "body",
          start: `top+=${offset} 100%`,
          end: "top 40%",
          scrub: 3,
          once: true
        }
      });
    }
    animateHeading(split4, "#page3-heading-4", 0);
    animateHeading(split5, "#page3-heading-5", 50);
    animateHeading(split6, "#page3-heading-6", 100);
    animateHeading(split7, "#page3-heading-7", 150);

    gsap.from(split8.chars, {
      opacity: 0,
      y: 90,
      duration: 1.3,
      stagger: {
        amount: 0.8,
        from: "start"
      },
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#page6-heading-1",
        scroller: "body",
        start: "top 90%",
        end: "top 40%",
        scrub: 7,
        once: true
      }
    });

    gsap.from(split9.chars, {
      opacity: 0,
      y: 120,
      stagger: 0.04,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#page4-heading-1",
        scroller: "body",
        start: "top 100%",
        end: "bottom 40%",
        scrub: 2,
        once: true
      }
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#page4-heading-2",
        scroller: "body",
        start: "top 110%",
        end: "bottom 40%",
        scrub: 2,
        once: true
      }
    });
    tl2.from("#page4-heading-2", { opacity: 0, ease: "power2.out" }, "anim")
      .from("#page4-heading-3", { opacity: 0, ease: "power2.out" }, "anim")
      .from("#page4-heading-4", { opacity: 0, ease: "power2.out" }, "anim")
      .from("#page4-heading-5", { opacity: 0, ease: "power2.out" }, "anim");

    gsap.from(split11.chars, {
      opacity: 0,
      y: 120,
      duration: 1.3,
      stagger: {
        amount: 0.5,
        from: "start"
      },
      ease: "expo.out",
      scrollTrigger: {
        trigger: "#page5-heading-1",
        scroller: "body",
        start: "top 90%",
        end: "top 60%",
        scrub: 7,
        once: true
      }
    });

    gsap.from("#wave-box div", {
      y: 80,
      opacity: 0,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 80%",
        end: "top 10%",
        scrub: 1
      }
    });
    gsap.from("#page5-wave-box div", {
      y: 80,
      opacity: 0,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#page6",
        scroller: "body",
        start: "top 70%",
        end: "top 20%",
        scrub: 1.5
      }
    });

    const tl3 = gsap.timeline({ paused: true, reversed: true });
    tl3.to("#middle-nav", { opacity: 0, ease: "power2.out" }, "anim")
      .to("#overlay", { top: "40%", duration: 1, ease: "power2.out" }, "anim")
      .from("#overlay-nav", { opacity: 0, y: -60, ease: "power2.out" }, "anim+=0.5")
      .from("#overlay-links", { opacity: 0, y: -60, ease: "power2.out" }, "anim+=0.6");

    document.getElementById("middle-nav").addEventListener("click", () => {
      gsap.set("#overlay", { visibility: "visible" });
      tl3.play();
    });
    document.getElementById("close").addEventListener("click", () => {
      tl3.reverse();
      tl3.eventCallback("onReverseComplete", () => {
        gsap.set("#overlay", { visibility: "hidden" });
      });
    });

    const middleNav = document.getElementById("middle-nav");
    middleNav.addEventListener("mouseenter", () => {
      gsap.to("#line-1", { rotation: -40, ease: "power2.out" });
      gsap.to("#line-2", { rotation: 40, ease: "power2.out" });
    });
    middleNav.addEventListener("mouseleave", () => {
      gsap.to("#line-1", { rotation: 0, ease: "power2.out" });
      gsap.to("#line-2", { rotation: 0, ease: "power2.out" });
    });

    if (window.innerWidth > 1024) {
      Shery.mouseFollower({ skew: false, duration: 1, ease: "power2.out" });
    }

    Shery.makeMagnet("#left-nav", {
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });

  });
  const tracker = document.querySelector("#tracker");
  const smiley = document.querySelector("#smiley");
  const eyes = document.querySelectorAll("#left-eye, #right-eye");
  const mouth = document.querySelector("#mouth");

  tracker.addEventListener("mousemove", (e) => {
    const{width, height, left, top} = tracker.getBoundingClientRect();
    const x = e.clientX - left- width/ 2;
    const y = e.clientY - top- height/ 2;

    gsap.to(smiley,{
      x: x/5,
      y: y/5,
      duration: 0.6,
      ease: "power3.out"
    });
    gsap.to(eyes,{
      x: x/10,
      y: y/10,
      duration: 0.6,
      ease: "power3.out"
    });
    gsap.to(mouth,{
      x: x/10,
      y: y/10,
      duration: 0.6,
      ease: "power3.out"
    });
  });
  tracker.addEventListener("mouseleave", (e) => {
    gsap.to([smiley, eyes, mouth],{
      x: 0,
      y: 0,
      duration: 1,
      ease: "power2.out"
    });
  });
  gsap.from("#page4-video",{
    rotate: -7,
    scale: 0.75,
    autoAlpha: 0,
    duration: 1.3,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#page4-video",
      scroller: "body",
      start: "top 75%",
      end: "top -80%",
      scrub: 2,
      once: true
    }
  });
});

document.fonts.ready.then(() => {
    const wrapper = document.querySelector(".Horizontal");
    const text = document.querySelector(".Horizontal__text");

    if (wrapper && text) {
      const split10 = SplitText.create(text, { type: "chars,words" });

      const scrollTween = gsap.to(text, {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          pin: true,
          end: "+=5000px",
          scrub: true
        }
      });

      split10.chars.forEach((char) => {
        gsap.from(char, {
          yPercent: "random(-200,200)",
          rotation: "random(-20,20)",
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: char,
            containerAnimation: scrollTween,
            start: "left 100%",
            end: "left 30%",
            scrub: 1
          }
        });
      });
    }
  });