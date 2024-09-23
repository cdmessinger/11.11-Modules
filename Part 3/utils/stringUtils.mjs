export function yell(str) {
     console.log(str.toUpperCase());
}

export function sarcasm(str) {
     let newStr = "";
     for (let i = 0; i < str.length; i++) {
          if (i % 2 === 0) {
               newStr += str[i].toUpperCase();
          } else {
               newStr += str[i];
          }
     }
     console.log(newStr);
}
