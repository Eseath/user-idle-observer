# User Idle Observer

Tracks the user's activity status. Calls your listeners when considered the user is idle or wakes up.

## Installation

```shell
npm i @eseath/user-idle-observer
```

## Usage example

```js
import { UserIdleObserver } from '@eseath/user-idle-observer';

const observer = new UserIdleObserver();
const listener = (isActive, event) => {
    if (isActive) {
        console.log('You have shown activity through a', event.type);
    } else {
        console.log('Wake up!');
    }
};

observer.addListener(listener).observe();
```

With custom options:

```js
import { UserIdleObserver, domEvents } from '@eseath/user-idle-observer';

const observer = new UserIdleObserver({
    isActive: true,
    timeout: 5000,
    events: [...domEvents, 'keyup'],
});
```

In browser:

```html
<script src="./dist/user-idle-observer.umd.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function () {
        const observer = new UserIdleObserver({
            isActive: true,
            timeout: 5000,
            events: [...UserIdleObserver.domEvents, 'keyup'],
        });

        observer.addListener((isActive, event) => {
            if (isActive) {
                console.log('You have shown activity through a', event.type);
            } else {
                console.log('Wake up!');
            }
        });

        observer.observe();
    });
</script>
```

## Options

| Name       | Type     | Default | Description |
|------------|----------|---------|-------------|
| `isActive` | boolean  | false   | The initial activity status of the user. |
| `timeout`  | number   | 10000   | Time after which the user is considered inactive (in milliseconds). |
| `events`   | string[] |         | Array of DOM events, the occurrence of which indicates user activity. |

## Methods

See [src/observer.d.ts](https://github.com/Eseath/user-idle-observer/blob/main/src/observer.d.ts)
