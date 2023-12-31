export class InvalidEndpointError extends Error {
	constructor( message?: string ) {
		super( message || "" );
		this.name = this.constructor.name;

		throw this;
	}
}