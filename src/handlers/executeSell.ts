import { setter } from "elum-state/react";
import { DATA } from "engine/state/atoms";

const executeSell = () => new Promise<boolean>((resolve) => {
  setTimeout(() => {
    setter(DATA, (data) => ({
      ...data,
      timestamp: Date.now() + (1000 * 60 * 60 * 2),
      decorations: {
        garland: undefined,
        star: false,
        toys: []
      }
    }))
    resolve(true);
  }, 2000)
})

export default executeSell;
