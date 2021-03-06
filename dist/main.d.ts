export declare function cssmin(params: cssminParams): Promise<void>;
export declare function cssminRaw(style: string): Promise<string>;
interface cssminParams {
    path: string;
    watch?: boolean;
}
export {};
