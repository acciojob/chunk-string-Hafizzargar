function stringChop(str, size) {
  // your code here
	let arr=[];
	let z=0;
	let i=0
	while(i<str.length-1){
		let s="";
	  i=z;
		z=z+size;
	    
		for(let j=i;j<z;j++){
			s=s+str.charAt(j);
		}
		arr.push(s);
		
	}
	return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
