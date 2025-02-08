const user = {
  username: "Victor",
  showName() {
    console.log(this.username); 
  },
};
user.showName(); 

const deneme = {
    dİsim: "Akif",
    isimGoster() {
        console.log(this.dİsim);
    },
}
deneme.isimGoster()

// Strict mode kapalıysa, global alanda this, tarayıcıda window nesnesini gösterir.
// Strict mode açıksa, global alanda this, undefined olur.
// this, fonksiyonun nerede tanımlandığına değil, nasıl çağrıldığına göre belirlenir.