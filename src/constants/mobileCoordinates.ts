import type { Coordinates } from "../types/Coordinates";

export const getResponsiveCoord = (isMobile: boolean) => {
  const hackerRoom: Coordinates = {
    scale: 0.75,
    position: [-1.2, -1.3, -1.80],
    rotation: [0.3, 3.7, 0],
  };

  const typescriptLogo: Coordinates = {
    scale: 6.3,
    position: [-1.7, 0.3, -2.2],
    rotation: [-6.6, 0.8, 0.6],
  };

  const reactLogo: Coordinates = {
    scale: 0.4,
    position: [1.5, 0.5, -6.5],
    rotation: [-0.3, -5.7, -1.7],
  };

  if (isMobile) {
    hackerRoom.rotation = [0.1, -2.7, 0.1];
    hackerRoom.position = [-0.3, -2.1, -3.5];
    hackerRoom.scale = 1.1;

    reactLogo.rotation = [-0.7, -3.5, 0.1];
    reactLogo.position = [1.1, 0.9, -5.7];
    reactLogo.scale = 0.3;

    typescriptLogo.rotation = [-0.7, 0.5, 0.1];
    typescriptLogo.position = [-0.7, -0.9, -3.9];
    typescriptLogo.scale = 7.4;
  }

  return { hackerRoom, reactLogo, typescriptLogo };
};
