function reverse(n){
    let arr=[]
    while(n>0){
        r=n%10
        console.log("r:",r)
        arr.push(r)
        n=Math.floor(n/10)
        console.log("n:",n)
    }
    return arr
    }
    console.log(reverse(12345).join(''))
    