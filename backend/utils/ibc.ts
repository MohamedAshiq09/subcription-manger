// utils/ibc.ts

export const CosmosIBC = {
    addCrossChainSubscriber: async (subscriber: string, amount: number, interval: string, chain: string) => {
      console.log(`Adding subscription on ${chain}: ${subscriber}, ${amount}, ${interval}`);
    },
  };
  