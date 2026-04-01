import { Html, useProgress } from "@react-three/drei";
import type { CSSProperties } from "react";

const CanvasLoader = () => {
  const { progress } = useProgress();

  const htmlStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const paragraphStyle: CSSProperties = {
    fontSize: 14,
    color: "#000",
    fontWeight: 800,
    marginTop: 40,
  };

  return (
    <Html as="div" center style={htmlStyle}>
      <span className="canvas-loader" />
      <p style={paragraphStyle}>
        {progress !== 0 ? `${progress.toFixed(2)}%` : `Carregando...`}
      </p>
    </Html>
  );
};

export default CanvasLoader;
