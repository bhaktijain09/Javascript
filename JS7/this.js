// this - this is used when there is some object having method in it and we want to use properties of object inside method
//  object(student) having method(getAvg) in it and 
// we want to use properties of object(name,class,branch,phy,chem,maths) inside method(getAvg)
// .this takes reference from object(student) and use it in method(getAvg)

// case1- 
const student = {
  name: "Bhakti",
  class: "TE",
  branch: "COMPS",
  phy: 95,
  chem: 93,
  maths: 90,

  getAvg() {
    console.log(this); // prints the entire object ie {name: 'Bhakti', class: 'TE', branch: 'COMPS', phy: 95, chem: 93, maths: 90}
    let avg = (this.phy + this.chem + this.maths) / 3;   // let avg = (phy + chem + maths)/3 won't work since we want phy, chem, maths marks parameters from the object(student) in the function(getAvg)
    console.log(`${this.name} from ${this.class} of branch ${this.branch} got average marks = ${avg}`);
    // prints Bhakti from TE of branch COMPS got average marks = 92.66666666666667
  }
};

student.getAvg(); //method within object is called

// case2 -
// when there is no object and only function/method then window object is created 
 function getAvg() {
    console.log(this); // prints the entire object ie {name: 'Bhakti', class: 'TE', branch: 'COMPS', phy: 95, chem: 93, maths: 90}
    let avg = (this.phy + this.chem + this.maths) / 3;   // let avg = (phy + chem + maths)/3 won't work since we want phy, chem, maths marks parameters from the object(student) in the function(getAvg)
    console.log(`${this.name} from ${this.class} of branch ${this.branch} got average marks = ${avg}`);
    // prints Bhakti from TE of branch COMPS got average marks = 92.66666666666667
  }

  getAvg(); // prints Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// from undefined of branch undefined got average marks = NaN