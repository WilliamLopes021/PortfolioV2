export type LevaTransformAdapter<T> = (
  controlFn: (
    name: string,
    preset: T,
  ) => { [key: string]: number },
  geometryName: string,
) => {
  rotation: [x: number, y: number, z: number];
  position: [x: number, y: number, z: number];
  scale: number;
};
