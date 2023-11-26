import { setter } from "elum-state/react";
import { DATA } from "engine/state/atoms";

const executeBuy = (type: string) => new Promise<boolean>((resolve) => {
  setTimeout(() => {

    // if(type === "product_1") {
    //   setter(DATA, (data) => ({
    //     ...data,
    //     candy: data.candy + 1,
    //     pumpkin: data.pumpkin + 1
    //   }))
    // }

    // if(type === "product_2") {
    //   setter(DATA, (data) => ({
    //     ...data,
    //     candy: data.candy + 2,
    //     pumpkin: data.pumpkin + 2
    //   }))
    // }

    // if(type === "product_3") {
    //   setter(DATA, (data) => ({
    //     ...data,
    //     candy: data.candy + 3,
    //     pumpkin: data.pumpkin + 3
    //   }))
    // }

    // if(type === "product_4") {
    //   setter(DATA, (data) => ({
    //     ...data,
    //     candy: data.candy + 4,
    //     pumpkin: data.pumpkin + 4
    //   }))
    // }

    // if(type === "product_5") {
    //   setter(DATA, (data) => ({
    //     ...data,
    //     candy: data.candy + 5,
    //     pumpkin: data.pumpkin + 5
    //   }))
    // }

    console.log(type);
    resolve(true);
  }, 2000)
})

export default executeBuy;
