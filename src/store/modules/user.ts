import { defineStore } from 'pinia';
import { store } from '@/store';

declare type Nullable<T> = T | null;

interface UserState {
  userInfo: Nullable<UserInfo>;
}

export interface UserInfo {
  userId: string | number;
  username: string;
}

export const useUserStore = defineStore({
  id: 'user-model',
  state: (): UserState => ({
    // user info
    userInfo: null,
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
