function calculateTriangleArea(a, h) {
    let obj = {
        area: 0,
        figure: 'Triangle',
        input: `Input data: ${a}, ${h}`,

        toString() {
            return `obj = {<br>area : ${obj.area},<br>figure : ${obj.figure},<br>input : ${obj.input}<br>}`;
        },
    };

    function getArea(a, h) {
        return 1 / 2 * a * h;
    }

    obj.area = getArea(a, h);

    return obj;
}

