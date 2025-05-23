// month days:
let month = "march";
switch (month) {
    case "march":
    case "may":
    case "june":
    case "september":
    case "november":
        console.log("this month has 30 days.")
        break;
    case "february":
        console.log("this month has 28 or 29 days.")
        break;

    default:
        console.log("this month has 31 days.")
        break;
}