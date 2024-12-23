import { getter } from "elum-state/react";
import { DATA, Data } from "engine/state/atoms";

const loadData = () => new Promise<Data>((resolve) => {
  setTimeout(() => resolve({
    ...getter(DATA),
    // timestamp: Date.now() + (1000 * 60 * 60 * 2),
    cone: 24,
    elf: 10,
    snowflake: 112,
    notification: true,
    shop: [
      {
        type: "box_1",
        snowflake: 99,
        title: "Маленький набор",
        isOver: false
      },
      {
        type: "box_2",
        snowflake: 249,
        title: "Средний набор",
        isOver: false
      },
      {
        type: "box_3",
        snowflake: 999,
        title: "Большой набор",
        isOver: false
      },
      {
        type: "smile_1",
        snowflake: 99,
        title: "Смайлик к имени 1",
        isOver: false
      },
      {
        type: "smile_2",
        snowflake: 99,
        title: "Смайлик к имени 2",
        isOver: false
      },
      {
        type: "smile_3",
        snowflake: 99,
        title: "Смайлик к имени 3",
        isOver: false
      },
      {
        type: "gingerbread",
        snowflake: 999,
        title: "Пряник",
        isOver: false
      },
      {
        type: "frame",
        snowflake: 999,
        title: "Рамка для профиля",
        isOver: false
      },
      {
        type: "jam",
        snowflake: 279,
        title: "Земляничное варенье",
        isOver: false
      }
    ],
    stock: [
      {
        type: "box_1",
        count: 0
      },
      {
        type: "box_2",
        count: 6
      },
      {
        type: "box_3",
        count: 0
      }
    ],
    rating: [
      {
        name: "Алла Проценко",
        image: "https://sun2-3.userapi.com/s/v1/if1/OcBLGzNKBpOFFfq8nDstSo-CtEQ3YC3Iq8pZU6foCOS3bizF7Wdll1O7vqcypcdcIhTFL7u3.jpg?size=50x50&quality=96&crop=0,15,1064,1064&ava=1",
        count: 2400,
        link: "https://vk.com/allochka975"
      },
      {
        name: "Евгений Таранов",
        image: "https://sun2-9.userapi.com/s/v1/ig2/yKCcisFnIBcbi-4wz5Z45TFKAop4HubTz2LaEPfsV3BjC1BMoCT8T4FWgmwfBR3e8kFbDq2PpLKWu95m7WA2q06z.jpg?size=50x50&quality=95&crop=98,27,309,309&ava=1",
        count: 2300,
        link: "https://vk.com/hold_owl"
      },
      {
        name: "Эля Ангелова",
        image: "https://sun120-1.userapi.com/s/v1/if2/Xf95N84_uT5IaP5qGSnZSfalTif5OgQ6oLpAktt6_59mOec1D9-nSdj6cHHJ4RGsABgFSyJ82Y8c58gyrlCR-Umc.jpg?quality=95&crop=64,15,955,955&as=50x50,100x100,200x200,400x400&ava=1&u=AZoLRL2RcrMR0sj9Xe-uzs9H05lsKIM_W1roYZb4Z4s&cs=200x200",
        count: 2200,
        link: "https://vk.com/elgrz"
      },
      {
        name: "Дмитрий Задохин",
        image: "https://sun120-1.userapi.com/s/v1/if2/JxETNJw72Huhb4kKPjb_b29nMTA0MpZLLdIaPr9UR-9f-J4yIO_mR11egdU0vXVj0lXm7G5JiBXBChkue3JWHYlM.jpg?quality=95&crop=211,4,1492,1492&as=50x50,100x100,200x200,400x400&ava=1&u=N3dtASo5ApBNkyV4CcId5guPY0rlBfaL85aWtEGw6Go&cs=200x200",
        count: 2100,
        link: "https://vk.com/vkdevrel"
      },
      {
        name: "Артем Борисов",
        image: "https://sun120-1.userapi.com/s/v1/if2/bJfuKWxu3QFT3HpcVLKLwspzmbh61ogh9-K87LN5_MKpOaXhp9dLiG9Sq4v2mk8LKmVUg6FtuP-vqjT8NsV6cscg.jpg?quality=96&crop=446,84,864,864&as=50x50,100x100,200x200,400x400&ava=1&u=zM4XKBAOfu09LM6Hq9qnfMrjXu0r2zudF-HbovHAf2w&cs=200x200",
        count: 2000,
        link: "https://vk.com/borisovrtem"
      },
      {
        name: "Василий Жидков",
        image: "https://sun120-2.userapi.com/s/v1/if2/hfYA755NmuagOnE_wPA1qnmPJHWcK37oAzHL6X1f4dUweEq32kFMX6QM3hgeXS6vy19HWZLuvqYLaZmnNaUCoqux.jpg?quality=96&crop=0,444,750,750&as=50x50,100x100,200x200,400x400&ava=1&u=75asHByG3IiNeXajqhd179cjwytrBHo6oDvLvJ4JEfc&cs=200x200",
        count: 1900,
        link: "https://vk.com/i4yma"
      },
      {
        name: "Иван Расторгуев",
        image: "https://sun120-2.userapi.com/s/v1/if1/hiuHnaYngyJeTiHmGnnLPRjhw0lcWaIpubPlTwuBkVmTCSgQsHBY02O53JO_l0y5B84buwsO.jpg?quality=96&crop=229,36,1076,1076&as=50x50,100x100,200x200,400x400&ava=1&u=7RBw9OeCzh94EJmGWCrdqZTzqMWqmsoHvve6nC6SW04&cs=200x200",
        count: 1800,
        link: "https://vk.com/usd"
      },
      {
        name: "Елизавета Пластун",
        image: "https://sun120-1.userapi.com/s/v1/if2/P8vGDbdDHD0v2soDetXanPij7wbpkESU84mL49ET0PISDhmw2asmsFDZPMQpILbLum3ys8_uHfhd-gjUJPDS8voq.jpg?quality=95&crop=102,17,1002,1002&as=50x50,100x100,200x200,400x400&ava=1&u=gQylgdn0CA-hqJp18DbNLIlrgo4rROAkkvixr1Q9U94&cs=200x200",
        count: 1700,
        link: "https://vk.com/neprezentabelnaya_glista"
      }
    ],
    tasks: [
      {
        key: "buy_slave",
        title: "Купить 5 рабов",
        elf: 1,
        cone: 1
      },
      {
        key: "collect_coins",
        title: "Собрать монеты",
        snowflake: 1
      },
      {
        key: "show_adds",
        title: "Посмотреть рекламу",
        badge: "до 5 раз в день",
        elf: 1,
        cone: 1
      },
      {
        key: "refferal",
        title: "Пригласить друга в игру",
        elf: 1,
        cone: 1
      },
      {
        key: "promo",
        title: "Промокод на",
        elf: 1,
        cone: 1
      },
      {
        key: "tasks",
        title: "Выполняй цели - до ",
        elf: 0,
        cone: 1
      }
    ],
    toyShop: [
      {
        level: "Обычные шарики",
        description: "добавляет X снежинок",
        items: [
          { toy: "toy_10", snowflake: 1 },
          { toy: "toy_11", snowflake: 1 },
          { toy: "toy_12", snowflake: 1 },
          { toy: "toy_13", snowflake: 1 },
          { toy: "toy_14", snowflake: 1 },
          { toy: "toy_15", snowflake: 1 },
        ]
      },
      {
        level: "Звёздочки",
        description: "добавляет X снежинок",
        items: [
          { toy: "toy_16", cone: 2 },
          { toy: "toy_17", cone: 2 },
          { toy: "toy_18", cone: 2 },
          { toy: "toy_19", cone: 2 },
          { toy: "toy_20", cone: 2 },
          { toy: "toy_21", cone: 2 },
        ]
      },
      {
        level: "Шарики с узорами",
        description: "добавляет X снежинок",
        items: [
          { toy: "toy_1", vote: 3 },
          { toy: "toy_2", vote: 3 },
          { toy: "toy_3", vote: 3 },
          { toy: "toy_4", vote: 3 },
          { toy: "toy_5", vote: 3 },
          { toy: "toy_6", vote: 3 },
          { toy: "toy_7", vote: 3 },
          { toy: "toy_8", vote: 3 },
          { toy: "toy_9", vote: 3 },
        ]
      },
      {
        level: "Герлянды",
        description: "добавляет X снежинок",
        items: [
          { toy: "garland_1", vote: 3 },
          { toy: "garland_2", vote: 3 },
        ]
      },
      {
        level: "Звезда",
        description: "добавляет X снежинок",
        items: [
          { toy: "star_1", vote: 3 },
        ]
      }
    ],
    toyCraft: [
      {
        level: "Звёздочки",
        description: "добавляет X снежинок",
        items: [
          { toy: "toy_22", cone: 2, elf: 4 },
          { toy: "toy_23", cone: 2, elf: 4 },
          { toy: "toy_24", cone: 2, elf: 4 },
        ]
      },
      {
        level: "Звезда",
        description: "добавляет X снежинок",
        items: [
          { toy: "star_2", cone: 3, snowflake: 3 },
        ]
      }
    ],
    vote: [
      {
        key: "item_1",
        cone: 70,
        snowflake: 210,
        price: 21
      },
      {
        key: "item_2",
        cone: 21,
        snowflake: 70,
        price: 7
      },
      {
        key: "item_3",
        cone: 300,
        snowflake: 666,
        price: 66
      },
      {
        key: "item_4",
        cone: 600,
        snowflake: 999,
        price: 99
      },
      {
        key: "item_5",
        cone: 10000,
        snowflake: 10000,
        price: 999
      }
    ],
    decorations: {
      garland: "snow",
      star: false,
      toys: ["toy_1", "toy_1", "toy_1", "toy_1", "toy_1", "toy_1"]
    }
  }))
})

export default loadData;
