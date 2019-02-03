import { IWalletConfiguration } from "../Interfaces/iwalletConfiguration"
import { IRedisConfiguration } from "../Interfaces/iredisConfiguration"

export interface IConfigurationService {
	Wallet : IWalletConfiguration
	Redis: IRedisConfiguration
	ReadConfiguration()
}