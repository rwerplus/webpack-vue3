declare namespace global {
  declare type Recordable<T = any> = Record<string, T>;

  interface Window {
    test: string;
  }
}
