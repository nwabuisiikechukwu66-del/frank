"use client";

interface MarqueeRowProps {
  items: string[];
  direction?: "left" | "right";
  speed?: "normal" | "slow";
}

export default function MarqueeRow({ items, direction = "left", speed = "normal" }: MarqueeRowProps) {
  const duplicated = [...items, ...items];
  const duration = speed === "slow" ? "50s" : "35s";

  return (
    <div className="marquee-container py-2">
      <div
        className={`marquee-inner ${direction}`}
        style={{ animationDuration: duration }}
      >
        {duplicated.map((item, i) => (
          <span
            key={i}
            className="tag mx-2 shrink-0"
            style={{ fontSize: "11px" }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
