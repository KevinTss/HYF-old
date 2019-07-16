const array=[];
let mostfq = 1;
let most = 0;
let item;

for (var i = 0; i < array.length; i++) {
  for (var j=i; j<array.length; j++) {

    if (array[i] == array[j])
      most++;
    if (most>mostfq) {
      mostfq=most; 
      item = array[i];
    }
  }
  most=0;
}

console.log(item+" ( " +mf +" times ) ") ;