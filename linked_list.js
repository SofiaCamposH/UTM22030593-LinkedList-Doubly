class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(data) {
        if (!data) return "No data provided";
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    prepend(data) {
        if (!data) return "No data provided";
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    insertAfterNode(node, element) {
        if (!node || !element) {
            return "Node and element are mandatory";
        }

        const newNode = new Node(element);

        let current = this.head;
        while (current) {
            if (current.data === node) {
                newNode.next = current.next;
                current.next = newNode;
                if (current === this.tail) {
                    this.tail = newNode;
                    return 'The element was appended and it is the tail';
                };
                return 'The element was appended';
            }
            current = current.next;
        }
        return 'The node doesnt exist'
    }


    traverse() {
        if (!this.head) {
            return "Theres no data";
        }

        let currentValue = this.head;

        while (currentValue) {
            console.log(currentValue);
            currentValue = currentValue.next;
        }
    }

    deleteNode(element) {
        if (!element || !this.head) {
            return "There's not a parameter or list";
        }
        if (this.head.data === element) {
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null;
            }
            return "The indicated element was the head";
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === element) {
                if (current.next === this.tail) {
                    this.tail = current;
                    return "The indicated element was deleted";
                }
                current.next = current.next.next;
                return "Erased element";
            }
            current = current.next;
        }
    }
    deleteHead() {
        if (this.head) {
            return "No list to delete head";
        }
        this.head = this.head.next;
        if (this.head === null) {
            this.tail = null;
        }
    }
    deleteTail() {
        if (!this.head)
            return "There's no list";
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        let current = this.head;
        while (current.next) {
            if (current.next === this.tail) {
                this.tail = current;
                return "Tail reasigned"
            }
            current = current.next;
        }
    }
}