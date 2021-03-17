/* Write a function called repeat_string which repeats the given string str exactly count times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
FUNDAMENTALS */

function repeatStr (n, s) {
    return n > 0 ? s.repeat(n) : " ";
}