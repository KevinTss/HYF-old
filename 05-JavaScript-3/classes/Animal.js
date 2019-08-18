class Animal {

  name = null;
  feets = 4;
  color = "Blue";

  constructor(name, feets) {
    this.name = name
    this.feets = feets
  }

  setFeets(value) {
    if (typeof value !== 'number') {
      throw new Error('You cannot change....')
    }
    this.feets = value
  }

  greeting() {
    console.log(this.sound)
  }

  hasAccident() {
    this.feets--
  }
  
}