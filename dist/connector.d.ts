export declare class Connector {
    readonly endpoint: URL;
    constructor(endpoint?: string | URL);
    test(testPath?: string | URL, expectedResponse?: string): Promise<boolean>;
}
