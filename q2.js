//2. Swap Values without using any variable a=10, b=12

function swap(a, b) {
    [a,b]=[b,a]
    
    return [a,b]
}

console.log(swap(2,3))

function swap2(a, b) {
    let c=a+b
    a=c-a
    b=c-b
    
    return [a,b]
}

console.log(swap2(2,3))


function swap3(a, b) {
    a=a+b
    b=a-b
    a=a-b
    
    return [a,b]
}

console.log(swap3(2,3))

function swap4(a, b) {
    a=a*b
    b=a/b
    a=a/b
    
    return [a,b]
}

console.log(swap4(2,3))