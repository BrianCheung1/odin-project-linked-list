class Node {
    constructor(value = null, nextNode = null) {
        this.value = value
        this.nextNode = nextNode
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(value) {
        const node = new Node(value)
        if (this.head === null) {
            this.head = node
            this.tail = node
        }
        else {
            this.tail.nextNode = node
            this.tail = node

        }
    }

    prepend(value) {
        const node = new Node(value)
        if (this.head === null) {
            this.head = node
            this.tail = node
        }
        else {
            node.nextNode = this.head
            this.head = node
        }
    }

    size() {
        let count = 0
        if (this.head === null) {
            return 0
        }
        else {
            let currentNode = this.head;
            while (currentNode) {
                count++
                currentNode = currentNode.nextNode
            }
        }
        return count
    }

    getHead() {
        return this.head
    }

    getTail() {
        return this.tail
    }

    at(index) {
        let currentNode = this.head
        for (let i = 0; i < index; i++) {
            if (currentNode.nextNode) {
                currentNode = currentNode.nextNode
            } else {
                return "Null"
            }
        }
        return currentNode
    }

    pop() {
        if (this.size() > 1) {
            this.tail = this.at(this.size() - 2)
            this.tail.nextNode = null
        }
        else {
            return "Empty List"
        }
    }

    contains(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true
            }
            currentNode = currentNode.nextNode
        }
        return false
    }

    find(value) {
        let currentNode = this.head
        let index = 0
        while (currentNode) {
            if (currentNode.value === value) {
                return index
            }
            currentNode = currentNode.nextNode
            index++
        }
        return null
    }

    toString() {
        if (this.size() === 0) {
            console.log("Empty List")
            return
        }
        let currentNode = this.head
        let output = ""
        while (currentNode) {
            output += `${currentNode.value} ->`
            currentNode = currentNode.nextNode
        }
        output += "null"
        return output
    }

    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value)
        }
        else if (index > this.size()) {
            this.append(value)
        }
        else {
            let prevNode = this.at(index - 1)
            let newNode = new Node(value)
            newNode.nextNode = prevNode.nextNode
            prevNode.nextNode = newNode
        }
    }

    removeAt(index) {
        if (index === 0) {
            if (this.head) {
                const head = this.head
                this.head = head.nextNode
                head.nextNode = null
            }

        }
        else if (index === this.size() - 1) {
            this.pop()
        }
        else {
            const previousNode = this.at(index - 1);
            const deletedNode = previousNode.nextNode;
            previousNode.nextNode = deletedNode.nextNode;
            deletedNode.nextNode = null;
        }

    }

}


// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.prepend("fish1")
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("fish")
list.pop()
list.insertAt("orange", 2)
list.removeAt(3)
console.log(list.contains("cat"))
console.log(list.contains("a"))
console.log(list.find("cat"))
console.log(list.getHead())
console.log(list.getTail())
console.log(list.size())
console.log(list.toString())