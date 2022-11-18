//6. WAP to find the given string is Palindrome or not

function palimdrome(string) {
    let i=0
    let j=string.length-1
    while (i <= j) {
        if(string[i]==string[j]){
        i++
        j--
        }else{
            return "not palimdrome"
        }
    }
    return "palimdrome"
}

console.log(palimdrome("abcdcba"));

function palimdrome2(string){
    if(string.length==0) return "palimdrome"
    if(string[0]==string[string.length-1])
    return palimdrome2(string.slice(1,-1)) 
    else return "not palimdrome" 
}

console.log(palimdrome2("12321"))

function palimdrome3(number) {
    if(number.length ==0) return "palimdrome"
    if(number.pop()==number.unshift())
    return palimdrome3(number)
    else return "not palimdrome" 
}

console.log(palimdrome3([1,2,3,4,3,2,1]))
