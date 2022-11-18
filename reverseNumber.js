function reverse(n){
let arr=[]
while(n>0){
    r=n%10
    arr.push(r)
    console.log(r)
    n=Math.floor(n/10)
}
return arr
}
console.log(reverse(12345).join(''))

function palimdrome(input){
    let n=reverse(input).join('')
    if(n==input) return true
    else return false
}

console.log(palimdrome(12322))
