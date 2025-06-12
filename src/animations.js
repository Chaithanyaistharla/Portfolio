export const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };
  
  export const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  export const hoverLift = {
    rest: { scale: 1 },
    hover: { scale: 1.05 }
  };