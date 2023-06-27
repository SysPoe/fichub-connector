import { InvalidEndpointError } from "./InvalidEndpointError";

export class Connector {
	readonly endpoint: URL;

	public constructor( endpoint: string | URL = new URL( "https://fichub.net/api/v0/" ) ) {
		this.endpoint = new URL( endpoint );
		if ( !this.test() ) {
			throw new InvalidEndpointError( `Unable to access endpoint ${this.endpoint}` );
		}
	}

	public async test( testPath: string | URL = "./meta", expectedResponse: string = JSON.stringify( {
		"err": -1,
		"msg": "no query",
		"q": ""
	} ) ): Promise<boolean> {
		const url: URL = new URL( testPath, this.endpoint );
		try {
			let response = await fetch( url );
			let text = await response.text();
			return text.trim() === expectedResponse;
		} catch ( error ) {
			return false;
		}
	}
}