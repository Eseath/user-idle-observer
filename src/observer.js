export const domEvents = [
    'keydown',
    'wheel',
    'mousewheel',
    'mousedown',
    'mousemove',
    'touchstart',
    'touchmove',
    'MSPointerDown',
    'MSPointerMove',
];

const defaultSettings = {
    events: domEvents,
    isActive: false,
    timeout: 1000 * 10,
};

function observe(event) {
    clearTimeout(this.timer);

    if (this.isActive === false) {
        this.isActive = true;
        this.listeners.forEach(cb => cb(this.isActive, event));
    }

    this.timer = setTimeout(() => {
        this.isActive = false;
        this.listeners.forEach(cb => cb(this.isActive));
    }, this.settings.timeout);
}

export class UserIdleObserver {
    constructor(settings = {}) {
        this.settings = { ...defaultSettings, ...settings };
        this.isActive = this.settings.isActive;
        this.timer = null;
        this.listeners = new Set();
    }

    observe() {
        const observer = observe.bind(this);
        this.settings.isActive && observer();
        this.settings.events.forEach((eventName) => {
            document.addEventListener(eventName, observer);
        });
    }

    unobserve() {
        clearTimeout(this.timer);
        this.settings.events.forEach((eventName) => {
            document.removeEventListener(eventName, observe.bind(this));
        });
    }

    addListener(listener) {
        this.listeners.add(listener);
        return this;
    }

    removeListener(listener) {
        this.listeners.delete(listener);
        return this;
    }
}
