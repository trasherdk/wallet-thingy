import { ITransfer } from '../Interfaces/itransfer'
import { injectable } from "inversify";

@injectable()
export class MoneroTransfer implements ITransfer {

	// private _amount:number
	// private _global_index:number
	// private _key_image:string
	// private _spent:boolean
	// private _tx_hash:string
	// private _tx_size:number

	get amount():number { return this._amount}
    set amount(value:number){this._amount = value}

	get global_index():number { return this._global_index}
    set global_index(value:number){this._global_index = value}

    get key_image():string { return this._key_image}
    set key_image(value:string){this._key_image = value}

    get spent():boolean { return this._spent}
    set spent(value:boolean){this._spent = value}

    get tx_hash():string { return this._tx_hash}
    set tx_hash(value:string){this._tx_hash = value}

    get tx_size():number { return this._tx_size}
    set tx_size(value:number){this._tx_size = value}

    public toHMSET() : string[] {
    	return ['hmset', `transfer:${this._global_index}`, 'global_index', `${this._global_index}`, 'amount', `${this._amount}`,  'key_image', `${this._key_image}`, 'spend', `${this._spent}`, 'tx_size', `${this._tx_size}`, 'tx_hash', `${this._tx_hash}`]
    }

    constructor(private _amount:number,
                private _global_index:number,
                private _key_image:string,
                private _spent:boolean,
                private _tx_hash:string,
                private _tx_size:number){}
}