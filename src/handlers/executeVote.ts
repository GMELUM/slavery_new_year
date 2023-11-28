import { getter, setter } from "elum-state/react";
import { DATA } from "engine/state/atoms";
import addToy from "engine/libs/addToy";

const executeVote = (type: string) => new Promise<boolean>((resolve) => {
  setTimeout(() => {

    if(type === "item_1") {
      setter(DATA, (data) => ({
        ...data,
        elf: data.elf + 210,
        cone: data.cone + 70
      }))
    }

    if(type === "item_2") {
      setter(DATA, (data) => ({
        ...data,
        elf: data.elf + 70,
        cone: data.cone + 21
      }))
    }

    if(type === "item_3") {
      setter(DATA, (data) => ({
        ...data,
        elf: data.elf + 666,
        cone: data.cone + 300
      }))
    }

    if(type === "item_4") {
      setter(DATA, (data) => ({
        ...data,
        elf: data.elf + 999,
        cone: data.cone + 600
      }))
    }

    if(type === "item_5") {
      setter(DATA, (data) => ({
        ...data,
        elf: data.elf + 10000,
        cone: data.cone + 10000
      }))
    }

    resolve(true);
  }, 2000)
})

export default executeVote;
