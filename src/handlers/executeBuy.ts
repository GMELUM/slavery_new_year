import { getter, setter } from "elum-state/react";
import { DATA } from "engine/state/atoms";
import addToy from "engine/libs/addToy";

const executeBuy = (type: string) => new Promise<boolean>((resolve) => {
  setTimeout(() => {

    if (type.startsWith("toy_")) {
      setter(DATA, (data) => ({
        ...data,
        decorations: {
          ...data.decorations,
          toys: addToy(data.decorations.toys, type, 9)
        }
      }))
    }

    if (type.startsWith("star")) {
      setter(DATA, (data) => ({
        ...data,
        decorations: {
          ...data.decorations,
          star: true
        }
      }))
    }

    if (type === "garland_2") {
      setter(DATA, (data) => ({
        ...data,
        decorations: {
          ...data.decorations,
          garland: "led"
        }
      }))
    }

    if (type === "garland_1") {
      setter(DATA, (data) => ({
        ...data,
        decorations: {
          ...data.decorations,
          garland: "snow"
        }
      }))
    }

    resolve(true);
  }, 2000)
})

export default executeBuy;
