declare const _default: (() => {
    database: {
        name: string;
        port: string;
    };
    mongo: {
        url: string;
        name: string;
    };
    apiKey: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    database: {
        name: string;
        port: string;
    };
    mongo: {
        url: string;
        name: string;
    };
    apiKey: string;
}>;
export default _default;
