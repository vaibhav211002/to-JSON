


Xml & Csv To JSON 

It is a lightweight Node.js package that automatically detects and converts XML and CSV data to JSON format. It simplifies the process of handling different data formats within your Node.js applications.

Features
1. Automatic detection and conversion of XML and CSV data to JSON
2. Simple and intuitive API
3. Lightweight and dependency-free

Installation
You can install it via npm:

bash
Copy code
npm install @vaibhavbhatt2110/convert-to-json

Usage
javascript

Copy code
const autoDataConverter = require('@vaibhavbhatt2110/convert-to-json');

// Example usage with XML data 
const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
<root>
  <person>
    <name>John Doe</name>
    <age>30</age>
  </person>
  <person>
    <name>Jane Smith</name>
    <age>25</age>
  </person>
</root>`;

autoDataConverter(xmlData); // Outputs JSON representation of XML data

// Example usage with CSV data
const csvData = `Name,Age
John Doe,30
Jane Smith,25`;

autoDataConverter(csvData); // Outputs JSON representation of CSV data
API
autoDataConverter(data: string): void
data: The input data to be converted. It can be either XML or CSV format.
