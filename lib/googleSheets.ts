import { google } from "googleapis";

const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n");

if (!clientEmail || !privateKey) {
  throw new Error("Google Sheets environment variables are missing.");
}

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: clientEmail,
    private_key: privateKey,
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export const sheets = google.sheets({
  version: "v4",
  auth,
});

export const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

if (!spreadsheetId) {
  throw new Error("GOOGLE_SHEETS_SPREADSHEET_ID is missing.");
}