import { Token } from "@/app/types";
import { Dispatch, SetStateAction } from "react";

export interface Props {
  selectedToken: Token;
  setSelectedToken: Dispatch<SetStateAction<Token>>;
}
