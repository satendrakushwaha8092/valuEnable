class Node{
    constructor(data,next){
        this.data = data;
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head=null
        this.tail=null
    }

    addAtEndOfList(data){
        const node=new Node()
        node.data=data
        if(!this.head){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            this.tail=node
        }
    }

    disp(){
        for(let i=this.head;i!=null;i=i.next){
            console.log(i.data)
        }
    }
}


const sl1=new linkedList
sl1.addAtEndOfList(4)
sl1.addAtEndOfList(5)
sl1.addAtEndOfList(6)
sl1.addAtEndOfList(7)
sl1.addAtEndOfList(8)
sl1.addAtEndOfList(9)
//sl1.disp()

console.log("singly linkedList2")

const sl2=new linkedList
sl2.addAtEndOfList(11)
sl2.addAtEndOfList(12)
sl2.addAtEndOfList(13)
sl2.addAtEndOfList(6)
sl2.addAtEndOfList(7)
sl2.addAtEndOfList(8)
sl2.addAtEndOfList(9)
//sl2.disp()

for(let i=sl1.head;i!=null; i=i.next){
    for(let j=sl2.head;j!=null; j=j.next){
        if(i.data==j.data) console.log(i.data)
    }
}


// timecomplexity=n2
console.log("logic 2--------------------------------")

let i=sl1.head
let j=sl2.head
while(1){
    if(i.data==j.data) console.log(i.data)
    j=j.next

    if(j==null) {
        i=i.next
        j=sl2.head
    }

    if(i==null) break
}

//timecomplexity=n
   