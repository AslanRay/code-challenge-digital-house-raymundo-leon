export enum Transaction {
  All = 'all',
  Earned = 'earned',
  Redeemed = 'redeemed',
}

export type TransactionProp = {
  transaction: Transaction
}