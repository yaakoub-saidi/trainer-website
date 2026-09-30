import CourseCard from "@/components/courses/CourseCard";
import { courses } from "@/data/courses";

export default function CoursesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section-lg">
        <div className="container">
          <div className="max-w-3xl">
            <span className="eyebrow">الدورات التدريبية</span>

            <h1 className="heading-xl mt-5">
              طوّر مهاراتك
              <br />
              <span className="text-[var(--accent)]">
                خطوة بخطوة
              </span>
            </h1>

            <p className="body-lg mt-6 max-w-2xl text-[var(--muted)]">
              اكتشف مجموعة من الدورات العملية المصممة لمساعدتك
              على اكتساب مهارات جديدة وتطوير مسارك الدراسي
              والمهني.
            </p>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section bg-[var(--surface-muted)]">
        <div className="container">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <span className="eyebrow">جميع الدورات</span>

              <h2 className="heading-lg mt-3">
                اختر الدورة
                <br />
                المناسبة لك
              </h2>
            </div>

            <span
              className="hidden text-sm text-[var(--muted)] sm:block"
              dir="ltr"
            >
              {courses.length} Courses
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard
                key={course.slug}
                course={course}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}