export const animContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.05
    }
  }
}

export const animPosition = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export const animOpacity = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}