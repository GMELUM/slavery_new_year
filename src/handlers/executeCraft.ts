import { getter, setter } from "elum-state/react";
import { DATA } from "engine/state/atoms";
import addToy from "engine/libs/addToy";

const executeCraft = (type: string) => new Promise<boolean>((resolve) => {
  setTimeout(() => {

    if (type.startsWith("toy_")) {
      setter(DATA, (data) => ({
        ...data,
        craftTimestamp: Date.now() + (1000 * 60 * 60 * 2),
        decorations: {
          ...data.decorations,
          toys: addToy(data.decorations.toys, type, 9)
        }
      }))
    }

    if (type.startsWith("star_")) {
      setter(DATA, (data) => ({
        ...data,
        craftTimestamp: Date.now() + (1000 * 60 * 60 * 2),
        decorations: {
          ...data.decorations,
          star: type
        }
      }))
    }

    resolve(true);
  }, 2000)
})

export default executeCraft;
