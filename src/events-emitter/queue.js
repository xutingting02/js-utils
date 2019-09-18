export default class Queue {
    constructor() {
        this.queue = [];
    }

    push(message) {
        this.queue.push(message);
    }

    getQueue() {
        return this.queue;
    }

    pop() {
        return this.queue.pop();
    }

    del(delFunc) {
        this.queue = this.queue.filter(item => item.handler != delFunc);
    }

    clear() {
        this.queue = [];
    }
}