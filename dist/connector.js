"use strict";
Object.defineProperty( exports, "__esModule", { value: true } );
exports.Connector = void 0;

class Connector {
	constructor( endpoint = new URL( "https://fichub.net/api/v0/" ) ) {
		this.endpoint = new URL( endpoint );
	}
}

exports.Connector = Connector;
