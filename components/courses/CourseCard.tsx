import Link from "next/link";
import type { Course } from "@/data/courses";

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({
  course,
}: CourseCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-[var(--border-light)] bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border)] hover:shadow-[0_18px_45px_rgba(23,23,23,0.08)]">

      {/* Top Area */}
      <div className="border-b border-[var(--border-light)] px-6 py-5">
        <div className="flex items-center justify-between gap-4">

          <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)]">
            {course.level}
          </span>

          <span className="text-sm text-[var(--muted)]">
            {course.duration}
          </span>

        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col px-6 py-7">

        <h3 className="heading-sm leading-snug">
          {course.title}
        </h3>

        <p className="body-sm mt-4 min-h-[84px] text-[var(--muted)]">
          {course.shortDescription}
        </p>

        {/* Course Info */}
        <div className="mt-7 grid grid-cols-2 gap-4 border-t border-[var(--border-light)] pt-5">

          <div>
            <span className="text-xs text-[var(--muted-light)]">
              المستوى
            </span>

            <p className="mt-1 text-sm font-semibold text-[var(--foreground)]">
              {course.level}
            </p>
          </div>

          <div>
            <span className="text-xs text-[var(--muted-light)]">
              الصيغة
            </span>

            <p className="mt-1 text-sm font-semibold text-[var(--foreground)]">
              {course.format}
            </p>
          </div>

        </div>

        {/* Price */}
        <div className="mt-6 flex items-end justify-between">

          <div>
            <span className="text-xs text-[var(--muted-light)]">
              السعر
            </span>

            <p
              dir="ltr"
              className="mt-1 text-xl font-semibold tracking-tight text-[var(--foreground)]"
            >
              {course.price.toLocaleString("fr-FR")} DA
            </p>
          </div>

          <span
            dir="ltr"
            className="text-sm text-[var(--muted)]"
          >
            {course.duration}
          </span>

        </div>

        {/* CTA */}
        <Link
          href={`/courses/${course.slug}`}
          className="btn btn-primary mt-7 w-full"
        >
          عرض تفاصيل الدورة
        </Link>

      </div>
    </article>
  );
}