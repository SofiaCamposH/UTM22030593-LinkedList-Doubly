class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(element) {
        if (!element) {
            return "No data provided";
        }

        const node = new Node(element);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail; 
            this.tail.next = node;
            this.tail = node;
        }
    }

    prepend(element) {
        if (!element) {
            return "No data provided";
        }

        const node = new Node(element);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node; 
            this.head = node;
        }
    }

    insertAfterNode(nodeValue, element) {
        if (!nodeValue || !element) {
            return "Node value and element are mandatory";
        }

        const newNode = new Node(element);

        let current = this.head;
        while (current) {
            if (current.data === nodeValue) {
                newNode.next = current.next;
                newNode.prev = current;
                if (current === this.tail) {
                    this.tail = newNode;
                    return 'The element was appended, and it is the tail';
                }
                return 'The element was appended';
            }
            current = current.next;
        }
        return 'The node does not exist';
    }

    traverse() {
        if (!this.head) {
            return "No data in the list";
        }

        let currentValue = this.head;

        while (currentValue) {
            console.log(currentValue);
            currentValue = currentValue.next;
        }
    }

    deleteNode(element) {
        if (!element || !this.head) {
            return "No parameter or list available";
        }
        if (this.head.data === element) {
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null;
            } else {
                this.head.prev = null;
            }
            return "The specified element was the head and has been deleted";
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === element) {
                if (current.next === this.tail) {
                    this.tail = current;
                    this.tail.next = null;
                    return "The entered element has been deleted, and it was the tail";
                }
                current.next = current.next.next;
                current.next.prev = current;
                return "Element deleted";
            }
            current = current.next;
        }
        return "Element not found";
    }

    deleteHead() {
        if (!this.head) {
            return 'No head available';
        }

        this.head = this.head.next;

        if (this.head === null) {
            this.tail = null;
        } else {
            this.head.prev = null;
        }
        return 'Head deleted';
    }

    deleteTail() {
        if (!this.head) {
            return 'No data in the list';
        }

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return 'The tail was removed, and it was also the head';
        }

        this.tail = this.tail.prev;
        this.tail.next = null;
        return 'The tail was removed';
    }
}