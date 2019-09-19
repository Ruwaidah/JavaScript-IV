// CODE here for your Lambda Classes
class Person{
    constructor(attr){
        this.name = attr.name,
        this.age = attr.age,
        this.location = attr.location
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person{
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty,
        this.favLanguage  = attr.favLanguage,
        this.catchPhrase = attr.catchPhrase 
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`)
    }
    grad(studentName, subject){
        console.log(`${studentName.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person{
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground,
        this.className = attr.className,
        this.favSubjects = attr.favSubjects
    }
    listsSubjects(){
        for (let i = 0; i < this.favSubjects.length; i++) {
            console.log(this.favSubjects[i]);
          }
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManagers extends Instructor {
    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName,
        this.favInstructor = attr.favInstructor
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
    }
    debugsCode(studentName,subject){
        console.log(`${this.name} debugs ${studentName.name}'s code on ${subject}`)
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const Ruwaidah = new Instructor({
    name: 'Ruwaidah',
    location: 'Texas',
    age: 33,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });


  const John = new Student({
    name: 'John',
    location: 'NY',
    age: 30,
    previousBackground: 'html, css',
    className: 'Web24',
    favSubjects: `Math !`
  });

  const Sarah = new Student({
    name: 'Sarah',
    location: 'SugarLand',
    age: 25,
    previousBackground: 'html, css, JavaScript',
    className: 'Web20',
    favSubjects: ["HTML", "CSS", "JavaScript"]
  });


  const Frank = new ProjectManagers({
    name: 'Frank',
    location: 'California',
    age: 40,
    specialty: 'Computer Science',
    favLanguage: 'PHP',
    catchPhrase: "Don't Stop Learning..",
    gradClassName: 'CS1',
    favInstructor: 'Sean'

  });

  const Ryan = new ProjectManagers({
    name: 'Ryan',
    location: 'NC',
    age: 35,
    specialty: 'Full-Stack',
    favLanguage: 'React',
    catchPhrase: "Code all the Time..!",
    gradClassName: 'CS24',
    favInstructor: 'Michael'

  });

// The Project Managers
Ryan.debugsCode(Sarah,'erfre');
Ryan.grad(John,'JavaScript');
Ryan.speak();
Frank.standUp('WEB24');
Frank.demo('Classes');


/// The Students 
Sarah.speak();
Sarah.listsSubjects();
Sarah.PRAssignment('sfesfs');
Sarah.sprintChallenge('1234');
John.sprintChallenge('Science');
John.listsSubjects();
John.speak();


//       Instructor
Ruwaidah.speak();
Ruwaidah.demo('Prototype');
Ruwaidah.grad(Sarah,"Python");

fred.speak();
fred.demo('This');
fred.grad(John,"Java");
