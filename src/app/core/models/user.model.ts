export interface UserToken {
	// active_status: boolean;
	// expiration: string;
	// is_internal: boolean;
	// refresh_token: string;
	// sex: string;
	token: string;
// 	username: string;
// 	identificationNumber: string;
 }


 export class UserLogin {
	constructor(
		public userName: string = null,
		public password: string = null,
		public grantType: string = "password",
		public token: string = null,
		public clientId: string = null
	) {}
}
