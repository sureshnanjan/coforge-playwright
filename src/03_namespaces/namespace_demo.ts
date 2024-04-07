//Namespaces allow the developer to create separate organization units that can be used to 
//hold multiple values, like properties, classes, types, and interfaces.
namespace CoforgeTraining {
    class User {
        constructor(public name: string) {}
      }
      // Inside the namespace it could be used
      const newUser = new User("Jon");
      export class ExportedUser{
        constructor(public name: string){}
      }
}

namespace CoforgeTrainingAnother {
    class User {
        constructor(public name: string) {}
      }
      // Inside the namespace it could be used
      const newUser = new User("Jon");
      export class ExportedUser{
        constructor(public name: string){}
      }
}
const thisfileExpUser = new CoforgeTraining.ExportedUser("suresh")
console.log(thisfileExpUser.name);
const anotherUser = new CoforgeTrainingAnother.ExportedUser("other user")
console.log(anotherUser.name);
