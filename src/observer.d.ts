export type UserIdleProps = {
    // The initial activity status of the user.
    isActive?: boolean
    // Time after which the user is considered inactive (in milliseconds).
    timeout?: number
    // Array of DOM events, the occurrence of which indicates user activity.
    events?: string[]
}

export const domEvents: string[];

export class UserIdleObserver {
    constructor(options?: UserIdleProps)

    /** Starts observing idle of the user. */
    observe() : void

    /** Stops observing idle of the user. */
    unobserve() : void

    /** Adds a listener that will be called whenever the user's activity status changes. */
    addListener(listener: (isActive: boolean, event?: Event) => void) : UserIdleObserver

    /** Removes a listener previously registered with `UserIdleObserver.addListener`. */
    removeListener(listener: Function) : UserIdleObserver
}
