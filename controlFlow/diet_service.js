let userRole = "Employee";
let accessToService;
let accessFlag = false;

if (userRole === "Employee") {
    accessToService = "have access to \"Dietary Services\"";
    accessFlag = true;
} else if (userRole === "Member") {
    accessToService = "have access to \"Dietary Services\" and one-on-one interaction with a dietician";
    accessFlag = true;
} else if (userRole === "Subscriber") {
    accessToService = "have partial access to facilitate \"Dietary Services\"";
    accessFlag = true;
} else {
    accessToService = "don't have access to \"Dietary Services\"";
}

console.log(accessToService);
if(!accessFlag) {
    console.log("you need to enroll or at least subscribe first to avail this facility.");
}