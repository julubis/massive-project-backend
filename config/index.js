// require('dotenv').config();
// const {
//   DataTypes,
// } = require('sequelize');
// const db = require('./database');

// const {query} = require('../services/db.service')

const foods = [
  {
    "id": 1,
    "name": "Abon haruwan",
    "category": "seafood",
    "type": "processed",
    "energy": 513,
    "protein": 23.7,
    "fat": 37,
    "carbs": 21.3
  },
  {
    "id": 2,
    "name": "Abon ikan",
    "category": "seafood",
    "type": "processed",
    "energy": 435,
    "protein": 27.2,
    "fat": 20.2,
    "carbs": 36.1
  },
  {
    "id": 3,
    "name": "Akar tonjong, segar (Lotus root, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 45,
    "protein": 1.1,
    "fat": 0.4,
    "carbs": 10.8
  },
  {
    "id": 4,
    "name": "Ale,toge, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 37,
    "protein": 4.4,
    "fat": 0.5,
    "carbs": 3.8
  },
  {
    "id": 5,
    "name": "Alpukat, segar (Avocado, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 85,
    "protein": 0.9,
    "fat": 6.5,
    "carbs": 7.7
  },
  {
    "id": 6,
    "name": "Amparan tatak",
    "category": "cereal",
    "type": "processed",
    "energy": 191,
    "protein": 1.3,
    "fat": 5.5,
    "carbs": 34
  },
  {
    "id": 7,
    "name": "Ampas kacang hijau",
    "category": "grain",
    "type": "processed",
    "energy": 96,
    "protein": 3.7,
    "fat": 0.6,
    "carbs": 19.1
  },
  {
    "id": 8,
    "name": "Ampas tahu kukus",
    "category": "grain",
    "type": "processed",
    "energy": 75,
    "protein": 4.1,
    "fat": 2.1,
    "carbs": 10.7
  },
  {
    "id": 9,
    "name": "Ampas tahu, kering",
    "category": "grain",
    "type": "processed",
    "energy": 414,
    "protein": 26.6,
    "fat": 18.3,
    "carbs": 41.3
  },
  {
    "id": 10,
    "name": "Ampas tahu, mentah",
    "category": "grain",
    "type": "processed",
    "energy": 67,
    "protein": 5,
    "fat": 2.1,
    "carbs": 8.1
  },
  {
    "id": 11,
    "name": "Anak sapi, daging, gemuk, segar (Veal, meat, high fat, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 184,
    "protein": 18.8,
    "fat": 14,
    "carbs": 0
  },
  {
    "id": 12,
    "name": "Anak sapi, daging, kurus, segar (Veal, meat, high fat, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 174,
    "protein": 19.6,
    "fat": 10,
    "carbs": 0
  },
  {
    "id": 13,
    "name": "Anak sapi, daging, sedang, segar (Veal, meat, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 190,
    "protein": 19.1,
    "fat": 12,
    "carbs": 0
  },
  {
    "id": 14,
    "name": "Andaliman, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 99,
    "protein": 4.6,
    "fat": 1,
    "carbs": 18
  },
  {
    "id": 15,
    "name": "Andewi, segar (Endive, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 226,
    "protein": 1.6,
    "fat": 0.2,
    "carbs": 5.3
  },
  {
    "id": 16,
    "name": "Anggur hutan, segar",
    "category": "fruit",
    "type": "raw",
    "energy": 30,
    "protein": 0.5,
    "fat": 0.2,
    "carbs": 6.8
  },
  {
    "id": 17,
    "name": "Angsa, daging, segar (Goose, meat, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 349,
    "protein": 16.4,
    "fat": 31.5,
    "carbs": 0
  },
  {
    "id": 18,
    "name": "Anyang, sayur",
    "category": "vegetable",
    "type": "processed",
    "energy": 126,
    "protein": 3.4,
    "fat": 7.9,
    "carbs": 10.3
  },
  {
    "id": 19,
    "name": "Apang kukus, kue",
    "category": "cereal",
    "type": "processed",
    "energy": 202,
    "protein": 3,
    "fat": 0.3,
    "carbs": 46.7
  },
  {
    "id": 20,
    "name": "Apel malang, segar (Apel, green, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 57,
    "protein": 0.5,
    "fat": 0.4,
    "carbs": 12.8
  },
  {
    "id": 21,
    "name": "Apel, segar",
    "category": "fruit",
    "type": "raw",
    "energy": 58,
    "protein": 0.3,
    "fat": 0.4,
    "carbs": 14.9
  },
  {
    "id": 22,
    "name": "Apem, kue",
    "category": "cereal",
    "type": "processed",
    "energy": 148,
    "protein": 2,
    "fat": 0.5,
    "carbs": 33.9
  },
  {
    "id": 23,
    "name": "Arbai, segar (Arbein, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 37,
    "protein": 0.8,
    "fat": 0.5,
    "carbs": 8.3
  },
  {
    "id": 24,
    "name": "Ares, sayur",
    "category": "vegetable",
    "type": "processed",
    "energy": 113,
    "protein": 0.9,
    "fat": 7.2,
    "carbs": 11.2
  },
  {
    "id": 25,
    "name": "Arrowroot, segar (Arrowroot, fresh)",
    "category": "tuber",
    "type": "raw",
    "energy": 102,
    "protein": 1,
    "fat": 0.2,
    "carbs": 24.1
  },
  {
    "id": 26,
    "name": "Arwan sirsir",
    "category": "vegetable",
    "type": "processed",
    "energy": 277,
    "protein": 2.4,
    "fat": 25,
    "carbs": 10.7
  },
  {
    "id": 27,
    "name": "Asam arang coklat, segar",
    "category": "spice",
    "type": "raw",
    "energy": 130,
    "protein": 0.5,
    "fat": 1.1,
    "carbs": 30.9
  },
  {
    "id": 28,
    "name": "Asam arang merah, segar (Mysore Gamboge, fresh)",
    "category": "spice",
    "type": "raw",
    "energy": 99,
    "protein": 0.8,
    "fat": 1.6,
    "carbs": 20.3
  },
  {
    "id": 29,
    "name": "Asam kandis, segar (Mysore Gamboge, fresh)",
    "category": "spice",
    "type": "raw",
    "energy": 75,
    "protein": 0.2,
    "fat": 1.1,
    "carbs": 16.1
  },
  {
    "id": 30,
    "name": "Asam masak pohon, segar (Tamarind, fresh)",
    "category": "spice",
    "type": "raw",
    "energy": 267,
    "protein": 2.8,
    "fat": 0.6,
    "carbs": 62.5
  },
  {
    "id": 31,
    "name": "Asam payak, segar (Asam paya/ kelubi/ kuwai-kuwai)",
    "category": "spice",
    "type": "raw",
    "energy": 135,
    "protein": 0.8,
    "fat": 0.4,
    "carbs": 32.1
  },
  {
    "id": 32,
    "name": "Asan kandis, kering (Mysore Gamboge, dry)",
    "category": "spice",
    "type": "raw",
    "energy": 261,
    "protein": 0.9,
    "fat": 1.6,
    "carbs": 63.3
  },
  {
    "id": 33,
    "name": "Asinan Bogor, sayuran",
    "category": "vegetable",
    "type": "processed",
    "energy": 98,
    "protein": 3.9,
    "fat": 2.6,
    "carbs": 14.8
  },
  {
    "id": 34,
    "name": "Ayam  goreng Kentucky,sayap",
    "category": "meat",
    "type": "processed",
    "energy": 297,
    "protein": 35.9,
    "fat": 15.2,
    "carbs": 1.6
  },
  {
    "id": 35,
    "name": "Ayam goreng church texas, dada",
    "category": "meat",
    "type": "processed",
    "energy": 338,
    "protein": 35.2,
    "fat": 20.6,
    "carbs": 0.4
  },
  {
    "id": 36,
    "name": "Ayam goreng church texas, sayap",
    "category": "meat",
    "type": "processed",
    "energy": 295,
    "protein": 34,
    "fat": 16,
    "carbs": 1.5
  },
  {
    "id": 37,
    "name": "Ayam goreng church,texas paha",
    "category": "meat",
    "type": "processed",
    "energy": 287,
    "protein": 31,
    "fat": 15.7,
    "carbs": 1.7
  },
  {
    "id": 38,
    "name": "Ayam goreng kalasan, paha",
    "category": "meat",
    "type": "processed",
    "energy": 275,
    "protein": 37.4,
    "fat": 12.2,
    "carbs": 1.3
  },
  {
    "id": 39,
    "name": "Ayam goreng kentucky, dada",
    "category": "meat",
    "type": "processed",
    "energy": 298,
    "protein": 34.2,
    "fat": 16.8,
    "carbs": 0.1
  },
  {
    "id": 40,
    "name": "Ayam goreng Kentucky, paha",
    "category": "meat",
    "type": "processed",
    "energy": 286,
    "protein": 32.1,
    "fat": 16.1,
    "carbs": 1.1
  },
  {
    "id": 41,
    "name": "Ayam goreng mbok berek dada",
    "category": "meat",
    "type": "processed",
    "energy": 295,
    "protein": 39.2,
    "fat": 13.6,
    "carbs": 1
  },
  {
    "id": 42,
    "name": "Ayam goreng pasundan, dada",
    "category": "meat",
    "type": "processed",
    "energy": 246,
    "protein": 37.9,
    "fat": 9,
    "carbs": 0.7
  },
  {
    "id": 43,
    "name": "Ayam goreng pasundan, paha",
    "category": "meat",
    "type": "processed",
    "energy": 245,
    "protein": 33.1,
    "fat": 11.4,
    "carbs": 0.3
  },
  {
    "id": 44,
    "name": "Ayam goreng pioneer, dada",
    "category": "meat",
    "type": "processed",
    "energy": 295,
    "protein": 37.4,
    "fat": 14.7,
    "carbs": 0.6
  },
  {
    "id": 45,
    "name": "Ayam goreng sukabumi, dada",
    "category": "meat",
    "type": "processed",
    "energy": 244,
    "protein": 36.7,
    "fat": 9.2,
    "carbs": 1
  },
  {
    "id": 46,
    "name": "Ayam goreng sukabumi, paha",
    "category": "meat",
    "type": "processed",
    "energy": 283,
    "protein": 35.7,
    "fat": 14.3,
    "carbs": 0.5
  },
  {
    "id": 47,
    "name": "Ayam taliwang, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 264,
    "protein": 18.2,
    "fat": 20.1,
    "carbs": 2.7
  },
  {
    "id": 48,
    "name": "Ayam, ampela, goreng",
    "category": "meat",
    "type": "processed",
    "energy": 270,
    "protein": 32.3,
    "fat": 11.2,
    "carbs": 9.9
  },
  {
    "id": 49,
    "name": "Ayam, daging, segar (Chicken, meat, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 298,
    "protein": 18.2,
    "fat": 25,
    "carbs": 0
  },
  {
    "id": 50,
    "name": "Ayam, dideh/darah, segar (Black puding (chicken blood), fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 75,
    "protein": 13.8,
    "fat": 1.9,
    "carbs": 0.7
  },
  {
    "id": 51,
    "name": "Ayam, hati, segar (Chicken liver, raw)",
    "category": "meat",
    "type": "raw",
    "energy": 261,
    "protein": 27.4,
    "fat": 16.1,
    "carbs": 1.6
  },
  {
    "id": 52,
    "name": "Ayam, usus, goreng",
    "category": "meat",
    "type": "processed",
    "energy": 473,
    "protein": 45.2,
    "fat": 26.3,
    "carbs": 13.9
  },
  {
    "id": 53,
    "name": "Babi hutan masak rica, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 491,
    "protein": 24.6,
    "fat": 16.3,
    "carbs": 0.2
  },
  {
    "id": 54,
    "name": "Babi, daging, gemuk,segar (Pork, medium fat, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 453,
    "protein": 11.9,
    "fat": 45,
    "carbs": 0
  },
  {
    "id": 55,
    "name": "Babi, daging, kurus, segar (Pork, lean, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 371,
    "protein": 14.1,
    "fat": 35,
    "carbs": 0
  },
  {
    "id": 56,
    "name": "Babi, ginjal, segar (Kidney, pork, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 110,
    "protein": 16.3,
    "fat": 4.6,
    "carbs": 0.8
  },
  {
    "id": 57,
    "name": "Babi, hati, segar (Liver, pork, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 129,
    "protein": 19.7,
    "fat": 4.8,
    "carbs": 1.7
  },
  {
    "id": 58,
    "name": "Bagea kelapa asin",
    "category": "tuber",
    "type": "processed",
    "energy": 450,
    "protein": 3.2,
    "fat": 13.9,
    "carbs": 78.1
  },
  {
    "id": 59,
    "name": "Bagea kelapa manis",
    "category": "tuber",
    "type": "processed",
    "energy": 452,
    "protein": 1.3,
    "fat": 13.8,
    "carbs": 80.6
  },
  {
    "id": 60,
    "name": "Bagea kenari asin",
    "category": "tuber",
    "type": "processed",
    "energy": 529,
    "protein": 3.2,
    "fat": 29.1,
    "carbs": 63.6
  },
  {
    "id": 61,
    "name": "Bagea kenari manis",
    "category": "tuber",
    "type": "processed",
    "energy": 523,
    "protein": 3.2,
    "fat": 28.2,
    "carbs": 64.2
  },
  {
    "id": 62,
    "name": "Bagea kw 1",
    "category": "tuber",
    "type": "processed",
    "energy": 416,
    "protein": 6.5,
    "fat": 9.4,
    "carbs": 76.3
  },
  {
    "id": 63,
    "name": "Bagea kw 2",
    "category": "tuber",
    "type": "processed",
    "energy": 382,
    "protein": 0.3,
    "fat": 3.5,
    "carbs": 87.2
  },
  {
    "id": 64,
    "name": "Bakpia, kue",
    "category": "cereal",
    "type": "processed",
    "energy": 272,
    "protein": 8.7,
    "fat": 6.7,
    "carbs": 44.1
  },
  {
    "id": 65,
    "name": "Bakung, segar (Welsh onion, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 27,
    "protein": 2,
    "fat": 0.2,
    "carbs": 4.2
  },
  {
    "id": 66,
    "name": "Bakwan",
    "category": "cereal",
    "type": "processed",
    "energy": 280,
    "protein": 8.2,
    "fat": 10.2,
    "carbs": 39
  },
  {
    "id": 67,
    "name": "Balichong (Tiny shrimp fermented)",
    "category": "spice",
    "type": "processed",
    "energy": 152,
    "protein": 13.2,
    "fat": 0.8,
    "carbs": 22.9
  },
  {
    "id": 68,
    "name": "Baligo, segar (Wax gourd)",
    "category": "vegetable",
    "type": "raw",
    "energy": 15,
    "protein": 0.4,
    "fat": 0.2,
    "carbs": 3
  },
  {
    "id": 69,
    "name": "Bantal",
    "category": "cereal",
    "type": "processed",
    "energy": 190,
    "protein": 3.3,
    "fat": 0.3,
    "carbs": 43.5
  },
  {
    "id": 70,
    "name": "Barongko",
    "category": "fruit",
    "type": "processed",
    "energy": 159,
    "protein": 3.1,
    "fat": 5.8,
    "carbs": 23.5
  },
  {
    "id": 71,
    "name": "Baruasa",
    "category": "cereal",
    "type": "processed",
    "energy": 417,
    "protein": 6.5,
    "fat": 8.2,
    "carbs": 79.3
  },
  {
    "id": 72,
    "name": "Batar daan",
    "category": "cereal",
    "type": "processed",
    "energy": 107,
    "protein": 2.2,
    "fat": 2.2,
    "carbs": 19.6
  },
  {
    "id": 73,
    "name": "Batatas gembili, segar (Lesser yam, fresh)",
    "category": "tuber",
    "type": "raw",
    "energy": 76,
    "protein": 1.1,
    "fat": 0.9,
    "carbs": 16
  },
  {
    "id": 74,
    "name": "Batatas kelapa, ubi, bakar",
    "category": "tuber",
    "type": "processed",
    "energy": 110,
    "protein": 1.4,
    "fat": 1.1,
    "carbs": 23.4
  },
  {
    "id": 75,
    "name": "Batatas kelapa, ubi, kukus",
    "category": "tuber",
    "type": "processed",
    "energy": 92,
    "protein": 1.2,
    "fat": 0.3,
    "carbs": 21
  },
  {
    "id": 76,
    "name": "Batatas kelapa, ubi, segar",
    "category": "tuber",
    "type": "raw",
    "energy": 89,
    "protein": 1.1,
    "fat": 0.1,
    "carbs": 21
  },
  {
    "id": 77,
    "name": "Batatas tali, ubi, rebus",
    "category": "tuber",
    "type": "processed",
    "energy": 182,
    "protein": 2.4,
    "fat": 0.4,
    "carbs": 42.2
  },
  {
    "id": 78,
    "name": "Bawang bombay, segar (Onion, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 43,
    "protein": 1.4,
    "fat": 0.2,
    "carbs": 10.3
  },
  {
    "id": 79,
    "name": "Bawang merah, segar (Shallot)",
    "category": "spice",
    "type": "raw",
    "energy": 46,
    "protein": 1.5,
    "fat": 0.3,
    "carbs": 9.2
  },
  {
    "id": 80,
    "name": "Bawang putih, segar (Garlic)",
    "category": "spice",
    "type": "raw",
    "energy": 112,
    "protein": 4.5,
    "fat": 0.2,
    "carbs": 23.1
  },
  {
    "id": 81,
    "name": "Bayam ,rebus",
    "category": "vegetable",
    "type": "processed",
    "energy": 23,
    "protein": 1.2,
    "fat": 0.6,
    "carbs": 3.7
  },
  {
    "id": 82,
    "name": "Bayam merah, segar (Spinach, red, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 41,
    "protein": 2.2,
    "fat": 0.8,
    "carbs": 6.3
  },
  {
    "id": 83,
    "name": "Bayam, kukus",
    "category": "vegetable",
    "type": "processed",
    "energy": 30,
    "protein": 1.3,
    "fat": 0.7,
    "carbs": 5.8
  },
  {
    "id": 84,
    "name": "Bayam, segar (Spinach, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 16,
    "protein": 0.9,
    "fat": 0.4,
    "carbs": 2.9
  },
  {
    "id": 85,
    "name": "Bayau mi balu, masakan",
    "category": "egg",
    "type": "processed",
    "energy": 313,
    "protein": 6,
    "fat": 12.2,
    "carbs": 44.8
  },
  {
    "id": 86,
    "name": "Bebek (itik), daging, segar (Duck, meat, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 321,
    "protein": 16,
    "fat": 28.6,
    "carbs": 0
  },
  {
    "id": 87,
    "name": "Bebek alabio, daging, segar (Duck, alabio, meat, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 303,
    "protein": 11.3,
    "fat": 27,
    "carbs": 3.7
  },
  {
    "id": 88,
    "name": "Bebek, daging, goreng",
    "category": "meat",
    "type": "processed",
    "energy": 300,
    "protein": 24,
    "fat": 20.7,
    "carbs": 4.5
  },
  {
    "id": 89,
    "name": "Beberuk",
    "category": "vegetable",
    "type": "processed",
    "energy": 65,
    "protein": 1.1,
    "fat": 5.2,
    "carbs": 3.5
  },
  {
    "id": 90,
    "name": "Beef burger",
    "category": "meat",
    "type": "processed",
    "energy": 258,
    "protein": 10.6,
    "fat": 9.5,
    "carbs": 32.5
  },
  {
    "id": 91,
    "name": "Beef teriyaki, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 151,
    "protein": 8.6,
    "fat": 3.1,
    "carbs": 22.3
  },
  {
    "id": 92,
    "name": "Beef yakiniku, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 132,
    "protein": 9.8,
    "fat": 1.1,
    "carbs": 20.7
  },
  {
    "id": 93,
    "name": "Bekasam (Tiny shrimp fermented)",
    "category": "spice",
    "type": "processed",
    "energy": 116,
    "protein": 11.9,
    "fat": 4.9,
    "carbs": 6.1
  },
  {
    "id": 94,
    "name": "Bekasang (Fermented fish)",
    "category": "spice",
    "type": "processed",
    "energy": 78,
    "protein": 11.4,
    "fat": 2,
    "carbs": 3.6
  },
  {
    "id": 95,
    "name": "Bekicot, dendeng, mentah",
    "category": "seafood",
    "type": "processed",
    "energy": 441,
    "protein": 48.7,
    "fat": 20.3,
    "carbs": 15.8
  },
  {
    "id": 96,
    "name": "Belibis, daging, segar (Whistling duck, meat, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 131,
    "protein": 20.2,
    "fat": 4.3,
    "carbs": 2.8
  },
  {
    "id": 97,
    "name": "Belimbing, segar (Starfruit, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 36,
    "protein": 0.4,
    "fat": 0.4,
    "carbs": 8.8
  },
  {
    "id": 98,
    "name": "Belitung, talas, kukus",
    "category": "tuber",
    "type": "processed",
    "energy": 145,
    "protein": 1.2,
    "fat": 0.4,
    "carbs": 34.2
  },
  {
    "id": 99,
    "name": "Belitung, talas, segar (Taro, belitung, steamed)",
    "category": "tuber",
    "type": "raw",
    "energy": 145,
    "protein": 1.2,
    "fat": 0.4,
    "carbs": 34.2
  },
  {
    "id": 100,
    "name": "Belut, goreng (Asian swamp eel, fresh)",
    "category": "seafood",
    "type": "processed",
    "energy": 417,
    "protein": 25.9,
    "fat": 19.4,
    "carbs": 32
  },
  {
    "id": 101,
    "name": "Belut, segar (Asian swamp eel, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 70,
    "protein": 14.6,
    "fat": 0.8,
    "carbs": 1
  },
  {
    "id": 102,
    "name": "Belut,laut, segar (Eel, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 93,
    "protein": 12.8,
    "fat": 1.5,
    "carbs": 6.1
  },
  {
    "id": 103,
    "name": "Bengkuang, segar (Yam bean, fresh)",
    "category": "tuber",
    "type": "raw",
    "energy": 59,
    "protein": 1.4,
    "fat": 0.2,
    "carbs": 12.8
  },
  {
    "id": 104,
    "name": "Bentul (Komba),  talas, segar (Taro, bentul, fresh)",
    "category": "tuber",
    "type": "raw",
    "energy": 98,
    "protein": 1.6,
    "fat": 0.7,
    "carbs": 20.9
  },
  {
    "id": 105,
    "name": "Bentul, talas, kukus",
    "category": "tuber",
    "type": "processed",
    "energy": 71,
    "protein": 2.3,
    "fat": 0.3,
    "carbs": 15.4
  },
  {
    "id": 106,
    "name": "Beras Cerdas",
    "category": "tuber",
    "type": "processed",
    "energy": 350,
    "protein": 2.7,
    "fat": 1.1,
    "carbs": 82.3
  },
  {
    "id": 107,
    "name": "Beras ganyong",
    "category": "tuber",
    "type": "processed",
    "energy": 364,
    "protein": 3.4,
    "fat": 0.7,
    "carbs": 86.3
  },
  {
    "id": 108,
    "name": "Beras giling var pelita, mentah (Rice, raw)",
    "category": "cereal",
    "type": "raw",
    "energy": 369,
    "protein": 9.5,
    "fat": 1.4,
    "carbs": 77.1
  },
  {
    "id": 109,
    "name": "Beras giling var rojolele, mentah (Rice. Raw)",
    "category": "cereal",
    "type": "raw",
    "energy": 357,
    "protein": 8.4,
    "fat": 1.7,
    "carbs": 77.1
  },
  {
    "id": 110,
    "name": "Beras giling, mentah (Rice, raw)",
    "category": "cereal",
    "type": "raw",
    "energy": 357,
    "protein": 8.4,
    "fat": 1.7,
    "carbs": 77.1
  },
  {
    "id": 111,
    "name": "Beras hitam, mentah (Rice, raw)",
    "category": "cereal",
    "type": "raw",
    "energy": 351,
    "protein": 8,
    "fat": 1.3,
    "carbs": 76.9
  },
  {
    "id": 112,
    "name": "Beras jagung kuning, kering, mentah (Corn, yellow",
    "category": "cereal",
    "type": "raw",
    "energy": 358,
    "protein": 5.5,
    "fat": 0.1,
    "carbs": 82.7
  },
  {
    "id": 113,
    "name": "Beras jagung putih, kering, mentah (Corn, white, died, crushed, raw)",
    "category": "cereal",
    "type": "raw",
    "energy": 307,
    "protein": 4.8,
    "fat": 0.1,
    "carbs": 71.8
  },
  {
    "id": 114,
    "name": "Beras ketan hitam tumbuk, mentah (Glutinous rice, black, husk,raw)",
    "category": "cereal",
    "type": "raw",
    "energy": 360,
    "protein": 8,
    "fat": 2.3,
    "carbs": 74.5
  },
  {
    "id": 115,
    "name": "Beras ketan putih tumbuk, mentah (Glutinous rice, white, husk,raw)",
    "category": "cereal",
    "type": "raw",
    "energy": 361,
    "protein": 7.4,
    "fat": 0.8,
    "carbs": 78.4
  },
  {
    "id": 116,
    "name": "Beras ladang, mentah (Rice, raw)",
    "category": "cereal",
    "type": "raw",
    "energy": 376,
    "protein": 7.5,
    "fat": 3.8,
    "carbs": 78
  },
  {
    "id": 117,
    "name": "Beras menir, mentah (Rice, crushed, raw)",
    "category": "cereal",
    "type": "raw",
    "energy": 362,
    "protein": 7.7,
    "fat": 4.4,
    "carbs": 73
  },
  {
    "id": 118,
    "name": "Beras parboiled (Rice, parboiled)",
    "category": "cereal",
    "type": "raw",
    "energy": 353,
    "protein": 6.8,
    "fat": 0.6,
    "carbs": 80
  },
  {
    "id": 119,
    "name": "Beras Siger",
    "category": "tuber",
    "type": "processed",
    "energy": 344,
    "protein": 1.1,
    "fat": 0.2,
    "carbs": 28.3
  },
  {
    "id": 120,
    "name": "Beras tumbuk merah, mentah (Rice, brown with husk, raw)",
    "category": "cereal",
    "type": "raw",
    "energy": 352,
    "protein": 7.3,
    "fat": 0.9,
    "carbs": 76.2
  },
  {
    "id": 121,
    "name": "Beras tumbuk, mentah (Rice with husk, raw)",
    "category": "cereal",
    "type": "raw",
    "energy": 354,
    "protein": 7.8,
    "fat": 0.4,
    "carbs": 79.9
  },
  {
    "id": 122,
    "name": "Betok wadi, masakan (Climbing gouramy)",
    "category": "seafood",
    "type": "processed",
    "energy": 145,
    "protein": 16.3,
    "fat": 7,
    "carbs": 4.1
  },
  {
    "id": 123,
    "name": "Bihun goreng instan",
    "category": "cereal",
    "type": "processed",
    "energy": 381,
    "protein": 6.1,
    "fat": 3.9,
    "carbs": 80.3
  },
  {
    "id": 124,
    "name": "Bihun Jagung, mentah",
    "category": "cereal",
    "type": "processed",
    "energy": 354,
    "protein": 0.5,
    "fat": 0.3,
    "carbs": 87.4
  },
  {
    "id": 125,
    "name": "Bihun, mentah",
    "category": "cereal",
    "type": "processed",
    "energy": 348,
    "protein": 4.7,
    "fat": 0.1,
    "carbs": 82.1
  },
  {
    "id": 126,
    "name": "Biji nangka/Biji salak",
    "category": "tuber",
    "type": "processed",
    "energy": 262,
    "protein": 2.3,
    "fat": 5.4,
    "carbs": 51.1
  },
  {
    "id": 127,
    "name": "Bika ambon",
    "category": "cereal",
    "type": "processed",
    "energy": 199,
    "protein": 2.1,
    "fat": 1.5,
    "carbs": 44.4
  },
  {
    "id": 128,
    "name": "Bingka",
    "category": "cereal",
    "type": "processed",
    "energy": 273,
    "protein": 5.3,
    "fat": 10.6,
    "carbs": 39.1
  },
  {
    "id": 129,
    "name": "Biskuit",
    "category": "cereal",
    "type": "processed",
    "energy": 458,
    "protein": 6.9,
    "fat": 14.4,
    "carbs": 75.1
  },
  {
    "id": 130,
    "name": "Bit, segar (Beet, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 41,
    "protein": 1.6,
    "fat": 0.1,
    "carbs": 9.6
  },
  {
    "id": 131,
    "name": "Biwah, segar (Loquat, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 51,
    "protein": 0.3,
    "fat": 0.1,
    "carbs": 12.1
  },
  {
    "id": 132,
    "name": "Bobengka",
    "category": "cereal",
    "type": "processed",
    "energy": 225,
    "protein": 5.3,
    "fat": 2.6,
    "carbs": 45.2
  },
  {
    "id": 133,
    "name": "Bolu peca",
    "category": "cereal",
    "type": "processed",
    "energy": 197,
    "protein": 3.3,
    "fat": 4.6,
    "carbs": 35.6
  },
  {
    "id": 134,
    "name": "Boros kunci, segar (Rhizomes / Kaemper / Chinesedey)",
    "category": "spice",
    "type": "raw",
    "energy": 40,
    "protein": 1,
    "fat": 0.8,
    "carbs": 7.2
  },
  {
    "id": 135,
    "name": "Boros laja (lengkuas), segar (Rhizomes / Galanga)",
    "category": "spice",
    "type": "raw",
    "energy": 26,
    "protein": 1,
    "fat": 0.3,
    "carbs": 4.7
  },
  {
    "id": 136,
    "name": "Botok lamtoro",
    "category": "vegetable",
    "type": "processed",
    "energy": 186,
    "protein": 11.7,
    "fat": 9.7,
    "carbs": 13
  },
  {
    "id": 137,
    "name": "Bou ninahu ndamate, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 79,
    "protein": 6.3,
    "fat": 1,
    "carbs": 1.1
  },
  {
    "id": 138,
    "name": "Bouiki ninahu nggaluku, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 94,
    "protein": 7.8,
    "fat": 2.2,
    "carbs": 10.8
  },
  {
    "id": 139,
    "name": "Brem",
    "category": "cereal",
    "type": "processed",
    "energy": 249,
    "protein": 3.4,
    "fat": 0.4,
    "carbs": 58
  },
  {
    "id": 140,
    "name": "Brongkos",
    "category": "meat",
    "type": "processed",
    "energy": 141,
    "protein": 15.3,
    "fat": 3.3,
    "carbs": 12.6
  },
  {
    "id": 141,
    "name": "Buah atung, segar",
    "category": "fruit",
    "type": "raw",
    "energy": 23,
    "protein": 0.8,
    "fat": 0.2,
    "carbs": 5.2
  },
  {
    "id": 142,
    "name": "Buah kelenting, segar",
    "category": "fruit",
    "type": "raw",
    "energy": 110,
    "protein": 1.4,
    "fat": 2.1,
    "carbs": 21.4
  },
  {
    "id": 143,
    "name": "Buah kelor (West Indian bean, fruit)",
    "category": "vegetable",
    "type": "raw",
    "energy": 38,
    "protein": 1.5,
    "fat": 0.2,
    "carbs": 7.5
  },
  {
    "id": 144,
    "name": "Buah kom, segar",
    "category": "fruit",
    "type": "raw",
    "energy": 264,
    "protein": 4,
    "fat": 1.1,
    "carbs": 59.6
  },
  {
    "id": 145,
    "name": "Buah mentega (Bisbul), segar (Persimmons, japanese, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 39,
    "protein": 0.7,
    "fat": 0.2,
    "carbs": 9.7
  },
  {
    "id": 146,
    "name": "Buah merah (Red fruit)",
    "category": "vegetable",
    "type": "raw",
    "energy": 87,
    "protein": 2.6,
    "fat": 2.7,
    "carbs": 13.1
  },
  {
    "id": 147,
    "name": "Buah Naga Merah, segar",
    "category": "fruit",
    "type": "raw",
    "energy": 71,
    "protein": 1.7,
    "fat": 3.1,
    "carbs": 9.1
  },
  {
    "id": 148,
    "name": "Buah Naga Putih, segar",
    "category": "fruit",
    "type": "raw",
    "energy": 56,
    "protein": 0.8,
    "fat": 1,
    "carbs": 10.9
  },
  {
    "id": 149,
    "name": "Buah negri, segar (Passion-fruit (granadilla), fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 55,
    "protein": 1.2,
    "fat": 0.1,
    "carbs": 12.2
  },
  {
    "id": 150,
    "name": "Buah nona, segar (Sugarapple, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 101,
    "protein": 1.7,
    "fat": 0.6,
    "carbs": 25.2
  },
  {
    "id": 151,
    "name": "Buah rotan, segar",
    "category": "fruit",
    "type": "raw",
    "energy": 78,
    "protein": 0.6,
    "fat": 0.3,
    "carbs": 18.2
  },
  {
    "id": 152,
    "name": "Buah rukam, segar (Rukam, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 113,
    "protein": 0.8,
    "fat": 0.3,
    "carbs": 26.8
  },
  {
    "id": 153,
    "name": "Buah ruruhi, segar",
    "category": "fruit",
    "type": "raw",
    "energy": 29,
    "protein": 2.1,
    "fat": 0.7,
    "carbs": 3.6
  },
  {
    "id": 154,
    "name": "Buah tuppa, segar",
    "category": "fruit",
    "type": "raw",
    "energy": 67,
    "protein": 0.4,
    "fat": 0.2,
    "carbs": 15.9
  },
  {
    "id": 155,
    "name": "Buaya, daging, dendeng, mentah",
    "category": "meat",
    "type": "processed",
    "energy": 365,
    "protein": 49.6,
    "fat": 4.8,
    "carbs": 30.8
  },
  {
    "id": 156,
    "name": "Bubur sagu",
    "category": "tuber",
    "type": "processed",
    "energy": 167,
    "protein": 0.2,
    "fat": 4,
    "carbs": 33
  },
  {
    "id": 157,
    "name": "Bubur tinotuan (Manado)",
    "category": "cereal",
    "type": "processed",
    "energy": 156,
    "protein": 2.3,
    "fat": 0.2,
    "carbs": 15.6
  },
  {
    "id": 158,
    "name": "Bulgogi, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 72,
    "protein": 11.4,
    "fat": 4.9,
    "carbs": 1.4
  },
  {
    "id": 159,
    "name": "Buncis, rebus",
    "category": "vegetable",
    "type": "processed",
    "energy": 30,
    "protein": 2.2,
    "fat": 0.2,
    "carbs": 6.4
  },
  {
    "id": 160,
    "name": "Buncis, segar (Green bean, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 34,
    "protein": 2.4,
    "fat": 0.3,
    "carbs": 7.2
  },
  {
    "id": 161,
    "name": "Bunga pepaya, segar (Papaya, flower, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 45,
    "protein": 2.6,
    "fat": 0.3,
    "carbs": 8.1
  },
  {
    "id": 162,
    "name": "Bunga turi, segar (Hummingbird tree)",
    "category": "vegetable",
    "type": "raw",
    "energy": 42,
    "protein": 2,
    "fat": 1.1,
    "carbs": 6.1
  },
  {
    "id": 163,
    "name": "Bungkil biji karet",
    "category": "grain",
    "type": "processed",
    "energy": 333,
    "protein": 29.3,
    "fat": 3.3,
    "carbs": 50
  },
  {
    "id": 164,
    "name": "Bungkil kacang tanah",
    "category": "grain",
    "type": "processed",
    "energy": 336,
    "protein": 37.4,
    "fat": 13,
    "carbs": 30.5
  },
  {
    "id": 165,
    "name": "Bungkil kelapa",
    "category": "grain",
    "type": "processed",
    "energy": 368,
    "protein": 23,
    "fat": 15,
    "carbs": 40
  },
  {
    "id": 166,
    "name": "Buntil daun talas",
    "category": "vegetable",
    "type": "processed",
    "energy": 141,
    "protein": 4.4,
    "fat": 10.2,
    "carbs": 8
  },
  {
    "id": 167,
    "name": "Burung, sarang, segar",
    "category": "meat",
    "type": "raw",
    "energy": 281,
    "protein": 37.5,
    "fat": 0.3,
    "carbs": 32.1
  },
  {
    "id": 168,
    "name": "Cabai gembor merah, segar (Chili papper)",
    "category": "spice",
    "type": "raw",
    "energy": 38,
    "protein": 1.6,
    "fat": 0.8,
    "carbs": 6.3
  },
  {
    "id": 169,
    "name": "Cabai hijau, segar (Chili papper)",
    "category": "spice",
    "type": "raw",
    "energy": 26,
    "protein": 0.7,
    "fat": 0.3,
    "carbs": 5.2
  },
  {
    "id": 170,
    "name": "Cabai merah, kering (Chili papper)",
    "category": "spice",
    "type": "raw",
    "energy": 367,
    "protein": 15.9,
    "fat": 6.2,
    "carbs": 61.8
  },
  {
    "id": 171,
    "name": "Cabai merah, segar (Chili papper)",
    "category": "spice",
    "type": "raw",
    "energy": 36,
    "protein": 1,
    "fat": 0.3,
    "carbs": 7.3
  },
  {
    "id": 172,
    "name": "Cabai rawit, segar (Chili papper)",
    "category": "spice",
    "type": "raw",
    "energy": 120,
    "protein": 4.7,
    "fat": 2.4,
    "carbs": 19.9
  },
  {
    "id": 173,
    "name": "Caisin, segar (Caisin, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 20,
    "protein": 1.7,
    "fat": 0.4,
    "carbs": 3.4
  },
  {
    "id": 174,
    "name": "Cakalang asar (asap)",
    "category": "seafood",
    "type": "processed",
    "energy": 155,
    "protein": 20.1,
    "fat": 3.8,
    "carbs": 10.2
  },
  {
    "id": 175,
    "name": "Cake tape",
    "category": "cereal",
    "type": "processed",
    "energy": 323,
    "protein": 4.9,
    "fat": 11.5,
    "carbs": 50.1
  },
  {
    "id": 176,
    "name": "Cammetutu",
    "category": "vegetable",
    "type": "processed",
    "energy": 102,
    "protein": 3.2,
    "fat": 6,
    "carbs": 8.7
  },
  {
    "id": 177,
    "name": "Cangkuning ",
    "category": "cereal",
    "type": "processed",
    "energy": 204,
    "protein": 2.8,
    "fat": 7.5,
    "carbs": 31.4
  },
  {
    "id": 178,
    "name": "Cantel, mentah (Sorghum, raw)",
    "category": "cereal",
    "type": "raw",
    "energy": 366,
    "protein": 11,
    "fat": 3.3,
    "carbs": 73
  },
  {
    "id": 179,
    "name": "Cap cai, sayur",
    "category": "vegetable",
    "type": "processed",
    "energy": 97,
    "protein": 5.8,
    "fat": 6.3,
    "carbs": 4.2
  },
  {
    "id": 180,
    "name": "Carica papaya, segar (Papaya)",
    "category": "fruit",
    "type": "raw",
    "energy": 24,
    "protein": 1.9,
    "fat": 0.2,
    "carbs": 3.7
  },
  {
    "id": 181,
    "name": "Cassavastick",
    "category": "tuber",
    "type": "processed",
    "energy": 460,
    "protein": 0.8,
    "fat": 18.7,
    "carbs": 17.2
  },
  {
    "id": 182,
    "name": "Cempedak, segar (Chempedak)",
    "category": "fruit",
    "type": "raw",
    "energy": 116,
    "protein": 3,
    "fat": 0.4,
    "carbs": 28.6
  },
  {
    "id": 183,
    "name": "Cengkeh, kering (Cloves, dried)",
    "category": "spice",
    "type": "raw",
    "energy": 330,
    "protein": 5.2,
    "fat": 8.9,
    "carbs": 57.4
  },
  {
    "id": 184,
    "name": "Ceriping getuk singkong",
    "category": "tuber",
    "type": "processed",
    "energy": 462,
    "protein": 1.2,
    "fat": 20.7,
    "carbs": 67.7
  },
  {
    "id": 185,
    "name": "Chicken teriyaki, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 168,
    "protein": 13,
    "fat": 9.6,
    "carbs": 7.5
  },
  {
    "id": 186,
    "name": "Chikiniku, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 143,
    "protein": 9.8,
    "fat": 1.4,
    "carbs": 22.8
  },
  {
    "id": 187,
    "name": "Coklat bubuk (Cacao, powder)",
    "category": "pastry",
    "type": "processed",
    "energy": 311,
    "protein": 8,
    "fat": 4,
    "carbs": 48.9
  },
  {
    "id": 188,
    "name": "Coklat manis, batang (Chocolate, bar)",
    "category": "pastry",
    "type": "processed",
    "energy": 527,
    "protein": 2,
    "fat": 29.8,
    "carbs": 62.7
  },
  {
    "id": 189,
    "name": "Coklat pahit,batang (Chocolate,dark, bar)",
    "category": "pastry",
    "type": "processed",
    "energy": 615,
    "protein": 5.5,
    "fat": 42.6,
    "carbs": 29.2
  },
  {
    "id": 190,
    "name": "Coklat susu, batang (Chocolate, dairy milk, bar)",
    "category": "pastry",
    "type": "processed",
    "energy": 565,
    "protein": 9,
    "fat": 35,
    "carbs": 53.6
  },
  {
    "id": 191,
    "name": "Coto mangkasara, kuda, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 96,
    "protein": 6.8,
    "fat": 5.9,
    "carbs": 3.8
  },
  {
    "id": 192,
    "name": "Coto mangkasara, sapi, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 84,
    "protein": 6,
    "fat": 6,
    "carbs": 1.4
  },
  {
    "id": 193,
    "name": "Cucuru bayau, masakan",
    "category": "egg",
    "type": "processed",
    "energy": 349,
    "protein": 6.8,
    "fat": 18.7,
    "carbs": 38.3
  },
  {
    "id": 194,
    "name": "Cuka (vinegar)",
    "category": "spice",
    "type": "processed",
    "energy": 21,
    "protein": 0.1,
    "fat": 0.1,
    "carbs": 5
  },
  {
    "id": 195,
    "name": "Cumi-cumi, goreng (Squid, fried)",
    "category": "seafood",
    "type": "processed",
    "energy": 265,
    "protein": 40.6,
    "fat": 10.1,
    "carbs": 0
  },
  {
    "id": 196,
    "name": "Cumi-cumi, segar (Squid, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 75,
    "protein": 16.1,
    "fat": 0.7,
    "carbs": 0.1
  },
  {
    "id": 197,
    "name": "Daun bangun-bangun, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 27,
    "protein": 1.3,
    "fat": 0.6,
    "carbs": 4
  },
  {
    "id": 198,
    "name": "Daun bawang  merah, segar (Shallot, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 41,
    "protein": 2,
    "fat": 0.3,
    "carbs": 7.8
  },
  {
    "id": 199,
    "name": "Daun bebuas, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 41,
    "protein": 2.7,
    "fat": 1,
    "carbs": 7.3
  },
  {
    "id": 200,
    "name": "Daun belem, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 50,
    "protein": 4.4,
    "fat": 1.4,
    "carbs": 7.8
  },
  {
    "id": 201,
    "name": "Daun bluntas, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 44,
    "protein": 1.8,
    "fat": 0.5,
    "carbs": 9.4
  },
  {
    "id": 202,
    "name": "Daun gandaria, segar (Gandaria, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 63,
    "protein": 3.1,
    "fat": 0.3,
    "carbs": 14
  },
  {
    "id": 203,
    "name": "Daun gedi besar, segar (Aibika, sunset hibiscus, big, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 58,
    "protein": 2.9,
    "fat": 0.7,
    "carbs": 10
  },
  {
    "id": 204,
    "name": "Daun gedi kecil, segar (Aibika, sunset hibiscus, small, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 61,
    "protein": 3.2,
    "fat": 0.7,
    "carbs": 10.4
  },
  {
    "id": 205,
    "name": "Daun gelang, segar (Purslane, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 30,
    "protein": 1.3,
    "fat": 0.7,
    "carbs": 5.8
  },
  {
    "id": 206,
    "name": "Daun gunda bali, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 50,
    "protein": 4.6,
    "fat": 0.9,
    "carbs": 7
  },
  {
    "id": 207,
    "name": "Daun gunda serang, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 62,
    "protein": 4.2,
    "fat": 0.9,
    "carbs": 9.2
  },
  {
    "id": 208,
    "name": "Daun jambu mete muda, segar (Cashew Leaf, young, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 78,
    "protein": 4.6,
    "fat": 0.5,
    "carbs": 16.2
  },
  {
    "id": 209,
    "name": "Daun jampang, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 34,
    "protein": 3.8,
    "fat": 0.5,
    "carbs": 5.3
  },
  {
    "id": 210,
    "name": "Daun jawaw seluang, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 93,
    "protein": 5,
    "fat": 1.3,
    "carbs": 15.3
  },
  {
    "id": 211,
    "name": "Daun jonghe, segar (Sow thistle, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 27,
    "protein": 2.1,
    "fat": 0.7,
    "carbs": 4.4
  },
  {
    "id": 212,
    "name": "Daun kacang ma, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 36,
    "protein": 2.9,
    "fat": 0.6,
    "carbs": 6.8
  },
  {
    "id": 213,
    "name": "Daun kacang panjang, kukus",
    "category": "vegetable",
    "type": "processed",
    "energy": 40,
    "protein": 3.7,
    "fat": 0.3,
    "carbs": 8
  },
  {
    "id": 214,
    "name": "Daun kacang panjang, segar (Yard-long bean, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 30,
    "protein": 3.1,
    "fat": 0.3,
    "carbs": 5.8
  },
  {
    "id": 215,
    "name": "Daun kasbi/singkong karet, segar (Ceara rubber tree,fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 92,
    "protein": 4,
    "fat": 3.6,
    "carbs": 10.9
  },
  {
    "id": 216,
    "name": "Daun katuk, rebus",
    "category": "vegetable",
    "type": "processed",
    "energy": 53,
    "protein": 5.3,
    "fat": 0.9,
    "carbs": 9.1
  },
  {
    "id": 217,
    "name": "Daun katuk, segar (Star goose berry, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 59,
    "protein": 6.4,
    "fat": 1,
    "carbs": 9.9
  },
  {
    "id": 218,
    "name": "Daun kecipir, segar (Winged bean, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 52,
    "protein": 5,
    "fat": 0.5,
    "carbs": 8.5
  },
  {
    "id": 219,
    "name": "Daun kedondong, segar (Ambarella, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 59,
    "protein": 3.5,
    "fat": 0.3,
    "carbs": 13.4
  },
  {
    "id": 220,
    "name": "Daun kelor, rebus",
    "category": "vegetable",
    "type": "processed",
    "energy": 61,
    "protein": 6.1,
    "fat": 0.9,
    "carbs": 10
  },
  {
    "id": 221,
    "name": "Daun kelor, segar (Drumstick tree, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 92,
    "protein": 5.1,
    "fat": 1.6,
    "carbs": 14.3
  },
  {
    "id": 222,
    "name": "Daun kemang, segar (Kemang, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 43,
    "protein": 5.5,
    "fat": 0.3,
    "carbs": 7.5
  },
  {
    "id": 223,
    "name": "Daun kenikir, segar (Cosmos, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 45,
    "protein": 3.7,
    "fat": 0.5,
    "carbs": 6.6
  },
  {
    "id": 224,
    "name": "Daun kesum, segar (Garlic, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 48,
    "protein": 4.5,
    "fat": 0.8,
    "carbs": 9.1
  },
  {
    "id": 225,
    "name": "Daun kol sawi, segar (Indian mustard, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 22,
    "protein": 2.1,
    "fat": 0.5,
    "carbs": 3.6
  },
  {
    "id": 226,
    "name": "Daun koro, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 23,
    "protein": 3,
    "fat": 0.3,
    "carbs": 3.7
  },
  {
    "id": 227,
    "name": "Daun kubis, segar (Cabbage, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 51,
    "protein": 2.5,
    "fat": 1.1,
    "carbs": 8
  },
  {
    "id": 228,
    "name": "Daun kumak, segar (hyacinthbean, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 14,
    "protein": 1.3,
    "fat": 0.3,
    "carbs": 2.3
  },
  {
    "id": 229,
    "name": "Daun labu siam, segar (Chayote, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 34,
    "protein": 4,
    "fat": 0.4,
    "carbs": 4.7
  },
  {
    "id": 230,
    "name": "Daun labu waluh/kuning, segar (Pumkin, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 34,
    "protein": 3.6,
    "fat": 0.6,
    "carbs": 4.5
  },
  {
    "id": 231,
    "name": "Daun lamtoro, segar (Leucaena, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 87,
    "protein": 8.3,
    "fat": 1.8,
    "carbs": 14.4
  },
  {
    "id": 232,
    "name": "Daun leilem, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 76,
    "protein": 2.8,
    "fat": 0.2,
    "carbs": 15.8
  },
  {
    "id": 233,
    "name": "Daun leunca, segar (Glossy nightshde, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 49,
    "protein": 4.7,
    "fat": 0.5,
    "carbs": 8.1
  },
  {
    "id": 234,
    "name": "Daun lobak, segar (Radish, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 30,
    "protein": 2.3,
    "fat": 0.4,
    "carbs": 5.8
  },
  {
    "id": 235,
    "name": "Daun lompong talas, segar (Taro, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 44,
    "protein": 3,
    "fat": 0.8,
    "carbs": 7.4
  },
  {
    "id": 236,
    "name": "Daun mangkokan, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 57,
    "protein": 3.7,
    "fat": 0.3,
    "carbs": 11.8
  },
  {
    "id": 237,
    "name": "Daun matel ambon, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 71,
    "protein": 6.8,
    "fat": 1.6,
    "carbs": 11.5
  },
  {
    "id": 238,
    "name": "Daun melinjo, segar (Spanish joint fir, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 104,
    "protein": 5,
    "fat": 1.3,
    "carbs": 21.3
  },
  {
    "id": 239,
    "name": "Daun mengkudu, kukus",
    "category": "vegetable",
    "type": "processed",
    "energy": 63,
    "protein": 3.8,
    "fat": 1.5,
    "carbs": 11.5
  },
  {
    "id": 240,
    "name": "Daun mengkudu, segar (Noni, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 65,
    "protein": 4,
    "fat": 1.7,
    "carbs": 11.4
  },
  {
    "id": 241,
    "name": "Daun ndusuk, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 166,
    "protein": 1.7,
    "fat": 0.5,
    "carbs": 38.8
  },
  {
    "id": 242,
    "name": "Daun oyong, segar (Angled loofah, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 22,
    "protein": 1,
    "fat": 0.1,
    "carbs": 5.3
  },
  {
    "id": 243,
    "name": "Daun pakis longgiho, segar (Fern,longiho, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 54,
    "protein": 2.2,
    "fat": 3.6,
    "carbs": 3.1
  },
  {
    "id": 244,
    "name": "Daun pakis wambateu, segar (Fern, wambateu, leaf fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 53,
    "protein": 3.4,
    "fat": 1.2,
    "carbs": 7.2
  },
  {
    "id": 245,
    "name": "Daun pakis, segar (Fern, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 39,
    "protein": 4.5,
    "fat": 0.4,
    "carbs": 6.9
  },
  {
    "id": 246,
    "name": "Daun paku, segar (Fern, paku, leaf fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 29,
    "protein": 3.4,
    "fat": 0.1,
    "carbs": 6.5
  },
  {
    "id": 247,
    "name": "Daun pangi,segar (Kepayang (Malay), leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 104,
    "protein": 3.9,
    "fat": 0.6,
    "carbs": 17.9
  },
  {
    "id": 248,
    "name": "Daun pare, segar (Bitter guard, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 49,
    "protein": 2.7,
    "fat": 1,
    "carbs": 8.4
  },
  {
    "id": 249,
    "name": "Daun pepaya, segar (Papaya, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 87,
    "protein": 8,
    "fat": 2,
    "carbs": 11.9
  },
  {
    "id": 250,
    "name": "Daun pohpohan, segar (Pilea, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 37,
    "protein": 2.5,
    "fat": 0.8,
    "carbs": 6.9
  },
  {
    "id": 251,
    "name": "Daun salam,  bubuk (Bay-leaf)",
    "category": "spice",
    "type": "raw",
    "energy": 301,
    "protein": 14.2,
    "fat": 10.9,
    "carbs": 49
  },
  {
    "id": 252,
    "name": "Daun selasih, segar (Hoary basil, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 62,
    "protein": 4,
    "fat": 0.5,
    "carbs": 10.5
  },
  {
    "id": 253,
    "name": "Daun semanggi, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 45,
    "protein": 4.4,
    "fat": 0.5,
    "carbs": 8.5
  },
  {
    "id": 254,
    "name": "Daun simpur, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 53,
    "protein": 3.2,
    "fat": 2.5,
    "carbs": 7.6
  },
  {
    "id": 255,
    "name": "Daun singkil, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 68,
    "protein": 2,
    "fat": 1,
    "carbs": 15.2
  },
  {
    "id": 256,
    "name": "Daun singkong ambon, segar (Casava, ambon, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 144,
    "protein": 12.7,
    "fat": 1.2,
    "carbs": 25.2
  },
  {
    "id": 257,
    "name": "Daun singkong ampenan, segar (Casava, ampenan, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 50,
    "protein": 6.2,
    "fat": 1.1,
    "carbs": 7.1
  },
  {
    "id": 258,
    "name": "Daun singkong kopang, segar (Casava, kopang, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 74,
    "protein": 6.3,
    "fat": 0.7,
    "carbs": 10.7
  },
  {
    "id": 259,
    "name": "Daun singkong, rebus",
    "category": "vegetable",
    "type": "processed",
    "energy": 31,
    "protein": 3.7,
    "fat": 0.6,
    "carbs": 4.8
  },
  {
    "id": 260,
    "name": "Daun singkong, segar (Casava, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 50,
    "protein": 6.2,
    "fat": 1.1,
    "carbs": 7.1
  },
  {
    "id": 261,
    "name": "Daun sintrong, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 36,
    "protein": 2.6,
    "fat": 0.9,
    "carbs": 6.1
  },
  {
    "id": 262,
    "name": "Daun talas, rebus",
    "category": "vegetable",
    "type": "processed",
    "energy": 27,
    "protein": 1.3,
    "fat": 0.2,
    "carbs": 5.9
  },
  {
    "id": 263,
    "name": "Daun talas, segar (Taro, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 59,
    "protein": 3,
    "fat": 0.4,
    "carbs": 13.5
  },
  {
    "id": 264,
    "name": "Daun tespong, segar (Water dropwort, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 70,
    "protein": 2.9,
    "fat": 0.3,
    "carbs": 13.9
  },
  {
    "id": 265,
    "name": "Daun ubi kuning, segar (Sweet potato, yeallowish, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 62,
    "protein": 3.7,
    "fat": 0.3,
    "carbs": 11.1
  },
  {
    "id": 266,
    "name": "Daun ubi merah, kukus",
    "category": "vegetable",
    "type": "processed",
    "energy": 56,
    "protein": 3.1,
    "fat": 0.3,
    "carbs": 13
  },
  {
    "id": 267,
    "name": "Daun ubi merah, segar (Sweet potato, redish, leaf, freah)",
    "category": "vegetable",
    "type": "raw",
    "energy": 48,
    "protein": 3,
    "fat": 0.3,
    "carbs": 10.8
  },
  {
    "id": 268,
    "name": "Daun ubi putih, segar (Sweet potato, whitish, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 46,
    "protein": 2.8,
    "fat": 0.2,
    "carbs": 8.2
  },
  {
    "id": 269,
    "name": "Daun ubi tinta, segar (Sweet potato, purpleish, leaf, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 55,
    "protein": 1.7,
    "fat": 0.1,
    "carbs": 11.9
  },
  {
    "id": 270,
    "name": "Dendeng belut, goreng, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 382,
    "protein": 55.7,
    "fat": 14.1,
    "carbs": 8
  },
  {
    "id": 271,
    "name": "Dendeng mujahir, goreng, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 598,
    "protein": 74.3,
    "fat": 26.9,
    "carbs": 9.2
  },
  {
    "id": 272,
    "name": "Djibokum, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 248,
    "protein": 10,
    "fat": 2.3,
    "carbs": 40.9
  },
  {
    "id": 273,
    "name": "Dodol bali",
    "category": "cereal",
    "type": "processed",
    "energy": 298,
    "protein": 3.7,
    "fat": 2.1,
    "carbs": 65.9
  },
  {
    "id": 274,
    "name": "Dodol banjarmasin",
    "category": "grain",
    "type": "processed",
    "energy": 368,
    "protein": 2.6,
    "fat": 8.6,
    "carbs": 70
  },
  {
    "id": 275,
    "name": "Dodol galamai",
    "category": "cereal",
    "type": "processed",
    "energy": 348,
    "protein": 0.4,
    "fat": 3.8,
    "carbs": 76.1
  },
  {
    "id": 276,
    "name": "Dodol kedondong",
    "category": "cereal",
    "type": "processed",
    "energy": 331,
    "protein": 1.9,
    "fat": 7.6,
    "carbs": 63.8
  },
  {
    "id": 277,
    "name": "Dodol manado",
    "category": "cereal",
    "type": "processed",
    "energy": 373,
    "protein": 4.3,
    "fat": 16.5,
    "carbs": 51.9
  },
  {
    "id": 278,
    "name": "Dodol nanas",
    "category": "fruit",
    "type": "processed",
    "energy": 338,
    "protein": 1.5,
    "fat": 1.2,
    "carbs": 80.3
  },
  {
    "id": 279,
    "name": "Domba, daging, gemuk, segar (Lamb, meat, high fat, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 317,
    "protein": 15.7,
    "fat": 27.7,
    "carbs": 0
  },
  {
    "id": 280,
    "name": "Domba, daging, kurus,  segar (Lamb, meat, low fat, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 202,
    "protein": 17.1,
    "fat": 14.8,
    "carbs": 0
  },
  {
    "id": 281,
    "name": "Domba, ginjal, segar (Kidney, lamb, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 100,
    "protein": 16.6,
    "fat": 3.3,
    "carbs": 1
  },
  {
    "id": 282,
    "name": "Duku, segar",
    "category": "fruit",
    "type": "raw",
    "energy": 63,
    "protein": 1,
    "fat": 0.2,
    "carbs": 16.1
  },
  {
    "id": 283,
    "name": "Durian, segar (Durian, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 134,
    "protein": 2.5,
    "fat": 3,
    "carbs": 28
  },
  {
    "id": 284,
    "name": "Duwet, segar (Jambolan, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 80,
    "protein": 0.5,
    "fat": 0.6,
    "carbs": 18.2
  },
  {
    "id": 285,
    "name": "Eceng, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 19,
    "protein": 1,
    "fat": 0.2,
    "carbs": 3.8
  },
  {
    "id": 286,
    "name": "Embacang, segar (Kuwini, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 98,
    "protein": 1.4,
    "fat": 0.2,
    "carbs": 25.4
  },
  {
    "id": 287,
    "name": "Empal (daging) Goreng, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 248,
    "protein": 36.2,
    "fat": 6.9,
    "carbs": 10.1
  },
  {
    "id": 288,
    "name": "Emping (kerupuk melinjo)",
    "category": "grain",
    "type": "processed",
    "energy": 345,
    "protein": 12,
    "fat": 1.5,
    "carbs": 71.5
  },
  {
    "id": 289,
    "name": "Emping beras",
    "category": "cereal",
    "type": "processed",
    "energy": 403,
    "protein": 10.6,
    "fat": 2.2,
    "carbs": 85.3
  },
  {
    "id": 290,
    "name": "Emping komak",
    "category": "grain",
    "type": "processed",
    "energy": 355,
    "protein": 17.8,
    "fat": 4.6,
    "carbs": 60.7
  },
  {
    "id": 291,
    "name": "Encung asam, segar (Tamarillo, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 122,
    "protein": 3.5,
    "fat": 4.5,
    "carbs": 17.5
  },
  {
    "id": 292,
    "name": "Enting-enting gepuk hello kity",
    "category": "grain",
    "type": "processed",
    "energy": 538,
    "protein": 13.6,
    "fat": 30.3,
    "carbs": 52.6
  },
  {
    "id": 293,
    "name": "Enting-enting gepuk kacang tanah",
    "category": "grain",
    "type": "processed",
    "energy": 524,
    "protein": 13.3,
    "fat": 29.2,
    "carbs": 52
  },
  {
    "id": 294,
    "name": "Enting-enting wijen",
    "category": "grain",
    "type": "processed",
    "energy": 565,
    "protein": 18.2,
    "fat": 38.4,
    "carbs": 36.8
  },
  {
    "id": 295,
    "name": "Erbis, segar (Passion-fruit (granadilla), fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 70,
    "protein": 0.6,
    "fat": 0,
    "carbs": 18.9
  },
  {
    "id": 296,
    "name": "Es krim",
    "category": "milk",
    "type": "processed",
    "energy": 210,
    "protein": 4,
    "fat": 12.5,
    "carbs": 20.6
  },
  {
    "id": 297,
    "name": "Fillet o-fish",
    "category": "seafood",
    "type": "processed",
    "energy": 270,
    "protein": 12.3,
    "fat": 15.9,
    "carbs": 19.3
  },
  {
    "id": 298,
    "name": "Gadeng/Gadung, kering (Asiatic bitter yam, fresh)",
    "category": "tuber",
    "type": "raw",
    "energy": 322,
    "protein": 2.4,
    "fat": 0.6,
    "carbs": 76.6
  },
  {
    "id": 299,
    "name": "Gado-gado",
    "category": "vegetable",
    "type": "processed",
    "energy": 137,
    "protein": 6.1,
    "fat": 3.2,
    "carbs": 21
  },
  {
    "id": 300,
    "name": "Gadung, ubi, kukus",
    "category": "tuber",
    "type": "processed",
    "energy": 88,
    "protein": 0.6,
    "fat": 0.3,
    "carbs": 20.9
  },
  {
    "id": 301,
    "name": "Gadung, ubi, segar (Asiatic bitter yam, fresh)",
    "category": "tuber",
    "type": "raw",
    "energy": 100,
    "protein": 0.9,
    "fat": 0.3,
    "carbs": 23.5
  },
  {
    "id": 302,
    "name": "Gambas (oyong), segar (Angled loofah, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 19,
    "protein": 0.8,
    "fat": 0.2,
    "carbs": 4.1
  },
  {
    "id": 303,
    "name": "Gandaria masak (Kundang)",
    "category": "fruit",
    "type": "raw",
    "energy": 68,
    "protein": 0.7,
    "fat": 0.1,
    "carbs": 18
  },
  {
    "id": 304,
    "name": "Ganyong, rebus",
    "category": "tuber",
    "type": "processed",
    "energy": 100,
    "protein": 0.8,
    "fat": 0.2,
    "carbs": 23.8
  },
  {
    "id": 305,
    "name": "Ganyong, segar (Canna, fresh)",
    "category": "tuber",
    "type": "raw",
    "energy": 77,
    "protein": 0.6,
    "fat": 0.2,
    "carbs": 18.4
  },
  {
    "id": 306,
    "name": "Gatep, segar (Chestnut, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 191,
    "protein": 4.5,
    "fat": 1.5,
    "carbs": 39.7
  },
  {
    "id": 307,
    "name": "Gatot",
    "category": "tuber",
    "type": "processed",
    "energy": 347,
    "protein": 1.3,
    "fat": 0.7,
    "carbs": 83.8
  },
  {
    "id": 308,
    "name": "Geblek",
    "category": "tuber",
    "type": "processed",
    "energy": 195,
    "protein": 0.4,
    "fat": 1.7,
    "carbs": 44.4
  },
  {
    "id": 309,
    "name": "Gembili, ubi, segar (Lesser yam, fresh)",
    "category": "tuber",
    "type": "raw",
    "energy": 131,
    "protein": 1.1,
    "fat": 0.2,
    "carbs": 31.3
  },
  {
    "id": 310,
    "name": "Gemblong",
    "category": "cereal",
    "type": "processed",
    "energy": 274,
    "protein": 1.7,
    "fat": 5.4,
    "carbs": 55.5
  },
  {
    "id": 311,
    "name": "Gendar goreng",
    "category": "cereal",
    "type": "processed",
    "energy": 407,
    "protein": 6.4,
    "fat": 28.2,
    "carbs": 32
  },
  {
    "id": 312,
    "name": "Genjer, segar (Sawah lettuce, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 35,
    "protein": 1.7,
    "fat": 0.2,
    "carbs": 7.7
  },
  {
    "id": 313,
    "name": "Geplak",
    "category": "grain",
    "type": "processed",
    "energy": 350,
    "protein": 1.4,
    "fat": 14.4,
    "carbs": 53.6
  },
  {
    "id": 314,
    "name": "Geplak jahe",
    "category": "grain",
    "type": "processed",
    "energy": 462,
    "protein": 3.1,
    "fat": 24.4,
    "carbs": 57.7
  },
  {
    "id": 315,
    "name": "Gete kuah asam, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 75,
    "protein": 8.2,
    "fat": 2,
    "carbs": 6
  },
  {
    "id": 316,
    "name": "Getuk goreng",
    "category": "tuber",
    "type": "processed",
    "energy": 360,
    "protein": 1.3,
    "fat": 6.4,
    "carbs": 74.3
  },
  {
    "id": 317,
    "name": "Getuk pisang",
    "category": "fruit",
    "type": "processed",
    "energy": 144,
    "protein": 1.1,
    "fat": 0.4,
    "carbs": 34.1
  },
  {
    "id": 318,
    "name": "Getuk singkong",
    "category": "tuber",
    "type": "processed",
    "energy": 204,
    "protein": 0.5,
    "fat": 1.4,
    "carbs": 47.4
  },
  {
    "id": 319,
    "name": "Gudeg, sayur",
    "category": "vegetable",
    "type": "processed",
    "energy": 160,
    "protein": 3.3,
    "fat": 9.2,
    "carbs": 16
  },
  {
    "id": 320,
    "name": "Gula aren (Sugar, palm)",
    "category": "pastry",
    "type": "processed",
    "energy": 368,
    "protein": 0,
    "fat": 0,
    "carbs": 92
  },
  {
    "id": 321,
    "name": "Gula kelapa",
    "category": "pastry",
    "type": "processed",
    "energy": 386,
    "protein": 3,
    "fat": 10,
    "carbs": 76
  },
  {
    "id": 322,
    "name": "Gula putih (Sugar cane)",
    "category": "pastry",
    "type": "processed",
    "energy": 394,
    "protein": 0,
    "fat": 0,
    "carbs": 94
  },
  {
    "id": 323,
    "name": "Gulai asam keueung, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 52,
    "protein": 10,
    "fat": 0.5,
    "carbs": 1.8
  },
  {
    "id": 324,
    "name": "Gulai ikan paya, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 148,
    "protein": 10,
    "fat": 9.8,
    "carbs": 5
  },
  {
    "id": 325,
    "name": "Gulai ikan, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 106,
    "protein": 16.5,
    "fat": 3.3,
    "carbs": 2.5
  },
  {
    "id": 326,
    "name": "Gulai kambing",
    "category": "meat",
    "type": "processed",
    "energy": 126,
    "protein": 4.2,
    "fat": 9.4,
    "carbs": 6.2
  },
  {
    "id": 327,
    "name": "Gulai keumamah, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 110,
    "protein": 5.9,
    "fat": 8.2,
    "carbs": 3.2
  },
  {
    "id": 328,
    "name": "Gulai pakis",
    "category": "vegetable",
    "type": "processed",
    "energy": 143,
    "protein": 4,
    "fat": 11.4,
    "carbs": 6
  },
  {
    "id": 329,
    "name": "Gulai pliek",
    "category": "vegetable",
    "type": "processed",
    "energy": 176,
    "protein": 7.3,
    "fat": 14.9,
    "carbs": 3.2
  },
  {
    "id": 330,
    "name": "Gulai tiram, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 132,
    "protein": 9,
    "fat": 7.2,
    "carbs": 7.8
  },
  {
    "id": 331,
    "name": "Gurame asem manis, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 192,
    "protein": 12.7,
    "fat": 10.1,
    "carbs": 12.7
  },
  {
    "id": 332,
    "name": "Gurandil",
    "category": "tuber",
    "type": "processed",
    "energy": 218,
    "protein": 0.5,
    "fat": 2.5,
    "carbs": 48.5
  },
  {
    "id": 333,
    "name": "Ham",
    "category": "meat",
    "type": "processed",
    "energy": 384,
    "protein": 16.9,
    "fat": 35,
    "carbs": 0.3
  },
  {
    "id": 334,
    "name": "Hangop",
    "category": "milk",
    "type": "processed",
    "energy": 65,
    "protein": 10,
    "fat": 1,
    "carbs": 3.5
  },
  {
    "id": 335,
    "name": "Hofa/Ubi hutan, segar",
    "category": "tuber",
    "type": "raw",
    "energy": 127,
    "protein": 1.2,
    "fat": 0.5,
    "carbs": 29.5
  },
  {
    "id": 336,
    "name": "Ikan asar merah, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 146,
    "protein": 17.7,
    "fat": 5.9,
    "carbs": 5.6
  },
  {
    "id": 337,
    "name": "Ikan asin, kering",
    "category": "seafood",
    "type": "processed",
    "energy": 193,
    "protein": 42,
    "fat": 1.5,
    "carbs": 0
  },
  {
    "id": 338,
    "name": "Ikan bader, segar (Silver barb, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 193,
    "protein": 19,
    "fat": 13,
    "carbs": 0
  },
  {
    "id": 339,
    "name": "Ikan balong, segar",
    "category": "seafood",
    "type": "raw",
    "energy": 107,
    "protein": 16.5,
    "fat": 3.9,
    "carbs": 1.5
  },
  {
    "id": 340,
    "name": "Ikan bambangan, segar (Humphead Snapper, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 112,
    "protein": 20,
    "fat": 1.3,
    "carbs": 3.7
  },
  {
    "id": 341,
    "name": "Ikan bandeng presto, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 296,
    "protein": 17.1,
    "fat": 20.3,
    "carbs": 11.3
  },
  {
    "id": 342,
    "name": "Ikan bandeng, segar (Milkfish, raw)",
    "category": "seafood",
    "type": "raw",
    "energy": 123,
    "protein": 20,
    "fat": 4.8,
    "carbs": 0
  },
  {
    "id": 343,
    "name": "Ikan banjar, segar",
    "category": "seafood",
    "type": "raw",
    "energy": 111,
    "protein": 19.4,
    "fat": 0.9,
    "carbs": 4.8
  },
  {
    "id": 344,
    "name": "Ikan baronang, segar (Golden-lined spinefoot, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 78,
    "protein": 14.5,
    "fat": 0.6,
    "carbs": 3.7
  },
  {
    "id": 345,
    "name": "Ikan batung, segar (Indonesian-Shortfin Eel)",
    "category": "seafood",
    "type": "raw",
    "energy": 115,
    "protein": 14.5,
    "fat": 4.6,
    "carbs": 4.2
  },
  {
    "id": 346,
    "name": "Ikan baung bakar (Asian river catfish, fresh)",
    "category": "seafood",
    "type": "processed",
    "energy": 144,
    "protein": 17.8,
    "fat": 5.8,
    "carbs": 5.2
  },
  {
    "id": 347,
    "name": "Ikan baung, segar (Asian river catfish, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 123,
    "protein": 15.1,
    "fat": 5.5,
    "carbs": 3.3
  },
  {
    "id": 348,
    "name": "Ikan bawal, segar (Silver Pomfret, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 91,
    "protein": 19,
    "fat": 1.7,
    "carbs": 0
  },
  {
    "id": 349,
    "name": "Ikan Belida bakar (Indonesian featherback, fresh)",
    "category": "seafood",
    "type": "processed",
    "energy": 128,
    "protein": 18,
    "fat": 3,
    "carbs": 7.2
  },
  {
    "id": 350,
    "name": "Ikan Belida, segar (Indonesian featherback, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 80,
    "protein": 14.7,
    "fat": 1.4,
    "carbs": 2.2
  },
  {
    "id": 351,
    "name": "Ikan beunteur, segar (Spotted Barb, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 109,
    "protein": 17,
    "fat": 4,
    "carbs": 0
  },
  {
    "id": 352,
    "name": "Ikan biawan, segar (Kissing goorami, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 90,
    "protein": 14.9,
    "fat": 2.5,
    "carbs": 2.1
  },
  {
    "id": 353,
    "name": "Ikan bili, segar (Minnows, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 88,
    "protein": 14.2,
    "fat": 0.7,
    "carbs": 6.2
  },
  {
    "id": 354,
    "name": "Ikan bubara, segar",
    "category": "seafood",
    "type": "raw",
    "energy": 100,
    "protein": 14.7,
    "fat": 2.4,
    "carbs": 4.9
  },
  {
    "id": 355,
    "name": "Ikan bulan-bulan, segar (Indo-Pacifik Tarpon, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 134,
    "protein": 25.5,
    "fat": 1.3,
    "carbs": 5
  },
  {
    "id": 356,
    "name": "Ikan cakalang asap, mentah (Skipjack tuna, fish,smoked, raw)",
    "category": "seafood",
    "type": "processed",
    "energy": 204,
    "protein": 34.2,
    "fat": 5.6,
    "carbs": 1.9
  },
  {
    "id": 357,
    "name": "Ikan cakalang asin, mentah (Skipjack tuna,fish, salted, raw)",
    "category": "seafood",
    "type": "processed",
    "energy": 198,
    "protein": 36.5,
    "fat": 2.2,
    "carbs": 5.5
  },
  {
    "id": 358,
    "name": "Ikan cakalang, hati, segar (Scipjack tuna, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 120,
    "protein": 11.3,
    "fat": 3.9,
    "carbs": 10
  },
  {
    "id": 359,
    "name": "Ikan cakalang, jantung, segar (Scipjack tuna, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 116,
    "protein": 11.2,
    "fat": 1.2,
    "carbs": 10.2
  },
  {
    "id": 360,
    "name": "Ikan cakalang, perut, segar (Scipjack tuna, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 86,
    "protein": 10.2,
    "fat": 1.1,
    "carbs": 8.7
  },
  {
    "id": 361,
    "name": "Ikan cakalang, segar (Scipjack tuna, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 107,
    "protein": 19.6,
    "fat": 0.7,
    "carbs": 5.5
  },
  {
    "id": 362,
    "name": "Ikan calo/ peda, mentah",
    "category": "seafood",
    "type": "processed",
    "energy": 81,
    "protein": 11.4,
    "fat": 1.9,
    "carbs": 3.8
  },
  {
    "id": 363,
    "name": "Ikan daun, segar (Leaffish, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 101,
    "protein": 11.5,
    "fat": 4.1,
    "carbs": 4.6
  },
  {
    "id": 364,
    "name": "Ikan ekor kuning, segar (Yellowtail, fish, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 108,
    "protein": 22.3,
    "fat": 1.2,
    "carbs": 2.1
  },
  {
    "id": 365,
    "name": "Ikan Gabus asap, mentah (Asian snakehead, fish, smoked)",
    "category": "seafood",
    "type": "processed",
    "energy": 261,
    "protein": 38.1,
    "fat": 2.3,
    "carbs": 21.9
  },
  {
    "id": 366,
    "name": "Ikan Gabus, kering (Asian snakehead, fish, dried)",
    "category": "seafood",
    "type": "processed",
    "energy": 268,
    "protein": 58,
    "fat": 4,
    "carbs": 0
  },
  {
    "id": 367,
    "name": "Ikan gabus, segar (Asian snakehead, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 80,
    "protein": 16.2,
    "fat": 0.5,
    "carbs": 2.6
  },
  {
    "id": 368,
    "name": "Ikan gete, goreng",
    "category": "seafood",
    "type": "processed",
    "energy": 267,
    "protein": 23.1,
    "fat": 19.4,
    "carbs": 0.2
  },
  {
    "id": 369,
    "name": "Ikan heu, segar",
    "category": "seafood",
    "type": "raw",
    "energy": 81,
    "protein": 10,
    "fat": 1.6,
    "carbs": 6.6
  },
  {
    "id": 370,
    "name": "Ikan hitam, segar (Black Sharkminnow, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 101,
    "protein": 10.3,
    "fat": 3.7,
    "carbs": 6.7
  },
  {
    "id": 371,
    "name": "Ikan hiu, kering (Shark, fish, dried)",
    "category": "seafood",
    "type": "processed",
    "energy": 298,
    "protein": 46.3,
    "fat": 3.6,
    "carbs": 20.2
  },
  {
    "id": 372,
    "name": "Ikan hiu, segar (Fish, shark, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 57,
    "protein": 10.7,
    "fat": 0.3,
    "carbs": 2.2
  },
  {
    "id": 373,
    "name": "Ikan kacangan, segar",
    "category": "seafood",
    "type": "raw",
    "energy": 77,
    "protein": 15.6,
    "fat": 0.9,
    "carbs": 1.6
  },
  {
    "id": 374,
    "name": "Ikan kakap, segar",
    "category": "seafood",
    "type": "raw",
    "energy": 92,
    "protein": 20,
    "fat": 0.7,
    "carbs": 0
  },
  {
    "id": 375,
    "name": "Ikan kakatua, segar",
    "category": "seafood",
    "type": "raw",
    "energy": 82,
    "protein": 11.4,
    "fat": 1.2,
    "carbs": 6.4
  },
  {
    "id": 376,
    "name": "Ikan kalaban, segar (Minnows, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 77,
    "protein": 16.4,
    "fat": 0.7,
    "carbs": 1.3
  },
  {
    "id": 377,
    "name": "Ikan kamera (kakap merah), segar",
    "category": "seafood",
    "type": "raw",
    "energy": 86,
    "protein": 19.7,
    "fat": 0.8,
    "carbs": 0
  },
  {
    "id": 378,
    "name": "Ikan kapar, segar (Malay Combtail, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 132,
    "protein": 17,
    "fat": 6.7,
    "carbs": 0.8
  },
  {
    "id": 379,
    "name": "Ikan katombo, asin (Pargy, fish, salted)",
    "category": "seafood",
    "type": "processed",
    "energy": 162,
    "protein": 31.7,
    "fat": 2.8,
    "carbs": 0.3
  },
  {
    "id": 380,
    "name": "Ikan kawalinya, segar (Indian mackerel, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 110,
    "protein": 12.6,
    "fat": 4.2,
    "carbs": 5.4
  },
  {
    "id": 381,
    "name": "Ikan kayu, kering",
    "category": "seafood",
    "type": "processed",
    "energy": 302,
    "protein": 70.7,
    "fat": 1.9,
    "carbs": 0.4
  },
  {
    "id": 382,
    "name": "Ikan keru-keru, segar (Puffers, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 93,
    "protein": 16.5,
    "fat": 2.1,
    "carbs": 0.8
  },
  {
    "id": 383,
    "name": "Ikan kima, segar (Clam, shell, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 70,
    "protein": 10.8,
    "fat": 0.7,
    "carbs": 5.2
  },
  {
    "id": 384,
    "name": "Ikan Lais bakar",
    "category": "seafood",
    "type": "processed",
    "energy": 147,
    "protein": 17.5,
    "fat": 6.5,
    "carbs": 5.4
  },
  {
    "id": 385,
    "name": "Ikan lais, segar (Sheatfish, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 161,
    "protein": 11.9,
    "fat": 11.5,
    "carbs": 2.4
  },
  {
    "id": 386,
    "name": "Ikan layang, segar (Indian scad, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 109,
    "protein": 22,
    "fat": 1.7,
    "carbs": 0
  },
  {
    "id": 387,
    "name": "Ikan layur, segar (Hairtail, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 82,
    "protein": 18,
    "fat": 1,
    "carbs": 0.4
  },
  {
    "id": 388,
    "name": "Ikan lehoma, segar (Indian mackerel, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 90,
    "protein": 20.4,
    "fat": 0.9,
    "carbs": 0
  },
  {
    "id": 389,
    "name": "Ikan lemuru, segar (Bali sardinella, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 112,
    "protein": 20,
    "fat": 3,
    "carbs": 0
  },
  {
    "id": 390,
    "name": "Ikan lidah, segar (Flatfishes, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 104,
    "protein": 15.6,
    "fat": 3.2,
    "carbs": 2
  },
  {
    "id": 391,
    "name": "Ikan lomak asin, mentah",
    "category": "seafood",
    "type": "processed",
    "energy": 258,
    "protein": 40.3,
    "fat": 2.3,
    "carbs": 18.9
  },
  {
    "id": 392,
    "name": "Ikan malalugis, segar",
    "category": "seafood",
    "type": "raw",
    "energy": 99,
    "protein": 20.6,
    "fat": 1.4,
    "carbs": 0.9
  },
  {
    "id": 393,
    "name": "Ikan mamar merah, segar",
    "category": "seafood",
    "type": "raw",
    "energy": 115,
    "protein": 15.3,
    "fat": 4,
    "carbs": 4.4
  },
  {
    "id": 394,
    "name": "Ikan Mas pepes",
    "category": "seafood",
    "type": "processed",
    "energy": 209,
    "protein": 15.2,
    "fat": 11.3,
    "carbs": 11.8
  },
  {
    "id": 395,
    "name": "Ikan mas, segar (Common carp, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 86,
    "protein": 16,
    "fat": 2,
    "carbs": 0
  },
  {
    "id": 396,
    "name": "Ikan mayong, segar",
    "category": "seafood",
    "type": "raw",
    "energy": 97,
    "protein": 17.9,
    "fat": 2,
    "carbs": 0.4
  },
  {
    "id": 397,
    "name": "Ikan mujahir goreng",
    "category": "seafood",
    "type": "processed",
    "energy": 416,
    "protein": 46.9,
    "fat": 23.9,
    "carbs": 0
  },
  {
    "id": 398,
    "name": "Ikan Mujahir pepes",
    "category": "seafood",
    "type": "processed",
    "energy": 121,
    "protein": 21.7,
    "fat": 2.8,
    "carbs": 0.8
  },
  {
    "id": 399,
    "name": "Ikan mujahir, dendeng, mentah",
    "category": "seafood",
    "type": "processed",
    "energy": 582,
    "protein": 68.3,
    "fat": 15.2,
    "carbs": 37.2
  },
  {
    "id": 400,
    "name": "Ikan mujahir, segar (Mozambique tilapia, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 89,
    "protein": 18.7,
    "fat": 1,
    "carbs": 0
  },
  {
    "id": 401,
    "name": "Ikan nasu metti, segar",
    "category": "seafood",
    "type": "raw",
    "energy": 154,
    "protein": 16.8,
    "fat": 5,
    "carbs": 10.5
  },
  {
    "id": 402,
    "name": "Ikan oci, kembung, segar (Indian mackerels, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 125,
    "protein": 21.3,
    "fat": 3.4,
    "carbs": 2.2
  },
  {
    "id": 403,
    "name": "Ikan paling, segar",
    "category": "seafood",
    "type": "raw",
    "energy": 303,
    "protein": 14,
    "fat": 27,
    "carbs": 0
  },
  {
    "id": 404,
    "name": "Ikan Papuyu, bakar",
    "category": "seafood",
    "type": "processed",
    "energy": 152,
    "protein": 17.6,
    "fat": 6.1,
    "carbs": 6.7
  },
  {
    "id": 405,
    "name": "Ikan papuyu/ betok, segar (Climbing perch, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 120,
    "protein": 14.3,
    "fat": 4.9,
    "carbs": 4.6
  },
  {
    "id": 406,
    "name": "Ikan Patin, bakar",
    "category": "seafood",
    "type": "processed",
    "energy": 144,
    "protein": 17.5,
    "fat": 6.3,
    "carbs": 4.3
  },
  {
    "id": 407,
    "name": "Ikan patin, segar (Striped catfish, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 132,
    "protein": 17,
    "fat": 6.6,
    "carbs": 1.1
  },
  {
    "id": 408,
    "name": "Ikan peda banjar, mentah",
    "category": "seafood",
    "type": "processed",
    "energy": 156,
    "protein": 28,
    "fat": 4,
    "carbs": 2
  },
  {
    "id": 409,
    "name": "Ikan pepetek, mentah (Ponyfish, fresh)",
    "category": "seafood",
    "type": "processed",
    "energy": 176,
    "protein": 32,
    "fat": 4.4,
    "carbs": 2
  },
  {
    "id": 410,
    "name": "Ikan Pindang banjar, mentah",
    "category": "seafood",
    "type": "processed",
    "energy": 157,
    "protein": 28,
    "fat": 4.2,
    "carbs": 1.8
  },
  {
    "id": 411,
    "name": "Ikan Pindang benggol, mentah",
    "category": "seafood",
    "type": "processed",
    "energy": 170,
    "protein": 31,
    "fat": 4.2,
    "carbs": 0
  },
  {
    "id": 412,
    "name": "Ikan Pindang layang, mentah",
    "category": "seafood",
    "type": "processed",
    "energy": 153,
    "protein": 30,
    "fat": 2.8,
    "carbs": 0
  },
  {
    "id": 413,
    "name": "Ikan Pindang selar, mentah",
    "category": "seafood",
    "type": "processed",
    "energy": 142,
    "protein": 27,
    "fat": 3,
    "carbs": 0
  },
  {
    "id": 414,
    "name": "Ikan pomo, segar",
    "category": "seafood",
    "type": "raw",
    "energy": 147,
    "protein": 22.5,
    "fat": 5.2,
    "carbs": 2.6
  },
  {
    "id": 415,
    "name": "Ikan puntin, segar (Bagrdi catfish, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 76,
    "protein": 14.4,
    "fat": 1.1,
    "carbs": 2.2
  },
  {
    "id": 416,
    "name": "Ikan sale lais, mentah (Sheatfish)",
    "category": "seafood",
    "type": "processed",
    "energy": 415,
    "protein": 61.3,
    "fat": 17.6,
    "carbs": 2.9
  },
  {
    "id": 417,
    "name": "Ikan sale, mentah",
    "category": "seafood",
    "type": "processed",
    "energy": 534,
    "protein": 40.2,
    "fat": 39.3,
    "carbs": 4.9
  },
  {
    "id": 418,
    "name": "Ikan saluang, kering, mentah (Rasborafish)",
    "category": "seafood",
    "type": "processed",
    "energy": 284,
    "protein": 34.1,
    "fat": 9.9,
    "carbs": 14.6
  },
  {
    "id": 419,
    "name": "Ikan saluang, segar (Rasboras fish, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 113,
    "protein": 13.9,
    "fat": 4.9,
    "carbs": 3.4
  },
  {
    "id": 420,
    "name": "Ikan sanggang, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 240,
    "protein": 21.7,
    "fat": 7.7,
    "carbs": 20.7
  },
  {
    "id": 421,
    "name": "Ikan sarden, segar (Herrings, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 109,
    "protein": 19.9,
    "fat": 1.8,
    "carbs": 3.4
  },
  {
    "id": 422,
    "name": "Ikan selar kuning, cue, mentah (Black-banded trevally)",
    "category": "seafood",
    "type": "processed",
    "energy": 138,
    "protein": 27,
    "fat": 3.3,
    "carbs": 0
  },
  {
    "id": 423,
    "name": "Ikan selar, kering, mentah (Trevally yellow-banded)",
    "category": "seafood",
    "type": "processed",
    "energy": 194,
    "protein": 38,
    "fat": 3.5,
    "carbs": 0
  },
  {
    "id": 424,
    "name": "Ikan selar, segar (Scadfish, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 100,
    "protein": 18.8,
    "fat": 2.2,
    "carbs": 0
  },
  {
    "id": 425,
    "name": "Ikan sepat, kering, mentah (Siamese gourami)",
    "category": "seafood",
    "type": "processed",
    "energy": 289,
    "protein": 38,
    "fat": 14,
    "carbs": 0
  },
  {
    "id": 426,
    "name": "Ikan sepat, segar (Snakeskin gourami, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 84,
    "protein": 15.2,
    "fat": 0.6,
    "carbs": 4.7
  },
  {
    "id": 427,
    "name": "Ikan sidat, segar (Shortfin Eel, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 81,
    "protein": 11.4,
    "fat": 1.9,
    "carbs": 3.8
  },
  {
    "id": 428,
    "name": "Ikan sunu, asin, mentah (Coral trout)",
    "category": "seafood",
    "type": "processed",
    "energy": 199,
    "protein": 34.1,
    "fat": 3.8,
    "carbs": 7.1
  },
  {
    "id": 429,
    "name": "Ikan sunu, segar (Leopard coralgrouper, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 111,
    "protein": 13.3,
    "fat": 3.4,
    "carbs": 6.7
  },
  {
    "id": 430,
    "name": "Ikan tahuman, segar",
    "category": "seafood",
    "type": "raw",
    "energy": 88,
    "protein": 15.9,
    "fat": 0.9,
    "carbs": 4.1
  },
  {
    "id": 431,
    "name": "Ikan tarmon, segar",
    "category": "seafood",
    "type": "raw",
    "energy": 96,
    "protein": 19.5,
    "fat": 1.1,
    "carbs": 2
  },
  {
    "id": 432,
    "name": "Ikan telan, segar (spiny eel, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 95,
    "protein": 15.8,
    "fat": 0.7,
    "carbs": 6.5
  },
  {
    "id": 433,
    "name": "Ikan tembang, segar (Bonga shad, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 204,
    "protein": 16,
    "fat": 15,
    "carbs": 0
  },
  {
    "id": 434,
    "name": "Ikan tempahas, segar",
    "category": "seafood",
    "type": "raw",
    "energy": 101,
    "protein": 15.1,
    "fat": 4.1,
    "carbs": 1
  },
  {
    "id": 435,
    "name": "Ikan terbang, segar (Flyingfishes, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 98,
    "protein": 19.6,
    "fat": 1.7,
    "carbs": 1
  },
  {
    "id": 436,
    "name": "Ikan Teri nasi, kering, mentah",
    "category": "seafood",
    "type": "processed",
    "energy": 144,
    "protein": 32.5,
    "fat": 0.6,
    "carbs": 0
  },
  {
    "id": 437,
    "name": "Ikan Teri, bubuk, mentah",
    "category": "seafood",
    "type": "processed",
    "energy": 277,
    "protein": 60,
    "fat": 2.3,
    "carbs": 1.8
  },
  {
    "id": 438,
    "name": "Ikan teri, kering, mentah (Anchovy)",
    "category": "seafood",
    "type": "processed",
    "energy": 170,
    "protein": 33.4,
    "fat": 3,
    "carbs": 0
  },
  {
    "id": 439,
    "name": "Ikan Teri, kering, tawar, mentah",
    "category": "seafood",
    "type": "processed",
    "energy": 331,
    "protein": 68.7,
    "fat": 4.2,
    "carbs": 0
  },
  {
    "id": 440,
    "name": "Ikan teri, segar (Anchovies, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 74,
    "protein": 10.3,
    "fat": 1.4,
    "carbs": 4.1
  },
  {
    "id": 441,
    "name": "Ikan Teri, tepung, mentah",
    "category": "seafood",
    "type": "processed",
    "energy": 347,
    "protein": 48.8,
    "fat": 6.4,
    "carbs": 19.6
  },
  {
    "id": 442,
    "name": "Ikan titang, segar (Spotted scat,fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 82,
    "protein": 17.4,
    "fat": 0.4,
    "carbs": 2.3
  },
  {
    "id": 443,
    "name": "Ikan tongkol, segar (Tuna, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 100,
    "protein": 13.7,
    "fat": 1.5,
    "carbs": 8
  },
  {
    "id": 444,
    "name": "Ikan turi, segar",
    "category": "seafood",
    "type": "raw",
    "energy": 96,
    "protein": 19.2,
    "fat": 2,
    "carbs": 0.2
  },
  {
    "id": 445,
    "name": "Ikan, telur, asin, mentah (Roe, (fish egg), fresh)",
    "category": "egg",
    "type": "processed",
    "energy": 358,
    "protein": 20.7,
    "fat": 26.4,
    "carbs": 9.4
  },
  {
    "id": 446,
    "name": "Ikan, tepung, mentah",
    "category": "seafood",
    "type": "processed",
    "energy": 316,
    "protein": 60.1,
    "fat": 6.5,
    "carbs": 22.4
  },
  {
    "id": 447,
    "name": "Intip goreng",
    "category": "cereal",
    "type": "processed",
    "energy": 474,
    "protein": 7.6,
    "fat": 21.6,
    "carbs": 62.3
  },
  {
    "id": 448,
    "name": "Itik alabio, daging, dendeng, mentah",
    "category": "meat",
    "type": "processed",
    "energy": 496,
    "protein": 30.3,
    "fat": 33.5,
    "carbs": 18.4
  },
  {
    "id": 449,
    "name": "Jagung gerontol",
    "category": "cereal",
    "type": "processed",
    "energy": 156,
    "protein": 2.7,
    "fat": 1.3,
    "carbs": 33.3
  },
  {
    "id": 450,
    "name": "Jagung kuning pipil, kering, mentah (Corn, yellow, raw)",
    "category": "cereal",
    "type": "raw",
    "energy": 366,
    "protein": 9.8,
    "fat": 7.3,
    "carbs": 69.1
  },
  {
    "id": 451,
    "name": "Jagung kuning pipil, rebus",
    "category": "cereal",
    "type": "processed",
    "energy": 154,
    "protein": 3.8,
    "fat": 3.5,
    "carbs": 28.4
  },
  {
    "id": 452,
    "name": "Jagung kuning, tepung",
    "category": "cereal",
    "type": "processed",
    "energy": 355,
    "protein": 9.2,
    "fat": 3.9,
    "carbs": 73.7
  },
  {
    "id": 453,
    "name": "Jagung muda / semi, segar (Baby corn, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 35,
    "protein": 2.2,
    "fat": 0.1,
    "carbs": 7.4
  },
  {
    "id": 454,
    "name": "Jagung muda, kuning, mentah (Corn,baby, yellow, raw)",
    "category": "cereal",
    "type": "raw",
    "energy": 147,
    "protein": 5.1,
    "fat": 0.7,
    "carbs": 31.5
  },
  {
    "id": 455,
    "name": "Jagung muda, rebus",
    "category": "cereal",
    "type": "processed",
    "energy": 142,
    "protein": 5,
    "fat": 0.7,
    "carbs": 30.3
  },
  {
    "id": 456,
    "name": "Jagung pipil var. harapan, kering (Corn, dried, raw)",
    "category": "cereal",
    "type": "raw",
    "energy": 367,
    "protein": 6.2,
    "fat": 5.1,
    "carbs": 76.2
  },
  {
    "id": 457,
    "name": "Jagung pipil var. metro, kering (Corn, dried, raw)",
    "category": "cereal",
    "type": "raw",
    "energy": 368,
    "protein": 5.5,
    "fat": 4.6,
    "carbs": 78
  },
  {
    "id": 458,
    "name": "Jagung titi",
    "category": "cereal",
    "type": "processed",
    "energy": 374,
    "protein": 9.4,
    "fat": 2.2,
    "carbs": 79.1
  },
  {
    "id": 459,
    "name": "Jahe, segar (Ginger, root)",
    "category": "spice",
    "type": "raw",
    "energy": 51,
    "protein": 1.5,
    "fat": 1,
    "carbs": 10.1
  },
  {
    "id": 460,
    "name": "Jali, mentah (Job's tear/adlay, raw)",
    "category": "cereal",
    "type": "raw",
    "energy": 324,
    "protein": 11,
    "fat": 4,
    "carbs": 61
  },
  {
    "id": 461,
    "name": "Jam, selai (Jam)",
    "category": "pastry",
    "type": "processed",
    "energy": 239,
    "protein": 0.5,
    "fat": 0.6,
    "carbs": 64.5
  },
  {
    "id": 462,
    "name": "Jambal goreng, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 286,
    "protein": 48.5,
    "fat": 9.2,
    "carbs": 2.3
  },
  {
    "id": 463,
    "name": "Jambu air, segar (Roseapple, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 46,
    "protein": 0.6,
    "fat": 0.2,
    "carbs": 11.8
  },
  {
    "id": 464,
    "name": "Jambu biji (Guava, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 49,
    "protein": 0.9,
    "fat": 0.3,
    "carbs": 12.2
  },
  {
    "id": 465,
    "name": "Jambu bj putih tdk brbj (Guava, white, seedles, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 61,
    "protein": 0.9,
    "fat": 0.3,
    "carbs": 15.4
  },
  {
    "id": 466,
    "name": "Jambu bol, segar (Malay Apple, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 49,
    "protein": 2.3,
    "fat": 0.2,
    "carbs": 9.6
  },
  {
    "id": 467,
    "name": "Jambu monyet, segar (Cashew apple, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 64,
    "protein": 0.7,
    "fat": 0.6,
    "carbs": 15.8
  },
  {
    "id": 468,
    "name": "Jampang huma, mentah (Ragi millet, raw)",
    "category": "cereal",
    "type": "raw",
    "energy": 350,
    "protein": 6.2,
    "fat": 1.4,
    "carbs": 78.2
  },
  {
    "id": 469,
    "name": "Jamur encik",
    "category": "vegetable",
    "type": "raw",
    "energy": 296,
    "protein": 9.4,
    "fat": 1.1,
    "carbs": 62
  },
  {
    "id": 470,
    "name": "Jamur kuping, kering (fungus, earwood, dried)",
    "category": "vegetable",
    "type": "raw",
    "energy": 294,
    "protein": 16,
    "fat": 0.9,
    "carbs": 64.6
  },
  {
    "id": 471,
    "name": "Jamur kuping, segar (fungus, earwod, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 21,
    "protein": 3.8,
    "fat": 0.6,
    "carbs": 0.9
  },
  {
    "id": 472,
    "name": "Jamur merang, segar (Straw mushroom)",
    "category": "vegetable",
    "type": "raw",
    "energy": 30,
    "protein": 3.5,
    "fat": 0.2,
    "carbs": 4
  },
  {
    "id": 473,
    "name": "Jamur sagu",
    "category": "vegetable",
    "type": "raw",
    "energy": 48,
    "protein": 1.9,
    "fat": 3.2,
    "carbs": 2.8
  },
  {
    "id": 474,
    "name": "Jamur tiram, segar (Oyster mushroom)",
    "category": "vegetable",
    "type": "raw",
    "energy": 30,
    "protein": 1.9,
    "fat": 0.1,
    "carbs": 5.5
  },
  {
    "id": 475,
    "name": "Jangang bintatoeng, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 107,
    "protein": 5.3,
    "fat": 2.2,
    "carbs": 16.5
  },
  {
    "id": 476,
    "name": "Jantung pisang, segar (Banana, flower, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 32,
    "protein": 1.2,
    "fat": 0.3,
    "carbs": 7.1
  },
  {
    "id": 477,
    "name": "Japilus",
    "category": "cereal",
    "type": "processed",
    "energy": 500,
    "protein": 1.2,
    "fat": 25.1,
    "carbs": 67.3
  },
  {
    "id": 478,
    "name": "Jawawut, mentah (Italian millet, raw)",
    "category": "cereal",
    "type": "raw",
    "energy": 364,
    "protein": 9.7,
    "fat": 3.5,
    "carbs": 73.4
  },
  {
    "id": 479,
    "name": "Jengkol, segar (Dogfruit, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 192,
    "protein": 5.4,
    "fat": 0.3,
    "carbs": 40.7
  },
  {
    "id": 480,
    "name": "Jeruk bali, segar (Pummelo, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 48,
    "protein": 0.6,
    "fat": 0.2,
    "carbs": 12.4
  },
  {
    "id": 481,
    "name": "Jeruk banjar, segar (Orange (banjar), fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 61,
    "protein": 0.8,
    "fat": 0.2,
    "carbs": 14.1
  },
  {
    "id": 482,
    "name": "Jeruk garut-keprok (Mandarin)",
    "category": "fruit",
    "type": "raw",
    "energy": 44,
    "protein": 0.8,
    "fat": 0.3,
    "carbs": 10.9
  },
  {
    "id": 483,
    "name": "Jeruk Kalamansi, segar",
    "category": "fruit",
    "type": "raw",
    "energy": 39,
    "protein": 0.3,
    "fat": 0.3,
    "carbs": 8.9
  },
  {
    "id": 484,
    "name": "Jeruk manis, segar (orange, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 45,
    "protein": 0.9,
    "fat": 0.2,
    "carbs": 11.2
  },
  {
    "id": 485,
    "name": "Jeruk nipis, segar (Lime, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 44,
    "protein": 0.5,
    "fat": 0.2,
    "carbs": 10
  },
  {
    "id": 486,
    "name": "Jeruk ragi, segar",
    "category": "fruit",
    "type": "raw",
    "energy": 49,
    "protein": 0.7,
    "fat": 0.2,
    "carbs": 11.1
  },
  {
    "id": 487,
    "name": "Jotang, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 34,
    "protein": 1.9,
    "fat": 0.3,
    "carbs": 7.1
  },
  {
    "id": 488,
    "name": "Jukku pallu kaloa, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 15,
    "protein": 15.2,
    "fat": 4.3,
    "carbs": 8.8
  },
  {
    "id": 489,
    "name": "Kabau, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 130,
    "protein": 6.7,
    "fat": 0.3,
    "carbs": 25.2
  },
  {
    "id": 490,
    "name": "Kaburan, ubi, segar (Lesser yam, fresh)",
    "category": "tuber",
    "type": "raw",
    "energy": 133,
    "protein": 1,
    "fat": 0.2,
    "carbs": 32.2
  },
  {
    "id": 491,
    "name": "Kabuto",
    "category": "tuber",
    "type": "processed",
    "energy": 250,
    "protein": 2.6,
    "fat": 2.5,
    "carbs": 35.4
  },
  {
    "id": 492,
    "name": "Kacang arab, kering (Chick pea, raw)",
    "category": "grain",
    "type": "raw",
    "energy": 330,
    "protein": 23.8,
    "fat": 1.4,
    "carbs": 60.2
  },
  {
    "id": 493,
    "name": "Kacang atom",
    "category": "grain",
    "type": "processed",
    "energy": 533,
    "protein": 27.8,
    "fat": 38.1,
    "carbs": 28.8
  },
  {
    "id": 494,
    "name": "Kacang babi, kering (Broad bean, raw)",
    "category": "grain",
    "type": "raw",
    "energy": 341,
    "protein": 30.4,
    "fat": 3.2,
    "carbs": 51.3
  },
  {
    "id": 495,
    "name": "Kacang belimbing (kecipir), kering (Winged bean, seed, raw)",
    "category": "grain",
    "type": "raw",
    "energy": 400,
    "protein": 34.4,
    "fat": 16.9,
    "carbs": 34.1
  },
  {
    "id": 496,
    "name": "Kacang belimbing, rebus",
    "category": "grain",
    "type": "processed",
    "energy": 204,
    "protein": 16.9,
    "fat": 8.8,
    "carbs": 17.5
  },
  {
    "id": 497,
    "name": "Kacang beracun, segar",
    "category": "grain",
    "type": "raw",
    "energy": 118,
    "protein": 4.4,
    "fat": 1.5,
    "carbs": 21.6
  },
  {
    "id": 498,
    "name": "Kacang bogor, goreng",
    "category": "grain",
    "type": "processed",
    "energy": 479,
    "protein": 12.7,
    "fat": 23.2,
    "carbs": 58.9
  },
  {
    "id": 499,
    "name": "Kacang bogor, kering (Bambara groundnut, dried)",
    "category": "grain",
    "type": "raw",
    "energy": 370,
    "protein": 16,
    "fat": 6,
    "carbs": 65
  },
  {
    "id": 500,
    "name": "Kacang bogor, rebus",
    "category": "grain",
    "type": "processed",
    "energy": 161,
    "protein": 7.7,
    "fat": 2.8,
    "carbs": 27.1
  },
  {
    "id": 501,
    "name": "Kacang bogor, segar (Bambara groundnut, fresh)",
    "category": "grain",
    "type": "raw",
    "energy": 165,
    "protein": 7.7,
    "fat": 3.1,
    "carbs": 27.4
  },
  {
    "id": 502,
    "name": "Kacang endel, biji, kering",
    "category": "grain",
    "type": "raw",
    "energy": 331,
    "protein": 25,
    "fat": 1,
    "carbs": 58
  },
  {
    "id": 503,
    "name": "Kacang ercis, segar (Pea)",
    "category": "grain",
    "type": "raw",
    "energy": 129,
    "protein": 12.4,
    "fat": 0.7,
    "carbs": 18.3
  },
  {
    "id": 504,
    "name": "kacang galing, segar",
    "category": "grain",
    "type": "raw",
    "energy": 336,
    "protein": 23.1,
    "fat": 1.7,
    "carbs": 59.5
  },
  {
    "id": 505,
    "name": "Kacang goyang",
    "category": "grain",
    "type": "processed",
    "energy": 516,
    "protein": 14.7,
    "fat": 31.1,
    "carbs": 44.4
  },
  {
    "id": 506,
    "name": "Kacang gude, biji, kering (Pigeon pea, fresh)",
    "category": "grain",
    "type": "raw",
    "energy": 316,
    "protein": 20.7,
    "fat": 1,
    "carbs": 58
  },
  {
    "id": 507,
    "name": "Kacang gude, biji, segar (Pigeon pea, raw)",
    "category": "grain",
    "type": "raw",
    "energy": 114,
    "protein": 7,
    "fat": 0.6,
    "carbs": 20.8
  },
  {
    "id": 508,
    "name": "Kacang gude, rebus",
    "category": "grain",
    "type": "processed",
    "energy": 147,
    "protein": 9,
    "fat": 0.5,
    "carbs": 27.5
  },
  {
    "id": 509,
    "name": "Kacang hijau var. bakti, kering (Mung bean, raw)",
    "category": "grain",
    "type": "raw",
    "energy": 350,
    "protein": 17.1,
    "fat": 1.8,
    "carbs": 70.7
  },
  {
    "id": 510,
    "name": "Kacang hijau var. siwalik, kering (Mung bean, raw)",
    "category": "grain",
    "type": "raw",
    "energy": 339,
    "protein": 20.8,
    "fat": 2.1,
    "carbs": 64.6
  },
  {
    "id": 511,
    "name": "Kacang hijau, kering (Mung bean, raw)",
    "category": "grain",
    "type": "raw",
    "energy": 323,
    "protein": 22.9,
    "fat": 1.5,
    "carbs": 56.8
  },
  {
    "id": 512,
    "name": "kacang hijau, rebus",
    "category": "grain",
    "type": "processed",
    "energy": 109,
    "protein": 8.7,
    "fat": 0.5,
    "carbs": 18.3
  },
  {
    "id": 513,
    "name": "Kacang hitam, kering (Black turtle bean, raw)",
    "category": "grain",
    "type": "raw",
    "energy": 346,
    "protein": 16.6,
    "fat": 1.7,
    "carbs": 66.1
  },
  {
    "id": 514,
    "name": "Kacang kapri, segar (Pea)",
    "category": "grain",
    "type": "raw",
    "energy": 98,
    "protein": 6.7,
    "fat": 0.4,
    "carbs": 17.7
  },
  {
    "id": 515,
    "name": "Kacang kedelai, goreng",
    "category": "grain",
    "type": "processed",
    "energy": 521,
    "protein": 32.2,
    "fat": 37.7,
    "carbs": 22.9
  },
  {
    "id": 516,
    "name": "Kacang kedelai, kering (Soya bean, dried)",
    "category": "grain",
    "type": "raw",
    "energy": 381,
    "protein": 40.4,
    "fat": 16.7,
    "carbs": 24.9
  },
  {
    "id": 517,
    "name": "Kacang kedelai, rebus",
    "category": "grain",
    "type": "processed",
    "energy": 189,
    "protein": 20.2,
    "fat": 8.2,
    "carbs": 12.7
  },
  {
    "id": 518,
    "name": "Kacang kedelai, segar (Soya bean, fresh)",
    "category": "grain",
    "type": "raw",
    "energy": 286,
    "protein": 30.2,
    "fat": 15.6,
    "carbs": 30.1
  },
  {
    "id": 519,
    "name": "Kacang kincai, kering",
    "category": "grain",
    "type": "raw",
    "energy": 444,
    "protein": 19.9,
    "fat": 16,
    "carbs": 55
  },
  {
    "id": 520,
    "name": "Kacang komak, segar (Hyacinth bean, fresh)",
    "category": "grain",
    "type": "raw",
    "energy": 327,
    "protein": 16.4,
    "fat": 4.3,
    "carbs": 55.8
  },
  {
    "id": 521,
    "name": "Kacang kuning, kering (Soya bean)",
    "category": "grain",
    "type": "raw",
    "energy": 355,
    "protein": 17,
    "fat": 2.5,
    "carbs": 66
  },
  {
    "id": 522,
    "name": "Kacang lebui /iris, kering (Pigeon pea, raw)",
    "category": "grain",
    "type": "raw",
    "energy": 346,
    "protein": 16.5,
    "fat": 1.5,
    "carbs": 66.6
  },
  {
    "id": 523,
    "name": "Kacang mekah, polong, segar (Sword bean, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 22,
    "protein": 1.1,
    "fat": 1,
    "carbs": 3.4
  },
  {
    "id": 524,
    "name": "Kacang mentega, kering (Peanut butter fruit, fresh)",
    "category": "grain",
    "type": "raw",
    "energy": 344,
    "protein": 16.7,
    "fat": 2.1,
    "carbs": 64.6
  },
  {
    "id": 525,
    "name": "Kacang merah /banda, kering (Kidney bean, dried)",
    "category": "grain",
    "type": "raw",
    "energy": 350,
    "protein": 13.9,
    "fat": 3,
    "carbs": 66.9
  },
  {
    "id": 526,
    "name": "Kacang merah kering, rebus",
    "category": "grain",
    "type": "processed",
    "energy": 158,
    "protein": 10.3,
    "fat": 0.9,
    "carbs": 28.2
  },
  {
    "id": 527,
    "name": "Kacang merah segar, rebus",
    "category": "grain",
    "type": "processed",
    "energy": 144,
    "protein": 10,
    "fat": 1,
    "carbs": 24.7
  },
  {
    "id": 528,
    "name": "Kacang merah tua, kering (Dark red kidney bean, dried)",
    "category": "grain",
    "type": "raw",
    "energy": 280,
    "protein": 16.7,
    "fat": 1.6,
    "carbs": 63.2
  },
  {
    "id": 529,
    "name": "Kacang merah, kering (Kidney bean, kering)",
    "category": "grain",
    "type": "raw",
    "energy": 314,
    "protein": 22.1,
    "fat": 1.1,
    "carbs": 56.2
  },
  {
    "id": 530,
    "name": "Kacang merah, segar (Kidney bean, fresh)",
    "category": "grain",
    "type": "raw",
    "energy": 171,
    "protein": 11,
    "fat": 2.2,
    "carbs": 28
  },
  {
    "id": 531,
    "name": "Kacang mete/biji jambu monyet, goreng",
    "category": "grain",
    "type": "processed",
    "energy": 629,
    "protein": 20.4,
    "fat": 56.3,
    "carbs": 19.8
  },
  {
    "id": 532,
    "name": "Kacang mete/biji jambu monyet, segar (Cashew nut, mentah)",
    "category": "grain",
    "type": "raw",
    "energy": 616,
    "protein": 16.3,
    "fat": 48.4,
    "carbs": 28.7
  },
  {
    "id": 533,
    "name": "Kacang negara",
    "category": "grain",
    "type": "processed",
    "energy": 480,
    "protein": 18.4,
    "fat": 19.1,
    "carbs": 58.5
  },
  {
    "id": 534,
    "name": "Kacang panjang ,kukus",
    "category": "vegetable",
    "type": "processed",
    "energy": 39,
    "protein": 3,
    "fat": 0.6,
    "carbs": 7.6
  },
  {
    "id": 535,
    "name": "Kacang panjang, biji, kering (Yardlong bean, seeded, dried)",
    "category": "grain",
    "type": "raw",
    "energy": 357,
    "protein": 17.3,
    "fat": 1.5,
    "carbs": 68.6
  },
  {
    "id": 536,
    "name": "Kacang panjang, rebus",
    "category": "vegetable",
    "type": "processed",
    "energy": 30,
    "protein": 2.3,
    "fat": 0.4,
    "carbs": 5.8
  },
  {
    "id": 537,
    "name": "Kacang panjang, segar (Yard-long bean, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 31,
    "protein": 2.3,
    "fat": 0.1,
    "carbs": 5.3
  },
  {
    "id": 538,
    "name": "Kacang ranti polong",
    "category": "vegetable",
    "type": "raw",
    "energy": 37,
    "protein": 3.1,
    "fat": 0.2,
    "carbs": 7.9
  },
  {
    "id": 539,
    "name": "Kacang sukro",
    "category": "grain",
    "type": "processed",
    "energy": 484,
    "protein": 8.8,
    "fat": 26.1,
    "carbs": 57.7
  },
  {
    "id": 540,
    "name": "Kacang tanah rebus dg kulit",
    "category": "grain",
    "type": "processed",
    "energy": 360,
    "protein": 13.5,
    "fat": 31.2,
    "carbs": 12.8
  },
  {
    "id": 541,
    "name": "Kacang tanah sangan (Groundnut, baked)",
    "category": "grain",
    "type": "raw",
    "energy": 560,
    "protein": 29.5,
    "fat": 43,
    "carbs": 24.1
  },
  {
    "id": 542,
    "name": "Kacang tanah sangan tanpa selaput (Groundnut, baked without husk)",
    "category": "grain",
    "type": "raw",
    "energy": 559,
    "protein": 26.9,
    "fat": 44.2,
    "carbs": 23.6
  },
  {
    "id": 543,
    "name": "Kacang tanah sari",
    "category": "grain",
    "type": "processed",
    "energy": 561,
    "protein": 25.5,
    "fat": 43.8,
    "carbs": 26
  },
  {
    "id": 544,
    "name": "Kacang tanah, goreng",
    "category": "grain",
    "type": "processed",
    "energy": 564,
    "protein": 25.5,
    "fat": 44.4,
    "carbs": 25.5
  },
  {
    "id": 545,
    "name": "Kacang tanah, kering (Groundnut, dried)",
    "category": "grain",
    "type": "raw",
    "energy": 525,
    "protein": 27.9,
    "fat": 42.7,
    "carbs": 17.4
  },
  {
    "id": 546,
    "name": "Kacang tanah, rebus",
    "category": "grain",
    "type": "processed",
    "energy": 220,
    "protein": 10.6,
    "fat": 18,
    "carbs": 8
  },
  {
    "id": 547,
    "name": "Kacang tolo / tunggak, kering (Cowpea, dried)",
    "category": "grain",
    "type": "raw",
    "energy": 331,
    "protein": 24.4,
    "fat": 1.9,
    "carbs": 56.6
  },
  {
    "id": 548,
    "name": "Kacang tolo, rebus",
    "category": "grain",
    "type": "processed",
    "energy": 138,
    "protein": 10.7,
    "fat": 1.1,
    "carbs": 22.6
  },
  {
    "id": 549,
    "name": "Kacang tunis, kering",
    "category": "grain",
    "type": "raw",
    "energy": 351,
    "protein": 12.2,
    "fat": 1.2,
    "carbs": 72.9
  },
  {
    "id": 550,
    "name": "Kacang uci, kering",
    "category": "grain",
    "type": "raw",
    "energy": 358,
    "protein": 23.4,
    "fat": 2.4,
    "carbs": 60.6
  },
  {
    "id": 551,
    "name": "Kacang urei, kering (Rice bean )",
    "category": "grain",
    "type": "raw",
    "energy": 354,
    "protein": 12.8,
    "fat": 1.8,
    "carbs": 69.3
  },
  {
    "id": 552,
    "name": "Kadada katembe",
    "category": "vegetable",
    "type": "processed",
    "energy": 110,
    "protein": 4.5,
    "fat": 6.9,
    "carbs": 7.1
  },
  {
    "id": 553,
    "name": "Kaholeo, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 413,
    "protein": 28.7,
    "fat": 19.8,
    "carbs": 29.8
  },
  {
    "id": 554,
    "name": "Kakicak",
    "category": "cereal",
    "type": "processed",
    "energy": 296,
    "protein": 3.4,
    "fat": 15.1,
    "carbs": 36.7
  },
  {
    "id": 555,
    "name": "Kalakai, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 38,
    "protein": 2.4,
    "fat": 0.2,
    "carbs": 6.6
  },
  {
    "id": 556,
    "name": "Kalio ayam, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 203,
    "protein": 16,
    "fat": 13.5,
    "carbs": 4.4
  },
  {
    "id": 557,
    "name": "Kalio jeroan, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 163,
    "protein": 16.5,
    "fat": 9,
    "carbs": 4.1
  },
  {
    "id": 558,
    "name": "Kalio kikil (tunjang), masakan",
    "category": "meat",
    "type": "processed",
    "energy": 122,
    "protein": 13.8,
    "fat": 5.7,
    "carbs": 3.9
  },
  {
    "id": 559,
    "name": "Kalio otak, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 157,
    "protein": 8.1,
    "fat": 8.8,
    "carbs": 11.4
  },
  {
    "id": 560,
    "name": "Kalio telur, masakan",
    "category": "egg",
    "type": "processed",
    "energy": 193,
    "protein": 10.6,
    "fat": 12.4,
    "carbs": 9.7
  },
  {
    "id": 561,
    "name": "Kambing, daging, segar (Goat, meat, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 149,
    "protein": 16.6,
    "fat": 9.2,
    "carbs": 0
  },
  {
    "id": 562,
    "name": "Kambose",
    "category": "cereal",
    "type": "processed",
    "energy": 164,
    "protein": 3,
    "fat": 2.4,
    "carbs": 32.6
  },
  {
    "id": 563,
    "name": "Kangkung tondano (Kangkong, (tondano), fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 43,
    "protein": 1.8,
    "fat": 0.2,
    "carbs": 8.4
  },
  {
    "id": 564,
    "name": "Kangkung, kukus",
    "category": "vegetable",
    "type": "processed",
    "energy": 30,
    "protein": 3.2,
    "fat": 0.7,
    "carbs": 4.7
  },
  {
    "id": 565,
    "name": "Kangkung, rebus",
    "category": "vegetable",
    "type": "processed",
    "energy": 22,
    "protein": 2.5,
    "fat": 0.6,
    "carbs": 3.1
  },
  {
    "id": 566,
    "name": "Kangkung, segar (Kangkong, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 28,
    "protein": 3.4,
    "fat": 0.7,
    "carbs": 3.9
  },
  {
    "id": 567,
    "name": "Kaparende, sayur",
    "category": "vegetable",
    "type": "processed",
    "energy": 38,
    "protein": 2.4,
    "fat": 2,
    "carbs": 2.6
  },
  {
    "id": 568,
    "name": "Kapri muda, segar (Pease, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 45,
    "protein": 3.3,
    "fat": 0.2,
    "carbs": 9
  },
  {
    "id": 569,
    "name": "Kapurung",
    "category": "tuber",
    "type": "processed",
    "energy": 41,
    "protein": 2,
    "fat": 0.3,
    "carbs": 7.8
  },
  {
    "id": 570,
    "name": "Kapusa",
    "category": "cereal",
    "type": "processed",
    "energy": 158,
    "protein": 4.4,
    "fat": 3.2,
    "carbs": 27.8
  },
  {
    "id": 571,
    "name": "Karawila",
    "category": "vegetable",
    "type": "raw",
    "energy": 25,
    "protein": 2.3,
    "fat": 0.2,
    "carbs": 3.5
  },
  {
    "id": 572,
    "name": "Karedok, sayur",
    "category": "vegetable",
    "type": "processed",
    "energy": 92,
    "protein": 2.2,
    "fat": 3.3,
    "carbs": 14.1
  },
  {
    "id": 573,
    "name": "Kawista, segar (Wood apple, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 120,
    "protein": 3.5,
    "fat": 2.5,
    "carbs": 20.8
  },
  {
    "id": 574,
    "name": "Kecap (Soyabean sauce)",
    "category": "spice",
    "type": "processed",
    "energy": 71,
    "protein": 5.7,
    "fat": 1.3,
    "carbs": 9
  },
  {
    "id": 575,
    "name": "Kecimpring singkong goreng",
    "category": "tuber",
    "type": "processed",
    "energy": 464,
    "protein": 1.2,
    "fat": 18.6,
    "carbs": 73
  },
  {
    "id": 576,
    "name": "Kecipir muda, segar (Winged bean, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 32,
    "protein": 2.9,
    "fat": 0.2,
    "carbs": 5.8
  },
  {
    "id": 577,
    "name": "Kecombrang, segar (Red ginger lily, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 34,
    "protein": 0.9,
    "fat": 1,
    "carbs": 6.7
  },
  {
    "id": 578,
    "name": "Keddo bodong",
    "category": "cereal",
    "type": "processed",
    "energy": 290,
    "protein": 4.6,
    "fat": 5.7,
    "carbs": 55.2
  },
  {
    "id": 579,
    "name": "Kedondong masak, segar (Ambarella, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 46,
    "protein": 1,
    "fat": 0.1,
    "carbs": 10.3
  },
  {
    "id": 580,
    "name": "Kedondong, segar  (Ambarella, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 47,
    "protein": 0.5,
    "fat": 0.2,
    "carbs": 10.4
  },
  {
    "id": 581,
    "name": "Keju",
    "category": "milk",
    "type": "processed",
    "energy": 326,
    "protein": 22.8,
    "fat": 20.3,
    "carbs": 13.1
  },
  {
    "id": 582,
    "name": "Keju kacang tanah (peanut butter)",
    "category": "grain",
    "type": "processed",
    "energy": 590,
    "protein": 27,
    "fat": 49,
    "carbs": 20.9
  },
  {
    "id": 583,
    "name": "Kelapa hutan, kering",
    "category": "fruit",
    "type": "raw",
    "energy": 623,
    "protein": 2,
    "fat": 52.1,
    "carbs": 36.5
  },
  {
    "id": 584,
    "name": "Kelapa muda, air, segar (Coconut, young,  water, fresh)",
    "category": "beverage",
    "type": "raw",
    "energy": 17,
    "protein": 0.2,
    "fat": 0.1,
    "carbs": 3.8
  },
  {
    "id": 585,
    "name": "Kelapa muda, daging, segar (Coconut, flesh, Young, fresh )",
    "category": "fruit",
    "type": "raw",
    "energy": 68,
    "protein": 1,
    "fat": 0.9,
    "carbs": 14
  },
  {
    "id": 586,
    "name": "Kelapa setengah tua, daging, segar (Coconut flesh, half mature, fresh)",
    "category": "fat",
    "type": "raw",
    "energy": 180,
    "protein": 4,
    "fat": 15,
    "carbs": 10
  },
  {
    "id": 587,
    "name": "Kelapa tua, daging, segar (Coconut, flesh, old, fresh)",
    "category": "fat",
    "type": "raw",
    "energy": 359,
    "protein": 3.4,
    "fat": 34.7,
    "carbs": 14
  },
  {
    "id": 588,
    "name": "Kelawi,kluwih, segar (Breadfruit, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 118,
    "protein": 1.5,
    "fat": 0.3,
    "carbs": 27.2
  },
  {
    "id": 589,
    "name": "Kelepon, kue",
    "category": "cereal",
    "type": "processed",
    "energy": 215,
    "protein": 3.7,
    "fat": 3.7,
    "carbs": 41.8
  },
  {
    "id": 590,
    "name": "Kelinci, daging, segar (Rabbit, meat, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 142,
    "protein": 16.9,
    "fat": 7.8,
    "carbs": 0
  },
  {
    "id": 591,
    "name": "Kemang, segar (Kemang, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 48,
    "protein": 1,
    "fat": 0.2,
    "carbs": 11.9
  },
  {
    "id": 592,
    "name": "Kembang tahu",
    "category": "grain",
    "type": "processed",
    "energy": 380,
    "protein": 48.9,
    "fat": 13.8,
    "carbs": 23.3
  },
  {
    "id": 593,
    "name": "Kembang tahu rebus",
    "category": "grain",
    "type": "processed",
    "energy": 90,
    "protein": 10.7,
    "fat": 4,
    "carbs": 4.7
  },
  {
    "id": 594,
    "name": "Kembang turi, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 51,
    "protein": 1.8,
    "fat": 0.6,
    "carbs": 9.6
  },
  {
    "id": 595,
    "name": "Kemiri (Candle nut)",
    "category": "spice",
    "type": "raw",
    "energy": 675,
    "protein": 19,
    "fat": 63,
    "carbs": 8
  },
  {
    "id": 596,
    "name": "Kenari banda, kering (Walnut, banda, dried)",
    "category": "grain",
    "type": "raw",
    "energy": 616,
    "protein": 13.9,
    "fat": 56.2,
    "carbs": 13.7
  },
  {
    "id": 597,
    "name": "Kenari, kering (Walnut, dried)",
    "category": "grain",
    "type": "raw",
    "energy": 657,
    "protein": 15,
    "fat": 66,
    "carbs": 13
  },
  {
    "id": 598,
    "name": "Kentang hitam, segar (Madagascar potato, fresh)",
    "category": "tuber",
    "type": "raw",
    "energy": 142,
    "protein": 0.9,
    "fat": 0.4,
    "carbs": 33.7
  },
  {
    "id": 599,
    "name": "Kentang, segar (Yam, fresh)",
    "category": "tuber",
    "type": "raw",
    "energy": 62,
    "protein": 2.1,
    "fat": 0.2,
    "carbs": 13.5
  },
  {
    "id": 600,
    "name": "Keong, segar (Snail, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 64,
    "protein": 12,
    "fat": 1,
    "carbs": 2
  },
  {
    "id": 601,
    "name": "Kepala susu - krim, segar",
    "category": "milk",
    "type": "raw",
    "energy": 204,
    "protein": 2.6,
    "fat": 20,
    "carbs": 4
  },
  {
    "id": 602,
    "name": "Kepiting, segar (Crab, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 151,
    "protein": 13.8,
    "fat": 3.8,
    "carbs": 14.1
  },
  {
    "id": 603,
    "name": "Kerang, asap, mentah",
    "category": "seafood",
    "type": "processed",
    "energy": 393,
    "protein": 38.9,
    "fat": 13.3,
    "carbs": 29.4
  },
  {
    "id": 604,
    "name": "Kerang, dendeng, mentah",
    "category": "seafood",
    "type": "processed",
    "energy": 357,
    "protein": 41.1,
    "fat": 10,
    "carbs": 25.6
  },
  {
    "id": 605,
    "name": "Kerang, segar",
    "category": "seafood",
    "type": "raw",
    "energy": 101,
    "protein": 14.4,
    "fat": 2.6,
    "carbs": 3.9
  },
  {
    "id": 606,
    "name": "Kerbau, daging, segar (Buffalo, meat, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 79,
    "protein": 18.7,
    "fat": 0.5,
    "carbs": 0
  },
  {
    "id": 607,
    "name": "Keremes",
    "category": "tuber",
    "type": "processed",
    "energy": 475,
    "protein": 1.6,
    "fat": 25.2,
    "carbs": 64.4
  },
  {
    "id": 608,
    "name": "Kereput",
    "category": "cereal",
    "type": "processed",
    "energy": 580,
    "protein": 4.8,
    "fat": 39.6,
    "carbs": 51.1
  },
  {
    "id": 609,
    "name": "Keribang, ubi, segar",
    "category": "tuber",
    "type": "raw",
    "energy": 137,
    "protein": 1.3,
    "fat": 1.1,
    "carbs": 29.8
  },
  {
    "id": 610,
    "name": "Keripik bayam",
    "category": "vegetable",
    "type": "processed",
    "energy": 586,
    "protein": 4.9,
    "fat": 40.6,
    "carbs": 50.2
  },
  {
    "id": 611,
    "name": "Keripik gadung",
    "category": "tuber",
    "type": "processed",
    "energy": 446,
    "protein": 2.8,
    "fat": 14.5,
    "carbs": 76
  },
  {
    "id": 612,
    "name": "Keripik kentang",
    "category": "tuber",
    "type": "processed",
    "energy": 448,
    "protein": 2.7,
    "fat": 18.8,
    "carbs": 67.1
  },
  {
    "id": 613,
    "name": "Keripik lampung",
    "category": "fruit",
    "type": "processed",
    "energy": 485,
    "protein": 1.7,
    "fat": 22.2,
    "carbs": 69.7
  },
  {
    "id": 614,
    "name": "Keripik oncom",
    "category": "grain",
    "type": "processed",
    "energy": 598,
    "protein": 8.3,
    "fat": 43.8,
    "carbs": 42.6
  },
  {
    "id": 615,
    "name": "Keripik singkong",
    "category": "tuber",
    "type": "processed",
    "energy": 478,
    "protein": 0.9,
    "fat": 20.7,
    "carbs": 72
  },
  {
    "id": 616,
    "name": "Keripik singkong berbumbu",
    "category": "tuber",
    "type": "processed",
    "energy": 481,
    "protein": 2.2,
    "fat": 19.7,
    "carbs": 73.6
  },
  {
    "id": 617,
    "name": "Keripik tempe",
    "category": "grain",
    "type": "processed",
    "energy": 581,
    "protein": 12.1,
    "fat": 40.6,
    "carbs": 41.7
  },
  {
    "id": 618,
    "name": "Keripik tempe abadi besar",
    "category": "grain",
    "type": "processed",
    "energy": 556,
    "protein": 15.8,
    "fat": 37.1,
    "carbs": 39.8
  },
  {
    "id": 619,
    "name": "Keripik tempe abadi murni",
    "category": "grain",
    "type": "processed",
    "energy": 542,
    "protein": 40.3,
    "fat": 42.4,
    "carbs": 11.6
  },
  {
    "id": 620,
    "name": "Keripik tempe abadi sedang",
    "category": "grain",
    "type": "processed",
    "energy": 510,
    "protein": 12.3,
    "fat": 27.9,
    "carbs": 52.4
  },
  {
    "id": 621,
    "name": "Keripik tempe abadi telur",
    "category": "grain",
    "type": "processed",
    "energy": 529,
    "protein": 20.8,
    "fat": 31.7,
    "carbs": 40.2
  },
  {
    "id": 622,
    "name": "Keripik ubi",
    "category": "tuber",
    "type": "processed",
    "energy": 486,
    "protein": 0.2,
    "fat": 23.9,
    "carbs": 67.6
  },
  {
    "id": 623,
    "name": "Kerokot, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 26,
    "protein": 1.7,
    "fat": 0.4,
    "carbs": 3.8
  },
  {
    "id": 624,
    "name": "Kerupik tempe abadi prima",
    "category": "grain",
    "type": "processed",
    "energy": 540,
    "protein": 16.7,
    "fat": 33.9,
    "carbs": 42
  },
  {
    "id": 625,
    "name": "Kerupuk cumi goreng",
    "category": "tuber",
    "type": "processed",
    "energy": 444,
    "protein": 6.9,
    "fat": 14.6,
    "carbs": 71.3
  },
  {
    "id": 626,
    "name": "Kerupuk kemplang  (ikan) mentah",
    "category": "tuber",
    "type": "processed",
    "energy": 325,
    "protein": 1.8,
    "fat": 0.4,
    "carbs": 78.5
  },
  {
    "id": 627,
    "name": "Kerupuk kemplang goreng",
    "category": "tuber",
    "type": "processed",
    "energy": 504,
    "protein": 5.6,
    "fat": 28.1,
    "carbs": 57.1
  },
  {
    "id": 628,
    "name": "Kerupuk kemplang panggang",
    "category": "tuber",
    "type": "processed",
    "energy": 356,
    "protein": 9.7,
    "fat": 1.1,
    "carbs": 76.9
  },
  {
    "id": 629,
    "name": "Kerupuk mie kuning goreng",
    "category": "tuber",
    "type": "processed",
    "energy": 476,
    "protein": 0.1,
    "fat": 21.1,
    "carbs": 71.3
  },
  {
    "id": 630,
    "name": "Kerupuk udang goreng",
    "category": "tuber",
    "type": "processed",
    "energy": 477,
    "protein": 4.7,
    "fat": 20.5,
    "carbs": 68.5
  },
  {
    "id": 631,
    "name": "Kerupuk urat",
    "category": "meat",
    "type": "processed",
    "energy": 588,
    "protein": 53.7,
    "fat": 40.9,
    "carbs": 1.2
  },
  {
    "id": 632,
    "name": "Kesemek, segar (Persimmons, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 78,
    "protein": 0.8,
    "fat": 0.4,
    "carbs": 20
  },
  {
    "id": 633,
    "name": "Ketan hitam, matang",
    "category": "cereal",
    "type": "processed",
    "energy": 181,
    "protein": 4,
    "fat": 1.2,
    "carbs": 37.3
  },
  {
    "id": 634,
    "name": "Ketan putih, matang",
    "category": "cereal",
    "type": "processed",
    "energy": 163,
    "protein": 3,
    "fat": 0.4,
    "carbs": 35.7
  },
  {
    "id": 635,
    "name": "Ketela pohon/ singkong, segar (Cassava, fresh)",
    "category": "tuber",
    "type": "raw",
    "energy": 154,
    "protein": 1,
    "fat": 0.3,
    "carbs": 36.8
  },
  {
    "id": 636,
    "name": "Ketela pohon/singkong kukus",
    "category": "tuber",
    "type": "processed",
    "energy": 153,
    "protein": 1.2,
    "fat": 0.3,
    "carbs": 36.4
  },
  {
    "id": 637,
    "name": "Ketimun krai, segar (Cucumber (krai), fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 10,
    "protein": 0.5,
    "fat": 0.2,
    "carbs": 2
  },
  {
    "id": 638,
    "name": "Ketimun madura, segar (Cucumber (madura), fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 9,
    "protein": 0.5,
    "fat": 0.1,
    "carbs": 1.9
  },
  {
    "id": 639,
    "name": "Ketimun, segar (Cucumber, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 8,
    "protein": 0.2,
    "fat": 0.2,
    "carbs": 1.4
  },
  {
    "id": 640,
    "name": "Ketoprak",
    "category": "cereal",
    "type": "processed",
    "energy": 153,
    "protein": 7.9,
    "fat": 7.7,
    "carbs": 13
  },
  {
    "id": 641,
    "name": "Ketumbar, kering (Coriander, seed)",
    "category": "spice",
    "type": "raw",
    "energy": 418,
    "protein": 14.1,
    "fat": 16.1,
    "carbs": 54.2
  },
  {
    "id": 642,
    "name": "Ketupat kandangan",
    "category": "cereal",
    "type": "processed",
    "energy": 109,
    "protein": 2.2,
    "fat": 5.2,
    "carbs": 13.4
  },
  {
    "id": 643,
    "name": "Ketupat ketan",
    "category": "cereal",
    "type": "processed",
    "energy": 212,
    "protein": 4,
    "fat": 4.6,
    "carbs": 38.6
  },
  {
    "id": 644,
    "name": "Kluwek (Pucungmit)",
    "category": "spice",
    "type": "raw",
    "energy": 310,
    "protein": 10,
    "fat": 24,
    "carbs": 13.5
  },
  {
    "id": 645,
    "name": "Kodok, segar (Frog, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 73,
    "protein": 16.4,
    "fat": 0.3,
    "carbs": 0
  },
  {
    "id": 646,
    "name": "Kokosan, segar (Langsat, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 86,
    "protein": 1.6,
    "fat": 0.2,
    "carbs": 13
  },
  {
    "id": 647,
    "name": "Komak polong, segar (Hyacinth bean)",
    "category": "grain",
    "type": "raw",
    "energy": 99,
    "protein": 3.3,
    "fat": 0.1,
    "carbs": 21.2
  },
  {
    "id": 648,
    "name": "Komak, segar (Hyacinth bean, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 99,
    "protein": 3.3,
    "fat": 0.1,
    "carbs": 21.2
  },
  {
    "id": 649,
    "name": "Kool kembang (Cauliflower, fresh/white headed cabbage, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 25,
    "protein": 2.4,
    "fat": 0.2,
    "carbs": 4.9
  },
  {
    "id": 650,
    "name": "Kool merah,kool putih (Cabbage, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 29,
    "protein": 1.4,
    "fat": 0.2,
    "carbs": 5.3
  },
  {
    "id": 651,
    "name": "Kopi bubuk instant (Coffee, instant)",
    "category": "pastry",
    "type": "processed",
    "energy": 129,
    "protein": 12.3,
    "fat": 0.5,
    "carbs": 35
  },
  {
    "id": 652,
    "name": "Koro andong, kering (Jack bean, dried)",
    "category": "grain",
    "type": "raw",
    "energy": 356,
    "protein": 20.5,
    "fat": 4.1,
    "carbs": 61.6
  },
  {
    "id": 653,
    "name": "Koro benguk, biji, kering (Hyacinth bean, seaded,dried)",
    "category": "grain",
    "type": "raw",
    "energy": 332,
    "protein": 24,
    "fat": 3,
    "carbs": 55
  },
  {
    "id": 654,
    "name": "Koro kerupuk, biji, segar (Hyacinth bean, seeded, fresh)",
    "category": "grain",
    "type": "raw",
    "energy": 125,
    "protein": 8.3,
    "fat": 0.7,
    "carbs": 22.1
  },
  {
    "id": 655,
    "name": "Koro kerupuk, polong (Lablab, hyacinth bean)",
    "category": "vegetable",
    "type": "raw",
    "energy": 128,
    "protein": 8.3,
    "fat": 0.7,
    "carbs": 22.1
  },
  {
    "id": 656,
    "name": "Koro loke, biji, segar",
    "category": "grain",
    "type": "raw",
    "energy": 33,
    "protein": 2.7,
    "fat": 0.2,
    "carbs": 7.9
  },
  {
    "id": 657,
    "name": "Koro roay, kering (Lima bean, dried)",
    "category": "grain",
    "type": "raw",
    "energy": 344,
    "protein": 12.5,
    "fat": 2.1,
    "carbs": 69.4
  },
  {
    "id": 658,
    "name": "Koro wedus, biji, kering (Hyacinth bean)",
    "category": "grain",
    "type": "raw",
    "energy": 338,
    "protein": 22.2,
    "fat": 1.5,
    "carbs": 61
  },
  {
    "id": 659,
    "name": "Koro wedus, polong",
    "category": "vegetable",
    "type": "raw",
    "energy": 46,
    "protein": 3,
    "fat": 0.3,
    "carbs": 7.9
  },
  {
    "id": 660,
    "name": "Kotiu hinela tawang nggole",
    "category": "vegetable",
    "type": "processed",
    "energy": 46,
    "protein": 2.2,
    "fat": 1.5,
    "carbs": 6
  },
  {
    "id": 661,
    "name": "Koya",
    "category": "cereal",
    "type": "processed",
    "energy": 366,
    "protein": 4.2,
    "fat": 4.3,
    "carbs": 77.5
  },
  {
    "id": 662,
    "name": "Koya mirasa",
    "category": "cereal",
    "type": "processed",
    "energy": 370,
    "protein": 8,
    "fat": 1,
    "carbs": 82.2
  },
  {
    "id": 663,
    "name": "Koyabu",
    "category": "cereal",
    "type": "processed",
    "energy": 241,
    "protein": 3.4,
    "fat": 4.3,
    "carbs": 47.2
  },
  {
    "id": 664,
    "name": "Kranji, segar (Sweet inga, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 315,
    "protein": 2.1,
    "fat": 1.4,
    "carbs": 73.5
  },
  {
    "id": 665,
    "name": "Kucai muda (Lokio), segar (Rakkyo, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 42,
    "protein": 3.8,
    "fat": 0.6,
    "carbs": 7.8
  },
  {
    "id": 666,
    "name": "Kucai, segar (Chinese chives, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 45,
    "protein": 2.2,
    "fat": 0.3,
    "carbs": 10.3
  },
  {
    "id": 667,
    "name": "Kuda, daging, segar (Horse, meat, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 113,
    "protein": 18.1,
    "fat": 4.1,
    "carbs": 0.9
  },
  {
    "id": 668,
    "name": "Kue ali",
    "category": "cereal",
    "type": "processed",
    "energy": 440,
    "protein": 3.8,
    "fat": 18.5,
    "carbs": 64.5
  },
  {
    "id": 669,
    "name": "Kue bangen",
    "category": "cereal",
    "type": "processed",
    "energy": 442,
    "protein": 3.3,
    "fat": 14.7,
    "carbs": 74.2
  },
  {
    "id": 670,
    "name": "Kue bangket",
    "category": "tuber",
    "type": "processed",
    "energy": 338,
    "protein": 1.5,
    "fat": 1.2,
    "carbs": 80.3
  },
  {
    "id": 671,
    "name": "Kue gelang",
    "category": "cereal",
    "type": "processed",
    "energy": 448,
    "protein": 5.8,
    "fat": 16.1,
    "carbs": 70
  },
  {
    "id": 672,
    "name": "Kue jahe",
    "category": "cereal",
    "type": "processed",
    "energy": 425,
    "protein": 1.6,
    "fat": 8.8,
    "carbs": 84.6
  },
  {
    "id": 673,
    "name": "Kue kelapa",
    "category": "cereal",
    "type": "processed",
    "energy": 591,
    "protein": 5.6,
    "fat": 42.1,
    "carbs": 47.5
  },
  {
    "id": 674,
    "name": "Kue koa",
    "category": "cereal",
    "type": "processed",
    "energy": 340,
    "protein": 4.8,
    "fat": 0.4,
    "carbs": 79.3
  },
  {
    "id": 675,
    "name": "Kue ku temu",
    "category": "cereal",
    "type": "processed",
    "energy": 214,
    "protein": 3.5,
    "fat": 0.2,
    "carbs": 49.6
  },
  {
    "id": 676,
    "name": "Kue lumpur",
    "category": "cereal",
    "type": "processed",
    "energy": 291,
    "protein": 3.6,
    "fat": 11.1,
    "carbs": 44.1
  },
  {
    "id": 677,
    "name": "Kue pelita",
    "category": "cereal",
    "type": "processed",
    "energy": 141,
    "protein": 5.3,
    "fat": 5.5,
    "carbs": 17.6
  },
  {
    "id": 678,
    "name": "Kue putu cangkir",
    "category": "cereal",
    "type": "processed",
    "energy": 304,
    "protein": 5.3,
    "fat": 7,
    "carbs": 54.9
  },
  {
    "id": 679,
    "name": "Kue putu singkong",
    "category": "tuber",
    "type": "processed",
    "energy": 217,
    "protein": 1.2,
    "fat": 0.5,
    "carbs": 53.2
  },
  {
    "id": 680,
    "name": "Kue sus",
    "category": "cereal",
    "type": "processed",
    "energy": 221,
    "protein": 7.5,
    "fat": 10.2,
    "carbs": 24.8
  },
  {
    "id": 681,
    "name": "Kue timphan",
    "category": "cereal",
    "type": "processed",
    "energy": 247,
    "protein": 2.9,
    "fat": 4.2,
    "carbs": 49.5
  },
  {
    "id": 682,
    "name": "Kulit melinjo (spanish joint fir, peel, fresh )",
    "category": "vegetable",
    "type": "raw",
    "energy": 111,
    "protein": 4.5,
    "fat": 1.1,
    "carbs": 20.7
  },
  {
    "id": 683,
    "name": "Kundur, segar (Wax gourd, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 22,
    "protein": 0.4,
    "fat": 0.2,
    "carbs": 4.7
  },
  {
    "id": 684,
    "name": "Kunyit, segar (Turmeric)",
    "category": "spice",
    "type": "raw",
    "energy": 69,
    "protein": 2,
    "fat": 2.7,
    "carbs": 9.1
  },
  {
    "id": 685,
    "name": "Kura-kura, segar (Turtles, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 83,
    "protein": 19.1,
    "fat": 0.2,
    "carbs": 0
  },
  {
    "id": 686,
    "name": "Kuro, segar (Threadfin, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 87,
    "protein": 16,
    "fat": 2.2,
    "carbs": 1
  },
  {
    "id": 687,
    "name": "Kwaci",
    "category": "grain",
    "type": "processed",
    "energy": 515,
    "protein": 30.6,
    "fat": 42.1,
    "carbs": 13.8
  },
  {
    "id": 688,
    "name": "Kwark (Quark)",
    "category": "milk",
    "type": "processed",
    "energy": 242,
    "protein": 19,
    "fat": 17,
    "carbs": 3
  },
  {
    "id": 689,
    "name": "Labu air, segar (Bottle gourd, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 19,
    "protein": 0.6,
    "fat": 0.2,
    "carbs": 3.8
  },
  {
    "id": 690,
    "name": "Labu kuning, segar (Pumpkin, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 51,
    "protein": 1.7,
    "fat": 0.5,
    "carbs": 10
  },
  {
    "id": 691,
    "name": "Labu siam, segar (Chayote, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 30,
    "protein": 0.6,
    "fat": 0.1,
    "carbs": 6.7
  },
  {
    "id": 692,
    "name": "Labu waluh, segar (Pumpkin, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 32,
    "protein": 1.1,
    "fat": 0.1,
    "carbs": 6.6
  },
  {
    "id": 693,
    "name": "Laksa/Putu mayang",
    "category": "cereal",
    "type": "processed",
    "energy": 121,
    "protein": 1.7,
    "fat": 3.4,
    "carbs": 21.1
  },
  {
    "id": 694,
    "name": "Lamtoro biji, muda, segar (White leadtree, inmature, fresh)",
    "category": "grain",
    "type": "raw",
    "energy": 85,
    "protein": 5.7,
    "fat": 0.3,
    "carbs": 15.4
  },
  {
    "id": 695,
    "name": "Lamtoro biji, tua, segar (White leadtree, mature, fresh)",
    "category": "grain",
    "type": "raw",
    "energy": 148,
    "protein": 10.6,
    "fat": 0.5,
    "carbs": 26.2
  },
  {
    "id": 696,
    "name": "Lamtoro var. gung tanpa kulit (White leadtree)",
    "category": "grain",
    "type": "raw",
    "energy": 367,
    "protein": 46.4,
    "fat": 5.4,
    "carbs": 32.5
  },
  {
    "id": 697,
    "name": "Lamtoro var. lokal dengan kulit (White leadtree)",
    "category": "grain",
    "type": "raw",
    "energy": 336,
    "protein": 23.8,
    "fat": 1.2,
    "carbs": 59.7
  },
  {
    "id": 698,
    "name": "Langsat, segar (Langsat, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 56,
    "protein": 0.9,
    "fat": 0.2,
    "carbs": 14.3
  },
  {
    "id": 699,
    "name": "Lantar, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 34,
    "protein": 2.2,
    "fat": 0.3,
    "carbs": 5.5
  },
  {
    "id": 700,
    "name": "Lanting getuk",
    "category": "tuber",
    "type": "processed",
    "energy": 422,
    "protein": 0.9,
    "fat": 10.8,
    "carbs": 80.4
  },
  {
    "id": 701,
    "name": "Lapis legit",
    "category": "cereal",
    "type": "processed",
    "energy": 389,
    "protein": 6.6,
    "fat": 15.7,
    "carbs": 55.5
  },
  {
    "id": 702,
    "name": "Lawar babi, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 174,
    "protein": 17,
    "fat": 10,
    "carbs": 3
  },
  {
    "id": 703,
    "name": "Lawar penyu, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 141,
    "protein": 23,
    "fat": 1.5,
    "carbs": 7.6
  },
  {
    "id": 704,
    "name": "Lawara jangang, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 159,
    "protein": 5,
    "fat": 10.9,
    "carbs": 10.1
  },
  {
    "id": 705,
    "name": "Lawara penjah",
    "category": "seafood",
    "type": "processed",
    "energy": 207,
    "protein": 7.4,
    "fat": 15.4,
    "carbs": 9.6
  },
  {
    "id": 706,
    "name": "Ledre pisang",
    "category": "fruit",
    "type": "processed",
    "energy": 405,
    "protein": 4.8,
    "fat": 5.1,
    "carbs": 84.9
  },
  {
    "id": 707,
    "name": "Lema/ Rebung asam",
    "category": "vegetable",
    "type": "processed",
    "energy": 15,
    "protein": 1,
    "fat": 0.4,
    "carbs": 1.9
  },
  {
    "id": 708,
    "name": "Lemak babi  (lard) (pork, fat, lord)",
    "category": "fat",
    "type": "raw",
    "energy": 902,
    "protein": 0,
    "fat": 100,
    "carbs": 0
  },
  {
    "id": 709,
    "name": "Lemak babi (bacon) (pork, fat, bacon)",
    "category": "fat",
    "type": "raw",
    "energy": 626,
    "protein": 9.1,
    "fat": 65,
    "carbs": 1.1
  },
  {
    "id": 710,
    "name": "Lemak ikan (Fish, fat)",
    "category": "fat",
    "type": "raw",
    "energy": 372,
    "protein": 12,
    "fat": 29.4,
    "carbs": 14.4
  },
  {
    "id": 711,
    "name": "Lemak kerbau (lemak sapi) (fat, buffalo)",
    "category": "fat",
    "type": "raw",
    "energy": 818,
    "protein": 1.5,
    "fat": 90,
    "carbs": 0
  },
  {
    "id": 712,
    "name": "Lemon, segar (Lemon, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 34,
    "protein": 0.5,
    "fat": 0.8,
    "carbs": 6.2
  },
  {
    "id": 713,
    "name": "Lempog durian",
    "category": "fruit",
    "type": "processed",
    "energy": 320,
    "protein": 3.5,
    "fat": 5.7,
    "carbs": 63.7
  },
  {
    "id": 714,
    "name": "Lepok/Ubi rumput",
    "category": "tuber",
    "type": "raw",
    "energy": 181,
    "protein": 2.8,
    "fat": 1.2,
    "carbs": 39.8
  },
  {
    "id": 715,
    "name": "Lilin bungkus gedi",
    "category": "vegetable",
    "type": "processed",
    "energy": 79,
    "protein": 2.3,
    "fat": 5.2,
    "carbs": 5.8
  },
  {
    "id": 716,
    "name": "Lobak, segar (Turnip, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 21,
    "protein": 0.9,
    "fat": 0.1,
    "carbs": 4.2
  },
  {
    "id": 717,
    "name": "Loka anjoro",
    "category": "fruit",
    "type": "processed",
    "energy": 163,
    "protein": 1.1,
    "fat": 4.3,
    "carbs": 30
  },
  {
    "id": 718,
    "name": "Lokan, segar",
    "category": "seafood",
    "type": "raw",
    "energy": 217,
    "protein": 11,
    "fat": 1.7,
    "carbs": 5.1
  },
  {
    "id": 719,
    "name": "Lontar, segar (Palmyra palm, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 27,
    "protein": 0.4,
    "fat": 0.2,
    "carbs": 6
  },
  {
    "id": 720,
    "name": "Lumai/Leunca, segar (Glossy nightshade, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 38,
    "protein": 1.1,
    "fat": 0.3,
    "carbs": 7.6
  },
  {
    "id": 721,
    "name": "Lupis ketan",
    "category": "cereal",
    "type": "processed",
    "energy": 164,
    "protein": 1.8,
    "fat": 2.1,
    "carbs": 34.5
  },
  {
    "id": 722,
    "name": "Madu (Honey)",
    "category": "pastry",
    "type": "processed",
    "energy": 294,
    "protein": 0.3,
    "fat": 0,
    "carbs": 79.5
  },
  {
    "id": 723,
    "name": "Maizena, tepung",
    "category": "cereal",
    "type": "processed",
    "energy": 341,
    "protein": 0.3,
    "fat": 0,
    "carbs": 85
  },
  {
    "id": 724,
    "name": "Makaroni, mentah",
    "category": "cereal",
    "type": "processed",
    "energy": 353,
    "protein": 8.7,
    "fat": 0.4,
    "carbs": 78.7
  },
  {
    "id": 725,
    "name": "Manan samin",
    "category": "cereal",
    "type": "processed",
    "energy": 379,
    "protein": 3.4,
    "fat": 18.1,
    "carbs": 50.6
  },
  {
    "id": 726,
    "name": "Mangga benggala, segar (Mango, benggala, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 63,
    "protein": 2.4,
    "fat": 0.4,
    "carbs": 12.4
  },
  {
    "id": 727,
    "name": "Mangga gedung, segar (Mango, gedung, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 44,
    "protein": 0.7,
    "fat": 0.2,
    "carbs": 11.2
  },
  {
    "id": 728,
    "name": "Mangga golek, segar (Mango, golek, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 63,
    "protein": 0.5,
    "fat": 0.2,
    "carbs": 16.7
  },
  {
    "id": 729,
    "name": "Mangga harumanis, segar (Mango, harumanis, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 46,
    "protein": 0.4,
    "fat": 0.2,
    "carbs": 11.9
  },
  {
    "id": 730,
    "name": "Mangga indramayu, segar (Mango, indramayu, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 72,
    "protein": 0.8,
    "fat": 0.2,
    "carbs": 18.7
  },
  {
    "id": 731,
    "name": "Mangga kopek, segar (Mango, kopek, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 56,
    "protein": 0.4,
    "fat": 0.2,
    "carbs": 14.6
  },
  {
    "id": 732,
    "name": "Mangga kwini, segar (Mango, kwini, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 86,
    "protein": 0.7,
    "fat": 0.5,
    "carbs": 19.8
  },
  {
    "id": 733,
    "name": "Mangga manalagi, segar (Mango, manalagi, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 133,
    "protein": 1,
    "fat": 0.1,
    "carbs": 32.1
  },
  {
    "id": 734,
    "name": "Mangga muda, segar (Mango, unripe, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 59,
    "protein": 0.5,
    "fat": 0.4,
    "carbs": 15.1
  },
  {
    "id": 735,
    "name": "Mangga, segar (Mango, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 52,
    "protein": 0.7,
    "fat": 0,
    "carbs": 12.3
  },
  {
    "id": 736,
    "name": "Manggis, segar (Mangosteen, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 63,
    "protein": 0.6,
    "fat": 0.6,
    "carbs": 15.6
  },
  {
    "id": 737,
    "name": "Margarin (Butter)",
    "category": "fat",
    "type": "processed",
    "energy": 720,
    "protein": 0.6,
    "fat": 81,
    "carbs": 0.4
  },
  {
    "id": 738,
    "name": "Markisa squash",
    "category": "pastry",
    "type": "processed",
    "energy": 217,
    "protein": 2.5,
    "fat": 1,
    "carbs": 49.6
  },
  {
    "id": 739,
    "name": "Markisa squash, BD (Squash, markisa)",
    "category": "pastry",
    "type": "processed",
    "energy": 104,
    "protein": 1.2,
    "fat": 0.5,
    "carbs": 23.7
  },
  {
    "id": 740,
    "name": "Markisa, segar (Giant Granadilla, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 144,
    "protein": 3.5,
    "fat": 1.2,
    "carbs": 29.8
  },
  {
    "id": 741,
    "name": "Martabak india",
    "category": "cereal",
    "type": "processed",
    "energy": 153,
    "protein": 4.5,
    "fat": 4.2,
    "carbs": 24.3
  },
  {
    "id": 742,
    "name": "Martabak mesir",
    "category": "cereal",
    "type": "processed",
    "energy": 278,
    "protein": 5.1,
    "fat": 8.6,
    "carbs": 45
  },
  {
    "id": 743,
    "name": "Masekat",
    "category": "cereal",
    "type": "processed",
    "energy": 369,
    "protein": 2.1,
    "fat": 7,
    "carbs": 74.1
  },
  {
    "id": 744,
    "name": "Matoa, segar (Matoa, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 90,
    "protein": 1.2,
    "fat": 0.1,
    "carbs": 21.1
  },
  {
    "id": 745,
    "name": "Melase",
    "category": "pastry",
    "type": "processed",
    "energy": 276,
    "protein": 0,
    "fat": 0.1,
    "carbs": 71
  },
  {
    "id": 746,
    "name": "Melinjo emping tebal goreng manis",
    "category": "grain",
    "type": "processed",
    "energy": 439,
    "protein": 10,
    "fat": 16.4,
    "carbs": 65.7
  },
  {
    "id": 747,
    "name": "Melinjo emping tebal, goreng asin",
    "category": "grain",
    "type": "processed",
    "energy": 431,
    "protein": 11.1,
    "fat": 16.2,
    "carbs": 63
  },
  {
    "id": 748,
    "name": "Melinjo emping tipis goreng",
    "category": "grain",
    "type": "processed",
    "energy": 485,
    "protein": 11.5,
    "fat": 24.5,
    "carbs": 59.1
  },
  {
    "id": 749,
    "name": "Melinjo, segar (spanish joint fir, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 66,
    "protein": 5,
    "fat": 0.7,
    "carbs": 13.3
  },
  {
    "id": 750,
    "name": "Melon, segar",
    "category": "fruit",
    "type": "raw",
    "energy": 37,
    "protein": 0.6,
    "fat": 0.4,
    "carbs": 7.8
  },
  {
    "id": 751,
    "name": "Menjangan, daging, dendeng, mentah",
    "category": "meat",
    "type": "processed",
    "energy": 322,
    "protein": 55.8,
    "fat": 2,
    "carbs": 22.7
  },
  {
    "id": 752,
    "name": "Mentega (Margarine)",
    "category": "fat",
    "type": "processed",
    "energy": 742,
    "protein": 0.5,
    "fat": 81.6,
    "carbs": 1.4
  },
  {
    "id": 753,
    "name": "Menteng, segar (Kepundung, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 65,
    "protein": 1.7,
    "fat": 0.3,
    "carbs": 16.1
  },
  {
    "id": 754,
    "name": "Merica, kering (Pepper)",
    "category": "spice",
    "type": "raw",
    "energy": 365,
    "protein": 11.5,
    "fat": 6.8,
    "carbs": 64.4
  },
  {
    "id": 755,
    "name": "Mi basah",
    "category": "cereal",
    "type": "processed",
    "energy": 88,
    "protein": 0.6,
    "fat": 3.3,
    "carbs": 14
  },
  {
    "id": 756,
    "name": "Mi golosor",
    "category": "tuber",
    "type": "processed",
    "energy": 71,
    "protein": 0.2,
    "fat": 0.8,
    "carbs": 15.9
  },
  {
    "id": 757,
    "name": "Mi kering",
    "category": "cereal",
    "type": "processed",
    "energy": 339,
    "protein": 10,
    "fat": 1.7,
    "carbs": 6.3
  },
  {
    "id": 758,
    "name": "Mie aceh rebus",
    "category": "cereal",
    "type": "processed",
    "energy": 113,
    "protein": 3,
    "fat": 3.2,
    "carbs": 18.1
  },
  {
    "id": 759,
    "name": "Mie ayam",
    "category": "cereal",
    "type": "processed",
    "energy": 102,
    "protein": 6.2,
    "fat": 3.9,
    "carbs": 10.5
  },
  {
    "id": 760,
    "name": "Mie bakso",
    "category": "cereal",
    "type": "processed",
    "energy": 114,
    "protein": 5.3,
    "fat": 3,
    "carbs": 16.4
  },
  {
    "id": 761,
    "name": "Mie Bendo",
    "category": "tuber",
    "type": "processed",
    "energy": 353,
    "protein": 0.3,
    "fat": 0,
    "carbs": 88
  },
  {
    "id": 762,
    "name": "Mie celon",
    "category": "cereal",
    "type": "processed",
    "energy": 102,
    "protein": 3,
    "fat": 2.1,
    "carbs": 17.8
  },
  {
    "id": 763,
    "name": "Mie pangsit basah",
    "category": "cereal",
    "type": "processed",
    "energy": 105,
    "protein": 5.9,
    "fat": 4.9,
    "carbs": 9.4
  },
  {
    "id": 764,
    "name": "Mie Sagu",
    "category": "tuber",
    "type": "processed",
    "energy": 190,
    "protein": 0.2,
    "fat": 0.4,
    "carbs": 46.5
  },
  {
    "id": 765,
    "name": "Minyak hiu, hati (shark, fish, liver, oil)",
    "category": "fat",
    "type": "raw",
    "energy": 902,
    "protein": 0,
    "fat": 100,
    "carbs": 0
  },
  {
    "id": 766,
    "name": "Minyak ikan (Fish, oil)",
    "category": "fat",
    "type": "raw",
    "energy": 902,
    "protein": 0,
    "fat": 100,
    "carbs": 0
  },
  {
    "id": 767,
    "name": "Minyak kacang tanah (Peanut oil)",
    "category": "fat",
    "type": "raw",
    "energy": 902,
    "protein": 0,
    "fat": 100,
    "carbs": 0
  },
  {
    "id": 768,
    "name": "Minyak kedelai (Soybean oil)",
    "category": "fat",
    "type": "raw",
    "energy": 883,
    "protein": 0,
    "fat": 99.9,
    "carbs": 0
  },
  {
    "id": 769,
    "name": "Minyak kelapa (Coconut oil)",
    "category": "fat",
    "type": "raw",
    "energy": 870,
    "protein": 1,
    "fat": 98,
    "carbs": 0
  },
  {
    "id": 770,
    "name": "Minyak kelapa sawit (Palm oil)",
    "category": "fat",
    "type": "raw",
    "energy": 884,
    "protein": 0,
    "fat": 100,
    "carbs": 0
  },
  {
    "id": 771,
    "name": "Minyak wijen (Sesame oil)",
    "category": "fat",
    "type": "raw",
    "energy": 881,
    "protein": 0.2,
    "fat": 99.7,
    "carbs": 0
  },
  {
    "id": 772,
    "name": "Minyak Zaitun (Olive oil)",
    "category": "fat",
    "type": "raw",
    "energy": 884,
    "protein": 0,
    "fat": 100,
    "carbs": 0
  },
  {
    "id": 773,
    "name": "Misoa",
    "category": "cereal",
    "type": "processed",
    "energy": 345,
    "protein": 8.5,
    "fat": 2.2,
    "carbs": 78
  },
  {
    "id": 774,
    "name": "Model, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 79,
    "protein": 2.2,
    "fat": 4,
    "carbs": 8.6
  },
  {
    "id": 775,
    "name": "Moon tahu",
    "category": "grain",
    "type": "processed",
    "energy": 128,
    "protein": 8,
    "fat": 10,
    "carbs": 1.3
  },
  {
    "id": 776,
    "name": "Mostarda metan -sawi (Indian mustard, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 33,
    "protein": 2.3,
    "fat": 0.5,
    "carbs": 4.7
  },
  {
    "id": 777,
    "name": "Mujahir acar kuning, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 330,
    "protein": 17.8,
    "fat": 23.4,
    "carbs": 12.1
  },
  {
    "id": 778,
    "name": "Naan maran sapi, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 478,
    "protein": 38.3,
    "fat": 33.9,
    "carbs": 5.1
  },
  {
    "id": 779,
    "name": "Nanas palembang, segar (Pineapple,palembang,  fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 58,
    "protein": 0.7,
    "fat": 0.2,
    "carbs": 13.3
  },
  {
    "id": 780,
    "name": "Nanas, segar (Pineapple, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 40,
    "protein": 0.6,
    "fat": 0.3,
    "carbs": 9.9
  },
  {
    "id": 781,
    "name": "Nangka masak pohon, segar (Jack fruit, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 106,
    "protein": 1.2,
    "fat": 0.3,
    "carbs": 27.6
  },
  {
    "id": 782,
    "name": "Nangka muda, segar (Jackfruit, young, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 57,
    "protein": 2,
    "fat": 0.4,
    "carbs": 11.3
  },
  {
    "id": 783,
    "name": "Nangka, biji, segar (Jackfruit, seed, fresh)",
    "category": "grain",
    "type": "raw",
    "energy": 165,
    "protein": 4.2,
    "fat": 0.1,
    "carbs": 36.7
  },
  {
    "id": 784,
    "name": "Nasi",
    "category": "cereal",
    "type": "processed",
    "energy": 180,
    "protein": 3,
    "fat": 0.3,
    "carbs": 39.8
  },
  {
    "id": 785,
    "name": "Nasi beras merah",
    "category": "cereal",
    "type": "processed",
    "energy": 149,
    "protein": 2.8,
    "fat": 0.4,
    "carbs": 32.5
  },
  {
    "id": 786,
    "name": "Nasi gemuk",
    "category": "cereal",
    "type": "processed",
    "energy": 192,
    "protein": 3.8,
    "fat": 8.8,
    "carbs": 24.4
  },
  {
    "id": 787,
    "name": "Nasi gurih",
    "category": "cereal",
    "type": "processed",
    "energy": 190,
    "protein": 4.7,
    "fat": 7.5,
    "carbs": 26
  },
  {
    "id": 788,
    "name": "Nasi jagung",
    "category": "cereal",
    "type": "processed",
    "energy": 357,
    "protein": 8.8,
    "fat": 0.5,
    "carbs": 79.5
  },
  {
    "id": 789,
    "name": "Nasi minyak",
    "category": "cereal",
    "type": "processed",
    "energy": 207,
    "protein": 3.5,
    "fat": 5,
    "carbs": 37.1
  },
  {
    "id": 790,
    "name": "Nasi rames",
    "category": "cereal",
    "type": "processed",
    "energy": 155,
    "protein": 10.3,
    "fat": 4.2,
    "carbs": 19.1
  },
  {
    "id": 791,
    "name": "Nasi tim",
    "category": "cereal",
    "type": "processed",
    "energy": 120,
    "protein": 2.4,
    "fat": 0.4,
    "carbs": 26
  },
  {
    "id": 792,
    "name": "Nasu likku, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 196,
    "protein": 14.5,
    "fat": 8.3,
    "carbs": 15.9
  },
  {
    "id": 793,
    "name": "Nopia spesial",
    "category": "cereal",
    "type": "processed",
    "energy": 387,
    "protein": 5.3,
    "fat": 7.6,
    "carbs": 74.3
  },
  {
    "id": 794,
    "name": "Olah-olah",
    "category": "vegetable",
    "type": "processed",
    "energy": 9,
    "protein": 2.1,
    "fat": 6,
    "carbs": 7.1
  },
  {
    "id": 795,
    "name": "Oncom",
    "category": "grain",
    "type": "processed",
    "energy": 187,
    "protein": 13,
    "fat": 6,
    "carbs": 22.6
  },
  {
    "id": 796,
    "name": "Oncom ampas kacang hijau",
    "category": "grain",
    "type": "processed",
    "energy": 376,
    "protein": 14.9,
    "fat": 6,
    "carbs": 65.7
  },
  {
    "id": 797,
    "name": "Oncom kacang hijau + singkong",
    "category": "grain",
    "type": "processed",
    "energy": 351,
    "protein": 11,
    "fat": 5.3,
    "carbs": 65.9
  },
  {
    "id": 798,
    "name": "Oncom kacang tanah pepes",
    "category": "grain",
    "type": "processed",
    "energy": 132,
    "protein": 12.7,
    "fat": 3.8,
    "carbs": 13.7
  },
  {
    "id": 799,
    "name": "Onde-onde",
    "category": "cereal",
    "type": "processed",
    "energy": 336,
    "protein": 4,
    "fat": 9.8,
    "carbs": 57.9
  },
  {
    "id": 800,
    "name": "Ongol-ongol sagu",
    "category": "tuber",
    "type": "processed",
    "energy": 111,
    "protein": 0.3,
    "fat": 2.7,
    "carbs": 21.2
  },
  {
    "id": 801,
    "name": "Oramu ninahu ndawa olaho, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 117,
    "protein": 13.7,
    "fat": 5,
    "carbs": 4.3
  },
  {
    "id": 802,
    "name": "Oyek",
    "category": "tuber",
    "type": "processed",
    "energy": 351,
    "protein": 0.9,
    "fat": 0.9,
    "carbs": 84.9
  },
  {
    "id": 803,
    "name": "Padamaran",
    "category": "cereal",
    "type": "processed",
    "energy": 171,
    "protein": 3.9,
    "fat": 8.9,
    "carbs": 18.8
  },
  {
    "id": 804,
    "name": "Paku hinela wulelenggapaya",
    "category": "vegetable",
    "type": "processed",
    "energy": 77,
    "protein": 3.5,
    "fat": 4.6,
    "carbs": 5.4
  },
  {
    "id": 805,
    "name": "Pala, biji, kering (Nutmeg)",
    "category": "spice",
    "type": "raw",
    "energy": 518,
    "protein": 7.5,
    "fat": 36.4,
    "carbs": 40.1
  },
  {
    "id": 806,
    "name": "Pala, daging, segar (Nutmeg, flesh, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 42,
    "protein": 0.3,
    "fat": 0.2,
    "carbs": 10.9
  },
  {
    "id": 807,
    "name": "Paniki masak santan, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 460,
    "protein": 28.5,
    "fat": 35.2,
    "carbs": 7.2
  },
  {
    "id": 808,
    "name": "Papeda",
    "category": "tuber",
    "type": "processed",
    "energy": 61,
    "protein": 0.2,
    "fat": 0.1,
    "carbs": 14.9
  },
  {
    "id": 809,
    "name": "Parede baleh, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 87,
    "protein": 10.5,
    "fat": 2.5,
    "carbs": 5.5
  },
  {
    "id": 810,
    "name": "Paria putih, kukus",
    "category": "vegetable",
    "type": "processed",
    "energy": 16,
    "protein": 0.8,
    "fat": 0.2,
    "carbs": 3.4
  },
  {
    "id": 811,
    "name": "Paria putih, segar (Bitter guard, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 19,
    "protein": 1,
    "fat": 0.4,
    "carbs": 3.6
  },
  {
    "id": 812,
    "name": "Pastel",
    "category": "cereal",
    "type": "processed",
    "energy": 307,
    "protein": 4.5,
    "fat": 13.3,
    "carbs": 42.4
  },
  {
    "id": 813,
    "name": "Pelecing kangkung",
    "category": "vegetable",
    "type": "processed",
    "energy": 75,
    "protein": 2.5,
    "fat": 2.8,
    "carbs": 10
  },
  {
    "id": 814,
    "name": "Pelolah manuk, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 219,
    "protein": 19.7,
    "fat": 13.6,
    "carbs": 4.4
  },
  {
    "id": 815,
    "name": "Pempek adaan, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 162,
    "protein": 4.9,
    "fat": 3,
    "carbs": 27.8
  },
  {
    "id": 816,
    "name": "Pempek belida, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 156,
    "protein": 4.2,
    "fat": 1.4,
    "carbs": 31.6
  },
  {
    "id": 817,
    "name": "Pempek kapal selam, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 152,
    "protein": 4.5,
    "fat": 2.3,
    "carbs": 28.2
  },
  {
    "id": 818,
    "name": "Pempek kelesan, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 211,
    "protein": 12.3,
    "fat": 6.1,
    "carbs": 26.6
  },
  {
    "id": 819,
    "name": "Pempek kulit, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 243,
    "protein": 5.2,
    "fat": 7.3,
    "carbs": 39.1
  },
  {
    "id": 820,
    "name": "Pempek telur, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 156,
    "protein": 4.7,
    "fat": 2.7,
    "carbs": 28.3
  },
  {
    "id": 821,
    "name": "Pempek tenggiri, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 173,
    "protein": 7.2,
    "fat": 1.2,
    "carbs": 33.4
  },
  {
    "id": 822,
    "name": "Pencok lele, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 372,
    "protein": 7.8,
    "fat": 36.3,
    "carbs": 3.5
  },
  {
    "id": 823,
    "name": "Penyu, serapah, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 174,
    "protein": 13.1,
    "fat": 12.2,
    "carbs": 2.2
  },
  {
    "id": 824,
    "name": "Pepare ular, segar (Snake gourd, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 19,
    "protein": 0.6,
    "fat": 0.1,
    "carbs": 3.9
  },
  {
    "id": 825,
    "name": "Pepaya muda, segar (Papaya, unripe, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 29,
    "protein": 2.1,
    "fat": 0.1,
    "carbs": 4.9
  },
  {
    "id": 826,
    "name": "Pepaya, segar (Papaya, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 46,
    "protein": 0.5,
    "fat": 0.1,
    "carbs": 12.2
  },
  {
    "id": 827,
    "name": "Pepea oncom ampas tahu",
    "category": "grain",
    "type": "processed",
    "energy": 76,
    "protein": 5.2,
    "fat": 1.8,
    "carbs": 10.6
  },
  {
    "id": 828,
    "name": "Petai, segar (Stinky bean, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 92,
    "protein": 5.4,
    "fat": 1.1,
    "carbs": 15.2
  },
  {
    "id": 829,
    "name": "Peterseli, segar (Parsley, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 53,
    "protein": 3.7,
    "fat": 1,
    "carbs": 9
  },
  {
    "id": 830,
    "name": "Petis ikan (fish,fermented, paste (petis))",
    "category": "spice",
    "type": "processed",
    "energy": 165,
    "protein": 20,
    "fat": 0.2,
    "carbs": 20.8
  },
  {
    "id": 831,
    "name": "Petis udang kering (shrimp, fermented, dried (petis))",
    "category": "spice",
    "type": "processed",
    "energy": 345,
    "protein": 23.8,
    "fat": 1.4,
    "carbs": 59.3
  },
  {
    "id": 832,
    "name": "Petis udang pasta (shrimp, fermented, paste (petis))",
    "category": "spice",
    "type": "processed",
    "energy": 220,
    "protein": 15,
    "fat": 0.9,
    "carbs": 38
  },
  {
    "id": 833,
    "name": "Pinda",
    "category": "seafood",
    "type": "processed",
    "energy": 107,
    "protein": 15.9,
    "fat": 0.6,
    "carbs": 0.4
  },
  {
    "id": 834,
    "name": "Pindang kenari, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 124,
    "protein": 9.5,
    "fat": 9.6,
    "carbs": 0
  },
  {
    "id": 835,
    "name": "Pisang ambon, segar (Banana, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 108,
    "protein": 1,
    "fat": 0.8,
    "carbs": 24.3
  },
  {
    "id": 836,
    "name": "Pisang angleng (pisang ampyang), segar (Banana, ampyang, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 68,
    "protein": 1.3,
    "fat": 0.2,
    "carbs": 17.2
  },
  {
    "id": 837,
    "name": "Pisang ayam, segar (Banana, ayam, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 120,
    "protein": 1.1,
    "fat": 0.2,
    "carbs": 26.8
  },
  {
    "id": 838,
    "name": "Pisang gapi, segar  (Banana, gapi, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 131,
    "protein": 1.6,
    "fat": 0.1,
    "carbs": 31.1
  },
  {
    "id": 839,
    "name": "Pisang goroho, segar (Banana, goroho, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 119,
    "protein": 1.5,
    "fat": 0.2,
    "carbs": 27.9
  },
  {
    "id": 840,
    "name": "Pisang hijau, segar (Banana, hijau, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 121,
    "protein": 1,
    "fat": 0.1,
    "carbs": 28.9
  },
  {
    "id": 841,
    "name": "Pisang kayu, segar (Banana, kayu, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 100,
    "protein": 1.4,
    "fat": 0.5,
    "carbs": 23.6
  },
  {
    "id": 842,
    "name": "Pisang kepok, segar (Banana, kepok, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 109,
    "protein": 0.8,
    "fat": 0.5,
    "carbs": 26.3
  },
  {
    "id": 843,
    "name": "Pisang ketip, segar (Banana, ketip, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 145,
    "protein": 1.1,
    "fat": 0.3,
    "carbs": 34.5
  },
  {
    "id": 844,
    "name": "Pisang kidang, segar (Banana, kidang, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 96,
    "protein": 1,
    "fat": 0.2,
    "carbs": 22.5
  },
  {
    "id": 845,
    "name": "Pisang lampung, segar (Banana, lamoung, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 99,
    "protein": 1.3,
    "fat": 0.2,
    "carbs": 25.6
  },
  {
    "id": 846,
    "name": "Pisang mas bali ampenan, segar  (Banana, mas bali ampenan, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 92,
    "protein": 1.4,
    "fat": 0.2,
    "carbs": 21
  },
  {
    "id": 847,
    "name": "Pisang mas bali kopang, segar (Banana, mas bali, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 127,
    "protein": 1.4,
    "fat": 0.2,
    "carbs": 31.8
  },
  {
    "id": 848,
    "name": "Pisang mas, segar (Banana, mas, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 127,
    "protein": 1.4,
    "fat": 0.2,
    "carbs": 33.6
  },
  {
    "id": 849,
    "name": "Pisang raja sereh, segar (Banana raja sereh, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 108,
    "protein": 1.3,
    "fat": 0.3,
    "carbs": 28.2
  },
  {
    "id": 850,
    "name": "Pisang raja, segar (Banana raja, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 120,
    "protein": 1.2,
    "fat": 0.2,
    "carbs": 31.8
  },
  {
    "id": 851,
    "name": "Pisang rotan, segar (Banana, rotan, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 98,
    "protein": 1.3,
    "fat": 1.2,
    "carbs": 20.5
  },
  {
    "id": 852,
    "name": "Pisang talas, segar (Banana, talas, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 113,
    "protein": 1.2,
    "fat": 0.2,
    "carbs": 26.7
  },
  {
    "id": 853,
    "name": "Pisang tujuh bulan (Banana)",
    "category": "fruit",
    "type": "raw",
    "energy": 94,
    "protein": 0.6,
    "fat": 0.2,
    "carbs": 22.5
  },
  {
    "id": 854,
    "name": "Pisang ua, segar (Banana, ua. Fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 128,
    "protein": 0.8,
    "fat": 0.5,
    "carbs": 30.2
  },
  {
    "id": 855,
    "name": "Pisang uli, segar (Banana, uli, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 134,
    "protein": 1.1,
    "fat": 0.5,
    "carbs": 35.5
  },
  {
    "id": 856,
    "name": "Pucuk lumai/daun leunca, segar (Glossy nightshade, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 33,
    "protein": 4.5,
    "fat": 0.4,
    "carbs": 2.8
  },
  {
    "id": 857,
    "name": "Pulut",
    "category": "cereal",
    "type": "processed",
    "energy": 216,
    "protein": 2.6,
    "fat": 3.1,
    "carbs": 44.4
  },
  {
    "id": 858,
    "name": "Punai, daging, goreng",
    "category": "meat",
    "type": "processed",
    "energy": 224,
    "protein": 26.2,
    "fat": 11.3,
    "carbs": 4.4
  },
  {
    "id": 859,
    "name": "Pundut nasi",
    "category": "cereal",
    "type": "processed",
    "energy": 104,
    "protein": 1.9,
    "fat": 4.1,
    "carbs": 15.1
  },
  {
    "id": 860,
    "name": "Purundawa",
    "category": "vegetable",
    "type": "processed",
    "energy": 25,
    "protein": 1.5,
    "fat": 0.5,
    "carbs": 3.6
  },
  {
    "id": 861,
    "name": "Purut, segar (Lime, wild (Purut))",
    "category": "fruit",
    "type": "raw",
    "energy": 76,
    "protein": 4.1,
    "fat": 1.1,
    "carbs": 15.2
  },
  {
    "id": 862,
    "name": "Putri hijau",
    "category": "cereal",
    "type": "processed",
    "energy": 189,
    "protein": 5.4,
    "fat": 2.1,
    "carbs": 37.2
  },
  {
    "id": 863,
    "name": "Putri malu, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 76,
    "protein": 3.6,
    "fat": 0.3,
    "carbs": 14.6
  },
  {
    "id": 864,
    "name": "Putri selat",
    "category": "cereal",
    "type": "processed",
    "energy": 163,
    "protein": 2.2,
    "fat": 6.5,
    "carbs": 23.8
  },
  {
    "id": 865,
    "name": "Putu sopa",
    "category": "cereal",
    "type": "processed",
    "energy": 215,
    "protein": 3.3,
    "fat": 4.1,
    "carbs": 41.1
  },
  {
    "id": 866,
    "name": "Rajungan, segar",
    "category": "seafood",
    "type": "raw",
    "energy": 76,
    "protein": 12.1,
    "fat": 2,
    "carbs": 2.4
  },
  {
    "id": 867,
    "name": "Rambutan binjai, segar (Rambutan)",
    "category": "fruit",
    "type": "raw",
    "energy": 76,
    "protein": 0.5,
    "fat": 0.2,
    "carbs": 18
  },
  {
    "id": 868,
    "name": "Rambutan, segar (Rambutan)",
    "category": "fruit",
    "type": "raw",
    "energy": 69,
    "protein": 0.9,
    "fat": 0.1,
    "carbs": 18.1
  },
  {
    "id": 869,
    "name": "Rasbi (Beras Ubi)",
    "category": "tuber",
    "type": "processed",
    "energy": 394,
    "protein": 2.2,
    "fat": 8.8,
    "carbs": 76.6
  },
  {
    "id": 870,
    "name": "Rasi (Beras Singkong)",
    "category": "tuber",
    "type": "processed",
    "energy": 350,
    "protein": 0.9,
    "fat": 0.4,
    "carbs": 85.7
  },
  {
    "id": 871,
    "name": "Rawon, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 60,
    "protein": 5.4,
    "fat": 2.5,
    "carbs": 4
  },
  {
    "id": 872,
    "name": "Rebon, kering, mentah",
    "category": "seafood",
    "type": "processed",
    "energy": 299,
    "protein": 59.4,
    "fat": 3.6,
    "carbs": 3.2
  },
  {
    "id": 873,
    "name": "Rebon, udang kecil, segar",
    "category": "seafood",
    "type": "raw",
    "energy": 81,
    "protein": 16.2,
    "fat": 1.2,
    "carbs": 0.7
  },
  {
    "id": 874,
    "name": "Rebung laut, mentah",
    "category": "seafood",
    "type": "processed",
    "energy": 320,
    "protein": 7.2,
    "fat": 4.2,
    "carbs": 63.3
  },
  {
    "id": 875,
    "name": "Rebung, segar (Bamboo shoot, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 25,
    "protein": 0.8,
    "fat": 0.1,
    "carbs": 5.3
  },
  {
    "id": 876,
    "name": "Rempeyek kacang tanah",
    "category": "grain",
    "type": "processed",
    "energy": 513,
    "protein": 17.5,
    "fat": 32.5,
    "carbs": 44.3
  },
  {
    "id": 877,
    "name": "Rempeyek kacang tolo",
    "category": "grain",
    "type": "processed",
    "energy": 451,
    "protein": 11.2,
    "fat": 20.2,
    "carbs": 59.7
  },
  {
    "id": 878,
    "name": "Rempeyek kacang uci",
    "category": "grain",
    "type": "processed",
    "energy": 497,
    "protein": 17,
    "fat": 27.6,
    "carbs": 50.8
  },
  {
    "id": 879,
    "name": "Rendang sapi, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 193,
    "protein": 22.6,
    "fat": 7.9,
    "carbs": 7.8
  },
  {
    "id": 880,
    "name": "Renggi goreng",
    "category": "cereal",
    "type": "processed",
    "energy": 471,
    "protein": 4.7,
    "fat": 21.8,
    "carbs": 64.1
  },
  {
    "id": 881,
    "name": "Rica-rica taipa",
    "category": "fruit",
    "type": "processed",
    "energy": 49,
    "protein": 1.6,
    "fat": 0.3,
    "carbs": 10
  },
  {
    "id": 882,
    "name": "Rimbang, segar (Devil\u2019ss fig, plate brush)",
    "category": "vegetable",
    "type": "raw",
    "energy": 75,
    "protein": 1.6,
    "fat": 0.6,
    "carbs": 15.8
  },
  {
    "id": 883,
    "name": "Roti boong",
    "category": "cereal",
    "type": "processed",
    "energy": 341,
    "protein": 5.5,
    "fat": 16.2,
    "carbs": 43.3
  },
  {
    "id": 884,
    "name": "Roti putih",
    "category": "cereal",
    "type": "processed",
    "energy": 248,
    "protein": 8,
    "fat": 1.2,
    "carbs": 50
  },
  {
    "id": 885,
    "name": "Roti warna sawo matang",
    "category": "cereal",
    "type": "processed",
    "energy": 249,
    "protein": 7.9,
    "fat": 1.5,
    "carbs": 49.7
  },
  {
    "id": 886,
    "name": "Rujak aceh",
    "category": "fruit",
    "type": "processed",
    "energy": 82,
    "protein": 0.4,
    "fat": 0.3,
    "carbs": 19.7
  },
  {
    "id": 887,
    "name": "Rujak cingur",
    "category": "vegetable",
    "type": "processed",
    "energy": 153,
    "protein": 11.3,
    "fat": 8.4,
    "carbs": 8
  },
  {
    "id": 888,
    "name": "Rumput laut (Seaweed)",
    "category": "vegetable",
    "type": "raw",
    "energy": 41,
    "protein": 1.4,
    "fat": 0.3,
    "carbs": 8.1
  },
  {
    "id": 889,
    "name": "Rusa, daging, dendeng, mentah",
    "category": "meat",
    "type": "processed",
    "energy": 536,
    "protein": 40.5,
    "fat": 41.5,
    "carbs": 0
  },
  {
    "id": 890,
    "name": "Rusip",
    "category": "seafood",
    "type": "raw",
    "energy": 110,
    "protein": 11.5,
    "fat": 2,
    "carbs": 11.7
  },
  {
    "id": 891,
    "name": "RW, anjing, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 198,
    "protein": 24.6,
    "fat": 10.7,
    "carbs": 0.9
  },
  {
    "id": 892,
    "name": "Saboko gurita, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 87,
    "protein": 15.7,
    "fat": 1.5,
    "carbs": 2.6
  },
  {
    "id": 893,
    "name": "Saboko saltan, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 113,
    "protein": 17.1,
    "fat": 3.6,
    "carbs": 3
  },
  {
    "id": 894,
    "name": "Saboko sardin, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 110,
    "protein": 12.9,
    "fat": 4.3,
    "carbs": 4.9
  },
  {
    "id": 895,
    "name": "Saga merah terkupas, kering (Red sandalwood, peeled)",
    "category": "grain",
    "type": "raw",
    "energy": 449,
    "protein": 30.6,
    "fat": 25.5,
    "carbs": 31.9
  },
  {
    "id": 896,
    "name": "Sagu aren, kering (Sugar palm, dried)",
    "category": "tuber",
    "type": "raw",
    "energy": 355,
    "protein": 0.6,
    "fat": 1.1,
    "carbs": 85.6
  },
  {
    "id": 897,
    "name": "Sagu aren, segar (Sugar palm, fresh)",
    "category": "tuber",
    "type": "raw",
    "energy": 231,
    "protein": 0.6,
    "fat": 0.2,
    "carbs": 56.6
  },
  {
    "id": 898,
    "name": "Sagu forno",
    "category": "tuber",
    "type": "processed",
    "energy": 291,
    "protein": 0.5,
    "fat": 4,
    "carbs": 63.4
  },
  {
    "id": 899,
    "name": "Sagu kasbi segar (Cassava  starch, fresh)",
    "category": "tuber",
    "type": "raw",
    "energy": 230,
    "protein": 0.6,
    "fat": 0.2,
    "carbs": 56.5
  },
  {
    "id": 900,
    "name": "Sagu Lemak (Kue Sagon)",
    "category": "tuber",
    "type": "processed",
    "energy": 452,
    "protein": 2.8,
    "fat": 14.8,
    "carbs": 76.8
  },
  {
    "id": 901,
    "name": "Sagu lempeng (Sago palm)",
    "category": "tuber",
    "type": "raw",
    "energy": 347,
    "protein": 0.9,
    "fat": 0.3,
    "carbs": 85.2
  },
  {
    "id": 902,
    "name": "Sagu manis",
    "category": "tuber",
    "type": "processed",
    "energy": 287,
    "protein": 0.5,
    "fat": 3.9,
    "carbs": 62.4
  },
  {
    "id": 903,
    "name": "Sagu Rendang",
    "category": "tuber",
    "type": "processed",
    "energy": 364,
    "protein": 0.1,
    "fat": 0.2,
    "carbs": 90.5
  },
  {
    "id": 904,
    "name": "Sagu singkong, kering (Cassava, starch, dried)",
    "category": "tuber",
    "type": "raw",
    "energy": 362,
    "protein": 0.5,
    "fat": 0.3,
    "carbs": 86.9
  },
  {
    "id": 905,
    "name": "Sagu sinole",
    "category": "tuber",
    "type": "processed",
    "energy": 354,
    "protein": 0.8,
    "fat": 8.3,
    "carbs": 68.9
  },
  {
    "id": 906,
    "name": "Salak bali, segar (snake fruit, bali,fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 57,
    "protein": 0.5,
    "fat": 0.1,
    "carbs": 13.6
  },
  {
    "id": 907,
    "name": "Salak medan, segar (snake fruit, medan, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 55,
    "protein": 0.4,
    "fat": 0.2,
    "carbs": 12.8
  },
  {
    "id": 908,
    "name": "Salak pondoh, segar (snake fruit, pondoh, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 87,
    "protein": 0.8,
    "fat": 0.4,
    "carbs": 20.1
  },
  {
    "id": 909,
    "name": "Salak, segar (snake fruit, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 77,
    "protein": 0.4,
    "fat": 0,
    "carbs": 20.9
  },
  {
    "id": 910,
    "name": "Sale kesemek",
    "category": "fruit",
    "type": "processed",
    "energy": 296,
    "protein": 1.1,
    "fat": 0.6,
    "carbs": 71.4
  },
  {
    "id": 911,
    "name": "Sale pisang siam",
    "category": "fruit",
    "type": "processed",
    "energy": 281,
    "protein": 2.4,
    "fat": 0.7,
    "carbs": 66.1
  },
  {
    "id": 912,
    "name": "Sale pisang, cilacap",
    "category": "fruit",
    "type": "processed",
    "energy": 295,
    "protein": 2.3,
    "fat": 2.1,
    "carbs": 66.9
  },
  {
    "id": 913,
    "name": "Sanggara belanda",
    "category": "fruit",
    "type": "processed",
    "energy": 242,
    "protein": 6.4,
    "fat": 7.1,
    "carbs": 38.2
  },
  {
    "id": 914,
    "name": "Santan (dengan air) (Coconut milk mixed with water)",
    "category": "fat",
    "type": "processed",
    "energy": 122,
    "protein": 2,
    "fat": 10,
    "carbs": 7.6
  },
  {
    "id": 915,
    "name": "Santan murni (Coconut milk, pured)",
    "category": "fat",
    "type": "processed",
    "energy": 324,
    "protein": 4.2,
    "fat": 34.3,
    "carbs": 5.6
  },
  {
    "id": 916,
    "name": "Saos tomat (Tomato, sauce)",
    "category": "spice",
    "type": "processed",
    "energy": 110,
    "protein": 2,
    "fat": 0.4,
    "carbs": 24.5
  },
  {
    "id": 917,
    "name": "Sapi, abon",
    "category": "meat",
    "type": "processed",
    "energy": 212,
    "protein": 18,
    "fat": 10.6,
    "carbs": 59.3
  },
  {
    "id": 918,
    "name": "Sapi, abon, asli",
    "category": "meat",
    "type": "processed",
    "energy": 358,
    "protein": 14.6,
    "fat": 16.1,
    "carbs": 38.6
  },
  {
    "id": 919,
    "name": "Sapi, babat, segar (Tripe, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 108,
    "protein": 17.6,
    "fat": 4.2,
    "carbs": 0
  },
  {
    "id": 920,
    "name": "Sapi, daging, asap",
    "category": "meat",
    "type": "processed",
    "energy": 182,
    "protein": 32,
    "fat": 6,
    "carbs": 0
  },
  {
    "id": 921,
    "name": "Sapi, daging, dendeng, mentah",
    "category": "meat",
    "type": "processed",
    "energy": 301,
    "protein": 55,
    "fat": 9,
    "carbs": 0
  },
  {
    "id": 922,
    "name": "Sapi, daging, gemuk, segar (Beef, high fat, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 273,
    "protein": 17.5,
    "fat": 22,
    "carbs": 0
  },
  {
    "id": 923,
    "name": "Sapi, daging, kornet",
    "category": "meat",
    "type": "processed",
    "energy": 289,
    "protein": 16,
    "fat": 25,
    "carbs": 0
  },
  {
    "id": 924,
    "name": "Sapi, daging, kurus, segar (Beef, low fat, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 174,
    "protein": 19.6,
    "fat": 10,
    "carbs": 0
  },
  {
    "id": 925,
    "name": "Sapi, daging, lemak sedang, segar (Beef, medium fat, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 201,
    "protein": 18.8,
    "fat": 14,
    "carbs": 0
  },
  {
    "id": 926,
    "name": "Sapi, daging, sosis (Worst)",
    "category": "meat",
    "type": "processed",
    "energy": 448,
    "protein": 14.5,
    "fat": 42.3,
    "carbs": 2.3
  },
  {
    "id": 927,
    "name": "Sapi, daleman, segar (Offal, beef, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 183,
    "protein": 12,
    "fat": 14.4,
    "carbs": 1.4
  },
  {
    "id": 928,
    "name": "Sapi, dideh/darah (Black puding (cow's blood), fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 98,
    "protein": 21.9,
    "fat": 1.1,
    "carbs": 0
  },
  {
    "id": 929,
    "name": "Sapi, ginjal, segar (Kidney, beef, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 137,
    "protein": 15,
    "fat": 8.1,
    "carbs": 0.9
  },
  {
    "id": 930,
    "name": "Sapi, hati, sosis (liverworst)",
    "category": "meat",
    "type": "processed",
    "energy": 274,
    "protein": 16,
    "fat": 22,
    "carbs": 3
  },
  {
    "id": 931,
    "name": "Sapi, keleponan, segar (Tripe, beef, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 84,
    "protein": 10.5,
    "fat": 4.6,
    "carbs": 0.2
  },
  {
    "id": 932,
    "name": "Sapi, liver, segar (Liver, beef, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 132,
    "protein": 19.7,
    "fat": 3.2,
    "carbs": 6
  },
  {
    "id": 933,
    "name": "Sapi, otak, segar (Brain, beef, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 123,
    "protein": 10.4,
    "fat": 8.6,
    "carbs": 0.8
  },
  {
    "id": 934,
    "name": "Sapi, paru, dendeng, mentah",
    "category": "meat",
    "type": "processed",
    "energy": 360,
    "protein": 57.3,
    "fat": 6,
    "carbs": 19.2
  },
  {
    "id": 935,
    "name": "Sapi, paru, goreng",
    "category": "meat",
    "type": "processed",
    "energy": 268,
    "protein": 23.9,
    "fat": 12.7,
    "carbs": 14.5
  },
  {
    "id": 936,
    "name": "Sapi, usus, segar",
    "category": "meat",
    "type": "raw",
    "energy": 126,
    "protein": 14,
    "fat": 7.2,
    "carbs": 1.5
  },
  {
    "id": 937,
    "name": "Sardines dalam kaleng",
    "category": "seafood",
    "type": "processed",
    "energy": 338,
    "protein": 21.1,
    "fat": 27,
    "carbs": 1
  },
  {
    "id": 938,
    "name": "Saridele, bubuk",
    "category": "grain",
    "type": "processed",
    "energy": 344,
    "protein": 30,
    "fat": 20,
    "carbs": 43
  },
  {
    "id": 939,
    "name": "Sarimuka",
    "category": "cereal",
    "type": "processed",
    "energy": 166,
    "protein": 2.3,
    "fat": 2.8,
    "carbs": 32.9
  },
  {
    "id": 940,
    "name": "Sate Bandeng",
    "category": "seafood",
    "type": "processed",
    "energy": 283,
    "protein": 12.1,
    "fat": 16.8,
    "carbs": 20.9
  },
  {
    "id": 941,
    "name": "Sate pusut, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 274,
    "protein": 12.9,
    "fat": 18.6,
    "carbs": 13.6
  },
  {
    "id": 942,
    "name": "Sate, penyu, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 179,
    "protein": 22.5,
    "fat": 3.5,
    "carbs": 13.3
  },
  {
    "id": 943,
    "name": "Sawi putih / pecai, segar (Pak choi, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 9,
    "protein": 1,
    "fat": 0.1,
    "carbs": 1.7
  },
  {
    "id": 944,
    "name": "Sawi taiwan, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 30,
    "protein": 1.9,
    "fat": 0.5,
    "carbs": 4.4
  },
  {
    "id": 945,
    "name": "Sawi tanah, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 19,
    "protein": 1.3,
    "fat": 0.2,
    "carbs": 2.9
  },
  {
    "id": 946,
    "name": "Sawi, segar (Chinese mustard, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 28,
    "protein": 2.3,
    "fat": 0.3,
    "carbs": 4
  },
  {
    "id": 947,
    "name": "Sawo duren, segar (Sapodilla, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 64,
    "protein": 1,
    "fat": 3.1,
    "carbs": 8
  },
  {
    "id": 948,
    "name": "Sawo kecik, segar (Sapodilla, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 111,
    "protein": 0.9,
    "fat": 2.3,
    "carbs": 21.6
  },
  {
    "id": 949,
    "name": "Sawo Manila, segar (Sapodilla, manila, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 92,
    "protein": 0.5,
    "fat": 1.1,
    "carbs": 22.4
  },
  {
    "id": 950,
    "name": "Sayur asem",
    "category": "vegetable",
    "type": "processed",
    "energy": 29,
    "protein": 0.7,
    "fat": 0.6,
    "carbs": 5
  },
  {
    "id": 951,
    "name": "Sayur bunga pepaya",
    "category": "vegetable",
    "type": "processed",
    "energy": 49,
    "protein": 1.7,
    "fat": 0.3,
    "carbs": 9.8
  },
  {
    "id": 952,
    "name": "Sayur garu",
    "category": "vegetable",
    "type": "processed",
    "energy": 178,
    "protein": 2.6,
    "fat": 13.9,
    "carbs": 10.6
  },
  {
    "id": 953,
    "name": "Sayur kohu-kohu",
    "category": "vegetable",
    "type": "processed",
    "energy": 133,
    "protein": 7.3,
    "fat": 6.6,
    "carbs": 11.2
  },
  {
    "id": 954,
    "name": "Sayur lebui",
    "category": "grain",
    "type": "processed",
    "energy": 64,
    "protein": 2.1,
    "fat": 0.6,
    "carbs": 12.5
  },
  {
    "id": 955,
    "name": "Sayur lilin-terubuk",
    "category": "vegetable",
    "type": "processed",
    "energy": 36,
    "protein": 2.7,
    "fat": 0.7,
    "carbs": 4.8
  },
  {
    "id": 956,
    "name": "Sayur ndusuk",
    "category": "vegetable",
    "type": "processed",
    "energy": 49,
    "protein": 3.1,
    "fat": 2.5,
    "carbs": 3.6
  },
  {
    "id": 957,
    "name": "Sayur sop",
    "category": "vegetable",
    "type": "processed",
    "energy": 27,
    "protein": 1.3,
    "fat": 2,
    "carbs": 1
  },
  {
    "id": 958,
    "name": "Sayur umbut kelapa",
    "category": "vegetable",
    "type": "processed",
    "energy": 67,
    "protein": 5.2,
    "fat": 2.9,
    "carbs": 5.1
  },
  {
    "id": 959,
    "name": "Sayur umbut rotan",
    "category": "vegetable",
    "type": "processed",
    "energy": 57,
    "protein": 5.4,
    "fat": 2.6,
    "carbs": 3.1
  },
  {
    "id": 960,
    "name": "Selada air, segar (Watercress, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 17,
    "protein": 3.1,
    "fat": 0.2,
    "carbs": 2.2
  },
  {
    "id": 961,
    "name": "Selada, rebus",
    "category": "vegetable",
    "type": "processed",
    "energy": 19,
    "protein": 2.7,
    "fat": 0.2,
    "carbs": 2.9
  },
  {
    "id": 962,
    "name": "Selada, segar (Lettuce)",
    "category": "vegetable",
    "type": "raw",
    "energy": 18,
    "protein": 1.2,
    "fat": 0.2,
    "carbs": 2.9
  },
  {
    "id": 963,
    "name": "Seledri, segar (Celery, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 23,
    "protein": 1,
    "fat": 0.1,
    "carbs": 4.6
  },
  {
    "id": 964,
    "name": "Semangka, segar (Water melon, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 28,
    "protein": 0.5,
    "fat": 0.2,
    "carbs": 6.9
  },
  {
    "id": 965,
    "name": "Semur jengkol",
    "category": "vegetable",
    "type": "processed",
    "energy": 212,
    "protein": 6,
    "fat": 10,
    "carbs": 29.1
  },
  {
    "id": 966,
    "name": "Sente, talas, segar (Giant taro, fresh)",
    "category": "tuber",
    "type": "raw",
    "energy": 353,
    "protein": 0.7,
    "fat": 0.2,
    "carbs": 84.7
  },
  {
    "id": 967,
    "name": "Sepi, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 88,
    "protein": 7.9,
    "fat": 1.6,
    "carbs": 10.6
  },
  {
    "id": 968,
    "name": "Serimping talas kebumen",
    "category": "tuber",
    "type": "processed",
    "energy": 478,
    "protein": 2.5,
    "fat": 21.2,
    "carbs": 69.2
  },
  {
    "id": 969,
    "name": "Shabu-shabu",
    "category": "vegetable",
    "type": "processed",
    "energy": 88,
    "protein": 3.2,
    "fat": 8,
    "carbs": 0.8
  },
  {
    "id": 970,
    "name": "Sie reuboh, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 474,
    "protein": 11.2,
    "fat": 42.5,
    "carbs": 11.7
  },
  {
    "id": 971,
    "name": "Sirsak, segar (Soursop, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 65,
    "protein": 1,
    "fat": 0.3,
    "carbs": 16.3
  },
  {
    "id": 972,
    "name": "Sirup (syrup)",
    "category": "pastry",
    "type": "processed",
    "energy": 213,
    "protein": 0,
    "fat": 0,
    "carbs": 55
  },
  {
    "id": 973,
    "name": "Sirup pirous (syrup, pirous)",
    "category": "pastry",
    "type": "processed",
    "energy": 228,
    "protein": 0.2,
    "fat": 0.4,
    "carbs": 55.9
  },
  {
    "id": 974,
    "name": "Sop buntut, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 71,
    "protein": 7.5,
    "fat": 3.6,
    "carbs": 2.2
  },
  {
    "id": 975,
    "name": "Sop daging sapi, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 49,
    "protein": 5.8,
    "fat": 0.5,
    "carbs": 5.3
  },
  {
    "id": 976,
    "name": "Sop kaki sapi, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 68,
    "protein": 9,
    "fat": 1.9,
    "carbs": 3.7
  },
  {
    "id": 977,
    "name": "Sop kambing, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 34,
    "protein": 5.5,
    "fat": 0.8,
    "carbs": 1.1
  },
  {
    "id": 978,
    "name": "Sop konro, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 71,
    "protein": 7.4,
    "fat": 2.6,
    "carbs": 4.5
  },
  {
    "id": 979,
    "name": "Sop saudara, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 89,
    "protein": 7.2,
    "fat": 5,
    "carbs": 3.9
  },
  {
    "id": 980,
    "name": "Soto bandung, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 42,
    "protein": 3.9,
    "fat": 1.7,
    "carbs": 2.8
  },
  {
    "id": 981,
    "name": "Soto banjar, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 110,
    "protein": 2.9,
    "fat": 9.5,
    "carbs": 3.2
  },
  {
    "id": 982,
    "name": "Soto betawi, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 135,
    "protein": 2.5,
    "fat": 8.8,
    "carbs": 11.5
  },
  {
    "id": 983,
    "name": "Soto jeroan, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 92,
    "protein": 11.8,
    "fat": 4.3,
    "carbs": 1.4
  },
  {
    "id": 984,
    "name": "Soto kudus, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 38,
    "protein": 2.6,
    "fat": 2.3,
    "carbs": 1.8
  },
  {
    "id": 985,
    "name": "Soto madura, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 60,
    "protein": 3.5,
    "fat": 4.5,
    "carbs": 1.3
  },
  {
    "id": 986,
    "name": "Soto padang, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 127,
    "protein": 5.9,
    "fat": 6.6,
    "carbs": 11
  },
  {
    "id": 987,
    "name": "Soto pekalongan, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 94,
    "protein": 3,
    "fat": 6.8,
    "carbs": 5.1
  },
  {
    "id": 988,
    "name": "Soto pemalang, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 75,
    "protein": 3.6,
    "fat": 5.2,
    "carbs": 3.5
  },
  {
    "id": 989,
    "name": "Soto sukaraja, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 80,
    "protein": 3.2,
    "fat": 3.5,
    "carbs": 9
  },
  {
    "id": 990,
    "name": "Soto sulung, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 86,
    "protein": 2.3,
    "fat": 8.5,
    "carbs": 0
  },
  {
    "id": 991,
    "name": "Sowa, segar",
    "category": "fruit",
    "type": "raw",
    "energy": 48,
    "protein": 1.6,
    "fat": 0.6,
    "carbs": 9.1
  },
  {
    "id": 992,
    "name": "Spaghetti",
    "category": "cereal",
    "type": "processed",
    "energy": 139,
    "protein": 7.4,
    "fat": 2.1,
    "carbs": 22.6
  },
  {
    "id": 993,
    "name": "Srikaya ketan",
    "category": "cereal",
    "type": "processed",
    "energy": 265,
    "protein": 2.7,
    "fat": 6.4,
    "carbs": 49.1
  },
  {
    "id": 994,
    "name": "Srikaya, segar (Sugar apple,fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 63,
    "protein": 1.1,
    "fat": 0.5,
    "carbs": 13.9
  },
  {
    "id": 995,
    "name": "Sukiyaki, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 75,
    "protein": 5.6,
    "fat": 0.4,
    "carbs": 12.2
  },
  {
    "id": 996,
    "name": "Sukun muda, segar (Breadfruit, young, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 119,
    "protein": 1.4,
    "fat": 0.2,
    "carbs": 28.1
  },
  {
    "id": 997,
    "name": "Sukun tua, segar (Breadfruit, fresh)",
    "category": "fruit",
    "type": "raw",
    "energy": 126,
    "protein": 1.6,
    "fat": 0.2,
    "carbs": 24.5
  },
  {
    "id": 998,
    "name": "Sunduk lawang",
    "category": "cereal",
    "type": "processed",
    "energy": 181,
    "protein": 1.9,
    "fat": 1.3,
    "carbs": 32.4
  },
  {
    "id": 999,
    "name": "Susu asam untuk bayi, bubuk",
    "category": "milk",
    "type": "processed",
    "energy": 418,
    "protein": 19,
    "fat": 9,
    "carbs": 65.5
  },
  {
    "id": 1000,
    "name": "Susu bubuk",
    "category": "milk",
    "type": "processed",
    "energy": 513,
    "protein": 24.6,
    "fat": 30,
    "carbs": 36.2
  },
  {
    "id": 1002,
    "name": "Susu kambing, segar",
    "category": "milk",
    "type": "raw",
    "energy": 64,
    "protein": 4.3,
    "fat": 2.3,
    "carbs": 6.6
  },
  {
    "id": 1003,
    "name": "Susu kedelai",
    "category": "grain",
    "type": "processed",
    "energy": 41,
    "protein": 3.5,
    "fat": 2.5,
    "carbs": 5
  },
  {
    "id": 1004,
    "name": "Susu kental manis",
    "category": "milk",
    "type": "processed",
    "energy": 343,
    "protein": 8.2,
    "fat": 10,
    "carbs": 55
  },
  {
    "id": 1005,
    "name": "Susu kental tak manis",
    "category": "milk",
    "type": "processed",
    "energy": 138,
    "protein": 7,
    "fat": 7.9,
    "carbs": 9.9
  },
  {
    "id": 1006,
    "name": "Susu kerbau, segar",
    "category": "milk",
    "type": "raw",
    "energy": 160,
    "protein": 6.3,
    "fat": 12,
    "carbs": 7.1
  },
  {
    "id": 1007,
    "name": "Susu kuda, segar",
    "category": "milk",
    "type": "raw",
    "energy": 40,
    "protein": 2,
    "fat": 1.1,
    "carbs": 5.4
  },
  {
    "id": 1008,
    "name": "Susu sapi, segar",
    "category": "milk",
    "type": "raw",
    "energy": 61,
    "protein": 3.2,
    "fat": 3.5,
    "carbs": 4.3
  },
  {
    "id": 1009,
    "name": "Susu skim, bubuk",
    "category": "milk",
    "type": "processed",
    "energy": 359,
    "protein": 35.6,
    "fat": 1,
    "carbs": 52
  },
  {
    "id": 1010,
    "name": "Susu skim, segar",
    "category": "milk",
    "type": "processed",
    "energy": 36,
    "protein": 3.5,
    "fat": 0.1,
    "carbs": 5.1
  },
  {
    "id": 1011,
    "name": "Suweg, talas, kukus",
    "category": "tuber",
    "type": "processed",
    "energy": 93,
    "protein": 1.5,
    "fat": 0.1,
    "carbs": 21.9
  },
  {
    "id": 1012,
    "name": "Suweg, talas, segar (Elephant yam)",
    "category": "tuber",
    "type": "raw",
    "energy": 74,
    "protein": 1.4,
    "fat": 0.1,
    "carbs": 17.2
  },
  {
    "id": 1013,
    "name": "Suwir-suwir",
    "category": "cereal",
    "type": "processed",
    "energy": 347,
    "protein": 0.5,
    "fat": 0.9,
    "carbs": 84.2
  },
  {
    "id": 1014,
    "name": "Tahu goreng",
    "category": "grain",
    "type": "processed",
    "energy": 115,
    "protein": 9.7,
    "fat": 8.5,
    "carbs": 2.5
  },
  {
    "id": 1015,
    "name": "Tahu telur",
    "category": "grain",
    "type": "processed",
    "energy": 328,
    "protein": 12.6,
    "fat": 19.9,
    "carbs": 24.6
  },
  {
    "id": 1016,
    "name": "Tahu, mentah",
    "category": "grain",
    "type": "processed",
    "energy": 80,
    "protein": 10.9,
    "fat": 4.7,
    "carbs": 0.8
  },
  {
    "id": 1017,
    "name": "Takwa",
    "category": "grain",
    "type": "processed",
    "energy": 148,
    "protein": 13.8,
    "fat": 8.5,
    "carbs": 4
  },
  {
    "id": 1018,
    "name": "Talas bogor, kukus",
    "category": "tuber",
    "type": "processed",
    "energy": 120,
    "protein": 1.5,
    "fat": 0.3,
    "carbs": 28.2
  },
  {
    "id": 1019,
    "name": "Talas bogor, segar (Taro, bogor, fresh)",
    "category": "tuber",
    "type": "raw",
    "energy": 108,
    "protein": 1.4,
    "fat": 0.4,
    "carbs": 25
  },
  {
    "id": 1020,
    "name": "Talas pontianak, segar (Taro, pontianak, fresh)",
    "category": "tuber",
    "type": "raw",
    "energy": 163,
    "protein": 2.3,
    "fat": 0.5,
    "carbs": 36.4
  },
  {
    "id": 1021,
    "name": "Talas viqueque, segar",
    "category": "tuber",
    "type": "raw",
    "energy": 115,
    "protein": 1.8,
    "fat": 0.5,
    "carbs": 25.9
  },
  {
    "id": 1022,
    "name": "Taoge kacang kedelai, segar (Soya bean, sprout, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 76,
    "protein": 9,
    "fat": 2.6,
    "carbs": 6.4
  },
  {
    "id": 1023,
    "name": "Taoge kacang tunggak, segar (southern pea, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 40,
    "protein": 5,
    "fat": 0.2,
    "carbs": 5.8
  },
  {
    "id": 1024,
    "name": "Taoge, goreng",
    "category": "vegetable",
    "type": "processed",
    "energy": 88,
    "protein": 3.2,
    "fat": 2.1,
    "carbs": 14
  },
  {
    "id": 1025,
    "name": "Taoge, seduh",
    "category": "vegetable",
    "type": "processed",
    "energy": 28,
    "protein": 3,
    "fat": 0.8,
    "carbs": 4
  },
  {
    "id": 1026,
    "name": "Taoge, segar (Mung bean, sprout, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 34,
    "protein": 3.7,
    "fat": 1.2,
    "carbs": 4.3
  },
  {
    "id": 1027,
    "name": "Tapai beras",
    "category": "cereal",
    "type": "processed",
    "energy": 99,
    "protein": 1.7,
    "fat": 0.3,
    "carbs": 22.4
  },
  {
    "id": 1028,
    "name": "Tapai ketan hitam",
    "category": "cereal",
    "type": "processed",
    "energy": 166,
    "protein": 3.8,
    "fat": 1,
    "carbs": 34.4
  },
  {
    "id": 1029,
    "name": "Tapai ketan putih",
    "category": "cereal",
    "type": "processed",
    "energy": 172,
    "protein": 3,
    "fat": 0.5,
    "carbs": 37.5
  },
  {
    "id": 1030,
    "name": "Tapai singkong",
    "category": "tuber",
    "type": "processed",
    "energy": 169,
    "protein": 1.4,
    "fat": 0.3,
    "carbs": 40.2
  },
  {
    "id": 1031,
    "name": "Tauco",
    "category": "grain",
    "type": "processed",
    "energy": 184,
    "protein": 11.4,
    "fat": 5.5,
    "carbs": 22.2
  },
  {
    "id": 1032,
    "name": "Tauco cap beruang, cake",
    "category": "grain",
    "type": "processed",
    "energy": 347,
    "protein": 7.4,
    "fat": 5.2,
    "carbs": 67.6
  },
  {
    "id": 1033,
    "name": "Tauco cap DAS, cake",
    "category": "grain",
    "type": "processed",
    "energy": 358,
    "protein": 7.5,
    "fat": 4.3,
    "carbs": 70.4
  },
  {
    "id": 1034,
    "name": "Tauco cap meong",
    "category": "grain",
    "type": "processed",
    "energy": 159,
    "protein": 7.4,
    "fat": 4.9,
    "carbs": 21.3
  },
  {
    "id": 1035,
    "name": "Tauji cap singa",
    "category": "grain",
    "type": "processed",
    "energy": 277,
    "protein": 9.1,
    "fat": 4.7,
    "carbs": 49.6
  },
  {
    "id": 1036,
    "name": "Tebu terubuk (lilin), segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 30,
    "protein": 4.6,
    "fat": 0.4,
    "carbs": 3
  },
  {
    "id": 1037,
    "name": "Tedong pallu basa, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 83,
    "protein": 10.4,
    "fat": 3.4,
    "carbs": 2.8
  },
  {
    "id": 1038,
    "name": "Teh hijau daun kering (Tea, leaf, green, dried)",
    "category": "pastry",
    "type": "processed",
    "energy": 300,
    "protein": 28.3,
    "fat": 4.8,
    "carbs": 53.6
  },
  {
    "id": 1039,
    "name": "Teh hitam daun kering (tea, leaf, black, dried)",
    "category": "pastry",
    "type": "processed",
    "energy": 293,
    "protein": 24.5,
    "fat": 2.8,
    "carbs": 58.8
  },
  {
    "id": 1040,
    "name": "Teh melati daun kering (Tea, jasmine, black, dried)",
    "category": "pastry",
    "type": "processed",
    "energy": 299,
    "protein": 24.1,
    "fat": 3.5,
    "carbs": 59
  },
  {
    "id": 1041,
    "name": "Tekokak, kering (Devil\u2019s fig, dried)",
    "category": "vegetable",
    "type": "raw",
    "energy": 302,
    "protein": 8.3,
    "fat": 1.7,
    "carbs": 72.6
  },
  {
    "id": 1042,
    "name": "Tekokak, segar (Devil\u2019s fig,fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 34,
    "protein": 2,
    "fat": 0.1,
    "carbs": 7.9
  },
  {
    "id": 1043,
    "name": "Tekwan, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 53,
    "protein": 1.9,
    "fat": 0.9,
    "carbs": 9.4
  },
  {
    "id": 1044,
    "name": "Telur ayam ras, bagian putih, segar (Domestic chicken, egg, white, raw)",
    "category": "egg",
    "type": "raw",
    "energy": 50,
    "protein": 10.8,
    "fat": 0,
    "carbs": 0.8
  },
  {
    "id": 1045,
    "name": "Telur ayam kampung, segar (Feral chicken, egg, fresh)",
    "category": "egg",
    "type": "raw",
    "energy": 174,
    "protein": 10.8,
    "fat": 14,
    "carbs": 1.2
  },
  {
    "id": 1046,
    "name": "Telur ayam ras, bagian kuning, segar (Domestic chicken, egg, yolk, raw)",
    "category": "egg",
    "type": "raw",
    "energy": 355,
    "protein": 16.3,
    "fat": 31.9,
    "carbs": 0.7
  },
  {
    "id": 1047,
    "name": "Telur ayam ras, segar (Domestic chicken, egg, fresh)",
    "category": "egg",
    "type": "raw",
    "energy": 154,
    "protein": 12.4,
    "fat": 10.8,
    "carbs": 0.7
  },
  {
    "id": 1048,
    "name": "Telur ayam, dadar, masakan",
    "category": "egg",
    "type": "processed",
    "energy": 251,
    "protein": 16.3,
    "fat": 19.4,
    "carbs": 1.4
  },
  {
    "id": 1049,
    "name": "Telur bebek alabio, segar (Duck, alabio, egg, fresh)",
    "category": "egg",
    "type": "raw",
    "energy": 187,
    "protein": 11.8,
    "fat": 14.2,
    "carbs": 3
  },
  {
    "id": 1050,
    "name": "Telur bebek tambak, segar (Domestic duck, egg, fresh)",
    "category": "egg",
    "type": "raw",
    "energy": 187,
    "protein": 10.9,
    "fat": 12.4,
    "carbs": 7.9
  },
  {
    "id": 1051,
    "name": "Telur bebek, asin, mentah (Duck, egg, salted, raw)",
    "category": "egg",
    "type": "processed",
    "energy": 179,
    "protein": 13.6,
    "fat": 13.3,
    "carbs": 4.4
  },
  {
    "id": 1052,
    "name": "Telur bebek, bagian kuning, segar (Duck, egg, yolk, fresh)",
    "category": "egg",
    "type": "raw",
    "energy": 386,
    "protein": 17,
    "fat": 35,
    "carbs": 0.8
  },
  {
    "id": 1053,
    "name": "Telur bebek, bagian putih, segar (Duck, egg, white, fresh)",
    "category": "egg",
    "type": "raw",
    "energy": 54,
    "protein": 11,
    "fat": 0,
    "carbs": 0.8
  },
  {
    "id": 1054,
    "name": "Telur bebek, dadar, masakan",
    "category": "egg",
    "type": "processed",
    "energy": 301,
    "protein": 20,
    "fat": 23.7,
    "carbs": 0
  },
  {
    "id": 1055,
    "name": "Telur burung maleo, segar (Maleo, bird, egg , fresh)",
    "category": "egg",
    "type": "raw",
    "energy": 436,
    "protein": 26.5,
    "fat": 36.3,
    "carbs": 0.4
  },
  {
    "id": 1056,
    "name": "Telur burung puyuh, segar (Quail, egg, fress)",
    "category": "egg",
    "type": "raw",
    "energy": 116,
    "protein": 10.7,
    "fat": 7,
    "carbs": 1.6
  },
  {
    "id": 1057,
    "name": "Telur penyu, segar (Turtle, egg)",
    "category": "egg",
    "type": "raw",
    "energy": 136,
    "protein": 8.6,
    "fat": 10.1,
    "carbs": 2.7
  },
  {
    "id": 1058,
    "name": "Tempe bongkrek",
    "category": "grain",
    "type": "processed",
    "energy": 119,
    "protein": 4.4,
    "fat": 3.5,
    "carbs": 18.3
  },
  {
    "id": 1059,
    "name": "Tempe gembus P3G",
    "category": "grain",
    "type": "processed",
    "energy": 73,
    "protein": 5.7,
    "fat": 1.3,
    "carbs": 10.3
  },
  {
    "id": 1060,
    "name": "Tempe gembus yogya",
    "category": "grain",
    "type": "processed",
    "energy": 76,
    "protein": 6.8,
    "fat": 0.7,
    "carbs": 10.6
  },
  {
    "id": 1061,
    "name": "Tempe kacang babi",
    "category": "grain",
    "type": "processed",
    "energy": 139,
    "protein": 12.5,
    "fat": 0.8,
    "carbs": 21.9
  },
  {
    "id": 1062,
    "name": "Tempe kacang belimbing",
    "category": "grain",
    "type": "processed",
    "energy": 212,
    "protein": 17.5,
    "fat": 10,
    "carbs": 12.9
  },
  {
    "id": 1063,
    "name": "Tempe kedelai + jagung",
    "category": "grain",
    "type": "processed",
    "energy": 143,
    "protein": 12,
    "fat": 5.5,
    "carbs": 11.4
  },
  {
    "id": 1064,
    "name": "Tempe kedelai murni, goreng",
    "category": "grain",
    "type": "processed",
    "energy": 350,
    "protein": 24.5,
    "fat": 26.6,
    "carbs": 10.4
  },
  {
    "id": 1065,
    "name": "Tempe kedelai murni, mentah",
    "category": "grain",
    "type": "processed",
    "energy": 201,
    "protein": 20.8,
    "fat": 8.8,
    "carbs": 13.5
  },
  {
    "id": 1066,
    "name": "Tempe koro benguk",
    "category": "grain",
    "type": "processed",
    "energy": 141,
    "protein": 10.2,
    "fat": 1.3,
    "carbs": 23.2
  },
  {
    "id": 1067,
    "name": "Tempe lamtoro",
    "category": "grain",
    "type": "processed",
    "energy": 128,
    "protein": 10.7,
    "fat": 0.5,
    "carbs": 21.3
  },
  {
    "id": 1068,
    "name": "Tempe lamtoro var. gung dengan kulit",
    "category": "grain",
    "type": "processed",
    "energy": 146,
    "protein": 11.7,
    "fat": 2.3,
    "carbs": 19.6
  },
  {
    "id": 1069,
    "name": "Tempe lamtoro var. gung tanpa kulit",
    "category": "grain",
    "type": "processed",
    "energy": 131,
    "protein": 18,
    "fat": 0.8,
    "carbs": 13
  },
  {
    "id": 1070,
    "name": "Tempe pasar",
    "category": "grain",
    "type": "processed",
    "energy": 150,
    "protein": 14,
    "fat": 7.7,
    "carbs": 9.1
  },
  {
    "id": 1071,
    "name": "Tempe pasar goreng",
    "category": "grain",
    "type": "processed",
    "energy": 336,
    "protein": 20,
    "fat": 28,
    "carbs": 7.8
  },
  {
    "id": 1072,
    "name": "Tempoya (durian, fermented)",
    "category": "spice",
    "type": "processed",
    "energy": 110,
    "protein": 1.7,
    "fat": 1.3,
    "carbs": 21.9
  },
  {
    "id": 1073,
    "name": "Tepung Arrowroot",
    "category": "tuber",
    "type": "processed",
    "energy": 355,
    "protein": 0.7,
    "fat": 0.2,
    "carbs": 85.2
  },
  {
    "id": 1074,
    "name": "Tepung beras, mentah",
    "category": "cereal",
    "type": "processed",
    "energy": 353,
    "protein": 7,
    "fat": 0.5,
    "carbs": 80
  },
  {
    "id": 1075,
    "name": "Tepung Ganyong",
    "category": "tuber",
    "type": "processed",
    "energy": 353,
    "protein": 0.8,
    "fat": 1.7,
    "carbs": 83.6
  },
  {
    "id": 1076,
    "name": "Tepung Gaplek",
    "category": "tuber",
    "type": "processed",
    "energy": 345,
    "protein": 2.4,
    "fat": 0.4,
    "carbs": 83.1
  },
  {
    "id": 1077,
    "name": "Tepung hunkwe (pati kacang ijo)",
    "category": "grain",
    "type": "processed",
    "energy": 364,
    "protein": 4.5,
    "fat": 1,
    "carbs": 83.5
  },
  {
    "id": 1078,
    "name": "Tepung jagung putih",
    "category": "cereal",
    "type": "processed",
    "energy": 355,
    "protein": 9.2,
    "fat": 3.9,
    "carbs": 73.7
  },
  {
    "id": 1079,
    "name": "Tepung Jalejo",
    "category": "grain",
    "type": "processed",
    "energy": 388,
    "protein": 19,
    "fat": 7.5,
    "carbs": 61.2
  },
  {
    "id": 1080,
    "name": "Tepung kacang kedelai",
    "category": "grain",
    "type": "processed",
    "energy": 347,
    "protein": 35.9,
    "fat": 20.6,
    "carbs": 29.9
  },
  {
    "id": 1081,
    "name": "Tepung kentang, kering",
    "category": "tuber",
    "type": "processed",
    "energy": 347,
    "protein": 0.3,
    "fat": 0.1,
    "carbs": 85.6
  },
  {
    "id": 1082,
    "name": "Tepung Mocaf",
    "category": "tuber",
    "type": "processed",
    "energy": 350,
    "protein": 1.2,
    "fat": 0.6,
    "carbs": 85
  },
  {
    "id": 1083,
    "name": "Tepung Pisang",
    "category": "fruit",
    "type": "processed",
    "energy": 338,
    "protein": 2.9,
    "fat": 0.4,
    "carbs": 80.6
  },
  {
    "id": 1084,
    "name": "Tepung Sente",
    "category": "tuber",
    "type": "processed",
    "energy": 326,
    "protein": 4,
    "fat": 0.4,
    "carbs": 76.7
  },
  {
    "id": 1085,
    "name": "Tepung singkong/ Tapioka",
    "category": "tuber",
    "type": "processed",
    "energy": 363,
    "protein": 1.1,
    "fat": 0.5,
    "carbs": 88.2
  },
  {
    "id": 1086,
    "name": "Tepung Sukun",
    "category": "fruit",
    "type": "processed",
    "energy": 353,
    "protein": 2.9,
    "fat": 0.5,
    "carbs": 84.4
  },
  {
    "id": 1087,
    "name": "Tepung Tales Beneng",
    "category": "tuber",
    "type": "processed",
    "energy": 332,
    "protein": 5.7,
    "fat": 0.6,
    "carbs": 76.1
  },
  {
    "id": 1088,
    "name": "Tepung terigu",
    "category": "cereal",
    "type": "processed",
    "energy": 333,
    "protein": 9,
    "fat": 1,
    "carbs": 77.2
  },
  {
    "id": 1089,
    "name": "Tepung Ubi Ungu",
    "category": "tuber",
    "type": "processed",
    "energy": 354,
    "protein": 2.8,
    "fat": 0.6,
    "carbs": 84.4
  },
  {
    "id": 1090,
    "name": "Terasi (Fish, fermented, paste (terasi))",
    "category": "spice",
    "type": "processed",
    "energy": 155,
    "protein": 22.3,
    "fat": 2.9,
    "carbs": 9.9
  },
  {
    "id": 1091,
    "name": "Terasi dobo",
    "category": "spice",
    "type": "processed",
    "energy": 191,
    "protein": 33.1,
    "fat": 3.6,
    "carbs": 6.6
  },
  {
    "id": 1092,
    "name": "Terasi merah",
    "category": "spice",
    "type": "processed",
    "energy": 174,
    "protein": 30,
    "fat": 3.5,
    "carbs": 5.6
  },
  {
    "id": 1093,
    "name": "Teri belado, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 365,
    "protein": 23.7,
    "fat": 22.3,
    "carbs": 17.5
  },
  {
    "id": 1094,
    "name": "Teripang, dendeng, mentah",
    "category": "seafood",
    "type": "processed",
    "energy": 462,
    "protein": 39.1,
    "fat": 32.4,
    "carbs": 3.5
  },
  {
    "id": 1095,
    "name": "Terong asam, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 37,
    "protein": 2,
    "fat": 0.4,
    "carbs": 6.3
  },
  {
    "id": 1096,
    "name": "Terong hintalo, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 45,
    "protein": 1.9,
    "fat": 0.8,
    "carbs": 7.5
  },
  {
    "id": 1097,
    "name": "Terong, segar (Eggplant, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 28,
    "protein": 1.1,
    "fat": 0.2,
    "carbs": 5.5
  },
  {
    "id": 1098,
    "name": "Terung belanda, segar (Tamarillo, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 52,
    "protein": 2.1,
    "fat": 1.1,
    "carbs": 8.6
  },
  {
    "id": 1099,
    "name": "Terung bengkulu, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 52,
    "protein": 1.1,
    "fat": 0.4,
    "carbs": 11.2
  },
  {
    "id": 1100,
    "name": "Terung panjang (Eggplant, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 25,
    "protein": 2.1,
    "fat": 0.1,
    "carbs": 5.3
  },
  {
    "id": 1101,
    "name": "Terung panjang, kukus",
    "category": "vegetable",
    "type": "processed",
    "energy": 23,
    "protein": 1.8,
    "fat": 0.1,
    "carbs": 4.9
  },
  {
    "id": 1102,
    "name": "Tikus rica, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 257,
    "protein": 18.8,
    "fat": 18.5,
    "carbs": 3.8
  },
  {
    "id": 1103,
    "name": "Tinira ninahu nggaluku",
    "category": "vegetable",
    "type": "processed",
    "energy": 33,
    "protein": 1.2,
    "fat": 1.3,
    "carbs": 4.1
  },
  {
    "id": 1104,
    "name": "Tinoransa, masakan",
    "category": "meat",
    "type": "processed",
    "energy": 516,
    "protein": 17.7,
    "fat": 49.5,
    "carbs": 0
  },
  {
    "id": 1105,
    "name": "Tipa-tipa",
    "category": "cereal",
    "type": "processed",
    "energy": 355,
    "protein": 6.2,
    "fat": 1.2,
    "carbs": 79.8
  },
  {
    "id": 1106,
    "name": "Tiwul  ",
    "category": "tuber",
    "type": "processed",
    "energy": 353,
    "protein": 2.4,
    "fat": 1.1,
    "carbs": 83.4
  },
  {
    "id": 1107,
    "name": "Tiwul Instan",
    "category": "tuber",
    "type": "processed",
    "energy": 395,
    "protein": 3.2,
    "fat": 8.5,
    "carbs": 76.5
  },
  {
    "id": 1108,
    "name": "Tomat merah, segar (Tomato, red, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 24,
    "protein": 1.3,
    "fat": 0.5,
    "carbs": 4.7
  },
  {
    "id": 1109,
    "name": "Tomat muda, segar (Tomato, green, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 24,
    "protein": 2,
    "fat": 0.7,
    "carbs": 3.3
  },
  {
    "id": 1110,
    "name": "Tomat, air (sari), segar (Tomato, juice, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 20,
    "protein": 1,
    "fat": 0.2,
    "carbs": 3.5
  },
  {
    "id": 1111,
    "name": "Tumis bandeng, masakan",
    "category": "seafood",
    "type": "processed",
    "energy": 189,
    "protein": 11.3,
    "fat": 15.7,
    "carbs": 0.6
  },
  {
    "id": 1112,
    "name": "Tumis bayam bersantan",
    "category": "vegetable",
    "type": "processed",
    "energy": 48,
    "protein": 1.4,
    "fat": 4.2,
    "carbs": 2.6
  },
  {
    "id": 1113,
    "name": "Tumis keumamah",
    "category": "seafood",
    "type": "processed",
    "energy": 300,
    "protein": 14.5,
    "fat": 20,
    "carbs": 15.5
  },
  {
    "id": 1114,
    "name": "Ubi Cilembu",
    "category": "tuber",
    "type": "processed",
    "energy": 186,
    "protein": 1.9,
    "fat": 0.2,
    "carbs": 44.3
  },
  {
    "id": 1115,
    "name": "Ubi jalar manis, segar (Cassava starch, fresh)",
    "category": "tuber",
    "type": "raw",
    "energy": 83,
    "protein": 1.5,
    "fat": 0.2,
    "carbs": 18.8
  },
  {
    "id": 1116,
    "name": "Ubi jalar merah, segar (Sweet potato, redish, fresh)",
    "category": "tuber",
    "type": "raw",
    "energy": 151,
    "protein": 1.6,
    "fat": 0.3,
    "carbs": 35.4
  },
  {
    "id": 1117,
    "name": "Ubi jalar putih, segar (Sweet potato, whitish, fresh)",
    "category": "tuber",
    "type": "raw",
    "energy": 88,
    "protein": 0.4,
    "fat": 0.4,
    "carbs": 20.6
  },
  {
    "id": 1118,
    "name": "Ubi jalar tinta/ kemayung",
    "category": "tuber",
    "type": "raw",
    "energy": 108,
    "protein": 0.5,
    "fat": 0.4,
    "carbs": 25.6
  },
  {
    "id": 1119,
    "name": "Ubi jalar tinta/ kemayung kukus",
    "category": "tuber",
    "type": "processed",
    "energy": 165,
    "protein": 0.9,
    "fat": 0.2,
    "carbs": 39.8
  },
  {
    "id": 1120,
    "name": "Ubi jalar, kuning, kukus",
    "category": "tuber",
    "type": "processed",
    "energy": 100,
    "protein": 0.7,
    "fat": 0.3,
    "carbs": 23.8
  },
  {
    "id": 1121,
    "name": "Ubi jalar, kuning, segar (Sweet potato, yellowish, fresh)",
    "category": "tuber",
    "type": "raw",
    "energy": 119,
    "protein": 0.5,
    "fat": 0.4,
    "carbs": 25.1
  },
  {
    "id": 1122,
    "name": "Uceng/ bunga melinjo, segar (Spanish joint fir, flower, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 82,
    "protein": 5.8,
    "fat": 1.3,
    "carbs": 11.7
  },
  {
    "id": 1123,
    "name": "Udang galah, segar (Giant river prawn, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 81,
    "protein": 16.5,
    "fat": 0.3,
    "carbs": 3
  },
  {
    "id": 1124,
    "name": "Udang kering, mentah",
    "category": "seafood",
    "type": "processed",
    "energy": 278,
    "protein": 62.6,
    "fat": 4.1,
    "carbs": 2.2
  },
  {
    "id": 1125,
    "name": "Udang papay, mentah",
    "category": "seafood",
    "type": "processed",
    "energy": 273,
    "protein": 47.8,
    "fat": 3.8,
    "carbs": 12.5
  },
  {
    "id": 1126,
    "name": "Udang, besar, segar (Tiger prawn, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 56,
    "protein": 11.4,
    "fat": 0.6,
    "carbs": 1.2
  },
  {
    "id": 1127,
    "name": "Udang, segar (Shrimp, fresh)",
    "category": "seafood",
    "type": "raw",
    "energy": 91,
    "protein": 21,
    "fat": 0.2,
    "carbs": 0.1
  },
  {
    "id": 1128,
    "name": "Ulat sagu segar (Caterpillar, sago palm, fresh)",
    "category": "meat",
    "type": "raw",
    "energy": 241,
    "protein": 5.8,
    "fat": 21.6,
    "carbs": 5.8
  },
  {
    "id": 1129,
    "name": "Ulat sagu, panggang",
    "category": "meat",
    "type": "processed",
    "energy": 380,
    "protein": 11.9,
    "fat": 30.3,
    "carbs": 14.9
  },
  {
    "id": 1130,
    "name": "Uli batatas",
    "category": "tuber",
    "type": "processed",
    "energy": 150,
    "protein": 1.1,
    "fat": 4,
    "carbs": 27.4
  },
  {
    "id": 1131,
    "name": "Umbi Uwi, segar",
    "category": "tuber",
    "type": "raw",
    "energy": 120,
    "protein": 2.8,
    "fat": 0.5,
    "carbs": 82.3
  },
  {
    "id": 1132,
    "name": "Umbut kelapa, segar",
    "category": "vegetable",
    "type": "raw",
    "energy": 39,
    "protein": 2,
    "fat": 0.2,
    "carbs": 7.2
  },
  {
    "id": 1133,
    "name": "Umbut rotan (Rattan, young shoot)",
    "category": "vegetable",
    "type": "raw",
    "energy": 34,
    "protein": 2.4,
    "fat": 0.3,
    "carbs": 5.5
  },
  {
    "id": 1134,
    "name": "Vigus, segar",
    "category": "fruit",
    "type": "raw",
    "energy": 44,
    "protein": 2.4,
    "fat": 0.1,
    "carbs": 8.3
  },
  {
    "id": 1135,
    "name": "Wajit camilan",
    "category": "cereal",
    "type": "processed",
    "energy": 303,
    "protein": 6.3,
    "fat": 2.7,
    "carbs": 63.3
  },
  {
    "id": 1136,
    "name": "Waluh balamak",
    "category": "vegetable",
    "type": "processed",
    "energy": 45,
    "protein": 0.8,
    "fat": 0.9,
    "carbs": 8.1
  },
  {
    "id": 1137,
    "name": "Wani, segar",
    "category": "fruit",
    "type": "raw",
    "energy": 74,
    "protein": 0.8,
    "fat": 0.3,
    "carbs": 17.1
  },
  {
    "id": 1138,
    "name": "Widaran",
    "category": "cereal",
    "type": "processed",
    "energy": 424,
    "protein": 1.3,
    "fat": 10.7,
    "carbs": 80.7
  },
  {
    "id": 1139,
    "name": "Wijen, kering (Sesame seed)",
    "category": "grain",
    "type": "raw",
    "energy": 568,
    "protein": 19.3,
    "fat": 51.1,
    "carbs": 18.1
  },
  {
    "id": 1140,
    "name": "Wingko babat",
    "category": "cereal",
    "type": "processed",
    "energy": 355,
    "protein": 3.2,
    "fat": 15.1,
    "carbs": 51.4
  },
  {
    "id": 1141,
    "name": "Woku ubi",
    "category": "vegetable",
    "type": "processed",
    "energy": 143,
    "protein": 3.1,
    "fat": 7.8,
    "carbs": 15
  },
  {
    "id": 1142,
    "name": "Wortel, kukus",
    "category": "vegetable",
    "type": "processed",
    "energy": 37,
    "protein": 1,
    "fat": 0.6,
    "carbs": 8.3
  },
  {
    "id": 1143,
    "name": "Wortel, rebus",
    "category": "vegetable",
    "type": "processed",
    "energy": 28,
    "protein": 0.7,
    "fat": 0.5,
    "carbs": 6.3
  },
  {
    "id": 1144,
    "name": "Wortel, segar (Carrot, fresh)",
    "category": "vegetable",
    "type": "raw",
    "energy": 36,
    "protein": 1,
    "fat": 0.6,
    "carbs": 7.9
  },
  {
    "id": 1145,
    "name": "Yangko",
    "category": "cereal",
    "type": "processed",
    "energy": 254,
    "protein": 3,
    "fat": 1.1,
    "carbs": 58.1
  },
  {
    "id": 1146,
    "name": "Yoghurt, segar",
    "category": "milk",
    "type": "processed",
    "energy": 52,
    "protein": 3.3,
    "fat": 2.5,
    "carbs": 4
  }
]

