import { setter } from "elum-state/react";
import { DATA } from "engine/state/atoms";

const executeShop = (type: string) => new Promise<boolean>((resolve) => {
  setTimeout(() => {

    if (["box_1", "box_2", "box_3"].includes(type)) {
      setter(DATA, (data) => ({
        ...data,
        stock: data.stock?.map((item) => {
          if (item.type != type) { return item }
          item.count += 1;
          return item
        })
      }))
    }

    console.log(type);
    resolve(true);
  }, 2000)
})

export default executeShop;
