import { GoogleSpreadsheet } from "google-spreadsheet";

// configuration variables 
const SPREADSHEET_ID = "1g4sHOdAcjPPxVsy_-9O622AO5wFCeEON6HjOaUXhA0s"   
const SHEET_ID = "0"

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

export const appendSpreadsheet = async (row) => {
    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
      // loads document properties and worksheets
      await doc.loadInfo();
  
      const sheet = doc.sheetsById[SHEET_ID];
      const result = await sheet.addRow(row);
    } catch (e) {
      
      // console.log("Error: ", e);
    }
  };