
import { TrackingProtocol } from '../../utilities/protocols/Tracking';
import { FirebaseRunner } from '../config/FirebaseRunner';

// FirebaseTracking implements TrackingProtocol
export class FirebaseTracking implements TrackingProtocol {
    private firebaseAnalytics = FirebaseRunner.instance().app.analytics();

    setUserId(userId: string | null): void {
        if (userId) { 
            this.firebaseAnalytics.setUserId(userId); // Set user ID
        }
    }

    setUserAttributes(attributes: { [key: string]: string }): void {
        // Set user properties
        this.firebaseAnalytics.setUserProperties(attributes);
    }

    log(event: string | null, data?: { [key: string]: any }): void {
        if (event) {
            this.firebaseAnalytics.logEvent(event, this.toFirebaseParams(data || {}));
        }
    }

    // Helper function to convert a Map<String, Any> to Firebase compatible format
    private toFirebaseParams(data: { [key: string]: any }): { [key: string]: any } {
        const params: { [key: string]: any } = {};
        Object.entries(data).forEach(([key, value]) => {
            if (
                typeof value === 'string' ||
                typeof value === 'number' ||
                typeof value === 'boolean'
            ) {
                params[key] = value; // Add supported data types
            } else {
                console.warn(`Unsupported value type for key ${key}`);
            }
        });
        return params;
    }
}