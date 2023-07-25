export interface AccountDataModel {
	name: string;
	account: {
		agency: string;
		number: string;
	};
	card: {
		limit: number;
		number: string;
	};
}
