import { TrackingProtocol } from "./Tracking";

export class CompositeTracking implements TrackingProtocol {
    private trackings: TrackingProtocol[] = [];

    setUserId(userId: string | null): void {
        for (const tracking of this.trackings) {
            tracking.setUserId(userId);
        }
    }

    setUserAttributes(attributes: { [key: string]: string }): void {
        for (const tracking of this.trackings) {
            tracking.setUserAttributes(attributes);
        }
    }

    log(event: string | null, data?: { [key: string]: any }): void {
        for (const tracking of this.trackings) {
            tracking.log(event, data);
        }
    }

    add(tracking: TrackingProtocol | null): void {
        if (tracking) {
            this.trackings.push(tracking);
        }
    }
}