import fetch from "node-fetch";
import { ListElement } from "../components/ListElement";

var list;

interface MyObject {
    cve: string;
    msg: string;
    time: string;
    src_address: string;
  }
  

async function fetchData() {
  const url = 'http://localhost:3000/api/users';
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    // Hier wird der Körper des HTTP-Befehls als JSON abgerufen
    const data = await response.json();


    list = JSON.stringify(data);
    //list = list.substring(1,list.length-1);
    var array: MyObject[] = JSON.parse(list);
    console.log("Bitte funktioniere"+array[0].cve);
    console.log("Datenstring"+list);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Aufruf der Funktion
fetchData();

export { fetchData }
  