export const LOCATION = { center: [37.64, 55.76], zoom: 10 };

export const POINTS = [
  { coordinates: [37.8, 55.8] },

  {
    coordinates: [37.738521, 55.684759],
    color: "#0095b6",
    title: "цвет <strong>воды пляжа бонди</strong>",
    draggable: true,
  },
  {
    coordinates: [37.715175, 55.833436],
    color: "#735184",
    title: "<strong>серобуромалиновый</strong> цвет",
    draggable: true,
  },
  {
    coordinates: [37.114924, 55.782392],
    color: "yellow",
    title: 'цвет <strong>детской неожиданности</strong>"',
    draggable: false,
    onClick: () => alert("click"),
  },

  {
    coordinates: [37.487208, 55.826479],
    title: "цвет <strong>фэйсбука</strong>",
    color: "#3b5998",
    draggable: true,
    mapFollowsOnDrag: true,
  },
  {
    coordinates: [37.435023, 55.694843],
    color: "#477510",
    title: "цвет носика Гены",
    subtitle: "Очень длиннный, но невероятно интересный текст",
    draggable: true,
  },
];