// const Food = db.define('Food', {
//   name: {
//     type: DataTypes.STRING(100),
//     allowNull: false,
//   },
//   category: {
//     type: DataTypes.STRING(25),
//     allowNull: false,
//   },
//   type: {
//     type: DataTypes.STRING(6),
//     allowNull: false,
//   },
//   energy: {
//     type: DataTypes.SMALLINT,
//     allowNull: false,
//   },
//   protein: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//   },
//   fat: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//   },
//   carbs: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//   },
// }, {
//   timestamps: false,
// });

// async function addPangan() {
//   await db.sync();
//   for (const food of foods) {
//     const {
//       name, category, type, energy, protein, fat, carbs,
//     } = food;
//     await Food.create({
//       name, category, type, energy, protein, fat, carbs,
//     });
//     console.log(0);
//   }
//   // const { rows, count } = await Food.findAndCountAll({
//   //   limit: 10,
//   //   offset: 10,
//   //   where: {
//   //     name: {
//   //       [Op.and]: [
//   //         where(fn('LOWER', col('name')), 'LIKE', '%ay%'),
//   //       ],
//   //     },
//   //   },
//   //   raw: true,
//   // });
//   // console.log(rows, count);
// }
// addPangan();

const mysql = require('mysql2');
const fs = require('fs');
const readline = require('readline');
const bcrypt = require('bcrypt');

// const db = mysql.createConnection({
//   host: 'gateway01.ap-southeast-1.prod.aws.tidbcloud.com',
//   user: '2w7aFJrtU7xwhFv.root',
//   password: 'vorJl1tPhVnAzwQM',
//   database: 'gofitlife',
//   port: '4000',
//   ssl: {
//     minVersion: 'TLSv1.2',
//     rejectUnauthorized: true,
//   },
// });

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'gofitlife',
  port: '3306',
  multipleStatements: true,
  // ssl: {
  //   minVersion: 'TLSv1.2',
  //   rejectUnauthorized: true,
  // },
});

const query = (sql, values) => new Promise((resolve) => {
  db.execute(sql, values, (err, result, fileds) => {
    result.affectedRows
    resolve({ err, result, fileds });
  });
});

(async () => {
  foods.forEach(food => {
    query('INSERT INTO food(id, name, category, type, energy, protein, fat, carbs) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [food.id, food.name, food.category, food.type, food.energy, food.protein, food.fat, food.carbs])
  });
})()
