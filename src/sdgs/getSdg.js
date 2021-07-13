const GOALS = [
  {
    number: 1,
    label: "No poverty",
    description: "End poverty in all its forms everywhere.",
    color: "#E5243B",
  },
  {
    number: 2,
    label: "Zero hunger",
    description:
      "End hunger, achieve food security and improved nutrition and promote sustainable agriculture.",
    color: "#DDa63a",
  },
  {
    number: 3,
    label: "Good health and well-being",
    description:
      "Ensure healthy lives and promote well-being for all at all ages.",
    color: "#4c9f38",
  },
  {
    number: 4,
    label: "Quality education",
    description:
      "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
    color: "#c5192D",
  },
  {
    number: 5,
    label: "Gender equality",
    description: "Achieve gender equality and empower all women and girls.",
    color: "#ff3a21",
  },
  {
    number: 6,
    label: "Clean water and sanitation",
    description:
      "Ensure availability and sustainable management of water and sanitation for all.",
    color: "#26BDE2",
  },
  {
    number: 7,
    label: "Affordable and clean energy",
    description:
      "Ensure access to affordable, reliable, sustainable and modern energy for all.",
    color: "#fcc30B",
  },
  {
    number: 8,
    label: "Decent work and economic growth",
    description:
      "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.",
    color: "#a21942",
  },
  {
    number: 9,
    label: "Industry, innovation and infrastructure",
    description:
      "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.",
    color: "#fD6925",
  },
  {
    number: 10,
    label: "Reduced inequalities",
    description: "Reduce inequality within and among countries.",
    color: "#DD1367",
  },
  {
    number: 11,
    label: "Sustainable cities and communities",
    description:
      "Make cities and human settlements inclusive, safe, resilient and sustainable.",
    color: "#fD9D24",
  },
  {
    number: 12,
    label: "Responsible consumption and production",
    description: "Ensure sustainable consumption and production patterns.",
    color: "#Bf8B2E",
  },
  {
    number: 13,
    label: "Climate action",
    description: "Take urgent action to combat climate change and its impacts.",
    color: "#3f7E44",
  },
  {
    number: 14,
    label: "Life below water",
    description:
      "Conserve and sustainably use the oceans, seas and marine resources for sustainable development.",
    color: "#0a97D9",
  },
  {
    number: 15,
    label: "Life on land",
    description:
      "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss .",
    color: "#56c02B",
  },
  {
    number: 16,
    label: "Peace, justice and strong institutions",
    description:
      "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.",
    color: "#00689D",
  },
  {
    number: 17,
    label: "Partnerships for the goals",
    description:
      "Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development.",
    color: "#19486a",
  },
];

/**
 * Get the label and the color for an SDG with the given number.
 * @param {number} sdgNumber - The number of the SDG (1 - 17)
 * @return {Object} Return SDG label and color
 */
export const getSdg = (sdgNumber) => {
  return GOALS.find((goal) => goal.number === sdgNumber);
};
