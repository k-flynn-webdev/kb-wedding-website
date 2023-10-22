import { colorHSL } from "@/interfaces";
import { AVATAR_HSL } from "@/consts";

export const stringToColor = (value: string, override: colorHSL) => {
  let hash = 0;
  const HSL = override ? override : AVATAR_HSL;

  if (!override)
    for (let i = 0; i < value.length; i++) {
      hash = value.charCodeAt(i) + ((hash << 5) - hash);
    }

  return `hsl(${hash % 360}, ${HSL.s}%, ${HSL.l}%)`;
};
