let list = [
	{
		"cve": "CVE-2023-1237",
		"msg": "Jenkinszugriff",
		"time": "Wed Dec 27 13:10:06 UTC 2023",
		"src_address": "/142.13.243.19"
	},
	{
		"cve": "CVE-2023-1237",
		"msg": "Jenkinszugriff",
		"time": "Wed Dec 27 13:10:07 UTC 2023",
		"src_address": "/231.131.181.142"
	},
	{
		"cve": "CVE-2023-1239",
		"msg": "Websiteaufruf",
		"time": "Wed Dec 27 13:10:16 UTC 2023",
		"src_address": "/127.0.0.1"
	},
	{
		"cve": "CVE-2023-1239",
		"msg": "Websiteaufruf",
		"time": "Wed Dec 27 13:10:16 UTC 2023",
		"src_address": "/127.0.0.1"
	}
];

let value = [{
   "cve": "CVE-2023-1237",
   "msg": "Jenkinszugriff",
   "time": "Wed Dec 27 13:10:07 UTC 2023",
   "src_address": "/231.131.181.142"
}];
let count:number = 0;
function convertJsonToHtmlTable(json): string{
   count = 0;
   let table:string = "<table style='font-family: Verdana; border: 1px solid black; border-collapse: collapse; width: 50%;'>\n";
    let cols = Object.keys(json[0]);
 
    table = table.concat(createTableHead(cols));
     json.forEach((item) => {
      table = table.concat("\n",createRow(item));
     });
     table =table.concat("\n","</table>");
     let countReport:string = "<h1 style='font-family: Verdana'>"+count+" verdächtige Pakete wurden gefunden\n";
     const endTable = countReport+table
     return endTable;
  }

  function createTableHead(item: string[]): string{
   let head:string = "<tr>\n"
   let content:string ="";
   item.forEach((x) =>{
      content = content.concat("\t<th style='border: 1px solid black; border-collapse: collapse;'>"+x+"</th>\n")
   })
   head = head.concat(content,"\n</tr>")
   console.log("head"+head)
   return head;
  }


  function createRow(val): string{
     let row:string = "<tr>\n";
     let arr:string[] = Object.values(val);
      arr.forEach((x)=>{
         row = row.concat("\t<td style='border: 1px solid black; border-collapse: collapse;'>",x,"</td>\n")
      })
      count++;
      row = row.concat("</tr>")
      return row;
  }

export {convertJsonToHtmlTable}