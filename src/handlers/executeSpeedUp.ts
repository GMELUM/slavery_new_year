import { setter } from "elum-state/react";
import { DATA } from "engine/state/atoms";

/**
 * Ускорение таймера для снятия ограничения продажи
 * @param type "free" | "for_candy"
 * @returns 
 */
const executeSpeedUp = (type: string) => new Promise<boolean>((resolve) => {
  setTimeout(() => {

    if (type === "free") {
      setter(DATA, (data) => ({
        ...data,
        timestamp: (data.timestamp || 900000) - 900000
      }))
    }

    if (type === "for_cone") {
      setter(DATA, (data) => ({
        ...data,
        timestamp: undefined,
        cone: data.cone - 2,
        picking: 1
      }))
    }

    console.log(type);
    resolve(true);
  }, 2000)
})

export default executeSpeedUp;
