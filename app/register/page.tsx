"use client";

import { FormEvent, Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { courses } from "@/data/courses";

function RegisterForm() {
  const searchParams = useSearchParams();
  const courseFromUrl = searchParams.get("course") ?? "";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    course: courseFromUrl,
    level: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "حدث خطأ أثناء إرسال طلب التسجيل."
        );
      }

      setStatus({
        type: "success",
        message:
          data.message ||
          "تم إرسال طلب التسجيل بنجاح. سنتواصل معك قريباً لتأكيد التسجيل.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        course: "",
        level: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "حدث خطأ أثناء إرسال طلب التسجيل.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main>
      {/* Hero */}
      <section className="section-lg">
        <div className="container">
          <div className="max-w-3xl">
            <span className="eyebrow">التسجيل</span>

            <h1 className="heading-xl mt-4">
              ابدأ رحلتك
              <br />
              التعليمية
            </h1>

            <p className="body-lg mt-6 max-w-2xl text-[var(--muted)]">
              املأ المعلومات التالية وسنتواصل معك لتأكيد تسجيلك
              وتزويدك بجميع التفاصيل المتعلقة بالدورة.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section bg-[var(--surface-muted)]">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            {/* Information */}
            <div>
              <span className="eyebrow">معلومات التسجيل</span>

              <h2 className="heading-lg mt-4">
                أخبرنا
                <br />
                عنك
              </h2>

              <p className="body mt-5 max-w-md text-[var(--muted)]">
                المعلومات التي تقدمها ستُستخدم فقط لمعالجة طلب
                التسجيل والتواصل معك بخصوص الدورة التي اخترتها.
              </p>

              <div className="mt-10 border-t border-[var(--border)] pt-6">
                <p className="text-sm font-medium text-[var(--foreground)]">
                  هل لديك سؤال؟
                </p>

                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  يمكنك كتابة سؤالك أو اقتراحك في الحقل الموجود
                  في نهاية النموذج.
                </p>
              </div>
            </div>

            {/* Form Card */}
            <div className="rounded-[24px] border border-[var(--border-light)] bg-[var(--surface)] p-6 shadow-[0_15px_40px_rgba(23,23,23,0.05)] md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First + Last Name */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-sm font-medium text-[var(--foreground)]"
                    >
                      الاسم
                    </label>

                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      autoComplete="given-name"
                      placeholder="أدخل اسمك"
                      className="input w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-2 block text-sm font-medium text-[var(--foreground)]"
                    >
                      اللقب
                    </label>

                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      autoComplete="family-name"
                      placeholder="أدخل لقبك"
                      className="input w-full"
                    />
                  </div>
                </div>

                {/* Phone + Email */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-[var(--foreground)]"
                    >
                      رقم الهاتف
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      autoComplete="tel"
                      placeholder="05 XX XX XX XX"
                      className="input w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-[var(--foreground)]"
                    >
                      البريد الإلكتروني
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      placeholder="example@email.com"
                      className="input w-full"
                    />
                  </div>
                </div>

                {/* Course */}
                <div>
                  <label
                    htmlFor="course"
                    className="mb-2 block text-sm font-medium text-[var(--foreground)]"
                  >
                    اختر الدورة
                  </label>

                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="input w-full"
                  >
                    <option value="">
                      اختر الدورة التي تريد التسجيل فيها
                    </option>

                    {courses.map((course) => (
                      <option
                        key={course.slug}
                        value={course.slug}
                      >
                        {course.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Level */}
                <div>
                  <label
                    htmlFor="level"
                    className="mb-2 block text-sm font-medium text-[var(--foreground)]"
                  >
                    المستوى الحالي
                  </label>

                  <select
                    id="level"
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    required
                    className="input w-full"
                  >
                    <option value="">اختر مستواك</option>

                    <option value="مبتدئ">مبتدئ</option>
                    <option value="متوسط">متوسط</option>
                    <option value="متقدم">متقدم</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-[var(--foreground)]"
                  >
                    رسالة أو اقتراح
                    <span className="mr-2 text-xs font-normal text-[var(--muted-light)]">
                      اختياري
                    </span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="هل لديك سؤال أو اقتراح؟"
                    className="input min-h-[140px] w-full resize-y py-4"
                  />
                </div>

                {/* Status */}
                {status.message && (
                  <div
                    role="alert"
                    className={`rounded-xl border px-4 py-4 text-sm leading-7 ${
                      status.type === "success"
                        ? "border-[var(--success)]/20 bg-[var(--success)]/5 text-[var(--success)]"
                        : "border-[var(--error)]/20 bg-[var(--error)]/5 text-[var(--error)]"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary flex w-full items-center justify-center gap-3 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <span
                        className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
                        aria-hidden="true"
                      />
                      <span>جاري التسجيل...</span>
                    </>
                  ) : (
                    "إرسال طلب التسجيل"
                  )}
                </button>

                <p className="text-center text-xs leading-6 text-[var(--muted-light)]">
                  بإرسال هذا النموذج، أنت تؤكد أن المعلومات
                  المقدمة صحيحة.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <main>
          <section className="section-lg">
            <div className="container">
              <p className="text-sm text-[var(--muted)]">
                جاري تحميل صفحة التسجيل...
              </p>
            </div>
          </section>
        </main>
      }
    >
      <RegisterForm />
    </Suspense>
  );
}