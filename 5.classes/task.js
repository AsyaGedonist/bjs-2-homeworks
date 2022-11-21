 //Задача1-2
 class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
      }
    
    set state(state) {
        if (state > 100) {
            this._state = 100;
        } else if (state < 0) {
            this._state = 0;
        } else {
            this._state = state;
        }
    }
    
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "book";
        this.author = author;
    }
}    

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "detective";
    }
}

class Library {
    constructor(name){
        this.name = name;
        this.books = new Array();
    }

    addBook (book){
        if (book.state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        let result = this.books.find(book => book[type] === value);
        if (result){
            return result;
        } else {
            return null;
        }
    }

    giveBookByName(bookName){
        let result = this.books.find(book => book.name === bookName);
        if (result) {
            this. books = this.books.filter(book => book.name !== bookName);
            return result;
        } else {
            return null;
        }    
    }
}


//Задача3
class Student {
    constructor (name, gender, age){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = {};
    }

    addMark (mark, subject) {
        if (parseInt(mark) >=1 && parseInt(mark) <= 5){
            if (this.marks[subject] === undefined){
                this.marks[subject] = [mark];
            } else { 
                this.marks[subject].push(mark);
            }
        } else {
            console.log("Введена некорректная оценка");
        }
    }

    getAverageBySubject (subject) {
        let sum = 0;
        let count = 0;
        this.marks[subject].forEach(element => {
            sum += element;
            count ++;
        });
        if (count > 0){    
            return sum/count;
        } else {
            return 0;
        }
    }

    getAverage () {
        let count = Object.keys(this.marks).length;

        if (count > 0){ 
            let sum = 0;
            Object.entries(this.marks).forEach(([element]) =>{
                sum += this.getAverageBySubject(element)
            });
            return sum/count;
        } else {
            return 0;
        }
    }

    exclude (reason) {
        delete this.marks;
        this.excluded = reason;
    }   
}