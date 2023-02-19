// Question3
let science = "Physics, Chemistry,  Biology, Technical drawing,";
let Arts = "Government, Literature, History, Economics";
let social_sciences = "Geography, Accounting, Commerce, Economics";
let General_studies = " English, Mathematics"

let studentGroup= General_studies;

if (studentGroup == science) {
    console.log (science + "," + General_studies)
} else if (studentGroup == Arts) {
    console.log(Arts + "," + General_studies)
}else if (studentGroup == social_sciences) {
    console.log(social_sciences + "," + General_studies)
} 
else {
    console.log(General_studies)
};
// Government, Literature, History, Economics, English, Mathematics

// Question5
let num = 20;
let pwr;
for (let index = 2; index < 20; index = index**2) {
    pwr= index
    
}
console.log("The number " + pwr + " is the power of 2 nearest to "  + num)
// The number 16 is the power of 2 nearest to 20
