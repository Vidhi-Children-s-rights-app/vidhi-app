import { CloudStateType } from "../types";

export const ButtonSizeVariants = {
  large: {
    width: 240,
    height: 80,
    fontSize: 20
  }
};

export const CloudState: Record<CloudStateType, Record<'from' | 'to', number>> = {
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
    to: -100
  }
};

export const detailPannel: Record<CloudStateType, Record<'from' | 'to', object>> = {
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
