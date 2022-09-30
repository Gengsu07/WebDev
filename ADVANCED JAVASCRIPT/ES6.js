const gengsu = {
  nama: "Sugeng Wahyudi",
  age: 26,
  married: true,
  hobby: ["foootbal", "coding", "gaming"],
};

//access objek cara lama

// const nama = gengsu.nama;
// const hobby = gengsu.hobby;

//dengan Destructuring
const { nama, hobby } = gengsu;
let { age } = gengsu;

//object properties
const a = "el fatih";
const family = {
  ayah: [nama],
  anak: [a],
};

//TEMPLATE STRINGS
const greet = `Halooo ${a} anak dari ${
  family.ayah
} yang lima tahun lagi berusia ${age + 5}`;

//Default argments
function greet(nama = "", ayah = "", age = 26) {
  return `Halooo ${nama} anak dari ${ayah} yang lima tahun lagi berusia ${
    age + 5
  }`;
}

//Arrow Function
const plus = (a, b) => a + b;
