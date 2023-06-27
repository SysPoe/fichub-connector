export class Connector {
	readonly endpoint: URL;

	public constructor( endpoint: string | URL = new URL( "https://fichub.net/api/v0/" ) ) {
		this.endpoint = new URL( endpoint );
	}
}