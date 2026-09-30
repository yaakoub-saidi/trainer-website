
import Link from "next/link";

export default function Hero() {
  return (
    <section className="section-lg overflow-hidden">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Text */}
          <div className="max-w-xl">
            <span className="eyebrow">
              منصة تعليمية وتدريبية
            </span>

            <h1 className="heading-xl mt-5">
              طوّر مهاراتك
              <br />
              <span className="text-[var(--accent)]">
                وابنِ مستقبلك
              </span>
            </h1>

            <p className="body-lg mt-6 max-w-lg text-[var(--muted)]">
              دورات تدريبية عملية تساعدك على تطوير معرفتك،
              اكتساب مهارات جديدة، وتحقيق أهدافك المهنية بخطوات واضحة.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/courses"
                className="btn btn-primary"
              >
                اكتشف الدورات
              </Link>

              <Link
                href="/register"
                className="btn btn-secondary"
              >
                سجّل الآن
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--muted)]">
              <span>✓ محتوى عملي</span>
              <span>✓ تدريب واضح</span>
              <span>✓ متابعة للمتدربين</span>
            </div>
          </div>

          {/* Editorial Educational Visual */}
          <div className="hero-editorial" aria-hidden="true">

            <div className="editorial-shadow" />

            {/* Paper */}
            <div className="editorial-paper paper-back">
              <span className="paper-line" />
              <span className="paper-line short" />
              <span className="paper-line" />
              <span className="paper-line short" />
            </div>

            {/* Open Book */}
            <div className="editorial-book">
              <div className="book-page book-page-left">
                <span />
                <span />
                <span />
                <span className="short" />
              </div>

              <div className="book-page book-page-right">
                <div className="book-heading" />
                <span />
                <span />
                <span className="short" />
              </div>
            </div>

            {/* Course Card */}
            <div className="editorial-card">
              <span className="card-label">
                دورة تدريبية
              </span>

              <strong>
                تعلّم
                <br />
                وطوّر مهاراتك
              </strong>

              <div className="card-progress">
                <span />
              </div>
            </div>

            {/* Pencil */}
            <div className="editorial-pencil">
              <div className="pencil-body" />
              <div className="pencil-tip" />
            </div>

            {/* Decorative dots */}
            <div className="editorial-dot dot-one" />
            <div className="editorial-dot dot-two" />

          </div>
        </div>
      </div>
    </section>
  );
}

