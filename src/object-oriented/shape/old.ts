class Point {
    x = 0
    y = 0
}

class OldShape {

    type:string = ''

    p1:Point = {
        x: 0,
        y: 0
    }
    p2:Point = {
        x: 0,
        y: 0
    }

    lineVector: Line[] = []
    rectVector: Rect[] = []

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

        // change Vector
        if (this.type === 'line') {
            this.lineVector.push(new Line(this.p1, this.p2))
        } else {
            this.rectVector.push(new Rect(this.p1, this.p2))
        }

    }
    onPaint(){
        
        // drawLine
        for (let i = 0; i < this.lineVector.length; i++) {
            const line = this.lineVector[i];
            console.log(line);
            
            // drawLine(line)
        }

        // drawRect
        for (let i = 0; i < this.rectVector.length; i++) {
            const rect = this.rectVector[i];
            console.log(rect);
            // drawLine(rect)
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
    
}



export default OldShape