
const testimonials = [
  {
    name: "أحمد بن يوسف",
    course: "التصميم الجرافيكي",
    text: "الدورة كانت منظمة وواضحة، وأكثر شيء أعجبني هو التركيز على التطبيق وليس الجانب النظري فقط.",
  },
  {
    name: "سارة قادري",
    course: "تطوير الويب",
    text: "طريقة الشرح ساعدتني على فهم المفاهيم خطوة بخطوة، وأصبحت أكثر ثقة في التعامل مع أساسيات تطوير المواقع.",
  },
  {
    name: "محمد بوزيد",
    course: "التسويق عبر وسائل التواصل",
    text: "المحتوى عملي وسهل الفهم، وتعلمت كيف أنظم أفكاري وأبني استراتيجية أفضل للمحتوى.",
  },
];



export default function Testimonials() {
  return (
    <section className="section bg-[var(--surface-muted)]">
      <div className="container">

        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-[1fr_420px] lg:items-end">

          <div>
            <span className="eyebrow">
              آراء المتدربين
            </span>

            <h2 className="heading-lg mt-4 max-w-2xl">
              تجارب حقيقية
              <br />
              <span className="text-[var(--accent)]">
                تبدأ بخطوة واحدة
              </span>
            </h2>
          </div>

          <p className="body text-[var(--muted)] lg:pb-2">
            آراء وتجارب المتدربين تساعدنا على تطوير تجربة
            التعلم وتقديم محتوى أكثر فائدة وفاعلية.
          </p>

        </div>

        {/* Testimonials */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">

          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.course}
              className="group relative flex min-h-[330px] flex-col overflow-hidden rounded-[var(--radius-18)] border border-[var(--border-light)] bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border)] hover:shadow-[0_18px_45px_rgba(23,23,23,0.08)]"
            >

              {/* Number */}
              <div className="flex items-start justify-between">
                <span
                  className="text-xs font-semibold tracking-[0.12em] text-[var(--muted-light)]"
                  dir="ltr"
                >
                  0{index + 1}
                </span>

                <span
                  className="text-4xl leading-none text-[var(--accent)]"
                  aria-hidden="true"
                >
                  ”
                </span>
              </div>

              {/* Stars */}
              <div
                className="mt-7 flex gap-1 text-[var(--accent)]"
                aria-label="تقييم خمس نجوم"
              >
                <span aria-hidden="true">★</span>
                <span aria-hidden="true">★</span>
                <span aria-hidden="true">★</span>
                <span aria-hidden="true">★</span>
                <span aria-hidden="true">★</span>
              </div>

              {/* Text */}
              <p className="body mt-5 flex-1 leading-8 text-[var(--foreground)]">
                {testimonial.text}
              </p>

              {/* Student */}
              <div className="mt-7 flex items-center gap-4 border-t border-[var(--border-light)] pt-5">

                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--surface-muted)] text-sm font-semibold text-[var(--accent)]"
                  aria-hidden="true"
                >
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <p className="font-semibold text-[var(--foreground)]">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {testimonial.course}
                  </p>
                </div>

              </div>

            </article>
          ))}

        </div>

       

      </div>
    </section>
  );
}

