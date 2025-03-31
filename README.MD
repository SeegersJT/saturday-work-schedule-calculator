# Saturday Work Schedule Generator

This Node.js project generates an Excel file for a rotating Saturday work schedule based on a given JSONC configuration file.

## Features
- Reads a JSONC file with names, start date, and end date.
- Assigns names in rotation for each Saturday.
- Outputs a well-formatted Excel file (`schedule.xlsx`).

## Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/SeegersJT/saturday-work-schedule-calculator.git
   cd saturday-work-schedule
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Usage
1. Copy the example schedule file:
   ```sh
   cp data/schedule.example.jsonc data/schedule.jsonc
   ```
2. Edit `data/schedule.jsonc` to match your needs.
3. Run the generator:
   ```sh
   npm start
   ```
4. The output Excel file will be saved in the `output/` directory as `schedule.xlsx`.

## Example JSONC File Format
```jsonc
{
  "names": [
    "Person A",
    "Person B + Person C",
    "Person D",
    "Person E + Person F",
    "Person G + Person H"
  ],
  "startDate": "2025-04-05",
  "endDate": "2025-06-28"
}
```

## Notes
- The rotation follows the order provided in the `names` array.
- Only Saturdays between `startDate` and `endDate` are considered.

## License
This project is licensed under the ISC License.

