const RATINGS = [
  {
    name: "green",
    score: 3,
  },
  {
    name: "yellow",
    score: 2,
  },
  {
    name: "orange",
    score: 1,
  },
  {
    name: "red",
    score: 0,
  },
];

/**
 * Convert score to rating color. Color scores are sometimes used in the US SDG
 * Index.
 * - colorScore below 1 => red
 * - colorScore below 2 => orange
 * - colorScore below 3 => yellow
 * - colorScore over or equal 3 => green
 * - colorScore null | undefined => gray
 * @param {number} colorScore - The numeric color score
 * @return {string} Return the color as string
 */
export const convertScoreToColor = (colorScore) => {
  if (colorScore == null) {
    return "gray";
  }
  return RATINGS.find((rating) => rating.score <= colorScore).name;
};
