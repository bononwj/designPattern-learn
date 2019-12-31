import OldShape from "./shape/old";
import NewShape from "./shape/new";

console.log("===========");

let oldShape = new OldShape()

oldShape.changeShapeType("line")

oldShape.onMouseDown({x: 0, y: 90})
oldShape.onMouseUp({x: 220, y: 90})


oldShape.changeShapeType("rect")

oldShape.onMouseDown({x: 0, y: 90})
oldShape.onMouseUp({x: 220, y: 190})

oldShape.onPaint()

console.log("===========\n\n\n");

console.log("===========");

let newShape = new NewShape()

newShape.changeShapeType("line")

newShape.onMouseDown({x: 0, y: 90})
newShape.onMouseUp({x: 220, y: 90})


newShape.changeShapeType("rect")

newShape.onMouseDown({x: 0, y: 90})
newShape.onMouseUp({x: 220, y: 190})

newShape.changeShapeType("cicle")

newShape.onMouseDown({x: 0, y: 90})
newShape.onMouseUp({x: 220, y: 190})

newShape.onPaint()

console.log("===========\n\n\n");