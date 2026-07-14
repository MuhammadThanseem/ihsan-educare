import Image from "next/image";
import Link from "next/link";

export default function Logo({
  withText = true,
  inverted = false,
}: {
  withText?: boolean;
  inverted?: boolean;
}) {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-3">
      <Image
        src="/Logo.png"
        alt="IHSAN EDUCARE logo"
        width={44}
        height={44}
        className="h-11 w-11 rounded-full object-cover ring-2 ring-gold-300/60"
        priority
      />
      {withText && (
        <span className="flex flex-col leading-tight">
          <span
            className={`font-display text-lg font-semibold tracking-tight ${
              inverted ? "text-sand-50" : "text-brand-900"
            }`}
          >
            IHSAN EDUCARE
          </span>
          <span
            className={`text-[11px] font-medium uppercase tracking-[0.16em] ${
              inverted ? "text-gold-300" : "text-gold-600"
            }`}
          >
by msf Kamicheri Unit
          </span>
        </span>
      )}
    </Link>
  );
}
