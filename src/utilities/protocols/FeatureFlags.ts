// Define the FeatureFlagsProtocol interface
export interface FeatureFlagsProtocol {
    featureFlags?: { [key: string]: any }; // Nullable Map<String, Any>
}

// Define the FeatureFlagsSettings class
export class FeatureFlagsSettings {
    static shared: FeatureFlagsProtocol | null = null;
}