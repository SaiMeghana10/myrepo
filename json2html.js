// json2html.js

export default function json2html(data) {
    const columns = ["Name", "Age", "Gender"];
    const tableHeader = columns.map(col => `<th>${col}</th>`).join("");
    
    const tableRows = data.map(row => {
      const rowCells = columns.map(col => `<td>${row[col] || ""}</td>`).join("");
      return `<tr>${rowCells}</tr>`;
    }).join("");
  
    return `
      <table data-user="saimeghanaakkenapally10@gmail.com">
        <thead>
          <tr>${tableHeader}</tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    `;
  }
  