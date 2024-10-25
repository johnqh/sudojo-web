import * as Sudojo  from 'renderable';
import { Nullable } from 'renderable';
import { NativeIOProtocol } from '../../types/protocols';

class IO implements NativeIOProtocol {
    http(
        verb: Sudojo.com.sudobility.renderable.renderable.protocols.IOVerb,
        url: string,
        headers: Nullable<Sudojo.com.sudobility.renderable.renderable.utils.Params>,
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
        headers: Nullable<Sudojo.com.sudobility.renderable.renderable.utils.Params>
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
        verb: Sudojo.com.sudobility.renderable.renderable.protocols.IOVerb,
        url: string,
        body: Nullable<string>,
        callback: (
            p0: number,
            p1: Nullable<string>,
            p2: Nullable<string>
        ) => void
    ): void {
        callback(200, null, null)
    }

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
        callback(200, null, null)
    }
}

export default IO;
