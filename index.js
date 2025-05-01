//Define a user constractor
//create a function called user  with propeties; name,to store user's name  and stepsWalked,
//to store daily steps as an array
//Define a method total steps that calculates and return total number of steps walked
//initialize a variable total=0
//iterate through the stepsWalked array, add the steps  to total and return the total
//Define a method average steps that return the average steps per day
//Check if the stepsWalked array is empty
//if not, calculate average by dividing the total steps by this.stepsWalked.length
//return average
//call user constructor with a name
//add daily steps to this.stepsWalked array 
//print the total and average steps

function User(name,stepsWalked){
    this.name=name;
    this.stepswalked=[];


    this.totalSteps=function(){
        let total=0;
        for (let steps of this.stepsWalked){
            total += steps;
        }
        return total;
    }


    this.averageSteps= function(){
        if ( this.stepsWalked.length===0){
            return 0;
        }
        const total= this.totalSteps();
        return total/ this.stepsWalked.length;
    };
};

const userA= new User("Becky");
userA.stepsWalked=[500,300,800,1000];

console.log(`Total steps:${userA.totalSteps()}`);
console.log(`Average steps:${userA.averageSteps()}`);



//create a function recipe that takes in name, ingredient, cooktime as parameters.
//step 1: Initialize  propeties
   // this.name=name
   // this.ingredients=ingredients
   // this.cooktime=cooktime
//step 2: Define method displayRecipe that
   //print recipe name
   //print ingredients list  
   // forEach ingredient in this.ingredients
   // print ingredient
//step 3:  Define method isQuickMeal that
   //checks if cook time is less or equal to 30 and returns a boolean
// step 4:instantiate the  recipe object with specific values
// step 5: call the methods

function Recipe( name,ingredients, cookTime){
    this.name=name;
    this.ingredients=ingredients;
    this.cookTime= cookTime;

    this.displayRecipe= function(){
        console.log(`Recipe: ${this.name}`);
        console.log("Ingredients: ");
        this.ingredients.forEach( ingredient =>{
            console.log(`- ${ingredient} `);
        })
    };
    this.isQuickMeal=function(){
        return this.cookTime <=30;
    };

}
const ugali= new Recipe("Brown Ugali", ["sorghum flour", "water", "Maize flour"], 20);
console.log(`Is this a quick meal? ${ugali.isQuickMeal()}`)
console.log (ugali.displayRecipe())


//Define the car constructor that has the properties model mileage ,serviceHistory(array)
//Initialize the properties
  //this.model=model;
  //this.mileaage=mileage;
  //this.serviceHistory as an empty array
//define the methods
//addService that add the service date to the serviceHistory array
//lastServiceDate that return the most recent service date from the serviceHistory array

  




function Car(model,mileage,serviceHistory){
    this.model=model;
    this.mileaage=mileage;
    this.serviceHistory=[];

    this.addService= function(date){
        this.serviceHistory.push(date);
    };
     this.lastServiceDate=function(){
        if(this.serviceHistory.length===0){
            return null;
        };
        return this.serviceHistory[this.serviceHistory.length -1];

     };

}

const goodCar= new Car("Honda Accord", 50000);
 goodCar.addService('2025-06-20');
 goodCar.addService('2025-03-24');

 console.log(` Last day of service: ${goodCar.lastServiceDate()}`);


 //Define the playist constructor that has property song (array)
 //Define method 
 // addSong that add a song
 //removeSong that finds index of song tittle in the song array and remove if it exits
 //listSong that prints all songs that are currently in the songs array

 

 function Playlist(songs){
    this.songs=[];

    this.addSong=function(tittle){
        this.songs.push(tittle);
        console.log(`Added: ${ tittle}`);

    };

    this.removeSong=function(tittle){
        const index= this.songs.indexOf(tittle);
        if (index >-1){
            this.songs.splice(index,1);
            console.log(`Removed:${tittle}`);
        }else{
            console.log(`Song not found: ${tittle}`);
            

        }

    };

    this.listSongs=function(){
        console.log("Current playlist");
        this.songs.forEach(song =>{
            console.log(`- ${song}`);
        });
        

    };

 }

 const favPlaylist = new Playlist();
 favPlaylist.addSong("Regea");
 favPlaylist.addSong("RnBs");
 favPlaylist.listSongs();
 favPlaylist.removeSong("Regea");
 favPlaylist.listSongs();



 //define course constructor with  lessonsproperties tittle,lessons(array) and completedlessonss(array)
 //Initialize the properties
    //this.tittle=tittle
   // this.lessons=lessons
   // this.completedLessons as an empty array
//Define the method markComplete that add the lessons to completedLesson
  //input lesson
  //check if lesson is in this.lessons
  //if true and lesson is not in this.completedLessons; add lesson to this.completedLessons
  //else Print 'lesson already completed'
//Define the method getProgress that returns a string 
   //return a string '1 out of 2 lessons completed'
//call the methods
 


function Course(tittle,lessons,completedLessons){
    this.tittle=tittle;
    this.lessons=lessons;
    this.completedLessons=[];

    this.markComplete = function(lesson){
        if(this.lessons.includes(lesson) && !this.completedLessons.includes(lesson)){
            this.completedLessons.push(lesson);
            console.log(`Lesson "${lesson}" marked as complete.
                `)
        }else{
            console.log("Lesson already completed");
        }

    };

    this.getProgress= function(){
        const totalLessons=this.lessons.length;
        const complete= this.completedLessons.length;
        return `${complete} out of ${totalLessons} lessons completed`
    }
}

const course = new Course("Javascript",["Arrays","Declaring variables","Objects","Control flow", "Strings"]);
course.markComplete("Arrays");
console.log(course.getProgress());

course.markComplete("Objects");
console.log(course.getProgress());

course.markComplete("Control flow");
console.log(course.getProgress());
