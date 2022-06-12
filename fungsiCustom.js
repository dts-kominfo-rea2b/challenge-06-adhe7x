// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3

// Fungsi mengambil message sesuai dengan struktur data Json

const splitMessage = (dataJson) => {
  
  let arrayMsg = [];

  if (dataJson.message !== undefined) {
    arrayMsg = dataJson.message.split(" ");
    return arrayMsg[arrayMsg.length - 1];
  };

  if (dataJson[0].message !== undefined) {
    arrayMsg = dataJson[0].message.split(" ");
    return arrayMsg[arrayMsg.length - 1];
  };

  if (dataJson[0].data.message !== undefined) {
    arrayMsg = dataJson[0].data.message.split(" ");
    return arrayMsg[arrayMsg.length - 1];
  };
};

async function bacaData(fnCallback) {
  let files = [file1, file2, file3];
  let hasilAkhir= [];

  try {
    for (const file of files) {
    const data = await fs.promises.readFile(file, "utf-8");
    hasilAkhir.push(splitMessage(JSON.parse(data)));
    };
    fnCallback(null, hasilAkhir);
  }
  catch(err) {
    fnCallback(err, null);
  };
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
