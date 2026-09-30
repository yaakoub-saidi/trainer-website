
import Link from "next/link";
import CourseCard from "@/components/courses/CourseCard";
import { courses } from "@/data/courses";

export default function FeaturedCourses() {
  const featuredCourses = courses.slice(0, 3);

  return (
    <section className="section">
      <div className="container">

        {/* Section Header */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">
              الدورات التدريبية
            </span>

            <h2 className="heading-lg mt-3">
              تعلّم مهارات
              <br />
              تصنع الفرق
            </h2>

            <p className="body mt-4 max-w-xl text-[var(--muted)]">
              مجموعة من الدورات المصممة لمساعدتك على اكتساب
              المعرفة وتطوير مهاراتك بطريقة عملية ومنظمة.
            </p>
          </div>

          <Link
            href="/courses"
            className="btn btn-secondary shrink-0"
          >
            عرض جميع الدورات
          </Link>
        </div>

        {/* Courses */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course) => (
            <CourseCard
              key={course.slug}
              course={course}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

