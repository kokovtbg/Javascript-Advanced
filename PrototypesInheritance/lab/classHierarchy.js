function figures() {
    class Figure {
        constructor() {
            this.units = 'cm';
        }
        get area() {
            return 0;
        }
        changeUnits(units) {
            this.units = units;
        }
        convertUnits(value) {
            switch (this.units) {
                case 'mm':
                    return value *= 10;
                case 'm':
                    return value /= 100;
                default:
                    break;
            }
            return value;
        }
        toString() {
            return `Figures units: ${this.units}`;
        }
    }
    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }
        get area() {
            let radius = this.convertUnits(this.radius);
            let result = Math.PI * radius * radius;
            return result;
            
        }
        toString() {
            let radius = this.convertUnits(this.radius);
            return super.toString() + ` Area: ${this.area} - radius: ${radius}`;
        }
    }
    class Rectangle extends Figure {
        constructor(width, height, units) {
            super();
            this.units = units;
            this.width = width;
            this.height = height;
        }
        get area() {
            let width = this.convertUnits(this.width);
            let height = this.convertUnits(this.height);
            let result = width * height;
            return result;
        }
        toString() {
            let width = this.convertUnits(this.width);
            let height = this.convertUnits(this.height);
            return super.toString() + ` Area: ${this.area} - width: ${width}, height: ${height}`;
        }
    }
    return {
        Figure,
        Circle,
        Rectangle
    }
}

