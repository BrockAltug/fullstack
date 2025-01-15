// Change the values and operators below to test your algorithm meets all conditions
const x = 50;
const expression1 = (x < 25); //false
const expression2 = (x > 50); //false

// Write Your JavaScript Code Here

if (expression1 && expression2) {  // if both are true
    console.log("True ✅ True ✅");
} else if (expression1) { // if only first is true
    console.log("True ✅ False ❌");
} else if (expression2) { // if only second is true
    console.log("False ❌ True ✅");
} else { // if both are false
    console.log("False ❌ False ❌");
}