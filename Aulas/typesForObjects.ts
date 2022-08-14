type Point = {
    x: number;
    y: number;
};

function printCoord(points: Point) {
    console.log(points.x, points.y);
}

printCoord({x: 101, y: 50});

// type User = {
//     name: string;
//     last_name: string;
//     email: string;
//     age: number;
//     isAdmin: boolean;
// };
