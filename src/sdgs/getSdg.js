export const SDGS = [
  { label: "No poverty", color: "#E5243B" },
  { label: "Zero hunger", color: "#DDa63a" },
  { label: "Good health and well-being", color: "#4c9f38" },
  { label: "Quality education", color: "#c5192D" },
  { label: "Gender equality", color: "#ff3a21" },
  { label: "Clean water and sanitation", color: "#26BDE2" },
  { label: "Affordable and clean energy", color: "#fcc30B" },
  { label: "Decent work and economic growth", color: "#a21942" },
  { label: "Industry, innovation and infrastructure", color: "#fD6925" },
  { label: "Reduced inequalities", color: "#DD1367" },
  { label: "Sustainable cities and communities", color: "#fD9D24" },
  { label: "Responsible consumption and production", color: "#Bf8B2E" },
  { label: "Climate action", color: "#3f7E44" },
  { label: "Life below water", color: "#0a97D9" },
  { label: "Life on land", color: "#56c02B" },
  { label: "Peace, justice and strong institutions", color: "#00689D" },
  { label: "Partnerships for the goals", color: "#19486a" },
];

/**
 * get SDGs object with the label and the color of SDG
 * @param {number} sdgNumber - The number of the sdg should be between 1 - 17
 * @return {Object} Return SDGs object {label: "", color: ""}
 */
export const getSdg = (sdgNumber) => {
  return SDGS[sdgNumber - 1];
};
