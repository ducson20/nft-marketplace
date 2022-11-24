export interface ISignInRequest {
  username: string;
  password: string;
}
export interface ISignInResponse {
  tokenType: string;
  token: string;
  userInfo: IUserInfoResponse;
}
export interface ISignUpRequest {
  fullName: string;
  email: string;
  username: string;
  password: string;
  phoneNumber: String;
}

export interface ISignUpResponse {
  message: string;
}

export interface IUserInfoResponse {
  userID: string;
  username: string;
  email: string;
  fullName: string;
  age: number;
  gender: string;
  roles: string[];
  roleHighest: string;
}
