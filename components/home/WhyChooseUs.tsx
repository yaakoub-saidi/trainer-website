
const benefits = [
  {
    number: "01",
    title: "تعلم عملي",
    description:
      "ركز على التطبيق والممارسة من خلال تمارين ومشاريع تساعدك على تحويل المعرفة إلى مهارة حقيقية.",
  },
  {
    number: "02",
    title: "محتوى منظم",
    description:
      "دروس مرتبة ومنهج واضح يساعدك على التقدم خطوة بخطوة دون تعقيد أو تشتت.",
  },
  {
    number: "03",
    title: "مهارات مطلوبة",
    description:
      "تعلّم مهارات عملية يمكن أن تساعدك على تطوير مسارك الدراسي أو المهني وبناء فرص جديدة.",
  },
  {
    number: "04",
    title: "متابعة وإرشاد",
    description:
      "احصل على التوجيه والمساعدة خلال رحلة التعلم لفهم المفاهيم وتجاوز الصعوبات.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section bg-[var(--surface-muted)]">
      <div className="container">

        {/* Header */}
        <div className="max-w-2xl">
          <span className="eyebrow">
            لماذا تختار دوراتنا؟
          </span>

          <h2 className="heading-lg mt-3">
            تعلم بطريقة
            <br />
            عملية وواضحة
          </h2>

          <p className="body mt-5 max-w-xl text-[var(--muted)]">
            الهدف ليس فقط الحصول على المعلومات، بل اكتساب
            مهارات يمكنك تطبيقها والاستفادة منها في الواقع.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <article key={benefit.number} className="relative">
              <span
                className="text-sm font-semibold text-[var(--accent)]"
                dir="ltr"
              >
                {benefit.number}
              </span>

              <h3 className="heading-sm mt-4">
                {benefit.title}
              </h3>

              <p className="body-sm mt-3 text-[var(--muted)]">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

