const faqs = [
  {
    question: "كيف يمكنني التسجيل في إحدى الدورات؟",
    answer:
      "يمكنك اختيار الدورة التي تناسبك من صفحة الدورات، ثم الضغط على زر التسجيل وإرسال معلوماتك من خلال النموذج. سيتم التواصل معك لتأكيد التسجيل وتزويدك بالتفاصيل اللازمة.",
  },
  {
    question: "هل الدورات حضورية أم عن بُعد؟",
    answer:
      "تتوفر الدورات حسب البرنامج بصيغة حضورية أو عن بُعد. يمكنك معرفة صيغة كل دورة من خلال صفحة تفاصيل الدورة.",
  },
  {
    question: "هل أحتاج إلى خبرة سابقة؟",
    answer:
      "معظم الدورات مصممة للمبتدئين، لذلك يمكنك البدء حتى إذا لم تكن لديك خبرة سابقة. يتم توضيح المستوى المطلوب في صفحة كل دورة.",
  },
  {
    question: "كم مدة الدورات؟",
    answer:
      "تختلف مدة الدورة حسب البرنامج والمحتوى. يمكنك الاطلاع على المدة المحددة لكل دورة من صفحة الدورات أو صفحة تفاصيلها.",
  },
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer:
      "سيتم التواصل معك بعد إرسال طلب التسجيل لتأكيد المعلومات وتوضيح طريقة الدفع المناسبة للدورة.",
  },
  {
    question: "هل يمكنني التواصل قبل التسجيل؟",
    answer:
      "نعم، يمكنك التواصل للحصول على المزيد من المعلومات حول محتوى الدورة، المدة، المستوى أو أي تفاصيل أخرى قبل اتخاذ قرار التسجيل.",
  },
];

export default function FAQ() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Intro */}
          <div>
            <span className="eyebrow">الأسئلة الشائعة</span>

            <h2 className="heading-lg mt-4">
              لديك سؤال؟
              <br />
              <span className="text-[var(--accent)]">
                ربما تجد الإجابة هنا
              </span>
            </h2>

            <p className="body mt-5 max-w-md text-[var(--muted)]">
              جمعنا لك أهم الأسئلة التي قد تساعدك على فهم الدورات
              واتخاذ الخطوة المناسبة بسهولة.
            </p>
          </div>

          {/* FAQ List */}
          <div className="divide-y divide-[var(--border-light)] border-y border-[var(--border-light)]">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group py-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <span
                      className="mt-1 text-xs font-semibold text-[var(--accent)]"
                      dir="ltr"
                    >
                      0{index + 1}
                    </span>

                    <h3 className="text-base font-semibold leading-7 text-[var(--foreground)]">
                      {faq.question}
                    </h3>
                  </div>

                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-lg text-[var(--muted)] transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>

                <div className="mt-4 pr-10">
                  <p className="body-sm max-w-2xl leading-7 text-[var(--muted)]">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}