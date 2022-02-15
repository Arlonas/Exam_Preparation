// 1. Remove vowels
// Input: "javascript"
// Output: "jvscrpt"

const alphabetArr = "abcdefghijklnopqrstuvwxyz".split("");

// 2. Alphabet value
// Hitung jumlah value suatu string dimana setiap huruf memiliki value
// posisi huruf tersebut di dalam abjad. Contoh: A = 1, B = 2, Z = 26, J = 10
// Examples
// Input: "abc"
// Output: 6

// Input: "steve"
// Output: 71

// 3. Odd alphabet value
// Sama seperti soal nomor 2, tetapi kali ini hanya hitung huruf yang memiliki
// value ganjil

// Input: "steve"
// Output: 29

// Input: "abc"
// Output: 4

// 4. Unique items
// Diketahui ada 2 array of numbers, dimana 2 array tersebut memiliki beberapa
// value/number yang sama. Tampilkan sebuah array baru yang berisi list value
// unique (hanya berada di salah satu array saja)

// Input:
// arr1 = [1, 3, 7, 4]
// arr2 = [1, 5, 3, 7, 0]
// Output: [5, 4, 0]

// Bonus Question
// 5. Remove duplicates
// Diketahui ada 2 array of numbers, dimana 2 array tersebut memiliki beberapa
// value/number yang sama. Tampilkan sebuah array baru yang berisi list value
// dari kedua array tersebut, tetapi sudah
// Input:
// arr1 = [1, 3, 7, 4]
// arr2 = [1, 5, 3, 7, 0]
// Output: [1, 3, 4, 5, 7, 0]

// ======================= 1. remove vowels ===================================

const stringToCheck = "Mebi oso na hit choda op nodotaim";

const vowels = ["a", "e", "i", "o", "u"];

let newString = "";

for (const char of stringToCheck) {
  if (vowels.indexOf(char) === -1) {
    newString += char;
  }
}

console.log(newString);

// ==========================================================================

// ==============2. Alphabet value ==========================================
const alphabetArr = "abcdefghijklnopqrstuvwxyz".split("");
const alphabetValue = (string) => {
  let result = 0;
  for (let i = 0; i < string.split("").length; i++) {
    result += alphabetArr.indexOf(string[i]) + 1;
  }
  return result;
};
console.log(alphabetValue("abcdefghijklmnipqrstuvwxyz"));
// ============================================================================

// =======================3. Odd Alphabet Value ===============================
const oddAlphabetValue = (string) => {
  let result = 0;
  for (let i = 0; i < string.split("").length; i++) {
    if (!((alphabetArr.indexOf(string[i]) + 1) % 2 == 0))
      result += alphabetArr.indexOf(string[i]) + 1;
  }
  return result;
};
console.log(oddAlphabetValue("yu gonplei ste udon"));
// ===============================================================================

// ==================== 4. unique items =======================================
const uniqueItem = (arr1, arr2) => {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            result.push(arr1[i]);
        }
    }
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            result.push(arr2[i]);
        }
    }
    return result;
}

console.log(uniqueItem([1, 2, 5, 4], [1,2]));
// ==================================================================

// ============== 5. Remove duplicates ==============================
arr1 = [1, 3, 7, 4]
arr2 = [1, 5, 3, 7, 0]
arr3 = arr1.concat(arr2)

const removeDuplicates = (value, idx, arr) => {
    return arr.indexOf(value) == idx
}

const remove = arr3.filter(removeDuplicates)

console.log(remove)
// ==================================================================