class Point {
    x = 0
    y = 0
}

type IShape = Line | Rect | Cicle

class NewShape {

    vectorFactory: CreateVectorFactory = new CreateVectorFactory
    shapeVector:IShape[] = []

    type:string = ''

    p1:Point = {
        x: 0,
        y: 0
    }
    p2:Point = {
        x: 0,
        y: 0
    }

    changeShapeType(type: string) {
        this.type = type
    }

    onMouseDown(e: Point){
    // onMouseDown(e: MouseEvent){
        this.p1.x = e.x
        this.p1.y = e.y
    }
    onMouseUp(e: Point){
    // onMouseUp(e: MouseEvent){
        this.p2.x = e.x
        this.p2.y = e.y

        this.shapeVector.push(this.vectorFactory.createVector(this.type, this.p1, this.p2))

    }
    onPaint(){
        for (let i = 0; i < this.shapeVector.length; i++) {
            const shape = this.shapeVector[i];
            shape.draw(shape)
        }
    }
}

class CreateVectorFactory {

    createVector(type: string, p1: Point, p2: Point): IShape {
        // change Vector
        if (type === 'line') {
            return new Line(p1, p2)
        } else if (type === 'rect') {
            return new Rect(p1, p2)
        } else {
            return new Cicle(p1, p2)
        }
    }

}

class Line {
    start: Point = new Point
    end: Point = new Point

    constructor(p1: Point, p2: Point) {
        this.start = p1
        this.end = p2
    }

    draw(line: IShape) {
        console.log(line);
    }
}

class Rect {

    start: Point = new Point
    width: number = 0
    height: number = 0

    constructor(p1: Point, p2: Point) {
        this.start = p1
        this.width = p2.x - p1.x
        this.height = p2.y - p1.y
    }

    draw(rect: IShape) {
        console.log(rect);
    }
    
}

class Cicle {

    start: Point = new Point
    radius: number = 0

    constructor(p1: Point, p2: Point) {
        this.start = p1
        this.radius = Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2)
    }

    draw(cicle: IShape) {
        console.log(cicle);
    }
    
}



export default NewShape