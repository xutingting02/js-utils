import Queue from './queue';

export default class QueueList {
    constructor() {
        this.queueList = {};
    }

    get(namespace) {
        if (!this.queueList[namespace]) {
            this.queueList[namespace] = new Queue();
        }
        return this.queueList[namespace];
    }

    push(namespace, message) {
        this.get(namespace).push(message);
    }

    has(namespace) {
        return !!this.queueList[namespace];
    }

    del(namespace, delFunc) {
        if (!delFunc) {
            this.queueList[namespace].clear();
        }
        else if (namespace === '*') {
            Object.keys(this.queueList).forEach(queueName => {
                this.queueList[queueName].del(delFunc);
            });
        }
        this.queueList[namespace].del(delFunc);
    }
}