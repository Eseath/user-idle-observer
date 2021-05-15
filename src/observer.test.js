import { UserIdleObserver } from './observer';

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

test('The listener must be called when the user is idle', async () => {
    const observer = new UserIdleObserver({ timeout: 50, isActive: true });
    const listener = jest.fn();

    observer.addListener(listener).observe();

    await wait(50);

    expect(listener).toHaveBeenCalledWith(false);
    expect(listener).toBeCalledTimes(1);
});

test('The listener must be called when the user wakes up', () => {
    const observer = new UserIdleObserver();
    const listener = jest.fn();
    const event = new Event('mousedown');

    observer.addListener(listener).observe();

    document.dispatchEvent(event);

    expect(listener).toHaveBeenCalledWith(true, event);
});

test('The listener must be called only once when the user wakes up', () => {
    const observer = new UserIdleObserver();
    const listener = jest.fn();

    observer.addListener(listener).observe();

    document.dispatchEvent(new Event('mousedown'));
    document.dispatchEvent(new Event('wheel'));

    expect(listener).toBeCalledTimes(1);
});

test('The listener must not be called before the specified timeout', async () => {
    const observer = new UserIdleObserver({ timeout: 50, isActive: true });
    const listener = jest.fn();

    observer.addListener(listener).observe();

    await wait(48);

    expect(listener).toBeCalledTimes(0);
});
