import React from "react";
import { switchCase, switchStatement } from "@babel/types";
import { statement } from "@babel/template";
import { EEXIST } from "constants";

export const DataTypes = () => {
  let message;
  message = 5;

  let type;

  let type1 = "surya";

  let number1 = 5;
  let number2 = 10;

  let check = number1 > 3 || number2 < 6;
  let check1 = number1 > 3 && number2 < 6;
  let check2 = number1 > 3;

  let i;
  i = 10;

  function checkValue(mes) {
    if (mes > 2) {
      return "true";
    } else {
      return "false";
    }
  }

  function printType(mType) {
    console.log(mType);
  }

  function pandi(mess) {
    console.log(typeof mess);
  }

  function messageType(mess) {
    return `hello ${mess}`;
  }

  function logicalOrCondition(check) {
    console.log(check);
  }

  function logicalAndCondition(check1) {
    console.log(check1);
  }

  function logicalNotCondition(check2) {
    console.log(!check2);
  }

  function whileLoop(i) {
    while (i < 3) {
      i++;
    }
    return i;
  }

  function doWhileLoop(i) {
    do {
      {
        i++;
      }
    } while (i < 3);
    return i;
  }

  function forLoop(i) {
    for (let s = i; s < 100; s++) {
      console.log(s);
      s++;
    }
  }

  function switchStatement(i) {
    switch (i) {
      case 3:
        return "Too small";
      case 4:
        return "Exactly!";
      case 5:
        return "Too big";
      default:
        return "I don't know such values";
    }
  }

  function ifIntoSwitch(i) {
    switch (i) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
      case 3:
        return "(2, 3)";
      default:
        return "don't know!";
    }
  }

  function forOne(i) {
    for (let t = i; t < 100; t++) {
      if (t % 3 == 0 && t % 5 == 0) {
        console.log(t);
      }
    }
  }

  function switchStatement(i) {
    switch (i) {
      case "a":
        return "1";
      case "b":
        return "2";
      case "c":
        return "3";
      case "d":
        return "4";
      case "e":
        return "5";
      case "f":
        return "6";
      case "g":
        return "7";
      case "h":
        return "8";
      case "i":
        return "9";
      case "j":
        return "10";
      case "k":
        return "11";
      case "l":
        return "12";
      case "m":
        return "13";
      case "n":
        return "14";
      case "o":
        return "15";
      case "p":
        return "16";
      case "q":
        return "17";
      case "r":
        return "18";
      case "s":
        return "19";
      case "t":
        return "20";
      case "u":
        return "21";
      case "v":
        return "22";
      case "w":
        return "23";
      case "x":
        return "24";
      case "y":
        return "25";
      case "z":
        return "26";
      default:
        return "not exist";
    }
  }
  function printWord(name) {
    for (let s = 0; s < name.length; s++) {
      console.log(name[s], switchStatement(name[s]));
    }
  }

  function printDouble(word) {
    let nlen = word.length;
    for (let s = 0; s < word.length; s++) {
      console.log(word[s], word[s].repeat(nlen));
      nlen--;
    }
  }
  function printSingleLetter(name) {
    for (let c = 0; c < name.length; c++) {
      console.log(name[c] + (c + 1));
    }
  }

  function printDoubleLetter(name) {
    for (let a = 0; a < name.length; a++) {
      console.log(name[a] + name[a], a + 1, a + 1);
    }
  }

  function printReverseLetter(name) {
    let p = name.length;
    for (let c = 0; c < name.length; c++) {
      console.log(name[c] + p);
      p--;
    }
  }

  function printChange(name) {
    let p = name.length;
    let output = "";
    for (let c = 0; c < name.length; c++) {
      for (let d = 0; d <= c; d++) {
        output = output + name[d];
      }
      output = output + "*".repeat(p - 1);
      console.log(output);
      p--;
      output = "";
    }
  }

  function printReplace(name, name1) {
    let output = "";
    let gaps = 0;
    let r = 0;

    for (let c = 0; c < name.length; c++) {
      for (let d = 0; d <= c; d++) {
        output = output + name[d];
      }
      gaps = name.length - output.length;
      r = Math.ceil(gaps / name1.length);

      output = output + name1.repeat(r).slice(0, gaps);
      console.log(output);
      output = "";
    }
  }

  function PrintReverse(name, name1) {
    let output = "";
    let gaps = 0;
    let r = 0;

    for (let c = 0; c < name.length; c++) {
      for (let d = 0; d <= c; d++) {
        output = output + name[d];
      }
      gaps = name.length - output.length;
      r = Math.ceil(gaps / name1.length);
      output =
        name1.repeat(r).slice(0, gaps) +
        output
          .split("")
          .reverse()
          .join("");
      console.log(output);
      output = "";
    }
  }

  function recognizeValue(word, letter) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] == letter) {
        console.log(i);
      }
    }
  }

  function twoValues(word, letters) {
    for (let i = 0; i < letters.length; i++) {
      for (let j = 0; j < word.length; j++) {
        if (word[j] == letters[i]) {
          console.log(j + 1);
        }
      }
    }
  }

  function valuesOf(word, numbers) {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < word.length; j++) {
        if (numbers[i] == word[j]) {
          console.log(i + 1);
        }
      }
    }
  }

  function whileLoop(i) {
    while (i < 10) {
      i++;
    }
    return i;
  }

  function doWhileLoop(i) {
    do {
      i++;
    } while (i < 3);
    return i;
  }

  function printNumber(until) {
    for (let k = -7; k < until; k++) {
      console.log(k);
    }
  }

  function printVowels(word) {
    let c = 0;
    for (let i = 0; i < word.length; i++) {
      if (
        word[i] == "a" ||
        word[i] == "e" ||
        word[i] == "i" ||
        word[i] == "o" ||
        word[i] == "u"
      ) {
        c++;
      }
    }
    return c;
  }

  function printValue(word, num) {
    debugger;
    for (let i = 0; i < num; i++) {
      console.log(word[i]);
    }
  }

  function printHello(word) {
    for (let i = 0; i < word.length; i++) {
      console.log(word[i]);
      i++;
    }
  }

  function printNumberWord(word, number) {
    for (let i = 0; i < word.length; i++) {
      console.log(word[i]);
      i = i + number;
      i--;
    }
  }

  function printAlter(word, word1) {
    let k = "";
    for (let i = 0; i < word.length || i < word1.length; i++) {
      if (i < word.length) k = k + word[i];

      if (i < word1.length) k = k + word1[i];
    }
    console.log(k);
  }

  function printSplit(word, word1) {
    let k = "";
    for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < word1.length; j++) {
        if (i < word.length) k = k + word[i];

        if (i < word1.length) k = k + word1[i];
      }
    }
    console.log(k);
  }

  function printChar(word) {
    let result = word.charAt(0);
    let count = 1;
    if (word.length == 1) {
      result = result + count;
      return result;
    } else {
      for (let i = 1; i < word.length; i++) {
        if (word.charAt(i) != word.charAt(i - 1)) {
          result = result + count + word.charAt(i);
          count = 1;
        } else {
          count++;
        }
        if (i == word.length - 1) {
          result = result + count;
        }
      }
      console.log(result);
    }
  }

  function printAll(word) {
    let j = "";
    for (let i = 0; i < word.length; i++) {
      j = j + word[i] + "1".repeat(i + 1);
    }
    console.log(j);
  }

  function printRe(word) {
    let j = "";
    for (let i = 0; i < word.length; i++) {
      j = j + word[i] + "1".repeat(word.length - i);
    }
    return j;
  }

  function printAssaign(word) {
    let j = "";
    for (let i = 0; i < word.length; i++) {
      j = j + word[i] + "[" + (word.length - i) + "]";
    }
    return j;
  }

  function printNum(num) {
    let j = "";
    for (let i = 0; i < num; i++) {
      j = j + (num - i) + "|";
    }
    console.log(j);
  }

  function printTwoCombine(word, word2) {
    let j = "";
    for (let i = 0; i < word.length; i++) {
      j = j + word[i] + (word2 - i);
    }
    return j;
  }

  function PrintEnd(word, num) {
    let i = 0;

    let result = "";
    let num1 = num;
    while (num !== -num1) {
      result += word[i] + num;
      i++;
      num--;

      if (i === word.length) {
        i = 0;
      }
    }

    return result;
  }

  function PrintCall(word) {
    let j = "";
    for (let i = 0; i < word.length; i++) {
      j += word[i] + word[i].repeat(i + 1);
    }
    return j;
  }

  function printCalling(word) {
    debugger;
    let result = "";
    for (let i = 0; i < word.length; i++) {
      let letter = "";
      let number = "";
      letter = word[i];
      for (let j = 0; j <= i; j++) {
        number += (j + 1).toString();
      }
      result += letter + number;
    }
    return result;
  }

  function splitWord(word, number) {
    let k = "";
    for (let i = 0; i < word.length - 2; i++) {
      for (let j = i; j < number + i; j++) {
        k += word[j];
      }
      k += " ";
    }
    return k;
  }

  function repeatVowels(word) {
    let k = "";
    let vowelCount = 0;
    for (let i = 0; i < word.length; i++) {
      k += word[i];
      vowelCount = 0;
      for (let j = i + 1; j < word.length; j++) {
        if (
          word[j] == "a" ||
          word[j] == "e" ||
          word[j] == "i" ||
          word[j] == "o" ||
          word[j] == "u"
        ) {
          vowelCount++;
        }
      }
      k += vowelCount;

    }
    return k;
  }

  return (
    <div>
      {/* <p>Variable is: {message}</p>
      <p>Function value is: {checkValue(message)}</p>
      <p>type value is {printType(type)}</p>
      <p>type of{pandi(type1)}</p>
      <p>the value of {messageType(type1)}</p>
      <p>the logical or condition is {logicalOrCondition(check)}</p>
      <p>the logical and condtion is {logicalAndCondition(check1)}</p>
      <p>the Logical not operation is {logicalNotCondition(check2)}</p>
      <p>the while loop result is {whileLoop(i)}</p>
      <p>the do-while loop result is {doWhileLoop(i)}</p>
      <p>the for loop result is {forLoop(i)}</p>
      
      <p>the if into switch result is {ifIntoSwitch(i)}</p>
      <p>the for loop one result is {forOne(i)}</p>
  <p>the result of a is {switchStatement('u')}</p>
      <p>the printed value is {printWord("surya")}</p>
      <p>the double printed letters are {printDouble("word")}</p>
      <p>the printed single letter is{printSingleLetter("hello")}</p>
      <p>the printed double letters are{printDoubleLetter("hello")}</p>
      <p>the printed reverse value is{printReverseLetter("hello")}</p> 
      <p>the printed changing value is{printChange("hello","*")}</p>
      <p>the replacing value is{printReplace("hello", "su")}</p>
     <p>the printing reverse value is {PrintReverse("hello", "su")}</p>
      <p>the e value is {recognizeValue("hello", "e")}</p> 
      <p>the e value is {twoValues("hello", "el")}</p> 
      <p>the two values are {valuesOf("hello", "234")}</p>
      <p>the value of while loop is {whileLoop(i)}</p>
      <p>the switch case result is {switchStatement("i")}</p>
      <p>the value of do-while loop is {doWhileLoop(i)}</p>
      <p>the printed numbers are {printNumber(10)}</p>
      <p>print the value of vowels {printVowels("hello")}</p>
      <p>the print value is {printValue("hello",2)}</p>
      <p>the value of hello is {printHello("hello")}</p>
      <p>the printed value is {printNumberWord("hello",3)}</p>

      <p>the value of alter is{printAlter("hello", "surya")}</p>
      <p>the value of alter is{printSplit("hello", "surya")}</p>*/}
      <p>the value of repeated character are {printChar("heeelllllooooo")}</p>
      <p>the output is {printAll("hello")}</p>
      <p>the value of {printRe("hello")}</p>
      <p>the value of {printAssaign("hello")}</p>
      <p>the value of {printNum(25)}</p>
      <p>the value is {printTwoCombine("hello", 20)}</p>
      <p>the value is {PrintEnd("hello", 3)}</p>
      <p>the value is {PrintCall("hello")}</p>
      <p>the value of {printCalling("hello")}</p>
      <p>the value is {splitWord("hello", 3)}</p>
      <p>the value of {repeatVowels("Lakshmi")}</p>
    </div>
  );
};

export default DataTypes;
