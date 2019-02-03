import { ITransfer } from "../Interfaces/itransfer"
import { IBaseSubscriber } from "../Interfaces/ibaseSubscriber"

export interface IRedisService {
	RecordIncomingTransfers(transfers:Array<ITransfer>)
	ReadIncomingTransfers() : Promise<ITransfer[]>
	// RecordSubscribers(subscribers:Array<IBaseSubscriber>) : void
	// ReadSubscribers() : Promise<IBaseSubscriber[]>
}