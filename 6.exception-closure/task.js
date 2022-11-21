//Задание 1
function parseCount (value){
    let result = Number.parseInt(value);
    if (isNaN(result)){
        throw new Error("Невалидное значение");
    }
    return result;
}

function validateCount(value){
    try{
        return parseCount(value);
    } catch(error){
        return error;
    } 
}

//Задание2
class Triangle {
    constructor (first, second, third){
        if (((first + second) < third) || ((first + third) < second) || ((second + third) < first)){
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.first = first;
        this.second = second;
        this.third = third;
    }

    getPerimeter(){
        return (this.first + this.second + this.third);
    }

    getArea(){
        let halfPerimeter = this.getPerimeter()/2;
        let area = Math.sqrt(halfPerimeter * (halfPerimeter - this.first)*(halfPerimeter - this.second)*(halfPerimeter - this.third)).toFixed(3);
        return parseFloat(area);
    }
}

function getTriangle (first, second, third){
    try {
        return new Triangle(first, second, third);
    } catch(error){
        let triangle = {};
        triangle.getPerimeter = function(){
            return ("Ошибка! Треугольник не существует")
        }
        triangle.getArea = function(){
            return ("Ошибка! Треугольник не существует")
        }
        return triangle;
    }
    
}

// function getTriangle (first, second, third){
//     try {
//         return new Triangle(first, second, third);
//     } catch(error){
//         const error1 = new Error ("'Ошибка! Треугольник не существует'")
//         let triangle = new Triangle();
//         triangle.getPerimeter = function(){
//             return error1;
//         }
//         triangle.getArea = function(){
//             return error1;
//         }
//         return triangle;
//     }
    
// }