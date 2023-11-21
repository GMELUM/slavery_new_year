import { atom } from "elum-state/react";

export type RatingList = Rating[];
export type Rating = {
  name: string;
  image: string;
  count: number;
  link: string;
}

export type Data = {
  rating?: RatingList;
}

export const DATA = atom<Data>({
  key: "global_data",
  default: {
    rating: [],
  }
})
