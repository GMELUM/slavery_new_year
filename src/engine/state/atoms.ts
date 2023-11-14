import { atom } from "elum-state/react";

export type ShopVote = {
  type:
  "product_1" |
  "product_2" |
  "product_3" |
  "product_4" |
  "product_5";
  candy: number;
  pumpkin: number;
}
export type ShopVoteList = ShopVote[];

export type Stock = {
  type:
  "small_box" |
  "middle_box" |
  "big_box";
  count: number;
}
export type StockList = Stock[];

export type Goods = {
  type:
  "small_box" |
  "middle_box" |
  "big_box" |
  "user_status" |
  "user_frame" |
  "potion";
  price: number;
  title: string;
  isOver: boolean;
}
export type ShopList = Goods[];

export type Rating = {
  name: string;
  image: string;
  count: number;
  link: string;
}
export type RatingList = Rating[];

export type Task = {
  key: string;
  title: string;
  count: number;
  badge?: string;
}
export type Tasks = Task[];

export type Data = {
  /**
   * Pumpkin ripening time in ms.
   * 
   * example: Date.now() + (1000 * 60 * 60 * 2)
   */
  timestamp?: number;

  /**
   * Displaying notifications
   * exsample: true
   */
  notification: boolean;

  /**
   * Pumpkin count in user
   * 
   * example: 24
   */
  pumpkin: number;

  /**
   * Candy count in user
   * 
   * example: 24
   */
  candy: number;

  /**
   * Picking pumpking
   * example: 24
   */
  picking?: number;

  /** Available tasks for the user 
   * 
   *  example: [
   *    {
   *      key:    "show_adds",
   *      title:  "Посмотреть рекламу",
   *      count:  1
   *    }
   *  ]
  */
  tasks?: Tasks;

  /** User rating
   * 
   *  example: [
   *    {
   *      image:  "https://example.com/userImage_01234.png",
   *      count:  2490,
   *      link:   "https://vk.com/gmelum"
   *    }
   *  ]
   */
  rating?: RatingList;

  /** Available goods for the user */
  shop?: ShopList;

  /** Number of purchased items */
  stock?: StockList;

  /** Available vk goods for the user */
  shopVote?: ShopVoteList;

}

export const DATA = atom<Data>({
  key: "global_data",
  default: {
    timestamp: undefined,
    notification: true,
    pumpkin: 0,
    candy: 0,
    picking: undefined,
    tasks: [],
    rating: [],
    shop: [],
    stock: [],
    shopVote: []
  }
})