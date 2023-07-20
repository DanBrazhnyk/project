export const findMax = (iconCounts) => {
  let maxIcon = null;
  let maxCount = -1;

  for (const icon in iconCounts) {
    if (iconCounts[icon] > maxCount) {
      maxIcon = icon;
      maxCount = iconCounts[icon];
    }
  }

  return maxIcon;
};
