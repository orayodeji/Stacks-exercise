class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}


class Stack{
    constructor(){
        this.first=null;
        this.last=null;
        this.size = 0;
    }

      push(val){
        let newNode = new Node(val)
        if (this.size === 0){
            this.first = newNode;
            this.last = newNode;
            this.size++;
        }else{
            newNode.previous = this.first;
            this.first = newNode;
            this.size++
        }
        return this.size;
    }
    

    pop() {
        if (!this.first) return null;
    
        let temp = this.first;
        this.first = this.first.previous;
    
        this.size--;
        return temp.value;
      }

    peek(){
        return this.first.value
    }
     
}
