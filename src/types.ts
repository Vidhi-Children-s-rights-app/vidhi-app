import { Dispatch, SetStateAction } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type StateType = 'default' | 'open' | 'closed';
export type StateDispatcher = Dispatch<SetStateAction<StateType>>;
export type JSXStyles = StyleProp<ViewStyle>;