let arr = [1,3,5,7,9,13]

function addLast(value) {
    arr[arr.length] = value;
    console.log(arr);
}

function addFirst(value){
    arr[0] = value;
    console.log(arr);
}

function addFirst2(value){
    let arr2 = [];
    arr2[0] = value;
    for (let i = 0; i < arr.length; i++) {
        arr2[i+1] = arr[i];
    }
    arr =arr2;
    console.log(arr);
}

function addFirst3(value){
    for (let i = arr.length; i > 0; i--) {
        arr[i] = arr[i-1];
    }
    arr[0] = value;
    console.log(arr);
}

function add(index,value){
    for (let i = arr.length; i  > index; i--) {
        arr[i] = arr[i-1];
    }
    arr[index] = value;
    console.log(arr);
}

arr.splice(2,0,"8","10",12,14,16);

let str = "1234456678";
console.log(str);

let arrStr = str.split(" ");
let str2 = arrStr.join("-");


function convertNumber() {
    let numbers = str.split('');
    console.log(numbers);
    for (let i = 0; i < numbers.length-1; i++) {
        if(numbers[i]%2 === 0 && numbers[i+1]%2===0){
            numbers.splice(i+1,0,"-");
            i++;
        }
    }
    let result = numbers.join("");
    console.log(result);
}
convertNumber();
