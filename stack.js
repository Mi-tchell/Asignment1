class stack
{
contructor()
  {
    this.items = []
    this.count = 0
  }
  
//add element on top of stack 
  push(element) {
    this.items[this.count] = element
    console.log(`{element} added to {this.count}`)
    this.count += 1
    return this.count - 1
  }
  
//return and remove top element in stack
//return undefined if stuck is empty
     pop() {
       if (this.count == 0) return unefined
       let deleteItem = this.item[this.count - 1]
       this.count -= 1
       console.log (`${deleteitem} removed`)
       return deleteitem
     }
 //check top element in stack
     peek() {
       console.log(`top element is ${this.items[this.count - 1 ]}`)
       return this.item[this.count - 1]
     }
//check if stack is emtpy
  isEmpty() {
    console.log(this.count == 0 ? `stack is empty`
    :`stack is NOT empty`)
    return this.count == 0
  }
}
const stack = new stack()

stack.isEmpty()

stack.push(1)
stack.push(2)

stack.peek()

stack.push(3)

stack.pop()
stack.pop()

stack.isEpmty()
