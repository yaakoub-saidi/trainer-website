import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "@/data/courses";

type CourseDetailsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CourseDetailsPage({
  params,
}: CourseDetailsPageProps) {
  const { slug } = await params;

  const course = courses.find(
    (item) => item.slug === slug
  );

  if (!course) {
    notFound();
  }

  return (
    <main>
      {/* Hero */}
      <section className="section-lg">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-end lg:gap-20">

            <div className="max-w-3xl">
              <Link
                href="/courses"
                className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                ← العودة إلى الدورات
              </Link>

              <span className="eyebrow mt-8 block">
                دورة تدريبية
              </span>

              <h1 className="heading-xl mt-4">
                {course.title}
              </h1>

              <p className="body-lg mt-6 text-[var(--muted)]">
                {course.description}
              </p>
            </div>

            {/* Course Summary */}
            <div className="rounded-[var(--radius-18)] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[0_15px_40px_rgba(23,23,23,0.06)]">
              <div className="space-y-5">

                <div>
                  <span className="text-sm text-[var(--muted)]">
                    المستوى
                  </span>

                  <p className="mt-1 font-semibold">
                    {course.level}
                  </p>
                </div>

                <div>
                  <span className="text-sm text-[var(--muted)]">
                    المدة
                  </span>

                  <p className="mt-1 font-semibold">
                    {course.duration}
                  </p>
                </div>

                <div>
                  <span className="text-sm text-[var(--muted)]">
                    الصيغة
                  </span>

                  <p className="mt-1 font-semibold">
                    {course.format}
                  </p>
                </div>

                <div className="border-t border-[var(--border-light)] pt-5">
                  <span className="text-sm text-[var(--muted)]">
                    السعر
                  </span>

                  <p
                    dir="ltr"
                    className="mt-1 text-2xl font-semibold tracking-tight text-[var(--foreground)]"
                  >
                    {course.price.toLocaleString("fr-FR")} DA
                  </p>
                </div>

                <Link
                  href={`/register?course=${course.slug}`}
                  className="btn btn-primary w-full"
                >
                  سجّل في هذه الدورة
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section bg-[var(--surface-muted)]">
        <div className="container">
          <div className="max-w-4xl">

            <span className="eyebrow">
              أهداف الدورة
            </span>

            <h2 className="heading-lg mt-4">
              ماذا ستتعلم؟
            </h2>

            <div className="mt-10 grid gap-x-12 gap-y-6 md:grid-cols-2">

              {course.objectives.map((objective, index) => (
                <div
                  key={objective}
                  className="flex gap-5 border-t border-[var(--border-light)] pt-5"
                >
                  <span
                    dir="ltr"
                    className="shrink-0 text-sm font-semibold text-[var(--accent)]"
                  >
                    0{index + 1}
                  </span>

                  <p className="body text-[var(--foreground)]">
                    {objective}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">

            <div>
              <span className="eyebrow">
                لمن هذه الدورة؟
              </span>

              <h2 className="heading-lg mt-4">
                مصممة لمن يريد
                <br />
                التطور فعلاً
              </h2>
            </div>

            <div className="space-y-0">
              {course.targetAudience.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-5 border-t border-[var(--border)] py-6"
                >
                  <span
                    dir="ltr"
                    className="text-sm font-semibold text-[var(--muted-light)]"
                  >
                    0{index + 1}
                  </span>

                  <p className="body text-[var(--foreground)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="section bg-[var(--surface-muted)]">
        <div className="container">

          <div className="max-w-3xl">
            <span className="eyebrow">
              محتوى الدورة
            </span>

            <h2 className="heading-lg mt-4">
              برنامج منظم
              <br />
              خطوة بخطوة
            </h2>

            <p className="body mt-5 text-[var(--muted)]">
              تتدرج الدورة من الأساسيات إلى التطبيق العملي
              بطريقة واضحة ومنظمة.
            </p>
          </div>

          <div className="mt-12 border-t border-[var(--border)]">

            {course.modules.map((module, index) => (
              <div
                key={module.title}
                className="grid gap-5 border-b border-[var(--border)] py-8 md:grid-cols-[80px_220px_1fr] md:items-start md:gap-8"
              >
                <span
                  dir="ltr"
                  className="text-sm font-semibold text-[var(--accent)]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="heading-sm">
                  {module.title}
                </h3>

                <p className="body-sm text-[var(--muted)]">
                  {module.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Requirements */}
      <section className="section">
        <div className="container">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            <div>
              <span className="eyebrow">
                قبل البداية
              </span>

              <h2 className="heading-lg mt-4">
                ما الذي
                <br />
                تحتاجه؟
              </h2>
            </div>

            <div>
              {course.requirements.map((requirement, index) => (
                <div
                  key={requirement}
                  className="flex gap-5 border-t border-[var(--border)] py-6"
                >
                  <span
                    dir="ltr"
                    className="text-sm font-semibold text-[var(--muted-light)]"
                  >
                    0{index + 1}
                  </span>

                  <p className="body text-[var(--foreground)]">
                    {requirement}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container">

          <div className="relative overflow-hidden rounded-[24px] bg-[var(--foreground)] px-7 py-12 text-white md:px-12 md:py-16">

            <div className="relative z-10 max-w-2xl">

              <span className="text-sm font-medium tracking-wide text-[var(--accent)]">
                جاهز للبدء؟
              </span>

              <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
                ابدأ رحلتك
                <br />
                في {course.title}
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-white/65">
                سجّل الآن واحجز مكانك في الدورة وابدأ
                في تطوير مهاراتك بطريقة عملية ومنظمة.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <Link
                  href={`/register?course=${course.slug}`}
                  className="btn !bg-white !text-black hover:!bg-white/90"
                >
                  سجّل الآن
                </Link>

                <Link
                  href="/courses"
                  className="btn border border-white/20 !text-white hover:bg-white/10"
                >
                  العودة إلى الدورات
                </Link>

              </div>

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