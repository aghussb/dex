import { Deferred } from './utils.d.ts';
export declare class Resource<T> {
    resource: T;
    readonly timestamp: number;
    protected deferred: Deferred<void>;
    constructor(resource: T);
    get promise(): Promise<void>;
    resolve(): Resource<T>;
}
