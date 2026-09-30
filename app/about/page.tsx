import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section-lg">
        <div className="container">
          <div className="max-w-4xl">
            <span className="eyebrow">
              عن المركز
            </span>

            <h1 className="heading-xl mt-5">
              مركز تكوين
              <br />
              يفتح لك طريق
              <br />
              <span className="text-[var(--accent)]">
                التطور والنجاح.
              </span>
            </h1>

            <p className="body-lg mt-7 max-w-2xl text-[var(--muted)]">
              مركز التكوين NVME هو فضاء مخصص للتعلم وتطوير
              المهارات، من خلال تكوينات عملية ومنظمة تساعد
              المتدربين على اكتساب معارف ومهارات قابلة للتطبيق.
            </p>
          </div>
        </div>
      </section>

      {/* About Center */}
      <section className="section bg-[var(--surface-muted)]">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            <div>
              <span className="eyebrow">
                مركز التكوين
              </span>

              <h2 className="heading-lg mt-4">
                تعلّم.
                <br />
                طبّق.
                <br />
                تطوّر.
              </h2>
            </div>

            <div className="space-y-6">
              <p className="body-lg text-[var(--foreground)]">
                نهدف إلى توفير بيئة تعليمية جادة ومناسبة لكل
                شخص يرغب في تطوير مهاراته واكتساب معارف جديدة.
              </p>

              <p className="body text-[var(--muted)]">
                نعتمد على تكوينات تجمع بين الجانب النظري والتطبيق
                العملي، حتى يتمكن المتدرب من تحويل ما يتعلمه إلى
                مهارات حقيقية يمكنه الاستفادة منها في دراسته
                أو عمله أو مشاريعه المستقبلية.
              </p>

              <p className="body text-[var(--muted)]">
                نحرص على تقديم برامج تكوينية واضحة ومنظمة،
                مع التركيز على التطبيق والممارسة والتدرج في
                التعلم.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section">
        <div className="container">

          <div className="max-w-3xl">
            <span className="eyebrow">
              منهجيتنا
            </span>

            <h2 className="heading-lg mt-4">
              تكوين يتجاوز
              <br />
              الجانب النظري.
            </h2>

            <p className="body mt-5 text-[var(--muted)]">
              نؤمن بأن أفضل طريقة لاكتساب المهارات هي الجمع
              بين المعرفة والتطبيق والممارسة المستمرة.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--border)] md:grid-cols-3">

            <div className="bg-[var(--surface)] p-8 md:p-10">
              <span
                dir="ltr"
                className="text-sm font-semibold text-[var(--accent)]"
              >
                01
              </span>

              <h3 className="heading-sm mt-8">
                التعلّم
              </h3>

              <p className="body-sm mt-4 text-[var(--muted)]">
                اكتساب المعارف والأساسيات من خلال برنامج واضح
                ومتدرج يناسب مستوى المتدرب.
              </p>
            </div>

            <div className="bg-[var(--surface)] p-8 md:p-10">
              <span
                dir="ltr"
                className="text-sm font-semibold text-[var(--accent)]"
              >
                02
              </span>

              <h3 className="heading-sm mt-8">
                التطبيق
              </h3>

              <p className="body-sm mt-4 text-[var(--muted)]">
                تحويل المعرفة إلى مهارات من خلال التمارين
                والتطبيقات والمشاريع العملية.
              </p>
            </div>

            <div className="bg-[var(--surface)] p-8 md:p-10">
              <span
                dir="ltr"
                className="text-sm font-semibold text-[var(--accent)]"
              >
                03
              </span>

              <h3 className="heading-sm mt-8">
                التطور
              </h3>

              <p className="body-sm mt-4 text-[var(--muted)]">
                بناء أساس قوي يساعد المتدرب على الاستمرار في
                تطوير مستواه ومهاراته بعد انتهاء التكوين.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Location */}
      <section className="section bg-[var(--surface-muted)]">
        <div className="container">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">

            <div>
              <span className="eyebrow">
                موقعنا
              </span>

              <h2 className="heading-lg mt-4">
               NVME Academy  
              </h2>

              <p className="body mt-5 max-w-lg text-[var(--muted)]">
                يقع مركز التكوين في الجزائر العاصمة ، الجزائر، ويوفر فضاءً
                مخصصاً للتعلم والتكوين وتطوير المهارات.
              </p>

              <div className="mt-8">
                <p className="text-sm text-[var(--muted)]">
                  العنوان
                </p>

                <p className="mt-2 font-semibold">
                  الجزائر، الجزائر
                </p>
              </div>
            </div>

            {/* Temporary visual */}
            <div
              aria-hidden="true"
              className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-[var(--foreground)]"
            >
              <div className="absolute inset-6 border border-white/10" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">

                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">
NVME 
                  </p>

                  <p className="mt-4 font-serif text-5xl text-white">
Academy                  </p>

                  <p className="mt-3 text-sm text-white/40">
                    الجزائر
                  </p>

                </div>
              </div>

              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full border border-[var(--accent)]/40" />
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">

          <div className="relative overflow-hidden rounded-[24px] bg-[var(--foreground)] px-7 py-12 text-white md:px-12 md:py-16">

            <div className="relative z-10 max-w-2xl">

              <span className="text-sm font-medium tracking-wide text-[var(--accent)]">
                ابدأ الآن
              </span>

              <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
                طوّر مهاراتك
                <br />
                معنا.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-white/65">
                اكتشف التكوينات المتاحة واختر المسار الذي
                يتناسب مع أهدافك وطموحاتك.
              </p>

              <Link
                href="/courses"
                className="btn mt-8 !bg-white !text-black hover:!bg-white/90"
              >
                اكتشف التكوينات
              </Link>

            </div>

            <div
              aria-hidden="true"
              className="absolute -left-20 -top-20 h-64 w-64 rounded-full border border-white/10"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full border border-white/10"
            />

          </div>

        </div>
      </section>
    </main>
  );
}