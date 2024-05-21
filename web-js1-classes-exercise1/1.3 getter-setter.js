// // getter = special method that makes a property readable
// // setter = special method that makes a property writable

// // validate and modify a value when reading/writing a property

// class Superhero {
//   constructor(name, superpower) {
//     this._name = name;
//     this._superpower = superpower;
//   }

//   // Getter
//   get name() {
//     return this._name;
//   }

//   // Setter
//   set name(newName) {
//     if (newName) {
//       this._name = newName;
//     } else {
//       console.log("Name cannot be empty");
//     }
//   }

//   // Getter
//   get superpower() {
//     return this._superpower;
//   }

//   // Setter
//   set superpower(newSuperpower) {
//     if (newSuperpower) {
//       this._superpower = newSuperpower;
//     } else {
//       console.log("Superpower cannot be empty");
//     }
//   }

//   describe() {
//     console.log(
//       `I am ${this._name}, and my superpower is ${this._superpower}.`
//     );
//   }
// }

// const thor = new Superhero("Thor", "control over thunder and lightning");
// thor.describe(); // Output: I am Thor, and my superpower is control over thunder and lightning.

// // Using setters to change properties
// thor.name = "Thor Odinson";
// thor.superpower = "godlike strength and control over thunder and lightning";
// thor.describe(); // Output: I am Thor Odinson, and my superpower is godlike strength and control over thunder and lightning.

// getter = special method that makes a property readable
// setter = special method that makes a property writable

// validate and modify a value when reading/writing a property

class Book {
  constructor(title, author) {
    this._title = title;
    this._author = author;
  }

  // Getter
  get title() {
    return this._title;
  }

  // Setter
  set title(newTitle) {
    if (newTitle) {
      this._title = newTitle;
    } else {
      console.log("Title cannot be empty");
    }
  }

  // Getter
  get author() {
    return this._author;
  }

  // Setter
  set author(newAuthor) {
    if (newAuthor) {
      this._author = newAuthor;
    } else {
      console.log("Author cannot be empty");
    }
  }

  describe() {
    console.log(`The book titled "${this._title}" is written by ${this._author}.`);
  }
}

const book1 = new Book("To Kill a Mockingbird", "Harper Lee");
book1.describe(); 


book1.title = "1984";
book1.author = "George Orwell";
book1.describe(); 
