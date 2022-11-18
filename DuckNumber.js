function duckNumber(n){
while(n>0){
    r=n%10
    console.log(r)
    n=Math.floor(n/10)
}

}

duckNumber(1234)