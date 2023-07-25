import { Component, OnInit } from '@angular/core';
import { AccountDataModel } from '../../models/accountDataModel';
import { AccountsService } from '../../services/accounts.service';


@Component({
	selector: 'app-card-box',
	templateUrl: './card-box.component.html',
	styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent implements OnInit {
	accountData: AccountDataModel = {
		name: "",
		account: {
			agency: "0000",
			number: "00.000000-0"
		},
		card: {
			limit: 0,
			number: "0000"
		}
	};

	constructor(private service: AccountsService) { }

	ngOnInit(): void {
		this.getAccountData()
	}

	getAccountData() {
		this.service.getAccount().subscribe(data => {
			this.accountData.name = data.name;
			this.accountData.account.agency = data.account.agency;
			this.accountData.card.limit = data.card.limit;
			this.accountData.account.number = data.account.number;
			this.accountData.card.number = data.card.number.split(" ")[3];
		})
	}
}
