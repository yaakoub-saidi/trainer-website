import Link from "next/link";

export default function TrainerIntro() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
          <div>
            <p className="eyebrow"></p>

            <h2 className="heading-lg mt-4">
  يجب أن يكون التعلم عمليًا، شخصيًا، وهادفًا.
            </h2>
          </div>

          <div>
            <p className="body-lg text-[var(--muted)]">
              
            </p>

            <p className="body mt-5 max-w-2xl text-[var(--muted)]">
               بفضل التركيز على التعلم العملي والتوجيه الواضح، تم تصميم كل دورة
  لمساعدة المتعلمين على فهم المفاهيم وتطوير مهارات مفيدة وتطبيق ما
  يتعلمونه بثقة.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
            >
             اكتشف المزيد
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}