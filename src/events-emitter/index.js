import QueueList from './queue-list'

export default class EventsEmitter {
    constructor() {
        this.events = new QueueList();
    }

    fire(message) {
        if (message && message.type && this.events.get(message.type)) {
            this.events.get(message.type).getQueue.forEach(queue => {
                queue.handler(message);
                if (queue.once) {
                    this.events.del(type, handler);
                }
            });
        }
    }

    on(type, handler) {
        this.events.push(type, {handler});
    }

    once(type, handler) {
        this.events.push(type, {
            handler,
            once: true
        });
    }

}