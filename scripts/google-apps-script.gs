// Paste this into Extensions > Apps Script on the Google Sheet that should
// collect contact form submissions, then deploy it as a Web App (see
// README-google-sheets-setup.md in this folder for the full walkthrough).

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Submissions")
    || SpreadsheetApp.getActiveSpreadsheet().insertSheet("Submissions");

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Submitted At",
      "Name",
      "Email / Phone",
      "Enquiry Type",
      "Course / Scholarship",
      "Message",
    ]);
  }

  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.submittedAt || new Date().toISOString(),
    data.name || "",
    data.contact || "",
    data.enquiryType || "general",
    data.topic || "",
    data.message || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
