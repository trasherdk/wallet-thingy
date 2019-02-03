import { ITransfer } from "../Interfaces/itransfer"

export interface ITransferFactory {
	Transfers:Array<ITransfer>
	Hydrate(transfers:Array<ITransfer>) : ITransferFactory
	toHMSET() : string[][]
}