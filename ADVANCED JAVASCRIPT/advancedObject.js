//reference type
//context
//instantiation

class Player {
  constructor(nama, posisi, no_punggung) {
    this.nama = nama;
    this.posisi = posisi;
  }
  intro() {
    console.log(`halooo nama saya ${this.nama}`);
  }
}

//untuk melakukan copy playeer
class Striker extends Player {
  constructor(nama, posisi, no_punggung) {
    super(nama, posisi, no_punggung);
  }
  play() {
    console.log(
      `saya adalah ${this.nama} berposisi ${this.posisi} no punggung ${this.no_punggung}`
    );
  }
}

class Defender extends Player {
  constructor(nama, posisi, no_punggung) {
    super(nama, posisi, no_punggung);
  }
  play() {
    console.log(
      `saya adalah ${this.nama} berposisi ${this.posisi} no punggung ${this.no_punggung}`
    );
  }
}

//SETELAH ITU KITA TINGGAL CREATE DENGAN MUDAH
const player1 = new Striker("Sugeng", "Striker", 10);

// pass by reference

let obj1 = {
  nama: "sugeng",
  umur: 26,
  hobby: ["sepak bola", "coding", "gaming"],
};

let obj2 = Object.assign({}.obj1);
