import Link from 'next/link'

/**
 * LuckyStreakly brand mark, from sites/luckystreakly.html: four amber pips on
 * a purple tile — a die seen face-on — with the streak curving away from the
 * centre and two speed lines behind it. Then the wordmark, "Streakly" in the
 * brand purple, over a spaced-capital tagline.
 *
 * Inlined SVG rather than an image: it renders instantly with no extra request
 * and stays crisp at any size. The artwork is aria-hidden; the Link's name is
 * its visible text.
 *
 * `onDark` is for the aubergine footer: the tile steps a shade lighter so it
 * still reads as a tile, and the wordmark turns white with the second half in
 * amber, which is the one colour that holds up on that ground. One component,
 * so the header's mark and the footer's can never drift apart.
 */
export default function Logo({
  className = '',
  onDark = false,
}: {
  className?: string
  onDark?: boolean
}) {
  return (
    <Link
      href="/"
      className={`inline-flex min-h-11 shrink-0 items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
        onDark ? 'focus-visible:ring-offset-navy' : 'focus-visible:ring-offset-cream'
      } ${className}`.trim()}
    >
      <svg viewBox="0 0 42 42" className="h-[40px] w-[40px] shrink-0" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <rect width="42" height="42" rx="12" fill={onDark ? 'var(--color-navy-2)' : 'var(--color-brand)'} />
        <g fill="var(--color-accent)">
          <circle cx="17" cy="16" r="5.2" />
          <circle cx="25" cy="16" r="5.2" />
          <circle cx="17" cy="24" r="5.2" />
          <circle cx="25" cy="24" r="5.2" />
        </g>
        {/* The hole at the centre of the four pips: the tile colour, so it
            reads as a gap rather than as a fifth pip. */}
        <circle cx="21" cy="20" r="2.2" fill={onDark ? 'var(--color-navy-2)' : 'var(--color-brand)'} />
        <path d="M21 22.5c0 5 1.5 8 4 10" fill="none" stroke="var(--color-accent)" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M5 30h7M7 34h7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      </svg>

      <span className="flex flex-col leading-none">
        <span className={`font-display text-[20px] font-extrabold tracking-[-0.03em] sm:text-[22px] ${onDark ? 'text-white' : 'text-ink'}`}>
          Lucky<span className={onDark ? 'text-accent' : 'text-brand'}>Streakly</span>
        </span>
        <span className={`mt-[5px] text-[10.5px] font-semibold uppercase tracking-[0.2em] ${onDark ? 'text-night-muted' : 'text-muted'}`}>
          Casino reviews &amp; bonuses
        </span>
        {/* The link's name is its visible text plus this — no aria-label that
            could disagree with what is on screen. */}
        <span className="sr-only"> home</span>
      </span>
    </Link>
  )
}
