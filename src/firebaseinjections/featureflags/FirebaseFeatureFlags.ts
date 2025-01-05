import { FeatureFlagsProtocol } from "../../utilities/protocols/FeatureFlags";
import { FirebaseRunner } from "../config/FirebaseRunner";

export class FirebaseFeatureFlags implements FeatureFlagsProtocol {
    private remoteConfig = FirebaseRunner.instance().app.remoteConfig();
    private _featureFlags?: { [key: string]: any };

    // Feature flags getter and setter
    get featureFlags(): { [key: string]: any } | undefined {
        return this._featureFlags;
    }

    set featureFlags(value: { [key: string]: any } | undefined) {
        this._featureFlags = value;
        // Preferences.set({
        //     key: 'firebase_feature_flags',
        //     value: JSON.stringify(value)
        // });
    }

    constructor() {
        // Initialize Remote Config
        this.configureRemoteConfig();

        // Load cached feature flags
        this.loadCachedFeatureFlags();

        // Fetch and activate remote config
        this.fetch();
    }

    // Configure Remote Config settings
    private configureRemoteConfig(): void {
        // const settings: Settings = {
        //     minimumFetchIntervalMillis: 0 // Set fetch interval to 0 for debugging
        // };
        // this.remoteConfig.settings = settings;
    }

    // Load cached feature flags from storage
    private async loadCachedFeatureFlags(): Promise<void> {
        // const cachedFlags = await Preferences.get({ key: 'firebase_feature_flags' });
        // if (cachedFlags.value) {
        //     this._featureFlags = this.deserializeFeatureFlags(cachedFlags.value);
        // }
    }

    // Fetch remote config values
    private async fetch(): Promise<void> {
        try {
            await this.remoteConfig.fetchAndActivate();
            console.log('Config fetched and activated successfully!');
            this.refresh();
        } catch (error) {
            console.error('Config fetch failed:', error);
        }
    }

    // Refresh feature flags
    private refresh(): void {
        const allFlags: { [key: string]: any } = {};
        const entries = Object.entries(this.remoteConfig.getAll());

        entries.forEach(([key, value]: [string, any]) => {
            allFlags[key] = value.asString();
        });

        this.featureFlags = allFlags;
    }

    // Deserialize cached feature flags
    private deserializeFeatureFlags(serialized: string): { [key: string]: any } | null {
        try {
            return JSON.parse(serialized);
        } catch (e) {
            console.error('Failed to deserialize feature flags:', e);
            return null;
        }
    }
}