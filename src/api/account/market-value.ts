export const MarketValueTag = {
  AccountOrGroup: "AccountOrGroup",
  RealCurrency: "RealCurrency",
  IssuerOptionValue: "IssuerOption",
  NetLiquidationByCurrency: "Net Liq",
  CashBalance: "CashBalance",
  Cryptocurrency: "Cryptocurrency",
  TotalCashBalance: "TotalCashBalance",
  AccruedCash: "AccruedCash",
  StockMarketValue: "Stocks",
  OptionMarketValue: "Options",
  FutureOptionValue: "Futures",
  FuturesPNL: "FuturesPNL",
  UnrealizedPnL: "UnrealizedPnL",
  RealizedPnL: "RealizedPnL",
  ExchangeRate: "ExchangeRate",
  FundValue: "Fund",
  NetDividend: "NetDividend",
  MutualFundValue: "MutualFund",
  MoneyMarketFundValue: "MoneyMarketFund",
  CorporateBondValue: "CorporateBond",
  TBondValue: "TBond",
  TBillValue: "TBill",
  WarrantValue: "Warrant",
  FxCashBalance: "FxCashBalance",
} as const;
export type MarketValueTag =
  (typeof MarketValueTag)[keyof typeof MarketValueTag];