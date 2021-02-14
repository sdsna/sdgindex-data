import XLSX from "xlsx";

// Convert a sheet in an Excel file into JSON format
// See: https://www.npmjs.com/package/xlsx
export const excelToJson = ({ file, sheet }) => {
  // Get Excel file
  const workbook = XLSX.readFile(file);

  // Use first worksheet, unless sheet name is specified
  if (!sheet) {
    sheet = workbook.SheetNames[0];
  }

  // Get worksheet
  const worksheet = workbook.Sheets[sheet];

  // Convert worksheet to JSON
  return XLSX.utils.sheet_to_json(worksheet);
};
