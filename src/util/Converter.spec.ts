let { jestG } =require('@jest/globals');
let { createRow } = require('./Converter');

let value = [{
    "cve": "CVE-2023-1237",
    "msg": "Jenkinszugriff",
    "time": "Wed Dec 27 13:10:07 UTC 2023",
    "src_address": "/231.131.181.142"
 }];

 let rowHTML = "<tr>\n\t<td>CVE-2023-1237</td>\
 \n\t<td>Jenkinszugriff</td>\n\t\
<td>Wed Dec 27 13:10:07 UTC 2023</td>\n\t\
<td>/231.131.181.142</td>\n\</tr>";

console.log(rowHTML+"\n\n");

let conv = createRow(value[0]);
let converted = conv.replaceAll(/(?<=\<td).*'(?=\>)/g,"");

jestG.describe('Test Row Generation', () => {
    jestG.test('Test-Value into HTML-Row', () =>{
        jestG.expect(createRow(value[0]).replaceAll(/(?<=\<td).*'(?=\>)/g,"")).toBe(rowHTML);
    })
})

