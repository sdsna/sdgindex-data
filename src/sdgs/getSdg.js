export const SDGS = [
  {
    id: "SDG1",
    number: 1,
    label: "No poverty",
    description: "End poverty in all its forms everywhere.",
    type: "goal",
    dataId: "SDG1",
    color: "#E5243B",
  },
  {
    id: "SDG2",
    number: 2,
    label: "Zero hunger",
    description:
      "End hunger, achieve food security and improved nutrition and promote sustainable agriculture.",
    type: "goal",
    dataId: "SDG2",
    color: "#DDa63a",
  },
  {
    id: "SDG3",
    number: 3,
    label: "Good health and well-being",
    description:
      "Ensure healthy lives and promote well-being for all at all ages.",
    type: "goal",
    dataId: "SDG3",
    color: "#4c9f38",
  },
  {
    id: "SDG4",
    number: 4,
    label: "Quality education",
    description:
      "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
    type: "goal",
    dataId: "SDG4",
    color: "#c5192D",
  },
  {
    id: "SDG5",
    number: 5,
    label: "Gender equality",
    description: "Achieve gender equality and empower all women and girls.",
    type: "goal",
    dataId: "SDG5",
    color: "#ff3a21",
  },
  {
    id: "SDG6",
    number: 6,
    label: "Clean water and sanitation",
    description:
      "Ensure availability and sustainable management of water and sanitation for all.",
    type: "goal",
    dataId: "SDG6",
    color: "#26BDE2",
  },
  {
    id: "SDG7",
    number: 7,
    label: "Affordable and clean energy",
    description:
      "Ensure access to affordable, reliable, sustainable and modern energy for all.",
    type: "goal",
    dataId: "SDG7",
    color: "#fcc30B",
  },
  {
    id: "SDG8",
    number: 8,
    label: "Decent work and economic growth",
    description:
      "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.",
    type: "goal",
    dataId: "SDG8",
    color: "#a21942",
  },
  {
    id: "SDG9",
    number: 9,
    label: "Industry, innovation and infrastructure",
    description:
      "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.",
    type: "goal",
    dataId: "SDG9",
    color: "#fD6925",
  },
  {
    id: "SDG10",
    number: 10,
    label: "Reduced inequalities",
    description: "Reduce inequality within and among countries.",
    type: "goal",
    dataId: "SDG10",
    color: "#DD1367",
  },
  {
    id: "SDG11",
    number: 11,
    label: "Sustainable cities and communities",
    description:
      "Make cities and human settlements inclusive, safe, resilient and sustainable.",
    type: "goal",
    dataId: "SDG11",
    color: "#fD9D24",
  },
  {
    id: "SDG12",
    number: 12,
    label: "Responsible consumption and production",
    description: "Ensure sustainable consumption and production patterns.",
    type: "goal",
    dataId: "SDG12",
    color: "#Bf8B2E",
  },
  {
    id: "SDG13",
    number: 13,
    label: "Climate action",
    description: "Take urgent action to combat climate change and its impacts.",
    type: "goal",
    dataId: "SDG13",
    color: "#3f7E44",
  },
  {
    id: "SDG14",
    number: 14,
    label: "Life below water",
    description:
      "Conserve and sustainably use the oceans, seas and marine resources for sustainable development.",
    type: "goal",
    dataId: "SDG14",
    color: "#0a97D9",
  },
  {
    id: "SDG15",
    number: 15,
    label: "Life on land",
    description:
      "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss .",
    type: "goal",
    dataId: "SDG15",
    color: "#56c02B",
  },
  {
    id: "SDG16",
    number: 16,
    label: "Peace, justice and strong institutions",
    description:
      "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.",
    type: "goal",
    dataId: "SDG16",
    color: "#00689D",
  },
  {
    id: "SDG17",
    number: 17,
    label: "Partnerships for the goals",
    description:
      "Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development.",
    type: "goal",
    dataId: "SDG17",
    color: "#19486a",
  },
];

/**
 * Get the label and the color for an SDG with the given number.
 * @param {number} sdgNumber - The number of the SDG (1 - 17)
 * @return {Object} Return SDG label and color
 */
export const getSdg = (sdgNumber) => {
  return SDGS[sdgNumber - 1];
};
