import * as request from "request-promise-native"
import { IWalletService } from "../Interfaces/iwalletService"
import { IConfigurationService } from "../Interfaces/iconfigurationService"
import { TransferType } from "../Enums/TransferType"
import { inject, injectable } from "inversify"
import { TYPES } from "../types"

@injectable()
export class WalletService implements IWalletService {
   
	constructor (@inject(TYPES.ConfigurationService)public configService: IConfigurationService) {

	}	

	public Request(method:string, params:any) : Promise<any> {
		let options = {  json: {id:'1', jsonrpc:'2.0', method:`${method}`},
						 method: 'POST',
					     forever: true,
					     headers: {
					        'Content-Type': 'application/json',
					        'Accept': 'application/json'
						 }
					   }
		console.log(`wallet config ${JSON.stringify(this.configService.Wallet)}`)
		if (params) 
			options['json']['params'] = params
		if (this.configService.Wallet.username)
			options['auth'] = {'user':this.configService.Wallet.username, 'password':this.configService.Wallet.password, 'sendImmediately':false}
			// options['auth'] = {'user':`${Buffer.from(this.configService.Wallet.username).toString('base64')}`, 'password':`${Buffer.from(this.configService.Wallet.password).toString('base64')}`, 'sendImmediately':false}
		
		options['uri'] = `http://${this.configService.Wallet.host}:${this.configService.Wallet.port}/json_rpc`

		//return request.post(`http://${this.configService.Wallet.host}:${this.configService.Wallet.port}/json_rpc`, options)	
		return request(options)
	}

	public IncomingTransfersAsync(type:TransferType) : Promise<any> {
		let method = 'incoming_transfers'
		let params:any = {}
		params.transfer_type = type
		return this.Request(method, params)
	
	}

	public IncomingTransfers(type:TransferType){
		let method = 'incoming_transfers'
		let params:any = {}
		params.transfer_type = type
		return this.Request(method, params)
	}
}