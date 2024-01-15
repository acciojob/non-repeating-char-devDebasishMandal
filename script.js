function firstNonRepeatedChar(str) {
 // Write your code here
	str.split("");
	let char='';
 for(let i=0;i<str.length-1;i++){
	 let count=1;
	 if(str[i]===str[i+1]){
		 count++;
	 }else{
		 if(count==1){
			  char=str[i];
		 }
	 }
 }
	return char
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 



