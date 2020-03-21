/** @format */

import {ParkingLotFinderFactory} from '../domain/parkingLot/parking/parkingLotFinderFactory'
import {ConfigApplicationService} from '../../config/applicationService/configApplicationService'
import {ParkingManager} from '../domain/parkingLot/finder/parkingManager'
import {ParkingBoy} from '../domain/parkingLot/finder/parkingBoy'
import {ParkingRules} from '../../config/domain/parkingBoy'
import {OderParkingBoyRule} from '../domain/parkingLot/rule/orderParkingBoyRule'
import {ParkingBoyRule} from '../domain/parkingLot/finder/ParkingBoyRule'
import {MostAvailableParkingBoyRule} from '../domain/parkingLot/rule/mostAvailableParkingBoyRule'
import {ParkingLot} from '../domain/parkingLot/parking/parkingLot'

export class ConfigClient implements ParkingLotFinderFactory {
    private readonly parkingRuleMapping: Map<ParkingRules, ParkingBoyRule>
    private readonly defaultParkingBoyRule: ParkingBoyRule

    constructor(private readonly configApplicationService: ConfigApplicationService) {
        const oderParkingBoyRule = new OderParkingBoyRule()
        const mostAvailableParkingBoyRule = new MostAvailableParkingBoyRule()

        this.parkingRuleMapping = new Map<ParkingRules, ParkingBoyRule>()
        this.parkingRuleMapping.set(ParkingRules.ORDER, oderParkingBoyRule)
        this.parkingRuleMapping.set(ParkingRules.MOST_AVAILABLE, mostAvailableParkingBoyRule)

        this.defaultParkingBoyRule = oderParkingBoyRule
    }

    newParkingManager() {
        const triples = this.configApplicationService.findParkingBoys()
        return new ParkingManager(
            triples.map(
                ([parkingBoy, parkingLots]) =>
                    new ParkingBoy(
                        parkingBoy.id.toString(),
                        parkingLots.map(parkingLot => new ParkingLot(parkingLot.id.toString(), parkingLot.totalSpaces)),
                        this.parkingRuleMapping.get(parkingBoy.parkingRule) || this.defaultParkingBoyRule,
                    ),
            ),
        )
    }
}
