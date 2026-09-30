import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="section-lg">
      <div className="container">
        <div className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--primary)] px-6 py-16 md:px-14 md:py-20 lg:px-20 lg:py-24">

          {/* Decorative circles */}
          <div
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/[0.06]"
            aria-hidden="true"
          />

          <div
            className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/[0.05]"
            aria-hidden="true"
          />

          <div
            className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full border border-white/[0.06]"
            aria-hidden="true"
          />

          {/* Accent detail */}
          <div
            className="absolute right-1/2 top-0 h-px w-32 translate-x-1/2 bg-[var(--accent)]"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-3xl text-center">

            <span className="eyebrow text-white/55">
              ابدأ رحلتك اليوم
            </span>

            <h2 className="heading-lg mt-5 text-white">
              مستعد لتطوير
              <br />
              <span className="text-[var(--accent)]">
                مهاراتك؟
              </span>
            </h2>

            <p className="body mx-auto mt-6 max-w-2xl text-white/60">
              اختر الدورة التي تناسب أهدافك وابدأ رحلة تعلم
              عملية تساعدك على اكتساب مهارات جديدة وبناء
              مستقبل أفضل.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/courses"
                className="btn bg-white !text-black hover:bg-[var(--surface-muted)]"
              >
                اكتشف الدورات
              </Link>

              <Link
                href="/register"
                className="btn border border-white/20 bg-transparent !text-white hover:bg-white/10"
              >
                سجّل الآن
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}