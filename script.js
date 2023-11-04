//Q.1
//Answer:
class movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    set name(n){
          this._title=n;
    }
    get name(){
        return this.Title;
    }
    set studio(x){
        this.Studio=x;
  }
  get studio(){
      return this.Studio;
  }
    set rating(r){
        this.Rating=r;
  }
  get rating(){
      return this.Rating;
  }

}
var mov=new movie("Casino Royale","Eon Productions","PG13")
var mov1=new movie("Casino Royale","Eon Productions")
console.log(mov)
console.log(mov1)




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

//Q.4 write a class to calculate the uber price.
//Answer:
class uberPrice{
    constructor(km,amount=20){
          this.km=km;
          this.amount=amount;
    }
    get price(){
     return this.km*this.amount;
    }

}
var value1=new uberPrice(8)
var value2=new uberPrice(10,35)
console.log(value1.price)
console.log(value2.price)

