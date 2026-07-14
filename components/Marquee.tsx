import Icon from "./Icon";
import type { IconName } from "@/lib/icons";

export default function Marquee({
  items,
}: {
  items: { icon: IconName; label: string }[];
}) {
  const track = [...items, ...items];
  return (
    <div
      className="group relative overflow-hidden border-y border-gold-900/30 bg-brand-950 py-3"
      aria-hidden
    >
      <div className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused]">
        {track.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 whitespace-nowrap text-sm font-medium uppercase tracking-[0.2em] text-sand-100/60"
          >
            <span className="inline-flex items-center gap-2">
              <Icon name={item.icon} className="text-gold-400" />
              {item.label}
            </span>
            <span className="text-gold-500">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
