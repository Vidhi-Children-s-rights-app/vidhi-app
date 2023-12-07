import { Dispatch, SetStateAction } from "react";

export type ParallaxStateType = 'default' | 'open' | 'closed';
export type ParallaxStateDispatcher = Dispatch<SetStateAction<ParallaxStateType>>;