//  Character Type (Vowel or Consonant):
let character = "a";

switch (character) {
    case "a":
    case "e":
    case "o":
    case "i":
    case "u":
        console.log("it's a vowel.")
        break;

    default:
        console.log("it's a consonant")
        break;
}