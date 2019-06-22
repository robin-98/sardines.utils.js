/**
 * @author Robin Sun
 * @email robin@naturewake.com
 * @create date 2019-06-15 16:41:11
 * @modify date 2019-06-15 16:41:11
 * @desc [description]
 */
export namespace Sardines {
    export interface ServiceRuntime {
        name: string
        type: string
    }

    export interface Service {
        name: string
        module: string
        arguments: ServiceRuntime[]
        returnType: string
        isAsync: boolean
        filepath: string
    }    
}