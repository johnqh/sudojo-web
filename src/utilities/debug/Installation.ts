import { isbot } from "isbot";

export const Installation = {
    isWebCrawler: isbot(navigator.userAgent)
};