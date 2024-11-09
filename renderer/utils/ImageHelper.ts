export class ImageHelper {
    // Static method to get the correct image source
    static localImageUrl(image?: string | null): string | null {
        if (!image) return null;

        // Check if the image starts with 'https://' or 'http://'
        if (image.startsWith('https://') || image.startsWith('http://')) {
            return image;
        }

        // If not, assume the image is in the /public directory
        return `${process.env.PUBLIC_URL}/${image}.svg`;
    }
}
