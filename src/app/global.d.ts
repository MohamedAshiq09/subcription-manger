import { OfflineSigner } from "@cosmjs/proto-signing";

declare global {
  interface Window {
    keplr?: {
      enable: (chainId: string) => Promise<void>;
      getOfflineSigner: (chainId: string) => OfflineSigner;
    };
  }
}
