import FigmaLogo from "@/imports/레이어1";

export default function Logo({
  fill = "#1f2129",
  className = "",
}: {
  fill?: string;
  className?: string;
}) {
  const isWhite =
    fill.toLowerCase() === "white" || fill.toLowerCase() === "#ffffff";
  return (
    <div
      className={`relative shrink-0 overflow-visible ${className}`}
      style={{ width: 106, height: 18 }}
      aria-label="솔라캄"
    >
      <div
        className={`absolute inset-0 ${isWhite ? "brightness-0 invert" : ""}`}
        style={{ width: 106, height: 18 }}
      >
        <FigmaLogo />
      </div>
    </div>
  );
}
