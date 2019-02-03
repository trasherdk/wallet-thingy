import { IWalletConfiguration } from "../Interfaces/iwalletConfiguration"
import { injectable } from "inversify";
import * as fs from 'fs'

@injectable()
export class WalletConfiguration implements IWalletConfiguration {

	private _host:string
	private _port:number
	private _username:string
	private _password:string

    get host():string { return this._host}
    set host(host:string){this._host = host}

    get port():number { return this._port}
    set port(port:number){this._port = port}

    get username():string { return this._username}
    set username(username:string){this._username = username}

    get password():string { return this._password}
    set password(password:string){this._password = password}
    
	constructor() {}


}
