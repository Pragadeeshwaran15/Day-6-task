// //Q.1
// //Answer:
// class movie{
//     constructor(title,studio,rating){
//         this.title=title;
//         this.studio=studio;
//         this.rating=rating;
//     }
//     set name
// }
//Q.2
//Answer:
class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    get radiusCricle(){
        return this.radius;
    }
    set radiusCricle(radius){
        this.radius=radius;
    }
    get colorCricle(){
        return this.color;
    }
    set colorCricle(color){
        this.color=color;
    }
    get toString(){
        return `"Cricle[radius=${this.radius},color=${this.color}]"`
    }
    get areaCricle(){
        return Math.PI*this.radius*this.radius;
    }
    get circumferenceCricle(){
        return 2* Math.PI*this.radius;
    }

}
const object=new Circle(1.0,"red")
console.log(object.radiusCricle)
object.radiusCricle=3.3
console.log(object.radiusCricle)
console.log(object.colorCricle)
object.colorCricle="blue";
console.log(object.colorCricle)
console.log(object.toString)
console.log(object.areaCricle)
console.log(object.circumferenceCricle)

const result=new movie("Casino Royale", "Eon Productions","PG­13")
//Q.3 Write a “person” class to hold all the details.
//Answer:
class person{
    constructor(name,age,gender,experience){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.experience=experience;

    }
}
const person1=new person("Ramesh",25,"Male",2)
console.log(`The name of the person is ${person1.name}
Age of the person is ${person1.age}
Gender ${person1.gender}
Experience ofthe person is ${person1.experience}`)

