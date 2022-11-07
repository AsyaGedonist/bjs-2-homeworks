function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark){  
  if (parseInt(mark) >=1 && parseInt(mark) <= 5 ){
    if (this.marks === undefined){
      this.marks = [parseInt(mark)];
    } else {
      this.marks.push(parseInt(mark));
    }
  } else {
    console.log("Введена некорректная оценка");
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  this.marks.forEach(item => (sum += item));
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}