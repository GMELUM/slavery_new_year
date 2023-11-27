import { atom } from "elum-state/react";

export type RatingList = Rating[];
export type Rating = {
  name: string;
  image: string;
  count: number;
  link: string;
}

export type Goods = {
  type:
  "box_1" |
  "box_2" |
  "box_3" |
  "smile_1" |
  "smile_2" |
  "smile_3" |
  "frame" |
  "gingerbread" |
  "jam";
  price: number;
  title: string;
  isOver: boolean;
}
export type ShopList = Goods[];

export type Stock = {
  type:
  "box_1" |
  "box_2" |
  "box_3";
  count: number;
}
export type StockList = Stock[];

export type Decorations = {
  garland: "led" | "snow" | string | undefined;
  star: boolean;
  toys: (string | undefined | null)[];
}

export type Task = {
  key: string;
  title: string;
  count: number;
  badge?: string;
}
export type Tasks = Task[];

export type Toy = {
  toy: string;
  price: number;
}
export type ListToy = Array<{
  level: string;
  description: string;
  items: Array<Toy>;
}>

export type Data = {
  cone: number;
  elf: number;
  snowflake: number;

  notification: boolean;

  tasks: Tasks;
  rating: RatingList;
  shop?: ShopList;
  stock?: StockList;
  toyShop: ListToy;
  decorations: Decorations;
}

export const DATA = atom<Data>({
  key: "global_data",
  default: {
    cone: 0,
    elf: 0,
    snowflake: 0,

    notification: false,

    tasks: [],
    rating: [],
    toyShop: [],
    decorations: {
      garland: undefined,
      star: false,
      toys: []
    },
  }
})
