export interface TrackingProtocol {
    setUserId(userId: string | null): void;
    setUserAttributes(attributes: { [key: string]: string }): void;
    log(event: string | null, data?: { [key: string]: any }): void;
}

// Define the Tracking class
export class Tracking {
    private static _shared: TrackingProtocol | null = null;

    static get shared(): TrackingProtocol | null {
        return this._shared;
    }

    static set shared(value: TrackingProtocol | null) {
        this._shared = value;
    }
}