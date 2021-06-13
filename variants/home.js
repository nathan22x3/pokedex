export default {
  container: {
    init: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { delay: 0.5 } },
  },
  buttons: {
    init: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  },
};
