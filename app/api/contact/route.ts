import { NextResponse } from "next/server";

// Forwards contact form submissions to a Google Apps Script Web App that
// appends each entry as a row in a Google Sheet. Set GOOGLE_SHEETS_WEBHOOK_URL
// in the environment to the deployed Apps Script /exec URL — see
// scripts/google-apps-script.gs for the script to paste into the sheet.
export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("GOOGLE_SHEETS_WEBHOOK_URL is not configured");
    return NextResponse.json(
      { error: "Contact form is not configured yet." },
      { status: 500 },
    );
  }

  const body = await request.json();
  const { name, contact, message } = body;

  if (
    typeof name !== "string" ||
    typeof contact !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !contact.trim() ||
    !message.trim()
  ) {
    return NextResponse.json(
      { error: "Name, contact and message are required." },
      { status: 400 },
    );
  }

  try {
    const sheetResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        contact,
        message,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!sheetResponse.ok) {
      throw new Error(`Sheet webhook responded with ${sheetResponse.status}`);
    }
  } catch (error) {
    console.error("Failed to forward contact submission to Google Sheet", error);
    return NextResponse.json(
      { error: "Could not submit right now. Please try again shortly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
