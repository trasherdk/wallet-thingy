import { ITransfer } from "../Interfaces/itransfer"
import { ITransferFactory } from "../Interfaces/itransferFactory"
import { MoneroTransfer } from "../Models/moneroTransfer"
import { injectable } from "inversify";
import { TYPES } from "../types"

@injectable()
export class MoneroTransferFactory implements ITransferFactory {
	
	Transfers:Array<MoneroTransfer>


	public toHMSET() : string[][] {
		return this.Transfers.map(e => e.toHMSET())
	}

	public Hydrate(transfers:Array<ITransfer>) : ITransferFactory {
		this.Transfers = transfers.map(e => { 
				return  new MoneroTransfer(	e.amount,
											e.global_index,
											e.key_image,
											e.spent,
											e.tx_hash,
											e.tx_size)
			})
		return this
	}
}