console.log("Program has started running.")

let yield = 50;

let rain = prompt("How many inches of rain fell?");

let grade = "None";

console.log("User has been prompted to enter rainfall. User entered " + rain)

let r = "*";

console.log("Rain: " + r.repeat(rain));

if (rain >= 20) {
    yield = (yield *.9);
} else {
    if (rain < 10) {
        yield = (yield * .8);
    } else {
        yield = yield;
    }
}

console.log("Based on rainfall entered, yield has been calculated as " + yield.toFixed(2) + " bushels per acre.");

let fertilizer = prompt("Did you use fertilizer? Enter yes or no.");

console.log("User has been prompted to confirm use of fertilizer and has responded " + fertilizer);

if (fertilizer === "no") {
    console.log ("Fertilizer was not used and so the yield should be " + yield.toFixed(2) + " bushels per acre.");
} else {
    grade = prompt("What type of fertilizer did you use? Enter premium or regular.");
    console.log ("User has been prompted for grade of fertilizer and has responded " + grade + ".")
}

if (grade === "premium") {
    yield = (yield *1.15);
    console.log("Based on rainfall and use of premium fertilizer, the yield should be " + yield.toFixed(2) + " bushels per acre.");
} else {
    if (grade === "regular") {
        yield = (yield *1.1);
        console.log("Based on rainfall and use of regular fertilizer, the yield should be " + yield.toFixed(2) + " bushels per acre.");
    } else {}
}