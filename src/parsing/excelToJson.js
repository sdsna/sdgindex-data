import XLSX from "xlsx";

/**
 * Convert a sheet in an Excel file into JSON format
 * See: https://www.npmjs.com/package/xlsx
 * @param {Object} param
 * @param {string} param.file - the path to the Excel file to convert
 * @param {string} [param.sheet] - the name of the sheet to convert.
 * If not provided, the first sheet in the Excel file will be used.
 * @return {Array} the converted sheet as an array of objects.
 * See: https://www.npmjs.com/package/xlsx#json
 */
export const excelToJson = ({ file, sheet = null }) => {
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
