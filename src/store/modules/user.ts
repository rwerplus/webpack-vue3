import { defineStore } from 'pinia';
import { store } from '@/store';

declare type Nullable<T> = T | null;

export interface UserInfo {
  userId: string | number;
  username: string;
}

interface UserState {
  userInfo: Nullable<UserInfo>;
}

export const useUserStore = defineStore({
  id: 'user-model',
  state: (): UserState => ({
    // user info
    userInfo: {
      userId: '18',
      username: 'admin',
    },
  }),
  getters: {
    getUserInfo(): UserInfo {
      return this.userInfo || {} as UserInfo;
    },
  },
  actions: {
    setUserInfo(info: UserInfo | null) {
      this.userInfo = info;
    },
  },
});

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store);
}
