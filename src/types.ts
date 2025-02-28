export type UserRole = 'candidate' | 'recruiter';

export interface User {
  role: UserRole;
  name: string;
  email: string;
}