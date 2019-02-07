import { TransferType } from "../Enums/transferType";

export interface IWalletService {
	Request(method:string, params:any) : Promise<any>
	IncomingTransfers(type:TransferType);
	IncomingTransfersAsync(type:TransferType);
}
