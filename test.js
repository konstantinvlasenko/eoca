'use strict';

const fs = require('fs');
const XLSX = require('xlsx');

let _wb = XLSX.readFile('examples/2016-2017 EOCA GRANDPRIX STANDINGS.xlsx');
let _sheet_name = _wb.SheetNames[0];
/* Get worksheet */
let _sheet = _wb.Sheets[_sheet_name];
let _players = [];
let _idx = 7;
do{
  if(_sheet.hasOwnProperty('B'+_idx) === false){
    _idx++;
  }else{
    _players.push({
      section: _sheet['A'+_idx].v,
      rank: _sheet['B'+_idx].v,
      lastName: _sheet['C'+_idx].v.replace(/,\s*$/, ""),
      firstName: _sheet['D'+_idx].v,
      total: _sheet['P'+_idx].v
    });
  }
  _idx++;
}while(_sheet.hasOwnProperty('A'+_idx));
fs.writeFile('static/standings.json', JSON.stringify(_players));
