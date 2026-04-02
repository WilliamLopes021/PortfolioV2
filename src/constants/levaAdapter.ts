import { levaPreset } from "./levaPreset";
import type { LevaTransformAdapter } from "../types/LevaTransformAdapter";

type PresetControls = typeof levaPreset;

export const levaAdapter: LevaTransformAdapter<PresetControls> = (
  controlFn,
  geometryName,
) => {
  const controls = controlFn(geometryName, levaPreset);

  return {
    rotation: [controls.rotationX, controls.rotationY, controls.rotationZ],
    position: [controls.positionX, controls.positionY, controls.positionZ],
    scale: controls.scale,
  };
};
