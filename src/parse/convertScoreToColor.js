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
 * Convert score to color.
 * - colorValue below 1 => red
 * - colorValue below 2 => orange
 * - colorValue below 3 => yellow
 * - colorValue over or equal 3 => green
 * - colorValue null | undefined => gray
 * @param {number} colorValue - The number corresponding to the color
 * @return {string} Return the color as string
 */
export const convertScoreToColor = (colorValue) => {
  if (colorValue == null) {
    return "gray";
  }
  return RATINGS.find((rating) => rating.score <= colorValue).name;
};
