import { atom } from "elum-state/react";

export type RatingList = Rating[];
export type Rating = {
  name: string;
  image: string;
  count: number;
  link: string;
}

export type Decorations = {
  garland?: "led" | "snow";
  star: boolean;
  toys?: (number | undefined | null)[];
}

export type Data = {

  cone: number;
  elf: number;
  snowflake: number;

  rating: RatingList;
  decorations: Decorations;
}

export const DATA = atom<Data>({
  key: "global_data",
  default: {
    cone: 0,
    elf: 0,
    snowflake: 0,
    rating: [],
    decorations: {
      garland: undefined,
      star: false,
      toys: [, , , , , , , ,]
    },
  }
})
