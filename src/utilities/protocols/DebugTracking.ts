import { TrackingProtocol } from "./Tracking";

export class DebugTracking implements TrackingProtocol {
    setUserId(userId: string | null): void {
        console.log(`UserId: ${userId ?? "null"}`);
    }

    setUserAttributes(attributes: { [key: string]: string }): void {
        console.log(`UserAttributes: ${JSON.stringify(attributes)}`);
    }

    log(event: string | null, data?: { [key: string]: any }): void {
        console.log(`Log: ${event ?? ""} ${data ? JSON.stringify(data) : "null"}`);
    }
}