import java.util.List;
import java.util.ArrayList;

//№4 крестики нолики



let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
let f = 6;
let g = 7;
let h = 8;
let i = 9;

// public class Main {
//     public static void main(String[] args) {
//         List<Integer> listCell = List.of();
//     }
// }

//console.log(`---------\n`);

for (let q = 0; q < 3; q++)
{
    console.log(`---------\n`);
    if (q === 0)
        console.log(`| ${a} | ${b} | ${c} |\n`);
    else if (q === 1)
        console.log(`| ${d} | ${e} | ${f} |\n`);
    else
        console.log(`| ${g} | ${h} | ${i} |\n`);
}

let opcion = prompt("Введите текст: ");

// if () {}
// else {}