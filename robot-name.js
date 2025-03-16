export class Robot {
  static generatedNames = new Set();

  constructor() {
    this.reset();
  }

  reset() {
    this._name = Robot.generateName();
  }

  static generateName() {
    let name;
        do {
            name = this.getRandomLetters(2) + this.getRandomNumbers(3);
        } while (Robot.generatedNames.has(name));

        Robot.generatedNames.add(name);
        return name;
  }

  static getRandomLetters(length) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return Array.from({ length }, () => letters[Math.floor(Math.random() * letters.length)]).join('');
  }

  static getRandomNumbers(length) {
    return Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');
  }

  get name() {
    return this._name;
  }

  set name(value) {
    throw new Error("Robot name cannot be modified");
  }

  static releaseNames() {
    Robot.generatedNames.clear();
  }
}