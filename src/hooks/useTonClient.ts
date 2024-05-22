import { getHttpEndpoint } from '@orbs-network/ton-access';
import { TonClient } from "@ton/ton";
import { useAsyncInitialize } from './useAsyncInitialize';

export function useTonClient() {
  return { 
    client: useAsyncInitialize(
      async () =>
        new TonClient({
          endpoint: await getHttpEndpoint({ network: 'testnet' }),
        })
    )
  }
}
