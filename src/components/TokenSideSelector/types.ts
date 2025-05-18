import { Dispatch, SetStateAction } from "react";

export enum TokenSide {
  SOURCE = "Source",
  TARGET = "Target",
}

export interface Props {
  selectedTokenSide: TokenSide;
  setSelectedTokenSide: Dispatch<SetStateAction<TokenSide>>;
}
