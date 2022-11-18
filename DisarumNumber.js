function DisarumNumber(number) {  //work only 3 digit number
    let temp=number
    let sum=0
    let n=4
    while(number>0){
        r=number%10
        n--
        sum=sum+Math.pow(r,n)
        number=Math.floor(number/10)
    }
    if(sum==temp) return true
    else return false
}
console.log(DisarumNumber(134))