// Area of triangle

function areaOfTriangle(a, b, c) {
    const s = (a + b + c)/2;
    const area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
    return area;
}

const area = areaOfTriangle(5, 6, 7);
console.log(area);