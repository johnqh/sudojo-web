import { Nullable } from 'Sudojo';
import RendererIO from '../../renderer/injections/RendererIO';
import { IOVerb } from '../../renderer/types/protocols';
import * as Sudojo from 'Sudojo';

class SudokuSchoolIO extends RendererIO {
    invoke(
        verb: Sudojo.com.sudobility.renderable.renderable.protocols.IOVerb,
        url: string,
        body: Nullable<string>,
        callback: (
            p0: number,
            p1: Nullable<string>,
            p2: Nullable<string>
        ) => void
    ): void {
        try {
            const parsedUrl = new URL(url);
            const path = parsedUrl.pathname.split('/').filter(Boolean); // Split and filter empty components

            if (path.length >= 2) {
                switch (path[0]) { // Check the first path component
                    case "billing":
                        switch (path.length) {
                            case 3:
                                switch (path[2]) {
                                    case "packages":
                                        // SubscriptionsInteractor.shared.subscriptions((code: number, response: string | null) => {
                                        //     callback(new KotlinInt(code), response, null);
                                        // });
                                        break;

                                    case "restore":
                                        // SubscriptionsInteractor.shared.restore((code: number, response: string | null) => {
                                        //     callback(new KotlinInt(code), response, null);
                                        // });
                                        break;

                                    default:
                                        break;
                                }
                                break;

                            case 4:
                                switch (path[2]) {
                                    case "customer":
                                        const uid = path[3];
                                        // SubscriptionsInteractor.shared.subscribed(uid, (code: number, response: string | null) => {
                                        //     callback(new KotlinInt(code), response, null);
                                        // });
                                        break;

                                    case "subscribe":
                                        const id = path[3];
                                        // SubscriptionsInteractor.shared.subscribe(id, (code: number, response: string | null) => {
                                        //     callback(new KotlinInt(code), response, null);
                                        // });
                                        break;

                                    default:
                                        break;
                                }
                                break;

                            default:
                                break;
                        }
                        break;

                    default:
                        break;
                }
            }
        } catch (error) {
            console.error('Error parsing URL or handling request:', error);
            callback(500, null, null); // Handle error appropriately
        }
    }
}

export default SudokuSchoolIO;