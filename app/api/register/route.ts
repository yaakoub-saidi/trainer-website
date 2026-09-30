import { NextResponse } from "next/server";
import { courses } from "@/data/courses";
import { sheets, spreadsheetId } from "@/lib/googleSheets";

type RegisterRequest = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  course?: string;
  level?: string;
  message?: string;
};

const allowedLevels = ["مبتدئ", "متوسط", "متقدم"];

function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RegisterRequest;

    const firstName = cleanText(body.firstName, 50);
    const lastName = cleanText(body.lastName, 50);
    const phone = cleanText(body.phone, 30);
    const email = cleanText(body.email, 120).toLowerCase();
    const course = cleanText(body.course, 100);
    const level = cleanText(body.level, 30);
    const message = cleanText(body.message, 1000);

    if (!firstName || !lastName || !phone || !email || !course || !level) {
      return NextResponse.json(
        {
          success: false,
          message: "يرجى ملء جميع الحقول المطلوبة.",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "يرجى إدخال بريد إلكتروني صحيح.",
        },
        { status: 400 }
      );
    }

    if (!allowedLevels.includes(level)) {
      return NextResponse.json(
        {
          success: false,
          message: "المستوى المحدد غير صالح.",
        },
        { status: 400 }
      );
    }

    const selectedCourse = courses.find(
      (item) => item.slug === course
    );

    if (!selectedCourse) {
      return NextResponse.json(
        {
          success: false,
          message: "الدورة المحددة غير موجودة.",
        },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("fr-FR", {
      timeZone: "Africa/Algiers",
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `'${selectedCourse.title}'!A:I`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            timestamp,
            firstName,
            lastName,
            phone,
            email,
            selectedCourse.title,
            level,
            message,
            "جديد",
          ],
        ],
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "تم استلام طلب التسجيل بنجاح.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Google Sheets registration error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء حفظ طلب التسجيل.",
      },
      { status: 500 }
    );
  }
}