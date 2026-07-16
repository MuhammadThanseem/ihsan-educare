# Wiring the contact form to a Google Sheet

The contact form (`components/ContactForm.tsx`) posts to `/api/contact`
(`app/api/contact/route.ts`), which forwards each submission to a Google Apps
Script Web App. The script appends a row to a Google Sheet.

## 1. Create the sheet and script

1. Create a new Google Sheet (or reuse an existing one) to hold submissions.
2. Open **Extensions → Apps Script**.
3. Delete the placeholder code and paste in the contents of
   `scripts/google-apps-script.gs`.
4. Save the project (e.g. name it "Contact Form Handler").

## 2. Deploy as a Web App

1. Click **Deploy → New deployment**.
2. Select type **Web app**.
3. Set **Execute as**: `Me`.
4. Set **Who has access**: `Anyone`.
5. Click **Deploy** and authorize the requested permissions.
6. Copy the generated **Web app URL** (ends in `/exec`).

## 3. Configure the website

Add the URL to the environment as `GOOGLE_SHEETS_WEBHOOK_URL`:

```
GOOGLE_SHEETS_WEBHOOK_URL="https://script.google.com/macros/s/XXXXXXXX/exec"
```

- Locally: put it in `.env.local` (not committed).
- On the hosting provider (Vercel, etc.): add it as an environment variable
  in the project settings, then redeploy.

Each submission will show up as a new row in the sheet's "Submissions" tab,
with columns: Submitted At, Name, Email / Phone, Enquiry Type, Course /
Scholarship, Message. The contact form lets the visitor mark an enquiry as
General, Course-related (with a course picked from the site's career streams)
or Scholarship-related (with a scholarship picked from the site's scholarship
list), so you can filter the sheet by "Enquiry Type" to route enquiries.

## Notes

- If you edit the Apps Script later, you must create a **new deployment
  version** (Deploy → Manage deployments → Edit → New version) for changes
  to take effect on the existing URL.
- If a sheet was already collecting submissions with the older 4-column
  layout (Submitted At, Name, Email / Phone, Message), update the header row
  by hand to match the 6-column layout above — the script only writes headers
  when the sheet is completely empty.
- The script accepts requests from anyone who has the URL, since Google Apps
  Script Web Apps can't easily verify a custom secret header. This is
  standard for this integration pattern; avoid putting sensitive sheet data
  in the same spreadsheet as other confidential information.
