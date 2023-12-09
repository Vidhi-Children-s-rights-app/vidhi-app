import { StateType, JSXStyles } from "../types";

export const ButtonSizeVariants = {
  large: {
    width: 240,
    height: 80,
    fontSize: 20
  }
};

export const CloudState: Record<StateType, Record<'from' | 'to', number>> = {
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

export const DetailPannel: Record<
  StateType,
  Record<'from' | 'to', JSXStyles>
> = {
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

export const BalloonPositions = [

]

export const INITIAL_STATE = {
  translateX: -2,
  translateY: -10,
  scale: 1.05
};

export const FINAL_STATE = {
  translateX: 5,
  translateY: 10,
  scale: 1
};
