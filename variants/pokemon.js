export const pokemon = {
  container: {
    init: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 0.75 } },
  },
};

export const header = {
  container: {
    init: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  },

  name: {
    init: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75,
        delay: 0.5,
      },
    },
  },

  id: {
    init: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.6,
      },
    },
  },

  types: {
    init: false,
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.2,
      },
    },
  },

  type: {
    init: { opacity: 0 },
    show: { opacity: 1 },
  },
};

export const body = {
  container: {
    init: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: 'easeInOut',
        delay: 0.3,
      },
    },
  },

  image: {
    init: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.75, ease: 'easeInOut', delay: 0.75 },
    },
  },

  tabContainer: {
    init: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.75, ease: 'easeInOut', delay: 0.8 },
    },
  },

  content: {
    init: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  },
};
