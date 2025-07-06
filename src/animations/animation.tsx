export const fadeIn = {
  initialy: { opacity: 0, scale: 0.9, y: 30 },
  whileInViewy: { opacity: 1, scale: 1, y: 0 },
  initialx: { opacity: 0, scale: 0.9, x: 100 },
  whileInViewx: { opacity: 1, scale: 1, x: 0 },
};

export const smallAnimations = {
  whileHover: { rotate: 3 },
  shrinkCard: { scale: 0.96 },
  scaleCard: { scale: 1.02 },
};

export const defaultSpring = {
  duration: 0.4,
  ease: "easeOut",
  type: "tween",
  stiffness: 100,
};
