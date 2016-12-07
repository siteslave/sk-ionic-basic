export interface IUser {
  id: number;
  username: string;
  name: string;
  email: string;
  group_id: number;
  group_name: string;
}

export interface IGroup {
    id: string;
    name: string;
}

export interface IHttpResult {
  ok: boolean;
  rows?: any;
  user?: any;
  msg?: any;
  groups?: any;
  fullname?: string;
}