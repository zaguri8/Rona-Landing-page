export default function FloatingImage({
  src,
  alt,
  dims = [250, 250],
  fixed = true,
  side = "right",
  offset = [0, 0],
  style = {},
}) {
  return (
    <div>
      <img
        alt={alt}
        src={src}
        width={dims[0]}
        height={dims[1]}
        style={{
          objectFit: "contain",
          position: fixed ? "fixed" : "inherit",
          bottom: offset ? offset[1] : "inherit",
          right: side === "right" ? (offset ? offset[0] : "inherit") : "inherit",
          left: side === "right" ? (offset ? offset[0] : "inherit") : "inherit",
          zIndex: 99999,
          ...style,
        }}
      />
    </div>
  );
}
