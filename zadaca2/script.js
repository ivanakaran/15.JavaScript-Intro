let input = prompt("Enter the length of one side and calculate the area and perimeter of a cube.");


class Cube {
  constructor(_length) {
    this.length = _length;
  }

  setArea() {
    return 6 * this.length * this.length;
  }

  setPerimeter() {
    return 12 * this.length
  }
}

let cube = new Cube(input);

let p = document.createElement('p');
p.innerHTML = `The <b>area</b> of the cube is ${cube.setArea()}.`;
document.body.appendChild(p);

let p1 = document.createElement('p');
p1.innerHTML = `The <b>perimeter</b> of the cube is ${cube.setPerimeter()}.`;
document.body.appendChild(p1);



