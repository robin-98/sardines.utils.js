import { Provider } from './provider';
import { Driver } from './driver';
export declare class Shoal {
    constructor();
    broadcast(message?: object | string): void;
    setProvider(providerSettings: object, providerClass: Provider): void;
    setDriver(driverSettings: object, driverClass: Driver): void;
}
//# sourceMappingURL=shoal.d.ts.map