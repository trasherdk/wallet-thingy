import { IConfigurationService } from "../Interfaces/iconfigurationService"
import { IWalletConfiguration } from "../Interfaces/iwalletConfiguration"
import { IRedisConfiguration } from "../Interfaces/iredisConfiguration"
import { inject, injectable } from "inversify";
import * as fs from 'fs'
import * as path from 'path'
import { TYPES } from "../types"

@injectable()
export class ConfigurationService implements IConfigurationService {
	public Wallet : IWalletConfiguration
	public Redis : IRedisConfiguration
	constructor() {
		this.ReadConfiguration()
	}

	public ReadConfiguration() {
		let configuration = JSON.parse(fs.readFileSync(this.GetConfigLocation(), 'utf8'))
		this.Wallet = <IWalletConfiguration>configuration.wallet
		this.Redis = <IRedisConfiguration>configuration.redis
	}

	private GetConfigLocation() : string {
	    for (let i = 0; i < process.argv.length; i++){
	        if (process.argv[i].indexOf('-config=') === 0)
	            return process.argv[i].split('=')[1];
	    }
	    return `${process.cwd()}/config.json`
	}
}
