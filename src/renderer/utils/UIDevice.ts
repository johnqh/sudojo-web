// src/utils/UIDevice.ts
export class UIDevice {
    static isIOSOrIPad(): boolean {
        return (
            typeof navigator !== 'undefined' &&
            (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
                (navigator.userAgent.includes('Mac') &&
                    'ontouchend' in document))
        );
    }
}
