/**
 * Minimum required server version for supporting the given request.
 */
/* eslint-disable @typescript-eslint/no-duplicate-enum-values */

export enum MIN_SERVER_VER {
  REAL_TIME_BARS = 34,
  SCALE_ORDERS = 35,
  SNAPSHOT_MKT_DATA = 35,
  SSHORT_COMBO_LEGS = 35,
  WHAT_IF_ORDERS = 36,
  CONTRACT_CONID = 37,
  PTA_ORDERS = 39,
  FUNDAMENTAL_DATA = 40,
  DELTA_NEUTRAL = 40,
  CONTRACT_DATA_CHAIN = 40,
  SCALE_ORDERS2 = 40,
  ALGO_ORDERS = 41,
  EXECUTION_DATA_CHAIN = 42,
  NOT_HELD = 44,
  SEC_ID_TYPE = 45,
  PLACE_ORDER_CONID = 46,
  REQ_MKT_DATA_CONID = 47,
  REQ_CALC_IMPLIED_VOLAT = 49,
  CANCEL_CALC_IMPLIED_VOLAT = 50,
  CANCEL_CALC_OPTION_PRICE = 50,
  REQ_CALC_OPTION_PRICE = 50,
  SSHORTX_OLD = 51,
  SSHORTX = 52,
  REQ_GLOBAL_CANCEL = 53,
  HEDGE_ORDERS = 54,
  REQ_MARKET_DATA_TYPE = 55,
  OPT_OUT_SMART_ROUTING = 56,
  SMART_COMBO_ROUTING_PARAMS = 57,
  DELTA_NEUTRAL_CONID = 58,
  SCALE_ORDERS3 = 60,
  ORDER_COMBO_LEGS_PRICE = 61,
  TRAILING_PERCENT = 62,
  DELTA_NEUTRAL_OPEN_CLOSE = 66,
  POSITIONS = 67,
  ACCT_SUMMARY = 67,
  TRADING_CLASS = 68,
  SCALE_TABLE = 69,
  LINKING = 70,
  ALGO_ID = 71,
  OPTIONAL_CAPABILITIES = 72,
  ORDER_SOLICITED = 73,
  LINKING_AUTH = 74,
  PRIMARYEXCH = 75,
  RANDOMIZE_SIZE_AND_PRICE = 76,
  FRACTIONAL_POSITIONS = 101,
  PEGGED_TO_BENCHMARK = 102,
  MODELS_SUPPORT = 103,
  SEC_DEF_OPT_PARAMS_REQ = 104,
  EXT_OPERATOR = 105,
  SOFT_DOLLAR_TIER = 106,
  REQ_FAMILY_CODES = 107,
  REQ_MATCHING_SYMBOLS = 108,
  PAST_LIMIT = 109,
  MD_SIZE_MULTIPLIER = 110,
  CASH_QTY = 111,
  REQ_MKT_DEPTH_EXCHANGES = 112,
  TICK_NEWS = 113,
  REQ_SMART_COMPONENTS = 114,
  REQ_NEWS_PROVIDERS = 115,
  REQ_NEWS_ARTICLE = 116,
  REQ_HISTORICAL_NEWS = 117,
  REQ_HEAD_TIMESTAMP = 118,
  REQ_HISTOGRAM = 119,
  SERVICE_DATA_TYPE = 120,
  AGG_GROUP = 121,
  UNDERLYING_INFO = 122,
  CANCEL_HEADTIMESTAMP = 123,
  SYNT_REALTIME_BARS = 124,
  CFD_REROUTE = 125,
  MARKET_RULES = 126,
  PNL = 127,
  NEWS_QUERY_ORIGINS = 128,
  UNREALIZED_PNL = 129,
  HISTORICAL_TICKS = 130,
  MARKET_CAP_PRICE = 131,
  PRE_OPEN_BID_ASK = 132,
  REAL_EXPIRATION_DATE = 134,
  REALIZED_PNL = 135,
  LAST_LIQUIDITY = 136,
  TICK_BY_TICK = 137,
  DECISION_MAKER = 138,
  MIFID_EXECUTION = 139,
  TICK_BY_TICK_IGNORE_SIZE = 140,
  AUTO_PRICE_FOR_HEDGE = 141,
  WHAT_IF_EXT_FIELDS = 142,
  SCANNER_GENERIC_OPTS = 143,
  API_BIND_ORDER = 144,
  ORDER_CONTAINER = 145,
  SMART_DEPTH = 146,
  REMOVE_NULL_ALL_CASTING = 147,
  D_PEG_ORDERS = 148,
  MKT_DEPTH_PRIM_EXCHANGE = 149,
  REQ_COMPLETED_ORDERS = 150,
  PRICE_MGMT_ALGO = 151,
  STOCK_TYPE = 152,
  ENCODE_MSG_ASCII7 = 153,
  SEND_ALL_FAMILY_CODES = 154,
  NO_DEFAULT_OPEN_CLOSE = 155,
  PRICE_BASED_VOLATILITY = 156,
  REPLACE_FA_END = 157,
  DURATION = 158,
  MARKET_DATA_IN_SHARES = 159,
  POST_TO_ATS = 160,
  WSHE_CALENDAR = 161,
  AUTO_CANCEL_PARENT = 162,
  FRACTIONAL_SIZE_SUPPORT = 163,
  SIZE_RULES = 164,
  HISTORICAL_SCHEDULE = 165,
  ADVANCED_ORDER_REJECT = 166,
  USER_INFO = 167,
  CRYPTO_AGGREGATED_TRADES = 168,
  MANUAL_ORDER_TIME = 169,
  PEGBEST_PEGMID_OFFSETS = 170,
  WSH_EVENT_DATA_FILTERS = 171,
  IPO_PRICES = 172,
  WSH_EVENT_DATA_FILTERS_DATE = 173,
  INSTRUMENT_TIMEZONE = 174,
  HMDS_MARKET_DATA_IN_SHARES = 175,
  BOND_ISSUERID = 176,
  FA_PROFILE_DESUPPORT = 177,
  PENDING_PRICE_REVISION = 178,
  FUND_DATA_FIELDS = 179,
  MANUAL_ORDER_TIME_EXERCISE_OPTIONS = 180,
  OPEN_ORDER_AD_STRATEGY = 181,
  LAST_TRADE_DATE = 182,
  CUSTOMER_ACCOUNT = 183,
  PROFESSIONAL_CUSTOMER = 184,
  BOND_ACCRUED_INTEREST = 185,
  INELIGIBILITY_REASONS = 186,
  RFQ_FIELDS = 187,
  BOND_TRADING_HOURS = 188,
  INCLUDE_OVERNIGHT = 189,
  UNDO_RFQ_FIELDS = 190,
  PERM_ID_AS_LONG = 191,
  CME_TAGGING_FIELDS = 192,
  CME_TAGGING_FIELDS_IN_OPEN_ORDER = 193,

  MAX_VERSION = CME_TAGGING_FIELDS_IN_OPEN_ORDER,
}

export default MIN_SERVER_VER;
