function firstNonRepeatedChar(str) {
 // Write your code here
	
 for(let i=0;i<str.length-1;i++){
	 let count=0;
	 if(str[i]==str[i+1]){
		 count++;
	 }else{
		 if(count==0){
			 return str[i];
		 }
	 }
 }
	
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
