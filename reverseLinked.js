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

    reverse(){
        let temp=null
        let nextnode=null
        while(this.head){
            nextnode=this.head.next
            this.head.next=temp
            temp=this.head
            this.head=nextnode
        }
        this.head=temp
        // for(let i=temp;i!=null;i=i.next){
        //     console.log(i.data)
        // }
        
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
sl1.reverse()
sl1.disp()
   