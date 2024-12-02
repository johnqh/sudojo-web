import * as Sudojo from "Sudojo";
import { Nullable } from "Sudojo";
import { INativeIO, IOVerb, Params, FileLocation } from "../types/protocols";

class RendererIO implements INativeIO {
	http(
		verb: Sudojo.com.sudobility.renderable.renderable.protocols.IOVerb,
		url: string,
		headers: Nullable<Params>,
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
				console.error("API call failed:", error);
				callback(500, null, null); // Handle error case
			});
	}

	httpHeaders(headers: Nullable<Params>): HeadersInit | undefined {
		if (headers !== null) {
			const obj: Record<string, string> = {};
			obj["Content-Type"] = "application/json";
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
		location: Sudojo.com.sudobility.renderable.renderable.protocols.FileLocation,
		body: Nullable<string>,
		callback: (
			p0: number,
			p1: Nullable<string>,
			p2: Nullable<string>
		) => void
	): void {
		switch (location) {
			case Sudojo.com.sudobility.renderable.renderable.protocols
				.FileLocation.BUNDLE:
				switch (verb) {
					case IOVerb.GET:
						fetch(url)
							.then((response) => {
								if (!response.ok) {
									throw new Error(
										`HTTP error! status: ${response.status}`
									);
								}
								return response.text(); // Use .text() for plain text files
							})
							.then((text) => {
								callback(200, text, null);
							})
							.catch((error) => {
								callback(400, null, null);
							});
						break;

					case IOVerb.POST:
					case IOVerb.PUT:
						callback(403, null, null);
						break;

					default:
						callback(400, null, "Invalid Verb"); // Invalid HTTP verb
						break;
				}
				break;

			case Sudojo.com.sudobility.renderable.renderable.protocols
				.FileLocation.DOCUMENT:
				try {
					switch (verb) {
						case IOVerb.GET:
							// Read from local storage
							const data = localStorage.getItem(url);
							if (data) {
								callback(200, data, null); // Successful read
							} else {
								callback(404, null, "Not Found"); // Data not found
							}
							break;

						case IOVerb.POST:
						case IOVerb.PUT:
							// Write to local storage
							if (body) {
								localStorage.setItem(url, body);
								callback(200, null, null); // Successful write
							} else {
								callback(400, null, "Bad Request"); // No body provided
							}
							break;

						case IOVerb.DELETE:
							// Remove from local storage
							localStorage.removeItem(url);
							callback(204, null, null); // Successful delete
							break;

						default:
							callback(400, null, "Invalid Verb"); // Invalid HTTP verb
							break;
					}
				} catch (error) {
					callback(500, null, null); // Handle any errors
				}
				break;
		}
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
		callback(200, null, null);
	}
}

export default RendererIO;
