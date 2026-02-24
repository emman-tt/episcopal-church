import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Lenis from 'lenis';



const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
});


lenis.on('scroll', () => {
  ScrollTrigger.update();
});

// Add Lenis to GSAP's ticker
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert seconds to milliseconds
});

// Disable GSAP lag smoothing
gsap.ticker.lagSmoothing(0);

gsap.registerPlugin(ScrollToPlugin,ScrollTrigger,SplitText)

export {gsap,ScrollToPlugin,ScrollTrigger,SplitText,lenis}