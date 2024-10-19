import { com, Nullable } from 'Sudojo';
import { NativeIOProtocol } from '../../types/protocols';

class IO implements NativeIOProtocol {
    http(
        verb: com.sudobility.sudokuschool.interactors.common.IOVerb,
        url: string,
        headers: Nullable<com.sudobility.sudokuschool.utils.Params>,
        body: Nullable<string>,
        callback: (
            p0: number,
            p1: Nullable<string>,
            p2: Nullable<string>
        ) => void
    ): void {
        const options: RequestInit = {
            method: verb.rawValue,
            headers: this.httpHeaders(headers),
            ...(body ? { body } : {}),
        };

        fetch(url, options)
            .then((response) => {
                return Promise.all([
                    response.status,
                    response.json(),
                    response.headers,
                ]);
            })
            .then(([statusCode, responseBody, responseHeaders]) => {
                callback(
                    statusCode,
                    JSON.stringify(responseBody),
                    JSON.stringify(
                        Object.fromEntries(responseHeaders.entries())
                    )
                );
            })
            .catch((error) => {
                console.error('API call failed:', error);
                callback(500, null, null); // Handle error case
            });
    }

    httpHeaders(
        headers: Nullable<com.sudobility.sudokuschool.utils.Params>
    ): HeadersInit | undefined {
        if (headers !== null) {
            const obj: Record<string, string> = {};
            obj['Content-Type'] = 'application/json';
            for (const key of headers!.keys) {
                const value = headers!.get(key);
                if (value != null) {
                    obj[key] = value;
                }
            }
            return obj;
        } else {
            return undefined;
        }
    }

    file(
        verb: com.sudobility.sudokuschool.interactors.common.IOVerb,
        url: string,
        body: Nullable<string>,
        callback: (
            p0: number,
            p1: Nullable<string>,
            p2: Nullable<string>
        ) => void
    ): void {
        // throw new Error("Method not implemented.");
    }

    invoke(
        verb: com.sudobility.sudokuschool.interactors.common.IOVerb,
        url: string,
        body: Nullable<string>,
        callback: (
            p0: number,
            p1: Nullable<string>,
            p2: Nullable<string>
        ) => void
    ): void {
        // throw new Error("Method not implemented.");
    }
}

export default IO;
