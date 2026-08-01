/**
 * Sri Nritya Culture — Lead Capture Backend
 * ------------------------------------------
 * This script receives form submissions from the website and appends
 * them as a new row in this Google Sheet.
 *
 * SETUP:
 * 1. Create a new Google Sheet.
 * 2. In row 1, add these exact column headers:
 *    Timestamp | Name | Phone | Email | Student Age | Preferred Mode | Message
 * 3. Go to Extensions > Apps Script. Delete any starter code and paste
 *    this whole file in.
 * 4. Click Deploy > New deployment > select type "Web app".
 *    - Description: Sri Nritya Culture lead form
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Click Deploy, authorize the permissions when prompted.
 * 6. Copy the "Web app URL" it gives you (ends in /exec).
 * 7. Paste that URL into GOOGLE_SCRIPT_URL in index.html.
 *
 * That's it — every form submission will now appear as a new row.
 * You can open the Sheet anytime, filter, sort, or export to CSV/Excel
 * for email marketing or WhatsApp broadcast lists.
 */

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name || '',
    data.phone || '',
    data.email || '',
    data.age || '',
    data.mode || '',
    data.message || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
