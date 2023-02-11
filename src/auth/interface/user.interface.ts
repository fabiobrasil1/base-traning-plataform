export enum Role {
  Admin = 'admin',
  Student = 'student',
  Trainer = 'trainer',
}

type User = {
  id: string;
  userName: string;
  password: string;
  role: Role;
};

export interface IAuthenticate {
  readonly user: User;
  readonly token: string;
}
