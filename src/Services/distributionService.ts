import { IWalletService } from "../Interfaces/iwalletService"
import { IRedisService } from "../Interfaces/iredisService"
import { IConfigurationService } from "../Interfaces/iconfigurationService"
import { ITransfer } from "../Interfaces/itransfer"
import { IBaseSubscriber } from "../Interfaces/ibaseSubscriber"
import { inject, injectable } from "inversify"
import { TYPES } from "../types"
import { TransferType } from "../Enums/transferType"

@injectable()
export class DistributionService {
	constructor(@inject(TYPES.WalletService)private walletService: IWalletService, 
				@inject(TYPES.RedisService)private redisService: IRedisService) {
	}


	public async getIncomingTransfers() : Promise<string> {
		try {
				let response = await this.walletService.IncomingTransfersAsync(TransferType.Available)
				let transfers: Array<ITransfer> = <Array<ITransfer>>response.result.transfers
				await this.redisService.RecordIncomingTransfers(transfers)
				return 'success'
			} catch (err) {
				console.log(err)
				return 'failed'
			}
	}
	public async makeDistributions() : Promise<string> {
		try {
			let response = await this.redisService.ReadIncomingTransfers()
			let transfers:ITransfer[] = response.map(z=>{return <ITransfer>z[1]})
			//console.log(JSON.stringify(transfers[0], null, 1))
			return 'successful distribution'
		} catch (err) {
			return 'failed to make distributions'
		}
	}
}