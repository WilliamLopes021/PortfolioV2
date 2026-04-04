import type { Coordinates } from "./Coordinates";

export type LevaTransformAdapter<T> = (
  controlFn: (name: string, preset: T) => { [key: string]: number },
  geometryName: string,
) => Coordinates;
