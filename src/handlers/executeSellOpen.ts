import { nextPage } from "elum-router/react";
import { setter } from "elum-state/react";
import { DATA } from "engine/state/atoms";

const executeSellOpen = () => new Promise<boolean>((resolve) => {
  setTimeout(() => {
    setter(DATA, (data) => ({
      ...data,
      picking: 20
    }))

    resolve(true);
  }, 2000)
})

export default executeSellOpen;
