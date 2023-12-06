import { Dispatch, SetStateAction } from "react";

export type CloudStateType = 'default' | 'open' | 'closed';
export type CloudStateDispatcher = Dispatch<SetStateAction<CloudStateType>>;