import "reflect-metadata"
import { containerModules } from "./inversify.config"
import { Container, ContainerModule } from "inversify";
import { IDistributionService } from "./Interfaces/idistributionService"
import { TYPES } from "./types"
import { TransferType } from "./Enums/transferType"

async function runApp() {
	let container  = new Container()
	container.load(containerModules)
	let distributionService = container.get<IDistributionService>(TYPES.DistributionService)
	await distributionService.getIncomingTransfers()
		 .then(r=>{console.log(r)})
		 .catch(e=>{console.log(e)})
	return await distributionService.makeDistributions()
}

(() => {
	runApp()
		 .then(r=>{console.log(r)
		 		   process.exit(0)})
		 .catch(e=>{console.log(e)
		 			process.exit(1)})
})()

export { runApp }

