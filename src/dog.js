// @flow

class Dog {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  bark() {
    return `Wah Wah,I am ${this.name}`;
  }
}

export default Dog;
