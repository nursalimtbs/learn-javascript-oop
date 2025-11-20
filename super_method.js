class Shape {
    paint() {
        console.info("Painting shape");
    }
}

class Circle extends Shape {
    paint() {
        super.paint(); // Call the parent class method
        console.info("Painting circle");
    }
}


const circle = new Circle();
circle.paint();