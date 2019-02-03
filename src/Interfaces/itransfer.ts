export interface ITransfer {
	amount: number
	global_index: number
	key_image: string
	spent: boolean
	tx_hash: string
	tx_size: number
	toHMSET():string[]
}