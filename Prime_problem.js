N=5;
let count=0;
for (let i=0;i<=N-1;i++){
  if(N%i==0 && N%N==0){
    count=count+1;
}
}
if(count==1){
  console.log("Yes");
}else{
  console.log("No");
}
