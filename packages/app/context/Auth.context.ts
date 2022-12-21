import { createContext } from 'react';
import type { User } from '@prisma/client';

interface IAuthContext {
  login: () => Promise<void>;
  signUp: () => Promise<void>;
  currentUser?: User;
}

const AuthContext = createContext<IAuthContext>({
  login: async () => {},
  signUp: async () => {},
});

export { AuthContext };
