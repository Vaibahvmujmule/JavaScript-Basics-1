console.log("Hi I am learning JS")

// print numbers from 1 to 10
for(let i =1; i<=10; i++){
    console.log(i);
}
//Write the same using for each loop


//print numbers from 10 to 1
for(let j=10; j>=1; j--){
    console.log(j);
}
//Write the same using for each loop
// print all the properties of object student using for in loop
let student = {
    name: "Vaibhav",
    age: 24,
    course: "LWC"
}
 for(let key in student){
    console.log(key + ": " + student[key]);
}

//print increased salary of emp by 100 for each loop
let intial_emp_salary = 10;
for(let i = 1; i <= 5; i++){
    intial_emp_salary = intial_emp_salary + 100;
    console.log("Increased salary for employee " + intial_emp_salary);
}
//write the same using for each loop
//add break point in line number 28,22,12,5 and click on play button, next button and understand the 
// difference and the logic 
