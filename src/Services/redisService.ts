import * as redis from "ioredis"
import { IRedisService } from "../Interfaces/iredisService"
import { IConfigurationService } from "../Interfaces/iconfigurationService"
import { IRedisConfiguration } from "../Interfaces/iredisConfiguration"
import { IBaseSubscriber } from "../Interfaces/ibaseSubscriber"
import { inject, injectable } from "inversify";
import { ITransfer } from "../Interfaces/itransfer"
import { ITransferFactory } from "../Interfaces/itransferFactory"
import { TYPES } from "../types"

@injectable()
export class RedisService implements IRedisService {
    
    Redis:redis.Redis

	constructor(@inject(TYPES.ConfigurationService)public configService: IConfigurationService,
				@inject(TYPES.TransferFactory)private transferFactory: ITransferFactory){
		
		console.log(`redis config ${JSON.stringify(this.configService.Redis)}`)
		this.Redis = new redis(configService.Redis)
	}
	
	public RecordIncomingTransfers(transfers:Array<ITransfer>) : void {
		//console.log(this.transferFactory.Hydrate(transfers).toHMSET())
		this.Redis.multi(this.transferFactory.Hydrate(transfers).toHMSET()).exec()
	}
	
	public ReadIncomingTransfers() : Promise<ITransfer[]>  {
		 return this.Redis.keys('transfer:*')
				.then(transfers => {
					let commands = transfers.map(e => {
						 return ['hgetall', e ]
						//return ['zrange', e, '0', '-1' ]
					})
					return this.Redis.multi(commands).exec()
				})
				.catch(e => {console.log(e)})

	}

	// public RecordSubscribers(subscribers:Array<IBaseSubscriber>) : void {

	// }

	// public ReadSubscribers() : Promise<IBaseSubscriber[] {
	// 	return this.Redis.keys('subscribers')
	// 			.then(transfers => {
	// 				let commands = transfers.map(e => {
	// 					 return ['hgetall', e ]
	// 					//return ['zrange', e, '0', '-1' ]
	// 				})
	// 				return this.Redis.multi(commands).exec()
	// 			})
	// 			.catch(e => {console.log(e)})
	// }
}