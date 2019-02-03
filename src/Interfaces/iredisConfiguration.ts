import { IBaseConfiguration } from "../Interfaces/ibaseConfiguration"

export interface IRedisConfiguration extends IBaseConfiguration {
    auth:string
    db:number
}