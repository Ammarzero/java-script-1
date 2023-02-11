/*
Switch Statment
switch(expression) {
    case 1:
        // code block
        break;
      case 2:
          // code block
          break;
        Default:
          // code block
}
- Default Ordering
- Multiple Match
- ===
*/

let day = 2;
switch (day) {
  case 0:
    console.log("saturday");
    break;
  case 0:
    console.log("sunday");
    break;
  case 2:
  case 3:
    console.log("monday");
    break;
  default:
    console.log("UnkownDay");
}
