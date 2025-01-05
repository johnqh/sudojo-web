// Define the UINotificationProtocol interface
export interface UINotificationProtocol {
    receive(message: { [key: string]: any }): void; // Map<String, Any>
}

// Define the UINotification class
export class UINotification {
    static shared: UINotificationProtocol | null = null;
}