const stats = [
  {
    value: "+100",
    label: "طالب",
  },
  {
    value: "+6",
    label: "دورات",
  },
  {
    value: "5",
    label: "سنوات من الخبرة",
  },
  {
    value: "100%",
    label:"رضا المتعلمين",
  },
];

export default function Stats() {
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="grid overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`p-7 text-center sm:p-8 lg:p-10 ${
                index !== stats.length - 1
                  ? "border-b border-[var(--border-light)] lg:border-b-0 lg:border-r"
                  : ""
              } ${
                index === 1
                  ? "sm:border-r sm:border-[var(--border-light)] lg:border-r"
                  : ""
              }`}
            >
              <p className="font-[var(--font-cormorant)] text-4xl font-semibold text-[var(--foreground)] sm:text-5xl">
                {stat.value}
              </p>

              <p className="mt-2 text-sm text-[var(--muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}