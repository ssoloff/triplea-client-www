import type { JestMockFn } from 'jest'

declare class JestSandbox {
  constructor(): JestSandbox;
  fn(implementation?: Function): JestMockFn;
  spyOn(object: Object, methodName: string): JestMockFn;
  clear(): void;
  reset(): void;
  restore(): void;
};

declare module 'jest-sandbox' {
  declare module.exports: {
    (): JestSandbox,
    JestSandbox: typeof JestSandbox
  };
}
