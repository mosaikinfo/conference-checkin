import { Component, OnInit } from "@angular/core";
import { ScanData } from "../core/scan.data";
import { TicketService } from "../core/ticket.service";

@Component({
    selector: "ScanResult",
    moduleId: module.id,
    templateUrl: "./scan-result.component.html"
})
export class ScanResultComponent implements OnInit {

    isBusy: boolean = true;

    constructor(
        public data: ScanData,
        private ticketService: TicketService
    ) { }

    ngOnInit(): void {
        this.validateTicket();
    }

    async validateTicket() {
        await this.ticketService.validateTicket("12345");
        this.isBusy = false;
    }
}
