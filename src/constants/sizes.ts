import { ParallaxStateType } from "../types";

export const ButtonSizeVariants = {
  large: {
    width: 240,
    height: 80,
    fontSize: 20
  }
};

export const CloudState: Record<ParallaxStateType, Record<'from' | 'to', number>> = {
  default: {
    from: -180,
    to: -100
  },
  open: {
    from: -100,
    to: -20
  },
  closed: {
    from: -20,
    to: -600
  }
};
export const BaloonState: Record<ParallaxStateType, Record<'from' | 'to', number>> = {
  default: {
    from: 450,
    to: 400
  },
  open: {
    from: -100,
    to: 20
  },
  closed: {
    from: -20,
    to: -200
  }
};

export const detailPannel: Record<ParallaxStateType, Record<'from' | 'to', object>> = {
  default: {
    from: { opacity: 0, top: -100 },
    to: { opacity: 0, top: -100 }
  },
  open: {
    from: { opacity: 0, top: -100 },
    to: { opacity: 1, top: 0 }
  },
  closed: {
    from: { opacity: 1, top: 0 },
    to: { opacity: 0, top: -100 }
  }
};
