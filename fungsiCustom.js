// TODO: import module bila dibutuhkan di sini
const fs = require('fs');
const { get } = require('http');

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

const bacaData = (fnCallback) => {
    let hasilAkhir = [];

    fs.readFile(file1, "utf-8", (err, data) => {
        if(err) {
            return console.log(`Terjadi kesalahan data 1! ${err}`);
        };

        let getData = JSON.parse(data);
        let getMsg = getData.message.split(" ");

        hasilAkhir.push(getMsg[1]);

        fs.readFile(file2, "utf-8", (err, data) => {
            if(err) {
                return console.log(`Terjadi kesalahan data 2! ${err}`);
            };

            let getData = JSON.parse(data);
            let getMsg = getData[0].message.split(" ");

            hasilAkhir.push(getMsg[1]);

            fs.readFile(file3, "utf-8", (err, data) => {
                if(err) {
                    return console.log(`Terjadi kesalahan data 3! ${err}`);
                };

                let getData = JSON.parse(data);
                let getMsg = getData[0].data.message.split(" ");

                hasilAkhir.push(getMsg[1]);

                return fnCallback(err, hasilAkhir)
            });
        
        });
    });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
