var kittySchema = new mongoose.Schema({
  name: String
});
kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}
var Kitten = mongoose.model('Kitten', kittySchema);
var fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak();
console.log(JSON.stringify(fluffy,undefined,2)); // "Meow name is fluffy"
