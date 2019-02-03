import { TransferType } from "../Enums/TransferType";

export interface IWalletService {
	IncomingTransfers(type:TransferType);
	IncomingTransfersAsync(type:TransferType);
}