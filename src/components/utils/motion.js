function slideInFromTop(y,del){
    return{
        hidden: { y: y, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: del,
                duration: 0.8,
            }
        }
    }
  };

 function opacity(delay) {
    return {
      hidden: {opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.7,
        },
      },
    };
  }

 function slideInFromLeft(x,delay) {
    return {
      hidden: { x: x, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          type: 'spring',
          stiffness: 70,
        },
      },
    };
  }



export { slideInFromTop, opacity, slideInFromLeft }
