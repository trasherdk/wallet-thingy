import "reflect-metadata"
import { ContainerModule, interfaces } from "inversify"
import { TYPES } from "./types"

import { IWalletConfiguration } from "./Interfaces/iwalletConfiguration"
import { WalletConfiguration } from "./Models/walletConfiguration"

import { IWalletService } from "./Interfaces/iwalletService"
import { WalletService } from "./Services/walletService"


import { IRedisService } from "./Interfaces/iredisService"
import { RedisService } from "./Services/redisService"

import { IConfigurationService } from "./Interfaces/iconfigurationService"
import { ConfigurationService } from "./Services/configurationService"

import { IDistributionService } from "./Interfaces/idistributionService"
import { DistributionService } from "./Services/distributionService"

import { ITransfer } from "./Interfaces/itransfer"
import { MoneroTransfer } from "./Models/moneroTransfer"

import { ITransferFactory } from "./Interfaces/itransferFactory"
import { MoneroTransferFactory } from "./Factories/MoneroTransferFactory"

export const containerModules = new ContainerModule((bind) => {

	bind<IWalletConfiguration>(TYPES.WalletConfiguration).to(WalletConfiguration).inTransientScope()
	bind<IWalletService>(TYPES.WalletService).to(WalletService).inTransientScope()
	bind<IConfigurationService>(TYPES.ConfigurationService).to(ConfigurationService).inTransientScope()
	bind<IRedisService>(TYPES.RedisService).to(RedisService).inTransientScope()
	bind<IDistributionService>(TYPES.DistributionService).to(DistributionService).inTransientScope()
	bind<ITransfer>(TYPES.Transfer).to(MoneroTransfer)
	bind<ITransferFactory>(TYPES.TransferFactory).to(MoneroTransferFactory)
})