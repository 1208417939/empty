//Q1
var name = ["武当小生", "路炜", "钟锦程", "籠", "子祥", "文轩", "四喜疯子", "薛松田", "采苓"];
alert(name.length)
//Q2
name.push("大飞哥");
name.unshift("小雨老师");
alert(name)

//Q3
function findPrime(max) {
    var prime = [];
    for (i = 1; i < max; i++) {
        var mpf = Math.floor(Math.sqrt(i)); // mpf is maximum possible factor of i 
        var isPrime = true;
        for (j = 2; j < mpf; j++) {
            if (i % j === 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            prime.push(i);
            }  
    }
    return prime
}
alert(findPrime(100))

//Q4
function isNumeric(obj) {
    return obj === +obj && !isNaN(obj);
}
function  getMaxNumber(arr) {
    numericArr = [];
    for (i = 0; i < arr.length; i++) {
        if (isNumeric(arr[i])) {
            numericArr.push(arr[i])
        }
    }
    return numericArr.sort().reverse()[0]
}

arr = [1, "2", "hello", true, 3, 2, 0];
alert(getMaxNumber(arr));

//Q5
function unique(arr) {
    arr = arr.sort();
    var uniqueArr = [];
    uniqueArr.push(arr[0]);
    for (i = 1; i < arr.length; i++) {
        if arr[i] !== uniqueArr[uniqueArr.length - 1]{
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr
}

arr = [2, 3, 4, 2, 3, 6, 4, 1, 2, 1, 5];
alert(unique(arr));
//Q6
str = "/'源栈/'：飞哥小班教学，线下免费收看" 

//Q7
var arr2 = ['why', 'gIT', 'vs2019', 'community', 'VERSION'];
var newarr = [];

for (i = 0; i < arr2.length; i++){
    str1 = arr2[i][0].toUpperCase() + arr2[i].substring(1, 6).toLowerCase();
    newarr.push(str1);
}
console.log(newarr);

//Q8
function getRandomArray(length) {
    var intArr = [];
    for (i = 0; i < length; i++) {
        a = Math.random();
        intArr.push[Math.floor(100 * a)];
    }
    return intArr;
}

//Q9
function reverseStr(str) {
    var rev = '';
    for (i = str.length - 1; i > -1; i--) {
        rev += i;
    }
    return rev;
}

//Q10
var charStr = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
var charArr = [];
for (i = 0; i < charStr.length; i++) {
    charArr.push(charStr[i]);
}
function countWord(paragraph) {
    i = 0
    wordCount = 0
    while (i < paragraph.length) {
        i += 1
        if charArr.indexOf(paragraph[i]) !== -1{
            while charArr.indexOf(paragraph[i+1]) !== -1
                i += 1;
            wordCount += 1;
        }
        return wordCount;
    }

}

//Q11
function Redbag(stuNum) {
    return (986 - stuNum*19.8)
}

has()