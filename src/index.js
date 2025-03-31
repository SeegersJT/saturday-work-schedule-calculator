import fs from 'fs';
import { parse } from 'jsonc-parser';
import ExcelJS from 'exceljs';
import dayjs from 'dayjs';

// Read and parse the JSONC file
const rawData = fs.readFileSync('./data/schedule.jsonc', 'utf-8');
const { names, startDate, endDate } = parse(rawData);

const start = dayjs(startDate);
const end = dayjs(endDate);
const schedule = [];
let index = 0;

// Generate the schedule
for (let date = start; date.isBefore(end) || date.isSame(end); date = date.add(7, 'day')) {
  schedule.push({ date: date.format('YYYY-MM-DD'), name: names[index] });
  index = (index + 1) % names.length;
}

// Create an Excel file
const workbook = new ExcelJS.Workbook();
const sheet = workbook.addWorksheet('Schedule');
sheet.columns = [
  { header: 'Date', key: 'date', width: 15 },
  { header: 'Assigned', key: 'name', width: 30 }
];

sheet.addRows(schedule);

// Save the Excel file
const outputPath = './output/schedule.xlsx';
await workbook.xlsx.writeFile(outputPath);
console.log(`Excel file generated: ${outputPath}`);
