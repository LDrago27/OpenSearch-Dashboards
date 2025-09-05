// Generated from ./src/opensearch_ppl_simplified/grammar/OpenSearchPPLParser.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { OpenSearchPPLParserVisitor } from "./OpenSearchPPLParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class OpenSearchPPLParser extends antlr.Parser {
    public static readonly SPACE = 1;
    public static readonly SEARCH = 2;
    public static readonly DESCRIBE = 3;
    public static readonly SHOW = 4;
    public static readonly EXPLAIN = 5;
    public static readonly FROM = 6;
    public static readonly WHERE = 7;
    public static readonly FIELDS = 8;
    public static readonly TABLE = 9;
    public static readonly RENAME = 10;
    public static readonly STATS = 11;
    public static readonly EVENTSTATS = 12;
    public static readonly DEDUP = 13;
    public static readonly SORT = 14;
    public static readonly EVAL = 15;
    public static readonly HEAD = 16;
    public static readonly BIN = 17;
    public static readonly TOP = 18;
    public static readonly RARE = 19;
    public static readonly PARSE = 20;
    public static readonly SPATH = 21;
    public static readonly REGEX = 22;
    public static readonly PUNCT = 23;
    public static readonly GROK = 24;
    public static readonly PATTERN = 25;
    public static readonly PATTERNS = 26;
    public static readonly NEW_FIELD = 27;
    public static readonly KMEANS = 28;
    public static readonly AD = 29;
    public static readonly ML = 30;
    public static readonly FILLNULL = 31;
    public static readonly FLATTEN = 32;
    public static readonly TRENDLINE = 33;
    public static readonly TIMECHART = 34;
    public static readonly APPENDCOL = 35;
    public static readonly EXPAND = 36;
    public static readonly SIMPLE_PATTERN = 37;
    public static readonly BRAIN = 38;
    public static readonly VARIABLE_COUNT_THRESHOLD = 39;
    public static readonly FREQUENCY_THRESHOLD_PERCENTAGE = 40;
    public static readonly METHOD = 41;
    public static readonly MAX_SAMPLE_COUNT = 42;
    public static readonly BUFFER_LIMIT = 43;
    public static readonly LABEL = 44;
    public static readonly AGGREGATION = 45;
    public static readonly JOIN = 46;
    public static readonly ON = 47;
    public static readonly INNER = 48;
    public static readonly OUTER = 49;
    public static readonly FULL = 50;
    public static readonly SEMI = 51;
    public static readonly ANTI = 52;
    public static readonly CROSS = 53;
    public static readonly LEFT_HINT = 54;
    public static readonly RIGHT_HINT = 55;
    public static readonly AS = 56;
    public static readonly BY = 57;
    public static readonly SOURCE = 58;
    public static readonly INDEX = 59;
    public static readonly A = 60;
    public static readonly ASC = 61;
    public static readonly D = 62;
    public static readonly DESC = 63;
    public static readonly DATASOURCES = 64;
    public static readonly USING = 65;
    public static readonly WITH = 66;
    public static readonly SIMPLE = 67;
    public static readonly STANDARD = 68;
    public static readonly COST = 69;
    public static readonly EXTENDED = 70;
    public static readonly OVERRIDE = 71;
    public static readonly AUTO = 72;
    public static readonly STR = 73;
    public static readonly NUM = 74;
    public static readonly SMA = 75;
    public static readonly WMA = 76;
    public static readonly KEEPEMPTY = 77;
    public static readonly CONSECUTIVE = 78;
    public static readonly DEDUP_SPLITVALUES = 79;
    public static readonly PARTITIONS = 80;
    public static readonly ALLNUM = 81;
    public static readonly DELIM = 82;
    public static readonly CENTROIDS = 83;
    public static readonly ITERATIONS = 84;
    public static readonly DISTANCE_TYPE = 85;
    public static readonly NUMBER_OF_TREES = 86;
    public static readonly SHINGLE_SIZE = 87;
    public static readonly SAMPLE_SIZE = 88;
    public static readonly OUTPUT_AFTER = 89;
    public static readonly TIME_DECAY = 90;
    public static readonly ANOMALY_RATE = 91;
    public static readonly CATEGORY_FIELD = 92;
    public static readonly TIME_FIELD = 93;
    public static readonly TIME_ZONE = 94;
    public static readonly TRAINING_DATA_SIZE = 95;
    public static readonly ANOMALY_SCORE_THRESHOLD = 96;
    public static readonly APPEND = 97;
    public static readonly COUNTFIELD = 98;
    public static readonly SHOWCOUNT = 99;
    public static readonly LIMIT = 100;
    public static readonly USEOTHER = 101;
    public static readonly INPUT = 102;
    public static readonly OUTPUT = 103;
    public static readonly PATH = 104;
    public static readonly CASE = 105;
    public static readonly ELSE = 106;
    public static readonly IN = 107;
    public static readonly EXISTS = 108;
    public static readonly GEOIP = 109;
    public static readonly NOT = 110;
    public static readonly OR = 111;
    public static readonly AND = 112;
    public static readonly XOR = 113;
    public static readonly TRUE = 114;
    public static readonly FALSE = 115;
    public static readonly REGEXP = 116;
    public static readonly REGEX_MATCH = 117;
    public static readonly CONVERT_TZ = 118;
    public static readonly DATETIME = 119;
    public static readonly DAY = 120;
    public static readonly DAY_HOUR = 121;
    public static readonly DAY_MICROSECOND = 122;
    public static readonly DAY_MINUTE = 123;
    public static readonly DAY_OF_YEAR = 124;
    public static readonly DAY_SECOND = 125;
    public static readonly HOUR = 126;
    public static readonly HOUR_MICROSECOND = 127;
    public static readonly HOUR_MINUTE = 128;
    public static readonly HOUR_OF_DAY = 129;
    public static readonly HOUR_SECOND = 130;
    public static readonly INTERVAL = 131;
    public static readonly MICROSECOND = 132;
    public static readonly MILLISECOND = 133;
    public static readonly MINUTE = 134;
    public static readonly MINUTE_MICROSECOND = 135;
    public static readonly MINUTE_OF_DAY = 136;
    public static readonly MINUTE_OF_HOUR = 137;
    public static readonly MINUTE_SECOND = 138;
    public static readonly MONTH = 139;
    public static readonly MONTH_OF_YEAR = 140;
    public static readonly QUARTER = 141;
    public static readonly SECOND = 142;
    public static readonly SECOND_MICROSECOND = 143;
    public static readonly SECOND_OF_MINUTE = 144;
    public static readonly WEEK = 145;
    public static readonly WEEK_OF_YEAR = 146;
    public static readonly YEAR = 147;
    public static readonly YEAR_MONTH = 148;
    public static readonly DATAMODEL = 149;
    public static readonly LOOKUP = 150;
    public static readonly SAVEDSEARCH = 151;
    public static readonly INT = 152;
    public static readonly INTEGER = 153;
    public static readonly DOUBLE = 154;
    public static readonly LONG = 155;
    public static readonly FLOAT = 156;
    public static readonly STRING = 157;
    public static readonly BOOLEAN = 158;
    public static readonly IP = 159;
    public static readonly PIPE = 160;
    public static readonly COMMA = 161;
    public static readonly DOT = 162;
    public static readonly EQUAL = 163;
    public static readonly DOUBLE_EQUAL = 164;
    public static readonly GREATER = 165;
    public static readonly LESS = 166;
    public static readonly NOT_GREATER = 167;
    public static readonly NOT_LESS = 168;
    public static readonly NOT_EQUAL = 169;
    public static readonly PLUS = 170;
    public static readonly MINUS = 171;
    public static readonly STAR = 172;
    public static readonly DIVIDE = 173;
    public static readonly MODULE = 174;
    public static readonly EXCLAMATION_SYMBOL = 175;
    public static readonly COLON = 176;
    public static readonly LT_PRTHS = 177;
    public static readonly RT_PRTHS = 178;
    public static readonly LT_SQR_PRTHS = 179;
    public static readonly RT_SQR_PRTHS = 180;
    public static readonly LT_CURLY = 181;
    public static readonly RT_CURLY = 182;
    public static readonly SINGLE_QUOTE = 183;
    public static readonly DOUBLE_QUOTE = 184;
    public static readonly BACKTICK = 185;
    public static readonly ARROW = 186;
    public static readonly BIT_NOT_OP = 187;
    public static readonly BIT_AND_OP = 188;
    public static readonly BIT_XOR_OP = 189;
    public static readonly AVG = 190;
    public static readonly COUNT = 191;
    public static readonly DISTINCT_COUNT = 192;
    public static readonly DISTINCT_COUNT_APPROX = 193;
    public static readonly ESTDC = 194;
    public static readonly ESTDC_ERROR = 195;
    public static readonly MAX = 196;
    public static readonly MEAN = 197;
    public static readonly MEDIAN = 198;
    public static readonly MIN = 199;
    public static readonly MODE = 200;
    public static readonly RANGE = 201;
    public static readonly STDEV = 202;
    public static readonly STDEVP = 203;
    public static readonly SUM = 204;
    public static readonly SUMSQ = 205;
    public static readonly VAR_SAMP = 206;
    public static readonly VAR_POP = 207;
    public static readonly STDDEV_SAMP = 208;
    public static readonly STDDEV_POP = 209;
    public static readonly PERC = 210;
    public static readonly PERCENTILE = 211;
    public static readonly PERCENTILE_APPROX = 212;
    public static readonly EARLIEST = 213;
    public static readonly LATEST = 214;
    public static readonly TAKE = 215;
    public static readonly LIST = 216;
    public static readonly VALUES = 217;
    public static readonly PER_DAY = 218;
    public static readonly PER_HOUR = 219;
    public static readonly PER_MINUTE = 220;
    public static readonly PER_SECOND = 221;
    public static readonly RATE = 222;
    public static readonly SPARKLINE = 223;
    public static readonly C = 224;
    public static readonly DC = 225;
    public static readonly ROW_NUMBER = 226;
    public static readonly RANK = 227;
    public static readonly DENSE_RANK = 228;
    public static readonly PERCENT_RANK = 229;
    public static readonly CUME_DIST = 230;
    public static readonly FIRST = 231;
    public static readonly LAST = 232;
    public static readonly NTH = 233;
    public static readonly NTILE = 234;
    public static readonly PLUS_FUCTION = 235;
    public static readonly MINUS_FUCTION = 236;
    public static readonly STAR_FUNCTION = 237;
    public static readonly DIVIDE_FUNCTION = 238;
    public static readonly ABS = 239;
    public static readonly CBRT = 240;
    public static readonly CEIL = 241;
    public static readonly CEILING = 242;
    public static readonly CONV = 243;
    public static readonly CRC32 = 244;
    public static readonly E = 245;
    public static readonly EXP = 246;
    public static readonly EXPM1 = 247;
    public static readonly FLOOR = 248;
    public static readonly LN = 249;
    public static readonly LOG = 250;
    public static readonly LOG_WITH_BASE = 251;
    public static readonly MOD = 252;
    public static readonly MODULUS = 253;
    public static readonly PI = 254;
    public static readonly POSITION = 255;
    public static readonly POW = 256;
    public static readonly POWER = 257;
    public static readonly RAND = 258;
    public static readonly ROUND = 259;
    public static readonly SIGN = 260;
    public static readonly SQRT = 261;
    public static readonly TRUNCATE = 262;
    public static readonly RINT = 263;
    public static readonly SIGNUM = 264;
    public static readonly ACOS = 265;
    public static readonly ASIN = 266;
    public static readonly ATAN = 267;
    public static readonly ATAN2 = 268;
    public static readonly COS = 269;
    public static readonly COSH = 270;
    public static readonly COT = 271;
    public static readonly DEGREES = 272;
    public static readonly RADIANS = 273;
    public static readonly SIN = 274;
    public static readonly SINH = 275;
    public static readonly TAN = 276;
    public static readonly MD5 = 277;
    public static readonly SHA1 = 278;
    public static readonly SHA2 = 279;
    public static readonly ADDDATE = 280;
    public static readonly ADDTIME = 281;
    public static readonly CURDATE = 282;
    public static readonly CURRENT_DATE = 283;
    public static readonly CURRENT_TIME = 284;
    public static readonly CURRENT_TIMESTAMP = 285;
    public static readonly CURTIME = 286;
    public static readonly DATE = 287;
    public static readonly DATEDIFF = 288;
    public static readonly DATE_ADD = 289;
    public static readonly DATE_FORMAT = 290;
    public static readonly DATE_SUB = 291;
    public static readonly DAYNAME = 292;
    public static readonly DAYOFMONTH = 293;
    public static readonly DAYOFWEEK = 294;
    public static readonly DAYOFYEAR = 295;
    public static readonly DAY_OF_MONTH = 296;
    public static readonly DAY_OF_WEEK = 297;
    public static readonly EXTRACT = 298;
    public static readonly FROM_DAYS = 299;
    public static readonly FROM_UNIXTIME = 300;
    public static readonly GET_FORMAT = 301;
    public static readonly LAST_DAY = 302;
    public static readonly LOCALTIME = 303;
    public static readonly LOCALTIMESTAMP = 304;
    public static readonly MAKEDATE = 305;
    public static readonly MAKETIME = 306;
    public static readonly MONTHNAME = 307;
    public static readonly NOW = 308;
    public static readonly PERIOD_ADD = 309;
    public static readonly PERIOD_DIFF = 310;
    public static readonly SEC_TO_TIME = 311;
    public static readonly STR_TO_DATE = 312;
    public static readonly SUBDATE = 313;
    public static readonly SUBTIME = 314;
    public static readonly SYSDATE = 315;
    public static readonly TIME = 316;
    public static readonly TIMEDIFF = 317;
    public static readonly TIMESTAMP = 318;
    public static readonly TIMESTAMPADD = 319;
    public static readonly TIMESTAMPDIFF = 320;
    public static readonly TIME_FORMAT = 321;
    public static readonly TIME_TO_SEC = 322;
    public static readonly TO_DAYS = 323;
    public static readonly TO_SECONDS = 324;
    public static readonly UNIX_TIMESTAMP = 325;
    public static readonly UTC_DATE = 326;
    public static readonly UTC_TIME = 327;
    public static readonly UTC_TIMESTAMP = 328;
    public static readonly WEEKDAY = 329;
    public static readonly YEARWEEK = 330;
    public static readonly SUBSTR = 331;
    public static readonly SUBSTRING = 332;
    public static readonly LTRIM = 333;
    public static readonly RTRIM = 334;
    public static readonly TRIM = 335;
    public static readonly TO = 336;
    public static readonly LOWER = 337;
    public static readonly UPPER = 338;
    public static readonly CONCAT = 339;
    public static readonly CONCAT_WS = 340;
    public static readonly LENGTH = 341;
    public static readonly STRCMP = 342;
    public static readonly RIGHT = 343;
    public static readonly LEFT = 344;
    public static readonly ASCII = 345;
    public static readonly LOCATE = 346;
    public static readonly REPLACE = 347;
    public static readonly REVERSE = 348;
    public static readonly CAST = 349;
    public static readonly LIKE = 350;
    public static readonly ISNULL = 351;
    public static readonly ISNOTNULL = 352;
    public static readonly CIDRMATCH = 353;
    public static readonly BETWEEN = 354;
    public static readonly ISPRESENT = 355;
    public static readonly ISEMPTY = 356;
    public static readonly ISBLANK = 357;
    public static readonly ARRAY = 358;
    public static readonly ARRAY_LENGTH = 359;
    public static readonly FORALL = 360;
    public static readonly FILTER = 361;
    public static readonly TRANSFORM = 362;
    public static readonly REDUCE = 363;
    public static readonly JSON_VALID = 364;
    public static readonly JSON = 365;
    public static readonly JSON_OBJECT = 366;
    public static readonly JSON_ARRAY = 367;
    public static readonly JSON_ARRAY_LENGTH = 368;
    public static readonly JSON_EXTRACT = 369;
    public static readonly JSON_KEYS = 370;
    public static readonly JSON_SET = 371;
    public static readonly JSON_DELETE = 372;
    public static readonly JSON_APPEND = 373;
    public static readonly JSON_EXTEND = 374;
    public static readonly IFNULL = 375;
    public static readonly NULLIF = 376;
    public static readonly IF = 377;
    public static readonly TYPEOF = 378;
    public static readonly COALESCE = 379;
    public static readonly MATCH = 380;
    public static readonly MATCH_PHRASE = 381;
    public static readonly MATCH_PHRASE_PREFIX = 382;
    public static readonly MATCH_BOOL_PREFIX = 383;
    public static readonly SIMPLE_QUERY_STRING = 384;
    public static readonly MULTI_MATCH = 385;
    public static readonly QUERY_STRING = 386;
    public static readonly ALLOW_LEADING_WILDCARD = 387;
    public static readonly ANALYZE_WILDCARD = 388;
    public static readonly ANALYZER = 389;
    public static readonly AUTO_GENERATE_SYNONYMS_PHRASE_QUERY = 390;
    public static readonly BOOST = 391;
    public static readonly CUTOFF_FREQUENCY = 392;
    public static readonly DEFAULT_FIELD = 393;
    public static readonly DEFAULT_OPERATOR = 394;
    public static readonly ENABLE_POSITION_INCREMENTS = 395;
    public static readonly ESCAPE = 396;
    public static readonly FLAGS = 397;
    public static readonly FUZZY_MAX_EXPANSIONS = 398;
    public static readonly FUZZY_PREFIX_LENGTH = 399;
    public static readonly FUZZY_TRANSPOSITIONS = 400;
    public static readonly FUZZY_REWRITE = 401;
    public static readonly FUZZINESS = 402;
    public static readonly LENIENT = 403;
    public static readonly LOW_FREQ_OPERATOR = 404;
    public static readonly MAX_DETERMINIZED_STATES = 405;
    public static readonly MAX_EXPANSIONS = 406;
    public static readonly MINIMUM_SHOULD_MATCH = 407;
    public static readonly OPERATOR = 408;
    public static readonly PHRASE_SLOP = 409;
    public static readonly PREFIX_LENGTH = 410;
    public static readonly QUOTE_ANALYZER = 411;
    public static readonly QUOTE_FIELD_SUFFIX = 412;
    public static readonly REWRITE = 413;
    public static readonly SLOP = 414;
    public static readonly TIE_BREAKER = 415;
    public static readonly TYPE = 416;
    public static readonly ZERO_TERMS_QUERY = 417;
    public static readonly SPAN = 418;
    public static readonly BINS = 419;
    public static readonly MINSPAN = 420;
    public static readonly START = 421;
    public static readonly END = 422;
    public static readonly ALIGNTIME = 423;
    public static readonly MS = 424;
    public static readonly S = 425;
    public static readonly M = 426;
    public static readonly H = 427;
    public static readonly W = 428;
    public static readonly Q = 429;
    public static readonly Y = 430;
    public static readonly SEC = 431;
    public static readonly SECS = 432;
    public static readonly SECONDS = 433;
    public static readonly MINS = 434;
    public static readonly MINUTES = 435;
    public static readonly HR = 436;
    public static readonly HRS = 437;
    public static readonly HOURS = 438;
    public static readonly DAYS = 439;
    public static readonly MON = 440;
    public static readonly MONTHS = 441;
    public static readonly US = 442;
    public static readonly CS = 443;
    public static readonly DS = 444;
    public static readonly PERCENTILE_SHORTCUT = 445;
    public static readonly ID = 446;
    public static readonly CLUSTER = 447;
    public static readonly INTEGER_LITERAL = 448;
    public static readonly DECIMAL_LITERAL = 449;
    public static readonly FLOAT_LITERAL = 450;
    public static readonly DOUBLE_LITERAL = 451;
    public static readonly ID_DATE_SUFFIX = 452;
    public static readonly DQUOTA_STRING = 453;
    public static readonly SQUOTA_STRING = 454;
    public static readonly BQUOTA_STRING = 455;
    public static readonly LINE_COMMENT = 456;
    public static readonly BLOCK_COMMENT = 457;
    public static readonly ERROR_RECOGNITION = 458;
    public static readonly RULE_root = 0;
    public static readonly RULE_pplStatement = 1;
    public static readonly RULE_queryStatement = 2;
    public static readonly RULE_explainStatement = 3;
    public static readonly RULE_explainMode = 4;
    public static readonly RULE_subSearch = 5;
    public static readonly RULE_pplCommands = 6;
    public static readonly RULE_commands = 7;
    public static readonly RULE_commandName = 8;
    public static readonly RULE_searchCommand = 9;
    public static readonly RULE_describeCommand = 10;
    public static readonly RULE_showDataSourcesCommand = 11;
    public static readonly RULE_whereCommand = 12;
    public static readonly RULE_fieldsCommand = 13;
    public static readonly RULE_tableCommand = 14;
    public static readonly RULE_fieldsCommandBody = 15;
    public static readonly RULE_wcFieldList = 16;
    public static readonly RULE_renameCommand = 17;
    public static readonly RULE_statsCommand = 18;
    public static readonly RULE_eventstatsCommand = 19;
    public static readonly RULE_dedupCommand = 20;
    public static readonly RULE_sortCommand = 21;
    public static readonly RULE_reverseCommand = 22;
    public static readonly RULE_timechartCommand = 23;
    public static readonly RULE_timechartParameter = 24;
    public static readonly RULE_timechartArg = 25;
    public static readonly RULE_spanLiteral = 26;
    public static readonly RULE_evalCommand = 27;
    public static readonly RULE_headCommand = 28;
    public static readonly RULE_binCommand = 29;
    public static readonly RULE_binOption = 30;
    public static readonly RULE_aligntimeValue = 31;
    public static readonly RULE_spanValue = 32;
    public static readonly RULE_logSpanValue = 33;
    public static readonly RULE_topCommand = 34;
    public static readonly RULE_rareCommand = 35;
    public static readonly RULE_grokCommand = 36;
    public static readonly RULE_parseCommand = 37;
    public static readonly RULE_spathCommand = 38;
    public static readonly RULE_spathParameter = 39;
    public static readonly RULE_indexablePath = 40;
    public static readonly RULE_pathElement = 41;
    public static readonly RULE_pathArrayAccess = 42;
    public static readonly RULE_regexCommand = 43;
    public static readonly RULE_regexExpr = 44;
    public static readonly RULE_patternsMethod = 45;
    public static readonly RULE_patternsCommand = 46;
    public static readonly RULE_patternsParameter = 47;
    public static readonly RULE_patternMethod = 48;
    public static readonly RULE_patternMode = 49;
    public static readonly RULE_lookupCommand = 50;
    public static readonly RULE_lookupMappingList = 51;
    public static readonly RULE_outputCandidateList = 52;
    public static readonly RULE_lookupPair = 53;
    public static readonly RULE_fillnullCommand = 54;
    public static readonly RULE_fillNullWith = 55;
    public static readonly RULE_fillNullUsing = 56;
    public static readonly RULE_replacementPair = 57;
    public static readonly RULE_trendlineCommand = 58;
    public static readonly RULE_trendlineClause = 59;
    public static readonly RULE_trendlineType = 60;
    public static readonly RULE_expandCommand = 61;
    public static readonly RULE_flattenCommand = 62;
    public static readonly RULE_appendcolCommand = 63;
    public static readonly RULE_appendCommand = 64;
    public static readonly RULE_kmeansCommand = 65;
    public static readonly RULE_kmeansParameter = 66;
    public static readonly RULE_adCommand = 67;
    public static readonly RULE_adParameter = 68;
    public static readonly RULE_mlCommand = 69;
    public static readonly RULE_mlArg = 70;
    public static readonly RULE_fromClause = 71;
    public static readonly RULE_tableOrSubqueryClause = 72;
    public static readonly RULE_tableSourceClause = 73;
    public static readonly RULE_joinCommand = 74;
    public static readonly RULE_joinType = 75;
    public static readonly RULE_sideAlias = 76;
    public static readonly RULE_joinCriteria = 77;
    public static readonly RULE_joinHintList = 78;
    public static readonly RULE_hintPair = 79;
    public static readonly RULE_renameClasue = 80;
    public static readonly RULE_byClause = 81;
    public static readonly RULE_statsByClause = 82;
    public static readonly RULE_bySpanClause = 83;
    public static readonly RULE_spanClause = 84;
    public static readonly RULE_sortbyClause = 85;
    public static readonly RULE_evalClause = 86;
    public static readonly RULE_eventstatsAggTerm = 87;
    public static readonly RULE_windowFunction = 88;
    public static readonly RULE_windowFunctionName = 89;
    public static readonly RULE_scalarWindowFunctionName = 90;
    public static readonly RULE_statsAggTerm = 91;
    public static readonly RULE_statsFunction = 92;
    public static readonly RULE_statsFunctionName = 93;
    public static readonly RULE_earliestLatestFunction = 94;
    public static readonly RULE_takeAggFunction = 95;
    public static readonly RULE_percentileApproxFunction = 96;
    public static readonly RULE_numericLiteral = 97;
    public static readonly RULE_logicalExpression = 98;
    public static readonly RULE_expression = 99;
    public static readonly RULE_valueExpression = 100;
    public static readonly RULE_evalExpression = 101;
    public static readonly RULE_functionCall = 102;
    public static readonly RULE_positionFunctionCall = 103;
    public static readonly RULE_caseFunctionCall = 104;
    public static readonly RULE_relevanceExpression = 105;
    public static readonly RULE_singleFieldRelevanceFunction = 106;
    public static readonly RULE_multiFieldRelevanceFunction = 107;
    public static readonly RULE_tableSource = 108;
    public static readonly RULE_tableFunction = 109;
    public static readonly RULE_fieldList = 110;
    public static readonly RULE_sortField = 111;
    public static readonly RULE_sortFieldExpression = 112;
    public static readonly RULE_fieldExpression = 113;
    public static readonly RULE_wcFieldExpression = 114;
    public static readonly RULE_selectFieldExpression = 115;
    public static readonly RULE_evalFunctionCall = 116;
    public static readonly RULE_dataTypeFunctionCall = 117;
    public static readonly RULE_convertedDataType = 118;
    public static readonly RULE_evalFunctionName = 119;
    public static readonly RULE_functionArgs = 120;
    public static readonly RULE_namedFunctionArgs = 121;
    public static readonly RULE_functionArg = 122;
    public static readonly RULE_namedFunctionArg = 123;
    public static readonly RULE_functionArgExpression = 124;
    public static readonly RULE_lambda = 125;
    public static readonly RULE_relevanceArg = 126;
    public static readonly RULE_relevanceArgName = 127;
    public static readonly RULE_relevanceFieldAndWeight = 128;
    public static readonly RULE_relevanceFieldWeight = 129;
    public static readonly RULE_relevanceField = 130;
    public static readonly RULE_relevanceQuery = 131;
    public static readonly RULE_relevanceArgValue = 132;
    public static readonly RULE_mathematicalFunctionName = 133;
    public static readonly RULE_geoipFunctionName = 134;
    public static readonly RULE_collectionFunctionName = 135;
    public static readonly RULE_trigonometricFunctionName = 136;
    public static readonly RULE_jsonFunctionName = 137;
    public static readonly RULE_cryptographicFunctionName = 138;
    public static readonly RULE_dateTimeFunctionName = 139;
    public static readonly RULE_getFormatFunctionCall = 140;
    public static readonly RULE_getFormatType = 141;
    public static readonly RULE_extractFunctionCall = 142;
    public static readonly RULE_simpleDateTimePart = 143;
    public static readonly RULE_complexDateTimePart = 144;
    public static readonly RULE_datetimePart = 145;
    public static readonly RULE_timestampFunctionCall = 146;
    public static readonly RULE_timestampFunctionName = 147;
    public static readonly RULE_conditionFunctionName = 148;
    public static readonly RULE_flowControlFunctionName = 149;
    public static readonly RULE_systemFunctionName = 150;
    public static readonly RULE_textFunctionName = 151;
    public static readonly RULE_positionFunctionName = 152;
    public static readonly RULE_comparisonOperator = 153;
    public static readonly RULE_singleFieldRelevanceFunctionName = 154;
    public static readonly RULE_multiFieldRelevanceFunctionName = 155;
    public static readonly RULE_literalValue = 156;
    public static readonly RULE_intervalLiteral = 157;
    public static readonly RULE_stringLiteral = 158;
    public static readonly RULE_integerLiteral = 159;
    public static readonly RULE_decimalLiteral = 160;
    public static readonly RULE_doubleLiteral = 161;
    public static readonly RULE_floatLiteral = 162;
    public static readonly RULE_booleanLiteral = 163;
    public static readonly RULE_datetimeLiteral = 164;
    public static readonly RULE_dateLiteral = 165;
    public static readonly RULE_timeLiteral = 166;
    public static readonly RULE_timestampLiteral = 167;
    public static readonly RULE_intervalUnit = 168;
    public static readonly RULE_timespanUnit = 169;
    public static readonly RULE_valueList = 170;
    public static readonly RULE_qualifiedName = 171;
    public static readonly RULE_tableQualifiedName = 172;
    public static readonly RULE_wcQualifiedName = 173;
    public static readonly RULE_identifierSeq = 174;
    public static readonly RULE_ident = 175;
    public static readonly RULE_tableIdent = 176;
    public static readonly RULE_wildcard = 177;
    public static readonly RULE_keywordsCanBeId = 178;

    public static readonly literalNames = [
        null, null, "'SEARCH'", "'DESCRIBE'", "'SHOW'", "'EXPLAIN'", "'FROM'", 
        "'WHERE'", "'FIELDS'", "'TABLE'", "'RENAME'", "'STATS'", "'EVENTSTATS'", 
        "'DEDUP'", "'SORT'", "'EVAL'", "'HEAD'", "'BIN'", "'TOP'", "'RARE'", 
        "'PARSE'", "'SPATH'", "'REGEX'", "'PUNCT'", "'GROK'", "'PATTERN'", 
        "'PATTERNS'", "'NEW_FIELD'", "'KMEANS'", "'AD'", "'ML'", "'FILLNULL'", 
        "'FLATTEN'", "'TRENDLINE'", "'TIMECHART'", "'APPENDCOL'", "'EXPAND'", 
        "'SIMPLE_PATTERN'", "'BRAIN'", "'VARIABLE_COUNT_THRESHOLD'", "'FREQUENCY_THRESHOLD_PERCENTAGE'", 
        "'METHOD'", "'MAX_SAMPLE_COUNT'", "'BUFFER_LIMIT'", "'LABEL'", "'AGGREGATION'", 
        "'JOIN'", "'ON'", "'INNER'", "'OUTER'", "'FULL'", "'SEMI'", "'ANTI'", 
        "'CROSS'", "'HINT.LEFT'", "'HINT.RIGHT'", "'AS'", "'BY'", "'SOURCE'", 
        "'INDEX'", "'A'", "'ASC'", "'D'", "'DESC'", "'DATASOURCES'", "'USING'", 
        "'WITH'", "'SIMPLE'", "'STANDARD'", "'COST'", "'EXTENDED'", "'OVERRIDE'", 
        "'AUTO'", "'STR'", "'NUM'", "'SMA'", "'WMA'", "'KEEPEMPTY'", "'CONSECUTIVE'", 
        "'DEDUP_SPLITVALUES'", "'PARTITIONS'", "'ALLNUM'", "'DELIM'", "'CENTROIDS'", 
        "'ITERATIONS'", "'DISTANCE_TYPE'", "'NUMBER_OF_TREES'", "'SHINGLE_SIZE'", 
        "'SAMPLE_SIZE'", "'OUTPUT_AFTER'", "'TIME_DECAY'", "'ANOMALY_RATE'", 
        "'CATEGORY_FIELD'", "'TIME_FIELD'", "'TIME_ZONE'", "'TRAINING_DATA_SIZE'", 
        "'ANOMALY_SCORE_THRESHOLD'", "'APPEND'", "'COUNTFIELD'", "'SHOWCOUNT'", 
        "'LIMIT'", "'USEOTHER'", "'INPUT'", "'OUTPUT'", "'PATH'", "'CASE'", 
        "'ELSE'", "'IN'", "'EXISTS'", "'GEOIP'", "'NOT'", "'OR'", "'AND'", 
        "'XOR'", "'TRUE'", "'FALSE'", "'REGEXP'", "'REGEX_MATCH'", "'CONVERT_TZ'", 
        "'DATETIME'", "'DAY'", "'DAY_HOUR'", "'DAY_MICROSECOND'", "'DAY_MINUTE'", 
        "'DAY_OF_YEAR'", "'DAY_SECOND'", "'HOUR'", "'HOUR_MICROSECOND'", 
        "'HOUR_MINUTE'", "'HOUR_OF_DAY'", "'HOUR_SECOND'", "'INTERVAL'", 
        "'MICROSECOND'", "'MILLISECOND'", "'MINUTE'", "'MINUTE_MICROSECOND'", 
        "'MINUTE_OF_DAY'", "'MINUTE_OF_HOUR'", "'MINUTE_SECOND'", "'MONTH'", 
        "'MONTH_OF_YEAR'", "'QUARTER'", "'SECOND'", "'SECOND_MICROSECOND'", 
        "'SECOND_OF_MINUTE'", "'WEEK'", "'WEEK_OF_YEAR'", "'YEAR'", "'YEAR_MONTH'", 
        "'DATAMODEL'", "'LOOKUP'", "'SAVEDSEARCH'", "'INT'", "'INTEGER'", 
        "'DOUBLE'", "'LONG'", "'FLOAT'", "'STRING'", "'BOOLEAN'", "'IP'", 
        "'|'", "','", "'.'", "'='", "'=='", "'>'", "'<'", null, null, null, 
        "'+'", "'-'", "'*'", "'/'", "'%'", "'!'", "':'", "'('", "')'", "'['", 
        "']'", "'{'", "'}'", "'''", "'\"'", "'`'", "'->'", "'~'", "'&'", 
        "'^'", "'AVG'", "'COUNT'", "'DISTINCT_COUNT'", "'DISTINCT_COUNT_APPROX'", 
        "'ESTDC'", "'ESTDC_ERROR'", "'MAX'", "'MEAN'", "'MEDIAN'", "'MIN'", 
        "'MODE'", "'RANGE'", "'STDEV'", "'STDEVP'", "'SUM'", "'SUMSQ'", 
        "'VAR_SAMP'", "'VAR_POP'", "'STDDEV_SAMP'", "'STDDEV_POP'", "'PERC'", 
        "'PERCENTILE'", "'PERCENTILE_APPROX'", "'EARLIEST'", "'LATEST'", 
        "'TAKE'", "'LIST'", "'VALUES'", "'PER_DAY'", "'PER_HOUR'", "'PER_MINUTE'", 
        "'PER_SECOND'", "'RATE'", "'SPARKLINE'", "'C'", "'DC'", "'ROW_NUMBER'", 
        "'RANK'", "'DENSE_RANK'", "'PERCENT_RANK'", "'CUME_DIST'", "'FIRST'", 
        "'LAST'", "'NTH'", "'NTILE'", "'ADD'", "'SUBTRACT'", "'MULTIPLY'", 
        "'DIVIDE'", "'ABS'", "'CBRT'", "'CEIL'", "'CEILING'", "'CONV'", 
        "'CRC32'", "'E'", "'EXP'", "'EXPM1'", "'FLOOR'", "'LN'", "'LOG'", 
        null, "'MOD'", "'MODULUS'", "'PI'", "'POSITION'", "'POW'", "'POWER'", 
        "'RAND'", "'ROUND'", "'SIGN'", "'SQRT'", "'TRUNCATE'", "'RINT'", 
        "'SIGNUM'", "'ACOS'", "'ASIN'", "'ATAN'", "'ATAN2'", "'COS'", "'COSH'", 
        "'COT'", "'DEGREES'", "'RADIANS'", "'SIN'", "'SINH'", "'TAN'", "'MD5'", 
        "'SHA1'", "'SHA2'", "'ADDDATE'", "'ADDTIME'", "'CURDATE'", "'CURRENT_DATE'", 
        "'CURRENT_TIME'", "'CURRENT_TIMESTAMP'", "'CURTIME'", "'DATE'", 
        "'DATEDIFF'", "'DATE_ADD'", "'DATE_FORMAT'", "'DATE_SUB'", "'DAYNAME'", 
        "'DAYOFMONTH'", "'DAYOFWEEK'", "'DAYOFYEAR'", "'DAY_OF_MONTH'", 
        "'DAY_OF_WEEK'", "'EXTRACT'", "'FROM_DAYS'", "'FROM_UNIXTIME'", 
        "'GET_FORMAT'", "'LAST_DAY'", "'LOCALTIME'", "'LOCALTIMESTAMP'", 
        "'MAKEDATE'", "'MAKETIME'", "'MONTHNAME'", "'NOW'", "'PERIOD_ADD'", 
        "'PERIOD_DIFF'", "'SEC_TO_TIME'", "'STR_TO_DATE'", "'SUBDATE'", 
        "'SUBTIME'", "'SYSDATE'", "'TIME'", "'TIMEDIFF'", "'TIMESTAMP'", 
        "'TIMESTAMPADD'", "'TIMESTAMPDIFF'", "'TIME_FORMAT'", "'TIME_TO_SEC'", 
        "'TO_DAYS'", "'TO_SECONDS'", "'UNIX_TIMESTAMP'", "'UTC_DATE'", "'UTC_TIME'", 
        "'UTC_TIMESTAMP'", "'WEEKDAY'", "'YEARWEEK'", "'SUBSTR'", "'SUBSTRING'", 
        "'LTRIM'", "'RTRIM'", "'TRIM'", "'TO'", "'LOWER'", "'UPPER'", "'CONCAT'", 
        "'CONCAT_WS'", "'LENGTH'", "'STRCMP'", "'RIGHT'", "'LEFT'", "'ASCII'", 
        "'LOCATE'", "'REPLACE'", "'REVERSE'", "'CAST'", "'LIKE'", "'ISNULL'", 
        "'ISNOTNULL'", "'CIDRMATCH'", "'BETWEEN'", "'ISPRESENT'", "'ISEMPTY'", 
        "'ISBLANK'", "'ARRAY'", "'ARRAY_LENGTH'", "'FORALL'", "'FILTER'", 
        "'TRANSFORM'", "'REDUCE'", "'JSON_VALID'", "'JSON'", "'JSON_OBJECT'", 
        "'JSON_ARRAY'", "'JSON_ARRAY_LENGTH'", "'JSON_EXTRACT'", "'JSON_KEYS'", 
        "'JSON_SET'", "'JSON_DELETE'", "'JSON_APPEND'", "'JSON_EXTEND'", 
        "'IFNULL'", "'NULLIF'", "'IF'", "'TYPEOF'", "'COALESCE'", "'MATCH'", 
        "'MATCH_PHRASE'", "'MATCH_PHRASE_PREFIX'", "'MATCH_BOOL_PREFIX'", 
        "'SIMPLE_QUERY_STRING'", "'MULTI_MATCH'", "'QUERY_STRING'", "'ALLOW_LEADING_WILDCARD'", 
        "'ANALYZE_WILDCARD'", "'ANALYZER'", "'AUTO_GENERATE_SYNONYMS_PHRASE_QUERY'", 
        "'BOOST'", "'CUTOFF_FREQUENCY'", "'DEFAULT_FIELD'", "'DEFAULT_OPERATOR'", 
        "'ENABLE_POSITION_INCREMENTS'", "'ESCAPE'", "'FLAGS'", "'FUZZY_MAX_EXPANSIONS'", 
        "'FUZZY_PREFIX_LENGTH'", "'FUZZY_TRANSPOSITIONS'", "'FUZZY_REWRITE'", 
        "'FUZZINESS'", "'LENIENT'", "'LOW_FREQ_OPERATOR'", "'MAX_DETERMINIZED_STATES'", 
        "'MAX_EXPANSIONS'", "'MINIMUM_SHOULD_MATCH'", "'OPERATOR'", "'PHRASE_SLOP'", 
        "'PREFIX_LENGTH'", "'QUOTE_ANALYZER'", "'QUOTE_FIELD_SUFFIX'", "'REWRITE'", 
        "'SLOP'", "'TIE_BREAKER'", "'TYPE'", "'ZERO_TERMS_QUERY'", "'SPAN'", 
        "'BINS'", "'MINSPAN'", "'START'", "'END'", "'ALIGNTIME'", "'MS'", 
        "'S'", "'M'", "'H'", "'W'", "'Q'", "'Y'", "'SEC'", "'SECS'", "'SECONDS'", 
        "'MINS'", "'MINUTES'", "'HR'", "'HRS'", "'HOURS'", "'DAYS'", "'MON'", 
        "'MONTHS'", "'US'", "'CS'", "'DS'"
    ];

    public static readonly symbolicNames = [
        null, "SPACE", "SEARCH", "DESCRIBE", "SHOW", "EXPLAIN", "FROM", 
        "WHERE", "FIELDS", "TABLE", "RENAME", "STATS", "EVENTSTATS", "DEDUP", 
        "SORT", "EVAL", "HEAD", "BIN", "TOP", "RARE", "PARSE", "SPATH", 
        "REGEX", "PUNCT", "GROK", "PATTERN", "PATTERNS", "NEW_FIELD", "KMEANS", 
        "AD", "ML", "FILLNULL", "FLATTEN", "TRENDLINE", "TIMECHART", "APPENDCOL", 
        "EXPAND", "SIMPLE_PATTERN", "BRAIN", "VARIABLE_COUNT_THRESHOLD", 
        "FREQUENCY_THRESHOLD_PERCENTAGE", "METHOD", "MAX_SAMPLE_COUNT", 
        "BUFFER_LIMIT", "LABEL", "AGGREGATION", "JOIN", "ON", "INNER", "OUTER", 
        "FULL", "SEMI", "ANTI", "CROSS", "LEFT_HINT", "RIGHT_HINT", "AS", 
        "BY", "SOURCE", "INDEX", "A", "ASC", "D", "DESC", "DATASOURCES", 
        "USING", "WITH", "SIMPLE", "STANDARD", "COST", "EXTENDED", "OVERRIDE", 
        "AUTO", "STR", "NUM", "SMA", "WMA", "KEEPEMPTY", "CONSECUTIVE", 
        "DEDUP_SPLITVALUES", "PARTITIONS", "ALLNUM", "DELIM", "CENTROIDS", 
        "ITERATIONS", "DISTANCE_TYPE", "NUMBER_OF_TREES", "SHINGLE_SIZE", 
        "SAMPLE_SIZE", "OUTPUT_AFTER", "TIME_DECAY", "ANOMALY_RATE", "CATEGORY_FIELD", 
        "TIME_FIELD", "TIME_ZONE", "TRAINING_DATA_SIZE", "ANOMALY_SCORE_THRESHOLD", 
        "APPEND", "COUNTFIELD", "SHOWCOUNT", "LIMIT", "USEOTHER", "INPUT", 
        "OUTPUT", "PATH", "CASE", "ELSE", "IN", "EXISTS", "GEOIP", "NOT", 
        "OR", "AND", "XOR", "TRUE", "FALSE", "REGEXP", "REGEX_MATCH", "CONVERT_TZ", 
        "DATETIME", "DAY", "DAY_HOUR", "DAY_MICROSECOND", "DAY_MINUTE", 
        "DAY_OF_YEAR", "DAY_SECOND", "HOUR", "HOUR_MICROSECOND", "HOUR_MINUTE", 
        "HOUR_OF_DAY", "HOUR_SECOND", "INTERVAL", "MICROSECOND", "MILLISECOND", 
        "MINUTE", "MINUTE_MICROSECOND", "MINUTE_OF_DAY", "MINUTE_OF_HOUR", 
        "MINUTE_SECOND", "MONTH", "MONTH_OF_YEAR", "QUARTER", "SECOND", 
        "SECOND_MICROSECOND", "SECOND_OF_MINUTE", "WEEK", "WEEK_OF_YEAR", 
        "YEAR", "YEAR_MONTH", "DATAMODEL", "LOOKUP", "SAVEDSEARCH", "INT", 
        "INTEGER", "DOUBLE", "LONG", "FLOAT", "STRING", "BOOLEAN", "IP", 
        "PIPE", "COMMA", "DOT", "EQUAL", "DOUBLE_EQUAL", "GREATER", "LESS", 
        "NOT_GREATER", "NOT_LESS", "NOT_EQUAL", "PLUS", "MINUS", "STAR", 
        "DIVIDE", "MODULE", "EXCLAMATION_SYMBOL", "COLON", "LT_PRTHS", "RT_PRTHS", 
        "LT_SQR_PRTHS", "RT_SQR_PRTHS", "LT_CURLY", "RT_CURLY", "SINGLE_QUOTE", 
        "DOUBLE_QUOTE", "BACKTICK", "ARROW", "BIT_NOT_OP", "BIT_AND_OP", 
        "BIT_XOR_OP", "AVG", "COUNT", "DISTINCT_COUNT", "DISTINCT_COUNT_APPROX", 
        "ESTDC", "ESTDC_ERROR", "MAX", "MEAN", "MEDIAN", "MIN", "MODE", 
        "RANGE", "STDEV", "STDEVP", "SUM", "SUMSQ", "VAR_SAMP", "VAR_POP", 
        "STDDEV_SAMP", "STDDEV_POP", "PERC", "PERCENTILE", "PERCENTILE_APPROX", 
        "EARLIEST", "LATEST", "TAKE", "LIST", "VALUES", "PER_DAY", "PER_HOUR", 
        "PER_MINUTE", "PER_SECOND", "RATE", "SPARKLINE", "C", "DC", "ROW_NUMBER", 
        "RANK", "DENSE_RANK", "PERCENT_RANK", "CUME_DIST", "FIRST", "LAST", 
        "NTH", "NTILE", "PLUS_FUCTION", "MINUS_FUCTION", "STAR_FUNCTION", 
        "DIVIDE_FUNCTION", "ABS", "CBRT", "CEIL", "CEILING", "CONV", "CRC32", 
        "E", "EXP", "EXPM1", "FLOOR", "LN", "LOG", "LOG_WITH_BASE", "MOD", 
        "MODULUS", "PI", "POSITION", "POW", "POWER", "RAND", "ROUND", "SIGN", 
        "SQRT", "TRUNCATE", "RINT", "SIGNUM", "ACOS", "ASIN", "ATAN", "ATAN2", 
        "COS", "COSH", "COT", "DEGREES", "RADIANS", "SIN", "SINH", "TAN", 
        "MD5", "SHA1", "SHA2", "ADDDATE", "ADDTIME", "CURDATE", "CURRENT_DATE", 
        "CURRENT_TIME", "CURRENT_TIMESTAMP", "CURTIME", "DATE", "DATEDIFF", 
        "DATE_ADD", "DATE_FORMAT", "DATE_SUB", "DAYNAME", "DAYOFMONTH", 
        "DAYOFWEEK", "DAYOFYEAR", "DAY_OF_MONTH", "DAY_OF_WEEK", "EXTRACT", 
        "FROM_DAYS", "FROM_UNIXTIME", "GET_FORMAT", "LAST_DAY", "LOCALTIME", 
        "LOCALTIMESTAMP", "MAKEDATE", "MAKETIME", "MONTHNAME", "NOW", "PERIOD_ADD", 
        "PERIOD_DIFF", "SEC_TO_TIME", "STR_TO_DATE", "SUBDATE", "SUBTIME", 
        "SYSDATE", "TIME", "TIMEDIFF", "TIMESTAMP", "TIMESTAMPADD", "TIMESTAMPDIFF", 
        "TIME_FORMAT", "TIME_TO_SEC", "TO_DAYS", "TO_SECONDS", "UNIX_TIMESTAMP", 
        "UTC_DATE", "UTC_TIME", "UTC_TIMESTAMP", "WEEKDAY", "YEARWEEK", 
        "SUBSTR", "SUBSTRING", "LTRIM", "RTRIM", "TRIM", "TO", "LOWER", 
        "UPPER", "CONCAT", "CONCAT_WS", "LENGTH", "STRCMP", "RIGHT", "LEFT", 
        "ASCII", "LOCATE", "REPLACE", "REVERSE", "CAST", "LIKE", "ISNULL", 
        "ISNOTNULL", "CIDRMATCH", "BETWEEN", "ISPRESENT", "ISEMPTY", "ISBLANK", 
        "ARRAY", "ARRAY_LENGTH", "FORALL", "FILTER", "TRANSFORM", "REDUCE", 
        "JSON_VALID", "JSON", "JSON_OBJECT", "JSON_ARRAY", "JSON_ARRAY_LENGTH", 
        "JSON_EXTRACT", "JSON_KEYS", "JSON_SET", "JSON_DELETE", "JSON_APPEND", 
        "JSON_EXTEND", "IFNULL", "NULLIF", "IF", "TYPEOF", "COALESCE", "MATCH", 
        "MATCH_PHRASE", "MATCH_PHRASE_PREFIX", "MATCH_BOOL_PREFIX", "SIMPLE_QUERY_STRING", 
        "MULTI_MATCH", "QUERY_STRING", "ALLOW_LEADING_WILDCARD", "ANALYZE_WILDCARD", 
        "ANALYZER", "AUTO_GENERATE_SYNONYMS_PHRASE_QUERY", "BOOST", "CUTOFF_FREQUENCY", 
        "DEFAULT_FIELD", "DEFAULT_OPERATOR", "ENABLE_POSITION_INCREMENTS", 
        "ESCAPE", "FLAGS", "FUZZY_MAX_EXPANSIONS", "FUZZY_PREFIX_LENGTH", 
        "FUZZY_TRANSPOSITIONS", "FUZZY_REWRITE", "FUZZINESS", "LENIENT", 
        "LOW_FREQ_OPERATOR", "MAX_DETERMINIZED_STATES", "MAX_EXPANSIONS", 
        "MINIMUM_SHOULD_MATCH", "OPERATOR", "PHRASE_SLOP", "PREFIX_LENGTH", 
        "QUOTE_ANALYZER", "QUOTE_FIELD_SUFFIX", "REWRITE", "SLOP", "TIE_BREAKER", 
        "TYPE", "ZERO_TERMS_QUERY", "SPAN", "BINS", "MINSPAN", "START", 
        "END", "ALIGNTIME", "MS", "S", "M", "H", "W", "Q", "Y", "SEC", "SECS", 
        "SECONDS", "MINS", "MINUTES", "HR", "HRS", "HOURS", "DAYS", "MON", 
        "MONTHS", "US", "CS", "DS", "PERCENTILE_SHORTCUT", "ID", "CLUSTER", 
        "INTEGER_LITERAL", "DECIMAL_LITERAL", "FLOAT_LITERAL", "DOUBLE_LITERAL", 
        "ID_DATE_SUFFIX", "DQUOTA_STRING", "SQUOTA_STRING", "BQUOTA_STRING", 
        "LINE_COMMENT", "BLOCK_COMMENT", "ERROR_RECOGNITION"
    ];
    public static readonly ruleNames = [
        "root", "pplStatement", "queryStatement", "explainStatement", "explainMode", 
        "subSearch", "pplCommands", "commands", "commandName", "searchCommand", 
        "describeCommand", "showDataSourcesCommand", "whereCommand", "fieldsCommand", 
        "tableCommand", "fieldsCommandBody", "wcFieldList", "renameCommand", 
        "statsCommand", "eventstatsCommand", "dedupCommand", "sortCommand", 
        "reverseCommand", "timechartCommand", "timechartParameter", "timechartArg", 
        "spanLiteral", "evalCommand", "headCommand", "binCommand", "binOption", 
        "aligntimeValue", "spanValue", "logSpanValue", "topCommand", "rareCommand", 
        "grokCommand", "parseCommand", "spathCommand", "spathParameter", 
        "indexablePath", "pathElement", "pathArrayAccess", "regexCommand", 
        "regexExpr", "patternsMethod", "patternsCommand", "patternsParameter", 
        "patternMethod", "patternMode", "lookupCommand", "lookupMappingList", 
        "outputCandidateList", "lookupPair", "fillnullCommand", "fillNullWith", 
        "fillNullUsing", "replacementPair", "trendlineCommand", "trendlineClause", 
        "trendlineType", "expandCommand", "flattenCommand", "appendcolCommand", 
        "appendCommand", "kmeansCommand", "kmeansParameter", "adCommand", 
        "adParameter", "mlCommand", "mlArg", "fromClause", "tableOrSubqueryClause", 
        "tableSourceClause", "joinCommand", "joinType", "sideAlias", "joinCriteria", 
        "joinHintList", "hintPair", "renameClasue", "byClause", "statsByClause", 
        "bySpanClause", "spanClause", "sortbyClause", "evalClause", "eventstatsAggTerm", 
        "windowFunction", "windowFunctionName", "scalarWindowFunctionName", 
        "statsAggTerm", "statsFunction", "statsFunctionName", "earliestLatestFunction", 
        "takeAggFunction", "percentileApproxFunction", "numericLiteral", 
        "logicalExpression", "expression", "valueExpression", "evalExpression", 
        "functionCall", "positionFunctionCall", "caseFunctionCall", "relevanceExpression", 
        "singleFieldRelevanceFunction", "multiFieldRelevanceFunction", "tableSource", 
        "tableFunction", "fieldList", "sortField", "sortFieldExpression", 
        "fieldExpression", "wcFieldExpression", "selectFieldExpression", 
        "evalFunctionCall", "dataTypeFunctionCall", "convertedDataType", 
        "evalFunctionName", "functionArgs", "namedFunctionArgs", "functionArg", 
        "namedFunctionArg", "functionArgExpression", "lambda", "relevanceArg", 
        "relevanceArgName", "relevanceFieldAndWeight", "relevanceFieldWeight", 
        "relevanceField", "relevanceQuery", "relevanceArgValue", "mathematicalFunctionName", 
        "geoipFunctionName", "collectionFunctionName", "trigonometricFunctionName", 
        "jsonFunctionName", "cryptographicFunctionName", "dateTimeFunctionName", 
        "getFormatFunctionCall", "getFormatType", "extractFunctionCall", 
        "simpleDateTimePart", "complexDateTimePart", "datetimePart", "timestampFunctionCall", 
        "timestampFunctionName", "conditionFunctionName", "flowControlFunctionName", 
        "systemFunctionName", "textFunctionName", "positionFunctionName", 
        "comparisonOperator", "singleFieldRelevanceFunctionName", "multiFieldRelevanceFunctionName", 
        "literalValue", "intervalLiteral", "stringLiteral", "integerLiteral", 
        "decimalLiteral", "doubleLiteral", "floatLiteral", "booleanLiteral", 
        "datetimeLiteral", "dateLiteral", "timeLiteral", "timestampLiteral", 
        "intervalUnit", "timespanUnit", "valueList", "qualifiedName", "tableQualifiedName", 
        "wcQualifiedName", "identifierSeq", "ident", "tableIdent", "wildcard", 
        "keywordsCanBeId",
    ];

    public get grammarFileName(): string { return "OpenSearchPPLParser.g4"; }
    public get literalNames(): (string | null)[] { return OpenSearchPPLParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return OpenSearchPPLParser.symbolicNames; }
    public get ruleNames(): string[] { return OpenSearchPPLParser.ruleNames; }
    public get serializedATN(): number[] { return OpenSearchPPLParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, OpenSearchPPLParser._ATN, OpenSearchPPLParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public root(): RootContext {
        let localContext = new RootContext(this.context, this.state);
        this.enterRule(localContext, 0, OpenSearchPPLParser.RULE_root);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 359;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4292870140) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4244590487) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294737871) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 2153775103) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 4051862527) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 4294901759) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 4294967295) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 4294967295) !== 0) || ((((_la - 290)) & ~0x1F) === 0 && ((1 << (_la - 290)) & 4294967295) !== 0) || ((((_la - 322)) & ~0x1F) === 0 && ((1 << (_la - 322)) & 4294950911) !== 0) || ((((_la - 354)) & ~0x1F) === 0 && ((1 << (_la - 354)) & 4294967295) !== 0) || ((((_la - 386)) & ~0x1F) === 0 && ((1 << (_la - 386)) & 4294967295) !== 0) || ((((_la - 418)) & ~0x1F) === 0 && ((1 << (_la - 418)) & 3758096321) !== 0) || ((((_la - 450)) & ~0x1F) === 0 && ((1 << (_la - 450)) & 59) !== 0)) {
                {
                this.state = 358;
                this.pplStatement();
                }
            }

            this.state = 361;
            this.match(OpenSearchPPLParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pplStatement(): PplStatementContext {
        let localContext = new PplStatementContext(this.context, this.state);
        this.enterRule(localContext, 2, OpenSearchPPLParser.RULE_pplStatement);
        try {
            this.state = 365;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 363;
                this.explainStatement();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 364;
                this.queryStatement();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public queryStatement(): QueryStatementContext {
        let localContext = new QueryStatementContext(this.context, this.state);
        this.enterRule(localContext, 4, OpenSearchPPLParser.RULE_queryStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 367;
            this.pplCommands();
            this.state = 372;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 160) {
                {
                {
                this.state = 368;
                this.match(OpenSearchPPLParser.PIPE);
                this.state = 369;
                this.commands();
                }
                }
                this.state = 374;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public explainStatement(): ExplainStatementContext {
        let localContext = new ExplainStatementContext(this.context, this.state);
        this.enterRule(localContext, 6, OpenSearchPPLParser.RULE_explainStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 375;
            this.match(OpenSearchPPLParser.EXPLAIN);
            this.state = 377;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context) ) {
            case 1:
                {
                this.state = 376;
                this.explainMode();
                }
                break;
            }
            this.state = 379;
            this.queryStatement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public explainMode(): ExplainModeContext {
        let localContext = new ExplainModeContext(this.context, this.state);
        this.enterRule(localContext, 8, OpenSearchPPLParser.RULE_explainMode);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 381;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 15) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public subSearch(): SubSearchContext {
        let localContext = new SubSearchContext(this.context, this.state);
        this.enterRule(localContext, 10, OpenSearchPPLParser.RULE_subSearch);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 383;
            this.searchCommand();
            this.state = 388;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 160) {
                {
                {
                this.state = 384;
                this.match(OpenSearchPPLParser.PIPE);
                this.state = 385;
                this.commands();
                }
                }
                this.state = 390;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pplCommands(): PplCommandsContext {
        let localContext = new PplCommandsContext(this.context, this.state);
        this.enterRule(localContext, 12, OpenSearchPPLParser.RULE_pplCommands);
        try {
            this.state = 394;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 391;
                this.describeCommand();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 392;
                this.showDataSourcesCommand();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 393;
                this.searchCommand();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public commands(): CommandsContext {
        let localContext = new CommandsContext(this.context, this.state);
        this.enterRule(localContext, 14, OpenSearchPPLParser.RULE_commands);
        try {
            this.state = 427;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.WHERE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 396;
                this.whereCommand();
                }
                break;
            case OpenSearchPPLParser.FIELDS:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 397;
                this.fieldsCommand();
                }
                break;
            case OpenSearchPPLParser.TABLE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 398;
                this.tableCommand();
                }
                break;
            case OpenSearchPPLParser.JOIN:
            case OpenSearchPPLParser.INNER:
            case OpenSearchPPLParser.FULL:
            case OpenSearchPPLParser.SEMI:
            case OpenSearchPPLParser.ANTI:
            case OpenSearchPPLParser.CROSS:
            case OpenSearchPPLParser.RIGHT:
            case OpenSearchPPLParser.LEFT:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 399;
                this.joinCommand();
                }
                break;
            case OpenSearchPPLParser.RENAME:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 400;
                this.renameCommand();
                }
                break;
            case OpenSearchPPLParser.STATS:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 401;
                this.statsCommand();
                }
                break;
            case OpenSearchPPLParser.EVENTSTATS:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 402;
                this.eventstatsCommand();
                }
                break;
            case OpenSearchPPLParser.DEDUP:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 403;
                this.dedupCommand();
                }
                break;
            case OpenSearchPPLParser.SORT:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 404;
                this.sortCommand();
                }
                break;
            case OpenSearchPPLParser.EVAL:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 405;
                this.evalCommand();
                }
                break;
            case OpenSearchPPLParser.HEAD:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 406;
                this.headCommand();
                }
                break;
            case OpenSearchPPLParser.BIN:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 407;
                this.binCommand();
                }
                break;
            case OpenSearchPPLParser.TOP:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 408;
                this.topCommand();
                }
                break;
            case OpenSearchPPLParser.RARE:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 409;
                this.rareCommand();
                }
                break;
            case OpenSearchPPLParser.GROK:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 410;
                this.grokCommand();
                }
                break;
            case OpenSearchPPLParser.PARSE:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 411;
                this.parseCommand();
                }
                break;
            case OpenSearchPPLParser.SPATH:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 412;
                this.spathCommand();
                }
                break;
            case OpenSearchPPLParser.PATTERNS:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 413;
                this.patternsCommand();
                }
                break;
            case OpenSearchPPLParser.LOOKUP:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 414;
                this.lookupCommand();
                }
                break;
            case OpenSearchPPLParser.KMEANS:
                this.enterOuterAlt(localContext, 20);
                {
                this.state = 415;
                this.kmeansCommand();
                }
                break;
            case OpenSearchPPLParser.AD:
                this.enterOuterAlt(localContext, 21);
                {
                this.state = 416;
                this.adCommand();
                }
                break;
            case OpenSearchPPLParser.ML:
                this.enterOuterAlt(localContext, 22);
                {
                this.state = 417;
                this.mlCommand();
                }
                break;
            case OpenSearchPPLParser.FILLNULL:
                this.enterOuterAlt(localContext, 23);
                {
                this.state = 418;
                this.fillnullCommand();
                }
                break;
            case OpenSearchPPLParser.TRENDLINE:
                this.enterOuterAlt(localContext, 24);
                {
                this.state = 419;
                this.trendlineCommand();
                }
                break;
            case OpenSearchPPLParser.APPENDCOL:
                this.enterOuterAlt(localContext, 25);
                {
                this.state = 420;
                this.appendcolCommand();
                }
                break;
            case OpenSearchPPLParser.APPEND:
                this.enterOuterAlt(localContext, 26);
                {
                this.state = 421;
                this.appendCommand();
                }
                break;
            case OpenSearchPPLParser.EXPAND:
                this.enterOuterAlt(localContext, 27);
                {
                this.state = 422;
                this.expandCommand();
                }
                break;
            case OpenSearchPPLParser.FLATTEN:
                this.enterOuterAlt(localContext, 28);
                {
                this.state = 423;
                this.flattenCommand();
                }
                break;
            case OpenSearchPPLParser.REVERSE:
                this.enterOuterAlt(localContext, 29);
                {
                this.state = 424;
                this.reverseCommand();
                }
                break;
            case OpenSearchPPLParser.REGEX:
                this.enterOuterAlt(localContext, 30);
                {
                this.state = 425;
                this.regexCommand();
                }
                break;
            case OpenSearchPPLParser.TIMECHART:
                this.enterOuterAlt(localContext, 31);
                {
                this.state = 426;
                this.timechartCommand();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public commandName(): CommandNameContext {
        let localContext = new CommandNameContext(this.context, this.state);
        this.enterRule(localContext, 16, OpenSearchPPLParser.RULE_commandName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 429;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4116709308) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 16407) !== 0) || _la === 97 || _la === 150 || _la === 348)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public searchCommand(): SearchCommandContext {
        let localContext = new SearchCommandContext(this.context, this.state);
        this.enterRule(localContext, 18, OpenSearchPPLParser.RULE_searchCommand);
        let _la: number;
        try {
            let alternative: number;
            localContext = new SearchFromContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 432;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
            case 1:
                {
                this.state = 431;
                this.match(OpenSearchPPLParser.SEARCH);
                }
                break;
            }
            this.state = 437;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 434;
                    this.logicalExpression(0);
                    }
                    }
                }
                this.state = 439;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            }
            this.state = 440;
            this.fromClause();
            this.state = 444;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4292870140) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4244590487) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294737871) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 2153775103) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 4051862527) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 4294901759) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 4294967295) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 4294967295) !== 0) || ((((_la - 290)) & ~0x1F) === 0 && ((1 << (_la - 290)) & 4294967295) !== 0) || ((((_la - 322)) & ~0x1F) === 0 && ((1 << (_la - 322)) & 4294950911) !== 0) || ((((_la - 354)) & ~0x1F) === 0 && ((1 << (_la - 354)) & 4294967295) !== 0) || ((((_la - 386)) & ~0x1F) === 0 && ((1 << (_la - 386)) & 4294967295) !== 0) || ((((_la - 418)) & ~0x1F) === 0 && ((1 << (_la - 418)) & 3758096321) !== 0) || ((((_la - 450)) & ~0x1F) === 0 && ((1 << (_la - 450)) & 59) !== 0)) {
                {
                {
                this.state = 441;
                this.logicalExpression(0);
                }
                }
                this.state = 446;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public describeCommand(): DescribeCommandContext {
        let localContext = new DescribeCommandContext(this.context, this.state);
        this.enterRule(localContext, 20, OpenSearchPPLParser.RULE_describeCommand);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 447;
            this.match(OpenSearchPPLParser.DESCRIBE);
            this.state = 448;
            this.tableSourceClause();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public showDataSourcesCommand(): ShowDataSourcesCommandContext {
        let localContext = new ShowDataSourcesCommandContext(this.context, this.state);
        this.enterRule(localContext, 22, OpenSearchPPLParser.RULE_showDataSourcesCommand);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 450;
            this.match(OpenSearchPPLParser.SHOW);
            this.state = 451;
            this.match(OpenSearchPPLParser.DATASOURCES);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whereCommand(): WhereCommandContext {
        let localContext = new WhereCommandContext(this.context, this.state);
        this.enterRule(localContext, 24, OpenSearchPPLParser.RULE_whereCommand);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 453;
            this.match(OpenSearchPPLParser.WHERE);
            this.state = 454;
            this.logicalExpression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fieldsCommand(): FieldsCommandContext {
        let localContext = new FieldsCommandContext(this.context, this.state);
        this.enterRule(localContext, 26, OpenSearchPPLParser.RULE_fieldsCommand);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 456;
            this.match(OpenSearchPPLParser.FIELDS);
            this.state = 457;
            this.fieldsCommandBody();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableCommand(): TableCommandContext {
        let localContext = new TableCommandContext(this.context, this.state);
        this.enterRule(localContext, 28, OpenSearchPPLParser.RULE_tableCommand);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 459;
            this.match(OpenSearchPPLParser.TABLE);
            this.state = 460;
            this.fieldsCommandBody();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fieldsCommandBody(): FieldsCommandBodyContext {
        let localContext = new FieldsCommandBodyContext(this.context, this.state);
        this.enterRule(localContext, 30, OpenSearchPPLParser.RULE_fieldsCommandBody);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 463;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 10, this.context) ) {
            case 1:
                {
                this.state = 462;
                _la = this.tokenStream.LA(1);
                if(!(_la === 170 || _la === 171)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            }
            this.state = 465;
            this.wcFieldList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public wcFieldList(): WcFieldListContext {
        let localContext = new WcFieldListContext(this.context, this.state);
        this.enterRule(localContext, 32, OpenSearchPPLParser.RULE_wcFieldList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 467;
            this.selectFieldExpression();
            this.state = 474;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4292870140) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4244590487) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4293935055) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 2153775103) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 3821015039) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 4294836223) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & 4294967295) !== 0) || ((((_la - 257)) & ~0x1F) === 0 && ((1 << (_la - 257)) & 4294967295) !== 0) || ((((_la - 289)) & ~0x1F) === 0 && ((1 << (_la - 289)) & 1073741823) !== 0) || ((((_la - 321)) & ~0x1F) === 0 && ((1 << (_la - 321)) & 4294934527) !== 0) || ((((_la - 353)) & ~0x1F) === 0 && ((1 << (_la - 353)) & 4294967295) !== 0) || ((((_la - 385)) & ~0x1F) === 0 && ((1 << (_la - 385)) & 4294967295) !== 0) || ((((_la - 417)) & ~0x1F) === 0 && ((1 << (_la - 417)) & 1073741699) !== 0) || _la === 455) {
                {
                {
                this.state = 469;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 161) {
                    {
                    this.state = 468;
                    this.match(OpenSearchPPLParser.COMMA);
                    }
                }

                this.state = 471;
                this.selectFieldExpression();
                }
                }
                this.state = 476;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public renameCommand(): RenameCommandContext {
        let localContext = new RenameCommandContext(this.context, this.state);
        this.enterRule(localContext, 34, OpenSearchPPLParser.RULE_renameCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 477;
            this.match(OpenSearchPPLParser.RENAME);
            this.state = 478;
            this.renameClasue();
            this.state = 483;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 161) {
                {
                {
                this.state = 479;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 480;
                this.renameClasue();
                }
                }
                this.state = 485;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statsCommand(): StatsCommandContext {
        let localContext = new StatsCommandContext(this.context, this.state);
        this.enterRule(localContext, 36, OpenSearchPPLParser.RULE_statsCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 486;
            this.match(OpenSearchPPLParser.STATS);
            this.state = 490;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 80) {
                {
                this.state = 487;
                this.match(OpenSearchPPLParser.PARTITIONS);
                this.state = 488;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 489;
                localContext._partitions = this.integerLiteral();
                }
            }

            this.state = 495;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 81) {
                {
                this.state = 492;
                this.match(OpenSearchPPLParser.ALLNUM);
                this.state = 493;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 494;
                localContext._allnum = this.booleanLiteral();
                }
            }

            this.state = 500;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 82) {
                {
                this.state = 497;
                this.match(OpenSearchPPLParser.DELIM);
                this.state = 498;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 499;
                localContext._delim = this.stringLiteral();
                }
            }

            this.state = 502;
            this.statsAggTerm();
            this.state = 507;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 161) {
                {
                {
                this.state = 503;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 504;
                this.statsAggTerm();
                }
                }
                this.state = 509;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 511;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 57) {
                {
                this.state = 510;
                this.statsByClause();
                }
            }

            this.state = 516;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 79) {
                {
                this.state = 513;
                this.match(OpenSearchPPLParser.DEDUP_SPLITVALUES);
                this.state = 514;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 515;
                localContext._dedupsplit = this.booleanLiteral();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public eventstatsCommand(): EventstatsCommandContext {
        let localContext = new EventstatsCommandContext(this.context, this.state);
        this.enterRule(localContext, 38, OpenSearchPPLParser.RULE_eventstatsCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 518;
            this.match(OpenSearchPPLParser.EVENTSTATS);
            this.state = 519;
            this.eventstatsAggTerm();
            this.state = 524;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 161) {
                {
                {
                this.state = 520;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 521;
                this.eventstatsAggTerm();
                }
                }
                this.state = 526;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 528;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 57) {
                {
                this.state = 527;
                this.statsByClause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dedupCommand(): DedupCommandContext {
        let localContext = new DedupCommandContext(this.context, this.state);
        this.enterRule(localContext, 40, OpenSearchPPLParser.RULE_dedupCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 530;
            this.match(OpenSearchPPLParser.DEDUP);
            this.state = 532;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 22, this.context) ) {
            case 1:
                {
                this.state = 531;
                localContext._number_ = this.integerLiteral();
                }
                break;
            }
            this.state = 534;
            this.fieldList();
            this.state = 538;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 77) {
                {
                this.state = 535;
                this.match(OpenSearchPPLParser.KEEPEMPTY);
                this.state = 536;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 537;
                localContext._keepempty = this.booleanLiteral();
                }
            }

            this.state = 543;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 78) {
                {
                this.state = 540;
                this.match(OpenSearchPPLParser.CONSECUTIVE);
                this.state = 541;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 542;
                localContext._consecutive = this.booleanLiteral();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sortCommand(): SortCommandContext {
        let localContext = new SortCommandContext(this.context, this.state);
        this.enterRule(localContext, 42, OpenSearchPPLParser.RULE_sortCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 545;
            this.match(OpenSearchPPLParser.SORT);
            this.state = 547;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 25, this.context) ) {
            case 1:
                {
                this.state = 546;
                localContext._count = this.integerLiteral();
                }
                break;
            }
            this.state = 549;
            this.sortbyClause();
            this.state = 551;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & 15) !== 0)) {
                {
                this.state = 550;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & 15) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public reverseCommand(): ReverseCommandContext {
        let localContext = new ReverseCommandContext(this.context, this.state);
        this.enterRule(localContext, 44, OpenSearchPPLParser.RULE_reverseCommand);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 553;
            this.match(OpenSearchPPLParser.REVERSE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public timechartCommand(): TimechartCommandContext {
        let localContext = new TimechartCommandContext(this.context, this.state);
        this.enterRule(localContext, 46, OpenSearchPPLParser.RULE_timechartCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 555;
            this.match(OpenSearchPPLParser.TIMECHART);
            this.state = 559;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 100 || _la === 101 || _la === 418) {
                {
                {
                this.state = 556;
                this.timechartParameter();
                }
                }
                this.state = 561;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 562;
            this.statsFunction();
            this.state = 565;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 57) {
                {
                this.state = 563;
                this.match(OpenSearchPPLParser.BY);
                this.state = 564;
                this.fieldExpression();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public timechartParameter(): TimechartParameterContext {
        let localContext = new TimechartParameterContext(this.context, this.state);
        this.enterRule(localContext, 48, OpenSearchPPLParser.RULE_timechartParameter);
        try {
            this.state = 574;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.SPAN:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 571;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 29, this.context) ) {
                case 1:
                    {
                    this.state = 567;
                    this.spanClause();
                    }
                    break;
                case 2:
                    {
                    this.state = 568;
                    this.match(OpenSearchPPLParser.SPAN);
                    this.state = 569;
                    this.match(OpenSearchPPLParser.EQUAL);
                    this.state = 570;
                    this.spanLiteral();
                    }
                    break;
                }
                }
                break;
            case OpenSearchPPLParser.LIMIT:
            case OpenSearchPPLParser.USEOTHER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 573;
                this.timechartArg();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public timechartArg(): TimechartArgContext {
        let localContext = new TimechartArgContext(this.context, this.state);
        this.enterRule(localContext, 50, OpenSearchPPLParser.RULE_timechartArg);
        try {
            this.state = 585;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.LIMIT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 576;
                this.match(OpenSearchPPLParser.LIMIT);
                this.state = 577;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 578;
                this.integerLiteral();
                }
                break;
            case OpenSearchPPLParser.USEOTHER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 579;
                this.match(OpenSearchPPLParser.USEOTHER);
                this.state = 580;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 583;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case OpenSearchPPLParser.TRUE:
                case OpenSearchPPLParser.FALSE:
                    {
                    this.state = 581;
                    this.booleanLiteral();
                    }
                    break;
                case OpenSearchPPLParser.SEARCH:
                case OpenSearchPPLParser.DESCRIBE:
                case OpenSearchPPLParser.SHOW:
                case OpenSearchPPLParser.EXPLAIN:
                case OpenSearchPPLParser.FROM:
                case OpenSearchPPLParser.WHERE:
                case OpenSearchPPLParser.FIELDS:
                case OpenSearchPPLParser.TABLE:
                case OpenSearchPPLParser.RENAME:
                case OpenSearchPPLParser.STATS:
                case OpenSearchPPLParser.EVENTSTATS:
                case OpenSearchPPLParser.DEDUP:
                case OpenSearchPPLParser.SORT:
                case OpenSearchPPLParser.EVAL:
                case OpenSearchPPLParser.HEAD:
                case OpenSearchPPLParser.BIN:
                case OpenSearchPPLParser.TOP:
                case OpenSearchPPLParser.RARE:
                case OpenSearchPPLParser.PARSE:
                case OpenSearchPPLParser.REGEX:
                case OpenSearchPPLParser.PUNCT:
                case OpenSearchPPLParser.GROK:
                case OpenSearchPPLParser.PATTERN:
                case OpenSearchPPLParser.PATTERNS:
                case OpenSearchPPLParser.NEW_FIELD:
                case OpenSearchPPLParser.KMEANS:
                case OpenSearchPPLParser.AD:
                case OpenSearchPPLParser.ML:
                case OpenSearchPPLParser.FILLNULL:
                case OpenSearchPPLParser.FLATTEN:
                case OpenSearchPPLParser.TRENDLINE:
                case OpenSearchPPLParser.TIMECHART:
                case OpenSearchPPLParser.EXPAND:
                case OpenSearchPPLParser.VARIABLE_COUNT_THRESHOLD:
                case OpenSearchPPLParser.FREQUENCY_THRESHOLD_PERCENTAGE:
                case OpenSearchPPLParser.METHOD:
                case OpenSearchPPLParser.MAX_SAMPLE_COUNT:
                case OpenSearchPPLParser.BUFFER_LIMIT:
                case OpenSearchPPLParser.JOIN:
                case OpenSearchPPLParser.INNER:
                case OpenSearchPPLParser.OUTER:
                case OpenSearchPPLParser.FULL:
                case OpenSearchPPLParser.SEMI:
                case OpenSearchPPLParser.ANTI:
                case OpenSearchPPLParser.CROSS:
                case OpenSearchPPLParser.LEFT_HINT:
                case OpenSearchPPLParser.RIGHT_HINT:
                case OpenSearchPPLParser.SOURCE:
                case OpenSearchPPLParser.INDEX:
                case OpenSearchPPLParser.A:
                case OpenSearchPPLParser.ASC:
                case OpenSearchPPLParser.D:
                case OpenSearchPPLParser.DESC:
                case OpenSearchPPLParser.DATASOURCES:
                case OpenSearchPPLParser.USING:
                case OpenSearchPPLParser.WITH:
                case OpenSearchPPLParser.SIMPLE:
                case OpenSearchPPLParser.STANDARD:
                case OpenSearchPPLParser.COST:
                case OpenSearchPPLParser.EXTENDED:
                case OpenSearchPPLParser.OVERRIDE:
                case OpenSearchPPLParser.AUTO:
                case OpenSearchPPLParser.STR:
                case OpenSearchPPLParser.NUM:
                case OpenSearchPPLParser.SMA:
                case OpenSearchPPLParser.WMA:
                case OpenSearchPPLParser.KEEPEMPTY:
                case OpenSearchPPLParser.CONSECUTIVE:
                case OpenSearchPPLParser.DEDUP_SPLITVALUES:
                case OpenSearchPPLParser.PARTITIONS:
                case OpenSearchPPLParser.ALLNUM:
                case OpenSearchPPLParser.DELIM:
                case OpenSearchPPLParser.CENTROIDS:
                case OpenSearchPPLParser.ITERATIONS:
                case OpenSearchPPLParser.DISTANCE_TYPE:
                case OpenSearchPPLParser.NUMBER_OF_TREES:
                case OpenSearchPPLParser.SHINGLE_SIZE:
                case OpenSearchPPLParser.SAMPLE_SIZE:
                case OpenSearchPPLParser.OUTPUT_AFTER:
                case OpenSearchPPLParser.TIME_DECAY:
                case OpenSearchPPLParser.ANOMALY_RATE:
                case OpenSearchPPLParser.CATEGORY_FIELD:
                case OpenSearchPPLParser.TIME_FIELD:
                case OpenSearchPPLParser.TIME_ZONE:
                case OpenSearchPPLParser.TRAINING_DATA_SIZE:
                case OpenSearchPPLParser.ANOMALY_SCORE_THRESHOLD:
                case OpenSearchPPLParser.APPEND:
                case OpenSearchPPLParser.COUNTFIELD:
                case OpenSearchPPLParser.SHOWCOUNT:
                case OpenSearchPPLParser.INPUT:
                case OpenSearchPPLParser.OUTPUT:
                case OpenSearchPPLParser.PATH:
                case OpenSearchPPLParser.CASE:
                case OpenSearchPPLParser.ELSE:
                case OpenSearchPPLParser.IN:
                case OpenSearchPPLParser.EXISTS:
                case OpenSearchPPLParser.GEOIP:
                case OpenSearchPPLParser.REGEXP:
                case OpenSearchPPLParser.REGEX_MATCH:
                case OpenSearchPPLParser.CONVERT_TZ:
                case OpenSearchPPLParser.DATETIME:
                case OpenSearchPPLParser.DAY:
                case OpenSearchPPLParser.DAY_HOUR:
                case OpenSearchPPLParser.DAY_MICROSECOND:
                case OpenSearchPPLParser.DAY_MINUTE:
                case OpenSearchPPLParser.DAY_OF_YEAR:
                case OpenSearchPPLParser.DAY_SECOND:
                case OpenSearchPPLParser.HOUR:
                case OpenSearchPPLParser.HOUR_MICROSECOND:
                case OpenSearchPPLParser.HOUR_MINUTE:
                case OpenSearchPPLParser.HOUR_OF_DAY:
                case OpenSearchPPLParser.HOUR_SECOND:
                case OpenSearchPPLParser.INTERVAL:
                case OpenSearchPPLParser.MICROSECOND:
                case OpenSearchPPLParser.MILLISECOND:
                case OpenSearchPPLParser.MINUTE:
                case OpenSearchPPLParser.MINUTE_MICROSECOND:
                case OpenSearchPPLParser.MINUTE_OF_DAY:
                case OpenSearchPPLParser.MINUTE_OF_HOUR:
                case OpenSearchPPLParser.MINUTE_SECOND:
                case OpenSearchPPLParser.MONTH:
                case OpenSearchPPLParser.MONTH_OF_YEAR:
                case OpenSearchPPLParser.QUARTER:
                case OpenSearchPPLParser.SECOND:
                case OpenSearchPPLParser.SECOND_MICROSECOND:
                case OpenSearchPPLParser.SECOND_OF_MINUTE:
                case OpenSearchPPLParser.WEEK:
                case OpenSearchPPLParser.WEEK_OF_YEAR:
                case OpenSearchPPLParser.YEAR:
                case OpenSearchPPLParser.YEAR_MONTH:
                case OpenSearchPPLParser.LOOKUP:
                case OpenSearchPPLParser.IP:
                case OpenSearchPPLParser.DOT:
                case OpenSearchPPLParser.EQUAL:
                case OpenSearchPPLParser.DOUBLE_EQUAL:
                case OpenSearchPPLParser.GREATER:
                case OpenSearchPPLParser.LESS:
                case OpenSearchPPLParser.NOT_GREATER:
                case OpenSearchPPLParser.NOT_LESS:
                case OpenSearchPPLParser.NOT_EQUAL:
                case OpenSearchPPLParser.PLUS:
                case OpenSearchPPLParser.MINUS:
                case OpenSearchPPLParser.BACKTICK:
                case OpenSearchPPLParser.ARROW:
                case OpenSearchPPLParser.AVG:
                case OpenSearchPPLParser.COUNT:
                case OpenSearchPPLParser.DISTINCT_COUNT:
                case OpenSearchPPLParser.DISTINCT_COUNT_APPROX:
                case OpenSearchPPLParser.ESTDC:
                case OpenSearchPPLParser.ESTDC_ERROR:
                case OpenSearchPPLParser.MAX:
                case OpenSearchPPLParser.MEAN:
                case OpenSearchPPLParser.MEDIAN:
                case OpenSearchPPLParser.MIN:
                case OpenSearchPPLParser.MODE:
                case OpenSearchPPLParser.RANGE:
                case OpenSearchPPLParser.STDEV:
                case OpenSearchPPLParser.STDEVP:
                case OpenSearchPPLParser.SUM:
                case OpenSearchPPLParser.SUMSQ:
                case OpenSearchPPLParser.VAR_SAMP:
                case OpenSearchPPLParser.VAR_POP:
                case OpenSearchPPLParser.STDDEV_SAMP:
                case OpenSearchPPLParser.STDDEV_POP:
                case OpenSearchPPLParser.PERCENTILE:
                case OpenSearchPPLParser.PERCENTILE_APPROX:
                case OpenSearchPPLParser.EARLIEST:
                case OpenSearchPPLParser.LATEST:
                case OpenSearchPPLParser.TAKE:
                case OpenSearchPPLParser.LIST:
                case OpenSearchPPLParser.VALUES:
                case OpenSearchPPLParser.PER_DAY:
                case OpenSearchPPLParser.PER_HOUR:
                case OpenSearchPPLParser.PER_MINUTE:
                case OpenSearchPPLParser.PER_SECOND:
                case OpenSearchPPLParser.RATE:
                case OpenSearchPPLParser.SPARKLINE:
                case OpenSearchPPLParser.C:
                case OpenSearchPPLParser.DC:
                case OpenSearchPPLParser.ROW_NUMBER:
                case OpenSearchPPLParser.RANK:
                case OpenSearchPPLParser.DENSE_RANK:
                case OpenSearchPPLParser.PERCENT_RANK:
                case OpenSearchPPLParser.CUME_DIST:
                case OpenSearchPPLParser.FIRST:
                case OpenSearchPPLParser.LAST:
                case OpenSearchPPLParser.NTH:
                case OpenSearchPPLParser.NTILE:
                case OpenSearchPPLParser.PLUS_FUCTION:
                case OpenSearchPPLParser.MINUS_FUCTION:
                case OpenSearchPPLParser.STAR_FUNCTION:
                case OpenSearchPPLParser.DIVIDE_FUNCTION:
                case OpenSearchPPLParser.ABS:
                case OpenSearchPPLParser.CBRT:
                case OpenSearchPPLParser.CEIL:
                case OpenSearchPPLParser.CEILING:
                case OpenSearchPPLParser.CONV:
                case OpenSearchPPLParser.CRC32:
                case OpenSearchPPLParser.E:
                case OpenSearchPPLParser.EXP:
                case OpenSearchPPLParser.EXPM1:
                case OpenSearchPPLParser.FLOOR:
                case OpenSearchPPLParser.LN:
                case OpenSearchPPLParser.LOG:
                case OpenSearchPPLParser.LOG_WITH_BASE:
                case OpenSearchPPLParser.MOD:
                case OpenSearchPPLParser.MODULUS:
                case OpenSearchPPLParser.PI:
                case OpenSearchPPLParser.POSITION:
                case OpenSearchPPLParser.POW:
                case OpenSearchPPLParser.POWER:
                case OpenSearchPPLParser.RAND:
                case OpenSearchPPLParser.ROUND:
                case OpenSearchPPLParser.SIGN:
                case OpenSearchPPLParser.SQRT:
                case OpenSearchPPLParser.TRUNCATE:
                case OpenSearchPPLParser.RINT:
                case OpenSearchPPLParser.SIGNUM:
                case OpenSearchPPLParser.ACOS:
                case OpenSearchPPLParser.ASIN:
                case OpenSearchPPLParser.ATAN:
                case OpenSearchPPLParser.ATAN2:
                case OpenSearchPPLParser.COS:
                case OpenSearchPPLParser.COSH:
                case OpenSearchPPLParser.COT:
                case OpenSearchPPLParser.DEGREES:
                case OpenSearchPPLParser.RADIANS:
                case OpenSearchPPLParser.SIN:
                case OpenSearchPPLParser.SINH:
                case OpenSearchPPLParser.TAN:
                case OpenSearchPPLParser.MD5:
                case OpenSearchPPLParser.SHA1:
                case OpenSearchPPLParser.SHA2:
                case OpenSearchPPLParser.ADDDATE:
                case OpenSearchPPLParser.ADDTIME:
                case OpenSearchPPLParser.CURDATE:
                case OpenSearchPPLParser.CURRENT_DATE:
                case OpenSearchPPLParser.CURRENT_TIME:
                case OpenSearchPPLParser.CURRENT_TIMESTAMP:
                case OpenSearchPPLParser.CURTIME:
                case OpenSearchPPLParser.DATE:
                case OpenSearchPPLParser.DATEDIFF:
                case OpenSearchPPLParser.DATE_ADD:
                case OpenSearchPPLParser.DATE_FORMAT:
                case OpenSearchPPLParser.DATE_SUB:
                case OpenSearchPPLParser.DAYNAME:
                case OpenSearchPPLParser.DAYOFMONTH:
                case OpenSearchPPLParser.DAYOFWEEK:
                case OpenSearchPPLParser.DAYOFYEAR:
                case OpenSearchPPLParser.DAY_OF_MONTH:
                case OpenSearchPPLParser.DAY_OF_WEEK:
                case OpenSearchPPLParser.EXTRACT:
                case OpenSearchPPLParser.FROM_DAYS:
                case OpenSearchPPLParser.FROM_UNIXTIME:
                case OpenSearchPPLParser.GET_FORMAT:
                case OpenSearchPPLParser.LAST_DAY:
                case OpenSearchPPLParser.LOCALTIME:
                case OpenSearchPPLParser.LOCALTIMESTAMP:
                case OpenSearchPPLParser.MAKEDATE:
                case OpenSearchPPLParser.MAKETIME:
                case OpenSearchPPLParser.MONTHNAME:
                case OpenSearchPPLParser.NOW:
                case OpenSearchPPLParser.PERIOD_ADD:
                case OpenSearchPPLParser.PERIOD_DIFF:
                case OpenSearchPPLParser.SEC_TO_TIME:
                case OpenSearchPPLParser.STR_TO_DATE:
                case OpenSearchPPLParser.SUBDATE:
                case OpenSearchPPLParser.SUBTIME:
                case OpenSearchPPLParser.SYSDATE:
                case OpenSearchPPLParser.TIME:
                case OpenSearchPPLParser.TIMEDIFF:
                case OpenSearchPPLParser.TIMESTAMP:
                case OpenSearchPPLParser.TIME_FORMAT:
                case OpenSearchPPLParser.TIME_TO_SEC:
                case OpenSearchPPLParser.TO_DAYS:
                case OpenSearchPPLParser.TO_SECONDS:
                case OpenSearchPPLParser.UNIX_TIMESTAMP:
                case OpenSearchPPLParser.UTC_DATE:
                case OpenSearchPPLParser.UTC_TIME:
                case OpenSearchPPLParser.UTC_TIMESTAMP:
                case OpenSearchPPLParser.WEEKDAY:
                case OpenSearchPPLParser.YEARWEEK:
                case OpenSearchPPLParser.SUBSTR:
                case OpenSearchPPLParser.SUBSTRING:
                case OpenSearchPPLParser.LTRIM:
                case OpenSearchPPLParser.RTRIM:
                case OpenSearchPPLParser.TRIM:
                case OpenSearchPPLParser.LOWER:
                case OpenSearchPPLParser.UPPER:
                case OpenSearchPPLParser.CONCAT:
                case OpenSearchPPLParser.CONCAT_WS:
                case OpenSearchPPLParser.LENGTH:
                case OpenSearchPPLParser.STRCMP:
                case OpenSearchPPLParser.RIGHT:
                case OpenSearchPPLParser.LEFT:
                case OpenSearchPPLParser.ASCII:
                case OpenSearchPPLParser.LOCATE:
                case OpenSearchPPLParser.REPLACE:
                case OpenSearchPPLParser.REVERSE:
                case OpenSearchPPLParser.CAST:
                case OpenSearchPPLParser.LIKE:
                case OpenSearchPPLParser.ISNULL:
                case OpenSearchPPLParser.ISNOTNULL:
                case OpenSearchPPLParser.CIDRMATCH:
                case OpenSearchPPLParser.BETWEEN:
                case OpenSearchPPLParser.ISPRESENT:
                case OpenSearchPPLParser.ISEMPTY:
                case OpenSearchPPLParser.ISBLANK:
                case OpenSearchPPLParser.ARRAY:
                case OpenSearchPPLParser.ARRAY_LENGTH:
                case OpenSearchPPLParser.FORALL:
                case OpenSearchPPLParser.FILTER:
                case OpenSearchPPLParser.TRANSFORM:
                case OpenSearchPPLParser.REDUCE:
                case OpenSearchPPLParser.JSON_VALID:
                case OpenSearchPPLParser.JSON:
                case OpenSearchPPLParser.JSON_OBJECT:
                case OpenSearchPPLParser.JSON_ARRAY:
                case OpenSearchPPLParser.JSON_ARRAY_LENGTH:
                case OpenSearchPPLParser.JSON_EXTRACT:
                case OpenSearchPPLParser.JSON_KEYS:
                case OpenSearchPPLParser.JSON_SET:
                case OpenSearchPPLParser.JSON_DELETE:
                case OpenSearchPPLParser.JSON_APPEND:
                case OpenSearchPPLParser.JSON_EXTEND:
                case OpenSearchPPLParser.IFNULL:
                case OpenSearchPPLParser.NULLIF:
                case OpenSearchPPLParser.IF:
                case OpenSearchPPLParser.TYPEOF:
                case OpenSearchPPLParser.COALESCE:
                case OpenSearchPPLParser.MATCH:
                case OpenSearchPPLParser.MATCH_PHRASE:
                case OpenSearchPPLParser.MATCH_PHRASE_PREFIX:
                case OpenSearchPPLParser.MATCH_BOOL_PREFIX:
                case OpenSearchPPLParser.SIMPLE_QUERY_STRING:
                case OpenSearchPPLParser.MULTI_MATCH:
                case OpenSearchPPLParser.QUERY_STRING:
                case OpenSearchPPLParser.ALLOW_LEADING_WILDCARD:
                case OpenSearchPPLParser.ANALYZE_WILDCARD:
                case OpenSearchPPLParser.ANALYZER:
                case OpenSearchPPLParser.AUTO_GENERATE_SYNONYMS_PHRASE_QUERY:
                case OpenSearchPPLParser.BOOST:
                case OpenSearchPPLParser.CUTOFF_FREQUENCY:
                case OpenSearchPPLParser.DEFAULT_FIELD:
                case OpenSearchPPLParser.DEFAULT_OPERATOR:
                case OpenSearchPPLParser.ENABLE_POSITION_INCREMENTS:
                case OpenSearchPPLParser.ESCAPE:
                case OpenSearchPPLParser.FLAGS:
                case OpenSearchPPLParser.FUZZY_MAX_EXPANSIONS:
                case OpenSearchPPLParser.FUZZY_PREFIX_LENGTH:
                case OpenSearchPPLParser.FUZZY_TRANSPOSITIONS:
                case OpenSearchPPLParser.FUZZY_REWRITE:
                case OpenSearchPPLParser.FUZZINESS:
                case OpenSearchPPLParser.LENIENT:
                case OpenSearchPPLParser.LOW_FREQ_OPERATOR:
                case OpenSearchPPLParser.MAX_DETERMINIZED_STATES:
                case OpenSearchPPLParser.MAX_EXPANSIONS:
                case OpenSearchPPLParser.MINIMUM_SHOULD_MATCH:
                case OpenSearchPPLParser.OPERATOR:
                case OpenSearchPPLParser.PHRASE_SLOP:
                case OpenSearchPPLParser.PREFIX_LENGTH:
                case OpenSearchPPLParser.QUOTE_ANALYZER:
                case OpenSearchPPLParser.QUOTE_FIELD_SUFFIX:
                case OpenSearchPPLParser.REWRITE:
                case OpenSearchPPLParser.SLOP:
                case OpenSearchPPLParser.TIE_BREAKER:
                case OpenSearchPPLParser.TYPE:
                case OpenSearchPPLParser.ZERO_TERMS_QUERY:
                case OpenSearchPPLParser.SPAN:
                case OpenSearchPPLParser.MS:
                case OpenSearchPPLParser.S:
                case OpenSearchPPLParser.M:
                case OpenSearchPPLParser.H:
                case OpenSearchPPLParser.W:
                case OpenSearchPPLParser.Q:
                case OpenSearchPPLParser.Y:
                case OpenSearchPPLParser.SEC:
                case OpenSearchPPLParser.SECS:
                case OpenSearchPPLParser.SECONDS:
                case OpenSearchPPLParser.MINS:
                case OpenSearchPPLParser.MINUTES:
                case OpenSearchPPLParser.HR:
                case OpenSearchPPLParser.HRS:
                case OpenSearchPPLParser.HOURS:
                case OpenSearchPPLParser.DAYS:
                case OpenSearchPPLParser.MON:
                case OpenSearchPPLParser.MONTHS:
                case OpenSearchPPLParser.US:
                case OpenSearchPPLParser.CS:
                case OpenSearchPPLParser.DS:
                case OpenSearchPPLParser.PERCENTILE_SHORTCUT:
                case OpenSearchPPLParser.ID:
                case OpenSearchPPLParser.BQUOTA_STRING:
                    {
                    this.state = 582;
                    this.ident();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public spanLiteral(): SpanLiteralContext {
        let localContext = new SpanLiteralContext(this.context, this.state);
        this.enterRule(localContext, 52, OpenSearchPPLParser.RULE_spanLiteral);
        try {
            this.state = 591;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.PLUS:
            case OpenSearchPPLParser.MINUS:
            case OpenSearchPPLParser.INTEGER_LITERAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 587;
                this.integerLiteral();
                this.state = 588;
                this.timespanUnit();
                }
                break;
            case OpenSearchPPLParser.DQUOTA_STRING:
            case OpenSearchPPLParser.SQUOTA_STRING:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 590;
                this.stringLiteral();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public evalCommand(): EvalCommandContext {
        let localContext = new EvalCommandContext(this.context, this.state);
        this.enterRule(localContext, 54, OpenSearchPPLParser.RULE_evalCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 593;
            this.match(OpenSearchPPLParser.EVAL);
            this.state = 594;
            this.evalClause();
            this.state = 599;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 161) {
                {
                {
                this.state = 595;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 596;
                this.evalClause();
                }
                }
                this.state = 601;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public headCommand(): HeadCommandContext {
        let localContext = new HeadCommandContext(this.context, this.state);
        this.enterRule(localContext, 56, OpenSearchPPLParser.RULE_headCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 602;
            this.match(OpenSearchPPLParser.HEAD);
            this.state = 604;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 170 || _la === 171 || _la === 448) {
                {
                this.state = 603;
                localContext._number_ = this.integerLiteral();
                }
            }

            this.state = 608;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 606;
                this.match(OpenSearchPPLParser.FROM);
                this.state = 607;
                localContext._from_ = this.integerLiteral();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public binCommand(): BinCommandContext {
        let localContext = new BinCommandContext(this.context, this.state);
        this.enterRule(localContext, 58, OpenSearchPPLParser.RULE_binCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 610;
            this.match(OpenSearchPPLParser.BIN);
            this.state = 611;
            this.fieldExpression();
            this.state = 615;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 418)) & ~0x1F) === 0 && ((1 << (_la - 418)) & 63) !== 0)) {
                {
                {
                this.state = 612;
                this.binOption();
                }
                }
                this.state = 617;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 620;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 56) {
                {
                this.state = 618;
                this.match(OpenSearchPPLParser.AS);
                this.state = 619;
                localContext._alias = this.qualifiedName();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public binOption(): BinOptionContext {
        let localContext = new BinOptionContext(this.context, this.state);
        this.enterRule(localContext, 60, OpenSearchPPLParser.RULE_binOption);
        let _la: number;
        try {
            this.state = 643;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.SPAN:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 622;
                this.match(OpenSearchPPLParser.SPAN);
                this.state = 623;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 624;
                localContext._span = this.spanValue();
                }
                break;
            case OpenSearchPPLParser.BINS:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 625;
                this.match(OpenSearchPPLParser.BINS);
                this.state = 626;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 627;
                localContext._bins = this.integerLiteral();
                }
                break;
            case OpenSearchPPLParser.MINSPAN:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 628;
                this.match(OpenSearchPPLParser.MINSPAN);
                this.state = 629;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 630;
                localContext._minspan = this.literalValue();
                this.state = 632;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 62 || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & 174612545) !== 0) || ((((_la - 424)) & ~0x1F) === 0 && ((1 << (_la - 424)) & 2097151) !== 0)) {
                    {
                    this.state = 631;
                    localContext._minspanUnit = this.timespanUnit();
                    }
                }

                }
                break;
            case OpenSearchPPLParser.ALIGNTIME:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 634;
                this.match(OpenSearchPPLParser.ALIGNTIME);
                this.state = 635;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 636;
                localContext._aligntime = this.aligntimeValue();
                }
                break;
            case OpenSearchPPLParser.START:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 637;
                this.match(OpenSearchPPLParser.START);
                this.state = 638;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 639;
                localContext._start = this.numericLiteral();
                }
                break;
            case OpenSearchPPLParser.END:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 640;
                this.match(OpenSearchPPLParser.END);
                this.state = 641;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 642;
                localContext._end = this.numericLiteral();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public aligntimeValue(): AligntimeValueContext {
        let localContext = new AligntimeValueContext(this.context, this.state);
        this.enterRule(localContext, 62, OpenSearchPPLParser.RULE_aligntimeValue);
        try {
            this.state = 648;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.EARLIEST:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 645;
                this.match(OpenSearchPPLParser.EARLIEST);
                }
                break;
            case OpenSearchPPLParser.LATEST:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 646;
                this.match(OpenSearchPPLParser.LATEST);
                }
                break;
            case OpenSearchPPLParser.TRUE:
            case OpenSearchPPLParser.FALSE:
            case OpenSearchPPLParser.INTERVAL:
            case OpenSearchPPLParser.PLUS:
            case OpenSearchPPLParser.MINUS:
            case OpenSearchPPLParser.DATE:
            case OpenSearchPPLParser.TIME:
            case OpenSearchPPLParser.TIMESTAMP:
            case OpenSearchPPLParser.INTEGER_LITERAL:
            case OpenSearchPPLParser.DECIMAL_LITERAL:
            case OpenSearchPPLParser.FLOAT_LITERAL:
            case OpenSearchPPLParser.DOUBLE_LITERAL:
            case OpenSearchPPLParser.DQUOTA_STRING:
            case OpenSearchPPLParser.SQUOTA_STRING:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 647;
                this.literalValue();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public spanValue(): SpanValueContext {
        let localContext = new SpanValueContext(this.context, this.state);
        this.enterRule(localContext, 64, OpenSearchPPLParser.RULE_spanValue);
        let _la: number;
        try {
            this.state = 659;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 43, this.context) ) {
            case 1:
                localContext = new NumericSpanValueContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 650;
                this.literalValue();
                this.state = 652;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 62 || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & 174612545) !== 0) || ((((_la - 424)) & ~0x1F) === 0 && ((1 << (_la - 424)) & 2097151) !== 0)) {
                    {
                    this.state = 651;
                    this.timespanUnit();
                    }
                }

                }
                break;
            case 2:
                localContext = new LogBasedSpanValueContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 654;
                this.logSpanValue();
                }
                break;
            case 3:
                localContext = new ExtendedTimeSpanValueContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 655;
                this.ident();
                this.state = 656;
                this.timespanUnit();
                }
                break;
            case 4:
                localContext = new IdentifierSpanValueContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 658;
                this.ident();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public logSpanValue(): LogSpanValueContext {
        let localContext = new LogSpanValueContext(this.context, this.state);
        this.enterRule(localContext, 66, OpenSearchPPLParser.RULE_logSpanValue);
        try {
            localContext = new LogWithBaseSpanContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 661;
            this.match(OpenSearchPPLParser.LOG_WITH_BASE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public topCommand(): TopCommandContext {
        let localContext = new TopCommandContext(this.context, this.state);
        this.enterRule(localContext, 68, OpenSearchPPLParser.RULE_topCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 663;
            this.match(OpenSearchPPLParser.TOP);
            this.state = 665;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 44, this.context) ) {
            case 1:
                {
                this.state = 664;
                localContext._number_ = this.integerLiteral();
                }
                break;
            }
            this.state = 670;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 45, this.context) ) {
            case 1:
                {
                this.state = 667;
                this.match(OpenSearchPPLParser.COUNTFIELD);
                this.state = 668;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 669;
                localContext._countfield = this.stringLiteral();
                }
                break;
            }
            this.state = 675;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 46, this.context) ) {
            case 1:
                {
                this.state = 672;
                this.match(OpenSearchPPLParser.SHOWCOUNT);
                this.state = 673;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 674;
                localContext._showcount = this.booleanLiteral();
                }
                break;
            }
            this.state = 677;
            this.fieldList();
            this.state = 679;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 57) {
                {
                this.state = 678;
                this.byClause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rareCommand(): RareCommandContext {
        let localContext = new RareCommandContext(this.context, this.state);
        this.enterRule(localContext, 70, OpenSearchPPLParser.RULE_rareCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 681;
            this.match(OpenSearchPPLParser.RARE);
            this.state = 683;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 48, this.context) ) {
            case 1:
                {
                this.state = 682;
                localContext._number_ = this.integerLiteral();
                }
                break;
            }
            this.state = 688;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 49, this.context) ) {
            case 1:
                {
                this.state = 685;
                this.match(OpenSearchPPLParser.COUNTFIELD);
                this.state = 686;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 687;
                localContext._countfield = this.stringLiteral();
                }
                break;
            }
            this.state = 693;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 50, this.context) ) {
            case 1:
                {
                this.state = 690;
                this.match(OpenSearchPPLParser.SHOWCOUNT);
                this.state = 691;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 692;
                localContext._showcount = this.booleanLiteral();
                }
                break;
            }
            this.state = 695;
            this.fieldList();
            this.state = 697;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 57) {
                {
                this.state = 696;
                this.byClause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public grokCommand(): GrokCommandContext {
        let localContext = new GrokCommandContext(this.context, this.state);
        this.enterRule(localContext, 72, OpenSearchPPLParser.RULE_grokCommand);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 699;
            this.match(OpenSearchPPLParser.GROK);
            {
            this.state = 700;
            localContext._source_field = this.expression(0);
            }
            {
            this.state = 701;
            localContext._pattern = this.stringLiteral();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parseCommand(): ParseCommandContext {
        let localContext = new ParseCommandContext(this.context, this.state);
        this.enterRule(localContext, 74, OpenSearchPPLParser.RULE_parseCommand);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 703;
            this.match(OpenSearchPPLParser.PARSE);
            {
            this.state = 704;
            localContext._source_field = this.expression(0);
            }
            {
            this.state = 705;
            localContext._pattern = this.stringLiteral();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public spathCommand(): SpathCommandContext {
        let localContext = new SpathCommandContext(this.context, this.state);
        this.enterRule(localContext, 76, OpenSearchPPLParser.RULE_spathCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 707;
            this.match(OpenSearchPPLParser.SPATH);
            this.state = 711;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4292870140) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4244590487) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4293935055) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 2153775103) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 4051698687) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 4294901759) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 4294967295) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 4294967295) !== 0) || ((((_la - 290)) & ~0x1F) === 0 && ((1 << (_la - 290)) & 2684354559) !== 0) || ((((_la - 322)) & ~0x1F) === 0 && ((1 << (_la - 322)) & 4294950911) !== 0) || ((((_la - 354)) & ~0x1F) === 0 && ((1 << (_la - 354)) & 4294967295) !== 0) || ((((_la - 386)) & ~0x1F) === 0 && ((1 << (_la - 386)) & 4294967295) !== 0) || ((((_la - 418)) & ~0x1F) === 0 && ((1 << (_la - 418)) & 536870849) !== 0) || _la === 455) {
                {
                {
                this.state = 708;
                this.spathParameter();
                }
                }
                this.state = 713;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public spathParameter(): SpathParameterContext {
        let localContext = new SpathParameterContext(this.context, this.state);
        this.enterRule(localContext, 78, OpenSearchPPLParser.RULE_spathParameter);
        try {
            this.state = 725;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 54, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 714;
                this.match(OpenSearchPPLParser.INPUT);
                this.state = 715;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 716;
                localContext._input = this.expression(0);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                {
                this.state = 717;
                this.match(OpenSearchPPLParser.OUTPUT);
                this.state = 718;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 719;
                localContext._output = this.expression(0);
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                {
                this.state = 722;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 53, this.context) ) {
                case 1:
                    {
                    this.state = 720;
                    this.match(OpenSearchPPLParser.PATH);
                    this.state = 721;
                    this.match(OpenSearchPPLParser.EQUAL);
                    }
                    break;
                }
                this.state = 724;
                localContext._path = this.indexablePath();
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public indexablePath(): IndexablePathContext {
        let localContext = new IndexablePathContext(this.context, this.state);
        this.enterRule(localContext, 80, OpenSearchPPLParser.RULE_indexablePath);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 727;
            this.pathElement();
            this.state = 732;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 55, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 728;
                    this.match(OpenSearchPPLParser.DOT);
                    this.state = 729;
                    this.pathElement();
                    }
                    }
                }
                this.state = 734;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 55, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pathElement(): PathElementContext {
        let localContext = new PathElementContext(this.context, this.state);
        this.enterRule(localContext, 82, OpenSearchPPLParser.RULE_pathElement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 735;
            this.ident();
            this.state = 737;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 181) {
                {
                this.state = 736;
                this.pathArrayAccess();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pathArrayAccess(): PathArrayAccessContext {
        let localContext = new PathArrayAccessContext(this.context, this.state);
        this.enterRule(localContext, 84, OpenSearchPPLParser.RULE_pathArrayAccess);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 739;
            this.match(OpenSearchPPLParser.LT_CURLY);
            this.state = 741;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 448) {
                {
                this.state = 740;
                this.match(OpenSearchPPLParser.INTEGER_LITERAL);
                }
            }

            this.state = 743;
            this.match(OpenSearchPPLParser.RT_CURLY);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public regexCommand(): RegexCommandContext {
        let localContext = new RegexCommandContext(this.context, this.state);
        this.enterRule(localContext, 86, OpenSearchPPLParser.RULE_regexCommand);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 745;
            this.match(OpenSearchPPLParser.REGEX);
            this.state = 746;
            this.regexExpr();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public regexExpr(): RegexExprContext {
        let localContext = new RegexExprContext(this.context, this.state);
        this.enterRule(localContext, 88, OpenSearchPPLParser.RULE_regexExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 748;
            localContext._field = this.qualifiedName();
            this.state = 749;
            localContext._operator = this.tokenStream.LT(1);
            _la = this.tokenStream.LA(1);
            if(!(_la === 163 || _la === 169)) {
                localContext._operator = this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 750;
            localContext._pattern = this.stringLiteral();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public patternsMethod(): PatternsMethodContext {
        let localContext = new PatternsMethodContext(this.context, this.state);
        this.enterRule(localContext, 90, OpenSearchPPLParser.RULE_patternsMethod);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 752;
            _la = this.tokenStream.LA(1);
            if(!(_la === 22 || _la === 23)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public patternsCommand(): PatternsCommandContext {
        let localContext = new PatternsCommandContext(this.context, this.state);
        this.enterRule(localContext, 92, OpenSearchPPLParser.RULE_patternsCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 754;
            this.match(OpenSearchPPLParser.PATTERNS);
            {
            this.state = 755;
            localContext._source_field = this.expression(0);
            }
            this.state = 757;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 57) {
                {
                this.state = 756;
                this.statsByClause();
                }
            }

            this.state = 762;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 759;
                this.match(OpenSearchPPLParser.METHOD);
                this.state = 760;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 761;
                localContext._method = this.patternMethod();
                }
            }

            this.state = 767;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 200) {
                {
                this.state = 764;
                this.match(OpenSearchPPLParser.MODE);
                this.state = 765;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 766;
                localContext._pattern_mode = this.patternMode();
                }
            }

            this.state = 772;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 42) {
                {
                this.state = 769;
                this.match(OpenSearchPPLParser.MAX_SAMPLE_COUNT);
                this.state = 770;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 771;
                localContext._max_sample_count = this.integerLiteral();
                }
            }

            this.state = 777;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 43) {
                {
                this.state = 774;
                this.match(OpenSearchPPLParser.BUFFER_LIMIT);
                this.state = 775;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 776;
                localContext._buffer_limit = this.integerLiteral();
                }
            }

            this.state = 782;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 27) {
                {
                this.state = 779;
                this.match(OpenSearchPPLParser.NEW_FIELD);
                this.state = 780;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 781;
                localContext._new_field = this.stringLiteral();
                }
            }

            this.state = 787;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 49153) !== 0)) {
                {
                {
                this.state = 784;
                this.patternsParameter();
                }
                }
                this.state = 789;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public patternsParameter(): PatternsParameterContext {
        let localContext = new PatternsParameterContext(this.context, this.state);
        this.enterRule(localContext, 94, OpenSearchPPLParser.RULE_patternsParameter);
        try {
            this.state = 799;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.PATTERN:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 790;
                this.match(OpenSearchPPLParser.PATTERN);
                this.state = 791;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 792;
                localContext._pattern = this.stringLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.VARIABLE_COUNT_THRESHOLD:
                this.enterOuterAlt(localContext, 2);
                {
                {
                this.state = 793;
                this.match(OpenSearchPPLParser.VARIABLE_COUNT_THRESHOLD);
                this.state = 794;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 795;
                localContext._variable_count_threshold = this.integerLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.FREQUENCY_THRESHOLD_PERCENTAGE:
                this.enterOuterAlt(localContext, 3);
                {
                {
                this.state = 796;
                this.match(OpenSearchPPLParser.FREQUENCY_THRESHOLD_PERCENTAGE);
                this.state = 797;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 798;
                localContext._frequency_threshold_percentage = this.decimalLiteral();
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public patternMethod(): PatternMethodContext {
        let localContext = new PatternMethodContext(this.context, this.state);
        this.enterRule(localContext, 96, OpenSearchPPLParser.RULE_patternMethod);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 801;
            _la = this.tokenStream.LA(1);
            if(!(_la === 37 || _la === 38)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public patternMode(): PatternModeContext {
        let localContext = new PatternModeContext(this.context, this.state);
        this.enterRule(localContext, 98, OpenSearchPPLParser.RULE_patternMode);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 803;
            _la = this.tokenStream.LA(1);
            if(!(_la === 44 || _la === 45)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lookupCommand(): LookupCommandContext {
        let localContext = new LookupCommandContext(this.context, this.state);
        this.enterRule(localContext, 100, OpenSearchPPLParser.RULE_lookupCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 805;
            this.match(OpenSearchPPLParser.LOOKUP);
            this.state = 806;
            this.tableSource();
            this.state = 807;
            this.lookupMappingList();
            this.state = 810;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 97 || _la === 347) {
                {
                this.state = 808;
                _la = this.tokenStream.LA(1);
                if(!(_la === 97 || _la === 347)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 809;
                this.outputCandidateList();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lookupMappingList(): LookupMappingListContext {
        let localContext = new LookupMappingListContext(this.context, this.state);
        this.enterRule(localContext, 102, OpenSearchPPLParser.RULE_lookupMappingList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 812;
            this.lookupPair();
            this.state = 817;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 161) {
                {
                {
                this.state = 813;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 814;
                this.lookupPair();
                }
                }
                this.state = 819;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public outputCandidateList(): OutputCandidateListContext {
        let localContext = new OutputCandidateListContext(this.context, this.state);
        this.enterRule(localContext, 104, OpenSearchPPLParser.RULE_outputCandidateList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 820;
            this.lookupPair();
            this.state = 825;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 161) {
                {
                {
                this.state = 821;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 822;
                this.lookupPair();
                }
                }
                this.state = 827;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lookupPair(): LookupPairContext {
        let localContext = new LookupPairContext(this.context, this.state);
        this.enterRule(localContext, 106, OpenSearchPPLParser.RULE_lookupPair);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 828;
            localContext._inputField = this.fieldExpression();
            this.state = 831;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 56) {
                {
                this.state = 829;
                this.match(OpenSearchPPLParser.AS);
                this.state = 830;
                localContext._outputField = this.fieldExpression();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fillnullCommand(): FillnullCommandContext {
        let localContext = new FillnullCommandContext(this.context, this.state);
        this.enterRule(localContext, 108, OpenSearchPPLParser.RULE_fillnullCommand);
        try {
            this.state = 837;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 70, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 833;
                this.match(OpenSearchPPLParser.FILLNULL);
                this.state = 834;
                this.fillNullWith();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 835;
                this.match(OpenSearchPPLParser.FILLNULL);
                this.state = 836;
                this.fillNullUsing();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fillNullWith(): FillNullWithContext {
        let localContext = new FillNullWithContext(this.context, this.state);
        this.enterRule(localContext, 110, OpenSearchPPLParser.RULE_fillNullWith);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 839;
            this.match(OpenSearchPPLParser.WITH);
            this.state = 840;
            localContext._replacement = this.valueExpression(0);
            this.state = 843;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 107) {
                {
                this.state = 841;
                this.match(OpenSearchPPLParser.IN);
                this.state = 842;
                this.fieldList();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fillNullUsing(): FillNullUsingContext {
        let localContext = new FillNullUsingContext(this.context, this.state);
        this.enterRule(localContext, 112, OpenSearchPPLParser.RULE_fillNullUsing);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 845;
            this.match(OpenSearchPPLParser.USING);
            this.state = 846;
            this.replacementPair();
            this.state = 851;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 161) {
                {
                {
                this.state = 847;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 848;
                this.replacementPair();
                }
                }
                this.state = 853;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public replacementPair(): ReplacementPairContext {
        let localContext = new ReplacementPairContext(this.context, this.state);
        this.enterRule(localContext, 114, OpenSearchPPLParser.RULE_replacementPair);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 854;
            this.fieldExpression();
            this.state = 855;
            this.match(OpenSearchPPLParser.EQUAL);
            this.state = 856;
            localContext._replacement = this.valueExpression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public trendlineCommand(): TrendlineCommandContext {
        let localContext = new TrendlineCommandContext(this.context, this.state);
        this.enterRule(localContext, 116, OpenSearchPPLParser.RULE_trendlineCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 858;
            this.match(OpenSearchPPLParser.TRENDLINE);
            this.state = 861;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 14) {
                {
                this.state = 859;
                this.match(OpenSearchPPLParser.SORT);
                this.state = 860;
                this.sortField();
                }
            }

            this.state = 863;
            this.trendlineClause();
            this.state = 867;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 75 || _la === 76) {
                {
                {
                this.state = 864;
                this.trendlineClause();
                }
                }
                this.state = 869;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public trendlineClause(): TrendlineClauseContext {
        let localContext = new TrendlineClauseContext(this.context, this.state);
        this.enterRule(localContext, 118, OpenSearchPPLParser.RULE_trendlineClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 870;
            this.trendlineType();
            this.state = 871;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 872;
            localContext._numberOfDataPoints = this.integerLiteral();
            this.state = 873;
            this.match(OpenSearchPPLParser.COMMA);
            this.state = 874;
            localContext._field = this.fieldExpression();
            this.state = 875;
            this.match(OpenSearchPPLParser.RT_PRTHS);
            this.state = 878;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 56) {
                {
                this.state = 876;
                this.match(OpenSearchPPLParser.AS);
                this.state = 877;
                localContext._alias = this.qualifiedName();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public trendlineType(): TrendlineTypeContext {
        let localContext = new TrendlineTypeContext(this.context, this.state);
        this.enterRule(localContext, 120, OpenSearchPPLParser.RULE_trendlineType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 880;
            _la = this.tokenStream.LA(1);
            if(!(_la === 75 || _la === 76)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expandCommand(): ExpandCommandContext {
        let localContext = new ExpandCommandContext(this.context, this.state);
        this.enterRule(localContext, 122, OpenSearchPPLParser.RULE_expandCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 882;
            this.match(OpenSearchPPLParser.EXPAND);
            this.state = 883;
            this.fieldExpression();
            this.state = 886;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 56) {
                {
                this.state = 884;
                this.match(OpenSearchPPLParser.AS);
                this.state = 885;
                localContext._alias = this.qualifiedName();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public flattenCommand(): FlattenCommandContext {
        let localContext = new FlattenCommandContext(this.context, this.state);
        this.enterRule(localContext, 124, OpenSearchPPLParser.RULE_flattenCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 888;
            this.match(OpenSearchPPLParser.FLATTEN);
            this.state = 889;
            this.fieldExpression();
            this.state = 892;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 56) {
                {
                this.state = 890;
                this.match(OpenSearchPPLParser.AS);
                this.state = 891;
                localContext._aliases = this.identifierSeq();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public appendcolCommand(): AppendcolCommandContext {
        let localContext = new AppendcolCommandContext(this.context, this.state);
        this.enterRule(localContext, 126, OpenSearchPPLParser.RULE_appendcolCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 894;
            this.match(OpenSearchPPLParser.APPENDCOL);
            this.state = 898;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 71) {
                {
                this.state = 895;
                this.match(OpenSearchPPLParser.OVERRIDE);
                this.state = 896;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 897;
                localContext._override = this.booleanLiteral();
                }
            }

            this.state = 900;
            this.match(OpenSearchPPLParser.LT_SQR_PRTHS);
            this.state = 901;
            this.commands();
            this.state = 906;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 160) {
                {
                {
                this.state = 902;
                this.match(OpenSearchPPLParser.PIPE);
                this.state = 903;
                this.commands();
                }
                }
                this.state = 908;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 909;
            this.match(OpenSearchPPLParser.RT_SQR_PRTHS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public appendCommand(): AppendCommandContext {
        let localContext = new AppendCommandContext(this.context, this.state);
        this.enterRule(localContext, 128, OpenSearchPPLParser.RULE_appendCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 911;
            this.match(OpenSearchPPLParser.APPEND);
            this.state = 912;
            this.match(OpenSearchPPLParser.LT_SQR_PRTHS);
            this.state = 914;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4292870140) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4244590487) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294737871) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 2153775103) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 4051862527) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 4294901759) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 4294967295) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 4294967295) !== 0) || ((((_la - 290)) & ~0x1F) === 0 && ((1 << (_la - 290)) & 4294967295) !== 0) || ((((_la - 322)) & ~0x1F) === 0 && ((1 << (_la - 322)) & 4294950911) !== 0) || ((((_la - 354)) & ~0x1F) === 0 && ((1 << (_la - 354)) & 4294967295) !== 0) || ((((_la - 386)) & ~0x1F) === 0 && ((1 << (_la - 386)) & 4294967295) !== 0) || ((((_la - 418)) & ~0x1F) === 0 && ((1 << (_la - 418)) & 3758096321) !== 0) || ((((_la - 450)) & ~0x1F) === 0 && ((1 << (_la - 450)) & 59) !== 0)) {
                {
                this.state = 913;
                this.searchCommand();
                }
            }

            this.state = 920;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 160) {
                {
                {
                this.state = 916;
                this.match(OpenSearchPPLParser.PIPE);
                this.state = 917;
                this.commands();
                }
                }
                this.state = 922;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 923;
            this.match(OpenSearchPPLParser.RT_SQR_PRTHS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public kmeansCommand(): KmeansCommandContext {
        let localContext = new KmeansCommandContext(this.context, this.state);
        this.enterRule(localContext, 130, OpenSearchPPLParser.RULE_kmeansCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 925;
            this.match(OpenSearchPPLParser.KMEANS);
            this.state = 929;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 7) !== 0)) {
                {
                {
                this.state = 926;
                this.kmeansParameter();
                }
                }
                this.state = 931;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public kmeansParameter(): KmeansParameterContext {
        let localContext = new KmeansParameterContext(this.context, this.state);
        this.enterRule(localContext, 132, OpenSearchPPLParser.RULE_kmeansParameter);
        try {
            this.state = 941;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.CENTROIDS:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 932;
                this.match(OpenSearchPPLParser.CENTROIDS);
                this.state = 933;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 934;
                localContext._centroids = this.integerLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.ITERATIONS:
                this.enterOuterAlt(localContext, 2);
                {
                {
                this.state = 935;
                this.match(OpenSearchPPLParser.ITERATIONS);
                this.state = 936;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 937;
                localContext._iterations = this.integerLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.DISTANCE_TYPE:
                this.enterOuterAlt(localContext, 3);
                {
                {
                this.state = 938;
                this.match(OpenSearchPPLParser.DISTANCE_TYPE);
                this.state = 939;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 940;
                localContext._distance_type = this.stringLiteral();
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public adCommand(): AdCommandContext {
        let localContext = new AdCommandContext(this.context, this.state);
        this.enterRule(localContext, 134, OpenSearchPPLParser.RULE_adCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 943;
            this.match(OpenSearchPPLParser.AD);
            this.state = 947;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 2047) !== 0) || _la === 290) {
                {
                {
                this.state = 944;
                this.adParameter();
                }
                }
                this.state = 949;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public adParameter(): AdParameterContext {
        let localContext = new AdParameterContext(this.context, this.state);
        this.enterRule(localContext, 136, OpenSearchPPLParser.RULE_adParameter);
        try {
            this.state = 986;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.NUMBER_OF_TREES:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 950;
                this.match(OpenSearchPPLParser.NUMBER_OF_TREES);
                this.state = 951;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 952;
                localContext._number_of_trees = this.integerLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.SHINGLE_SIZE:
                this.enterOuterAlt(localContext, 2);
                {
                {
                this.state = 953;
                this.match(OpenSearchPPLParser.SHINGLE_SIZE);
                this.state = 954;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 955;
                localContext._shingle_size = this.integerLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.SAMPLE_SIZE:
                this.enterOuterAlt(localContext, 3);
                {
                {
                this.state = 956;
                this.match(OpenSearchPPLParser.SAMPLE_SIZE);
                this.state = 957;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 958;
                localContext._sample_size = this.integerLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.OUTPUT_AFTER:
                this.enterOuterAlt(localContext, 4);
                {
                {
                this.state = 959;
                this.match(OpenSearchPPLParser.OUTPUT_AFTER);
                this.state = 960;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 961;
                localContext._output_after = this.integerLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.TIME_DECAY:
                this.enterOuterAlt(localContext, 5);
                {
                {
                this.state = 962;
                this.match(OpenSearchPPLParser.TIME_DECAY);
                this.state = 963;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 964;
                localContext._time_decay = this.decimalLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.ANOMALY_RATE:
                this.enterOuterAlt(localContext, 6);
                {
                {
                this.state = 965;
                this.match(OpenSearchPPLParser.ANOMALY_RATE);
                this.state = 966;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 967;
                localContext._anomaly_rate = this.decimalLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.CATEGORY_FIELD:
                this.enterOuterAlt(localContext, 7);
                {
                {
                this.state = 968;
                this.match(OpenSearchPPLParser.CATEGORY_FIELD);
                this.state = 969;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 970;
                localContext._category_field = this.stringLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.TIME_FIELD:
                this.enterOuterAlt(localContext, 8);
                {
                {
                this.state = 971;
                this.match(OpenSearchPPLParser.TIME_FIELD);
                this.state = 972;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 973;
                localContext._time_field = this.stringLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.DATE_FORMAT:
                this.enterOuterAlt(localContext, 9);
                {
                {
                this.state = 974;
                this.match(OpenSearchPPLParser.DATE_FORMAT);
                this.state = 975;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 976;
                localContext._date_format = this.stringLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.TIME_ZONE:
                this.enterOuterAlt(localContext, 10);
                {
                {
                this.state = 977;
                this.match(OpenSearchPPLParser.TIME_ZONE);
                this.state = 978;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 979;
                localContext._time_zone = this.stringLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.TRAINING_DATA_SIZE:
                this.enterOuterAlt(localContext, 11);
                {
                {
                this.state = 980;
                this.match(OpenSearchPPLParser.TRAINING_DATA_SIZE);
                this.state = 981;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 982;
                localContext._training_data_size = this.integerLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.ANOMALY_SCORE_THRESHOLD:
                this.enterOuterAlt(localContext, 12);
                {
                {
                this.state = 983;
                this.match(OpenSearchPPLParser.ANOMALY_SCORE_THRESHOLD);
                this.state = 984;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 985;
                localContext._anomaly_score_threshold = this.decimalLiteral();
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mlCommand(): MlCommandContext {
        let localContext = new MlCommandContext(this.context, this.state);
        this.enterRule(localContext, 138, OpenSearchPPLParser.RULE_mlCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 988;
            this.match(OpenSearchPPLParser.ML);
            this.state = 992;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4292870140) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4244590487) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4293935055) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 2153775103) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 4051698687) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 4294901759) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 4294967295) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 4294967295) !== 0) || ((((_la - 290)) & ~0x1F) === 0 && ((1 << (_la - 290)) & 2684354559) !== 0) || ((((_la - 322)) & ~0x1F) === 0 && ((1 << (_la - 322)) & 4294950911) !== 0) || ((((_la - 354)) & ~0x1F) === 0 && ((1 << (_la - 354)) & 4294967295) !== 0) || ((((_la - 386)) & ~0x1F) === 0 && ((1 << (_la - 386)) & 4294967295) !== 0) || ((((_la - 418)) & ~0x1F) === 0 && ((1 << (_la - 418)) & 536870849) !== 0) || _la === 455) {
                {
                {
                this.state = 989;
                this.mlArg();
                }
                }
                this.state = 994;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mlArg(): MlArgContext {
        let localContext = new MlArgContext(this.context, this.state);
        this.enterRule(localContext, 140, OpenSearchPPLParser.RULE_mlArg);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 995;
            localContext._argName = this.ident();
            this.state = 996;
            this.match(OpenSearchPPLParser.EQUAL);
            this.state = 997;
            localContext._argValue = this.literalValue();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fromClause(): FromClauseContext {
        let localContext = new FromClauseContext(this.context, this.state);
        this.enterRule(localContext, 142, OpenSearchPPLParser.RULE_fromClause);
        try {
            this.state = 1011;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 87, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 999;
                this.match(OpenSearchPPLParser.SOURCE);
                this.state = 1000;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1001;
                this.tableOrSubqueryClause();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1002;
                this.match(OpenSearchPPLParser.INDEX);
                this.state = 1003;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1004;
                this.tableOrSubqueryClause();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1005;
                this.match(OpenSearchPPLParser.SOURCE);
                this.state = 1006;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1007;
                this.tableFunction();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1008;
                this.match(OpenSearchPPLParser.INDEX);
                this.state = 1009;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1010;
                this.tableFunction();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableOrSubqueryClause(): TableOrSubqueryClauseContext {
        let localContext = new TableOrSubqueryClauseContext(this.context, this.state);
        this.enterRule(localContext, 144, OpenSearchPPLParser.RULE_tableOrSubqueryClause);
        let _la: number;
        try {
            this.state = 1021;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.LT_SQR_PRTHS:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1013;
                this.match(OpenSearchPPLParser.LT_SQR_PRTHS);
                this.state = 1014;
                this.subSearch();
                this.state = 1015;
                this.match(OpenSearchPPLParser.RT_SQR_PRTHS);
                this.state = 1018;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 56) {
                    {
                    this.state = 1016;
                    this.match(OpenSearchPPLParser.AS);
                    this.state = 1017;
                    localContext._alias = this.qualifiedName();
                    }
                }

                }
                break;
            case OpenSearchPPLParser.SEARCH:
            case OpenSearchPPLParser.DESCRIBE:
            case OpenSearchPPLParser.SHOW:
            case OpenSearchPPLParser.EXPLAIN:
            case OpenSearchPPLParser.FROM:
            case OpenSearchPPLParser.WHERE:
            case OpenSearchPPLParser.FIELDS:
            case OpenSearchPPLParser.TABLE:
            case OpenSearchPPLParser.RENAME:
            case OpenSearchPPLParser.STATS:
            case OpenSearchPPLParser.EVENTSTATS:
            case OpenSearchPPLParser.DEDUP:
            case OpenSearchPPLParser.SORT:
            case OpenSearchPPLParser.EVAL:
            case OpenSearchPPLParser.HEAD:
            case OpenSearchPPLParser.BIN:
            case OpenSearchPPLParser.TOP:
            case OpenSearchPPLParser.RARE:
            case OpenSearchPPLParser.PARSE:
            case OpenSearchPPLParser.REGEX:
            case OpenSearchPPLParser.PUNCT:
            case OpenSearchPPLParser.GROK:
            case OpenSearchPPLParser.PATTERN:
            case OpenSearchPPLParser.PATTERNS:
            case OpenSearchPPLParser.NEW_FIELD:
            case OpenSearchPPLParser.KMEANS:
            case OpenSearchPPLParser.AD:
            case OpenSearchPPLParser.ML:
            case OpenSearchPPLParser.FILLNULL:
            case OpenSearchPPLParser.FLATTEN:
            case OpenSearchPPLParser.TRENDLINE:
            case OpenSearchPPLParser.TIMECHART:
            case OpenSearchPPLParser.EXPAND:
            case OpenSearchPPLParser.VARIABLE_COUNT_THRESHOLD:
            case OpenSearchPPLParser.FREQUENCY_THRESHOLD_PERCENTAGE:
            case OpenSearchPPLParser.METHOD:
            case OpenSearchPPLParser.MAX_SAMPLE_COUNT:
            case OpenSearchPPLParser.BUFFER_LIMIT:
            case OpenSearchPPLParser.JOIN:
            case OpenSearchPPLParser.INNER:
            case OpenSearchPPLParser.OUTER:
            case OpenSearchPPLParser.FULL:
            case OpenSearchPPLParser.SEMI:
            case OpenSearchPPLParser.ANTI:
            case OpenSearchPPLParser.CROSS:
            case OpenSearchPPLParser.LEFT_HINT:
            case OpenSearchPPLParser.RIGHT_HINT:
            case OpenSearchPPLParser.SOURCE:
            case OpenSearchPPLParser.INDEX:
            case OpenSearchPPLParser.A:
            case OpenSearchPPLParser.ASC:
            case OpenSearchPPLParser.D:
            case OpenSearchPPLParser.DESC:
            case OpenSearchPPLParser.DATASOURCES:
            case OpenSearchPPLParser.USING:
            case OpenSearchPPLParser.WITH:
            case OpenSearchPPLParser.SIMPLE:
            case OpenSearchPPLParser.STANDARD:
            case OpenSearchPPLParser.COST:
            case OpenSearchPPLParser.EXTENDED:
            case OpenSearchPPLParser.OVERRIDE:
            case OpenSearchPPLParser.AUTO:
            case OpenSearchPPLParser.STR:
            case OpenSearchPPLParser.NUM:
            case OpenSearchPPLParser.SMA:
            case OpenSearchPPLParser.WMA:
            case OpenSearchPPLParser.KEEPEMPTY:
            case OpenSearchPPLParser.CONSECUTIVE:
            case OpenSearchPPLParser.DEDUP_SPLITVALUES:
            case OpenSearchPPLParser.PARTITIONS:
            case OpenSearchPPLParser.ALLNUM:
            case OpenSearchPPLParser.DELIM:
            case OpenSearchPPLParser.CENTROIDS:
            case OpenSearchPPLParser.ITERATIONS:
            case OpenSearchPPLParser.DISTANCE_TYPE:
            case OpenSearchPPLParser.NUMBER_OF_TREES:
            case OpenSearchPPLParser.SHINGLE_SIZE:
            case OpenSearchPPLParser.SAMPLE_SIZE:
            case OpenSearchPPLParser.OUTPUT_AFTER:
            case OpenSearchPPLParser.TIME_DECAY:
            case OpenSearchPPLParser.ANOMALY_RATE:
            case OpenSearchPPLParser.CATEGORY_FIELD:
            case OpenSearchPPLParser.TIME_FIELD:
            case OpenSearchPPLParser.TIME_ZONE:
            case OpenSearchPPLParser.TRAINING_DATA_SIZE:
            case OpenSearchPPLParser.ANOMALY_SCORE_THRESHOLD:
            case OpenSearchPPLParser.APPEND:
            case OpenSearchPPLParser.COUNTFIELD:
            case OpenSearchPPLParser.SHOWCOUNT:
            case OpenSearchPPLParser.INPUT:
            case OpenSearchPPLParser.OUTPUT:
            case OpenSearchPPLParser.PATH:
            case OpenSearchPPLParser.CASE:
            case OpenSearchPPLParser.ELSE:
            case OpenSearchPPLParser.IN:
            case OpenSearchPPLParser.EXISTS:
            case OpenSearchPPLParser.GEOIP:
            case OpenSearchPPLParser.REGEXP:
            case OpenSearchPPLParser.REGEX_MATCH:
            case OpenSearchPPLParser.CONVERT_TZ:
            case OpenSearchPPLParser.DATETIME:
            case OpenSearchPPLParser.DAY:
            case OpenSearchPPLParser.DAY_HOUR:
            case OpenSearchPPLParser.DAY_MICROSECOND:
            case OpenSearchPPLParser.DAY_MINUTE:
            case OpenSearchPPLParser.DAY_OF_YEAR:
            case OpenSearchPPLParser.DAY_SECOND:
            case OpenSearchPPLParser.HOUR:
            case OpenSearchPPLParser.HOUR_MICROSECOND:
            case OpenSearchPPLParser.HOUR_MINUTE:
            case OpenSearchPPLParser.HOUR_OF_DAY:
            case OpenSearchPPLParser.HOUR_SECOND:
            case OpenSearchPPLParser.INTERVAL:
            case OpenSearchPPLParser.MICROSECOND:
            case OpenSearchPPLParser.MILLISECOND:
            case OpenSearchPPLParser.MINUTE:
            case OpenSearchPPLParser.MINUTE_MICROSECOND:
            case OpenSearchPPLParser.MINUTE_OF_DAY:
            case OpenSearchPPLParser.MINUTE_OF_HOUR:
            case OpenSearchPPLParser.MINUTE_SECOND:
            case OpenSearchPPLParser.MONTH:
            case OpenSearchPPLParser.MONTH_OF_YEAR:
            case OpenSearchPPLParser.QUARTER:
            case OpenSearchPPLParser.SECOND:
            case OpenSearchPPLParser.SECOND_MICROSECOND:
            case OpenSearchPPLParser.SECOND_OF_MINUTE:
            case OpenSearchPPLParser.WEEK:
            case OpenSearchPPLParser.WEEK_OF_YEAR:
            case OpenSearchPPLParser.YEAR:
            case OpenSearchPPLParser.YEAR_MONTH:
            case OpenSearchPPLParser.LOOKUP:
            case OpenSearchPPLParser.IP:
            case OpenSearchPPLParser.DOT:
            case OpenSearchPPLParser.EQUAL:
            case OpenSearchPPLParser.DOUBLE_EQUAL:
            case OpenSearchPPLParser.GREATER:
            case OpenSearchPPLParser.LESS:
            case OpenSearchPPLParser.NOT_GREATER:
            case OpenSearchPPLParser.NOT_LESS:
            case OpenSearchPPLParser.NOT_EQUAL:
            case OpenSearchPPLParser.PLUS:
            case OpenSearchPPLParser.MINUS:
            case OpenSearchPPLParser.BACKTICK:
            case OpenSearchPPLParser.ARROW:
            case OpenSearchPPLParser.AVG:
            case OpenSearchPPLParser.COUNT:
            case OpenSearchPPLParser.DISTINCT_COUNT:
            case OpenSearchPPLParser.DISTINCT_COUNT_APPROX:
            case OpenSearchPPLParser.ESTDC:
            case OpenSearchPPLParser.ESTDC_ERROR:
            case OpenSearchPPLParser.MAX:
            case OpenSearchPPLParser.MEAN:
            case OpenSearchPPLParser.MEDIAN:
            case OpenSearchPPLParser.MIN:
            case OpenSearchPPLParser.MODE:
            case OpenSearchPPLParser.RANGE:
            case OpenSearchPPLParser.STDEV:
            case OpenSearchPPLParser.STDEVP:
            case OpenSearchPPLParser.SUM:
            case OpenSearchPPLParser.SUMSQ:
            case OpenSearchPPLParser.VAR_SAMP:
            case OpenSearchPPLParser.VAR_POP:
            case OpenSearchPPLParser.STDDEV_SAMP:
            case OpenSearchPPLParser.STDDEV_POP:
            case OpenSearchPPLParser.PERCENTILE:
            case OpenSearchPPLParser.PERCENTILE_APPROX:
            case OpenSearchPPLParser.EARLIEST:
            case OpenSearchPPLParser.LATEST:
            case OpenSearchPPLParser.TAKE:
            case OpenSearchPPLParser.LIST:
            case OpenSearchPPLParser.VALUES:
            case OpenSearchPPLParser.PER_DAY:
            case OpenSearchPPLParser.PER_HOUR:
            case OpenSearchPPLParser.PER_MINUTE:
            case OpenSearchPPLParser.PER_SECOND:
            case OpenSearchPPLParser.RATE:
            case OpenSearchPPLParser.SPARKLINE:
            case OpenSearchPPLParser.C:
            case OpenSearchPPLParser.DC:
            case OpenSearchPPLParser.ROW_NUMBER:
            case OpenSearchPPLParser.RANK:
            case OpenSearchPPLParser.DENSE_RANK:
            case OpenSearchPPLParser.PERCENT_RANK:
            case OpenSearchPPLParser.CUME_DIST:
            case OpenSearchPPLParser.FIRST:
            case OpenSearchPPLParser.LAST:
            case OpenSearchPPLParser.NTH:
            case OpenSearchPPLParser.NTILE:
            case OpenSearchPPLParser.PLUS_FUCTION:
            case OpenSearchPPLParser.MINUS_FUCTION:
            case OpenSearchPPLParser.STAR_FUNCTION:
            case OpenSearchPPLParser.DIVIDE_FUNCTION:
            case OpenSearchPPLParser.ABS:
            case OpenSearchPPLParser.CBRT:
            case OpenSearchPPLParser.CEIL:
            case OpenSearchPPLParser.CEILING:
            case OpenSearchPPLParser.CONV:
            case OpenSearchPPLParser.CRC32:
            case OpenSearchPPLParser.E:
            case OpenSearchPPLParser.EXP:
            case OpenSearchPPLParser.EXPM1:
            case OpenSearchPPLParser.FLOOR:
            case OpenSearchPPLParser.LN:
            case OpenSearchPPLParser.LOG:
            case OpenSearchPPLParser.LOG_WITH_BASE:
            case OpenSearchPPLParser.MOD:
            case OpenSearchPPLParser.MODULUS:
            case OpenSearchPPLParser.PI:
            case OpenSearchPPLParser.POSITION:
            case OpenSearchPPLParser.POW:
            case OpenSearchPPLParser.POWER:
            case OpenSearchPPLParser.RAND:
            case OpenSearchPPLParser.ROUND:
            case OpenSearchPPLParser.SIGN:
            case OpenSearchPPLParser.SQRT:
            case OpenSearchPPLParser.TRUNCATE:
            case OpenSearchPPLParser.RINT:
            case OpenSearchPPLParser.SIGNUM:
            case OpenSearchPPLParser.ACOS:
            case OpenSearchPPLParser.ASIN:
            case OpenSearchPPLParser.ATAN:
            case OpenSearchPPLParser.ATAN2:
            case OpenSearchPPLParser.COS:
            case OpenSearchPPLParser.COSH:
            case OpenSearchPPLParser.COT:
            case OpenSearchPPLParser.DEGREES:
            case OpenSearchPPLParser.RADIANS:
            case OpenSearchPPLParser.SIN:
            case OpenSearchPPLParser.SINH:
            case OpenSearchPPLParser.TAN:
            case OpenSearchPPLParser.MD5:
            case OpenSearchPPLParser.SHA1:
            case OpenSearchPPLParser.SHA2:
            case OpenSearchPPLParser.ADDDATE:
            case OpenSearchPPLParser.ADDTIME:
            case OpenSearchPPLParser.CURDATE:
            case OpenSearchPPLParser.CURRENT_DATE:
            case OpenSearchPPLParser.CURRENT_TIME:
            case OpenSearchPPLParser.CURRENT_TIMESTAMP:
            case OpenSearchPPLParser.CURTIME:
            case OpenSearchPPLParser.DATE:
            case OpenSearchPPLParser.DATEDIFF:
            case OpenSearchPPLParser.DATE_ADD:
            case OpenSearchPPLParser.DATE_FORMAT:
            case OpenSearchPPLParser.DATE_SUB:
            case OpenSearchPPLParser.DAYNAME:
            case OpenSearchPPLParser.DAYOFMONTH:
            case OpenSearchPPLParser.DAYOFWEEK:
            case OpenSearchPPLParser.DAYOFYEAR:
            case OpenSearchPPLParser.DAY_OF_MONTH:
            case OpenSearchPPLParser.DAY_OF_WEEK:
            case OpenSearchPPLParser.EXTRACT:
            case OpenSearchPPLParser.FROM_DAYS:
            case OpenSearchPPLParser.FROM_UNIXTIME:
            case OpenSearchPPLParser.GET_FORMAT:
            case OpenSearchPPLParser.LAST_DAY:
            case OpenSearchPPLParser.LOCALTIME:
            case OpenSearchPPLParser.LOCALTIMESTAMP:
            case OpenSearchPPLParser.MAKEDATE:
            case OpenSearchPPLParser.MAKETIME:
            case OpenSearchPPLParser.MONTHNAME:
            case OpenSearchPPLParser.NOW:
            case OpenSearchPPLParser.PERIOD_ADD:
            case OpenSearchPPLParser.PERIOD_DIFF:
            case OpenSearchPPLParser.SEC_TO_TIME:
            case OpenSearchPPLParser.STR_TO_DATE:
            case OpenSearchPPLParser.SUBDATE:
            case OpenSearchPPLParser.SUBTIME:
            case OpenSearchPPLParser.SYSDATE:
            case OpenSearchPPLParser.TIME:
            case OpenSearchPPLParser.TIMEDIFF:
            case OpenSearchPPLParser.TIMESTAMP:
            case OpenSearchPPLParser.TIME_FORMAT:
            case OpenSearchPPLParser.TIME_TO_SEC:
            case OpenSearchPPLParser.TO_DAYS:
            case OpenSearchPPLParser.TO_SECONDS:
            case OpenSearchPPLParser.UNIX_TIMESTAMP:
            case OpenSearchPPLParser.UTC_DATE:
            case OpenSearchPPLParser.UTC_TIME:
            case OpenSearchPPLParser.UTC_TIMESTAMP:
            case OpenSearchPPLParser.WEEKDAY:
            case OpenSearchPPLParser.YEARWEEK:
            case OpenSearchPPLParser.SUBSTR:
            case OpenSearchPPLParser.SUBSTRING:
            case OpenSearchPPLParser.LTRIM:
            case OpenSearchPPLParser.RTRIM:
            case OpenSearchPPLParser.TRIM:
            case OpenSearchPPLParser.LOWER:
            case OpenSearchPPLParser.UPPER:
            case OpenSearchPPLParser.CONCAT:
            case OpenSearchPPLParser.CONCAT_WS:
            case OpenSearchPPLParser.LENGTH:
            case OpenSearchPPLParser.STRCMP:
            case OpenSearchPPLParser.RIGHT:
            case OpenSearchPPLParser.LEFT:
            case OpenSearchPPLParser.ASCII:
            case OpenSearchPPLParser.LOCATE:
            case OpenSearchPPLParser.REPLACE:
            case OpenSearchPPLParser.REVERSE:
            case OpenSearchPPLParser.CAST:
            case OpenSearchPPLParser.LIKE:
            case OpenSearchPPLParser.ISNULL:
            case OpenSearchPPLParser.ISNOTNULL:
            case OpenSearchPPLParser.CIDRMATCH:
            case OpenSearchPPLParser.BETWEEN:
            case OpenSearchPPLParser.ISPRESENT:
            case OpenSearchPPLParser.ISEMPTY:
            case OpenSearchPPLParser.ISBLANK:
            case OpenSearchPPLParser.ARRAY:
            case OpenSearchPPLParser.ARRAY_LENGTH:
            case OpenSearchPPLParser.FORALL:
            case OpenSearchPPLParser.FILTER:
            case OpenSearchPPLParser.TRANSFORM:
            case OpenSearchPPLParser.REDUCE:
            case OpenSearchPPLParser.JSON_VALID:
            case OpenSearchPPLParser.JSON:
            case OpenSearchPPLParser.JSON_OBJECT:
            case OpenSearchPPLParser.JSON_ARRAY:
            case OpenSearchPPLParser.JSON_ARRAY_LENGTH:
            case OpenSearchPPLParser.JSON_EXTRACT:
            case OpenSearchPPLParser.JSON_KEYS:
            case OpenSearchPPLParser.JSON_SET:
            case OpenSearchPPLParser.JSON_DELETE:
            case OpenSearchPPLParser.JSON_APPEND:
            case OpenSearchPPLParser.JSON_EXTEND:
            case OpenSearchPPLParser.IFNULL:
            case OpenSearchPPLParser.NULLIF:
            case OpenSearchPPLParser.IF:
            case OpenSearchPPLParser.TYPEOF:
            case OpenSearchPPLParser.COALESCE:
            case OpenSearchPPLParser.MATCH:
            case OpenSearchPPLParser.MATCH_PHRASE:
            case OpenSearchPPLParser.MATCH_PHRASE_PREFIX:
            case OpenSearchPPLParser.MATCH_BOOL_PREFIX:
            case OpenSearchPPLParser.SIMPLE_QUERY_STRING:
            case OpenSearchPPLParser.MULTI_MATCH:
            case OpenSearchPPLParser.QUERY_STRING:
            case OpenSearchPPLParser.ALLOW_LEADING_WILDCARD:
            case OpenSearchPPLParser.ANALYZE_WILDCARD:
            case OpenSearchPPLParser.ANALYZER:
            case OpenSearchPPLParser.AUTO_GENERATE_SYNONYMS_PHRASE_QUERY:
            case OpenSearchPPLParser.BOOST:
            case OpenSearchPPLParser.CUTOFF_FREQUENCY:
            case OpenSearchPPLParser.DEFAULT_FIELD:
            case OpenSearchPPLParser.DEFAULT_OPERATOR:
            case OpenSearchPPLParser.ENABLE_POSITION_INCREMENTS:
            case OpenSearchPPLParser.ESCAPE:
            case OpenSearchPPLParser.FLAGS:
            case OpenSearchPPLParser.FUZZY_MAX_EXPANSIONS:
            case OpenSearchPPLParser.FUZZY_PREFIX_LENGTH:
            case OpenSearchPPLParser.FUZZY_TRANSPOSITIONS:
            case OpenSearchPPLParser.FUZZY_REWRITE:
            case OpenSearchPPLParser.FUZZINESS:
            case OpenSearchPPLParser.LENIENT:
            case OpenSearchPPLParser.LOW_FREQ_OPERATOR:
            case OpenSearchPPLParser.MAX_DETERMINIZED_STATES:
            case OpenSearchPPLParser.MAX_EXPANSIONS:
            case OpenSearchPPLParser.MINIMUM_SHOULD_MATCH:
            case OpenSearchPPLParser.OPERATOR:
            case OpenSearchPPLParser.PHRASE_SLOP:
            case OpenSearchPPLParser.PREFIX_LENGTH:
            case OpenSearchPPLParser.QUOTE_ANALYZER:
            case OpenSearchPPLParser.QUOTE_FIELD_SUFFIX:
            case OpenSearchPPLParser.REWRITE:
            case OpenSearchPPLParser.SLOP:
            case OpenSearchPPLParser.TIE_BREAKER:
            case OpenSearchPPLParser.TYPE:
            case OpenSearchPPLParser.ZERO_TERMS_QUERY:
            case OpenSearchPPLParser.SPAN:
            case OpenSearchPPLParser.MS:
            case OpenSearchPPLParser.S:
            case OpenSearchPPLParser.M:
            case OpenSearchPPLParser.H:
            case OpenSearchPPLParser.W:
            case OpenSearchPPLParser.Q:
            case OpenSearchPPLParser.Y:
            case OpenSearchPPLParser.SEC:
            case OpenSearchPPLParser.SECS:
            case OpenSearchPPLParser.SECONDS:
            case OpenSearchPPLParser.MINS:
            case OpenSearchPPLParser.MINUTES:
            case OpenSearchPPLParser.HR:
            case OpenSearchPPLParser.HRS:
            case OpenSearchPPLParser.HOURS:
            case OpenSearchPPLParser.DAYS:
            case OpenSearchPPLParser.MON:
            case OpenSearchPPLParser.MONTHS:
            case OpenSearchPPLParser.US:
            case OpenSearchPPLParser.CS:
            case OpenSearchPPLParser.DS:
            case OpenSearchPPLParser.PERCENTILE_SHORTCUT:
            case OpenSearchPPLParser.ID:
            case OpenSearchPPLParser.CLUSTER:
            case OpenSearchPPLParser.ID_DATE_SUFFIX:
            case OpenSearchPPLParser.BQUOTA_STRING:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1020;
                this.tableSourceClause();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableSourceClause(): TableSourceClauseContext {
        let localContext = new TableSourceClauseContext(this.context, this.state);
        this.enterRule(localContext, 146, OpenSearchPPLParser.RULE_tableSourceClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1023;
            this.tableSource();
            this.state = 1028;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 161) {
                {
                {
                this.state = 1024;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1025;
                this.tableSource();
                }
                }
                this.state = 1030;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1033;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 56) {
                {
                this.state = 1031;
                this.match(OpenSearchPPLParser.AS);
                this.state = 1032;
                localContext._alias = this.qualifiedName();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public joinCommand(): JoinCommandContext {
        let localContext = new JoinCommandContext(this.context, this.state);
        this.enterRule(localContext, 148, OpenSearchPPLParser.RULE_joinCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 1035;
            this.joinType();
            }
            this.state = 1036;
            this.match(OpenSearchPPLParser.JOIN);
            this.state = 1037;
            this.sideAlias();
            this.state = 1039;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 92, this.context) ) {
            case 1:
                {
                this.state = 1038;
                this.joinHintList();
                }
                break;
            }
            this.state = 1042;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 47) {
                {
                this.state = 1041;
                this.joinCriteria();
                }
            }

            this.state = 1044;
            localContext._right = this.tableOrSubqueryClause();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public joinType(): JoinTypeContext {
        let localContext = new JoinTypeContext(this.context, this.state);
        this.enterRule(localContext, 150, OpenSearchPPLParser.RULE_joinType);
        let _la: number;
        try {
            this.state = 1070;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 100, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1047;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 48) {
                    {
                    this.state = 1046;
                    this.match(OpenSearchPPLParser.INNER);
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1049;
                this.match(OpenSearchPPLParser.CROSS);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1050;
                this.match(OpenSearchPPLParser.LEFT);
                this.state = 1052;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 49) {
                    {
                    this.state = 1051;
                    this.match(OpenSearchPPLParser.OUTER);
                    }
                }

                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1054;
                this.match(OpenSearchPPLParser.RIGHT);
                this.state = 1056;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 49) {
                    {
                    this.state = 1055;
                    this.match(OpenSearchPPLParser.OUTER);
                    }
                }

                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1058;
                this.match(OpenSearchPPLParser.FULL);
                this.state = 1060;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 49) {
                    {
                    this.state = 1059;
                    this.match(OpenSearchPPLParser.OUTER);
                    }
                }

                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1063;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 344) {
                    {
                    this.state = 1062;
                    this.match(OpenSearchPPLParser.LEFT);
                    }
                }

                this.state = 1065;
                this.match(OpenSearchPPLParser.SEMI);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1067;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 344) {
                    {
                    this.state = 1066;
                    this.match(OpenSearchPPLParser.LEFT);
                    }
                }

                this.state = 1069;
                this.match(OpenSearchPPLParser.ANTI);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sideAlias(): SideAliasContext {
        let localContext = new SideAliasContext(this.context, this.state);
        this.enterRule(localContext, 152, OpenSearchPPLParser.RULE_sideAlias);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1075;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 101, this.context) ) {
            case 1:
                {
                this.state = 1072;
                this.match(OpenSearchPPLParser.LEFT);
                this.state = 1073;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1074;
                localContext._leftAlias = this.qualifiedName();
                }
                break;
            }
            this.state = 1078;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 161) {
                {
                this.state = 1077;
                this.match(OpenSearchPPLParser.COMMA);
                }
            }

            this.state = 1083;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 103, this.context) ) {
            case 1:
                {
                this.state = 1080;
                this.match(OpenSearchPPLParser.RIGHT);
                this.state = 1081;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1082;
                localContext._rightAlias = this.qualifiedName();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public joinCriteria(): JoinCriteriaContext {
        let localContext = new JoinCriteriaContext(this.context, this.state);
        this.enterRule(localContext, 154, OpenSearchPPLParser.RULE_joinCriteria);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1085;
            this.match(OpenSearchPPLParser.ON);
            this.state = 1086;
            this.logicalExpression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public joinHintList(): JoinHintListContext {
        let localContext = new JoinHintListContext(this.context, this.state);
        this.enterRule(localContext, 156, OpenSearchPPLParser.RULE_joinHintList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1088;
            this.hintPair();
            this.state = 1095;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 105, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1090;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 161) {
                        {
                        this.state = 1089;
                        this.match(OpenSearchPPLParser.COMMA);
                        }
                    }

                    this.state = 1092;
                    this.hintPair();
                    }
                    }
                }
                this.state = 1097;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 105, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public hintPair(): HintPairContext {
        let localContext = new HintPairContext(this.context, this.state);
        this.enterRule(localContext, 158, OpenSearchPPLParser.RULE_hintPair);
        try {
            this.state = 1108;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.LEFT_HINT:
                localContext = new LeftHintContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1098;
                (localContext as LeftHintContext)._leftHintKey = this.match(OpenSearchPPLParser.LEFT_HINT);
                this.state = 1099;
                this.match(OpenSearchPPLParser.DOT);
                this.state = 1100;
                this.match(OpenSearchPPLParser.ID);
                this.state = 1101;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1102;
                (localContext as LeftHintContext)._leftHintValue = this.ident();
                }
                break;
            case OpenSearchPPLParser.RIGHT_HINT:
                localContext = new RightHintContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1103;
                (localContext as RightHintContext)._rightHintKey = this.match(OpenSearchPPLParser.RIGHT_HINT);
                this.state = 1104;
                this.match(OpenSearchPPLParser.DOT);
                this.state = 1105;
                this.match(OpenSearchPPLParser.ID);
                this.state = 1106;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1107;
                (localContext as RightHintContext)._rightHintValue = this.ident();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public renameClasue(): RenameClasueContext {
        let localContext = new RenameClasueContext(this.context, this.state);
        this.enterRule(localContext, 160, OpenSearchPPLParser.RULE_renameClasue);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1110;
            localContext._orignalField = this.wcFieldExpression();
            this.state = 1111;
            this.match(OpenSearchPPLParser.AS);
            this.state = 1112;
            localContext._renamedField = this.wcFieldExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public byClause(): ByClauseContext {
        let localContext = new ByClauseContext(this.context, this.state);
        this.enterRule(localContext, 162, OpenSearchPPLParser.RULE_byClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1114;
            this.match(OpenSearchPPLParser.BY);
            this.state = 1115;
            this.fieldList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statsByClause(): StatsByClauseContext {
        let localContext = new StatsByClauseContext(this.context, this.state);
        this.enterRule(localContext, 164, OpenSearchPPLParser.RULE_statsByClause);
        try {
            this.state = 1131;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 107, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1117;
                this.match(OpenSearchPPLParser.BY);
                this.state = 1118;
                this.fieldList();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1119;
                this.match(OpenSearchPPLParser.BY);
                this.state = 1120;
                this.bySpanClause();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1121;
                this.match(OpenSearchPPLParser.BY);
                this.state = 1122;
                this.bySpanClause();
                this.state = 1123;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1124;
                this.fieldList();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1126;
                this.match(OpenSearchPPLParser.BY);
                this.state = 1127;
                this.fieldList();
                this.state = 1128;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1129;
                this.bySpanClause();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public bySpanClause(): BySpanClauseContext {
        let localContext = new BySpanClauseContext(this.context, this.state);
        this.enterRule(localContext, 166, OpenSearchPPLParser.RULE_bySpanClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1133;
            this.spanClause();
            this.state = 1136;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 56) {
                {
                this.state = 1134;
                this.match(OpenSearchPPLParser.AS);
                this.state = 1135;
                localContext._alias = this.qualifiedName();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public spanClause(): SpanClauseContext {
        let localContext = new SpanClauseContext(this.context, this.state);
        this.enterRule(localContext, 168, OpenSearchPPLParser.RULE_spanClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1138;
            this.match(OpenSearchPPLParser.SPAN);
            this.state = 1139;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1140;
            this.fieldExpression();
            this.state = 1141;
            this.match(OpenSearchPPLParser.COMMA);
            this.state = 1142;
            localContext._value = this.literalValue();
            this.state = 1144;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 62 || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & 174612545) !== 0) || ((((_la - 424)) & ~0x1F) === 0 && ((1 << (_la - 424)) & 2097151) !== 0)) {
                {
                this.state = 1143;
                localContext._unit = this.timespanUnit();
                }
            }

            this.state = 1146;
            this.match(OpenSearchPPLParser.RT_PRTHS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sortbyClause(): SortbyClauseContext {
        let localContext = new SortbyClauseContext(this.context, this.state);
        this.enterRule(localContext, 170, OpenSearchPPLParser.RULE_sortbyClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1148;
            this.sortField();
            this.state = 1153;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 161) {
                {
                {
                this.state = 1149;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1150;
                this.sortField();
                }
                }
                this.state = 1155;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public evalClause(): EvalClauseContext {
        let localContext = new EvalClauseContext(this.context, this.state);
        this.enterRule(localContext, 172, OpenSearchPPLParser.RULE_evalClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1156;
            this.fieldExpression();
            this.state = 1157;
            this.match(OpenSearchPPLParser.EQUAL);
            this.state = 1158;
            this.logicalExpression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public eventstatsAggTerm(): EventstatsAggTermContext {
        let localContext = new EventstatsAggTermContext(this.context, this.state);
        this.enterRule(localContext, 174, OpenSearchPPLParser.RULE_eventstatsAggTerm);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1160;
            this.windowFunction();
            this.state = 1163;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 56) {
                {
                this.state = 1161;
                this.match(OpenSearchPPLParser.AS);
                this.state = 1162;
                localContext._alias = this.wcFieldExpression();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public windowFunction(): WindowFunctionContext {
        let localContext = new WindowFunctionContext(this.context, this.state);
        this.enterRule(localContext, 176, OpenSearchPPLParser.RULE_windowFunction);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1165;
            this.windowFunctionName();
            this.state = 1166;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1167;
            this.functionArgs();
            this.state = 1168;
            this.match(OpenSearchPPLParser.RT_PRTHS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public windowFunctionName(): WindowFunctionNameContext {
        let localContext = new WindowFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 178, OpenSearchPPLParser.RULE_windowFunctionName);
        try {
            this.state = 1172;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.AVG:
            case OpenSearchPPLParser.COUNT:
            case OpenSearchPPLParser.MAX:
            case OpenSearchPPLParser.MIN:
            case OpenSearchPPLParser.SUM:
            case OpenSearchPPLParser.VAR_SAMP:
            case OpenSearchPPLParser.VAR_POP:
            case OpenSearchPPLParser.STDDEV_SAMP:
            case OpenSearchPPLParser.STDDEV_POP:
            case OpenSearchPPLParser.PERCENTILE:
            case OpenSearchPPLParser.PERCENTILE_APPROX:
            case OpenSearchPPLParser.LIST:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1170;
                this.statsFunctionName();
                }
                break;
            case OpenSearchPPLParser.DISTINCT_COUNT:
            case OpenSearchPPLParser.DC:
            case OpenSearchPPLParser.ROW_NUMBER:
            case OpenSearchPPLParser.RANK:
            case OpenSearchPPLParser.DENSE_RANK:
            case OpenSearchPPLParser.PERCENT_RANK:
            case OpenSearchPPLParser.CUME_DIST:
            case OpenSearchPPLParser.FIRST:
            case OpenSearchPPLParser.LAST:
            case OpenSearchPPLParser.NTH:
            case OpenSearchPPLParser.NTILE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1171;
                this.scalarWindowFunctionName();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public scalarWindowFunctionName(): ScalarWindowFunctionNameContext {
        let localContext = new ScalarWindowFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 180, OpenSearchPPLParser.RULE_scalarWindowFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1174;
            _la = this.tokenStream.LA(1);
            if(!(_la === 192 || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & 1023) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statsAggTerm(): StatsAggTermContext {
        let localContext = new StatsAggTermContext(this.context, this.state);
        this.enterRule(localContext, 182, OpenSearchPPLParser.RULE_statsAggTerm);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1176;
            this.statsFunction();
            this.state = 1179;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 56) {
                {
                this.state = 1177;
                this.match(OpenSearchPPLParser.AS);
                this.state = 1178;
                localContext._alias = this.wcFieldExpression();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statsFunction(): StatsFunctionContext {
        let localContext = new StatsFunctionContext(this.context, this.state);
        this.enterRule(localContext, 184, OpenSearchPPLParser.RULE_statsFunction);
        let _la: number;
        try {
            this.state = 1209;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 115, this.context) ) {
            case 1:
                localContext = new StatsFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1181;
                this.statsFunctionName();
                this.state = 1182;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1183;
                this.valueExpression(0);
                this.state = 1184;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                }
                break;
            case 2:
                localContext = new CountEvalFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1186;
                _la = this.tokenStream.LA(1);
                if(!(_la === 191 || _la === 224)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1187;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1188;
                this.evalExpression();
                this.state = 1189;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                }
                break;
            case 3:
                localContext = new CountAllFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1191;
                _la = this.tokenStream.LA(1);
                if(!(_la === 191 || _la === 224)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1194;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 177) {
                    {
                    this.state = 1192;
                    this.match(OpenSearchPPLParser.LT_PRTHS);
                    this.state = 1193;
                    this.match(OpenSearchPPLParser.RT_PRTHS);
                    }
                }

                }
                break;
            case 4:
                localContext = new PercentileShortcutFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1196;
                this.match(OpenSearchPPLParser.PERCENTILE_SHORTCUT);
                this.state = 1197;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1198;
                this.valueExpression(0);
                this.state = 1199;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                }
                break;
            case 5:
                localContext = new DistinctCountFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1201;
                _la = this.tokenStream.LA(1);
                if(!(_la === 192 || _la === 193 || _la === 225)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1202;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1203;
                this.valueExpression(0);
                this.state = 1204;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                }
                break;
            case 6:
                localContext = new TakeAggFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1206;
                this.takeAggFunction();
                }
                break;
            case 7:
                localContext = new PercentileApproxFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1207;
                this.percentileApproxFunction();
                }
                break;
            case 8:
                localContext = new EarliestLatestFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1208;
                this.earliestLatestFunction();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statsFunctionName(): StatsFunctionNameContext {
        let localContext = new StatsFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 186, OpenSearchPPLParser.RULE_statsFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1211;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 190)) & ~0x1F) === 0 && ((1 << (_la - 190)) & 74400323) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public earliestLatestFunction(): EarliestLatestFunctionContext {
        let localContext = new EarliestLatestFunctionContext(this.context, this.state);
        this.enterRule(localContext, 188, OpenSearchPPLParser.RULE_earliestLatestFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1213;
            _la = this.tokenStream.LA(1);
            if(!(_la === 213 || _la === 214)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1214;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1215;
            this.valueExpression(0);
            this.state = 1218;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 161) {
                {
                this.state = 1216;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1217;
                localContext._timeField = this.valueExpression(0);
                }
            }

            this.state = 1220;
            this.match(OpenSearchPPLParser.RT_PRTHS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public takeAggFunction(): TakeAggFunctionContext {
        let localContext = new TakeAggFunctionContext(this.context, this.state);
        this.enterRule(localContext, 190, OpenSearchPPLParser.RULE_takeAggFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1222;
            this.match(OpenSearchPPLParser.TAKE);
            this.state = 1223;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1224;
            this.fieldExpression();
            this.state = 1227;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 161) {
                {
                this.state = 1225;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1226;
                localContext._size = this.integerLiteral();
                }
            }

            this.state = 1229;
            this.match(OpenSearchPPLParser.RT_PRTHS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public percentileApproxFunction(): PercentileApproxFunctionContext {
        let localContext = new PercentileApproxFunctionContext(this.context, this.state);
        this.enterRule(localContext, 192, OpenSearchPPLParser.RULE_percentileApproxFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1231;
            _la = this.tokenStream.LA(1);
            if(!(_la === 211 || _la === 212)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1232;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1233;
            localContext._aggField = this.valueExpression(0);
            this.state = 1234;
            this.match(OpenSearchPPLParser.COMMA);
            this.state = 1235;
            localContext._percent = this.numericLiteral();
            this.state = 1238;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 161) {
                {
                this.state = 1236;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1237;
                localContext._compression = this.numericLiteral();
                }
            }

            this.state = 1240;
            this.match(OpenSearchPPLParser.RT_PRTHS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public numericLiteral(): NumericLiteralContext {
        let localContext = new NumericLiteralContext(this.context, this.state);
        this.enterRule(localContext, 194, OpenSearchPPLParser.RULE_numericLiteral);
        try {
            this.state = 1246;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 119, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1242;
                this.integerLiteral();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1243;
                this.decimalLiteral();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1244;
                this.doubleLiteral();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1245;
                this.floatLiteral();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public logicalExpression(): LogicalExpressionContext;
    public logicalExpression(_p: number): LogicalExpressionContext;
    public logicalExpression(_p?: number): LogicalExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new LogicalExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 196;
        this.enterRecursionRule(localContext, 196, OpenSearchPPLParser.RULE_logicalExpression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1252;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.NOT:
                {
                localContext = new LogicalNotContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1249;
                this.match(OpenSearchPPLParser.NOT);
                this.state = 1250;
                this.logicalExpression(5);
                }
                break;
            case OpenSearchPPLParser.SEARCH:
            case OpenSearchPPLParser.DESCRIBE:
            case OpenSearchPPLParser.SHOW:
            case OpenSearchPPLParser.EXPLAIN:
            case OpenSearchPPLParser.FROM:
            case OpenSearchPPLParser.WHERE:
            case OpenSearchPPLParser.FIELDS:
            case OpenSearchPPLParser.TABLE:
            case OpenSearchPPLParser.RENAME:
            case OpenSearchPPLParser.STATS:
            case OpenSearchPPLParser.EVENTSTATS:
            case OpenSearchPPLParser.DEDUP:
            case OpenSearchPPLParser.SORT:
            case OpenSearchPPLParser.EVAL:
            case OpenSearchPPLParser.HEAD:
            case OpenSearchPPLParser.BIN:
            case OpenSearchPPLParser.TOP:
            case OpenSearchPPLParser.RARE:
            case OpenSearchPPLParser.PARSE:
            case OpenSearchPPLParser.REGEX:
            case OpenSearchPPLParser.PUNCT:
            case OpenSearchPPLParser.GROK:
            case OpenSearchPPLParser.PATTERN:
            case OpenSearchPPLParser.PATTERNS:
            case OpenSearchPPLParser.NEW_FIELD:
            case OpenSearchPPLParser.KMEANS:
            case OpenSearchPPLParser.AD:
            case OpenSearchPPLParser.ML:
            case OpenSearchPPLParser.FILLNULL:
            case OpenSearchPPLParser.FLATTEN:
            case OpenSearchPPLParser.TRENDLINE:
            case OpenSearchPPLParser.TIMECHART:
            case OpenSearchPPLParser.EXPAND:
            case OpenSearchPPLParser.VARIABLE_COUNT_THRESHOLD:
            case OpenSearchPPLParser.FREQUENCY_THRESHOLD_PERCENTAGE:
            case OpenSearchPPLParser.METHOD:
            case OpenSearchPPLParser.MAX_SAMPLE_COUNT:
            case OpenSearchPPLParser.BUFFER_LIMIT:
            case OpenSearchPPLParser.JOIN:
            case OpenSearchPPLParser.INNER:
            case OpenSearchPPLParser.OUTER:
            case OpenSearchPPLParser.FULL:
            case OpenSearchPPLParser.SEMI:
            case OpenSearchPPLParser.ANTI:
            case OpenSearchPPLParser.CROSS:
            case OpenSearchPPLParser.LEFT_HINT:
            case OpenSearchPPLParser.RIGHT_HINT:
            case OpenSearchPPLParser.SOURCE:
            case OpenSearchPPLParser.INDEX:
            case OpenSearchPPLParser.A:
            case OpenSearchPPLParser.ASC:
            case OpenSearchPPLParser.D:
            case OpenSearchPPLParser.DESC:
            case OpenSearchPPLParser.DATASOURCES:
            case OpenSearchPPLParser.USING:
            case OpenSearchPPLParser.WITH:
            case OpenSearchPPLParser.SIMPLE:
            case OpenSearchPPLParser.STANDARD:
            case OpenSearchPPLParser.COST:
            case OpenSearchPPLParser.EXTENDED:
            case OpenSearchPPLParser.OVERRIDE:
            case OpenSearchPPLParser.AUTO:
            case OpenSearchPPLParser.STR:
            case OpenSearchPPLParser.NUM:
            case OpenSearchPPLParser.SMA:
            case OpenSearchPPLParser.WMA:
            case OpenSearchPPLParser.KEEPEMPTY:
            case OpenSearchPPLParser.CONSECUTIVE:
            case OpenSearchPPLParser.DEDUP_SPLITVALUES:
            case OpenSearchPPLParser.PARTITIONS:
            case OpenSearchPPLParser.ALLNUM:
            case OpenSearchPPLParser.DELIM:
            case OpenSearchPPLParser.CENTROIDS:
            case OpenSearchPPLParser.ITERATIONS:
            case OpenSearchPPLParser.DISTANCE_TYPE:
            case OpenSearchPPLParser.NUMBER_OF_TREES:
            case OpenSearchPPLParser.SHINGLE_SIZE:
            case OpenSearchPPLParser.SAMPLE_SIZE:
            case OpenSearchPPLParser.OUTPUT_AFTER:
            case OpenSearchPPLParser.TIME_DECAY:
            case OpenSearchPPLParser.ANOMALY_RATE:
            case OpenSearchPPLParser.CATEGORY_FIELD:
            case OpenSearchPPLParser.TIME_FIELD:
            case OpenSearchPPLParser.TIME_ZONE:
            case OpenSearchPPLParser.TRAINING_DATA_SIZE:
            case OpenSearchPPLParser.ANOMALY_SCORE_THRESHOLD:
            case OpenSearchPPLParser.APPEND:
            case OpenSearchPPLParser.COUNTFIELD:
            case OpenSearchPPLParser.SHOWCOUNT:
            case OpenSearchPPLParser.INPUT:
            case OpenSearchPPLParser.OUTPUT:
            case OpenSearchPPLParser.PATH:
            case OpenSearchPPLParser.CASE:
            case OpenSearchPPLParser.ELSE:
            case OpenSearchPPLParser.IN:
            case OpenSearchPPLParser.EXISTS:
            case OpenSearchPPLParser.GEOIP:
            case OpenSearchPPLParser.TRUE:
            case OpenSearchPPLParser.FALSE:
            case OpenSearchPPLParser.REGEXP:
            case OpenSearchPPLParser.REGEX_MATCH:
            case OpenSearchPPLParser.CONVERT_TZ:
            case OpenSearchPPLParser.DATETIME:
            case OpenSearchPPLParser.DAY:
            case OpenSearchPPLParser.DAY_HOUR:
            case OpenSearchPPLParser.DAY_MICROSECOND:
            case OpenSearchPPLParser.DAY_MINUTE:
            case OpenSearchPPLParser.DAY_OF_YEAR:
            case OpenSearchPPLParser.DAY_SECOND:
            case OpenSearchPPLParser.HOUR:
            case OpenSearchPPLParser.HOUR_MICROSECOND:
            case OpenSearchPPLParser.HOUR_MINUTE:
            case OpenSearchPPLParser.HOUR_OF_DAY:
            case OpenSearchPPLParser.HOUR_SECOND:
            case OpenSearchPPLParser.INTERVAL:
            case OpenSearchPPLParser.MICROSECOND:
            case OpenSearchPPLParser.MILLISECOND:
            case OpenSearchPPLParser.MINUTE:
            case OpenSearchPPLParser.MINUTE_MICROSECOND:
            case OpenSearchPPLParser.MINUTE_OF_DAY:
            case OpenSearchPPLParser.MINUTE_OF_HOUR:
            case OpenSearchPPLParser.MINUTE_SECOND:
            case OpenSearchPPLParser.MONTH:
            case OpenSearchPPLParser.MONTH_OF_YEAR:
            case OpenSearchPPLParser.QUARTER:
            case OpenSearchPPLParser.SECOND:
            case OpenSearchPPLParser.SECOND_MICROSECOND:
            case OpenSearchPPLParser.SECOND_OF_MINUTE:
            case OpenSearchPPLParser.WEEK:
            case OpenSearchPPLParser.WEEK_OF_YEAR:
            case OpenSearchPPLParser.YEAR:
            case OpenSearchPPLParser.YEAR_MONTH:
            case OpenSearchPPLParser.LOOKUP:
            case OpenSearchPPLParser.IP:
            case OpenSearchPPLParser.DOT:
            case OpenSearchPPLParser.EQUAL:
            case OpenSearchPPLParser.DOUBLE_EQUAL:
            case OpenSearchPPLParser.GREATER:
            case OpenSearchPPLParser.LESS:
            case OpenSearchPPLParser.NOT_GREATER:
            case OpenSearchPPLParser.NOT_LESS:
            case OpenSearchPPLParser.NOT_EQUAL:
            case OpenSearchPPLParser.PLUS:
            case OpenSearchPPLParser.MINUS:
            case OpenSearchPPLParser.LT_PRTHS:
            case OpenSearchPPLParser.LT_SQR_PRTHS:
            case OpenSearchPPLParser.BACKTICK:
            case OpenSearchPPLParser.ARROW:
            case OpenSearchPPLParser.AVG:
            case OpenSearchPPLParser.COUNT:
            case OpenSearchPPLParser.DISTINCT_COUNT:
            case OpenSearchPPLParser.DISTINCT_COUNT_APPROX:
            case OpenSearchPPLParser.ESTDC:
            case OpenSearchPPLParser.ESTDC_ERROR:
            case OpenSearchPPLParser.MAX:
            case OpenSearchPPLParser.MEAN:
            case OpenSearchPPLParser.MEDIAN:
            case OpenSearchPPLParser.MIN:
            case OpenSearchPPLParser.MODE:
            case OpenSearchPPLParser.RANGE:
            case OpenSearchPPLParser.STDEV:
            case OpenSearchPPLParser.STDEVP:
            case OpenSearchPPLParser.SUM:
            case OpenSearchPPLParser.SUMSQ:
            case OpenSearchPPLParser.VAR_SAMP:
            case OpenSearchPPLParser.VAR_POP:
            case OpenSearchPPLParser.STDDEV_SAMP:
            case OpenSearchPPLParser.STDDEV_POP:
            case OpenSearchPPLParser.PERCENTILE:
            case OpenSearchPPLParser.PERCENTILE_APPROX:
            case OpenSearchPPLParser.EARLIEST:
            case OpenSearchPPLParser.LATEST:
            case OpenSearchPPLParser.TAKE:
            case OpenSearchPPLParser.LIST:
            case OpenSearchPPLParser.VALUES:
            case OpenSearchPPLParser.PER_DAY:
            case OpenSearchPPLParser.PER_HOUR:
            case OpenSearchPPLParser.PER_MINUTE:
            case OpenSearchPPLParser.PER_SECOND:
            case OpenSearchPPLParser.RATE:
            case OpenSearchPPLParser.SPARKLINE:
            case OpenSearchPPLParser.C:
            case OpenSearchPPLParser.DC:
            case OpenSearchPPLParser.ROW_NUMBER:
            case OpenSearchPPLParser.RANK:
            case OpenSearchPPLParser.DENSE_RANK:
            case OpenSearchPPLParser.PERCENT_RANK:
            case OpenSearchPPLParser.CUME_DIST:
            case OpenSearchPPLParser.FIRST:
            case OpenSearchPPLParser.LAST:
            case OpenSearchPPLParser.NTH:
            case OpenSearchPPLParser.NTILE:
            case OpenSearchPPLParser.PLUS_FUCTION:
            case OpenSearchPPLParser.MINUS_FUCTION:
            case OpenSearchPPLParser.STAR_FUNCTION:
            case OpenSearchPPLParser.DIVIDE_FUNCTION:
            case OpenSearchPPLParser.ABS:
            case OpenSearchPPLParser.CBRT:
            case OpenSearchPPLParser.CEIL:
            case OpenSearchPPLParser.CEILING:
            case OpenSearchPPLParser.CONV:
            case OpenSearchPPLParser.CRC32:
            case OpenSearchPPLParser.E:
            case OpenSearchPPLParser.EXP:
            case OpenSearchPPLParser.EXPM1:
            case OpenSearchPPLParser.FLOOR:
            case OpenSearchPPLParser.LN:
            case OpenSearchPPLParser.LOG:
            case OpenSearchPPLParser.LOG_WITH_BASE:
            case OpenSearchPPLParser.MOD:
            case OpenSearchPPLParser.MODULUS:
            case OpenSearchPPLParser.PI:
            case OpenSearchPPLParser.POSITION:
            case OpenSearchPPLParser.POW:
            case OpenSearchPPLParser.POWER:
            case OpenSearchPPLParser.RAND:
            case OpenSearchPPLParser.ROUND:
            case OpenSearchPPLParser.SIGN:
            case OpenSearchPPLParser.SQRT:
            case OpenSearchPPLParser.TRUNCATE:
            case OpenSearchPPLParser.RINT:
            case OpenSearchPPLParser.SIGNUM:
            case OpenSearchPPLParser.ACOS:
            case OpenSearchPPLParser.ASIN:
            case OpenSearchPPLParser.ATAN:
            case OpenSearchPPLParser.ATAN2:
            case OpenSearchPPLParser.COS:
            case OpenSearchPPLParser.COSH:
            case OpenSearchPPLParser.COT:
            case OpenSearchPPLParser.DEGREES:
            case OpenSearchPPLParser.RADIANS:
            case OpenSearchPPLParser.SIN:
            case OpenSearchPPLParser.SINH:
            case OpenSearchPPLParser.TAN:
            case OpenSearchPPLParser.MD5:
            case OpenSearchPPLParser.SHA1:
            case OpenSearchPPLParser.SHA2:
            case OpenSearchPPLParser.ADDDATE:
            case OpenSearchPPLParser.ADDTIME:
            case OpenSearchPPLParser.CURDATE:
            case OpenSearchPPLParser.CURRENT_DATE:
            case OpenSearchPPLParser.CURRENT_TIME:
            case OpenSearchPPLParser.CURRENT_TIMESTAMP:
            case OpenSearchPPLParser.CURTIME:
            case OpenSearchPPLParser.DATE:
            case OpenSearchPPLParser.DATEDIFF:
            case OpenSearchPPLParser.DATE_ADD:
            case OpenSearchPPLParser.DATE_FORMAT:
            case OpenSearchPPLParser.DATE_SUB:
            case OpenSearchPPLParser.DAYNAME:
            case OpenSearchPPLParser.DAYOFMONTH:
            case OpenSearchPPLParser.DAYOFWEEK:
            case OpenSearchPPLParser.DAYOFYEAR:
            case OpenSearchPPLParser.DAY_OF_MONTH:
            case OpenSearchPPLParser.DAY_OF_WEEK:
            case OpenSearchPPLParser.EXTRACT:
            case OpenSearchPPLParser.FROM_DAYS:
            case OpenSearchPPLParser.FROM_UNIXTIME:
            case OpenSearchPPLParser.GET_FORMAT:
            case OpenSearchPPLParser.LAST_DAY:
            case OpenSearchPPLParser.LOCALTIME:
            case OpenSearchPPLParser.LOCALTIMESTAMP:
            case OpenSearchPPLParser.MAKEDATE:
            case OpenSearchPPLParser.MAKETIME:
            case OpenSearchPPLParser.MONTHNAME:
            case OpenSearchPPLParser.NOW:
            case OpenSearchPPLParser.PERIOD_ADD:
            case OpenSearchPPLParser.PERIOD_DIFF:
            case OpenSearchPPLParser.SEC_TO_TIME:
            case OpenSearchPPLParser.STR_TO_DATE:
            case OpenSearchPPLParser.SUBDATE:
            case OpenSearchPPLParser.SUBTIME:
            case OpenSearchPPLParser.SYSDATE:
            case OpenSearchPPLParser.TIME:
            case OpenSearchPPLParser.TIMEDIFF:
            case OpenSearchPPLParser.TIMESTAMP:
            case OpenSearchPPLParser.TIMESTAMPADD:
            case OpenSearchPPLParser.TIMESTAMPDIFF:
            case OpenSearchPPLParser.TIME_FORMAT:
            case OpenSearchPPLParser.TIME_TO_SEC:
            case OpenSearchPPLParser.TO_DAYS:
            case OpenSearchPPLParser.TO_SECONDS:
            case OpenSearchPPLParser.UNIX_TIMESTAMP:
            case OpenSearchPPLParser.UTC_DATE:
            case OpenSearchPPLParser.UTC_TIME:
            case OpenSearchPPLParser.UTC_TIMESTAMP:
            case OpenSearchPPLParser.WEEKDAY:
            case OpenSearchPPLParser.YEARWEEK:
            case OpenSearchPPLParser.SUBSTR:
            case OpenSearchPPLParser.SUBSTRING:
            case OpenSearchPPLParser.LTRIM:
            case OpenSearchPPLParser.RTRIM:
            case OpenSearchPPLParser.TRIM:
            case OpenSearchPPLParser.LOWER:
            case OpenSearchPPLParser.UPPER:
            case OpenSearchPPLParser.CONCAT:
            case OpenSearchPPLParser.CONCAT_WS:
            case OpenSearchPPLParser.LENGTH:
            case OpenSearchPPLParser.STRCMP:
            case OpenSearchPPLParser.RIGHT:
            case OpenSearchPPLParser.LEFT:
            case OpenSearchPPLParser.ASCII:
            case OpenSearchPPLParser.LOCATE:
            case OpenSearchPPLParser.REPLACE:
            case OpenSearchPPLParser.REVERSE:
            case OpenSearchPPLParser.CAST:
            case OpenSearchPPLParser.LIKE:
            case OpenSearchPPLParser.ISNULL:
            case OpenSearchPPLParser.ISNOTNULL:
            case OpenSearchPPLParser.CIDRMATCH:
            case OpenSearchPPLParser.BETWEEN:
            case OpenSearchPPLParser.ISPRESENT:
            case OpenSearchPPLParser.ISEMPTY:
            case OpenSearchPPLParser.ISBLANK:
            case OpenSearchPPLParser.ARRAY:
            case OpenSearchPPLParser.ARRAY_LENGTH:
            case OpenSearchPPLParser.FORALL:
            case OpenSearchPPLParser.FILTER:
            case OpenSearchPPLParser.TRANSFORM:
            case OpenSearchPPLParser.REDUCE:
            case OpenSearchPPLParser.JSON_VALID:
            case OpenSearchPPLParser.JSON:
            case OpenSearchPPLParser.JSON_OBJECT:
            case OpenSearchPPLParser.JSON_ARRAY:
            case OpenSearchPPLParser.JSON_ARRAY_LENGTH:
            case OpenSearchPPLParser.JSON_EXTRACT:
            case OpenSearchPPLParser.JSON_KEYS:
            case OpenSearchPPLParser.JSON_SET:
            case OpenSearchPPLParser.JSON_DELETE:
            case OpenSearchPPLParser.JSON_APPEND:
            case OpenSearchPPLParser.JSON_EXTEND:
            case OpenSearchPPLParser.IFNULL:
            case OpenSearchPPLParser.NULLIF:
            case OpenSearchPPLParser.IF:
            case OpenSearchPPLParser.TYPEOF:
            case OpenSearchPPLParser.COALESCE:
            case OpenSearchPPLParser.MATCH:
            case OpenSearchPPLParser.MATCH_PHRASE:
            case OpenSearchPPLParser.MATCH_PHRASE_PREFIX:
            case OpenSearchPPLParser.MATCH_BOOL_PREFIX:
            case OpenSearchPPLParser.SIMPLE_QUERY_STRING:
            case OpenSearchPPLParser.MULTI_MATCH:
            case OpenSearchPPLParser.QUERY_STRING:
            case OpenSearchPPLParser.ALLOW_LEADING_WILDCARD:
            case OpenSearchPPLParser.ANALYZE_WILDCARD:
            case OpenSearchPPLParser.ANALYZER:
            case OpenSearchPPLParser.AUTO_GENERATE_SYNONYMS_PHRASE_QUERY:
            case OpenSearchPPLParser.BOOST:
            case OpenSearchPPLParser.CUTOFF_FREQUENCY:
            case OpenSearchPPLParser.DEFAULT_FIELD:
            case OpenSearchPPLParser.DEFAULT_OPERATOR:
            case OpenSearchPPLParser.ENABLE_POSITION_INCREMENTS:
            case OpenSearchPPLParser.ESCAPE:
            case OpenSearchPPLParser.FLAGS:
            case OpenSearchPPLParser.FUZZY_MAX_EXPANSIONS:
            case OpenSearchPPLParser.FUZZY_PREFIX_LENGTH:
            case OpenSearchPPLParser.FUZZY_TRANSPOSITIONS:
            case OpenSearchPPLParser.FUZZY_REWRITE:
            case OpenSearchPPLParser.FUZZINESS:
            case OpenSearchPPLParser.LENIENT:
            case OpenSearchPPLParser.LOW_FREQ_OPERATOR:
            case OpenSearchPPLParser.MAX_DETERMINIZED_STATES:
            case OpenSearchPPLParser.MAX_EXPANSIONS:
            case OpenSearchPPLParser.MINIMUM_SHOULD_MATCH:
            case OpenSearchPPLParser.OPERATOR:
            case OpenSearchPPLParser.PHRASE_SLOP:
            case OpenSearchPPLParser.PREFIX_LENGTH:
            case OpenSearchPPLParser.QUOTE_ANALYZER:
            case OpenSearchPPLParser.QUOTE_FIELD_SUFFIX:
            case OpenSearchPPLParser.REWRITE:
            case OpenSearchPPLParser.SLOP:
            case OpenSearchPPLParser.TIE_BREAKER:
            case OpenSearchPPLParser.TYPE:
            case OpenSearchPPLParser.ZERO_TERMS_QUERY:
            case OpenSearchPPLParser.SPAN:
            case OpenSearchPPLParser.MS:
            case OpenSearchPPLParser.S:
            case OpenSearchPPLParser.M:
            case OpenSearchPPLParser.H:
            case OpenSearchPPLParser.W:
            case OpenSearchPPLParser.Q:
            case OpenSearchPPLParser.Y:
            case OpenSearchPPLParser.SEC:
            case OpenSearchPPLParser.SECS:
            case OpenSearchPPLParser.SECONDS:
            case OpenSearchPPLParser.MINS:
            case OpenSearchPPLParser.MINUTES:
            case OpenSearchPPLParser.HR:
            case OpenSearchPPLParser.HRS:
            case OpenSearchPPLParser.HOURS:
            case OpenSearchPPLParser.DAYS:
            case OpenSearchPPLParser.MON:
            case OpenSearchPPLParser.MONTHS:
            case OpenSearchPPLParser.US:
            case OpenSearchPPLParser.CS:
            case OpenSearchPPLParser.DS:
            case OpenSearchPPLParser.PERCENTILE_SHORTCUT:
            case OpenSearchPPLParser.ID:
            case OpenSearchPPLParser.INTEGER_LITERAL:
            case OpenSearchPPLParser.DECIMAL_LITERAL:
            case OpenSearchPPLParser.FLOAT_LITERAL:
            case OpenSearchPPLParser.DOUBLE_LITERAL:
            case OpenSearchPPLParser.DQUOTA_STRING:
            case OpenSearchPPLParser.SQUOTA_STRING:
            case OpenSearchPPLParser.BQUOTA_STRING:
                {
                localContext = new LogicalExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1251;
                this.expression(0);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1265;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 122, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1263;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 121, this.context) ) {
                    case 1:
                        {
                        localContext = new LogicalAndContext(new LogicalExpressionContext(parentContext, parentState));
                        (localContext as LogicalAndContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchPPLParser.RULE_logicalExpression);
                        this.state = 1254;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 1255;
                        this.match(OpenSearchPPLParser.AND);
                        this.state = 1256;
                        (localContext as LogicalAndContext)._right = this.logicalExpression(5);
                        }
                        break;
                    case 2:
                        {
                        localContext = new LogicalXorContext(new LogicalExpressionContext(parentContext, parentState));
                        (localContext as LogicalXorContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchPPLParser.RULE_logicalExpression);
                        this.state = 1257;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 1258;
                        this.match(OpenSearchPPLParser.XOR);
                        this.state = 1259;
                        (localContext as LogicalXorContext)._right = this.logicalExpression(4);
                        }
                        break;
                    case 3:
                        {
                        localContext = new LogicalOrContext(new LogicalExpressionContext(parentContext, parentState));
                        (localContext as LogicalOrContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchPPLParser.RULE_logicalExpression);
                        this.state = 1260;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 1261;
                        this.match(OpenSearchPPLParser.OR);
                        this.state = 1262;
                        (localContext as LogicalOrContext)._right = this.logicalExpression(3);
                        }
                        break;
                    }
                    }
                }
                this.state = 1267;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 122, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }

    public expression(): ExpressionContext;
    public expression(_p: number): ExpressionContext;
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 198;
        this.enterRecursionRule(localContext, 198, OpenSearchPPLParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1271;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 123, this.context) ) {
            case 1:
                {
                localContext = new ValueExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1269;
                this.valueExpression(0);
                }
                break;
            case 2:
                {
                localContext = new RelevanceExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1270;
                this.relevanceExpression();
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1294;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 127, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1292;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 126, this.context) ) {
                    case 1:
                        {
                        localContext = new CompareExprContext(new ExpressionContext(parentContext, parentState));
                        (localContext as CompareExprContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchPPLParser.RULE_expression);
                        this.state = 1273;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 1274;
                        this.comparisonOperator();
                        this.state = 1275;
                        (localContext as CompareExprContext)._right = this.expression(4);
                        }
                        break;
                    case 2:
                        {
                        localContext = new BetweenContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchPPLParser.RULE_expression);
                        this.state = 1277;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 1279;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 110) {
                            {
                            this.state = 1278;
                            this.match(OpenSearchPPLParser.NOT);
                            }
                        }

                        this.state = 1281;
                        this.match(OpenSearchPPLParser.BETWEEN);
                        this.state = 1282;
                        this.expression(0);
                        this.state = 1283;
                        this.match(OpenSearchPPLParser.AND);
                        this.state = 1284;
                        this.expression(2);
                        }
                        break;
                    case 3:
                        {
                        localContext = new InExprContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchPPLParser.RULE_expression);
                        this.state = 1286;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 1288;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 110) {
                            {
                            this.state = 1287;
                            this.match(OpenSearchPPLParser.NOT);
                            }
                        }

                        this.state = 1290;
                        this.match(OpenSearchPPLParser.IN);
                        this.state = 1291;
                        this.valueList();
                        }
                        break;
                    }
                    }
                }
                this.state = 1296;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 127, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }

    public valueExpression(): ValueExpressionContext;
    public valueExpression(_p: number): ValueExpressionContext;
    public valueExpression(_p?: number): ValueExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ValueExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 200;
        this.enterRecursionRule(localContext, 200, OpenSearchPPLParser.RULE_valueExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1333;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 130, this.context) ) {
            case 1:
                {
                localContext = new LiteralValueExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1298;
                this.literalValue();
                }
                break;
            case 2:
                {
                localContext = new FunctionCallExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1299;
                this.functionCall();
                }
                break;
            case 3:
                {
                localContext = new LambdaExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1300;
                this.lambda();
                }
                break;
            case 4:
                {
                localContext = new ScalarSubqueryExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1301;
                this.match(OpenSearchPPLParser.LT_SQR_PRTHS);
                this.state = 1302;
                this.subSearch();
                this.state = 1303;
                this.match(OpenSearchPPLParser.RT_SQR_PRTHS);
                }
                break;
            case 5:
                {
                localContext = new InSubqueryExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1305;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1306;
                this.valueExpression(0);
                this.state = 1311;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 161) {
                    {
                    {
                    this.state = 1307;
                    this.match(OpenSearchPPLParser.COMMA);
                    this.state = 1308;
                    this.valueExpression(0);
                    }
                    }
                    this.state = 1313;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1314;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                this.state = 1316;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 110) {
                    {
                    this.state = 1315;
                    this.match(OpenSearchPPLParser.NOT);
                    }
                }

                this.state = 1318;
                this.match(OpenSearchPPLParser.IN);
                this.state = 1319;
                this.match(OpenSearchPPLParser.LT_SQR_PRTHS);
                this.state = 1320;
                this.subSearch();
                this.state = 1321;
                this.match(OpenSearchPPLParser.RT_SQR_PRTHS);
                }
                break;
            case 6:
                {
                localContext = new ExistsSubqueryExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1323;
                this.match(OpenSearchPPLParser.EXISTS);
                this.state = 1324;
                this.match(OpenSearchPPLParser.LT_SQR_PRTHS);
                this.state = 1325;
                this.subSearch();
                this.state = 1326;
                this.match(OpenSearchPPLParser.RT_SQR_PRTHS);
                }
                break;
            case 7:
                {
                localContext = new FieldExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1328;
                this.fieldExpression();
                }
                break;
            case 8:
                {
                localContext = new NestedValueExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1329;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1330;
                this.logicalExpression(0);
                this.state = 1331;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1352;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 133, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1350;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 132, this.context) ) {
                    case 1:
                        {
                        localContext = new BinaryArithmeticContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as BinaryArithmeticContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchPPLParser.RULE_valueExpression);
                        this.state = 1335;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 1336;
                        (localContext as BinaryArithmeticContext)._binaryOperator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 7) !== 0))) {
                            (localContext as BinaryArithmeticContext)._binaryOperator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1337;
                        (localContext as BinaryArithmeticContext)._right = this.valueExpression(12);
                        }
                        break;
                    case 2:
                        {
                        localContext = new BinaryArithmeticContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as BinaryArithmeticContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchPPLParser.RULE_valueExpression);
                        this.state = 1338;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 1339;
                        (localContext as BinaryArithmeticContext)._binaryOperator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 170 || _la === 171)) {
                            (localContext as BinaryArithmeticContext)._binaryOperator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1340;
                        (localContext as BinaryArithmeticContext)._right = this.valueExpression(11);
                        }
                        break;
                    case 3:
                        {
                        localContext = new InSubqueryExprContext(new ValueExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchPPLParser.RULE_valueExpression);
                        this.state = 1341;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 1343;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 110) {
                            {
                            this.state = 1342;
                            this.match(OpenSearchPPLParser.NOT);
                            }
                        }

                        this.state = 1345;
                        this.match(OpenSearchPPLParser.IN);
                        this.state = 1346;
                        this.match(OpenSearchPPLParser.LT_SQR_PRTHS);
                        this.state = 1347;
                        this.subSearch();
                        this.state = 1348;
                        this.match(OpenSearchPPLParser.RT_SQR_PRTHS);
                        }
                        break;
                    }
                    }
                }
                this.state = 1354;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 133, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public evalExpression(): EvalExpressionContext {
        let localContext = new EvalExpressionContext(this.context, this.state);
        this.enterRule(localContext, 202, OpenSearchPPLParser.RULE_evalExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1355;
            this.match(OpenSearchPPLParser.EVAL);
            this.state = 1356;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1357;
            this.logicalExpression(0);
            this.state = 1358;
            this.match(OpenSearchPPLParser.RT_PRTHS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionCall(): FunctionCallContext {
        let localContext = new FunctionCallContext(this.context, this.state);
        this.enterRule(localContext, 204, OpenSearchPPLParser.RULE_functionCall);
        try {
            this.state = 1367;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 134, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1360;
                this.evalFunctionCall();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1361;
                this.dataTypeFunctionCall();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1362;
                this.positionFunctionCall();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1363;
                this.caseFunctionCall();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1364;
                this.timestampFunctionCall();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1365;
                this.extractFunctionCall();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1366;
                this.getFormatFunctionCall();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public positionFunctionCall(): PositionFunctionCallContext {
        let localContext = new PositionFunctionCallContext(this.context, this.state);
        this.enterRule(localContext, 206, OpenSearchPPLParser.RULE_positionFunctionCall);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1369;
            this.positionFunctionName();
            this.state = 1370;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1371;
            this.functionArg();
            this.state = 1372;
            this.match(OpenSearchPPLParser.IN);
            this.state = 1373;
            this.functionArg();
            this.state = 1374;
            this.match(OpenSearchPPLParser.RT_PRTHS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public caseFunctionCall(): CaseFunctionCallContext {
        let localContext = new CaseFunctionCallContext(this.context, this.state);
        this.enterRule(localContext, 208, OpenSearchPPLParser.RULE_caseFunctionCall);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1376;
            this.match(OpenSearchPPLParser.CASE);
            this.state = 1377;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1378;
            this.logicalExpression(0);
            this.state = 1379;
            this.match(OpenSearchPPLParser.COMMA);
            this.state = 1380;
            this.valueExpression(0);
            this.state = 1388;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 161) {
                {
                {
                this.state = 1381;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1382;
                this.logicalExpression(0);
                this.state = 1383;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1384;
                this.valueExpression(0);
                }
                }
                this.state = 1390;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1393;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 106) {
                {
                this.state = 1391;
                this.match(OpenSearchPPLParser.ELSE);
                this.state = 1392;
                this.valueExpression(0);
                }
            }

            this.state = 1395;
            this.match(OpenSearchPPLParser.RT_PRTHS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public relevanceExpression(): RelevanceExpressionContext {
        let localContext = new RelevanceExpressionContext(this.context, this.state);
        this.enterRule(localContext, 210, OpenSearchPPLParser.RULE_relevanceExpression);
        try {
            this.state = 1399;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.MATCH:
            case OpenSearchPPLParser.MATCH_PHRASE:
            case OpenSearchPPLParser.MATCH_PHRASE_PREFIX:
            case OpenSearchPPLParser.MATCH_BOOL_PREFIX:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1397;
                this.singleFieldRelevanceFunction();
                }
                break;
            case OpenSearchPPLParser.SIMPLE_QUERY_STRING:
            case OpenSearchPPLParser.MULTI_MATCH:
            case OpenSearchPPLParser.QUERY_STRING:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1398;
                this.multiFieldRelevanceFunction();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public singleFieldRelevanceFunction(): SingleFieldRelevanceFunctionContext {
        let localContext = new SingleFieldRelevanceFunctionContext(this.context, this.state);
        this.enterRule(localContext, 212, OpenSearchPPLParser.RULE_singleFieldRelevanceFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1401;
            this.singleFieldRelevanceFunctionName();
            this.state = 1402;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1403;
            localContext._field = this.relevanceField();
            this.state = 1404;
            this.match(OpenSearchPPLParser.COMMA);
            this.state = 1405;
            localContext._query = this.relevanceQuery();
            this.state = 1410;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 161) {
                {
                {
                this.state = 1406;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1407;
                this.relevanceArg();
                }
                }
                this.state = 1412;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1413;
            this.match(OpenSearchPPLParser.RT_PRTHS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public multiFieldRelevanceFunction(): MultiFieldRelevanceFunctionContext {
        let localContext = new MultiFieldRelevanceFunctionContext(this.context, this.state);
        this.enterRule(localContext, 214, OpenSearchPPLParser.RULE_multiFieldRelevanceFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1415;
            this.multiFieldRelevanceFunctionName();
            this.state = 1416;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1429;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 179) {
                {
                this.state = 1417;
                this.match(OpenSearchPPLParser.LT_SQR_PRTHS);
                this.state = 1418;
                localContext._field = this.relevanceFieldAndWeight();
                this.state = 1423;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 161) {
                    {
                    {
                    this.state = 1419;
                    this.match(OpenSearchPPLParser.COMMA);
                    this.state = 1420;
                    localContext._field = this.relevanceFieldAndWeight();
                    }
                    }
                    this.state = 1425;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1426;
                this.match(OpenSearchPPLParser.RT_SQR_PRTHS);
                this.state = 1427;
                this.match(OpenSearchPPLParser.COMMA);
                }
            }

            this.state = 1431;
            localContext._query = this.relevanceQuery();
            this.state = 1436;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 161) {
                {
                {
                this.state = 1432;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1433;
                this.relevanceArg();
                }
                }
                this.state = 1438;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1439;
            this.match(OpenSearchPPLParser.RT_PRTHS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableSource(): TableSourceContext {
        let localContext = new TableSourceContext(this.context, this.state);
        this.enterRule(localContext, 216, OpenSearchPPLParser.RULE_tableSource);
        try {
            this.state = 1443;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.SEARCH:
            case OpenSearchPPLParser.DESCRIBE:
            case OpenSearchPPLParser.SHOW:
            case OpenSearchPPLParser.EXPLAIN:
            case OpenSearchPPLParser.FROM:
            case OpenSearchPPLParser.WHERE:
            case OpenSearchPPLParser.FIELDS:
            case OpenSearchPPLParser.TABLE:
            case OpenSearchPPLParser.RENAME:
            case OpenSearchPPLParser.STATS:
            case OpenSearchPPLParser.EVENTSTATS:
            case OpenSearchPPLParser.DEDUP:
            case OpenSearchPPLParser.SORT:
            case OpenSearchPPLParser.EVAL:
            case OpenSearchPPLParser.HEAD:
            case OpenSearchPPLParser.BIN:
            case OpenSearchPPLParser.TOP:
            case OpenSearchPPLParser.RARE:
            case OpenSearchPPLParser.PARSE:
            case OpenSearchPPLParser.REGEX:
            case OpenSearchPPLParser.PUNCT:
            case OpenSearchPPLParser.GROK:
            case OpenSearchPPLParser.PATTERN:
            case OpenSearchPPLParser.PATTERNS:
            case OpenSearchPPLParser.NEW_FIELD:
            case OpenSearchPPLParser.KMEANS:
            case OpenSearchPPLParser.AD:
            case OpenSearchPPLParser.ML:
            case OpenSearchPPLParser.FILLNULL:
            case OpenSearchPPLParser.FLATTEN:
            case OpenSearchPPLParser.TRENDLINE:
            case OpenSearchPPLParser.TIMECHART:
            case OpenSearchPPLParser.EXPAND:
            case OpenSearchPPLParser.VARIABLE_COUNT_THRESHOLD:
            case OpenSearchPPLParser.FREQUENCY_THRESHOLD_PERCENTAGE:
            case OpenSearchPPLParser.METHOD:
            case OpenSearchPPLParser.MAX_SAMPLE_COUNT:
            case OpenSearchPPLParser.BUFFER_LIMIT:
            case OpenSearchPPLParser.JOIN:
            case OpenSearchPPLParser.INNER:
            case OpenSearchPPLParser.OUTER:
            case OpenSearchPPLParser.FULL:
            case OpenSearchPPLParser.SEMI:
            case OpenSearchPPLParser.ANTI:
            case OpenSearchPPLParser.CROSS:
            case OpenSearchPPLParser.LEFT_HINT:
            case OpenSearchPPLParser.RIGHT_HINT:
            case OpenSearchPPLParser.SOURCE:
            case OpenSearchPPLParser.INDEX:
            case OpenSearchPPLParser.A:
            case OpenSearchPPLParser.ASC:
            case OpenSearchPPLParser.D:
            case OpenSearchPPLParser.DESC:
            case OpenSearchPPLParser.DATASOURCES:
            case OpenSearchPPLParser.USING:
            case OpenSearchPPLParser.WITH:
            case OpenSearchPPLParser.SIMPLE:
            case OpenSearchPPLParser.STANDARD:
            case OpenSearchPPLParser.COST:
            case OpenSearchPPLParser.EXTENDED:
            case OpenSearchPPLParser.OVERRIDE:
            case OpenSearchPPLParser.AUTO:
            case OpenSearchPPLParser.STR:
            case OpenSearchPPLParser.NUM:
            case OpenSearchPPLParser.SMA:
            case OpenSearchPPLParser.WMA:
            case OpenSearchPPLParser.KEEPEMPTY:
            case OpenSearchPPLParser.CONSECUTIVE:
            case OpenSearchPPLParser.DEDUP_SPLITVALUES:
            case OpenSearchPPLParser.PARTITIONS:
            case OpenSearchPPLParser.ALLNUM:
            case OpenSearchPPLParser.DELIM:
            case OpenSearchPPLParser.CENTROIDS:
            case OpenSearchPPLParser.ITERATIONS:
            case OpenSearchPPLParser.DISTANCE_TYPE:
            case OpenSearchPPLParser.NUMBER_OF_TREES:
            case OpenSearchPPLParser.SHINGLE_SIZE:
            case OpenSearchPPLParser.SAMPLE_SIZE:
            case OpenSearchPPLParser.OUTPUT_AFTER:
            case OpenSearchPPLParser.TIME_DECAY:
            case OpenSearchPPLParser.ANOMALY_RATE:
            case OpenSearchPPLParser.CATEGORY_FIELD:
            case OpenSearchPPLParser.TIME_FIELD:
            case OpenSearchPPLParser.TIME_ZONE:
            case OpenSearchPPLParser.TRAINING_DATA_SIZE:
            case OpenSearchPPLParser.ANOMALY_SCORE_THRESHOLD:
            case OpenSearchPPLParser.APPEND:
            case OpenSearchPPLParser.COUNTFIELD:
            case OpenSearchPPLParser.SHOWCOUNT:
            case OpenSearchPPLParser.INPUT:
            case OpenSearchPPLParser.OUTPUT:
            case OpenSearchPPLParser.PATH:
            case OpenSearchPPLParser.CASE:
            case OpenSearchPPLParser.ELSE:
            case OpenSearchPPLParser.IN:
            case OpenSearchPPLParser.EXISTS:
            case OpenSearchPPLParser.GEOIP:
            case OpenSearchPPLParser.REGEXP:
            case OpenSearchPPLParser.REGEX_MATCH:
            case OpenSearchPPLParser.CONVERT_TZ:
            case OpenSearchPPLParser.DATETIME:
            case OpenSearchPPLParser.DAY:
            case OpenSearchPPLParser.DAY_HOUR:
            case OpenSearchPPLParser.DAY_MICROSECOND:
            case OpenSearchPPLParser.DAY_MINUTE:
            case OpenSearchPPLParser.DAY_OF_YEAR:
            case OpenSearchPPLParser.DAY_SECOND:
            case OpenSearchPPLParser.HOUR:
            case OpenSearchPPLParser.HOUR_MICROSECOND:
            case OpenSearchPPLParser.HOUR_MINUTE:
            case OpenSearchPPLParser.HOUR_OF_DAY:
            case OpenSearchPPLParser.HOUR_SECOND:
            case OpenSearchPPLParser.INTERVAL:
            case OpenSearchPPLParser.MICROSECOND:
            case OpenSearchPPLParser.MILLISECOND:
            case OpenSearchPPLParser.MINUTE:
            case OpenSearchPPLParser.MINUTE_MICROSECOND:
            case OpenSearchPPLParser.MINUTE_OF_DAY:
            case OpenSearchPPLParser.MINUTE_OF_HOUR:
            case OpenSearchPPLParser.MINUTE_SECOND:
            case OpenSearchPPLParser.MONTH:
            case OpenSearchPPLParser.MONTH_OF_YEAR:
            case OpenSearchPPLParser.QUARTER:
            case OpenSearchPPLParser.SECOND:
            case OpenSearchPPLParser.SECOND_MICROSECOND:
            case OpenSearchPPLParser.SECOND_OF_MINUTE:
            case OpenSearchPPLParser.WEEK:
            case OpenSearchPPLParser.WEEK_OF_YEAR:
            case OpenSearchPPLParser.YEAR:
            case OpenSearchPPLParser.YEAR_MONTH:
            case OpenSearchPPLParser.LOOKUP:
            case OpenSearchPPLParser.IP:
            case OpenSearchPPLParser.DOT:
            case OpenSearchPPLParser.EQUAL:
            case OpenSearchPPLParser.DOUBLE_EQUAL:
            case OpenSearchPPLParser.GREATER:
            case OpenSearchPPLParser.LESS:
            case OpenSearchPPLParser.NOT_GREATER:
            case OpenSearchPPLParser.NOT_LESS:
            case OpenSearchPPLParser.NOT_EQUAL:
            case OpenSearchPPLParser.PLUS:
            case OpenSearchPPLParser.MINUS:
            case OpenSearchPPLParser.BACKTICK:
            case OpenSearchPPLParser.ARROW:
            case OpenSearchPPLParser.AVG:
            case OpenSearchPPLParser.COUNT:
            case OpenSearchPPLParser.DISTINCT_COUNT:
            case OpenSearchPPLParser.DISTINCT_COUNT_APPROX:
            case OpenSearchPPLParser.ESTDC:
            case OpenSearchPPLParser.ESTDC_ERROR:
            case OpenSearchPPLParser.MAX:
            case OpenSearchPPLParser.MEAN:
            case OpenSearchPPLParser.MEDIAN:
            case OpenSearchPPLParser.MIN:
            case OpenSearchPPLParser.MODE:
            case OpenSearchPPLParser.RANGE:
            case OpenSearchPPLParser.STDEV:
            case OpenSearchPPLParser.STDEVP:
            case OpenSearchPPLParser.SUM:
            case OpenSearchPPLParser.SUMSQ:
            case OpenSearchPPLParser.VAR_SAMP:
            case OpenSearchPPLParser.VAR_POP:
            case OpenSearchPPLParser.STDDEV_SAMP:
            case OpenSearchPPLParser.STDDEV_POP:
            case OpenSearchPPLParser.PERCENTILE:
            case OpenSearchPPLParser.PERCENTILE_APPROX:
            case OpenSearchPPLParser.EARLIEST:
            case OpenSearchPPLParser.LATEST:
            case OpenSearchPPLParser.TAKE:
            case OpenSearchPPLParser.LIST:
            case OpenSearchPPLParser.VALUES:
            case OpenSearchPPLParser.PER_DAY:
            case OpenSearchPPLParser.PER_HOUR:
            case OpenSearchPPLParser.PER_MINUTE:
            case OpenSearchPPLParser.PER_SECOND:
            case OpenSearchPPLParser.RATE:
            case OpenSearchPPLParser.SPARKLINE:
            case OpenSearchPPLParser.C:
            case OpenSearchPPLParser.DC:
            case OpenSearchPPLParser.ROW_NUMBER:
            case OpenSearchPPLParser.RANK:
            case OpenSearchPPLParser.DENSE_RANK:
            case OpenSearchPPLParser.PERCENT_RANK:
            case OpenSearchPPLParser.CUME_DIST:
            case OpenSearchPPLParser.FIRST:
            case OpenSearchPPLParser.LAST:
            case OpenSearchPPLParser.NTH:
            case OpenSearchPPLParser.NTILE:
            case OpenSearchPPLParser.PLUS_FUCTION:
            case OpenSearchPPLParser.MINUS_FUCTION:
            case OpenSearchPPLParser.STAR_FUNCTION:
            case OpenSearchPPLParser.DIVIDE_FUNCTION:
            case OpenSearchPPLParser.ABS:
            case OpenSearchPPLParser.CBRT:
            case OpenSearchPPLParser.CEIL:
            case OpenSearchPPLParser.CEILING:
            case OpenSearchPPLParser.CONV:
            case OpenSearchPPLParser.CRC32:
            case OpenSearchPPLParser.E:
            case OpenSearchPPLParser.EXP:
            case OpenSearchPPLParser.EXPM1:
            case OpenSearchPPLParser.FLOOR:
            case OpenSearchPPLParser.LN:
            case OpenSearchPPLParser.LOG:
            case OpenSearchPPLParser.LOG_WITH_BASE:
            case OpenSearchPPLParser.MOD:
            case OpenSearchPPLParser.MODULUS:
            case OpenSearchPPLParser.PI:
            case OpenSearchPPLParser.POSITION:
            case OpenSearchPPLParser.POW:
            case OpenSearchPPLParser.POWER:
            case OpenSearchPPLParser.RAND:
            case OpenSearchPPLParser.ROUND:
            case OpenSearchPPLParser.SIGN:
            case OpenSearchPPLParser.SQRT:
            case OpenSearchPPLParser.TRUNCATE:
            case OpenSearchPPLParser.RINT:
            case OpenSearchPPLParser.SIGNUM:
            case OpenSearchPPLParser.ACOS:
            case OpenSearchPPLParser.ASIN:
            case OpenSearchPPLParser.ATAN:
            case OpenSearchPPLParser.ATAN2:
            case OpenSearchPPLParser.COS:
            case OpenSearchPPLParser.COSH:
            case OpenSearchPPLParser.COT:
            case OpenSearchPPLParser.DEGREES:
            case OpenSearchPPLParser.RADIANS:
            case OpenSearchPPLParser.SIN:
            case OpenSearchPPLParser.SINH:
            case OpenSearchPPLParser.TAN:
            case OpenSearchPPLParser.MD5:
            case OpenSearchPPLParser.SHA1:
            case OpenSearchPPLParser.SHA2:
            case OpenSearchPPLParser.ADDDATE:
            case OpenSearchPPLParser.ADDTIME:
            case OpenSearchPPLParser.CURDATE:
            case OpenSearchPPLParser.CURRENT_DATE:
            case OpenSearchPPLParser.CURRENT_TIME:
            case OpenSearchPPLParser.CURRENT_TIMESTAMP:
            case OpenSearchPPLParser.CURTIME:
            case OpenSearchPPLParser.DATE:
            case OpenSearchPPLParser.DATEDIFF:
            case OpenSearchPPLParser.DATE_ADD:
            case OpenSearchPPLParser.DATE_FORMAT:
            case OpenSearchPPLParser.DATE_SUB:
            case OpenSearchPPLParser.DAYNAME:
            case OpenSearchPPLParser.DAYOFMONTH:
            case OpenSearchPPLParser.DAYOFWEEK:
            case OpenSearchPPLParser.DAYOFYEAR:
            case OpenSearchPPLParser.DAY_OF_MONTH:
            case OpenSearchPPLParser.DAY_OF_WEEK:
            case OpenSearchPPLParser.EXTRACT:
            case OpenSearchPPLParser.FROM_DAYS:
            case OpenSearchPPLParser.FROM_UNIXTIME:
            case OpenSearchPPLParser.GET_FORMAT:
            case OpenSearchPPLParser.LAST_DAY:
            case OpenSearchPPLParser.LOCALTIME:
            case OpenSearchPPLParser.LOCALTIMESTAMP:
            case OpenSearchPPLParser.MAKEDATE:
            case OpenSearchPPLParser.MAKETIME:
            case OpenSearchPPLParser.MONTHNAME:
            case OpenSearchPPLParser.NOW:
            case OpenSearchPPLParser.PERIOD_ADD:
            case OpenSearchPPLParser.PERIOD_DIFF:
            case OpenSearchPPLParser.SEC_TO_TIME:
            case OpenSearchPPLParser.STR_TO_DATE:
            case OpenSearchPPLParser.SUBDATE:
            case OpenSearchPPLParser.SUBTIME:
            case OpenSearchPPLParser.SYSDATE:
            case OpenSearchPPLParser.TIME:
            case OpenSearchPPLParser.TIMEDIFF:
            case OpenSearchPPLParser.TIMESTAMP:
            case OpenSearchPPLParser.TIME_FORMAT:
            case OpenSearchPPLParser.TIME_TO_SEC:
            case OpenSearchPPLParser.TO_DAYS:
            case OpenSearchPPLParser.TO_SECONDS:
            case OpenSearchPPLParser.UNIX_TIMESTAMP:
            case OpenSearchPPLParser.UTC_DATE:
            case OpenSearchPPLParser.UTC_TIME:
            case OpenSearchPPLParser.UTC_TIMESTAMP:
            case OpenSearchPPLParser.WEEKDAY:
            case OpenSearchPPLParser.YEARWEEK:
            case OpenSearchPPLParser.SUBSTR:
            case OpenSearchPPLParser.SUBSTRING:
            case OpenSearchPPLParser.LTRIM:
            case OpenSearchPPLParser.RTRIM:
            case OpenSearchPPLParser.TRIM:
            case OpenSearchPPLParser.LOWER:
            case OpenSearchPPLParser.UPPER:
            case OpenSearchPPLParser.CONCAT:
            case OpenSearchPPLParser.CONCAT_WS:
            case OpenSearchPPLParser.LENGTH:
            case OpenSearchPPLParser.STRCMP:
            case OpenSearchPPLParser.RIGHT:
            case OpenSearchPPLParser.LEFT:
            case OpenSearchPPLParser.ASCII:
            case OpenSearchPPLParser.LOCATE:
            case OpenSearchPPLParser.REPLACE:
            case OpenSearchPPLParser.REVERSE:
            case OpenSearchPPLParser.CAST:
            case OpenSearchPPLParser.LIKE:
            case OpenSearchPPLParser.ISNULL:
            case OpenSearchPPLParser.ISNOTNULL:
            case OpenSearchPPLParser.CIDRMATCH:
            case OpenSearchPPLParser.BETWEEN:
            case OpenSearchPPLParser.ISPRESENT:
            case OpenSearchPPLParser.ISEMPTY:
            case OpenSearchPPLParser.ISBLANK:
            case OpenSearchPPLParser.ARRAY:
            case OpenSearchPPLParser.ARRAY_LENGTH:
            case OpenSearchPPLParser.FORALL:
            case OpenSearchPPLParser.FILTER:
            case OpenSearchPPLParser.TRANSFORM:
            case OpenSearchPPLParser.REDUCE:
            case OpenSearchPPLParser.JSON_VALID:
            case OpenSearchPPLParser.JSON:
            case OpenSearchPPLParser.JSON_OBJECT:
            case OpenSearchPPLParser.JSON_ARRAY:
            case OpenSearchPPLParser.JSON_ARRAY_LENGTH:
            case OpenSearchPPLParser.JSON_EXTRACT:
            case OpenSearchPPLParser.JSON_KEYS:
            case OpenSearchPPLParser.JSON_SET:
            case OpenSearchPPLParser.JSON_DELETE:
            case OpenSearchPPLParser.JSON_APPEND:
            case OpenSearchPPLParser.JSON_EXTEND:
            case OpenSearchPPLParser.IFNULL:
            case OpenSearchPPLParser.NULLIF:
            case OpenSearchPPLParser.IF:
            case OpenSearchPPLParser.TYPEOF:
            case OpenSearchPPLParser.COALESCE:
            case OpenSearchPPLParser.MATCH:
            case OpenSearchPPLParser.MATCH_PHRASE:
            case OpenSearchPPLParser.MATCH_PHRASE_PREFIX:
            case OpenSearchPPLParser.MATCH_BOOL_PREFIX:
            case OpenSearchPPLParser.SIMPLE_QUERY_STRING:
            case OpenSearchPPLParser.MULTI_MATCH:
            case OpenSearchPPLParser.QUERY_STRING:
            case OpenSearchPPLParser.ALLOW_LEADING_WILDCARD:
            case OpenSearchPPLParser.ANALYZE_WILDCARD:
            case OpenSearchPPLParser.ANALYZER:
            case OpenSearchPPLParser.AUTO_GENERATE_SYNONYMS_PHRASE_QUERY:
            case OpenSearchPPLParser.BOOST:
            case OpenSearchPPLParser.CUTOFF_FREQUENCY:
            case OpenSearchPPLParser.DEFAULT_FIELD:
            case OpenSearchPPLParser.DEFAULT_OPERATOR:
            case OpenSearchPPLParser.ENABLE_POSITION_INCREMENTS:
            case OpenSearchPPLParser.ESCAPE:
            case OpenSearchPPLParser.FLAGS:
            case OpenSearchPPLParser.FUZZY_MAX_EXPANSIONS:
            case OpenSearchPPLParser.FUZZY_PREFIX_LENGTH:
            case OpenSearchPPLParser.FUZZY_TRANSPOSITIONS:
            case OpenSearchPPLParser.FUZZY_REWRITE:
            case OpenSearchPPLParser.FUZZINESS:
            case OpenSearchPPLParser.LENIENT:
            case OpenSearchPPLParser.LOW_FREQ_OPERATOR:
            case OpenSearchPPLParser.MAX_DETERMINIZED_STATES:
            case OpenSearchPPLParser.MAX_EXPANSIONS:
            case OpenSearchPPLParser.MINIMUM_SHOULD_MATCH:
            case OpenSearchPPLParser.OPERATOR:
            case OpenSearchPPLParser.PHRASE_SLOP:
            case OpenSearchPPLParser.PREFIX_LENGTH:
            case OpenSearchPPLParser.QUOTE_ANALYZER:
            case OpenSearchPPLParser.QUOTE_FIELD_SUFFIX:
            case OpenSearchPPLParser.REWRITE:
            case OpenSearchPPLParser.SLOP:
            case OpenSearchPPLParser.TIE_BREAKER:
            case OpenSearchPPLParser.TYPE:
            case OpenSearchPPLParser.ZERO_TERMS_QUERY:
            case OpenSearchPPLParser.SPAN:
            case OpenSearchPPLParser.MS:
            case OpenSearchPPLParser.S:
            case OpenSearchPPLParser.M:
            case OpenSearchPPLParser.H:
            case OpenSearchPPLParser.W:
            case OpenSearchPPLParser.Q:
            case OpenSearchPPLParser.Y:
            case OpenSearchPPLParser.SEC:
            case OpenSearchPPLParser.SECS:
            case OpenSearchPPLParser.SECONDS:
            case OpenSearchPPLParser.MINS:
            case OpenSearchPPLParser.MINUTES:
            case OpenSearchPPLParser.HR:
            case OpenSearchPPLParser.HRS:
            case OpenSearchPPLParser.HOURS:
            case OpenSearchPPLParser.DAYS:
            case OpenSearchPPLParser.MON:
            case OpenSearchPPLParser.MONTHS:
            case OpenSearchPPLParser.US:
            case OpenSearchPPLParser.CS:
            case OpenSearchPPLParser.DS:
            case OpenSearchPPLParser.PERCENTILE_SHORTCUT:
            case OpenSearchPPLParser.ID:
            case OpenSearchPPLParser.CLUSTER:
            case OpenSearchPPLParser.BQUOTA_STRING:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1441;
                this.tableQualifiedName();
                }
                break;
            case OpenSearchPPLParser.ID_DATE_SUFFIX:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1442;
                this.match(OpenSearchPPLParser.ID_DATE_SUFFIX);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableFunction(): TableFunctionContext {
        let localContext = new TableFunctionContext(this.context, this.state);
        this.enterRule(localContext, 218, OpenSearchPPLParser.RULE_tableFunction);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1445;
            this.qualifiedName();
            this.state = 1446;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1447;
            this.namedFunctionArgs();
            this.state = 1448;
            this.match(OpenSearchPPLParser.RT_PRTHS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fieldList(): FieldListContext {
        let localContext = new FieldListContext(this.context, this.state);
        this.enterRule(localContext, 220, OpenSearchPPLParser.RULE_fieldList);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1450;
            this.fieldExpression();
            this.state = 1455;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 143, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1451;
                    this.match(OpenSearchPPLParser.COMMA);
                    this.state = 1452;
                    this.fieldExpression();
                    }
                    }
                }
                this.state = 1457;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 143, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sortField(): SortFieldContext {
        let localContext = new SortFieldContext(this.context, this.state);
        this.enterRule(localContext, 222, OpenSearchPPLParser.RULE_sortField);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1459;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 144, this.context) ) {
            case 1:
                {
                this.state = 1458;
                _la = this.tokenStream.LA(1);
                if(!(_la === 170 || _la === 171)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            }
            this.state = 1461;
            this.sortFieldExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sortFieldExpression(): SortFieldExpressionContext {
        let localContext = new SortFieldExpressionContext(this.context, this.state);
        this.enterRule(localContext, 224, OpenSearchPPLParser.RULE_sortFieldExpression);
        try {
            this.state = 1484;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 145, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1463;
                this.fieldExpression();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1464;
                this.match(OpenSearchPPLParser.AUTO);
                this.state = 1465;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1466;
                this.fieldExpression();
                this.state = 1467;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1469;
                this.match(OpenSearchPPLParser.STR);
                this.state = 1470;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1471;
                this.fieldExpression();
                this.state = 1472;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1474;
                this.match(OpenSearchPPLParser.IP);
                this.state = 1475;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1476;
                this.fieldExpression();
                this.state = 1477;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1479;
                this.match(OpenSearchPPLParser.NUM);
                this.state = 1480;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1481;
                this.fieldExpression();
                this.state = 1482;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fieldExpression(): FieldExpressionContext {
        let localContext = new FieldExpressionContext(this.context, this.state);
        this.enterRule(localContext, 226, OpenSearchPPLParser.RULE_fieldExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1486;
            this.qualifiedName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public wcFieldExpression(): WcFieldExpressionContext {
        let localContext = new WcFieldExpressionContext(this.context, this.state);
        this.enterRule(localContext, 228, OpenSearchPPLParser.RULE_wcFieldExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1488;
            this.wcQualifiedName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public selectFieldExpression(): SelectFieldExpressionContext {
        let localContext = new SelectFieldExpressionContext(this.context, this.state);
        this.enterRule(localContext, 230, OpenSearchPPLParser.RULE_selectFieldExpression);
        try {
            this.state = 1492;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.SEARCH:
            case OpenSearchPPLParser.DESCRIBE:
            case OpenSearchPPLParser.SHOW:
            case OpenSearchPPLParser.EXPLAIN:
            case OpenSearchPPLParser.FROM:
            case OpenSearchPPLParser.WHERE:
            case OpenSearchPPLParser.FIELDS:
            case OpenSearchPPLParser.TABLE:
            case OpenSearchPPLParser.RENAME:
            case OpenSearchPPLParser.STATS:
            case OpenSearchPPLParser.EVENTSTATS:
            case OpenSearchPPLParser.DEDUP:
            case OpenSearchPPLParser.SORT:
            case OpenSearchPPLParser.EVAL:
            case OpenSearchPPLParser.HEAD:
            case OpenSearchPPLParser.BIN:
            case OpenSearchPPLParser.TOP:
            case OpenSearchPPLParser.RARE:
            case OpenSearchPPLParser.PARSE:
            case OpenSearchPPLParser.REGEX:
            case OpenSearchPPLParser.PUNCT:
            case OpenSearchPPLParser.GROK:
            case OpenSearchPPLParser.PATTERN:
            case OpenSearchPPLParser.PATTERNS:
            case OpenSearchPPLParser.NEW_FIELD:
            case OpenSearchPPLParser.KMEANS:
            case OpenSearchPPLParser.AD:
            case OpenSearchPPLParser.ML:
            case OpenSearchPPLParser.FILLNULL:
            case OpenSearchPPLParser.FLATTEN:
            case OpenSearchPPLParser.TRENDLINE:
            case OpenSearchPPLParser.TIMECHART:
            case OpenSearchPPLParser.EXPAND:
            case OpenSearchPPLParser.VARIABLE_COUNT_THRESHOLD:
            case OpenSearchPPLParser.FREQUENCY_THRESHOLD_PERCENTAGE:
            case OpenSearchPPLParser.METHOD:
            case OpenSearchPPLParser.MAX_SAMPLE_COUNT:
            case OpenSearchPPLParser.BUFFER_LIMIT:
            case OpenSearchPPLParser.JOIN:
            case OpenSearchPPLParser.INNER:
            case OpenSearchPPLParser.OUTER:
            case OpenSearchPPLParser.FULL:
            case OpenSearchPPLParser.SEMI:
            case OpenSearchPPLParser.ANTI:
            case OpenSearchPPLParser.CROSS:
            case OpenSearchPPLParser.LEFT_HINT:
            case OpenSearchPPLParser.RIGHT_HINT:
            case OpenSearchPPLParser.SOURCE:
            case OpenSearchPPLParser.INDEX:
            case OpenSearchPPLParser.A:
            case OpenSearchPPLParser.ASC:
            case OpenSearchPPLParser.D:
            case OpenSearchPPLParser.DESC:
            case OpenSearchPPLParser.DATASOURCES:
            case OpenSearchPPLParser.USING:
            case OpenSearchPPLParser.WITH:
            case OpenSearchPPLParser.SIMPLE:
            case OpenSearchPPLParser.STANDARD:
            case OpenSearchPPLParser.COST:
            case OpenSearchPPLParser.EXTENDED:
            case OpenSearchPPLParser.OVERRIDE:
            case OpenSearchPPLParser.AUTO:
            case OpenSearchPPLParser.STR:
            case OpenSearchPPLParser.NUM:
            case OpenSearchPPLParser.SMA:
            case OpenSearchPPLParser.WMA:
            case OpenSearchPPLParser.KEEPEMPTY:
            case OpenSearchPPLParser.CONSECUTIVE:
            case OpenSearchPPLParser.DEDUP_SPLITVALUES:
            case OpenSearchPPLParser.PARTITIONS:
            case OpenSearchPPLParser.ALLNUM:
            case OpenSearchPPLParser.DELIM:
            case OpenSearchPPLParser.CENTROIDS:
            case OpenSearchPPLParser.ITERATIONS:
            case OpenSearchPPLParser.DISTANCE_TYPE:
            case OpenSearchPPLParser.NUMBER_OF_TREES:
            case OpenSearchPPLParser.SHINGLE_SIZE:
            case OpenSearchPPLParser.SAMPLE_SIZE:
            case OpenSearchPPLParser.OUTPUT_AFTER:
            case OpenSearchPPLParser.TIME_DECAY:
            case OpenSearchPPLParser.ANOMALY_RATE:
            case OpenSearchPPLParser.CATEGORY_FIELD:
            case OpenSearchPPLParser.TIME_FIELD:
            case OpenSearchPPLParser.TIME_ZONE:
            case OpenSearchPPLParser.TRAINING_DATA_SIZE:
            case OpenSearchPPLParser.ANOMALY_SCORE_THRESHOLD:
            case OpenSearchPPLParser.APPEND:
            case OpenSearchPPLParser.COUNTFIELD:
            case OpenSearchPPLParser.SHOWCOUNT:
            case OpenSearchPPLParser.INPUT:
            case OpenSearchPPLParser.OUTPUT:
            case OpenSearchPPLParser.PATH:
            case OpenSearchPPLParser.CASE:
            case OpenSearchPPLParser.ELSE:
            case OpenSearchPPLParser.IN:
            case OpenSearchPPLParser.EXISTS:
            case OpenSearchPPLParser.GEOIP:
            case OpenSearchPPLParser.REGEXP:
            case OpenSearchPPLParser.REGEX_MATCH:
            case OpenSearchPPLParser.CONVERT_TZ:
            case OpenSearchPPLParser.DATETIME:
            case OpenSearchPPLParser.DAY:
            case OpenSearchPPLParser.DAY_HOUR:
            case OpenSearchPPLParser.DAY_MICROSECOND:
            case OpenSearchPPLParser.DAY_MINUTE:
            case OpenSearchPPLParser.DAY_OF_YEAR:
            case OpenSearchPPLParser.DAY_SECOND:
            case OpenSearchPPLParser.HOUR:
            case OpenSearchPPLParser.HOUR_MICROSECOND:
            case OpenSearchPPLParser.HOUR_MINUTE:
            case OpenSearchPPLParser.HOUR_OF_DAY:
            case OpenSearchPPLParser.HOUR_SECOND:
            case OpenSearchPPLParser.INTERVAL:
            case OpenSearchPPLParser.MICROSECOND:
            case OpenSearchPPLParser.MILLISECOND:
            case OpenSearchPPLParser.MINUTE:
            case OpenSearchPPLParser.MINUTE_MICROSECOND:
            case OpenSearchPPLParser.MINUTE_OF_DAY:
            case OpenSearchPPLParser.MINUTE_OF_HOUR:
            case OpenSearchPPLParser.MINUTE_SECOND:
            case OpenSearchPPLParser.MONTH:
            case OpenSearchPPLParser.MONTH_OF_YEAR:
            case OpenSearchPPLParser.QUARTER:
            case OpenSearchPPLParser.SECOND:
            case OpenSearchPPLParser.SECOND_MICROSECOND:
            case OpenSearchPPLParser.SECOND_OF_MINUTE:
            case OpenSearchPPLParser.WEEK:
            case OpenSearchPPLParser.WEEK_OF_YEAR:
            case OpenSearchPPLParser.YEAR:
            case OpenSearchPPLParser.YEAR_MONTH:
            case OpenSearchPPLParser.LOOKUP:
            case OpenSearchPPLParser.IP:
            case OpenSearchPPLParser.DOT:
            case OpenSearchPPLParser.EQUAL:
            case OpenSearchPPLParser.DOUBLE_EQUAL:
            case OpenSearchPPLParser.GREATER:
            case OpenSearchPPLParser.LESS:
            case OpenSearchPPLParser.NOT_GREATER:
            case OpenSearchPPLParser.NOT_LESS:
            case OpenSearchPPLParser.NOT_EQUAL:
            case OpenSearchPPLParser.PLUS:
            case OpenSearchPPLParser.MINUS:
            case OpenSearchPPLParser.SINGLE_QUOTE:
            case OpenSearchPPLParser.DOUBLE_QUOTE:
            case OpenSearchPPLParser.BACKTICK:
            case OpenSearchPPLParser.ARROW:
            case OpenSearchPPLParser.AVG:
            case OpenSearchPPLParser.COUNT:
            case OpenSearchPPLParser.DISTINCT_COUNT:
            case OpenSearchPPLParser.DISTINCT_COUNT_APPROX:
            case OpenSearchPPLParser.ESTDC:
            case OpenSearchPPLParser.ESTDC_ERROR:
            case OpenSearchPPLParser.MAX:
            case OpenSearchPPLParser.MEAN:
            case OpenSearchPPLParser.MEDIAN:
            case OpenSearchPPLParser.MIN:
            case OpenSearchPPLParser.MODE:
            case OpenSearchPPLParser.RANGE:
            case OpenSearchPPLParser.STDEV:
            case OpenSearchPPLParser.STDEVP:
            case OpenSearchPPLParser.SUM:
            case OpenSearchPPLParser.SUMSQ:
            case OpenSearchPPLParser.VAR_SAMP:
            case OpenSearchPPLParser.VAR_POP:
            case OpenSearchPPLParser.STDDEV_SAMP:
            case OpenSearchPPLParser.STDDEV_POP:
            case OpenSearchPPLParser.PERCENTILE:
            case OpenSearchPPLParser.PERCENTILE_APPROX:
            case OpenSearchPPLParser.EARLIEST:
            case OpenSearchPPLParser.LATEST:
            case OpenSearchPPLParser.TAKE:
            case OpenSearchPPLParser.LIST:
            case OpenSearchPPLParser.VALUES:
            case OpenSearchPPLParser.PER_DAY:
            case OpenSearchPPLParser.PER_HOUR:
            case OpenSearchPPLParser.PER_MINUTE:
            case OpenSearchPPLParser.PER_SECOND:
            case OpenSearchPPLParser.RATE:
            case OpenSearchPPLParser.SPARKLINE:
            case OpenSearchPPLParser.C:
            case OpenSearchPPLParser.DC:
            case OpenSearchPPLParser.ROW_NUMBER:
            case OpenSearchPPLParser.RANK:
            case OpenSearchPPLParser.DENSE_RANK:
            case OpenSearchPPLParser.PERCENT_RANK:
            case OpenSearchPPLParser.CUME_DIST:
            case OpenSearchPPLParser.FIRST:
            case OpenSearchPPLParser.LAST:
            case OpenSearchPPLParser.NTH:
            case OpenSearchPPLParser.NTILE:
            case OpenSearchPPLParser.PLUS_FUCTION:
            case OpenSearchPPLParser.MINUS_FUCTION:
            case OpenSearchPPLParser.STAR_FUNCTION:
            case OpenSearchPPLParser.DIVIDE_FUNCTION:
            case OpenSearchPPLParser.ABS:
            case OpenSearchPPLParser.CBRT:
            case OpenSearchPPLParser.CEIL:
            case OpenSearchPPLParser.CEILING:
            case OpenSearchPPLParser.CONV:
            case OpenSearchPPLParser.CRC32:
            case OpenSearchPPLParser.E:
            case OpenSearchPPLParser.EXP:
            case OpenSearchPPLParser.EXPM1:
            case OpenSearchPPLParser.FLOOR:
            case OpenSearchPPLParser.LN:
            case OpenSearchPPLParser.LOG:
            case OpenSearchPPLParser.LOG_WITH_BASE:
            case OpenSearchPPLParser.MOD:
            case OpenSearchPPLParser.MODULUS:
            case OpenSearchPPLParser.PI:
            case OpenSearchPPLParser.POSITION:
            case OpenSearchPPLParser.POW:
            case OpenSearchPPLParser.POWER:
            case OpenSearchPPLParser.RAND:
            case OpenSearchPPLParser.ROUND:
            case OpenSearchPPLParser.SIGN:
            case OpenSearchPPLParser.SQRT:
            case OpenSearchPPLParser.TRUNCATE:
            case OpenSearchPPLParser.RINT:
            case OpenSearchPPLParser.SIGNUM:
            case OpenSearchPPLParser.ACOS:
            case OpenSearchPPLParser.ASIN:
            case OpenSearchPPLParser.ATAN:
            case OpenSearchPPLParser.ATAN2:
            case OpenSearchPPLParser.COS:
            case OpenSearchPPLParser.COSH:
            case OpenSearchPPLParser.COT:
            case OpenSearchPPLParser.DEGREES:
            case OpenSearchPPLParser.RADIANS:
            case OpenSearchPPLParser.SIN:
            case OpenSearchPPLParser.SINH:
            case OpenSearchPPLParser.TAN:
            case OpenSearchPPLParser.MD5:
            case OpenSearchPPLParser.SHA1:
            case OpenSearchPPLParser.SHA2:
            case OpenSearchPPLParser.ADDDATE:
            case OpenSearchPPLParser.ADDTIME:
            case OpenSearchPPLParser.CURDATE:
            case OpenSearchPPLParser.CURRENT_DATE:
            case OpenSearchPPLParser.CURRENT_TIME:
            case OpenSearchPPLParser.CURRENT_TIMESTAMP:
            case OpenSearchPPLParser.CURTIME:
            case OpenSearchPPLParser.DATE:
            case OpenSearchPPLParser.DATEDIFF:
            case OpenSearchPPLParser.DATE_ADD:
            case OpenSearchPPLParser.DATE_FORMAT:
            case OpenSearchPPLParser.DATE_SUB:
            case OpenSearchPPLParser.DAYNAME:
            case OpenSearchPPLParser.DAYOFMONTH:
            case OpenSearchPPLParser.DAYOFWEEK:
            case OpenSearchPPLParser.DAYOFYEAR:
            case OpenSearchPPLParser.DAY_OF_MONTH:
            case OpenSearchPPLParser.DAY_OF_WEEK:
            case OpenSearchPPLParser.EXTRACT:
            case OpenSearchPPLParser.FROM_DAYS:
            case OpenSearchPPLParser.FROM_UNIXTIME:
            case OpenSearchPPLParser.GET_FORMAT:
            case OpenSearchPPLParser.LAST_DAY:
            case OpenSearchPPLParser.LOCALTIME:
            case OpenSearchPPLParser.LOCALTIMESTAMP:
            case OpenSearchPPLParser.MAKEDATE:
            case OpenSearchPPLParser.MAKETIME:
            case OpenSearchPPLParser.MONTHNAME:
            case OpenSearchPPLParser.NOW:
            case OpenSearchPPLParser.PERIOD_ADD:
            case OpenSearchPPLParser.PERIOD_DIFF:
            case OpenSearchPPLParser.SEC_TO_TIME:
            case OpenSearchPPLParser.STR_TO_DATE:
            case OpenSearchPPLParser.SUBDATE:
            case OpenSearchPPLParser.SUBTIME:
            case OpenSearchPPLParser.SYSDATE:
            case OpenSearchPPLParser.TIME:
            case OpenSearchPPLParser.TIMEDIFF:
            case OpenSearchPPLParser.TIMESTAMP:
            case OpenSearchPPLParser.TIME_FORMAT:
            case OpenSearchPPLParser.TIME_TO_SEC:
            case OpenSearchPPLParser.TO_DAYS:
            case OpenSearchPPLParser.TO_SECONDS:
            case OpenSearchPPLParser.UNIX_TIMESTAMP:
            case OpenSearchPPLParser.UTC_DATE:
            case OpenSearchPPLParser.UTC_TIME:
            case OpenSearchPPLParser.UTC_TIMESTAMP:
            case OpenSearchPPLParser.WEEKDAY:
            case OpenSearchPPLParser.YEARWEEK:
            case OpenSearchPPLParser.SUBSTR:
            case OpenSearchPPLParser.SUBSTRING:
            case OpenSearchPPLParser.LTRIM:
            case OpenSearchPPLParser.RTRIM:
            case OpenSearchPPLParser.TRIM:
            case OpenSearchPPLParser.LOWER:
            case OpenSearchPPLParser.UPPER:
            case OpenSearchPPLParser.CONCAT:
            case OpenSearchPPLParser.CONCAT_WS:
            case OpenSearchPPLParser.LENGTH:
            case OpenSearchPPLParser.STRCMP:
            case OpenSearchPPLParser.RIGHT:
            case OpenSearchPPLParser.LEFT:
            case OpenSearchPPLParser.ASCII:
            case OpenSearchPPLParser.LOCATE:
            case OpenSearchPPLParser.REPLACE:
            case OpenSearchPPLParser.REVERSE:
            case OpenSearchPPLParser.CAST:
            case OpenSearchPPLParser.LIKE:
            case OpenSearchPPLParser.ISNULL:
            case OpenSearchPPLParser.ISNOTNULL:
            case OpenSearchPPLParser.CIDRMATCH:
            case OpenSearchPPLParser.BETWEEN:
            case OpenSearchPPLParser.ISPRESENT:
            case OpenSearchPPLParser.ISEMPTY:
            case OpenSearchPPLParser.ISBLANK:
            case OpenSearchPPLParser.ARRAY:
            case OpenSearchPPLParser.ARRAY_LENGTH:
            case OpenSearchPPLParser.FORALL:
            case OpenSearchPPLParser.FILTER:
            case OpenSearchPPLParser.TRANSFORM:
            case OpenSearchPPLParser.REDUCE:
            case OpenSearchPPLParser.JSON_VALID:
            case OpenSearchPPLParser.JSON:
            case OpenSearchPPLParser.JSON_OBJECT:
            case OpenSearchPPLParser.JSON_ARRAY:
            case OpenSearchPPLParser.JSON_ARRAY_LENGTH:
            case OpenSearchPPLParser.JSON_EXTRACT:
            case OpenSearchPPLParser.JSON_KEYS:
            case OpenSearchPPLParser.JSON_SET:
            case OpenSearchPPLParser.JSON_DELETE:
            case OpenSearchPPLParser.JSON_APPEND:
            case OpenSearchPPLParser.JSON_EXTEND:
            case OpenSearchPPLParser.IFNULL:
            case OpenSearchPPLParser.NULLIF:
            case OpenSearchPPLParser.IF:
            case OpenSearchPPLParser.TYPEOF:
            case OpenSearchPPLParser.COALESCE:
            case OpenSearchPPLParser.MATCH:
            case OpenSearchPPLParser.MATCH_PHRASE:
            case OpenSearchPPLParser.MATCH_PHRASE_PREFIX:
            case OpenSearchPPLParser.MATCH_BOOL_PREFIX:
            case OpenSearchPPLParser.SIMPLE_QUERY_STRING:
            case OpenSearchPPLParser.MULTI_MATCH:
            case OpenSearchPPLParser.QUERY_STRING:
            case OpenSearchPPLParser.ALLOW_LEADING_WILDCARD:
            case OpenSearchPPLParser.ANALYZE_WILDCARD:
            case OpenSearchPPLParser.ANALYZER:
            case OpenSearchPPLParser.AUTO_GENERATE_SYNONYMS_PHRASE_QUERY:
            case OpenSearchPPLParser.BOOST:
            case OpenSearchPPLParser.CUTOFF_FREQUENCY:
            case OpenSearchPPLParser.DEFAULT_FIELD:
            case OpenSearchPPLParser.DEFAULT_OPERATOR:
            case OpenSearchPPLParser.ENABLE_POSITION_INCREMENTS:
            case OpenSearchPPLParser.ESCAPE:
            case OpenSearchPPLParser.FLAGS:
            case OpenSearchPPLParser.FUZZY_MAX_EXPANSIONS:
            case OpenSearchPPLParser.FUZZY_PREFIX_LENGTH:
            case OpenSearchPPLParser.FUZZY_TRANSPOSITIONS:
            case OpenSearchPPLParser.FUZZY_REWRITE:
            case OpenSearchPPLParser.FUZZINESS:
            case OpenSearchPPLParser.LENIENT:
            case OpenSearchPPLParser.LOW_FREQ_OPERATOR:
            case OpenSearchPPLParser.MAX_DETERMINIZED_STATES:
            case OpenSearchPPLParser.MAX_EXPANSIONS:
            case OpenSearchPPLParser.MINIMUM_SHOULD_MATCH:
            case OpenSearchPPLParser.OPERATOR:
            case OpenSearchPPLParser.PHRASE_SLOP:
            case OpenSearchPPLParser.PREFIX_LENGTH:
            case OpenSearchPPLParser.QUOTE_ANALYZER:
            case OpenSearchPPLParser.QUOTE_FIELD_SUFFIX:
            case OpenSearchPPLParser.REWRITE:
            case OpenSearchPPLParser.SLOP:
            case OpenSearchPPLParser.TIE_BREAKER:
            case OpenSearchPPLParser.TYPE:
            case OpenSearchPPLParser.ZERO_TERMS_QUERY:
            case OpenSearchPPLParser.SPAN:
            case OpenSearchPPLParser.MS:
            case OpenSearchPPLParser.S:
            case OpenSearchPPLParser.M:
            case OpenSearchPPLParser.H:
            case OpenSearchPPLParser.W:
            case OpenSearchPPLParser.Q:
            case OpenSearchPPLParser.Y:
            case OpenSearchPPLParser.SEC:
            case OpenSearchPPLParser.SECS:
            case OpenSearchPPLParser.SECONDS:
            case OpenSearchPPLParser.MINS:
            case OpenSearchPPLParser.MINUTES:
            case OpenSearchPPLParser.HR:
            case OpenSearchPPLParser.HRS:
            case OpenSearchPPLParser.HOURS:
            case OpenSearchPPLParser.DAYS:
            case OpenSearchPPLParser.MON:
            case OpenSearchPPLParser.MONTHS:
            case OpenSearchPPLParser.US:
            case OpenSearchPPLParser.CS:
            case OpenSearchPPLParser.DS:
            case OpenSearchPPLParser.PERCENTILE_SHORTCUT:
            case OpenSearchPPLParser.ID:
            case OpenSearchPPLParser.BQUOTA_STRING:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1490;
                this.wcQualifiedName();
                }
                break;
            case OpenSearchPPLParser.STAR:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1491;
                this.match(OpenSearchPPLParser.STAR);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public evalFunctionCall(): EvalFunctionCallContext {
        let localContext = new EvalFunctionCallContext(this.context, this.state);
        this.enterRule(localContext, 232, OpenSearchPPLParser.RULE_evalFunctionCall);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1494;
            this.evalFunctionName();
            this.state = 1495;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1496;
            this.functionArgs();
            this.state = 1497;
            this.match(OpenSearchPPLParser.RT_PRTHS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dataTypeFunctionCall(): DataTypeFunctionCallContext {
        let localContext = new DataTypeFunctionCallContext(this.context, this.state);
        this.enterRule(localContext, 234, OpenSearchPPLParser.RULE_dataTypeFunctionCall);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1499;
            this.match(OpenSearchPPLParser.CAST);
            this.state = 1500;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1501;
            this.logicalExpression(0);
            this.state = 1502;
            this.match(OpenSearchPPLParser.AS);
            this.state = 1503;
            this.convertedDataType();
            this.state = 1504;
            this.match(OpenSearchPPLParser.RT_PRTHS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public convertedDataType(): ConvertedDataTypeContext {
        let localContext = new ConvertedDataTypeContext(this.context, this.state);
        this.enterRule(localContext, 236, OpenSearchPPLParser.RULE_convertedDataType);
        try {
            this.state = 1518;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.DATE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1506;
                localContext._typeName = this.match(OpenSearchPPLParser.DATE);
                }
                break;
            case OpenSearchPPLParser.TIME:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1507;
                localContext._typeName = this.match(OpenSearchPPLParser.TIME);
                }
                break;
            case OpenSearchPPLParser.TIMESTAMP:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1508;
                localContext._typeName = this.match(OpenSearchPPLParser.TIMESTAMP);
                }
                break;
            case OpenSearchPPLParser.INT:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1509;
                localContext._typeName = this.match(OpenSearchPPLParser.INT);
                }
                break;
            case OpenSearchPPLParser.INTEGER:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1510;
                localContext._typeName = this.match(OpenSearchPPLParser.INTEGER);
                }
                break;
            case OpenSearchPPLParser.DOUBLE:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1511;
                localContext._typeName = this.match(OpenSearchPPLParser.DOUBLE);
                }
                break;
            case OpenSearchPPLParser.LONG:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1512;
                localContext._typeName = this.match(OpenSearchPPLParser.LONG);
                }
                break;
            case OpenSearchPPLParser.FLOAT:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1513;
                localContext._typeName = this.match(OpenSearchPPLParser.FLOAT);
                }
                break;
            case OpenSearchPPLParser.STRING:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1514;
                localContext._typeName = this.match(OpenSearchPPLParser.STRING);
                }
                break;
            case OpenSearchPPLParser.BOOLEAN:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1515;
                localContext._typeName = this.match(OpenSearchPPLParser.BOOLEAN);
                }
                break;
            case OpenSearchPPLParser.IP:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1516;
                localContext._typeName = this.match(OpenSearchPPLParser.IP);
                }
                break;
            case OpenSearchPPLParser.JSON:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 1517;
                localContext._typeName = this.match(OpenSearchPPLParser.JSON);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public evalFunctionName(): EvalFunctionNameContext {
        let localContext = new EvalFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 238, OpenSearchPPLParser.RULE_evalFunctionName);
        try {
            this.state = 1531;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.AVG:
            case OpenSearchPPLParser.SUM:
            case OpenSearchPPLParser.PLUS_FUCTION:
            case OpenSearchPPLParser.MINUS_FUCTION:
            case OpenSearchPPLParser.STAR_FUNCTION:
            case OpenSearchPPLParser.DIVIDE_FUNCTION:
            case OpenSearchPPLParser.ABS:
            case OpenSearchPPLParser.CBRT:
            case OpenSearchPPLParser.CEIL:
            case OpenSearchPPLParser.CEILING:
            case OpenSearchPPLParser.CONV:
            case OpenSearchPPLParser.CRC32:
            case OpenSearchPPLParser.E:
            case OpenSearchPPLParser.EXP:
            case OpenSearchPPLParser.EXPM1:
            case OpenSearchPPLParser.FLOOR:
            case OpenSearchPPLParser.LN:
            case OpenSearchPPLParser.LOG:
            case OpenSearchPPLParser.LOG_WITH_BASE:
            case OpenSearchPPLParser.MOD:
            case OpenSearchPPLParser.MODULUS:
            case OpenSearchPPLParser.PI:
            case OpenSearchPPLParser.POW:
            case OpenSearchPPLParser.POWER:
            case OpenSearchPPLParser.RAND:
            case OpenSearchPPLParser.ROUND:
            case OpenSearchPPLParser.SIGN:
            case OpenSearchPPLParser.SQRT:
            case OpenSearchPPLParser.TRUNCATE:
            case OpenSearchPPLParser.RINT:
            case OpenSearchPPLParser.SIGNUM:
            case OpenSearchPPLParser.ACOS:
            case OpenSearchPPLParser.ASIN:
            case OpenSearchPPLParser.ATAN:
            case OpenSearchPPLParser.ATAN2:
            case OpenSearchPPLParser.COS:
            case OpenSearchPPLParser.COSH:
            case OpenSearchPPLParser.COT:
            case OpenSearchPPLParser.DEGREES:
            case OpenSearchPPLParser.RADIANS:
            case OpenSearchPPLParser.SIN:
            case OpenSearchPPLParser.SINH:
            case OpenSearchPPLParser.TAN:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1520;
                this.mathematicalFunctionName();
                }
                break;
            case OpenSearchPPLParser.CONVERT_TZ:
            case OpenSearchPPLParser.DATETIME:
            case OpenSearchPPLParser.DAY:
            case OpenSearchPPLParser.DAY_OF_YEAR:
            case OpenSearchPPLParser.HOUR:
            case OpenSearchPPLParser.HOUR_OF_DAY:
            case OpenSearchPPLParser.MICROSECOND:
            case OpenSearchPPLParser.MINUTE:
            case OpenSearchPPLParser.MINUTE_OF_DAY:
            case OpenSearchPPLParser.MINUTE_OF_HOUR:
            case OpenSearchPPLParser.MONTH:
            case OpenSearchPPLParser.MONTH_OF_YEAR:
            case OpenSearchPPLParser.QUARTER:
            case OpenSearchPPLParser.SECOND:
            case OpenSearchPPLParser.SECOND_OF_MINUTE:
            case OpenSearchPPLParser.WEEK:
            case OpenSearchPPLParser.WEEK_OF_YEAR:
            case OpenSearchPPLParser.YEAR:
            case OpenSearchPPLParser.ADDDATE:
            case OpenSearchPPLParser.ADDTIME:
            case OpenSearchPPLParser.CURDATE:
            case OpenSearchPPLParser.CURRENT_DATE:
            case OpenSearchPPLParser.CURRENT_TIME:
            case OpenSearchPPLParser.CURRENT_TIMESTAMP:
            case OpenSearchPPLParser.CURTIME:
            case OpenSearchPPLParser.DATE:
            case OpenSearchPPLParser.DATEDIFF:
            case OpenSearchPPLParser.DATE_ADD:
            case OpenSearchPPLParser.DATE_FORMAT:
            case OpenSearchPPLParser.DATE_SUB:
            case OpenSearchPPLParser.DAYNAME:
            case OpenSearchPPLParser.DAYOFMONTH:
            case OpenSearchPPLParser.DAYOFWEEK:
            case OpenSearchPPLParser.DAYOFYEAR:
            case OpenSearchPPLParser.DAY_OF_MONTH:
            case OpenSearchPPLParser.DAY_OF_WEEK:
            case OpenSearchPPLParser.FROM_DAYS:
            case OpenSearchPPLParser.FROM_UNIXTIME:
            case OpenSearchPPLParser.LAST_DAY:
            case OpenSearchPPLParser.LOCALTIME:
            case OpenSearchPPLParser.LOCALTIMESTAMP:
            case OpenSearchPPLParser.MAKEDATE:
            case OpenSearchPPLParser.MAKETIME:
            case OpenSearchPPLParser.MONTHNAME:
            case OpenSearchPPLParser.NOW:
            case OpenSearchPPLParser.PERIOD_ADD:
            case OpenSearchPPLParser.PERIOD_DIFF:
            case OpenSearchPPLParser.SEC_TO_TIME:
            case OpenSearchPPLParser.STR_TO_DATE:
            case OpenSearchPPLParser.SUBDATE:
            case OpenSearchPPLParser.SUBTIME:
            case OpenSearchPPLParser.SYSDATE:
            case OpenSearchPPLParser.TIME:
            case OpenSearchPPLParser.TIMEDIFF:
            case OpenSearchPPLParser.TIMESTAMP:
            case OpenSearchPPLParser.TIME_FORMAT:
            case OpenSearchPPLParser.TIME_TO_SEC:
            case OpenSearchPPLParser.TO_DAYS:
            case OpenSearchPPLParser.TO_SECONDS:
            case OpenSearchPPLParser.UNIX_TIMESTAMP:
            case OpenSearchPPLParser.UTC_DATE:
            case OpenSearchPPLParser.UTC_TIME:
            case OpenSearchPPLParser.UTC_TIMESTAMP:
            case OpenSearchPPLParser.WEEKDAY:
            case OpenSearchPPLParser.YEARWEEK:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1521;
                this.dateTimeFunctionName();
                }
                break;
            case OpenSearchPPLParser.SUBSTR:
            case OpenSearchPPLParser.SUBSTRING:
            case OpenSearchPPLParser.LTRIM:
            case OpenSearchPPLParser.RTRIM:
            case OpenSearchPPLParser.TRIM:
            case OpenSearchPPLParser.LOWER:
            case OpenSearchPPLParser.UPPER:
            case OpenSearchPPLParser.CONCAT:
            case OpenSearchPPLParser.CONCAT_WS:
            case OpenSearchPPLParser.LENGTH:
            case OpenSearchPPLParser.STRCMP:
            case OpenSearchPPLParser.RIGHT:
            case OpenSearchPPLParser.LEFT:
            case OpenSearchPPLParser.ASCII:
            case OpenSearchPPLParser.LOCATE:
            case OpenSearchPPLParser.REPLACE:
            case OpenSearchPPLParser.REVERSE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1522;
                this.textFunctionName();
                }
                break;
            case OpenSearchPPLParser.REGEX_MATCH:
            case OpenSearchPPLParser.EARLIEST:
            case OpenSearchPPLParser.LATEST:
            case OpenSearchPPLParser.LIKE:
            case OpenSearchPPLParser.ISNULL:
            case OpenSearchPPLParser.ISNOTNULL:
            case OpenSearchPPLParser.CIDRMATCH:
            case OpenSearchPPLParser.ISPRESENT:
            case OpenSearchPPLParser.ISEMPTY:
            case OpenSearchPPLParser.ISBLANK:
            case OpenSearchPPLParser.JSON_VALID:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1523;
                this.conditionFunctionName();
                }
                break;
            case OpenSearchPPLParser.IFNULL:
            case OpenSearchPPLParser.NULLIF:
            case OpenSearchPPLParser.IF:
            case OpenSearchPPLParser.COALESCE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1524;
                this.flowControlFunctionName();
                }
                break;
            case OpenSearchPPLParser.TYPEOF:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1525;
                this.systemFunctionName();
                }
                break;
            case OpenSearchPPLParser.POSITION:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1526;
                this.positionFunctionName();
                }
                break;
            case OpenSearchPPLParser.MD5:
            case OpenSearchPPLParser.SHA1:
            case OpenSearchPPLParser.SHA2:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1527;
                this.cryptographicFunctionName();
                }
                break;
            case OpenSearchPPLParser.JSON:
            case OpenSearchPPLParser.JSON_OBJECT:
            case OpenSearchPPLParser.JSON_ARRAY:
            case OpenSearchPPLParser.JSON_ARRAY_LENGTH:
            case OpenSearchPPLParser.JSON_EXTRACT:
            case OpenSearchPPLParser.JSON_KEYS:
            case OpenSearchPPLParser.JSON_SET:
            case OpenSearchPPLParser.JSON_DELETE:
            case OpenSearchPPLParser.JSON_APPEND:
            case OpenSearchPPLParser.JSON_EXTEND:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1528;
                this.jsonFunctionName();
                }
                break;
            case OpenSearchPPLParser.GEOIP:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1529;
                this.geoipFunctionName();
                }
                break;
            case OpenSearchPPLParser.EXISTS:
            case OpenSearchPPLParser.ARRAY:
            case OpenSearchPPLParser.ARRAY_LENGTH:
            case OpenSearchPPLParser.FORALL:
            case OpenSearchPPLParser.FILTER:
            case OpenSearchPPLParser.TRANSFORM:
            case OpenSearchPPLParser.REDUCE:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1530;
                this.collectionFunctionName();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionArgs(): FunctionArgsContext {
        let localContext = new FunctionArgsContext(this.context, this.state);
        this.enterRule(localContext, 240, OpenSearchPPLParser.RULE_functionArgs);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1541;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4292870140) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4244590487) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294737871) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 2153775103) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 4051862527) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 4294901759) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 4294967295) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 4294967295) !== 0) || ((((_la - 290)) & ~0x1F) === 0 && ((1 << (_la - 290)) & 4294967295) !== 0) || ((((_la - 322)) & ~0x1F) === 0 && ((1 << (_la - 322)) & 4294950911) !== 0) || ((((_la - 354)) & ~0x1F) === 0 && ((1 << (_la - 354)) & 4294967295) !== 0) || ((((_la - 386)) & ~0x1F) === 0 && ((1 << (_la - 386)) & 4294967295) !== 0) || ((((_la - 418)) & ~0x1F) === 0 && ((1 << (_la - 418)) & 3758096321) !== 0) || ((((_la - 450)) & ~0x1F) === 0 && ((1 << (_la - 450)) & 59) !== 0)) {
                {
                this.state = 1533;
                this.functionArg();
                this.state = 1538;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 161) {
                    {
                    {
                    this.state = 1534;
                    this.match(OpenSearchPPLParser.COMMA);
                    this.state = 1535;
                    this.functionArg();
                    }
                    }
                    this.state = 1540;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public namedFunctionArgs(): NamedFunctionArgsContext {
        let localContext = new NamedFunctionArgsContext(this.context, this.state);
        this.enterRule(localContext, 242, OpenSearchPPLParser.RULE_namedFunctionArgs);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1551;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4292870140) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4244590487) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294737871) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 2153775103) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 4051862527) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 4294901759) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 4294967295) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 4294967295) !== 0) || ((((_la - 290)) & ~0x1F) === 0 && ((1 << (_la - 290)) & 4294967295) !== 0) || ((((_la - 322)) & ~0x1F) === 0 && ((1 << (_la - 322)) & 4294950911) !== 0) || ((((_la - 354)) & ~0x1F) === 0 && ((1 << (_la - 354)) & 4294967295) !== 0) || ((((_la - 386)) & ~0x1F) === 0 && ((1 << (_la - 386)) & 4294967295) !== 0) || ((((_la - 418)) & ~0x1F) === 0 && ((1 << (_la - 418)) & 3758096321) !== 0) || ((((_la - 450)) & ~0x1F) === 0 && ((1 << (_la - 450)) & 59) !== 0)) {
                {
                this.state = 1543;
                this.namedFunctionArg();
                this.state = 1548;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 161) {
                    {
                    {
                    this.state = 1544;
                    this.match(OpenSearchPPLParser.COMMA);
                    this.state = 1545;
                    this.namedFunctionArg();
                    }
                    }
                    this.state = 1550;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionArg(): FunctionArgContext {
        let localContext = new FunctionArgContext(this.context, this.state);
        this.enterRule(localContext, 244, OpenSearchPPLParser.RULE_functionArg);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1553;
            this.functionArgExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public namedFunctionArg(): NamedFunctionArgContext {
        let localContext = new NamedFunctionArgContext(this.context, this.state);
        this.enterRule(localContext, 246, OpenSearchPPLParser.RULE_namedFunctionArg);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1558;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 153, this.context) ) {
            case 1:
                {
                this.state = 1555;
                this.ident();
                this.state = 1556;
                this.match(OpenSearchPPLParser.EQUAL);
                }
                break;
            }
            this.state = 1560;
            this.functionArgExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionArgExpression(): FunctionArgExpressionContext {
        let localContext = new FunctionArgExpressionContext(this.context, this.state);
        this.enterRule(localContext, 248, OpenSearchPPLParser.RULE_functionArgExpression);
        try {
            this.state = 1564;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 154, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1562;
                this.lambda();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1563;
                this.logicalExpression(0);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lambda(): LambdaContext {
        let localContext = new LambdaContext(this.context, this.state);
        this.enterRule(localContext, 250, OpenSearchPPLParser.RULE_lambda);
        let _la: number;
        try {
            this.state = 1582;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.SEARCH:
            case OpenSearchPPLParser.DESCRIBE:
            case OpenSearchPPLParser.SHOW:
            case OpenSearchPPLParser.EXPLAIN:
            case OpenSearchPPLParser.FROM:
            case OpenSearchPPLParser.WHERE:
            case OpenSearchPPLParser.FIELDS:
            case OpenSearchPPLParser.TABLE:
            case OpenSearchPPLParser.RENAME:
            case OpenSearchPPLParser.STATS:
            case OpenSearchPPLParser.EVENTSTATS:
            case OpenSearchPPLParser.DEDUP:
            case OpenSearchPPLParser.SORT:
            case OpenSearchPPLParser.EVAL:
            case OpenSearchPPLParser.HEAD:
            case OpenSearchPPLParser.BIN:
            case OpenSearchPPLParser.TOP:
            case OpenSearchPPLParser.RARE:
            case OpenSearchPPLParser.PARSE:
            case OpenSearchPPLParser.REGEX:
            case OpenSearchPPLParser.PUNCT:
            case OpenSearchPPLParser.GROK:
            case OpenSearchPPLParser.PATTERN:
            case OpenSearchPPLParser.PATTERNS:
            case OpenSearchPPLParser.NEW_FIELD:
            case OpenSearchPPLParser.KMEANS:
            case OpenSearchPPLParser.AD:
            case OpenSearchPPLParser.ML:
            case OpenSearchPPLParser.FILLNULL:
            case OpenSearchPPLParser.FLATTEN:
            case OpenSearchPPLParser.TRENDLINE:
            case OpenSearchPPLParser.TIMECHART:
            case OpenSearchPPLParser.EXPAND:
            case OpenSearchPPLParser.VARIABLE_COUNT_THRESHOLD:
            case OpenSearchPPLParser.FREQUENCY_THRESHOLD_PERCENTAGE:
            case OpenSearchPPLParser.METHOD:
            case OpenSearchPPLParser.MAX_SAMPLE_COUNT:
            case OpenSearchPPLParser.BUFFER_LIMIT:
            case OpenSearchPPLParser.JOIN:
            case OpenSearchPPLParser.INNER:
            case OpenSearchPPLParser.OUTER:
            case OpenSearchPPLParser.FULL:
            case OpenSearchPPLParser.SEMI:
            case OpenSearchPPLParser.ANTI:
            case OpenSearchPPLParser.CROSS:
            case OpenSearchPPLParser.LEFT_HINT:
            case OpenSearchPPLParser.RIGHT_HINT:
            case OpenSearchPPLParser.SOURCE:
            case OpenSearchPPLParser.INDEX:
            case OpenSearchPPLParser.A:
            case OpenSearchPPLParser.ASC:
            case OpenSearchPPLParser.D:
            case OpenSearchPPLParser.DESC:
            case OpenSearchPPLParser.DATASOURCES:
            case OpenSearchPPLParser.USING:
            case OpenSearchPPLParser.WITH:
            case OpenSearchPPLParser.SIMPLE:
            case OpenSearchPPLParser.STANDARD:
            case OpenSearchPPLParser.COST:
            case OpenSearchPPLParser.EXTENDED:
            case OpenSearchPPLParser.OVERRIDE:
            case OpenSearchPPLParser.AUTO:
            case OpenSearchPPLParser.STR:
            case OpenSearchPPLParser.NUM:
            case OpenSearchPPLParser.SMA:
            case OpenSearchPPLParser.WMA:
            case OpenSearchPPLParser.KEEPEMPTY:
            case OpenSearchPPLParser.CONSECUTIVE:
            case OpenSearchPPLParser.DEDUP_SPLITVALUES:
            case OpenSearchPPLParser.PARTITIONS:
            case OpenSearchPPLParser.ALLNUM:
            case OpenSearchPPLParser.DELIM:
            case OpenSearchPPLParser.CENTROIDS:
            case OpenSearchPPLParser.ITERATIONS:
            case OpenSearchPPLParser.DISTANCE_TYPE:
            case OpenSearchPPLParser.NUMBER_OF_TREES:
            case OpenSearchPPLParser.SHINGLE_SIZE:
            case OpenSearchPPLParser.SAMPLE_SIZE:
            case OpenSearchPPLParser.OUTPUT_AFTER:
            case OpenSearchPPLParser.TIME_DECAY:
            case OpenSearchPPLParser.ANOMALY_RATE:
            case OpenSearchPPLParser.CATEGORY_FIELD:
            case OpenSearchPPLParser.TIME_FIELD:
            case OpenSearchPPLParser.TIME_ZONE:
            case OpenSearchPPLParser.TRAINING_DATA_SIZE:
            case OpenSearchPPLParser.ANOMALY_SCORE_THRESHOLD:
            case OpenSearchPPLParser.APPEND:
            case OpenSearchPPLParser.COUNTFIELD:
            case OpenSearchPPLParser.SHOWCOUNT:
            case OpenSearchPPLParser.INPUT:
            case OpenSearchPPLParser.OUTPUT:
            case OpenSearchPPLParser.PATH:
            case OpenSearchPPLParser.CASE:
            case OpenSearchPPLParser.ELSE:
            case OpenSearchPPLParser.IN:
            case OpenSearchPPLParser.EXISTS:
            case OpenSearchPPLParser.GEOIP:
            case OpenSearchPPLParser.REGEXP:
            case OpenSearchPPLParser.REGEX_MATCH:
            case OpenSearchPPLParser.CONVERT_TZ:
            case OpenSearchPPLParser.DATETIME:
            case OpenSearchPPLParser.DAY:
            case OpenSearchPPLParser.DAY_HOUR:
            case OpenSearchPPLParser.DAY_MICROSECOND:
            case OpenSearchPPLParser.DAY_MINUTE:
            case OpenSearchPPLParser.DAY_OF_YEAR:
            case OpenSearchPPLParser.DAY_SECOND:
            case OpenSearchPPLParser.HOUR:
            case OpenSearchPPLParser.HOUR_MICROSECOND:
            case OpenSearchPPLParser.HOUR_MINUTE:
            case OpenSearchPPLParser.HOUR_OF_DAY:
            case OpenSearchPPLParser.HOUR_SECOND:
            case OpenSearchPPLParser.INTERVAL:
            case OpenSearchPPLParser.MICROSECOND:
            case OpenSearchPPLParser.MILLISECOND:
            case OpenSearchPPLParser.MINUTE:
            case OpenSearchPPLParser.MINUTE_MICROSECOND:
            case OpenSearchPPLParser.MINUTE_OF_DAY:
            case OpenSearchPPLParser.MINUTE_OF_HOUR:
            case OpenSearchPPLParser.MINUTE_SECOND:
            case OpenSearchPPLParser.MONTH:
            case OpenSearchPPLParser.MONTH_OF_YEAR:
            case OpenSearchPPLParser.QUARTER:
            case OpenSearchPPLParser.SECOND:
            case OpenSearchPPLParser.SECOND_MICROSECOND:
            case OpenSearchPPLParser.SECOND_OF_MINUTE:
            case OpenSearchPPLParser.WEEK:
            case OpenSearchPPLParser.WEEK_OF_YEAR:
            case OpenSearchPPLParser.YEAR:
            case OpenSearchPPLParser.YEAR_MONTH:
            case OpenSearchPPLParser.LOOKUP:
            case OpenSearchPPLParser.IP:
            case OpenSearchPPLParser.DOT:
            case OpenSearchPPLParser.EQUAL:
            case OpenSearchPPLParser.DOUBLE_EQUAL:
            case OpenSearchPPLParser.GREATER:
            case OpenSearchPPLParser.LESS:
            case OpenSearchPPLParser.NOT_GREATER:
            case OpenSearchPPLParser.NOT_LESS:
            case OpenSearchPPLParser.NOT_EQUAL:
            case OpenSearchPPLParser.PLUS:
            case OpenSearchPPLParser.MINUS:
            case OpenSearchPPLParser.BACKTICK:
            case OpenSearchPPLParser.ARROW:
            case OpenSearchPPLParser.AVG:
            case OpenSearchPPLParser.COUNT:
            case OpenSearchPPLParser.DISTINCT_COUNT:
            case OpenSearchPPLParser.DISTINCT_COUNT_APPROX:
            case OpenSearchPPLParser.ESTDC:
            case OpenSearchPPLParser.ESTDC_ERROR:
            case OpenSearchPPLParser.MAX:
            case OpenSearchPPLParser.MEAN:
            case OpenSearchPPLParser.MEDIAN:
            case OpenSearchPPLParser.MIN:
            case OpenSearchPPLParser.MODE:
            case OpenSearchPPLParser.RANGE:
            case OpenSearchPPLParser.STDEV:
            case OpenSearchPPLParser.STDEVP:
            case OpenSearchPPLParser.SUM:
            case OpenSearchPPLParser.SUMSQ:
            case OpenSearchPPLParser.VAR_SAMP:
            case OpenSearchPPLParser.VAR_POP:
            case OpenSearchPPLParser.STDDEV_SAMP:
            case OpenSearchPPLParser.STDDEV_POP:
            case OpenSearchPPLParser.PERCENTILE:
            case OpenSearchPPLParser.PERCENTILE_APPROX:
            case OpenSearchPPLParser.EARLIEST:
            case OpenSearchPPLParser.LATEST:
            case OpenSearchPPLParser.TAKE:
            case OpenSearchPPLParser.LIST:
            case OpenSearchPPLParser.VALUES:
            case OpenSearchPPLParser.PER_DAY:
            case OpenSearchPPLParser.PER_HOUR:
            case OpenSearchPPLParser.PER_MINUTE:
            case OpenSearchPPLParser.PER_SECOND:
            case OpenSearchPPLParser.RATE:
            case OpenSearchPPLParser.SPARKLINE:
            case OpenSearchPPLParser.C:
            case OpenSearchPPLParser.DC:
            case OpenSearchPPLParser.ROW_NUMBER:
            case OpenSearchPPLParser.RANK:
            case OpenSearchPPLParser.DENSE_RANK:
            case OpenSearchPPLParser.PERCENT_RANK:
            case OpenSearchPPLParser.CUME_DIST:
            case OpenSearchPPLParser.FIRST:
            case OpenSearchPPLParser.LAST:
            case OpenSearchPPLParser.NTH:
            case OpenSearchPPLParser.NTILE:
            case OpenSearchPPLParser.PLUS_FUCTION:
            case OpenSearchPPLParser.MINUS_FUCTION:
            case OpenSearchPPLParser.STAR_FUNCTION:
            case OpenSearchPPLParser.DIVIDE_FUNCTION:
            case OpenSearchPPLParser.ABS:
            case OpenSearchPPLParser.CBRT:
            case OpenSearchPPLParser.CEIL:
            case OpenSearchPPLParser.CEILING:
            case OpenSearchPPLParser.CONV:
            case OpenSearchPPLParser.CRC32:
            case OpenSearchPPLParser.E:
            case OpenSearchPPLParser.EXP:
            case OpenSearchPPLParser.EXPM1:
            case OpenSearchPPLParser.FLOOR:
            case OpenSearchPPLParser.LN:
            case OpenSearchPPLParser.LOG:
            case OpenSearchPPLParser.LOG_WITH_BASE:
            case OpenSearchPPLParser.MOD:
            case OpenSearchPPLParser.MODULUS:
            case OpenSearchPPLParser.PI:
            case OpenSearchPPLParser.POSITION:
            case OpenSearchPPLParser.POW:
            case OpenSearchPPLParser.POWER:
            case OpenSearchPPLParser.RAND:
            case OpenSearchPPLParser.ROUND:
            case OpenSearchPPLParser.SIGN:
            case OpenSearchPPLParser.SQRT:
            case OpenSearchPPLParser.TRUNCATE:
            case OpenSearchPPLParser.RINT:
            case OpenSearchPPLParser.SIGNUM:
            case OpenSearchPPLParser.ACOS:
            case OpenSearchPPLParser.ASIN:
            case OpenSearchPPLParser.ATAN:
            case OpenSearchPPLParser.ATAN2:
            case OpenSearchPPLParser.COS:
            case OpenSearchPPLParser.COSH:
            case OpenSearchPPLParser.COT:
            case OpenSearchPPLParser.DEGREES:
            case OpenSearchPPLParser.RADIANS:
            case OpenSearchPPLParser.SIN:
            case OpenSearchPPLParser.SINH:
            case OpenSearchPPLParser.TAN:
            case OpenSearchPPLParser.MD5:
            case OpenSearchPPLParser.SHA1:
            case OpenSearchPPLParser.SHA2:
            case OpenSearchPPLParser.ADDDATE:
            case OpenSearchPPLParser.ADDTIME:
            case OpenSearchPPLParser.CURDATE:
            case OpenSearchPPLParser.CURRENT_DATE:
            case OpenSearchPPLParser.CURRENT_TIME:
            case OpenSearchPPLParser.CURRENT_TIMESTAMP:
            case OpenSearchPPLParser.CURTIME:
            case OpenSearchPPLParser.DATE:
            case OpenSearchPPLParser.DATEDIFF:
            case OpenSearchPPLParser.DATE_ADD:
            case OpenSearchPPLParser.DATE_FORMAT:
            case OpenSearchPPLParser.DATE_SUB:
            case OpenSearchPPLParser.DAYNAME:
            case OpenSearchPPLParser.DAYOFMONTH:
            case OpenSearchPPLParser.DAYOFWEEK:
            case OpenSearchPPLParser.DAYOFYEAR:
            case OpenSearchPPLParser.DAY_OF_MONTH:
            case OpenSearchPPLParser.DAY_OF_WEEK:
            case OpenSearchPPLParser.EXTRACT:
            case OpenSearchPPLParser.FROM_DAYS:
            case OpenSearchPPLParser.FROM_UNIXTIME:
            case OpenSearchPPLParser.GET_FORMAT:
            case OpenSearchPPLParser.LAST_DAY:
            case OpenSearchPPLParser.LOCALTIME:
            case OpenSearchPPLParser.LOCALTIMESTAMP:
            case OpenSearchPPLParser.MAKEDATE:
            case OpenSearchPPLParser.MAKETIME:
            case OpenSearchPPLParser.MONTHNAME:
            case OpenSearchPPLParser.NOW:
            case OpenSearchPPLParser.PERIOD_ADD:
            case OpenSearchPPLParser.PERIOD_DIFF:
            case OpenSearchPPLParser.SEC_TO_TIME:
            case OpenSearchPPLParser.STR_TO_DATE:
            case OpenSearchPPLParser.SUBDATE:
            case OpenSearchPPLParser.SUBTIME:
            case OpenSearchPPLParser.SYSDATE:
            case OpenSearchPPLParser.TIME:
            case OpenSearchPPLParser.TIMEDIFF:
            case OpenSearchPPLParser.TIMESTAMP:
            case OpenSearchPPLParser.TIME_FORMAT:
            case OpenSearchPPLParser.TIME_TO_SEC:
            case OpenSearchPPLParser.TO_DAYS:
            case OpenSearchPPLParser.TO_SECONDS:
            case OpenSearchPPLParser.UNIX_TIMESTAMP:
            case OpenSearchPPLParser.UTC_DATE:
            case OpenSearchPPLParser.UTC_TIME:
            case OpenSearchPPLParser.UTC_TIMESTAMP:
            case OpenSearchPPLParser.WEEKDAY:
            case OpenSearchPPLParser.YEARWEEK:
            case OpenSearchPPLParser.SUBSTR:
            case OpenSearchPPLParser.SUBSTRING:
            case OpenSearchPPLParser.LTRIM:
            case OpenSearchPPLParser.RTRIM:
            case OpenSearchPPLParser.TRIM:
            case OpenSearchPPLParser.LOWER:
            case OpenSearchPPLParser.UPPER:
            case OpenSearchPPLParser.CONCAT:
            case OpenSearchPPLParser.CONCAT_WS:
            case OpenSearchPPLParser.LENGTH:
            case OpenSearchPPLParser.STRCMP:
            case OpenSearchPPLParser.RIGHT:
            case OpenSearchPPLParser.LEFT:
            case OpenSearchPPLParser.ASCII:
            case OpenSearchPPLParser.LOCATE:
            case OpenSearchPPLParser.REPLACE:
            case OpenSearchPPLParser.REVERSE:
            case OpenSearchPPLParser.CAST:
            case OpenSearchPPLParser.LIKE:
            case OpenSearchPPLParser.ISNULL:
            case OpenSearchPPLParser.ISNOTNULL:
            case OpenSearchPPLParser.CIDRMATCH:
            case OpenSearchPPLParser.BETWEEN:
            case OpenSearchPPLParser.ISPRESENT:
            case OpenSearchPPLParser.ISEMPTY:
            case OpenSearchPPLParser.ISBLANK:
            case OpenSearchPPLParser.ARRAY:
            case OpenSearchPPLParser.ARRAY_LENGTH:
            case OpenSearchPPLParser.FORALL:
            case OpenSearchPPLParser.FILTER:
            case OpenSearchPPLParser.TRANSFORM:
            case OpenSearchPPLParser.REDUCE:
            case OpenSearchPPLParser.JSON_VALID:
            case OpenSearchPPLParser.JSON:
            case OpenSearchPPLParser.JSON_OBJECT:
            case OpenSearchPPLParser.JSON_ARRAY:
            case OpenSearchPPLParser.JSON_ARRAY_LENGTH:
            case OpenSearchPPLParser.JSON_EXTRACT:
            case OpenSearchPPLParser.JSON_KEYS:
            case OpenSearchPPLParser.JSON_SET:
            case OpenSearchPPLParser.JSON_DELETE:
            case OpenSearchPPLParser.JSON_APPEND:
            case OpenSearchPPLParser.JSON_EXTEND:
            case OpenSearchPPLParser.IFNULL:
            case OpenSearchPPLParser.NULLIF:
            case OpenSearchPPLParser.IF:
            case OpenSearchPPLParser.TYPEOF:
            case OpenSearchPPLParser.COALESCE:
            case OpenSearchPPLParser.MATCH:
            case OpenSearchPPLParser.MATCH_PHRASE:
            case OpenSearchPPLParser.MATCH_PHRASE_PREFIX:
            case OpenSearchPPLParser.MATCH_BOOL_PREFIX:
            case OpenSearchPPLParser.SIMPLE_QUERY_STRING:
            case OpenSearchPPLParser.MULTI_MATCH:
            case OpenSearchPPLParser.QUERY_STRING:
            case OpenSearchPPLParser.ALLOW_LEADING_WILDCARD:
            case OpenSearchPPLParser.ANALYZE_WILDCARD:
            case OpenSearchPPLParser.ANALYZER:
            case OpenSearchPPLParser.AUTO_GENERATE_SYNONYMS_PHRASE_QUERY:
            case OpenSearchPPLParser.BOOST:
            case OpenSearchPPLParser.CUTOFF_FREQUENCY:
            case OpenSearchPPLParser.DEFAULT_FIELD:
            case OpenSearchPPLParser.DEFAULT_OPERATOR:
            case OpenSearchPPLParser.ENABLE_POSITION_INCREMENTS:
            case OpenSearchPPLParser.ESCAPE:
            case OpenSearchPPLParser.FLAGS:
            case OpenSearchPPLParser.FUZZY_MAX_EXPANSIONS:
            case OpenSearchPPLParser.FUZZY_PREFIX_LENGTH:
            case OpenSearchPPLParser.FUZZY_TRANSPOSITIONS:
            case OpenSearchPPLParser.FUZZY_REWRITE:
            case OpenSearchPPLParser.FUZZINESS:
            case OpenSearchPPLParser.LENIENT:
            case OpenSearchPPLParser.LOW_FREQ_OPERATOR:
            case OpenSearchPPLParser.MAX_DETERMINIZED_STATES:
            case OpenSearchPPLParser.MAX_EXPANSIONS:
            case OpenSearchPPLParser.MINIMUM_SHOULD_MATCH:
            case OpenSearchPPLParser.OPERATOR:
            case OpenSearchPPLParser.PHRASE_SLOP:
            case OpenSearchPPLParser.PREFIX_LENGTH:
            case OpenSearchPPLParser.QUOTE_ANALYZER:
            case OpenSearchPPLParser.QUOTE_FIELD_SUFFIX:
            case OpenSearchPPLParser.REWRITE:
            case OpenSearchPPLParser.SLOP:
            case OpenSearchPPLParser.TIE_BREAKER:
            case OpenSearchPPLParser.TYPE:
            case OpenSearchPPLParser.ZERO_TERMS_QUERY:
            case OpenSearchPPLParser.SPAN:
            case OpenSearchPPLParser.MS:
            case OpenSearchPPLParser.S:
            case OpenSearchPPLParser.M:
            case OpenSearchPPLParser.H:
            case OpenSearchPPLParser.W:
            case OpenSearchPPLParser.Q:
            case OpenSearchPPLParser.Y:
            case OpenSearchPPLParser.SEC:
            case OpenSearchPPLParser.SECS:
            case OpenSearchPPLParser.SECONDS:
            case OpenSearchPPLParser.MINS:
            case OpenSearchPPLParser.MINUTES:
            case OpenSearchPPLParser.HR:
            case OpenSearchPPLParser.HRS:
            case OpenSearchPPLParser.HOURS:
            case OpenSearchPPLParser.DAYS:
            case OpenSearchPPLParser.MON:
            case OpenSearchPPLParser.MONTHS:
            case OpenSearchPPLParser.US:
            case OpenSearchPPLParser.CS:
            case OpenSearchPPLParser.DS:
            case OpenSearchPPLParser.PERCENTILE_SHORTCUT:
            case OpenSearchPPLParser.ID:
            case OpenSearchPPLParser.BQUOTA_STRING:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1566;
                this.ident();
                this.state = 1567;
                this.match(OpenSearchPPLParser.ARROW);
                this.state = 1568;
                this.logicalExpression(0);
                }
                break;
            case OpenSearchPPLParser.LT_PRTHS:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1570;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1571;
                this.ident();
                this.state = 1574;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1572;
                    this.match(OpenSearchPPLParser.COMMA);
                    this.state = 1573;
                    this.ident();
                    }
                    }
                    this.state = 1576;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 161);
                this.state = 1578;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                this.state = 1579;
                this.match(OpenSearchPPLParser.ARROW);
                this.state = 1580;
                this.logicalExpression(0);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public relevanceArg(): RelevanceArgContext {
        let localContext = new RelevanceArgContext(this.context, this.state);
        this.enterRule(localContext, 252, OpenSearchPPLParser.RULE_relevanceArg);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1584;
            this.relevanceArgName();
            this.state = 1585;
            this.match(OpenSearchPPLParser.EQUAL);
            this.state = 1586;
            this.relevanceArgValue();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public relevanceArgName(): RelevanceArgNameContext {
        let localContext = new RelevanceArgNameContext(this.context, this.state);
        this.enterRule(localContext, 254, OpenSearchPPLParser.RULE_relevanceArgName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1588;
            _la = this.tokenStream.LA(1);
            if(!(_la === 8 || _la === 94 || ((((_la - 387)) & ~0x1F) === 0 && ((1 << (_la - 387)) & 2147483647) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public relevanceFieldAndWeight(): RelevanceFieldAndWeightContext {
        let localContext = new RelevanceFieldAndWeightContext(this.context, this.state);
        this.enterRule(localContext, 256, OpenSearchPPLParser.RULE_relevanceFieldAndWeight);
        try {
            this.state = 1598;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 157, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1590;
                localContext._field = this.relevanceField();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1591;
                localContext._field = this.relevanceField();
                this.state = 1592;
                localContext._weight = this.relevanceFieldWeight();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1594;
                localContext._field = this.relevanceField();
                this.state = 1595;
                this.match(OpenSearchPPLParser.BIT_XOR_OP);
                this.state = 1596;
                localContext._weight = this.relevanceFieldWeight();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public relevanceFieldWeight(): RelevanceFieldWeightContext {
        let localContext = new RelevanceFieldWeightContext(this.context, this.state);
        this.enterRule(localContext, 258, OpenSearchPPLParser.RULE_relevanceFieldWeight);
        try {
            this.state = 1604;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 158, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1600;
                this.integerLiteral();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1601;
                this.decimalLiteral();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1602;
                this.doubleLiteral();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1603;
                this.floatLiteral();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public relevanceField(): RelevanceFieldContext {
        let localContext = new RelevanceFieldContext(this.context, this.state);
        this.enterRule(localContext, 260, OpenSearchPPLParser.RULE_relevanceField);
        try {
            this.state = 1608;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.SEARCH:
            case OpenSearchPPLParser.DESCRIBE:
            case OpenSearchPPLParser.SHOW:
            case OpenSearchPPLParser.EXPLAIN:
            case OpenSearchPPLParser.FROM:
            case OpenSearchPPLParser.WHERE:
            case OpenSearchPPLParser.FIELDS:
            case OpenSearchPPLParser.TABLE:
            case OpenSearchPPLParser.RENAME:
            case OpenSearchPPLParser.STATS:
            case OpenSearchPPLParser.EVENTSTATS:
            case OpenSearchPPLParser.DEDUP:
            case OpenSearchPPLParser.SORT:
            case OpenSearchPPLParser.EVAL:
            case OpenSearchPPLParser.HEAD:
            case OpenSearchPPLParser.BIN:
            case OpenSearchPPLParser.TOP:
            case OpenSearchPPLParser.RARE:
            case OpenSearchPPLParser.PARSE:
            case OpenSearchPPLParser.REGEX:
            case OpenSearchPPLParser.PUNCT:
            case OpenSearchPPLParser.GROK:
            case OpenSearchPPLParser.PATTERN:
            case OpenSearchPPLParser.PATTERNS:
            case OpenSearchPPLParser.NEW_FIELD:
            case OpenSearchPPLParser.KMEANS:
            case OpenSearchPPLParser.AD:
            case OpenSearchPPLParser.ML:
            case OpenSearchPPLParser.FILLNULL:
            case OpenSearchPPLParser.FLATTEN:
            case OpenSearchPPLParser.TRENDLINE:
            case OpenSearchPPLParser.TIMECHART:
            case OpenSearchPPLParser.EXPAND:
            case OpenSearchPPLParser.VARIABLE_COUNT_THRESHOLD:
            case OpenSearchPPLParser.FREQUENCY_THRESHOLD_PERCENTAGE:
            case OpenSearchPPLParser.METHOD:
            case OpenSearchPPLParser.MAX_SAMPLE_COUNT:
            case OpenSearchPPLParser.BUFFER_LIMIT:
            case OpenSearchPPLParser.JOIN:
            case OpenSearchPPLParser.INNER:
            case OpenSearchPPLParser.OUTER:
            case OpenSearchPPLParser.FULL:
            case OpenSearchPPLParser.SEMI:
            case OpenSearchPPLParser.ANTI:
            case OpenSearchPPLParser.CROSS:
            case OpenSearchPPLParser.LEFT_HINT:
            case OpenSearchPPLParser.RIGHT_HINT:
            case OpenSearchPPLParser.SOURCE:
            case OpenSearchPPLParser.INDEX:
            case OpenSearchPPLParser.A:
            case OpenSearchPPLParser.ASC:
            case OpenSearchPPLParser.D:
            case OpenSearchPPLParser.DESC:
            case OpenSearchPPLParser.DATASOURCES:
            case OpenSearchPPLParser.USING:
            case OpenSearchPPLParser.WITH:
            case OpenSearchPPLParser.SIMPLE:
            case OpenSearchPPLParser.STANDARD:
            case OpenSearchPPLParser.COST:
            case OpenSearchPPLParser.EXTENDED:
            case OpenSearchPPLParser.OVERRIDE:
            case OpenSearchPPLParser.AUTO:
            case OpenSearchPPLParser.STR:
            case OpenSearchPPLParser.NUM:
            case OpenSearchPPLParser.SMA:
            case OpenSearchPPLParser.WMA:
            case OpenSearchPPLParser.KEEPEMPTY:
            case OpenSearchPPLParser.CONSECUTIVE:
            case OpenSearchPPLParser.DEDUP_SPLITVALUES:
            case OpenSearchPPLParser.PARTITIONS:
            case OpenSearchPPLParser.ALLNUM:
            case OpenSearchPPLParser.DELIM:
            case OpenSearchPPLParser.CENTROIDS:
            case OpenSearchPPLParser.ITERATIONS:
            case OpenSearchPPLParser.DISTANCE_TYPE:
            case OpenSearchPPLParser.NUMBER_OF_TREES:
            case OpenSearchPPLParser.SHINGLE_SIZE:
            case OpenSearchPPLParser.SAMPLE_SIZE:
            case OpenSearchPPLParser.OUTPUT_AFTER:
            case OpenSearchPPLParser.TIME_DECAY:
            case OpenSearchPPLParser.ANOMALY_RATE:
            case OpenSearchPPLParser.CATEGORY_FIELD:
            case OpenSearchPPLParser.TIME_FIELD:
            case OpenSearchPPLParser.TIME_ZONE:
            case OpenSearchPPLParser.TRAINING_DATA_SIZE:
            case OpenSearchPPLParser.ANOMALY_SCORE_THRESHOLD:
            case OpenSearchPPLParser.APPEND:
            case OpenSearchPPLParser.COUNTFIELD:
            case OpenSearchPPLParser.SHOWCOUNT:
            case OpenSearchPPLParser.INPUT:
            case OpenSearchPPLParser.OUTPUT:
            case OpenSearchPPLParser.PATH:
            case OpenSearchPPLParser.CASE:
            case OpenSearchPPLParser.ELSE:
            case OpenSearchPPLParser.IN:
            case OpenSearchPPLParser.EXISTS:
            case OpenSearchPPLParser.GEOIP:
            case OpenSearchPPLParser.REGEXP:
            case OpenSearchPPLParser.REGEX_MATCH:
            case OpenSearchPPLParser.CONVERT_TZ:
            case OpenSearchPPLParser.DATETIME:
            case OpenSearchPPLParser.DAY:
            case OpenSearchPPLParser.DAY_HOUR:
            case OpenSearchPPLParser.DAY_MICROSECOND:
            case OpenSearchPPLParser.DAY_MINUTE:
            case OpenSearchPPLParser.DAY_OF_YEAR:
            case OpenSearchPPLParser.DAY_SECOND:
            case OpenSearchPPLParser.HOUR:
            case OpenSearchPPLParser.HOUR_MICROSECOND:
            case OpenSearchPPLParser.HOUR_MINUTE:
            case OpenSearchPPLParser.HOUR_OF_DAY:
            case OpenSearchPPLParser.HOUR_SECOND:
            case OpenSearchPPLParser.INTERVAL:
            case OpenSearchPPLParser.MICROSECOND:
            case OpenSearchPPLParser.MILLISECOND:
            case OpenSearchPPLParser.MINUTE:
            case OpenSearchPPLParser.MINUTE_MICROSECOND:
            case OpenSearchPPLParser.MINUTE_OF_DAY:
            case OpenSearchPPLParser.MINUTE_OF_HOUR:
            case OpenSearchPPLParser.MINUTE_SECOND:
            case OpenSearchPPLParser.MONTH:
            case OpenSearchPPLParser.MONTH_OF_YEAR:
            case OpenSearchPPLParser.QUARTER:
            case OpenSearchPPLParser.SECOND:
            case OpenSearchPPLParser.SECOND_MICROSECOND:
            case OpenSearchPPLParser.SECOND_OF_MINUTE:
            case OpenSearchPPLParser.WEEK:
            case OpenSearchPPLParser.WEEK_OF_YEAR:
            case OpenSearchPPLParser.YEAR:
            case OpenSearchPPLParser.YEAR_MONTH:
            case OpenSearchPPLParser.LOOKUP:
            case OpenSearchPPLParser.IP:
            case OpenSearchPPLParser.DOT:
            case OpenSearchPPLParser.EQUAL:
            case OpenSearchPPLParser.DOUBLE_EQUAL:
            case OpenSearchPPLParser.GREATER:
            case OpenSearchPPLParser.LESS:
            case OpenSearchPPLParser.NOT_GREATER:
            case OpenSearchPPLParser.NOT_LESS:
            case OpenSearchPPLParser.NOT_EQUAL:
            case OpenSearchPPLParser.PLUS:
            case OpenSearchPPLParser.MINUS:
            case OpenSearchPPLParser.BACKTICK:
            case OpenSearchPPLParser.ARROW:
            case OpenSearchPPLParser.AVG:
            case OpenSearchPPLParser.COUNT:
            case OpenSearchPPLParser.DISTINCT_COUNT:
            case OpenSearchPPLParser.DISTINCT_COUNT_APPROX:
            case OpenSearchPPLParser.ESTDC:
            case OpenSearchPPLParser.ESTDC_ERROR:
            case OpenSearchPPLParser.MAX:
            case OpenSearchPPLParser.MEAN:
            case OpenSearchPPLParser.MEDIAN:
            case OpenSearchPPLParser.MIN:
            case OpenSearchPPLParser.MODE:
            case OpenSearchPPLParser.RANGE:
            case OpenSearchPPLParser.STDEV:
            case OpenSearchPPLParser.STDEVP:
            case OpenSearchPPLParser.SUM:
            case OpenSearchPPLParser.SUMSQ:
            case OpenSearchPPLParser.VAR_SAMP:
            case OpenSearchPPLParser.VAR_POP:
            case OpenSearchPPLParser.STDDEV_SAMP:
            case OpenSearchPPLParser.STDDEV_POP:
            case OpenSearchPPLParser.PERCENTILE:
            case OpenSearchPPLParser.PERCENTILE_APPROX:
            case OpenSearchPPLParser.EARLIEST:
            case OpenSearchPPLParser.LATEST:
            case OpenSearchPPLParser.TAKE:
            case OpenSearchPPLParser.LIST:
            case OpenSearchPPLParser.VALUES:
            case OpenSearchPPLParser.PER_DAY:
            case OpenSearchPPLParser.PER_HOUR:
            case OpenSearchPPLParser.PER_MINUTE:
            case OpenSearchPPLParser.PER_SECOND:
            case OpenSearchPPLParser.RATE:
            case OpenSearchPPLParser.SPARKLINE:
            case OpenSearchPPLParser.C:
            case OpenSearchPPLParser.DC:
            case OpenSearchPPLParser.ROW_NUMBER:
            case OpenSearchPPLParser.RANK:
            case OpenSearchPPLParser.DENSE_RANK:
            case OpenSearchPPLParser.PERCENT_RANK:
            case OpenSearchPPLParser.CUME_DIST:
            case OpenSearchPPLParser.FIRST:
            case OpenSearchPPLParser.LAST:
            case OpenSearchPPLParser.NTH:
            case OpenSearchPPLParser.NTILE:
            case OpenSearchPPLParser.PLUS_FUCTION:
            case OpenSearchPPLParser.MINUS_FUCTION:
            case OpenSearchPPLParser.STAR_FUNCTION:
            case OpenSearchPPLParser.DIVIDE_FUNCTION:
            case OpenSearchPPLParser.ABS:
            case OpenSearchPPLParser.CBRT:
            case OpenSearchPPLParser.CEIL:
            case OpenSearchPPLParser.CEILING:
            case OpenSearchPPLParser.CONV:
            case OpenSearchPPLParser.CRC32:
            case OpenSearchPPLParser.E:
            case OpenSearchPPLParser.EXP:
            case OpenSearchPPLParser.EXPM1:
            case OpenSearchPPLParser.FLOOR:
            case OpenSearchPPLParser.LN:
            case OpenSearchPPLParser.LOG:
            case OpenSearchPPLParser.LOG_WITH_BASE:
            case OpenSearchPPLParser.MOD:
            case OpenSearchPPLParser.MODULUS:
            case OpenSearchPPLParser.PI:
            case OpenSearchPPLParser.POSITION:
            case OpenSearchPPLParser.POW:
            case OpenSearchPPLParser.POWER:
            case OpenSearchPPLParser.RAND:
            case OpenSearchPPLParser.ROUND:
            case OpenSearchPPLParser.SIGN:
            case OpenSearchPPLParser.SQRT:
            case OpenSearchPPLParser.TRUNCATE:
            case OpenSearchPPLParser.RINT:
            case OpenSearchPPLParser.SIGNUM:
            case OpenSearchPPLParser.ACOS:
            case OpenSearchPPLParser.ASIN:
            case OpenSearchPPLParser.ATAN:
            case OpenSearchPPLParser.ATAN2:
            case OpenSearchPPLParser.COS:
            case OpenSearchPPLParser.COSH:
            case OpenSearchPPLParser.COT:
            case OpenSearchPPLParser.DEGREES:
            case OpenSearchPPLParser.RADIANS:
            case OpenSearchPPLParser.SIN:
            case OpenSearchPPLParser.SINH:
            case OpenSearchPPLParser.TAN:
            case OpenSearchPPLParser.MD5:
            case OpenSearchPPLParser.SHA1:
            case OpenSearchPPLParser.SHA2:
            case OpenSearchPPLParser.ADDDATE:
            case OpenSearchPPLParser.ADDTIME:
            case OpenSearchPPLParser.CURDATE:
            case OpenSearchPPLParser.CURRENT_DATE:
            case OpenSearchPPLParser.CURRENT_TIME:
            case OpenSearchPPLParser.CURRENT_TIMESTAMP:
            case OpenSearchPPLParser.CURTIME:
            case OpenSearchPPLParser.DATE:
            case OpenSearchPPLParser.DATEDIFF:
            case OpenSearchPPLParser.DATE_ADD:
            case OpenSearchPPLParser.DATE_FORMAT:
            case OpenSearchPPLParser.DATE_SUB:
            case OpenSearchPPLParser.DAYNAME:
            case OpenSearchPPLParser.DAYOFMONTH:
            case OpenSearchPPLParser.DAYOFWEEK:
            case OpenSearchPPLParser.DAYOFYEAR:
            case OpenSearchPPLParser.DAY_OF_MONTH:
            case OpenSearchPPLParser.DAY_OF_WEEK:
            case OpenSearchPPLParser.EXTRACT:
            case OpenSearchPPLParser.FROM_DAYS:
            case OpenSearchPPLParser.FROM_UNIXTIME:
            case OpenSearchPPLParser.GET_FORMAT:
            case OpenSearchPPLParser.LAST_DAY:
            case OpenSearchPPLParser.LOCALTIME:
            case OpenSearchPPLParser.LOCALTIMESTAMP:
            case OpenSearchPPLParser.MAKEDATE:
            case OpenSearchPPLParser.MAKETIME:
            case OpenSearchPPLParser.MONTHNAME:
            case OpenSearchPPLParser.NOW:
            case OpenSearchPPLParser.PERIOD_ADD:
            case OpenSearchPPLParser.PERIOD_DIFF:
            case OpenSearchPPLParser.SEC_TO_TIME:
            case OpenSearchPPLParser.STR_TO_DATE:
            case OpenSearchPPLParser.SUBDATE:
            case OpenSearchPPLParser.SUBTIME:
            case OpenSearchPPLParser.SYSDATE:
            case OpenSearchPPLParser.TIME:
            case OpenSearchPPLParser.TIMEDIFF:
            case OpenSearchPPLParser.TIMESTAMP:
            case OpenSearchPPLParser.TIME_FORMAT:
            case OpenSearchPPLParser.TIME_TO_SEC:
            case OpenSearchPPLParser.TO_DAYS:
            case OpenSearchPPLParser.TO_SECONDS:
            case OpenSearchPPLParser.UNIX_TIMESTAMP:
            case OpenSearchPPLParser.UTC_DATE:
            case OpenSearchPPLParser.UTC_TIME:
            case OpenSearchPPLParser.UTC_TIMESTAMP:
            case OpenSearchPPLParser.WEEKDAY:
            case OpenSearchPPLParser.YEARWEEK:
            case OpenSearchPPLParser.SUBSTR:
            case OpenSearchPPLParser.SUBSTRING:
            case OpenSearchPPLParser.LTRIM:
            case OpenSearchPPLParser.RTRIM:
            case OpenSearchPPLParser.TRIM:
            case OpenSearchPPLParser.LOWER:
            case OpenSearchPPLParser.UPPER:
            case OpenSearchPPLParser.CONCAT:
            case OpenSearchPPLParser.CONCAT_WS:
            case OpenSearchPPLParser.LENGTH:
            case OpenSearchPPLParser.STRCMP:
            case OpenSearchPPLParser.RIGHT:
            case OpenSearchPPLParser.LEFT:
            case OpenSearchPPLParser.ASCII:
            case OpenSearchPPLParser.LOCATE:
            case OpenSearchPPLParser.REPLACE:
            case OpenSearchPPLParser.REVERSE:
            case OpenSearchPPLParser.CAST:
            case OpenSearchPPLParser.LIKE:
            case OpenSearchPPLParser.ISNULL:
            case OpenSearchPPLParser.ISNOTNULL:
            case OpenSearchPPLParser.CIDRMATCH:
            case OpenSearchPPLParser.BETWEEN:
            case OpenSearchPPLParser.ISPRESENT:
            case OpenSearchPPLParser.ISEMPTY:
            case OpenSearchPPLParser.ISBLANK:
            case OpenSearchPPLParser.ARRAY:
            case OpenSearchPPLParser.ARRAY_LENGTH:
            case OpenSearchPPLParser.FORALL:
            case OpenSearchPPLParser.FILTER:
            case OpenSearchPPLParser.TRANSFORM:
            case OpenSearchPPLParser.REDUCE:
            case OpenSearchPPLParser.JSON_VALID:
            case OpenSearchPPLParser.JSON:
            case OpenSearchPPLParser.JSON_OBJECT:
            case OpenSearchPPLParser.JSON_ARRAY:
            case OpenSearchPPLParser.JSON_ARRAY_LENGTH:
            case OpenSearchPPLParser.JSON_EXTRACT:
            case OpenSearchPPLParser.JSON_KEYS:
            case OpenSearchPPLParser.JSON_SET:
            case OpenSearchPPLParser.JSON_DELETE:
            case OpenSearchPPLParser.JSON_APPEND:
            case OpenSearchPPLParser.JSON_EXTEND:
            case OpenSearchPPLParser.IFNULL:
            case OpenSearchPPLParser.NULLIF:
            case OpenSearchPPLParser.IF:
            case OpenSearchPPLParser.TYPEOF:
            case OpenSearchPPLParser.COALESCE:
            case OpenSearchPPLParser.MATCH:
            case OpenSearchPPLParser.MATCH_PHRASE:
            case OpenSearchPPLParser.MATCH_PHRASE_PREFIX:
            case OpenSearchPPLParser.MATCH_BOOL_PREFIX:
            case OpenSearchPPLParser.SIMPLE_QUERY_STRING:
            case OpenSearchPPLParser.MULTI_MATCH:
            case OpenSearchPPLParser.QUERY_STRING:
            case OpenSearchPPLParser.ALLOW_LEADING_WILDCARD:
            case OpenSearchPPLParser.ANALYZE_WILDCARD:
            case OpenSearchPPLParser.ANALYZER:
            case OpenSearchPPLParser.AUTO_GENERATE_SYNONYMS_PHRASE_QUERY:
            case OpenSearchPPLParser.BOOST:
            case OpenSearchPPLParser.CUTOFF_FREQUENCY:
            case OpenSearchPPLParser.DEFAULT_FIELD:
            case OpenSearchPPLParser.DEFAULT_OPERATOR:
            case OpenSearchPPLParser.ENABLE_POSITION_INCREMENTS:
            case OpenSearchPPLParser.ESCAPE:
            case OpenSearchPPLParser.FLAGS:
            case OpenSearchPPLParser.FUZZY_MAX_EXPANSIONS:
            case OpenSearchPPLParser.FUZZY_PREFIX_LENGTH:
            case OpenSearchPPLParser.FUZZY_TRANSPOSITIONS:
            case OpenSearchPPLParser.FUZZY_REWRITE:
            case OpenSearchPPLParser.FUZZINESS:
            case OpenSearchPPLParser.LENIENT:
            case OpenSearchPPLParser.LOW_FREQ_OPERATOR:
            case OpenSearchPPLParser.MAX_DETERMINIZED_STATES:
            case OpenSearchPPLParser.MAX_EXPANSIONS:
            case OpenSearchPPLParser.MINIMUM_SHOULD_MATCH:
            case OpenSearchPPLParser.OPERATOR:
            case OpenSearchPPLParser.PHRASE_SLOP:
            case OpenSearchPPLParser.PREFIX_LENGTH:
            case OpenSearchPPLParser.QUOTE_ANALYZER:
            case OpenSearchPPLParser.QUOTE_FIELD_SUFFIX:
            case OpenSearchPPLParser.REWRITE:
            case OpenSearchPPLParser.SLOP:
            case OpenSearchPPLParser.TIE_BREAKER:
            case OpenSearchPPLParser.TYPE:
            case OpenSearchPPLParser.ZERO_TERMS_QUERY:
            case OpenSearchPPLParser.SPAN:
            case OpenSearchPPLParser.MS:
            case OpenSearchPPLParser.S:
            case OpenSearchPPLParser.M:
            case OpenSearchPPLParser.H:
            case OpenSearchPPLParser.W:
            case OpenSearchPPLParser.Q:
            case OpenSearchPPLParser.Y:
            case OpenSearchPPLParser.SEC:
            case OpenSearchPPLParser.SECS:
            case OpenSearchPPLParser.SECONDS:
            case OpenSearchPPLParser.MINS:
            case OpenSearchPPLParser.MINUTES:
            case OpenSearchPPLParser.HR:
            case OpenSearchPPLParser.HRS:
            case OpenSearchPPLParser.HOURS:
            case OpenSearchPPLParser.DAYS:
            case OpenSearchPPLParser.MON:
            case OpenSearchPPLParser.MONTHS:
            case OpenSearchPPLParser.US:
            case OpenSearchPPLParser.CS:
            case OpenSearchPPLParser.DS:
            case OpenSearchPPLParser.PERCENTILE_SHORTCUT:
            case OpenSearchPPLParser.ID:
            case OpenSearchPPLParser.BQUOTA_STRING:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1606;
                this.qualifiedName();
                }
                break;
            case OpenSearchPPLParser.DQUOTA_STRING:
            case OpenSearchPPLParser.SQUOTA_STRING:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1607;
                this.stringLiteral();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public relevanceQuery(): RelevanceQueryContext {
        let localContext = new RelevanceQueryContext(this.context, this.state);
        this.enterRule(localContext, 262, OpenSearchPPLParser.RULE_relevanceQuery);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1610;
            this.relevanceArgValue();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public relevanceArgValue(): RelevanceArgValueContext {
        let localContext = new RelevanceArgValueContext(this.context, this.state);
        this.enterRule(localContext, 264, OpenSearchPPLParser.RULE_relevanceArgValue);
        try {
            this.state = 1614;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 160, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1612;
                this.qualifiedName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1613;
                this.literalValue();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mathematicalFunctionName(): MathematicalFunctionNameContext {
        let localContext = new MathematicalFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 266, OpenSearchPPLParser.RULE_mathematicalFunctionName);
        try {
            this.state = 1648;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.ABS:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1616;
                this.match(OpenSearchPPLParser.ABS);
                }
                break;
            case OpenSearchPPLParser.PLUS_FUCTION:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1617;
                this.match(OpenSearchPPLParser.PLUS_FUCTION);
                }
                break;
            case OpenSearchPPLParser.MINUS_FUCTION:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1618;
                this.match(OpenSearchPPLParser.MINUS_FUCTION);
                }
                break;
            case OpenSearchPPLParser.STAR_FUNCTION:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1619;
                this.match(OpenSearchPPLParser.STAR_FUNCTION);
                }
                break;
            case OpenSearchPPLParser.DIVIDE_FUNCTION:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1620;
                this.match(OpenSearchPPLParser.DIVIDE_FUNCTION);
                }
                break;
            case OpenSearchPPLParser.CBRT:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1621;
                this.match(OpenSearchPPLParser.CBRT);
                }
                break;
            case OpenSearchPPLParser.CEIL:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1622;
                this.match(OpenSearchPPLParser.CEIL);
                }
                break;
            case OpenSearchPPLParser.CEILING:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1623;
                this.match(OpenSearchPPLParser.CEILING);
                }
                break;
            case OpenSearchPPLParser.CONV:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1624;
                this.match(OpenSearchPPLParser.CONV);
                }
                break;
            case OpenSearchPPLParser.CRC32:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1625;
                this.match(OpenSearchPPLParser.CRC32);
                }
                break;
            case OpenSearchPPLParser.E:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1626;
                this.match(OpenSearchPPLParser.E);
                }
                break;
            case OpenSearchPPLParser.EXP:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 1627;
                this.match(OpenSearchPPLParser.EXP);
                }
                break;
            case OpenSearchPPLParser.EXPM1:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 1628;
                this.match(OpenSearchPPLParser.EXPM1);
                }
                break;
            case OpenSearchPPLParser.FLOOR:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 1629;
                this.match(OpenSearchPPLParser.FLOOR);
                }
                break;
            case OpenSearchPPLParser.LN:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 1630;
                this.match(OpenSearchPPLParser.LN);
                }
                break;
            case OpenSearchPPLParser.LOG:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 1631;
                this.match(OpenSearchPPLParser.LOG);
                }
                break;
            case OpenSearchPPLParser.LOG_WITH_BASE:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 1632;
                this.match(OpenSearchPPLParser.LOG_WITH_BASE);
                }
                break;
            case OpenSearchPPLParser.MOD:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 1633;
                this.match(OpenSearchPPLParser.MOD);
                }
                break;
            case OpenSearchPPLParser.MODULUS:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 1634;
                this.match(OpenSearchPPLParser.MODULUS);
                }
                break;
            case OpenSearchPPLParser.PI:
                this.enterOuterAlt(localContext, 20);
                {
                this.state = 1635;
                this.match(OpenSearchPPLParser.PI);
                }
                break;
            case OpenSearchPPLParser.POW:
                this.enterOuterAlt(localContext, 21);
                {
                this.state = 1636;
                this.match(OpenSearchPPLParser.POW);
                }
                break;
            case OpenSearchPPLParser.POWER:
                this.enterOuterAlt(localContext, 22);
                {
                this.state = 1637;
                this.match(OpenSearchPPLParser.POWER);
                }
                break;
            case OpenSearchPPLParser.RAND:
                this.enterOuterAlt(localContext, 23);
                {
                this.state = 1638;
                this.match(OpenSearchPPLParser.RAND);
                }
                break;
            case OpenSearchPPLParser.ROUND:
                this.enterOuterAlt(localContext, 24);
                {
                this.state = 1639;
                this.match(OpenSearchPPLParser.ROUND);
                }
                break;
            case OpenSearchPPLParser.SIGN:
                this.enterOuterAlt(localContext, 25);
                {
                this.state = 1640;
                this.match(OpenSearchPPLParser.SIGN);
                }
                break;
            case OpenSearchPPLParser.SQRT:
                this.enterOuterAlt(localContext, 26);
                {
                this.state = 1641;
                this.match(OpenSearchPPLParser.SQRT);
                }
                break;
            case OpenSearchPPLParser.TRUNCATE:
                this.enterOuterAlt(localContext, 27);
                {
                this.state = 1642;
                this.match(OpenSearchPPLParser.TRUNCATE);
                }
                break;
            case OpenSearchPPLParser.RINT:
                this.enterOuterAlt(localContext, 28);
                {
                this.state = 1643;
                this.match(OpenSearchPPLParser.RINT);
                }
                break;
            case OpenSearchPPLParser.SIGNUM:
                this.enterOuterAlt(localContext, 29);
                {
                this.state = 1644;
                this.match(OpenSearchPPLParser.SIGNUM);
                }
                break;
            case OpenSearchPPLParser.SUM:
                this.enterOuterAlt(localContext, 30);
                {
                this.state = 1645;
                this.match(OpenSearchPPLParser.SUM);
                }
                break;
            case OpenSearchPPLParser.AVG:
                this.enterOuterAlt(localContext, 31);
                {
                this.state = 1646;
                this.match(OpenSearchPPLParser.AVG);
                }
                break;
            case OpenSearchPPLParser.ACOS:
            case OpenSearchPPLParser.ASIN:
            case OpenSearchPPLParser.ATAN:
            case OpenSearchPPLParser.ATAN2:
            case OpenSearchPPLParser.COS:
            case OpenSearchPPLParser.COSH:
            case OpenSearchPPLParser.COT:
            case OpenSearchPPLParser.DEGREES:
            case OpenSearchPPLParser.RADIANS:
            case OpenSearchPPLParser.SIN:
            case OpenSearchPPLParser.SINH:
            case OpenSearchPPLParser.TAN:
                this.enterOuterAlt(localContext, 32);
                {
                this.state = 1647;
                this.trigonometricFunctionName();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public geoipFunctionName(): GeoipFunctionNameContext {
        let localContext = new GeoipFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 268, OpenSearchPPLParser.RULE_geoipFunctionName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1650;
            this.match(OpenSearchPPLParser.GEOIP);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public collectionFunctionName(): CollectionFunctionNameContext {
        let localContext = new CollectionFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 270, OpenSearchPPLParser.RULE_collectionFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1652;
            _la = this.tokenStream.LA(1);
            if(!(_la === 108 || ((((_la - 358)) & ~0x1F) === 0 && ((1 << (_la - 358)) & 63) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public trigonometricFunctionName(): TrigonometricFunctionNameContext {
        let localContext = new TrigonometricFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 272, OpenSearchPPLParser.RULE_trigonometricFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1654;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 265)) & ~0x1F) === 0 && ((1 << (_la - 265)) & 4095) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public jsonFunctionName(): JsonFunctionNameContext {
        let localContext = new JsonFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 274, OpenSearchPPLParser.RULE_jsonFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1656;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 365)) & ~0x1F) === 0 && ((1 << (_la - 365)) & 1023) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public cryptographicFunctionName(): CryptographicFunctionNameContext {
        let localContext = new CryptographicFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 276, OpenSearchPPLParser.RULE_cryptographicFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1658;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 277)) & ~0x1F) === 0 && ((1 << (_la - 277)) & 7) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dateTimeFunctionName(): DateTimeFunctionNameContext {
        let localContext = new DateTimeFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 278, OpenSearchPPLParser.RULE_dateTimeFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1660;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 1038960967) !== 0) || ((((_la - 280)) & ~0x1F) === 0 && ((1 << (_la - 280)) & 4292607999) !== 0) || ((((_la - 312)) & ~0x1F) === 0 && ((1 << (_la - 312)) & 523903) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public getFormatFunctionCall(): GetFormatFunctionCallContext {
        let localContext = new GetFormatFunctionCallContext(this.context, this.state);
        this.enterRule(localContext, 280, OpenSearchPPLParser.RULE_getFormatFunctionCall);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1662;
            this.match(OpenSearchPPLParser.GET_FORMAT);
            this.state = 1663;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1664;
            this.getFormatType();
            this.state = 1665;
            this.match(OpenSearchPPLParser.COMMA);
            this.state = 1666;
            this.functionArg();
            this.state = 1667;
            this.match(OpenSearchPPLParser.RT_PRTHS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public getFormatType(): GetFormatTypeContext {
        let localContext = new GetFormatTypeContext(this.context, this.state);
        this.enterRule(localContext, 282, OpenSearchPPLParser.RULE_getFormatType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1669;
            _la = this.tokenStream.LA(1);
            if(!(_la === 119 || ((((_la - 287)) & ~0x1F) === 0 && ((1 << (_la - 287)) & 2684354561) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public extractFunctionCall(): ExtractFunctionCallContext {
        let localContext = new ExtractFunctionCallContext(this.context, this.state);
        this.enterRule(localContext, 284, OpenSearchPPLParser.RULE_extractFunctionCall);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1671;
            this.match(OpenSearchPPLParser.EXTRACT);
            this.state = 1672;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1673;
            this.datetimePart();
            this.state = 1674;
            this.match(OpenSearchPPLParser.FROM);
            this.state = 1675;
            this.functionArg();
            this.state = 1676;
            this.match(OpenSearchPPLParser.RT_PRTHS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public simpleDateTimePart(): SimpleDateTimePartContext {
        let localContext = new SimpleDateTimePartContext(this.context, this.state);
        this.enterRule(localContext, 286, OpenSearchPPLParser.RULE_simpleDateTimePart);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1678;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & 174608449) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public complexDateTimePart(): ComplexDateTimePartContext {
        let localContext = new ComplexDateTimePartContext(this.context, this.state);
        this.enterRule(localContext, 288, OpenSearchPPLParser.RULE_complexDateTimePart);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1680;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & 138560215) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public datetimePart(): DatetimePartContext {
        let localContext = new DatetimePartContext(this.context, this.state);
        this.enterRule(localContext, 290, OpenSearchPPLParser.RULE_datetimePart);
        try {
            this.state = 1684;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.DAY:
            case OpenSearchPPLParser.HOUR:
            case OpenSearchPPLParser.MICROSECOND:
            case OpenSearchPPLParser.MINUTE:
            case OpenSearchPPLParser.MONTH:
            case OpenSearchPPLParser.QUARTER:
            case OpenSearchPPLParser.SECOND:
            case OpenSearchPPLParser.WEEK:
            case OpenSearchPPLParser.YEAR:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1682;
                this.simpleDateTimePart();
                }
                break;
            case OpenSearchPPLParser.DAY_HOUR:
            case OpenSearchPPLParser.DAY_MICROSECOND:
            case OpenSearchPPLParser.DAY_MINUTE:
            case OpenSearchPPLParser.DAY_SECOND:
            case OpenSearchPPLParser.HOUR_MICROSECOND:
            case OpenSearchPPLParser.HOUR_MINUTE:
            case OpenSearchPPLParser.HOUR_SECOND:
            case OpenSearchPPLParser.MINUTE_MICROSECOND:
            case OpenSearchPPLParser.MINUTE_SECOND:
            case OpenSearchPPLParser.SECOND_MICROSECOND:
            case OpenSearchPPLParser.YEAR_MONTH:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1683;
                this.complexDateTimePart();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public timestampFunctionCall(): TimestampFunctionCallContext {
        let localContext = new TimestampFunctionCallContext(this.context, this.state);
        this.enterRule(localContext, 292, OpenSearchPPLParser.RULE_timestampFunctionCall);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1686;
            this.timestampFunctionName();
            this.state = 1687;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1688;
            this.simpleDateTimePart();
            this.state = 1689;
            this.match(OpenSearchPPLParser.COMMA);
            this.state = 1690;
            localContext._firstArg = this.functionArg();
            this.state = 1691;
            this.match(OpenSearchPPLParser.COMMA);
            this.state = 1692;
            localContext._secondArg = this.functionArg();
            this.state = 1693;
            this.match(OpenSearchPPLParser.RT_PRTHS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public timestampFunctionName(): TimestampFunctionNameContext {
        let localContext = new TimestampFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 294, OpenSearchPPLParser.RULE_timestampFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1695;
            _la = this.tokenStream.LA(1);
            if(!(_la === 319 || _la === 320)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public conditionFunctionName(): ConditionFunctionNameContext {
        let localContext = new ConditionFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 296, OpenSearchPPLParser.RULE_conditionFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1697;
            _la = this.tokenStream.LA(1);
            if(!(_la === 117 || _la === 213 || _la === 214 || ((((_la - 350)) & ~0x1F) === 0 && ((1 << (_la - 350)) & 16623) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public flowControlFunctionName(): FlowControlFunctionNameContext {
        let localContext = new FlowControlFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 298, OpenSearchPPLParser.RULE_flowControlFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1699;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 375)) & ~0x1F) === 0 && ((1 << (_la - 375)) & 23) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public systemFunctionName(): SystemFunctionNameContext {
        let localContext = new SystemFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 300, OpenSearchPPLParser.RULE_systemFunctionName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1701;
            this.match(OpenSearchPPLParser.TYPEOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public textFunctionName(): TextFunctionNameContext {
        let localContext = new TextFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 302, OpenSearchPPLParser.RULE_textFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1703;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 331)) & ~0x1F) === 0 && ((1 << (_la - 331)) & 262111) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public positionFunctionName(): PositionFunctionNameContext {
        let localContext = new PositionFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 304, OpenSearchPPLParser.RULE_positionFunctionName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1705;
            this.match(OpenSearchPPLParser.POSITION);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public comparisonOperator(): ComparisonOperatorContext {
        let localContext = new ComparisonOperatorContext(this.context, this.state);
        this.enterRule(localContext, 306, OpenSearchPPLParser.RULE_comparisonOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1707;
            _la = this.tokenStream.LA(1);
            if(!(_la === 116 || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 127) !== 0) || _la === 350)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public singleFieldRelevanceFunctionName(): SingleFieldRelevanceFunctionNameContext {
        let localContext = new SingleFieldRelevanceFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 308, OpenSearchPPLParser.RULE_singleFieldRelevanceFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1709;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 380)) & ~0x1F) === 0 && ((1 << (_la - 380)) & 15) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public multiFieldRelevanceFunctionName(): MultiFieldRelevanceFunctionNameContext {
        let localContext = new MultiFieldRelevanceFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 310, OpenSearchPPLParser.RULE_multiFieldRelevanceFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1711;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 384)) & ~0x1F) === 0 && ((1 << (_la - 384)) & 7) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public literalValue(): LiteralValueContext {
        let localContext = new LiteralValueContext(this.context, this.state);
        this.enterRule(localContext, 312, OpenSearchPPLParser.RULE_literalValue);
        try {
            this.state = 1721;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 163, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1713;
                this.intervalLiteral();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1714;
                this.stringLiteral();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1715;
                this.integerLiteral();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1716;
                this.decimalLiteral();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1717;
                this.doubleLiteral();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1718;
                this.floatLiteral();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1719;
                this.booleanLiteral();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1720;
                this.datetimeLiteral();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public intervalLiteral(): IntervalLiteralContext {
        let localContext = new IntervalLiteralContext(this.context, this.state);
        this.enterRule(localContext, 314, OpenSearchPPLParser.RULE_intervalLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1723;
            this.match(OpenSearchPPLParser.INTERVAL);
            this.state = 1724;
            this.valueExpression(0);
            this.state = 1725;
            this.intervalUnit();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stringLiteral(): StringLiteralContext {
        let localContext = new StringLiteralContext(this.context, this.state);
        this.enterRule(localContext, 316, OpenSearchPPLParser.RULE_stringLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1727;
            _la = this.tokenStream.LA(1);
            if(!(_la === 453 || _la === 454)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public integerLiteral(): IntegerLiteralContext {
        let localContext = new IntegerLiteralContext(this.context, this.state);
        this.enterRule(localContext, 318, OpenSearchPPLParser.RULE_integerLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1730;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 170 || _la === 171) {
                {
                this.state = 1729;
                _la = this.tokenStream.LA(1);
                if(!(_la === 170 || _la === 171)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 1732;
            this.match(OpenSearchPPLParser.INTEGER_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public decimalLiteral(): DecimalLiteralContext {
        let localContext = new DecimalLiteralContext(this.context, this.state);
        this.enterRule(localContext, 320, OpenSearchPPLParser.RULE_decimalLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1735;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 170 || _la === 171) {
                {
                this.state = 1734;
                _la = this.tokenStream.LA(1);
                if(!(_la === 170 || _la === 171)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 1737;
            this.match(OpenSearchPPLParser.DECIMAL_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public doubleLiteral(): DoubleLiteralContext {
        let localContext = new DoubleLiteralContext(this.context, this.state);
        this.enterRule(localContext, 322, OpenSearchPPLParser.RULE_doubleLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1740;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 170 || _la === 171) {
                {
                this.state = 1739;
                _la = this.tokenStream.LA(1);
                if(!(_la === 170 || _la === 171)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 1742;
            this.match(OpenSearchPPLParser.DOUBLE_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public floatLiteral(): FloatLiteralContext {
        let localContext = new FloatLiteralContext(this.context, this.state);
        this.enterRule(localContext, 324, OpenSearchPPLParser.RULE_floatLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1745;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 170 || _la === 171) {
                {
                this.state = 1744;
                _la = this.tokenStream.LA(1);
                if(!(_la === 170 || _la === 171)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 1747;
            this.match(OpenSearchPPLParser.FLOAT_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public booleanLiteral(): BooleanLiteralContext {
        let localContext = new BooleanLiteralContext(this.context, this.state);
        this.enterRule(localContext, 326, OpenSearchPPLParser.RULE_booleanLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1749;
            _la = this.tokenStream.LA(1);
            if(!(_la === 114 || _la === 115)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public datetimeLiteral(): DatetimeLiteralContext {
        let localContext = new DatetimeLiteralContext(this.context, this.state);
        this.enterRule(localContext, 328, OpenSearchPPLParser.RULE_datetimeLiteral);
        try {
            this.state = 1754;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.DATE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1751;
                this.dateLiteral();
                }
                break;
            case OpenSearchPPLParser.TIME:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1752;
                this.timeLiteral();
                }
                break;
            case OpenSearchPPLParser.TIMESTAMP:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1753;
                this.timestampLiteral();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dateLiteral(): DateLiteralContext {
        let localContext = new DateLiteralContext(this.context, this.state);
        this.enterRule(localContext, 330, OpenSearchPPLParser.RULE_dateLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1756;
            this.match(OpenSearchPPLParser.DATE);
            this.state = 1757;
            localContext._date = this.stringLiteral();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public timeLiteral(): TimeLiteralContext {
        let localContext = new TimeLiteralContext(this.context, this.state);
        this.enterRule(localContext, 332, OpenSearchPPLParser.RULE_timeLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1759;
            this.match(OpenSearchPPLParser.TIME);
            this.state = 1760;
            localContext._time = this.stringLiteral();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public timestampLiteral(): TimestampLiteralContext {
        let localContext = new TimestampLiteralContext(this.context, this.state);
        this.enterRule(localContext, 334, OpenSearchPPLParser.RULE_timestampLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1762;
            this.match(OpenSearchPPLParser.TIMESTAMP);
            this.state = 1763;
            localContext._timestamp = this.stringLiteral();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public intervalUnit(): IntervalUnitContext {
        let localContext = new IntervalUnitContext(this.context, this.state);
        this.enterRule(localContext, 336, OpenSearchPPLParser.RULE_intervalUnit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1765;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & 451728879) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public timespanUnit(): TimespanUnitContext {
        let localContext = new TimespanUnitContext(this.context, this.state);
        this.enterRule(localContext, 338, OpenSearchPPLParser.RULE_timespanUnit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1767;
            _la = this.tokenStream.LA(1);
            if(!(_la === 62 || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & 174612545) !== 0) || ((((_la - 424)) & ~0x1F) === 0 && ((1 << (_la - 424)) & 2097151) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public valueList(): ValueListContext {
        let localContext = new ValueListContext(this.context, this.state);
        this.enterRule(localContext, 340, OpenSearchPPLParser.RULE_valueList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1769;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1770;
            this.literalValue();
            this.state = 1775;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 161) {
                {
                {
                this.state = 1771;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1772;
                this.literalValue();
                }
                }
                this.state = 1777;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1778;
            this.match(OpenSearchPPLParser.RT_PRTHS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qualifiedName(): QualifiedNameContext {
        let localContext = new QualifiedNameContext(this.context, this.state);
        this.enterRule(localContext, 342, OpenSearchPPLParser.RULE_qualifiedName);
        try {
            let alternative: number;
            localContext = new IdentsAsQualifiedNameContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1780;
            this.ident();
            this.state = 1785;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 170, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1781;
                    this.match(OpenSearchPPLParser.DOT);
                    this.state = 1782;
                    this.ident();
                    }
                    }
                }
                this.state = 1787;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 170, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableQualifiedName(): TableQualifiedNameContext {
        let localContext = new TableQualifiedNameContext(this.context, this.state);
        this.enterRule(localContext, 344, OpenSearchPPLParser.RULE_tableQualifiedName);
        try {
            let alternative: number;
            localContext = new IdentsAsTableQualifiedNameContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1788;
            this.tableIdent();
            this.state = 1793;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 171, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1789;
                    this.match(OpenSearchPPLParser.DOT);
                    this.state = 1790;
                    this.ident();
                    }
                    }
                }
                this.state = 1795;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 171, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public wcQualifiedName(): WcQualifiedNameContext {
        let localContext = new WcQualifiedNameContext(this.context, this.state);
        this.enterRule(localContext, 346, OpenSearchPPLParser.RULE_wcQualifiedName);
        try {
            let alternative: number;
            localContext = new IdentsAsWildcardQualifiedNameContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1796;
            this.wildcard();
            this.state = 1801;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 172, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1797;
                    this.match(OpenSearchPPLParser.DOT);
                    this.state = 1798;
                    this.wildcard();
                    }
                    }
                }
                this.state = 1803;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 172, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifierSeq(): IdentifierSeqContext {
        let localContext = new IdentifierSeqContext(this.context, this.state);
        this.enterRule(localContext, 348, OpenSearchPPLParser.RULE_identifierSeq);
        let _la: number;
        try {
            this.state = 1823;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.SEARCH:
            case OpenSearchPPLParser.DESCRIBE:
            case OpenSearchPPLParser.SHOW:
            case OpenSearchPPLParser.EXPLAIN:
            case OpenSearchPPLParser.FROM:
            case OpenSearchPPLParser.WHERE:
            case OpenSearchPPLParser.FIELDS:
            case OpenSearchPPLParser.TABLE:
            case OpenSearchPPLParser.RENAME:
            case OpenSearchPPLParser.STATS:
            case OpenSearchPPLParser.EVENTSTATS:
            case OpenSearchPPLParser.DEDUP:
            case OpenSearchPPLParser.SORT:
            case OpenSearchPPLParser.EVAL:
            case OpenSearchPPLParser.HEAD:
            case OpenSearchPPLParser.BIN:
            case OpenSearchPPLParser.TOP:
            case OpenSearchPPLParser.RARE:
            case OpenSearchPPLParser.PARSE:
            case OpenSearchPPLParser.REGEX:
            case OpenSearchPPLParser.PUNCT:
            case OpenSearchPPLParser.GROK:
            case OpenSearchPPLParser.PATTERN:
            case OpenSearchPPLParser.PATTERNS:
            case OpenSearchPPLParser.NEW_FIELD:
            case OpenSearchPPLParser.KMEANS:
            case OpenSearchPPLParser.AD:
            case OpenSearchPPLParser.ML:
            case OpenSearchPPLParser.FILLNULL:
            case OpenSearchPPLParser.FLATTEN:
            case OpenSearchPPLParser.TRENDLINE:
            case OpenSearchPPLParser.TIMECHART:
            case OpenSearchPPLParser.EXPAND:
            case OpenSearchPPLParser.VARIABLE_COUNT_THRESHOLD:
            case OpenSearchPPLParser.FREQUENCY_THRESHOLD_PERCENTAGE:
            case OpenSearchPPLParser.METHOD:
            case OpenSearchPPLParser.MAX_SAMPLE_COUNT:
            case OpenSearchPPLParser.BUFFER_LIMIT:
            case OpenSearchPPLParser.JOIN:
            case OpenSearchPPLParser.INNER:
            case OpenSearchPPLParser.OUTER:
            case OpenSearchPPLParser.FULL:
            case OpenSearchPPLParser.SEMI:
            case OpenSearchPPLParser.ANTI:
            case OpenSearchPPLParser.CROSS:
            case OpenSearchPPLParser.LEFT_HINT:
            case OpenSearchPPLParser.RIGHT_HINT:
            case OpenSearchPPLParser.SOURCE:
            case OpenSearchPPLParser.INDEX:
            case OpenSearchPPLParser.A:
            case OpenSearchPPLParser.ASC:
            case OpenSearchPPLParser.D:
            case OpenSearchPPLParser.DESC:
            case OpenSearchPPLParser.DATASOURCES:
            case OpenSearchPPLParser.USING:
            case OpenSearchPPLParser.WITH:
            case OpenSearchPPLParser.SIMPLE:
            case OpenSearchPPLParser.STANDARD:
            case OpenSearchPPLParser.COST:
            case OpenSearchPPLParser.EXTENDED:
            case OpenSearchPPLParser.OVERRIDE:
            case OpenSearchPPLParser.AUTO:
            case OpenSearchPPLParser.STR:
            case OpenSearchPPLParser.NUM:
            case OpenSearchPPLParser.SMA:
            case OpenSearchPPLParser.WMA:
            case OpenSearchPPLParser.KEEPEMPTY:
            case OpenSearchPPLParser.CONSECUTIVE:
            case OpenSearchPPLParser.DEDUP_SPLITVALUES:
            case OpenSearchPPLParser.PARTITIONS:
            case OpenSearchPPLParser.ALLNUM:
            case OpenSearchPPLParser.DELIM:
            case OpenSearchPPLParser.CENTROIDS:
            case OpenSearchPPLParser.ITERATIONS:
            case OpenSearchPPLParser.DISTANCE_TYPE:
            case OpenSearchPPLParser.NUMBER_OF_TREES:
            case OpenSearchPPLParser.SHINGLE_SIZE:
            case OpenSearchPPLParser.SAMPLE_SIZE:
            case OpenSearchPPLParser.OUTPUT_AFTER:
            case OpenSearchPPLParser.TIME_DECAY:
            case OpenSearchPPLParser.ANOMALY_RATE:
            case OpenSearchPPLParser.CATEGORY_FIELD:
            case OpenSearchPPLParser.TIME_FIELD:
            case OpenSearchPPLParser.TIME_ZONE:
            case OpenSearchPPLParser.TRAINING_DATA_SIZE:
            case OpenSearchPPLParser.ANOMALY_SCORE_THRESHOLD:
            case OpenSearchPPLParser.APPEND:
            case OpenSearchPPLParser.COUNTFIELD:
            case OpenSearchPPLParser.SHOWCOUNT:
            case OpenSearchPPLParser.INPUT:
            case OpenSearchPPLParser.OUTPUT:
            case OpenSearchPPLParser.PATH:
            case OpenSearchPPLParser.CASE:
            case OpenSearchPPLParser.ELSE:
            case OpenSearchPPLParser.IN:
            case OpenSearchPPLParser.EXISTS:
            case OpenSearchPPLParser.GEOIP:
            case OpenSearchPPLParser.REGEXP:
            case OpenSearchPPLParser.REGEX_MATCH:
            case OpenSearchPPLParser.CONVERT_TZ:
            case OpenSearchPPLParser.DATETIME:
            case OpenSearchPPLParser.DAY:
            case OpenSearchPPLParser.DAY_HOUR:
            case OpenSearchPPLParser.DAY_MICROSECOND:
            case OpenSearchPPLParser.DAY_MINUTE:
            case OpenSearchPPLParser.DAY_OF_YEAR:
            case OpenSearchPPLParser.DAY_SECOND:
            case OpenSearchPPLParser.HOUR:
            case OpenSearchPPLParser.HOUR_MICROSECOND:
            case OpenSearchPPLParser.HOUR_MINUTE:
            case OpenSearchPPLParser.HOUR_OF_DAY:
            case OpenSearchPPLParser.HOUR_SECOND:
            case OpenSearchPPLParser.INTERVAL:
            case OpenSearchPPLParser.MICROSECOND:
            case OpenSearchPPLParser.MILLISECOND:
            case OpenSearchPPLParser.MINUTE:
            case OpenSearchPPLParser.MINUTE_MICROSECOND:
            case OpenSearchPPLParser.MINUTE_OF_DAY:
            case OpenSearchPPLParser.MINUTE_OF_HOUR:
            case OpenSearchPPLParser.MINUTE_SECOND:
            case OpenSearchPPLParser.MONTH:
            case OpenSearchPPLParser.MONTH_OF_YEAR:
            case OpenSearchPPLParser.QUARTER:
            case OpenSearchPPLParser.SECOND:
            case OpenSearchPPLParser.SECOND_MICROSECOND:
            case OpenSearchPPLParser.SECOND_OF_MINUTE:
            case OpenSearchPPLParser.WEEK:
            case OpenSearchPPLParser.WEEK_OF_YEAR:
            case OpenSearchPPLParser.YEAR:
            case OpenSearchPPLParser.YEAR_MONTH:
            case OpenSearchPPLParser.LOOKUP:
            case OpenSearchPPLParser.IP:
            case OpenSearchPPLParser.DOT:
            case OpenSearchPPLParser.EQUAL:
            case OpenSearchPPLParser.DOUBLE_EQUAL:
            case OpenSearchPPLParser.GREATER:
            case OpenSearchPPLParser.LESS:
            case OpenSearchPPLParser.NOT_GREATER:
            case OpenSearchPPLParser.NOT_LESS:
            case OpenSearchPPLParser.NOT_EQUAL:
            case OpenSearchPPLParser.PLUS:
            case OpenSearchPPLParser.MINUS:
            case OpenSearchPPLParser.BACKTICK:
            case OpenSearchPPLParser.ARROW:
            case OpenSearchPPLParser.AVG:
            case OpenSearchPPLParser.COUNT:
            case OpenSearchPPLParser.DISTINCT_COUNT:
            case OpenSearchPPLParser.DISTINCT_COUNT_APPROX:
            case OpenSearchPPLParser.ESTDC:
            case OpenSearchPPLParser.ESTDC_ERROR:
            case OpenSearchPPLParser.MAX:
            case OpenSearchPPLParser.MEAN:
            case OpenSearchPPLParser.MEDIAN:
            case OpenSearchPPLParser.MIN:
            case OpenSearchPPLParser.MODE:
            case OpenSearchPPLParser.RANGE:
            case OpenSearchPPLParser.STDEV:
            case OpenSearchPPLParser.STDEVP:
            case OpenSearchPPLParser.SUM:
            case OpenSearchPPLParser.SUMSQ:
            case OpenSearchPPLParser.VAR_SAMP:
            case OpenSearchPPLParser.VAR_POP:
            case OpenSearchPPLParser.STDDEV_SAMP:
            case OpenSearchPPLParser.STDDEV_POP:
            case OpenSearchPPLParser.PERCENTILE:
            case OpenSearchPPLParser.PERCENTILE_APPROX:
            case OpenSearchPPLParser.EARLIEST:
            case OpenSearchPPLParser.LATEST:
            case OpenSearchPPLParser.TAKE:
            case OpenSearchPPLParser.LIST:
            case OpenSearchPPLParser.VALUES:
            case OpenSearchPPLParser.PER_DAY:
            case OpenSearchPPLParser.PER_HOUR:
            case OpenSearchPPLParser.PER_MINUTE:
            case OpenSearchPPLParser.PER_SECOND:
            case OpenSearchPPLParser.RATE:
            case OpenSearchPPLParser.SPARKLINE:
            case OpenSearchPPLParser.C:
            case OpenSearchPPLParser.DC:
            case OpenSearchPPLParser.ROW_NUMBER:
            case OpenSearchPPLParser.RANK:
            case OpenSearchPPLParser.DENSE_RANK:
            case OpenSearchPPLParser.PERCENT_RANK:
            case OpenSearchPPLParser.CUME_DIST:
            case OpenSearchPPLParser.FIRST:
            case OpenSearchPPLParser.LAST:
            case OpenSearchPPLParser.NTH:
            case OpenSearchPPLParser.NTILE:
            case OpenSearchPPLParser.PLUS_FUCTION:
            case OpenSearchPPLParser.MINUS_FUCTION:
            case OpenSearchPPLParser.STAR_FUNCTION:
            case OpenSearchPPLParser.DIVIDE_FUNCTION:
            case OpenSearchPPLParser.ABS:
            case OpenSearchPPLParser.CBRT:
            case OpenSearchPPLParser.CEIL:
            case OpenSearchPPLParser.CEILING:
            case OpenSearchPPLParser.CONV:
            case OpenSearchPPLParser.CRC32:
            case OpenSearchPPLParser.E:
            case OpenSearchPPLParser.EXP:
            case OpenSearchPPLParser.EXPM1:
            case OpenSearchPPLParser.FLOOR:
            case OpenSearchPPLParser.LN:
            case OpenSearchPPLParser.LOG:
            case OpenSearchPPLParser.LOG_WITH_BASE:
            case OpenSearchPPLParser.MOD:
            case OpenSearchPPLParser.MODULUS:
            case OpenSearchPPLParser.PI:
            case OpenSearchPPLParser.POSITION:
            case OpenSearchPPLParser.POW:
            case OpenSearchPPLParser.POWER:
            case OpenSearchPPLParser.RAND:
            case OpenSearchPPLParser.ROUND:
            case OpenSearchPPLParser.SIGN:
            case OpenSearchPPLParser.SQRT:
            case OpenSearchPPLParser.TRUNCATE:
            case OpenSearchPPLParser.RINT:
            case OpenSearchPPLParser.SIGNUM:
            case OpenSearchPPLParser.ACOS:
            case OpenSearchPPLParser.ASIN:
            case OpenSearchPPLParser.ATAN:
            case OpenSearchPPLParser.ATAN2:
            case OpenSearchPPLParser.COS:
            case OpenSearchPPLParser.COSH:
            case OpenSearchPPLParser.COT:
            case OpenSearchPPLParser.DEGREES:
            case OpenSearchPPLParser.RADIANS:
            case OpenSearchPPLParser.SIN:
            case OpenSearchPPLParser.SINH:
            case OpenSearchPPLParser.TAN:
            case OpenSearchPPLParser.MD5:
            case OpenSearchPPLParser.SHA1:
            case OpenSearchPPLParser.SHA2:
            case OpenSearchPPLParser.ADDDATE:
            case OpenSearchPPLParser.ADDTIME:
            case OpenSearchPPLParser.CURDATE:
            case OpenSearchPPLParser.CURRENT_DATE:
            case OpenSearchPPLParser.CURRENT_TIME:
            case OpenSearchPPLParser.CURRENT_TIMESTAMP:
            case OpenSearchPPLParser.CURTIME:
            case OpenSearchPPLParser.DATE:
            case OpenSearchPPLParser.DATEDIFF:
            case OpenSearchPPLParser.DATE_ADD:
            case OpenSearchPPLParser.DATE_FORMAT:
            case OpenSearchPPLParser.DATE_SUB:
            case OpenSearchPPLParser.DAYNAME:
            case OpenSearchPPLParser.DAYOFMONTH:
            case OpenSearchPPLParser.DAYOFWEEK:
            case OpenSearchPPLParser.DAYOFYEAR:
            case OpenSearchPPLParser.DAY_OF_MONTH:
            case OpenSearchPPLParser.DAY_OF_WEEK:
            case OpenSearchPPLParser.EXTRACT:
            case OpenSearchPPLParser.FROM_DAYS:
            case OpenSearchPPLParser.FROM_UNIXTIME:
            case OpenSearchPPLParser.GET_FORMAT:
            case OpenSearchPPLParser.LAST_DAY:
            case OpenSearchPPLParser.LOCALTIME:
            case OpenSearchPPLParser.LOCALTIMESTAMP:
            case OpenSearchPPLParser.MAKEDATE:
            case OpenSearchPPLParser.MAKETIME:
            case OpenSearchPPLParser.MONTHNAME:
            case OpenSearchPPLParser.NOW:
            case OpenSearchPPLParser.PERIOD_ADD:
            case OpenSearchPPLParser.PERIOD_DIFF:
            case OpenSearchPPLParser.SEC_TO_TIME:
            case OpenSearchPPLParser.STR_TO_DATE:
            case OpenSearchPPLParser.SUBDATE:
            case OpenSearchPPLParser.SUBTIME:
            case OpenSearchPPLParser.SYSDATE:
            case OpenSearchPPLParser.TIME:
            case OpenSearchPPLParser.TIMEDIFF:
            case OpenSearchPPLParser.TIMESTAMP:
            case OpenSearchPPLParser.TIME_FORMAT:
            case OpenSearchPPLParser.TIME_TO_SEC:
            case OpenSearchPPLParser.TO_DAYS:
            case OpenSearchPPLParser.TO_SECONDS:
            case OpenSearchPPLParser.UNIX_TIMESTAMP:
            case OpenSearchPPLParser.UTC_DATE:
            case OpenSearchPPLParser.UTC_TIME:
            case OpenSearchPPLParser.UTC_TIMESTAMP:
            case OpenSearchPPLParser.WEEKDAY:
            case OpenSearchPPLParser.YEARWEEK:
            case OpenSearchPPLParser.SUBSTR:
            case OpenSearchPPLParser.SUBSTRING:
            case OpenSearchPPLParser.LTRIM:
            case OpenSearchPPLParser.RTRIM:
            case OpenSearchPPLParser.TRIM:
            case OpenSearchPPLParser.LOWER:
            case OpenSearchPPLParser.UPPER:
            case OpenSearchPPLParser.CONCAT:
            case OpenSearchPPLParser.CONCAT_WS:
            case OpenSearchPPLParser.LENGTH:
            case OpenSearchPPLParser.STRCMP:
            case OpenSearchPPLParser.RIGHT:
            case OpenSearchPPLParser.LEFT:
            case OpenSearchPPLParser.ASCII:
            case OpenSearchPPLParser.LOCATE:
            case OpenSearchPPLParser.REPLACE:
            case OpenSearchPPLParser.REVERSE:
            case OpenSearchPPLParser.CAST:
            case OpenSearchPPLParser.LIKE:
            case OpenSearchPPLParser.ISNULL:
            case OpenSearchPPLParser.ISNOTNULL:
            case OpenSearchPPLParser.CIDRMATCH:
            case OpenSearchPPLParser.BETWEEN:
            case OpenSearchPPLParser.ISPRESENT:
            case OpenSearchPPLParser.ISEMPTY:
            case OpenSearchPPLParser.ISBLANK:
            case OpenSearchPPLParser.ARRAY:
            case OpenSearchPPLParser.ARRAY_LENGTH:
            case OpenSearchPPLParser.FORALL:
            case OpenSearchPPLParser.FILTER:
            case OpenSearchPPLParser.TRANSFORM:
            case OpenSearchPPLParser.REDUCE:
            case OpenSearchPPLParser.JSON_VALID:
            case OpenSearchPPLParser.JSON:
            case OpenSearchPPLParser.JSON_OBJECT:
            case OpenSearchPPLParser.JSON_ARRAY:
            case OpenSearchPPLParser.JSON_ARRAY_LENGTH:
            case OpenSearchPPLParser.JSON_EXTRACT:
            case OpenSearchPPLParser.JSON_KEYS:
            case OpenSearchPPLParser.JSON_SET:
            case OpenSearchPPLParser.JSON_DELETE:
            case OpenSearchPPLParser.JSON_APPEND:
            case OpenSearchPPLParser.JSON_EXTEND:
            case OpenSearchPPLParser.IFNULL:
            case OpenSearchPPLParser.NULLIF:
            case OpenSearchPPLParser.IF:
            case OpenSearchPPLParser.TYPEOF:
            case OpenSearchPPLParser.COALESCE:
            case OpenSearchPPLParser.MATCH:
            case OpenSearchPPLParser.MATCH_PHRASE:
            case OpenSearchPPLParser.MATCH_PHRASE_PREFIX:
            case OpenSearchPPLParser.MATCH_BOOL_PREFIX:
            case OpenSearchPPLParser.SIMPLE_QUERY_STRING:
            case OpenSearchPPLParser.MULTI_MATCH:
            case OpenSearchPPLParser.QUERY_STRING:
            case OpenSearchPPLParser.ALLOW_LEADING_WILDCARD:
            case OpenSearchPPLParser.ANALYZE_WILDCARD:
            case OpenSearchPPLParser.ANALYZER:
            case OpenSearchPPLParser.AUTO_GENERATE_SYNONYMS_PHRASE_QUERY:
            case OpenSearchPPLParser.BOOST:
            case OpenSearchPPLParser.CUTOFF_FREQUENCY:
            case OpenSearchPPLParser.DEFAULT_FIELD:
            case OpenSearchPPLParser.DEFAULT_OPERATOR:
            case OpenSearchPPLParser.ENABLE_POSITION_INCREMENTS:
            case OpenSearchPPLParser.ESCAPE:
            case OpenSearchPPLParser.FLAGS:
            case OpenSearchPPLParser.FUZZY_MAX_EXPANSIONS:
            case OpenSearchPPLParser.FUZZY_PREFIX_LENGTH:
            case OpenSearchPPLParser.FUZZY_TRANSPOSITIONS:
            case OpenSearchPPLParser.FUZZY_REWRITE:
            case OpenSearchPPLParser.FUZZINESS:
            case OpenSearchPPLParser.LENIENT:
            case OpenSearchPPLParser.LOW_FREQ_OPERATOR:
            case OpenSearchPPLParser.MAX_DETERMINIZED_STATES:
            case OpenSearchPPLParser.MAX_EXPANSIONS:
            case OpenSearchPPLParser.MINIMUM_SHOULD_MATCH:
            case OpenSearchPPLParser.OPERATOR:
            case OpenSearchPPLParser.PHRASE_SLOP:
            case OpenSearchPPLParser.PREFIX_LENGTH:
            case OpenSearchPPLParser.QUOTE_ANALYZER:
            case OpenSearchPPLParser.QUOTE_FIELD_SUFFIX:
            case OpenSearchPPLParser.REWRITE:
            case OpenSearchPPLParser.SLOP:
            case OpenSearchPPLParser.TIE_BREAKER:
            case OpenSearchPPLParser.TYPE:
            case OpenSearchPPLParser.ZERO_TERMS_QUERY:
            case OpenSearchPPLParser.SPAN:
            case OpenSearchPPLParser.MS:
            case OpenSearchPPLParser.S:
            case OpenSearchPPLParser.M:
            case OpenSearchPPLParser.H:
            case OpenSearchPPLParser.W:
            case OpenSearchPPLParser.Q:
            case OpenSearchPPLParser.Y:
            case OpenSearchPPLParser.SEC:
            case OpenSearchPPLParser.SECS:
            case OpenSearchPPLParser.SECONDS:
            case OpenSearchPPLParser.MINS:
            case OpenSearchPPLParser.MINUTES:
            case OpenSearchPPLParser.HR:
            case OpenSearchPPLParser.HRS:
            case OpenSearchPPLParser.HOURS:
            case OpenSearchPPLParser.DAYS:
            case OpenSearchPPLParser.MON:
            case OpenSearchPPLParser.MONTHS:
            case OpenSearchPPLParser.US:
            case OpenSearchPPLParser.CS:
            case OpenSearchPPLParser.DS:
            case OpenSearchPPLParser.PERCENTILE_SHORTCUT:
            case OpenSearchPPLParser.ID:
            case OpenSearchPPLParser.BQUOTA_STRING:
                localContext = new IdentsAsQualifiedNameSeqContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1804;
                this.qualifiedName();
                this.state = 1809;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 161) {
                    {
                    {
                    this.state = 1805;
                    this.match(OpenSearchPPLParser.COMMA);
                    this.state = 1806;
                    this.qualifiedName();
                    }
                    }
                    this.state = 1811;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            case OpenSearchPPLParser.LT_PRTHS:
                localContext = new IdentsAsQualifiedNameSeqContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1812;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1813;
                this.qualifiedName();
                this.state = 1818;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 161) {
                    {
                    {
                    this.state = 1814;
                    this.match(OpenSearchPPLParser.COMMA);
                    this.state = 1815;
                    this.qualifiedName();
                    }
                    }
                    this.state = 1820;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1821;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ident(): IdentContext {
        let localContext = new IdentContext(this.context, this.state);
        this.enterRule(localContext, 350, OpenSearchPPLParser.RULE_ident);
        let _la: number;
        try {
            this.state = 1835;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.DOT:
            case OpenSearchPPLParser.ID:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1826;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 162) {
                    {
                    this.state = 1825;
                    this.match(OpenSearchPPLParser.DOT);
                    }
                }

                this.state = 1828;
                this.match(OpenSearchPPLParser.ID);
                }
                break;
            case OpenSearchPPLParser.BACKTICK:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1829;
                this.match(OpenSearchPPLParser.BACKTICK);
                this.state = 1830;
                this.ident();
                this.state = 1831;
                this.match(OpenSearchPPLParser.BACKTICK);
                }
                break;
            case OpenSearchPPLParser.BQUOTA_STRING:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1833;
                this.match(OpenSearchPPLParser.BQUOTA_STRING);
                }
                break;
            case OpenSearchPPLParser.SEARCH:
            case OpenSearchPPLParser.DESCRIBE:
            case OpenSearchPPLParser.SHOW:
            case OpenSearchPPLParser.EXPLAIN:
            case OpenSearchPPLParser.FROM:
            case OpenSearchPPLParser.WHERE:
            case OpenSearchPPLParser.FIELDS:
            case OpenSearchPPLParser.TABLE:
            case OpenSearchPPLParser.RENAME:
            case OpenSearchPPLParser.STATS:
            case OpenSearchPPLParser.EVENTSTATS:
            case OpenSearchPPLParser.DEDUP:
            case OpenSearchPPLParser.SORT:
            case OpenSearchPPLParser.EVAL:
            case OpenSearchPPLParser.HEAD:
            case OpenSearchPPLParser.BIN:
            case OpenSearchPPLParser.TOP:
            case OpenSearchPPLParser.RARE:
            case OpenSearchPPLParser.PARSE:
            case OpenSearchPPLParser.REGEX:
            case OpenSearchPPLParser.PUNCT:
            case OpenSearchPPLParser.GROK:
            case OpenSearchPPLParser.PATTERN:
            case OpenSearchPPLParser.PATTERNS:
            case OpenSearchPPLParser.NEW_FIELD:
            case OpenSearchPPLParser.KMEANS:
            case OpenSearchPPLParser.AD:
            case OpenSearchPPLParser.ML:
            case OpenSearchPPLParser.FILLNULL:
            case OpenSearchPPLParser.FLATTEN:
            case OpenSearchPPLParser.TRENDLINE:
            case OpenSearchPPLParser.TIMECHART:
            case OpenSearchPPLParser.EXPAND:
            case OpenSearchPPLParser.VARIABLE_COUNT_THRESHOLD:
            case OpenSearchPPLParser.FREQUENCY_THRESHOLD_PERCENTAGE:
            case OpenSearchPPLParser.METHOD:
            case OpenSearchPPLParser.MAX_SAMPLE_COUNT:
            case OpenSearchPPLParser.BUFFER_LIMIT:
            case OpenSearchPPLParser.JOIN:
            case OpenSearchPPLParser.INNER:
            case OpenSearchPPLParser.OUTER:
            case OpenSearchPPLParser.FULL:
            case OpenSearchPPLParser.SEMI:
            case OpenSearchPPLParser.ANTI:
            case OpenSearchPPLParser.CROSS:
            case OpenSearchPPLParser.LEFT_HINT:
            case OpenSearchPPLParser.RIGHT_HINT:
            case OpenSearchPPLParser.SOURCE:
            case OpenSearchPPLParser.INDEX:
            case OpenSearchPPLParser.A:
            case OpenSearchPPLParser.ASC:
            case OpenSearchPPLParser.D:
            case OpenSearchPPLParser.DESC:
            case OpenSearchPPLParser.DATASOURCES:
            case OpenSearchPPLParser.USING:
            case OpenSearchPPLParser.WITH:
            case OpenSearchPPLParser.SIMPLE:
            case OpenSearchPPLParser.STANDARD:
            case OpenSearchPPLParser.COST:
            case OpenSearchPPLParser.EXTENDED:
            case OpenSearchPPLParser.OVERRIDE:
            case OpenSearchPPLParser.AUTO:
            case OpenSearchPPLParser.STR:
            case OpenSearchPPLParser.NUM:
            case OpenSearchPPLParser.SMA:
            case OpenSearchPPLParser.WMA:
            case OpenSearchPPLParser.KEEPEMPTY:
            case OpenSearchPPLParser.CONSECUTIVE:
            case OpenSearchPPLParser.DEDUP_SPLITVALUES:
            case OpenSearchPPLParser.PARTITIONS:
            case OpenSearchPPLParser.ALLNUM:
            case OpenSearchPPLParser.DELIM:
            case OpenSearchPPLParser.CENTROIDS:
            case OpenSearchPPLParser.ITERATIONS:
            case OpenSearchPPLParser.DISTANCE_TYPE:
            case OpenSearchPPLParser.NUMBER_OF_TREES:
            case OpenSearchPPLParser.SHINGLE_SIZE:
            case OpenSearchPPLParser.SAMPLE_SIZE:
            case OpenSearchPPLParser.OUTPUT_AFTER:
            case OpenSearchPPLParser.TIME_DECAY:
            case OpenSearchPPLParser.ANOMALY_RATE:
            case OpenSearchPPLParser.CATEGORY_FIELD:
            case OpenSearchPPLParser.TIME_FIELD:
            case OpenSearchPPLParser.TIME_ZONE:
            case OpenSearchPPLParser.TRAINING_DATA_SIZE:
            case OpenSearchPPLParser.ANOMALY_SCORE_THRESHOLD:
            case OpenSearchPPLParser.APPEND:
            case OpenSearchPPLParser.COUNTFIELD:
            case OpenSearchPPLParser.SHOWCOUNT:
            case OpenSearchPPLParser.INPUT:
            case OpenSearchPPLParser.OUTPUT:
            case OpenSearchPPLParser.PATH:
            case OpenSearchPPLParser.CASE:
            case OpenSearchPPLParser.ELSE:
            case OpenSearchPPLParser.IN:
            case OpenSearchPPLParser.EXISTS:
            case OpenSearchPPLParser.GEOIP:
            case OpenSearchPPLParser.REGEXP:
            case OpenSearchPPLParser.REGEX_MATCH:
            case OpenSearchPPLParser.CONVERT_TZ:
            case OpenSearchPPLParser.DATETIME:
            case OpenSearchPPLParser.DAY:
            case OpenSearchPPLParser.DAY_HOUR:
            case OpenSearchPPLParser.DAY_MICROSECOND:
            case OpenSearchPPLParser.DAY_MINUTE:
            case OpenSearchPPLParser.DAY_OF_YEAR:
            case OpenSearchPPLParser.DAY_SECOND:
            case OpenSearchPPLParser.HOUR:
            case OpenSearchPPLParser.HOUR_MICROSECOND:
            case OpenSearchPPLParser.HOUR_MINUTE:
            case OpenSearchPPLParser.HOUR_OF_DAY:
            case OpenSearchPPLParser.HOUR_SECOND:
            case OpenSearchPPLParser.INTERVAL:
            case OpenSearchPPLParser.MICROSECOND:
            case OpenSearchPPLParser.MILLISECOND:
            case OpenSearchPPLParser.MINUTE:
            case OpenSearchPPLParser.MINUTE_MICROSECOND:
            case OpenSearchPPLParser.MINUTE_OF_DAY:
            case OpenSearchPPLParser.MINUTE_OF_HOUR:
            case OpenSearchPPLParser.MINUTE_SECOND:
            case OpenSearchPPLParser.MONTH:
            case OpenSearchPPLParser.MONTH_OF_YEAR:
            case OpenSearchPPLParser.QUARTER:
            case OpenSearchPPLParser.SECOND:
            case OpenSearchPPLParser.SECOND_MICROSECOND:
            case OpenSearchPPLParser.SECOND_OF_MINUTE:
            case OpenSearchPPLParser.WEEK:
            case OpenSearchPPLParser.WEEK_OF_YEAR:
            case OpenSearchPPLParser.YEAR:
            case OpenSearchPPLParser.YEAR_MONTH:
            case OpenSearchPPLParser.LOOKUP:
            case OpenSearchPPLParser.IP:
            case OpenSearchPPLParser.EQUAL:
            case OpenSearchPPLParser.DOUBLE_EQUAL:
            case OpenSearchPPLParser.GREATER:
            case OpenSearchPPLParser.LESS:
            case OpenSearchPPLParser.NOT_GREATER:
            case OpenSearchPPLParser.NOT_LESS:
            case OpenSearchPPLParser.NOT_EQUAL:
            case OpenSearchPPLParser.PLUS:
            case OpenSearchPPLParser.MINUS:
            case OpenSearchPPLParser.ARROW:
            case OpenSearchPPLParser.AVG:
            case OpenSearchPPLParser.COUNT:
            case OpenSearchPPLParser.DISTINCT_COUNT:
            case OpenSearchPPLParser.DISTINCT_COUNT_APPROX:
            case OpenSearchPPLParser.ESTDC:
            case OpenSearchPPLParser.ESTDC_ERROR:
            case OpenSearchPPLParser.MAX:
            case OpenSearchPPLParser.MEAN:
            case OpenSearchPPLParser.MEDIAN:
            case OpenSearchPPLParser.MIN:
            case OpenSearchPPLParser.MODE:
            case OpenSearchPPLParser.RANGE:
            case OpenSearchPPLParser.STDEV:
            case OpenSearchPPLParser.STDEVP:
            case OpenSearchPPLParser.SUM:
            case OpenSearchPPLParser.SUMSQ:
            case OpenSearchPPLParser.VAR_SAMP:
            case OpenSearchPPLParser.VAR_POP:
            case OpenSearchPPLParser.STDDEV_SAMP:
            case OpenSearchPPLParser.STDDEV_POP:
            case OpenSearchPPLParser.PERCENTILE:
            case OpenSearchPPLParser.PERCENTILE_APPROX:
            case OpenSearchPPLParser.EARLIEST:
            case OpenSearchPPLParser.LATEST:
            case OpenSearchPPLParser.TAKE:
            case OpenSearchPPLParser.LIST:
            case OpenSearchPPLParser.VALUES:
            case OpenSearchPPLParser.PER_DAY:
            case OpenSearchPPLParser.PER_HOUR:
            case OpenSearchPPLParser.PER_MINUTE:
            case OpenSearchPPLParser.PER_SECOND:
            case OpenSearchPPLParser.RATE:
            case OpenSearchPPLParser.SPARKLINE:
            case OpenSearchPPLParser.C:
            case OpenSearchPPLParser.DC:
            case OpenSearchPPLParser.ROW_NUMBER:
            case OpenSearchPPLParser.RANK:
            case OpenSearchPPLParser.DENSE_RANK:
            case OpenSearchPPLParser.PERCENT_RANK:
            case OpenSearchPPLParser.CUME_DIST:
            case OpenSearchPPLParser.FIRST:
            case OpenSearchPPLParser.LAST:
            case OpenSearchPPLParser.NTH:
            case OpenSearchPPLParser.NTILE:
            case OpenSearchPPLParser.PLUS_FUCTION:
            case OpenSearchPPLParser.MINUS_FUCTION:
            case OpenSearchPPLParser.STAR_FUNCTION:
            case OpenSearchPPLParser.DIVIDE_FUNCTION:
            case OpenSearchPPLParser.ABS:
            case OpenSearchPPLParser.CBRT:
            case OpenSearchPPLParser.CEIL:
            case OpenSearchPPLParser.CEILING:
            case OpenSearchPPLParser.CONV:
            case OpenSearchPPLParser.CRC32:
            case OpenSearchPPLParser.E:
            case OpenSearchPPLParser.EXP:
            case OpenSearchPPLParser.EXPM1:
            case OpenSearchPPLParser.FLOOR:
            case OpenSearchPPLParser.LN:
            case OpenSearchPPLParser.LOG:
            case OpenSearchPPLParser.LOG_WITH_BASE:
            case OpenSearchPPLParser.MOD:
            case OpenSearchPPLParser.MODULUS:
            case OpenSearchPPLParser.PI:
            case OpenSearchPPLParser.POSITION:
            case OpenSearchPPLParser.POW:
            case OpenSearchPPLParser.POWER:
            case OpenSearchPPLParser.RAND:
            case OpenSearchPPLParser.ROUND:
            case OpenSearchPPLParser.SIGN:
            case OpenSearchPPLParser.SQRT:
            case OpenSearchPPLParser.TRUNCATE:
            case OpenSearchPPLParser.RINT:
            case OpenSearchPPLParser.SIGNUM:
            case OpenSearchPPLParser.ACOS:
            case OpenSearchPPLParser.ASIN:
            case OpenSearchPPLParser.ATAN:
            case OpenSearchPPLParser.ATAN2:
            case OpenSearchPPLParser.COS:
            case OpenSearchPPLParser.COSH:
            case OpenSearchPPLParser.COT:
            case OpenSearchPPLParser.DEGREES:
            case OpenSearchPPLParser.RADIANS:
            case OpenSearchPPLParser.SIN:
            case OpenSearchPPLParser.SINH:
            case OpenSearchPPLParser.TAN:
            case OpenSearchPPLParser.MD5:
            case OpenSearchPPLParser.SHA1:
            case OpenSearchPPLParser.SHA2:
            case OpenSearchPPLParser.ADDDATE:
            case OpenSearchPPLParser.ADDTIME:
            case OpenSearchPPLParser.CURDATE:
            case OpenSearchPPLParser.CURRENT_DATE:
            case OpenSearchPPLParser.CURRENT_TIME:
            case OpenSearchPPLParser.CURRENT_TIMESTAMP:
            case OpenSearchPPLParser.CURTIME:
            case OpenSearchPPLParser.DATE:
            case OpenSearchPPLParser.DATEDIFF:
            case OpenSearchPPLParser.DATE_ADD:
            case OpenSearchPPLParser.DATE_FORMAT:
            case OpenSearchPPLParser.DATE_SUB:
            case OpenSearchPPLParser.DAYNAME:
            case OpenSearchPPLParser.DAYOFMONTH:
            case OpenSearchPPLParser.DAYOFWEEK:
            case OpenSearchPPLParser.DAYOFYEAR:
            case OpenSearchPPLParser.DAY_OF_MONTH:
            case OpenSearchPPLParser.DAY_OF_WEEK:
            case OpenSearchPPLParser.EXTRACT:
            case OpenSearchPPLParser.FROM_DAYS:
            case OpenSearchPPLParser.FROM_UNIXTIME:
            case OpenSearchPPLParser.GET_FORMAT:
            case OpenSearchPPLParser.LAST_DAY:
            case OpenSearchPPLParser.LOCALTIME:
            case OpenSearchPPLParser.LOCALTIMESTAMP:
            case OpenSearchPPLParser.MAKEDATE:
            case OpenSearchPPLParser.MAKETIME:
            case OpenSearchPPLParser.MONTHNAME:
            case OpenSearchPPLParser.NOW:
            case OpenSearchPPLParser.PERIOD_ADD:
            case OpenSearchPPLParser.PERIOD_DIFF:
            case OpenSearchPPLParser.SEC_TO_TIME:
            case OpenSearchPPLParser.STR_TO_DATE:
            case OpenSearchPPLParser.SUBDATE:
            case OpenSearchPPLParser.SUBTIME:
            case OpenSearchPPLParser.SYSDATE:
            case OpenSearchPPLParser.TIME:
            case OpenSearchPPLParser.TIMEDIFF:
            case OpenSearchPPLParser.TIMESTAMP:
            case OpenSearchPPLParser.TIME_FORMAT:
            case OpenSearchPPLParser.TIME_TO_SEC:
            case OpenSearchPPLParser.TO_DAYS:
            case OpenSearchPPLParser.TO_SECONDS:
            case OpenSearchPPLParser.UNIX_TIMESTAMP:
            case OpenSearchPPLParser.UTC_DATE:
            case OpenSearchPPLParser.UTC_TIME:
            case OpenSearchPPLParser.UTC_TIMESTAMP:
            case OpenSearchPPLParser.WEEKDAY:
            case OpenSearchPPLParser.YEARWEEK:
            case OpenSearchPPLParser.SUBSTR:
            case OpenSearchPPLParser.SUBSTRING:
            case OpenSearchPPLParser.LTRIM:
            case OpenSearchPPLParser.RTRIM:
            case OpenSearchPPLParser.TRIM:
            case OpenSearchPPLParser.LOWER:
            case OpenSearchPPLParser.UPPER:
            case OpenSearchPPLParser.CONCAT:
            case OpenSearchPPLParser.CONCAT_WS:
            case OpenSearchPPLParser.LENGTH:
            case OpenSearchPPLParser.STRCMP:
            case OpenSearchPPLParser.RIGHT:
            case OpenSearchPPLParser.LEFT:
            case OpenSearchPPLParser.ASCII:
            case OpenSearchPPLParser.LOCATE:
            case OpenSearchPPLParser.REPLACE:
            case OpenSearchPPLParser.REVERSE:
            case OpenSearchPPLParser.CAST:
            case OpenSearchPPLParser.LIKE:
            case OpenSearchPPLParser.ISNULL:
            case OpenSearchPPLParser.ISNOTNULL:
            case OpenSearchPPLParser.CIDRMATCH:
            case OpenSearchPPLParser.BETWEEN:
            case OpenSearchPPLParser.ISPRESENT:
            case OpenSearchPPLParser.ISEMPTY:
            case OpenSearchPPLParser.ISBLANK:
            case OpenSearchPPLParser.ARRAY:
            case OpenSearchPPLParser.ARRAY_LENGTH:
            case OpenSearchPPLParser.FORALL:
            case OpenSearchPPLParser.FILTER:
            case OpenSearchPPLParser.TRANSFORM:
            case OpenSearchPPLParser.REDUCE:
            case OpenSearchPPLParser.JSON_VALID:
            case OpenSearchPPLParser.JSON:
            case OpenSearchPPLParser.JSON_OBJECT:
            case OpenSearchPPLParser.JSON_ARRAY:
            case OpenSearchPPLParser.JSON_ARRAY_LENGTH:
            case OpenSearchPPLParser.JSON_EXTRACT:
            case OpenSearchPPLParser.JSON_KEYS:
            case OpenSearchPPLParser.JSON_SET:
            case OpenSearchPPLParser.JSON_DELETE:
            case OpenSearchPPLParser.JSON_APPEND:
            case OpenSearchPPLParser.JSON_EXTEND:
            case OpenSearchPPLParser.IFNULL:
            case OpenSearchPPLParser.NULLIF:
            case OpenSearchPPLParser.IF:
            case OpenSearchPPLParser.TYPEOF:
            case OpenSearchPPLParser.COALESCE:
            case OpenSearchPPLParser.MATCH:
            case OpenSearchPPLParser.MATCH_PHRASE:
            case OpenSearchPPLParser.MATCH_PHRASE_PREFIX:
            case OpenSearchPPLParser.MATCH_BOOL_PREFIX:
            case OpenSearchPPLParser.SIMPLE_QUERY_STRING:
            case OpenSearchPPLParser.MULTI_MATCH:
            case OpenSearchPPLParser.QUERY_STRING:
            case OpenSearchPPLParser.ALLOW_LEADING_WILDCARD:
            case OpenSearchPPLParser.ANALYZE_WILDCARD:
            case OpenSearchPPLParser.ANALYZER:
            case OpenSearchPPLParser.AUTO_GENERATE_SYNONYMS_PHRASE_QUERY:
            case OpenSearchPPLParser.BOOST:
            case OpenSearchPPLParser.CUTOFF_FREQUENCY:
            case OpenSearchPPLParser.DEFAULT_FIELD:
            case OpenSearchPPLParser.DEFAULT_OPERATOR:
            case OpenSearchPPLParser.ENABLE_POSITION_INCREMENTS:
            case OpenSearchPPLParser.ESCAPE:
            case OpenSearchPPLParser.FLAGS:
            case OpenSearchPPLParser.FUZZY_MAX_EXPANSIONS:
            case OpenSearchPPLParser.FUZZY_PREFIX_LENGTH:
            case OpenSearchPPLParser.FUZZY_TRANSPOSITIONS:
            case OpenSearchPPLParser.FUZZY_REWRITE:
            case OpenSearchPPLParser.FUZZINESS:
            case OpenSearchPPLParser.LENIENT:
            case OpenSearchPPLParser.LOW_FREQ_OPERATOR:
            case OpenSearchPPLParser.MAX_DETERMINIZED_STATES:
            case OpenSearchPPLParser.MAX_EXPANSIONS:
            case OpenSearchPPLParser.MINIMUM_SHOULD_MATCH:
            case OpenSearchPPLParser.OPERATOR:
            case OpenSearchPPLParser.PHRASE_SLOP:
            case OpenSearchPPLParser.PREFIX_LENGTH:
            case OpenSearchPPLParser.QUOTE_ANALYZER:
            case OpenSearchPPLParser.QUOTE_FIELD_SUFFIX:
            case OpenSearchPPLParser.REWRITE:
            case OpenSearchPPLParser.SLOP:
            case OpenSearchPPLParser.TIE_BREAKER:
            case OpenSearchPPLParser.TYPE:
            case OpenSearchPPLParser.ZERO_TERMS_QUERY:
            case OpenSearchPPLParser.SPAN:
            case OpenSearchPPLParser.MS:
            case OpenSearchPPLParser.S:
            case OpenSearchPPLParser.M:
            case OpenSearchPPLParser.H:
            case OpenSearchPPLParser.W:
            case OpenSearchPPLParser.Q:
            case OpenSearchPPLParser.Y:
            case OpenSearchPPLParser.SEC:
            case OpenSearchPPLParser.SECS:
            case OpenSearchPPLParser.SECONDS:
            case OpenSearchPPLParser.MINS:
            case OpenSearchPPLParser.MINUTES:
            case OpenSearchPPLParser.HR:
            case OpenSearchPPLParser.HRS:
            case OpenSearchPPLParser.HOURS:
            case OpenSearchPPLParser.DAYS:
            case OpenSearchPPLParser.MON:
            case OpenSearchPPLParser.MONTHS:
            case OpenSearchPPLParser.US:
            case OpenSearchPPLParser.CS:
            case OpenSearchPPLParser.DS:
            case OpenSearchPPLParser.PERCENTILE_SHORTCUT:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1834;
                this.keywordsCanBeId();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableIdent(): TableIdentContext {
        let localContext = new TableIdentContext(this.context, this.state);
        this.enterRule(localContext, 352, OpenSearchPPLParser.RULE_tableIdent);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1838;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 447) {
                {
                this.state = 1837;
                this.match(OpenSearchPPLParser.CLUSTER);
                }
            }

            this.state = 1840;
            this.ident();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public wildcard(): WildcardContext {
        let localContext = new WildcardContext(this.context, this.state);
        this.enterRule(localContext, 354, OpenSearchPPLParser.RULE_wildcard);
        let _la: number;
        try {
            let alternative: number;
            this.state = 1865;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 181, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1842;
                this.ident();
                this.state = 1847;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 179, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1843;
                        this.match(OpenSearchPPLParser.MODULE);
                        this.state = 1844;
                        this.ident();
                        }
                        }
                    }
                    this.state = 1849;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 179, this.context);
                }
                this.state = 1851;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 174) {
                    {
                    this.state = 1850;
                    this.match(OpenSearchPPLParser.MODULE);
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1853;
                this.match(OpenSearchPPLParser.SINGLE_QUOTE);
                this.state = 1854;
                this.wildcard();
                this.state = 1855;
                this.match(OpenSearchPPLParser.SINGLE_QUOTE);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1857;
                this.match(OpenSearchPPLParser.DOUBLE_QUOTE);
                this.state = 1858;
                this.wildcard();
                this.state = 1859;
                this.match(OpenSearchPPLParser.DOUBLE_QUOTE);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1861;
                this.match(OpenSearchPPLParser.BACKTICK);
                this.state = 1862;
                this.wildcard();
                this.state = 1863;
                this.match(OpenSearchPPLParser.BACKTICK);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public keywordsCanBeId(): KeywordsCanBeIdContext {
        let localContext = new KeywordsCanBeIdContext(this.context, this.state);
        this.enterRule(localContext, 356, OpenSearchPPLParser.RULE_keywordsCanBeId);
        try {
            this.state = 1978;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 182, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1867;
                this.match(OpenSearchPPLParser.D);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1868;
                this.timespanUnit();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1869;
                this.match(OpenSearchPPLParser.SPAN);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1870;
                this.evalFunctionName();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1871;
                this.jsonFunctionName();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1872;
                this.relevanceArgName();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1873;
                this.intervalUnit();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1874;
                this.trendlineType();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1875;
                this.singleFieldRelevanceFunctionName();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1876;
                this.multiFieldRelevanceFunctionName();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1877;
                this.commandName();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 1878;
                this.collectionFunctionName();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 1879;
                this.comparisonOperator();
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 1880;
                this.explainMode();
                }
                break;
            case 15:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 1881;
                this.match(OpenSearchPPLParser.CASE);
                }
                break;
            case 16:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 1882;
                this.match(OpenSearchPPLParser.ELSE);
                }
                break;
            case 17:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 1883;
                this.match(OpenSearchPPLParser.IN);
                }
                break;
            case 18:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 1884;
                this.match(OpenSearchPPLParser.ARROW);
                }
                break;
            case 19:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 1885;
                this.match(OpenSearchPPLParser.BETWEEN);
                }
                break;
            case 20:
                this.enterOuterAlt(localContext, 20);
                {
                this.state = 1886;
                this.match(OpenSearchPPLParser.EXISTS);
                }
                break;
            case 21:
                this.enterOuterAlt(localContext, 21);
                {
                this.state = 1887;
                this.match(OpenSearchPPLParser.SOURCE);
                }
                break;
            case 22:
                this.enterOuterAlt(localContext, 22);
                {
                this.state = 1888;
                this.match(OpenSearchPPLParser.INDEX);
                }
                break;
            case 23:
                this.enterOuterAlt(localContext, 23);
                {
                this.state = 1889;
                this.match(OpenSearchPPLParser.A);
                }
                break;
            case 24:
                this.enterOuterAlt(localContext, 24);
                {
                this.state = 1890;
                this.match(OpenSearchPPLParser.ASC);
                }
                break;
            case 25:
                this.enterOuterAlt(localContext, 25);
                {
                this.state = 1891;
                this.match(OpenSearchPPLParser.DESC);
                }
                break;
            case 26:
                this.enterOuterAlt(localContext, 26);
                {
                this.state = 1892;
                this.match(OpenSearchPPLParser.DATASOURCES);
                }
                break;
            case 27:
                this.enterOuterAlt(localContext, 27);
                {
                this.state = 1893;
                this.match(OpenSearchPPLParser.FROM);
                }
                break;
            case 28:
                this.enterOuterAlt(localContext, 28);
                {
                this.state = 1894;
                this.match(OpenSearchPPLParser.PATTERN);
                }
                break;
            case 29:
                this.enterOuterAlt(localContext, 29);
                {
                this.state = 1895;
                this.match(OpenSearchPPLParser.NEW_FIELD);
                }
                break;
            case 30:
                this.enterOuterAlt(localContext, 30);
                {
                this.state = 1896;
                this.match(OpenSearchPPLParser.METHOD);
                }
                break;
            case 31:
                this.enterOuterAlt(localContext, 31);
                {
                this.state = 1897;
                this.match(OpenSearchPPLParser.VARIABLE_COUNT_THRESHOLD);
                }
                break;
            case 32:
                this.enterOuterAlt(localContext, 32);
                {
                this.state = 1898;
                this.match(OpenSearchPPLParser.FREQUENCY_THRESHOLD_PERCENTAGE);
                }
                break;
            case 33:
                this.enterOuterAlt(localContext, 33);
                {
                this.state = 1899;
                this.match(OpenSearchPPLParser.MAX_SAMPLE_COUNT);
                }
                break;
            case 34:
                this.enterOuterAlt(localContext, 34);
                {
                this.state = 1900;
                this.match(OpenSearchPPLParser.BUFFER_LIMIT);
                }
                break;
            case 35:
                this.enterOuterAlt(localContext, 35);
                {
                this.state = 1901;
                this.match(OpenSearchPPLParser.WITH);
                }
                break;
            case 36:
                this.enterOuterAlt(localContext, 36);
                {
                this.state = 1902;
                this.match(OpenSearchPPLParser.REGEX);
                }
                break;
            case 37:
                this.enterOuterAlt(localContext, 37);
                {
                this.state = 1903;
                this.match(OpenSearchPPLParser.PUNCT);
                }
                break;
            case 38:
                this.enterOuterAlt(localContext, 38);
                {
                this.state = 1904;
                this.match(OpenSearchPPLParser.USING);
                }
                break;
            case 39:
                this.enterOuterAlt(localContext, 39);
                {
                this.state = 1905;
                this.match(OpenSearchPPLParser.CAST);
                }
                break;
            case 40:
                this.enterOuterAlt(localContext, 40);
                {
                this.state = 1906;
                this.match(OpenSearchPPLParser.GET_FORMAT);
                }
                break;
            case 41:
                this.enterOuterAlt(localContext, 41);
                {
                this.state = 1907;
                this.match(OpenSearchPPLParser.EXTRACT);
                }
                break;
            case 42:
                this.enterOuterAlt(localContext, 42);
                {
                this.state = 1908;
                this.match(OpenSearchPPLParser.INTERVAL);
                }
                break;
            case 43:
                this.enterOuterAlt(localContext, 43);
                {
                this.state = 1909;
                this.match(OpenSearchPPLParser.PLUS);
                }
                break;
            case 44:
                this.enterOuterAlt(localContext, 44);
                {
                this.state = 1910;
                this.match(OpenSearchPPLParser.MINUS);
                }
                break;
            case 45:
                this.enterOuterAlt(localContext, 45);
                {
                this.state = 1911;
                this.match(OpenSearchPPLParser.OVERRIDE);
                }
                break;
            case 46:
                this.enterOuterAlt(localContext, 46);
                {
                this.state = 1912;
                this.match(OpenSearchPPLParser.AUTO);
                }
                break;
            case 47:
                this.enterOuterAlt(localContext, 47);
                {
                this.state = 1913;
                this.match(OpenSearchPPLParser.STR);
                }
                break;
            case 48:
                this.enterOuterAlt(localContext, 48);
                {
                this.state = 1914;
                this.match(OpenSearchPPLParser.IP);
                }
                break;
            case 49:
                this.enterOuterAlt(localContext, 49);
                {
                this.state = 1915;
                this.match(OpenSearchPPLParser.NUM);
                }
                break;
            case 50:
                this.enterOuterAlt(localContext, 50);
                {
                this.state = 1916;
                this.match(OpenSearchPPLParser.KEEPEMPTY);
                }
                break;
            case 51:
                this.enterOuterAlt(localContext, 51);
                {
                this.state = 1917;
                this.match(OpenSearchPPLParser.CONSECUTIVE);
                }
                break;
            case 52:
                this.enterOuterAlt(localContext, 52);
                {
                this.state = 1918;
                this.match(OpenSearchPPLParser.DEDUP_SPLITVALUES);
                }
                break;
            case 53:
                this.enterOuterAlt(localContext, 53);
                {
                this.state = 1919;
                this.match(OpenSearchPPLParser.PARTITIONS);
                }
                break;
            case 54:
                this.enterOuterAlt(localContext, 54);
                {
                this.state = 1920;
                this.match(OpenSearchPPLParser.ALLNUM);
                }
                break;
            case 55:
                this.enterOuterAlt(localContext, 55);
                {
                this.state = 1921;
                this.match(OpenSearchPPLParser.DELIM);
                }
                break;
            case 56:
                this.enterOuterAlt(localContext, 56);
                {
                this.state = 1922;
                this.match(OpenSearchPPLParser.CENTROIDS);
                }
                break;
            case 57:
                this.enterOuterAlt(localContext, 57);
                {
                this.state = 1923;
                this.match(OpenSearchPPLParser.ITERATIONS);
                }
                break;
            case 58:
                this.enterOuterAlt(localContext, 58);
                {
                this.state = 1924;
                this.match(OpenSearchPPLParser.DISTANCE_TYPE);
                }
                break;
            case 59:
                this.enterOuterAlt(localContext, 59);
                {
                this.state = 1925;
                this.match(OpenSearchPPLParser.NUMBER_OF_TREES);
                }
                break;
            case 60:
                this.enterOuterAlt(localContext, 60);
                {
                this.state = 1926;
                this.match(OpenSearchPPLParser.SHINGLE_SIZE);
                }
                break;
            case 61:
                this.enterOuterAlt(localContext, 61);
                {
                this.state = 1927;
                this.match(OpenSearchPPLParser.SAMPLE_SIZE);
                }
                break;
            case 62:
                this.enterOuterAlt(localContext, 62);
                {
                this.state = 1928;
                this.match(OpenSearchPPLParser.OUTPUT_AFTER);
                }
                break;
            case 63:
                this.enterOuterAlt(localContext, 63);
                {
                this.state = 1929;
                this.match(OpenSearchPPLParser.TIME_DECAY);
                }
                break;
            case 64:
                this.enterOuterAlt(localContext, 64);
                {
                this.state = 1930;
                this.match(OpenSearchPPLParser.ANOMALY_RATE);
                }
                break;
            case 65:
                this.enterOuterAlt(localContext, 65);
                {
                this.state = 1931;
                this.match(OpenSearchPPLParser.CATEGORY_FIELD);
                }
                break;
            case 66:
                this.enterOuterAlt(localContext, 66);
                {
                this.state = 1932;
                this.match(OpenSearchPPLParser.TIME_FIELD);
                }
                break;
            case 67:
                this.enterOuterAlt(localContext, 67);
                {
                this.state = 1933;
                this.match(OpenSearchPPLParser.TIME_ZONE);
                }
                break;
            case 68:
                this.enterOuterAlt(localContext, 68);
                {
                this.state = 1934;
                this.match(OpenSearchPPLParser.TRAINING_DATA_SIZE);
                }
                break;
            case 69:
                this.enterOuterAlt(localContext, 69);
                {
                this.state = 1935;
                this.match(OpenSearchPPLParser.ANOMALY_SCORE_THRESHOLD);
                }
                break;
            case 70:
                this.enterOuterAlt(localContext, 70);
                {
                this.state = 1936;
                this.match(OpenSearchPPLParser.COUNTFIELD);
                }
                break;
            case 71:
                this.enterOuterAlt(localContext, 71);
                {
                this.state = 1937;
                this.match(OpenSearchPPLParser.SHOWCOUNT);
                }
                break;
            case 72:
                this.enterOuterAlt(localContext, 72);
                {
                this.state = 1938;
                this.match(OpenSearchPPLParser.PATH);
                }
                break;
            case 73:
                this.enterOuterAlt(localContext, 73);
                {
                this.state = 1939;
                this.match(OpenSearchPPLParser.INPUT);
                }
                break;
            case 74:
                this.enterOuterAlt(localContext, 74);
                {
                this.state = 1940;
                this.match(OpenSearchPPLParser.OUTPUT);
                }
                break;
            case 75:
                this.enterOuterAlt(localContext, 75);
                {
                this.state = 1941;
                this.statsFunctionName();
                }
                break;
            case 76:
                this.enterOuterAlt(localContext, 76);
                {
                this.state = 1942;
                this.windowFunctionName();
                }
                break;
            case 77:
                this.enterOuterAlt(localContext, 77);
                {
                this.state = 1943;
                this.match(OpenSearchPPLParser.DISTINCT_COUNT);
                }
                break;
            case 78:
                this.enterOuterAlt(localContext, 78);
                {
                this.state = 1944;
                this.match(OpenSearchPPLParser.DISTINCT_COUNT_APPROX);
                }
                break;
            case 79:
                this.enterOuterAlt(localContext, 79);
                {
                this.state = 1945;
                this.match(OpenSearchPPLParser.ESTDC);
                }
                break;
            case 80:
                this.enterOuterAlt(localContext, 80);
                {
                this.state = 1946;
                this.match(OpenSearchPPLParser.ESTDC_ERROR);
                }
                break;
            case 81:
                this.enterOuterAlt(localContext, 81);
                {
                this.state = 1947;
                this.match(OpenSearchPPLParser.MEAN);
                }
                break;
            case 82:
                this.enterOuterAlt(localContext, 82);
                {
                this.state = 1948;
                this.match(OpenSearchPPLParser.MEDIAN);
                }
                break;
            case 83:
                this.enterOuterAlt(localContext, 83);
                {
                this.state = 1949;
                this.match(OpenSearchPPLParser.MODE);
                }
                break;
            case 84:
                this.enterOuterAlt(localContext, 84);
                {
                this.state = 1950;
                this.match(OpenSearchPPLParser.RANGE);
                }
                break;
            case 85:
                this.enterOuterAlt(localContext, 85);
                {
                this.state = 1951;
                this.match(OpenSearchPPLParser.STDEV);
                }
                break;
            case 86:
                this.enterOuterAlt(localContext, 86);
                {
                this.state = 1952;
                this.match(OpenSearchPPLParser.STDEVP);
                }
                break;
            case 87:
                this.enterOuterAlt(localContext, 87);
                {
                this.state = 1953;
                this.match(OpenSearchPPLParser.SUMSQ);
                }
                break;
            case 88:
                this.enterOuterAlt(localContext, 88);
                {
                this.state = 1954;
                this.match(OpenSearchPPLParser.VAR_SAMP);
                }
                break;
            case 89:
                this.enterOuterAlt(localContext, 89);
                {
                this.state = 1955;
                this.match(OpenSearchPPLParser.VAR_POP);
                }
                break;
            case 90:
                this.enterOuterAlt(localContext, 90);
                {
                this.state = 1956;
                this.match(OpenSearchPPLParser.TAKE);
                }
                break;
            case 91:
                this.enterOuterAlt(localContext, 91);
                {
                this.state = 1957;
                this.match(OpenSearchPPLParser.LIST);
                }
                break;
            case 92:
                this.enterOuterAlt(localContext, 92);
                {
                this.state = 1958;
                this.match(OpenSearchPPLParser.VALUES);
                }
                break;
            case 93:
                this.enterOuterAlt(localContext, 93);
                {
                this.state = 1959;
                this.match(OpenSearchPPLParser.PER_DAY);
                }
                break;
            case 94:
                this.enterOuterAlt(localContext, 94);
                {
                this.state = 1960;
                this.match(OpenSearchPPLParser.PER_HOUR);
                }
                break;
            case 95:
                this.enterOuterAlt(localContext, 95);
                {
                this.state = 1961;
                this.match(OpenSearchPPLParser.PER_MINUTE);
                }
                break;
            case 96:
                this.enterOuterAlt(localContext, 96);
                {
                this.state = 1962;
                this.match(OpenSearchPPLParser.PER_SECOND);
                }
                break;
            case 97:
                this.enterOuterAlt(localContext, 97);
                {
                this.state = 1963;
                this.match(OpenSearchPPLParser.RATE);
                }
                break;
            case 98:
                this.enterOuterAlt(localContext, 98);
                {
                this.state = 1964;
                this.match(OpenSearchPPLParser.SPARKLINE);
                }
                break;
            case 99:
                this.enterOuterAlt(localContext, 99);
                {
                this.state = 1965;
                this.match(OpenSearchPPLParser.C);
                }
                break;
            case 100:
                this.enterOuterAlt(localContext, 100);
                {
                this.state = 1966;
                this.match(OpenSearchPPLParser.DC);
                }
                break;
            case 101:
                this.enterOuterAlt(localContext, 101);
                {
                this.state = 1967;
                this.match(OpenSearchPPLParser.OUTER);
                }
                break;
            case 102:
                this.enterOuterAlt(localContext, 102);
                {
                this.state = 1968;
                this.match(OpenSearchPPLParser.INNER);
                }
                break;
            case 103:
                this.enterOuterAlt(localContext, 103);
                {
                this.state = 1969;
                this.match(OpenSearchPPLParser.CROSS);
                }
                break;
            case 104:
                this.enterOuterAlt(localContext, 104);
                {
                this.state = 1970;
                this.match(OpenSearchPPLParser.LEFT);
                }
                break;
            case 105:
                this.enterOuterAlt(localContext, 105);
                {
                this.state = 1971;
                this.match(OpenSearchPPLParser.RIGHT);
                }
                break;
            case 106:
                this.enterOuterAlt(localContext, 106);
                {
                this.state = 1972;
                this.match(OpenSearchPPLParser.FULL);
                }
                break;
            case 107:
                this.enterOuterAlt(localContext, 107);
                {
                this.state = 1973;
                this.match(OpenSearchPPLParser.SEMI);
                }
                break;
            case 108:
                this.enterOuterAlt(localContext, 108);
                {
                this.state = 1974;
                this.match(OpenSearchPPLParser.ANTI);
                }
                break;
            case 109:
                this.enterOuterAlt(localContext, 109);
                {
                this.state = 1975;
                this.match(OpenSearchPPLParser.LEFT_HINT);
                }
                break;
            case 110:
                this.enterOuterAlt(localContext, 110);
                {
                this.state = 1976;
                this.match(OpenSearchPPLParser.RIGHT_HINT);
                }
                break;
            case 111:
                this.enterOuterAlt(localContext, 111);
                {
                this.state = 1977;
                this.match(OpenSearchPPLParser.PERCENTILE_SHORTCUT);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 98:
            return this.logicalExpression_sempred(localContext as LogicalExpressionContext, predIndex);
        case 99:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        case 100:
            return this.valueExpression_sempred(localContext as ValueExpressionContext, predIndex);
        }
        return true;
    }
    private logicalExpression_sempred(localContext: LogicalExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 4);
        case 1:
            return this.precpred(this.context, 3);
        case 2:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 3:
            return this.precpred(this.context, 3);
        case 4:
            return this.precpred(this.context, 1);
        case 5:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private valueExpression_sempred(localContext: ValueExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 6:
            return this.precpred(this.context, 11);
        case 7:
            return this.precpred(this.context, 10);
        case 8:
            return this.precpred(this.context, 5);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,458,1981,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,
        65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,
        72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,
        78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,
        85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,
        91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,7,97,2,
        98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,7,103,
        2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
        7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,
        2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,
        7,120,2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,
        2,126,7,126,2,127,7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,
        7,131,2,132,7,132,2,133,7,133,2,134,7,134,2,135,7,135,2,136,7,136,
        2,137,7,137,2,138,7,138,2,139,7,139,2,140,7,140,2,141,7,141,2,142,
        7,142,2,143,7,143,2,144,7,144,2,145,7,145,2,146,7,146,2,147,7,147,
        2,148,7,148,2,149,7,149,2,150,7,150,2,151,7,151,2,152,7,152,2,153,
        7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,7,157,2,158,7,158,
        2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,7,163,2,164,
        7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,7,169,
        2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,2,175,
        7,175,2,176,7,176,2,177,7,177,2,178,7,178,1,0,3,0,360,8,0,1,0,1,
        0,1,1,1,1,3,1,366,8,1,1,2,1,2,1,2,5,2,371,8,2,10,2,12,2,374,9,2,
        1,3,1,3,3,3,378,8,3,1,3,1,3,1,4,1,4,1,5,1,5,1,5,5,5,387,8,5,10,5,
        12,5,390,9,5,1,6,1,6,1,6,3,6,395,8,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
        1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
        1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,428,8,7,1,8,1,8,1,9,3,9,433,
        8,9,1,9,5,9,436,8,9,10,9,12,9,439,9,9,1,9,1,9,5,9,443,8,9,10,9,12,
        9,446,9,9,1,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,
        1,13,1,14,1,14,1,14,1,15,3,15,464,8,15,1,15,1,15,1,16,1,16,3,16,
        470,8,16,1,16,5,16,473,8,16,10,16,12,16,476,9,16,1,17,1,17,1,17,
        1,17,5,17,482,8,17,10,17,12,17,485,9,17,1,18,1,18,1,18,1,18,3,18,
        491,8,18,1,18,1,18,1,18,3,18,496,8,18,1,18,1,18,1,18,3,18,501,8,
        18,1,18,1,18,1,18,5,18,506,8,18,10,18,12,18,509,9,18,1,18,3,18,512,
        8,18,1,18,1,18,1,18,3,18,517,8,18,1,19,1,19,1,19,1,19,5,19,523,8,
        19,10,19,12,19,526,9,19,1,19,3,19,529,8,19,1,20,1,20,3,20,533,8,
        20,1,20,1,20,1,20,1,20,3,20,539,8,20,1,20,1,20,1,20,3,20,544,8,20,
        1,21,1,21,3,21,548,8,21,1,21,1,21,3,21,552,8,21,1,22,1,22,1,23,1,
        23,5,23,558,8,23,10,23,12,23,561,9,23,1,23,1,23,1,23,3,23,566,8,
        23,1,24,1,24,1,24,1,24,3,24,572,8,24,1,24,3,24,575,8,24,1,25,1,25,
        1,25,1,25,1,25,1,25,1,25,3,25,584,8,25,3,25,586,8,25,1,26,1,26,1,
        26,1,26,3,26,592,8,26,1,27,1,27,1,27,1,27,5,27,598,8,27,10,27,12,
        27,601,9,27,1,28,1,28,3,28,605,8,28,1,28,1,28,3,28,609,8,28,1,29,
        1,29,1,29,5,29,614,8,29,10,29,12,29,617,9,29,1,29,1,29,3,29,621,
        8,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,3,30,633,
        8,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,3,30,644,8,30,
        1,31,1,31,1,31,3,31,649,8,31,1,32,1,32,3,32,653,8,32,1,32,1,32,1,
        32,1,32,1,32,3,32,660,8,32,1,33,1,33,1,34,1,34,3,34,666,8,34,1,34,
        1,34,1,34,3,34,671,8,34,1,34,1,34,1,34,3,34,676,8,34,1,34,1,34,3,
        34,680,8,34,1,35,1,35,3,35,684,8,35,1,35,1,35,1,35,3,35,689,8,35,
        1,35,1,35,1,35,3,35,694,8,35,1,35,1,35,3,35,698,8,35,1,36,1,36,1,
        36,1,36,1,37,1,37,1,37,1,37,1,38,1,38,5,38,710,8,38,10,38,12,38,
        713,9,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,3,39,723,8,39,1,
        39,3,39,726,8,39,1,40,1,40,1,40,5,40,731,8,40,10,40,12,40,734,9,
        40,1,41,1,41,3,41,738,8,41,1,42,1,42,3,42,742,8,42,1,42,1,42,1,43,
        1,43,1,43,1,44,1,44,1,44,1,44,1,45,1,45,1,46,1,46,1,46,3,46,758,
        8,46,1,46,1,46,1,46,3,46,763,8,46,1,46,1,46,1,46,3,46,768,8,46,1,
        46,1,46,1,46,3,46,773,8,46,1,46,1,46,1,46,3,46,778,8,46,1,46,1,46,
        1,46,3,46,783,8,46,1,46,5,46,786,8,46,10,46,12,46,789,9,46,1,47,
        1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,3,47,800,8,47,1,48,1,48,
        1,49,1,49,1,50,1,50,1,50,1,50,1,50,3,50,811,8,50,1,51,1,51,1,51,
        5,51,816,8,51,10,51,12,51,819,9,51,1,52,1,52,1,52,5,52,824,8,52,
        10,52,12,52,827,9,52,1,53,1,53,1,53,3,53,832,8,53,1,54,1,54,1,54,
        1,54,3,54,838,8,54,1,55,1,55,1,55,1,55,3,55,844,8,55,1,56,1,56,1,
        56,1,56,5,56,850,8,56,10,56,12,56,853,9,56,1,57,1,57,1,57,1,57,1,
        58,1,58,1,58,3,58,862,8,58,1,58,1,58,5,58,866,8,58,10,58,12,58,869,
        9,58,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,3,59,879,8,59,1,60,
        1,60,1,61,1,61,1,61,1,61,3,61,887,8,61,1,62,1,62,1,62,1,62,3,62,
        893,8,62,1,63,1,63,1,63,1,63,3,63,899,8,63,1,63,1,63,1,63,1,63,5,
        63,905,8,63,10,63,12,63,908,9,63,1,63,1,63,1,64,1,64,1,64,3,64,915,
        8,64,1,64,1,64,5,64,919,8,64,10,64,12,64,922,9,64,1,64,1,64,1,65,
        1,65,5,65,928,8,65,10,65,12,65,931,9,65,1,66,1,66,1,66,1,66,1,66,
        1,66,1,66,1,66,1,66,3,66,942,8,66,1,67,1,67,5,67,946,8,67,10,67,
        12,67,949,9,67,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,
        1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,
        1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,
        3,68,987,8,68,1,69,1,69,5,69,991,8,69,10,69,12,69,994,9,69,1,70,
        1,70,1,70,1,70,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,
        1,71,1,71,3,71,1012,8,71,1,72,1,72,1,72,1,72,1,72,3,72,1019,8,72,
        1,72,3,72,1022,8,72,1,73,1,73,1,73,5,73,1027,8,73,10,73,12,73,1030,
        9,73,1,73,1,73,3,73,1034,8,73,1,74,1,74,1,74,1,74,3,74,1040,8,74,
        1,74,3,74,1043,8,74,1,74,1,74,1,75,3,75,1048,8,75,1,75,1,75,1,75,
        3,75,1053,8,75,1,75,1,75,3,75,1057,8,75,1,75,1,75,3,75,1061,8,75,
        1,75,3,75,1064,8,75,1,75,1,75,3,75,1068,8,75,1,75,3,75,1071,8,75,
        1,76,1,76,1,76,3,76,1076,8,76,1,76,3,76,1079,8,76,1,76,1,76,1,76,
        3,76,1084,8,76,1,77,1,77,1,77,1,78,1,78,3,78,1091,8,78,1,78,5,78,
        1094,8,78,10,78,12,78,1097,9,78,1,79,1,79,1,79,1,79,1,79,1,79,1,
        79,1,79,1,79,1,79,3,79,1109,8,79,1,80,1,80,1,80,1,80,1,81,1,81,1,
        81,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,
        82,1,82,3,82,1132,8,82,1,83,1,83,1,83,3,83,1137,8,83,1,84,1,84,1,
        84,1,84,1,84,1,84,3,84,1145,8,84,1,84,1,84,1,85,1,85,1,85,5,85,1152,
        8,85,10,85,12,85,1155,9,85,1,86,1,86,1,86,1,86,1,87,1,87,1,87,3,
        87,1164,8,87,1,88,1,88,1,88,1,88,1,88,1,89,1,89,3,89,1173,8,89,1,
        90,1,90,1,91,1,91,1,91,3,91,1180,8,91,1,92,1,92,1,92,1,92,1,92,1,
        92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,3,92,1195,8,92,1,92,1,92,1,
        92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,3,92,1210,8,
        92,1,93,1,93,1,94,1,94,1,94,1,94,1,94,3,94,1219,8,94,1,94,1,94,1,
        95,1,95,1,95,1,95,1,95,3,95,1228,8,95,1,95,1,95,1,96,1,96,1,96,1,
        96,1,96,1,96,1,96,3,96,1239,8,96,1,96,1,96,1,97,1,97,1,97,1,97,3,
        97,1247,8,97,1,98,1,98,1,98,1,98,3,98,1253,8,98,1,98,1,98,1,98,1,
        98,1,98,1,98,1,98,1,98,1,98,5,98,1264,8,98,10,98,12,98,1267,9,98,
        1,99,1,99,1,99,3,99,1272,8,99,1,99,1,99,1,99,1,99,1,99,1,99,3,99,
        1280,8,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,3,99,1289,8,99,1,99,
        1,99,5,99,1293,8,99,10,99,12,99,1296,9,99,1,100,1,100,1,100,1,100,
        1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,5,100,1310,8,100,
        10,100,12,100,1313,9,100,1,100,1,100,3,100,1317,8,100,1,100,1,100,
        1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,
        1,100,1,100,3,100,1334,8,100,1,100,1,100,1,100,1,100,1,100,1,100,
        1,100,1,100,3,100,1344,8,100,1,100,1,100,1,100,1,100,1,100,5,100,
        1351,8,100,10,100,12,100,1354,9,100,1,101,1,101,1,101,1,101,1,101,
        1,102,1,102,1,102,1,102,1,102,1,102,1,102,3,102,1368,8,102,1,103,
        1,103,1,103,1,103,1,103,1,103,1,103,1,104,1,104,1,104,1,104,1,104,
        1,104,1,104,1,104,1,104,1,104,5,104,1387,8,104,10,104,12,104,1390,
        9,104,1,104,1,104,3,104,1394,8,104,1,104,1,104,1,105,1,105,3,105,
        1400,8,105,1,106,1,106,1,106,1,106,1,106,1,106,1,106,5,106,1409,
        8,106,10,106,12,106,1412,9,106,1,106,1,106,1,107,1,107,1,107,1,107,
        1,107,1,107,5,107,1422,8,107,10,107,12,107,1425,9,107,1,107,1,107,
        1,107,3,107,1430,8,107,1,107,1,107,1,107,5,107,1435,8,107,10,107,
        12,107,1438,9,107,1,107,1,107,1,108,1,108,3,108,1444,8,108,1,109,
        1,109,1,109,1,109,1,109,1,110,1,110,1,110,5,110,1454,8,110,10,110,
        12,110,1457,9,110,1,111,3,111,1460,8,111,1,111,1,111,1,112,1,112,
        1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,
        1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,3,112,1485,8,112,
        1,113,1,113,1,114,1,114,1,115,1,115,3,115,1493,8,115,1,116,1,116,
        1,116,1,116,1,116,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,118,
        1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,
        3,118,1519,8,118,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,
        1,119,1,119,1,119,3,119,1532,8,119,1,120,1,120,1,120,5,120,1537,
        8,120,10,120,12,120,1540,9,120,3,120,1542,8,120,1,121,1,121,1,121,
        5,121,1547,8,121,10,121,12,121,1550,9,121,3,121,1552,8,121,1,122,
        1,122,1,123,1,123,1,123,3,123,1559,8,123,1,123,1,123,1,124,1,124,
        3,124,1565,8,124,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,
        4,125,1575,8,125,11,125,12,125,1576,1,125,1,125,1,125,1,125,3,125,
        1583,8,125,1,126,1,126,1,126,1,126,1,127,1,127,1,128,1,128,1,128,
        1,128,1,128,1,128,1,128,1,128,3,128,1599,8,128,1,129,1,129,1,129,
        1,129,3,129,1605,8,129,1,130,1,130,3,130,1609,8,130,1,131,1,131,
        1,132,1,132,3,132,1615,8,132,1,133,1,133,1,133,1,133,1,133,1,133,
        1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,
        1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,
        1,133,1,133,1,133,1,133,3,133,1649,8,133,1,134,1,134,1,135,1,135,
        1,136,1,136,1,137,1,137,1,138,1,138,1,139,1,139,1,140,1,140,1,140,
        1,140,1,140,1,140,1,140,1,141,1,141,1,142,1,142,1,142,1,142,1,142,
        1,142,1,142,1,143,1,143,1,144,1,144,1,145,1,145,3,145,1685,8,145,
        1,146,1,146,1,146,1,146,1,146,1,146,1,146,1,146,1,146,1,147,1,147,
        1,148,1,148,1,149,1,149,1,150,1,150,1,151,1,151,1,152,1,152,1,153,
        1,153,1,154,1,154,1,155,1,155,1,156,1,156,1,156,1,156,1,156,1,156,
        1,156,1,156,3,156,1722,8,156,1,157,1,157,1,157,1,157,1,158,1,158,
        1,159,3,159,1731,8,159,1,159,1,159,1,160,3,160,1736,8,160,1,160,
        1,160,1,161,3,161,1741,8,161,1,161,1,161,1,162,3,162,1746,8,162,
        1,162,1,162,1,163,1,163,1,164,1,164,1,164,3,164,1755,8,164,1,165,
        1,165,1,165,1,166,1,166,1,166,1,167,1,167,1,167,1,168,1,168,1,169,
        1,169,1,170,1,170,1,170,1,170,5,170,1774,8,170,10,170,12,170,1777,
        9,170,1,170,1,170,1,171,1,171,1,171,5,171,1784,8,171,10,171,12,171,
        1787,9,171,1,172,1,172,1,172,5,172,1792,8,172,10,172,12,172,1795,
        9,172,1,173,1,173,1,173,5,173,1800,8,173,10,173,12,173,1803,9,173,
        1,174,1,174,1,174,5,174,1808,8,174,10,174,12,174,1811,9,174,1,174,
        1,174,1,174,1,174,5,174,1817,8,174,10,174,12,174,1820,9,174,1,174,
        1,174,3,174,1824,8,174,1,175,3,175,1827,8,175,1,175,1,175,1,175,
        1,175,1,175,1,175,1,175,3,175,1836,8,175,1,176,3,176,1839,8,176,
        1,176,1,176,1,177,1,177,1,177,5,177,1846,8,177,10,177,12,177,1849,
        9,177,1,177,3,177,1852,8,177,1,177,1,177,1,177,1,177,1,177,1,177,
        1,177,1,177,1,177,1,177,1,177,1,177,3,177,1866,8,177,1,178,1,178,
        1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,
        1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,
        1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,
        1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,
        1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,
        1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,
        1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,
        1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,
        1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,
        1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,3,178,
        1979,8,178,1,178,0,3,196,198,200,179,0,2,4,6,8,10,12,14,16,18,20,
        22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,
        66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,
        108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,
        140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,
        172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,
        204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,
        236,238,240,242,244,246,248,250,252,254,256,258,260,262,264,266,
        268,270,272,274,276,278,280,282,284,286,288,290,292,294,296,298,
        300,302,304,306,308,310,312,314,316,318,320,322,324,326,328,330,
        332,334,336,338,340,342,344,346,348,350,352,354,356,0,37,1,0,67,
        70,11,0,2,5,7,20,22,22,24,24,26,26,28,34,36,36,46,46,97,97,150,150,
        348,348,1,0,170,171,1,0,60,63,2,0,163,163,169,169,1,0,22,23,1,0,
        37,38,1,0,44,45,2,0,97,97,347,347,1,0,75,76,2,0,192,192,225,234,
        2,0,191,191,224,224,2,0,192,193,225,225,7,0,190,191,196,196,199,
        199,204,204,206,209,211,212,216,216,1,0,213,214,1,0,211,212,1,0,
        172,174,3,0,8,8,94,94,387,417,2,0,108,108,358,363,1,0,265,276,1,
        0,365,374,1,0,277,279,13,0,118,120,124,124,126,126,129,129,132,132,
        134,134,136,137,139,142,144,147,280,297,299,300,302,318,321,330,
        4,0,119,119,287,287,316,316,318,318,8,0,120,120,126,126,132,132,
        134,134,139,139,141,142,145,145,147,147,8,0,121,123,125,125,127,
        128,130,130,135,135,138,138,143,143,148,148,1,0,319,320,5,0,117,
        117,213,214,350,353,355,357,364,364,2,0,375,377,379,379,2,0,331,
        335,337,348,3,0,116,116,163,169,350,350,1,0,380,383,1,0,384,386,
        1,0,453,454,1,0,114,115,9,0,120,123,125,128,130,130,132,132,134,
        135,138,139,141,143,145,145,147,148,9,0,62,62,120,120,126,126,133,
        134,139,139,141,142,145,145,147,147,424,444,2240,0,359,1,0,0,0,2,
        365,1,0,0,0,4,367,1,0,0,0,6,375,1,0,0,0,8,381,1,0,0,0,10,383,1,0,
        0,0,12,394,1,0,0,0,14,427,1,0,0,0,16,429,1,0,0,0,18,432,1,0,0,0,
        20,447,1,0,0,0,22,450,1,0,0,0,24,453,1,0,0,0,26,456,1,0,0,0,28,459,
        1,0,0,0,30,463,1,0,0,0,32,467,1,0,0,0,34,477,1,0,0,0,36,486,1,0,
        0,0,38,518,1,0,0,0,40,530,1,0,0,0,42,545,1,0,0,0,44,553,1,0,0,0,
        46,555,1,0,0,0,48,574,1,0,0,0,50,585,1,0,0,0,52,591,1,0,0,0,54,593,
        1,0,0,0,56,602,1,0,0,0,58,610,1,0,0,0,60,643,1,0,0,0,62,648,1,0,
        0,0,64,659,1,0,0,0,66,661,1,0,0,0,68,663,1,0,0,0,70,681,1,0,0,0,
        72,699,1,0,0,0,74,703,1,0,0,0,76,707,1,0,0,0,78,725,1,0,0,0,80,727,
        1,0,0,0,82,735,1,0,0,0,84,739,1,0,0,0,86,745,1,0,0,0,88,748,1,0,
        0,0,90,752,1,0,0,0,92,754,1,0,0,0,94,799,1,0,0,0,96,801,1,0,0,0,
        98,803,1,0,0,0,100,805,1,0,0,0,102,812,1,0,0,0,104,820,1,0,0,0,106,
        828,1,0,0,0,108,837,1,0,0,0,110,839,1,0,0,0,112,845,1,0,0,0,114,
        854,1,0,0,0,116,858,1,0,0,0,118,870,1,0,0,0,120,880,1,0,0,0,122,
        882,1,0,0,0,124,888,1,0,0,0,126,894,1,0,0,0,128,911,1,0,0,0,130,
        925,1,0,0,0,132,941,1,0,0,0,134,943,1,0,0,0,136,986,1,0,0,0,138,
        988,1,0,0,0,140,995,1,0,0,0,142,1011,1,0,0,0,144,1021,1,0,0,0,146,
        1023,1,0,0,0,148,1035,1,0,0,0,150,1070,1,0,0,0,152,1075,1,0,0,0,
        154,1085,1,0,0,0,156,1088,1,0,0,0,158,1108,1,0,0,0,160,1110,1,0,
        0,0,162,1114,1,0,0,0,164,1131,1,0,0,0,166,1133,1,0,0,0,168,1138,
        1,0,0,0,170,1148,1,0,0,0,172,1156,1,0,0,0,174,1160,1,0,0,0,176,1165,
        1,0,0,0,178,1172,1,0,0,0,180,1174,1,0,0,0,182,1176,1,0,0,0,184,1209,
        1,0,0,0,186,1211,1,0,0,0,188,1213,1,0,0,0,190,1222,1,0,0,0,192,1231,
        1,0,0,0,194,1246,1,0,0,0,196,1252,1,0,0,0,198,1271,1,0,0,0,200,1333,
        1,0,0,0,202,1355,1,0,0,0,204,1367,1,0,0,0,206,1369,1,0,0,0,208,1376,
        1,0,0,0,210,1399,1,0,0,0,212,1401,1,0,0,0,214,1415,1,0,0,0,216,1443,
        1,0,0,0,218,1445,1,0,0,0,220,1450,1,0,0,0,222,1459,1,0,0,0,224,1484,
        1,0,0,0,226,1486,1,0,0,0,228,1488,1,0,0,0,230,1492,1,0,0,0,232,1494,
        1,0,0,0,234,1499,1,0,0,0,236,1518,1,0,0,0,238,1531,1,0,0,0,240,1541,
        1,0,0,0,242,1551,1,0,0,0,244,1553,1,0,0,0,246,1558,1,0,0,0,248,1564,
        1,0,0,0,250,1582,1,0,0,0,252,1584,1,0,0,0,254,1588,1,0,0,0,256,1598,
        1,0,0,0,258,1604,1,0,0,0,260,1608,1,0,0,0,262,1610,1,0,0,0,264,1614,
        1,0,0,0,266,1648,1,0,0,0,268,1650,1,0,0,0,270,1652,1,0,0,0,272,1654,
        1,0,0,0,274,1656,1,0,0,0,276,1658,1,0,0,0,278,1660,1,0,0,0,280,1662,
        1,0,0,0,282,1669,1,0,0,0,284,1671,1,0,0,0,286,1678,1,0,0,0,288,1680,
        1,0,0,0,290,1684,1,0,0,0,292,1686,1,0,0,0,294,1695,1,0,0,0,296,1697,
        1,0,0,0,298,1699,1,0,0,0,300,1701,1,0,0,0,302,1703,1,0,0,0,304,1705,
        1,0,0,0,306,1707,1,0,0,0,308,1709,1,0,0,0,310,1711,1,0,0,0,312,1721,
        1,0,0,0,314,1723,1,0,0,0,316,1727,1,0,0,0,318,1730,1,0,0,0,320,1735,
        1,0,0,0,322,1740,1,0,0,0,324,1745,1,0,0,0,326,1749,1,0,0,0,328,1754,
        1,0,0,0,330,1756,1,0,0,0,332,1759,1,0,0,0,334,1762,1,0,0,0,336,1765,
        1,0,0,0,338,1767,1,0,0,0,340,1769,1,0,0,0,342,1780,1,0,0,0,344,1788,
        1,0,0,0,346,1796,1,0,0,0,348,1823,1,0,0,0,350,1835,1,0,0,0,352,1838,
        1,0,0,0,354,1865,1,0,0,0,356,1978,1,0,0,0,358,360,3,2,1,0,359,358,
        1,0,0,0,359,360,1,0,0,0,360,361,1,0,0,0,361,362,5,0,0,1,362,1,1,
        0,0,0,363,366,3,6,3,0,364,366,3,4,2,0,365,363,1,0,0,0,365,364,1,
        0,0,0,366,3,1,0,0,0,367,372,3,12,6,0,368,369,5,160,0,0,369,371,3,
        14,7,0,370,368,1,0,0,0,371,374,1,0,0,0,372,370,1,0,0,0,372,373,1,
        0,0,0,373,5,1,0,0,0,374,372,1,0,0,0,375,377,5,5,0,0,376,378,3,8,
        4,0,377,376,1,0,0,0,377,378,1,0,0,0,378,379,1,0,0,0,379,380,3,4,
        2,0,380,7,1,0,0,0,381,382,7,0,0,0,382,9,1,0,0,0,383,388,3,18,9,0,
        384,385,5,160,0,0,385,387,3,14,7,0,386,384,1,0,0,0,387,390,1,0,0,
        0,388,386,1,0,0,0,388,389,1,0,0,0,389,11,1,0,0,0,390,388,1,0,0,0,
        391,395,3,20,10,0,392,395,3,22,11,0,393,395,3,18,9,0,394,391,1,0,
        0,0,394,392,1,0,0,0,394,393,1,0,0,0,395,13,1,0,0,0,396,428,3,24,
        12,0,397,428,3,26,13,0,398,428,3,28,14,0,399,428,3,148,74,0,400,
        428,3,34,17,0,401,428,3,36,18,0,402,428,3,38,19,0,403,428,3,40,20,
        0,404,428,3,42,21,0,405,428,3,54,27,0,406,428,3,56,28,0,407,428,
        3,58,29,0,408,428,3,68,34,0,409,428,3,70,35,0,410,428,3,72,36,0,
        411,428,3,74,37,0,412,428,3,76,38,0,413,428,3,92,46,0,414,428,3,
        100,50,0,415,428,3,130,65,0,416,428,3,134,67,0,417,428,3,138,69,
        0,418,428,3,108,54,0,419,428,3,116,58,0,420,428,3,126,63,0,421,428,
        3,128,64,0,422,428,3,122,61,0,423,428,3,124,62,0,424,428,3,44,22,
        0,425,428,3,86,43,0,426,428,3,46,23,0,427,396,1,0,0,0,427,397,1,
        0,0,0,427,398,1,0,0,0,427,399,1,0,0,0,427,400,1,0,0,0,427,401,1,
        0,0,0,427,402,1,0,0,0,427,403,1,0,0,0,427,404,1,0,0,0,427,405,1,
        0,0,0,427,406,1,0,0,0,427,407,1,0,0,0,427,408,1,0,0,0,427,409,1,
        0,0,0,427,410,1,0,0,0,427,411,1,0,0,0,427,412,1,0,0,0,427,413,1,
        0,0,0,427,414,1,0,0,0,427,415,1,0,0,0,427,416,1,0,0,0,427,417,1,
        0,0,0,427,418,1,0,0,0,427,419,1,0,0,0,427,420,1,0,0,0,427,421,1,
        0,0,0,427,422,1,0,0,0,427,423,1,0,0,0,427,424,1,0,0,0,427,425,1,
        0,0,0,427,426,1,0,0,0,428,15,1,0,0,0,429,430,7,1,0,0,430,17,1,0,
        0,0,431,433,5,2,0,0,432,431,1,0,0,0,432,433,1,0,0,0,433,437,1,0,
        0,0,434,436,3,196,98,0,435,434,1,0,0,0,436,439,1,0,0,0,437,435,1,
        0,0,0,437,438,1,0,0,0,438,440,1,0,0,0,439,437,1,0,0,0,440,444,3,
        142,71,0,441,443,3,196,98,0,442,441,1,0,0,0,443,446,1,0,0,0,444,
        442,1,0,0,0,444,445,1,0,0,0,445,19,1,0,0,0,446,444,1,0,0,0,447,448,
        5,3,0,0,448,449,3,146,73,0,449,21,1,0,0,0,450,451,5,4,0,0,451,452,
        5,64,0,0,452,23,1,0,0,0,453,454,5,7,0,0,454,455,3,196,98,0,455,25,
        1,0,0,0,456,457,5,8,0,0,457,458,3,30,15,0,458,27,1,0,0,0,459,460,
        5,9,0,0,460,461,3,30,15,0,461,29,1,0,0,0,462,464,7,2,0,0,463,462,
        1,0,0,0,463,464,1,0,0,0,464,465,1,0,0,0,465,466,3,32,16,0,466,31,
        1,0,0,0,467,474,3,230,115,0,468,470,5,161,0,0,469,468,1,0,0,0,469,
        470,1,0,0,0,470,471,1,0,0,0,471,473,3,230,115,0,472,469,1,0,0,0,
        473,476,1,0,0,0,474,472,1,0,0,0,474,475,1,0,0,0,475,33,1,0,0,0,476,
        474,1,0,0,0,477,478,5,10,0,0,478,483,3,160,80,0,479,480,5,161,0,
        0,480,482,3,160,80,0,481,479,1,0,0,0,482,485,1,0,0,0,483,481,1,0,
        0,0,483,484,1,0,0,0,484,35,1,0,0,0,485,483,1,0,0,0,486,490,5,11,
        0,0,487,488,5,80,0,0,488,489,5,163,0,0,489,491,3,318,159,0,490,487,
        1,0,0,0,490,491,1,0,0,0,491,495,1,0,0,0,492,493,5,81,0,0,493,494,
        5,163,0,0,494,496,3,326,163,0,495,492,1,0,0,0,495,496,1,0,0,0,496,
        500,1,0,0,0,497,498,5,82,0,0,498,499,5,163,0,0,499,501,3,316,158,
        0,500,497,1,0,0,0,500,501,1,0,0,0,501,502,1,0,0,0,502,507,3,182,
        91,0,503,504,5,161,0,0,504,506,3,182,91,0,505,503,1,0,0,0,506,509,
        1,0,0,0,507,505,1,0,0,0,507,508,1,0,0,0,508,511,1,0,0,0,509,507,
        1,0,0,0,510,512,3,164,82,0,511,510,1,0,0,0,511,512,1,0,0,0,512,516,
        1,0,0,0,513,514,5,79,0,0,514,515,5,163,0,0,515,517,3,326,163,0,516,
        513,1,0,0,0,516,517,1,0,0,0,517,37,1,0,0,0,518,519,5,12,0,0,519,
        524,3,174,87,0,520,521,5,161,0,0,521,523,3,174,87,0,522,520,1,0,
        0,0,523,526,1,0,0,0,524,522,1,0,0,0,524,525,1,0,0,0,525,528,1,0,
        0,0,526,524,1,0,0,0,527,529,3,164,82,0,528,527,1,0,0,0,528,529,1,
        0,0,0,529,39,1,0,0,0,530,532,5,13,0,0,531,533,3,318,159,0,532,531,
        1,0,0,0,532,533,1,0,0,0,533,534,1,0,0,0,534,538,3,220,110,0,535,
        536,5,77,0,0,536,537,5,163,0,0,537,539,3,326,163,0,538,535,1,0,0,
        0,538,539,1,0,0,0,539,543,1,0,0,0,540,541,5,78,0,0,541,542,5,163,
        0,0,542,544,3,326,163,0,543,540,1,0,0,0,543,544,1,0,0,0,544,41,1,
        0,0,0,545,547,5,14,0,0,546,548,3,318,159,0,547,546,1,0,0,0,547,548,
        1,0,0,0,548,549,1,0,0,0,549,551,3,170,85,0,550,552,7,3,0,0,551,550,
        1,0,0,0,551,552,1,0,0,0,552,43,1,0,0,0,553,554,5,348,0,0,554,45,
        1,0,0,0,555,559,5,34,0,0,556,558,3,48,24,0,557,556,1,0,0,0,558,561,
        1,0,0,0,559,557,1,0,0,0,559,560,1,0,0,0,560,562,1,0,0,0,561,559,
        1,0,0,0,562,565,3,184,92,0,563,564,5,57,0,0,564,566,3,226,113,0,
        565,563,1,0,0,0,565,566,1,0,0,0,566,47,1,0,0,0,567,572,3,168,84,
        0,568,569,5,418,0,0,569,570,5,163,0,0,570,572,3,52,26,0,571,567,
        1,0,0,0,571,568,1,0,0,0,572,575,1,0,0,0,573,575,3,50,25,0,574,571,
        1,0,0,0,574,573,1,0,0,0,575,49,1,0,0,0,576,577,5,100,0,0,577,578,
        5,163,0,0,578,586,3,318,159,0,579,580,5,101,0,0,580,583,5,163,0,
        0,581,584,3,326,163,0,582,584,3,350,175,0,583,581,1,0,0,0,583,582,
        1,0,0,0,584,586,1,0,0,0,585,576,1,0,0,0,585,579,1,0,0,0,586,51,1,
        0,0,0,587,588,3,318,159,0,588,589,3,338,169,0,589,592,1,0,0,0,590,
        592,3,316,158,0,591,587,1,0,0,0,591,590,1,0,0,0,592,53,1,0,0,0,593,
        594,5,15,0,0,594,599,3,172,86,0,595,596,5,161,0,0,596,598,3,172,
        86,0,597,595,1,0,0,0,598,601,1,0,0,0,599,597,1,0,0,0,599,600,1,0,
        0,0,600,55,1,0,0,0,601,599,1,0,0,0,602,604,5,16,0,0,603,605,3,318,
        159,0,604,603,1,0,0,0,604,605,1,0,0,0,605,608,1,0,0,0,606,607,5,
        6,0,0,607,609,3,318,159,0,608,606,1,0,0,0,608,609,1,0,0,0,609,57,
        1,0,0,0,610,611,5,17,0,0,611,615,3,226,113,0,612,614,3,60,30,0,613,
        612,1,0,0,0,614,617,1,0,0,0,615,613,1,0,0,0,615,616,1,0,0,0,616,
        620,1,0,0,0,617,615,1,0,0,0,618,619,5,56,0,0,619,621,3,342,171,0,
        620,618,1,0,0,0,620,621,1,0,0,0,621,59,1,0,0,0,622,623,5,418,0,0,
        623,624,5,163,0,0,624,644,3,64,32,0,625,626,5,419,0,0,626,627,5,
        163,0,0,627,644,3,318,159,0,628,629,5,420,0,0,629,630,5,163,0,0,
        630,632,3,312,156,0,631,633,3,338,169,0,632,631,1,0,0,0,632,633,
        1,0,0,0,633,644,1,0,0,0,634,635,5,423,0,0,635,636,5,163,0,0,636,
        644,3,62,31,0,637,638,5,421,0,0,638,639,5,163,0,0,639,644,3,194,
        97,0,640,641,5,422,0,0,641,642,5,163,0,0,642,644,3,194,97,0,643,
        622,1,0,0,0,643,625,1,0,0,0,643,628,1,0,0,0,643,634,1,0,0,0,643,
        637,1,0,0,0,643,640,1,0,0,0,644,61,1,0,0,0,645,649,5,213,0,0,646,
        649,5,214,0,0,647,649,3,312,156,0,648,645,1,0,0,0,648,646,1,0,0,
        0,648,647,1,0,0,0,649,63,1,0,0,0,650,652,3,312,156,0,651,653,3,338,
        169,0,652,651,1,0,0,0,652,653,1,0,0,0,653,660,1,0,0,0,654,660,3,
        66,33,0,655,656,3,350,175,0,656,657,3,338,169,0,657,660,1,0,0,0,
        658,660,3,350,175,0,659,650,1,0,0,0,659,654,1,0,0,0,659,655,1,0,
        0,0,659,658,1,0,0,0,660,65,1,0,0,0,661,662,5,251,0,0,662,67,1,0,
        0,0,663,665,5,18,0,0,664,666,3,318,159,0,665,664,1,0,0,0,665,666,
        1,0,0,0,666,670,1,0,0,0,667,668,5,98,0,0,668,669,5,163,0,0,669,671,
        3,316,158,0,670,667,1,0,0,0,670,671,1,0,0,0,671,675,1,0,0,0,672,
        673,5,99,0,0,673,674,5,163,0,0,674,676,3,326,163,0,675,672,1,0,0,
        0,675,676,1,0,0,0,676,677,1,0,0,0,677,679,3,220,110,0,678,680,3,
        162,81,0,679,678,1,0,0,0,679,680,1,0,0,0,680,69,1,0,0,0,681,683,
        5,19,0,0,682,684,3,318,159,0,683,682,1,0,0,0,683,684,1,0,0,0,684,
        688,1,0,0,0,685,686,5,98,0,0,686,687,5,163,0,0,687,689,3,316,158,
        0,688,685,1,0,0,0,688,689,1,0,0,0,689,693,1,0,0,0,690,691,5,99,0,
        0,691,692,5,163,0,0,692,694,3,326,163,0,693,690,1,0,0,0,693,694,
        1,0,0,0,694,695,1,0,0,0,695,697,3,220,110,0,696,698,3,162,81,0,697,
        696,1,0,0,0,697,698,1,0,0,0,698,71,1,0,0,0,699,700,5,24,0,0,700,
        701,3,198,99,0,701,702,3,316,158,0,702,73,1,0,0,0,703,704,5,20,0,
        0,704,705,3,198,99,0,705,706,3,316,158,0,706,75,1,0,0,0,707,711,
        5,21,0,0,708,710,3,78,39,0,709,708,1,0,0,0,710,713,1,0,0,0,711,709,
        1,0,0,0,711,712,1,0,0,0,712,77,1,0,0,0,713,711,1,0,0,0,714,715,5,
        102,0,0,715,716,5,163,0,0,716,726,3,198,99,0,717,718,5,103,0,0,718,
        719,5,163,0,0,719,726,3,198,99,0,720,721,5,104,0,0,721,723,5,163,
        0,0,722,720,1,0,0,0,722,723,1,0,0,0,723,724,1,0,0,0,724,726,3,80,
        40,0,725,714,1,0,0,0,725,717,1,0,0,0,725,722,1,0,0,0,726,79,1,0,
        0,0,727,732,3,82,41,0,728,729,5,162,0,0,729,731,3,82,41,0,730,728,
        1,0,0,0,731,734,1,0,0,0,732,730,1,0,0,0,732,733,1,0,0,0,733,81,1,
        0,0,0,734,732,1,0,0,0,735,737,3,350,175,0,736,738,3,84,42,0,737,
        736,1,0,0,0,737,738,1,0,0,0,738,83,1,0,0,0,739,741,5,181,0,0,740,
        742,5,448,0,0,741,740,1,0,0,0,741,742,1,0,0,0,742,743,1,0,0,0,743,
        744,5,182,0,0,744,85,1,0,0,0,745,746,5,22,0,0,746,747,3,88,44,0,
        747,87,1,0,0,0,748,749,3,342,171,0,749,750,7,4,0,0,750,751,3,316,
        158,0,751,89,1,0,0,0,752,753,7,5,0,0,753,91,1,0,0,0,754,755,5,26,
        0,0,755,757,3,198,99,0,756,758,3,164,82,0,757,756,1,0,0,0,757,758,
        1,0,0,0,758,762,1,0,0,0,759,760,5,41,0,0,760,761,5,163,0,0,761,763,
        3,96,48,0,762,759,1,0,0,0,762,763,1,0,0,0,763,767,1,0,0,0,764,765,
        5,200,0,0,765,766,5,163,0,0,766,768,3,98,49,0,767,764,1,0,0,0,767,
        768,1,0,0,0,768,772,1,0,0,0,769,770,5,42,0,0,770,771,5,163,0,0,771,
        773,3,318,159,0,772,769,1,0,0,0,772,773,1,0,0,0,773,777,1,0,0,0,
        774,775,5,43,0,0,775,776,5,163,0,0,776,778,3,318,159,0,777,774,1,
        0,0,0,777,778,1,0,0,0,778,782,1,0,0,0,779,780,5,27,0,0,780,781,5,
        163,0,0,781,783,3,316,158,0,782,779,1,0,0,0,782,783,1,0,0,0,783,
        787,1,0,0,0,784,786,3,94,47,0,785,784,1,0,0,0,786,789,1,0,0,0,787,
        785,1,0,0,0,787,788,1,0,0,0,788,93,1,0,0,0,789,787,1,0,0,0,790,791,
        5,25,0,0,791,792,5,163,0,0,792,800,3,316,158,0,793,794,5,39,0,0,
        794,795,5,163,0,0,795,800,3,318,159,0,796,797,5,40,0,0,797,798,5,
        163,0,0,798,800,3,320,160,0,799,790,1,0,0,0,799,793,1,0,0,0,799,
        796,1,0,0,0,800,95,1,0,0,0,801,802,7,6,0,0,802,97,1,0,0,0,803,804,
        7,7,0,0,804,99,1,0,0,0,805,806,5,150,0,0,806,807,3,216,108,0,807,
        810,3,102,51,0,808,809,7,8,0,0,809,811,3,104,52,0,810,808,1,0,0,
        0,810,811,1,0,0,0,811,101,1,0,0,0,812,817,3,106,53,0,813,814,5,161,
        0,0,814,816,3,106,53,0,815,813,1,0,0,0,816,819,1,0,0,0,817,815,1,
        0,0,0,817,818,1,0,0,0,818,103,1,0,0,0,819,817,1,0,0,0,820,825,3,
        106,53,0,821,822,5,161,0,0,822,824,3,106,53,0,823,821,1,0,0,0,824,
        827,1,0,0,0,825,823,1,0,0,0,825,826,1,0,0,0,826,105,1,0,0,0,827,
        825,1,0,0,0,828,831,3,226,113,0,829,830,5,56,0,0,830,832,3,226,113,
        0,831,829,1,0,0,0,831,832,1,0,0,0,832,107,1,0,0,0,833,834,5,31,0,
        0,834,838,3,110,55,0,835,836,5,31,0,0,836,838,3,112,56,0,837,833,
        1,0,0,0,837,835,1,0,0,0,838,109,1,0,0,0,839,840,5,66,0,0,840,843,
        3,200,100,0,841,842,5,107,0,0,842,844,3,220,110,0,843,841,1,0,0,
        0,843,844,1,0,0,0,844,111,1,0,0,0,845,846,5,65,0,0,846,851,3,114,
        57,0,847,848,5,161,0,0,848,850,3,114,57,0,849,847,1,0,0,0,850,853,
        1,0,0,0,851,849,1,0,0,0,851,852,1,0,0,0,852,113,1,0,0,0,853,851,
        1,0,0,0,854,855,3,226,113,0,855,856,5,163,0,0,856,857,3,200,100,
        0,857,115,1,0,0,0,858,861,5,33,0,0,859,860,5,14,0,0,860,862,3,222,
        111,0,861,859,1,0,0,0,861,862,1,0,0,0,862,863,1,0,0,0,863,867,3,
        118,59,0,864,866,3,118,59,0,865,864,1,0,0,0,866,869,1,0,0,0,867,
        865,1,0,0,0,867,868,1,0,0,0,868,117,1,0,0,0,869,867,1,0,0,0,870,
        871,3,120,60,0,871,872,5,177,0,0,872,873,3,318,159,0,873,874,5,161,
        0,0,874,875,3,226,113,0,875,878,5,178,0,0,876,877,5,56,0,0,877,879,
        3,342,171,0,878,876,1,0,0,0,878,879,1,0,0,0,879,119,1,0,0,0,880,
        881,7,9,0,0,881,121,1,0,0,0,882,883,5,36,0,0,883,886,3,226,113,0,
        884,885,5,56,0,0,885,887,3,342,171,0,886,884,1,0,0,0,886,887,1,0,
        0,0,887,123,1,0,0,0,888,889,5,32,0,0,889,892,3,226,113,0,890,891,
        5,56,0,0,891,893,3,348,174,0,892,890,1,0,0,0,892,893,1,0,0,0,893,
        125,1,0,0,0,894,898,5,35,0,0,895,896,5,71,0,0,896,897,5,163,0,0,
        897,899,3,326,163,0,898,895,1,0,0,0,898,899,1,0,0,0,899,900,1,0,
        0,0,900,901,5,179,0,0,901,906,3,14,7,0,902,903,5,160,0,0,903,905,
        3,14,7,0,904,902,1,0,0,0,905,908,1,0,0,0,906,904,1,0,0,0,906,907,
        1,0,0,0,907,909,1,0,0,0,908,906,1,0,0,0,909,910,5,180,0,0,910,127,
        1,0,0,0,911,912,5,97,0,0,912,914,5,179,0,0,913,915,3,18,9,0,914,
        913,1,0,0,0,914,915,1,0,0,0,915,920,1,0,0,0,916,917,5,160,0,0,917,
        919,3,14,7,0,918,916,1,0,0,0,919,922,1,0,0,0,920,918,1,0,0,0,920,
        921,1,0,0,0,921,923,1,0,0,0,922,920,1,0,0,0,923,924,5,180,0,0,924,
        129,1,0,0,0,925,929,5,28,0,0,926,928,3,132,66,0,927,926,1,0,0,0,
        928,931,1,0,0,0,929,927,1,0,0,0,929,930,1,0,0,0,930,131,1,0,0,0,
        931,929,1,0,0,0,932,933,5,83,0,0,933,934,5,163,0,0,934,942,3,318,
        159,0,935,936,5,84,0,0,936,937,5,163,0,0,937,942,3,318,159,0,938,
        939,5,85,0,0,939,940,5,163,0,0,940,942,3,316,158,0,941,932,1,0,0,
        0,941,935,1,0,0,0,941,938,1,0,0,0,942,133,1,0,0,0,943,947,5,29,0,
        0,944,946,3,136,68,0,945,944,1,0,0,0,946,949,1,0,0,0,947,945,1,0,
        0,0,947,948,1,0,0,0,948,135,1,0,0,0,949,947,1,0,0,0,950,951,5,86,
        0,0,951,952,5,163,0,0,952,987,3,318,159,0,953,954,5,87,0,0,954,955,
        5,163,0,0,955,987,3,318,159,0,956,957,5,88,0,0,957,958,5,163,0,0,
        958,987,3,318,159,0,959,960,5,89,0,0,960,961,5,163,0,0,961,987,3,
        318,159,0,962,963,5,90,0,0,963,964,5,163,0,0,964,987,3,320,160,0,
        965,966,5,91,0,0,966,967,5,163,0,0,967,987,3,320,160,0,968,969,5,
        92,0,0,969,970,5,163,0,0,970,987,3,316,158,0,971,972,5,93,0,0,972,
        973,5,163,0,0,973,987,3,316,158,0,974,975,5,290,0,0,975,976,5,163,
        0,0,976,987,3,316,158,0,977,978,5,94,0,0,978,979,5,163,0,0,979,987,
        3,316,158,0,980,981,5,95,0,0,981,982,5,163,0,0,982,987,3,318,159,
        0,983,984,5,96,0,0,984,985,5,163,0,0,985,987,3,320,160,0,986,950,
        1,0,0,0,986,953,1,0,0,0,986,956,1,0,0,0,986,959,1,0,0,0,986,962,
        1,0,0,0,986,965,1,0,0,0,986,968,1,0,0,0,986,971,1,0,0,0,986,974,
        1,0,0,0,986,977,1,0,0,0,986,980,1,0,0,0,986,983,1,0,0,0,987,137,
        1,0,0,0,988,992,5,30,0,0,989,991,3,140,70,0,990,989,1,0,0,0,991,
        994,1,0,0,0,992,990,1,0,0,0,992,993,1,0,0,0,993,139,1,0,0,0,994,
        992,1,0,0,0,995,996,3,350,175,0,996,997,5,163,0,0,997,998,3,312,
        156,0,998,141,1,0,0,0,999,1000,5,58,0,0,1000,1001,5,163,0,0,1001,
        1012,3,144,72,0,1002,1003,5,59,0,0,1003,1004,5,163,0,0,1004,1012,
        3,144,72,0,1005,1006,5,58,0,0,1006,1007,5,163,0,0,1007,1012,3,218,
        109,0,1008,1009,5,59,0,0,1009,1010,5,163,0,0,1010,1012,3,218,109,
        0,1011,999,1,0,0,0,1011,1002,1,0,0,0,1011,1005,1,0,0,0,1011,1008,
        1,0,0,0,1012,143,1,0,0,0,1013,1014,5,179,0,0,1014,1015,3,10,5,0,
        1015,1018,5,180,0,0,1016,1017,5,56,0,0,1017,1019,3,342,171,0,1018,
        1016,1,0,0,0,1018,1019,1,0,0,0,1019,1022,1,0,0,0,1020,1022,3,146,
        73,0,1021,1013,1,0,0,0,1021,1020,1,0,0,0,1022,145,1,0,0,0,1023,1028,
        3,216,108,0,1024,1025,5,161,0,0,1025,1027,3,216,108,0,1026,1024,
        1,0,0,0,1027,1030,1,0,0,0,1028,1026,1,0,0,0,1028,1029,1,0,0,0,1029,
        1033,1,0,0,0,1030,1028,1,0,0,0,1031,1032,5,56,0,0,1032,1034,3,342,
        171,0,1033,1031,1,0,0,0,1033,1034,1,0,0,0,1034,147,1,0,0,0,1035,
        1036,3,150,75,0,1036,1037,5,46,0,0,1037,1039,3,152,76,0,1038,1040,
        3,156,78,0,1039,1038,1,0,0,0,1039,1040,1,0,0,0,1040,1042,1,0,0,0,
        1041,1043,3,154,77,0,1042,1041,1,0,0,0,1042,1043,1,0,0,0,1043,1044,
        1,0,0,0,1044,1045,3,144,72,0,1045,149,1,0,0,0,1046,1048,5,48,0,0,
        1047,1046,1,0,0,0,1047,1048,1,0,0,0,1048,1071,1,0,0,0,1049,1071,
        5,53,0,0,1050,1052,5,344,0,0,1051,1053,5,49,0,0,1052,1051,1,0,0,
        0,1052,1053,1,0,0,0,1053,1071,1,0,0,0,1054,1056,5,343,0,0,1055,1057,
        5,49,0,0,1056,1055,1,0,0,0,1056,1057,1,0,0,0,1057,1071,1,0,0,0,1058,
        1060,5,50,0,0,1059,1061,5,49,0,0,1060,1059,1,0,0,0,1060,1061,1,0,
        0,0,1061,1071,1,0,0,0,1062,1064,5,344,0,0,1063,1062,1,0,0,0,1063,
        1064,1,0,0,0,1064,1065,1,0,0,0,1065,1071,5,51,0,0,1066,1068,5,344,
        0,0,1067,1066,1,0,0,0,1067,1068,1,0,0,0,1068,1069,1,0,0,0,1069,1071,
        5,52,0,0,1070,1047,1,0,0,0,1070,1049,1,0,0,0,1070,1050,1,0,0,0,1070,
        1054,1,0,0,0,1070,1058,1,0,0,0,1070,1063,1,0,0,0,1070,1067,1,0,0,
        0,1071,151,1,0,0,0,1072,1073,5,344,0,0,1073,1074,5,163,0,0,1074,
        1076,3,342,171,0,1075,1072,1,0,0,0,1075,1076,1,0,0,0,1076,1078,1,
        0,0,0,1077,1079,5,161,0,0,1078,1077,1,0,0,0,1078,1079,1,0,0,0,1079,
        1083,1,0,0,0,1080,1081,5,343,0,0,1081,1082,5,163,0,0,1082,1084,3,
        342,171,0,1083,1080,1,0,0,0,1083,1084,1,0,0,0,1084,153,1,0,0,0,1085,
        1086,5,47,0,0,1086,1087,3,196,98,0,1087,155,1,0,0,0,1088,1095,3,
        158,79,0,1089,1091,5,161,0,0,1090,1089,1,0,0,0,1090,1091,1,0,0,0,
        1091,1092,1,0,0,0,1092,1094,3,158,79,0,1093,1090,1,0,0,0,1094,1097,
        1,0,0,0,1095,1093,1,0,0,0,1095,1096,1,0,0,0,1096,157,1,0,0,0,1097,
        1095,1,0,0,0,1098,1099,5,54,0,0,1099,1100,5,162,0,0,1100,1101,5,
        446,0,0,1101,1102,5,163,0,0,1102,1109,3,350,175,0,1103,1104,5,55,
        0,0,1104,1105,5,162,0,0,1105,1106,5,446,0,0,1106,1107,5,163,0,0,
        1107,1109,3,350,175,0,1108,1098,1,0,0,0,1108,1103,1,0,0,0,1109,159,
        1,0,0,0,1110,1111,3,228,114,0,1111,1112,5,56,0,0,1112,1113,3,228,
        114,0,1113,161,1,0,0,0,1114,1115,5,57,0,0,1115,1116,3,220,110,0,
        1116,163,1,0,0,0,1117,1118,5,57,0,0,1118,1132,3,220,110,0,1119,1120,
        5,57,0,0,1120,1132,3,166,83,0,1121,1122,5,57,0,0,1122,1123,3,166,
        83,0,1123,1124,5,161,0,0,1124,1125,3,220,110,0,1125,1132,1,0,0,0,
        1126,1127,5,57,0,0,1127,1128,3,220,110,0,1128,1129,5,161,0,0,1129,
        1130,3,166,83,0,1130,1132,1,0,0,0,1131,1117,1,0,0,0,1131,1119,1,
        0,0,0,1131,1121,1,0,0,0,1131,1126,1,0,0,0,1132,165,1,0,0,0,1133,
        1136,3,168,84,0,1134,1135,5,56,0,0,1135,1137,3,342,171,0,1136,1134,
        1,0,0,0,1136,1137,1,0,0,0,1137,167,1,0,0,0,1138,1139,5,418,0,0,1139,
        1140,5,177,0,0,1140,1141,3,226,113,0,1141,1142,5,161,0,0,1142,1144,
        3,312,156,0,1143,1145,3,338,169,0,1144,1143,1,0,0,0,1144,1145,1,
        0,0,0,1145,1146,1,0,0,0,1146,1147,5,178,0,0,1147,169,1,0,0,0,1148,
        1153,3,222,111,0,1149,1150,5,161,0,0,1150,1152,3,222,111,0,1151,
        1149,1,0,0,0,1152,1155,1,0,0,0,1153,1151,1,0,0,0,1153,1154,1,0,0,
        0,1154,171,1,0,0,0,1155,1153,1,0,0,0,1156,1157,3,226,113,0,1157,
        1158,5,163,0,0,1158,1159,3,196,98,0,1159,173,1,0,0,0,1160,1163,3,
        176,88,0,1161,1162,5,56,0,0,1162,1164,3,228,114,0,1163,1161,1,0,
        0,0,1163,1164,1,0,0,0,1164,175,1,0,0,0,1165,1166,3,178,89,0,1166,
        1167,5,177,0,0,1167,1168,3,240,120,0,1168,1169,5,178,0,0,1169,177,
        1,0,0,0,1170,1173,3,186,93,0,1171,1173,3,180,90,0,1172,1170,1,0,
        0,0,1172,1171,1,0,0,0,1173,179,1,0,0,0,1174,1175,7,10,0,0,1175,181,
        1,0,0,0,1176,1179,3,184,92,0,1177,1178,5,56,0,0,1178,1180,3,228,
        114,0,1179,1177,1,0,0,0,1179,1180,1,0,0,0,1180,183,1,0,0,0,1181,
        1182,3,186,93,0,1182,1183,5,177,0,0,1183,1184,3,200,100,0,1184,1185,
        5,178,0,0,1185,1210,1,0,0,0,1186,1187,7,11,0,0,1187,1188,5,177,0,
        0,1188,1189,3,202,101,0,1189,1190,5,178,0,0,1190,1210,1,0,0,0,1191,
        1194,7,11,0,0,1192,1193,5,177,0,0,1193,1195,5,178,0,0,1194,1192,
        1,0,0,0,1194,1195,1,0,0,0,1195,1210,1,0,0,0,1196,1197,5,445,0,0,
        1197,1198,5,177,0,0,1198,1199,3,200,100,0,1199,1200,5,178,0,0,1200,
        1210,1,0,0,0,1201,1202,7,12,0,0,1202,1203,5,177,0,0,1203,1204,3,
        200,100,0,1204,1205,5,178,0,0,1205,1210,1,0,0,0,1206,1210,3,190,
        95,0,1207,1210,3,192,96,0,1208,1210,3,188,94,0,1209,1181,1,0,0,0,
        1209,1186,1,0,0,0,1209,1191,1,0,0,0,1209,1196,1,0,0,0,1209,1201,
        1,0,0,0,1209,1206,1,0,0,0,1209,1207,1,0,0,0,1209,1208,1,0,0,0,1210,
        185,1,0,0,0,1211,1212,7,13,0,0,1212,187,1,0,0,0,1213,1214,7,14,0,
        0,1214,1215,5,177,0,0,1215,1218,3,200,100,0,1216,1217,5,161,0,0,
        1217,1219,3,200,100,0,1218,1216,1,0,0,0,1218,1219,1,0,0,0,1219,1220,
        1,0,0,0,1220,1221,5,178,0,0,1221,189,1,0,0,0,1222,1223,5,215,0,0,
        1223,1224,5,177,0,0,1224,1227,3,226,113,0,1225,1226,5,161,0,0,1226,
        1228,3,318,159,0,1227,1225,1,0,0,0,1227,1228,1,0,0,0,1228,1229,1,
        0,0,0,1229,1230,5,178,0,0,1230,191,1,0,0,0,1231,1232,7,15,0,0,1232,
        1233,5,177,0,0,1233,1234,3,200,100,0,1234,1235,5,161,0,0,1235,1238,
        3,194,97,0,1236,1237,5,161,0,0,1237,1239,3,194,97,0,1238,1236,1,
        0,0,0,1238,1239,1,0,0,0,1239,1240,1,0,0,0,1240,1241,5,178,0,0,1241,
        193,1,0,0,0,1242,1247,3,318,159,0,1243,1247,3,320,160,0,1244,1247,
        3,322,161,0,1245,1247,3,324,162,0,1246,1242,1,0,0,0,1246,1243,1,
        0,0,0,1246,1244,1,0,0,0,1246,1245,1,0,0,0,1247,195,1,0,0,0,1248,
        1249,6,98,-1,0,1249,1250,5,110,0,0,1250,1253,3,196,98,5,1251,1253,
        3,198,99,0,1252,1248,1,0,0,0,1252,1251,1,0,0,0,1253,1265,1,0,0,0,
        1254,1255,10,4,0,0,1255,1256,5,112,0,0,1256,1264,3,196,98,5,1257,
        1258,10,3,0,0,1258,1259,5,113,0,0,1259,1264,3,196,98,4,1260,1261,
        10,2,0,0,1261,1262,5,111,0,0,1262,1264,3,196,98,3,1263,1254,1,0,
        0,0,1263,1257,1,0,0,0,1263,1260,1,0,0,0,1264,1267,1,0,0,0,1265,1263,
        1,0,0,0,1265,1266,1,0,0,0,1266,197,1,0,0,0,1267,1265,1,0,0,0,1268,
        1269,6,99,-1,0,1269,1272,3,200,100,0,1270,1272,3,210,105,0,1271,
        1268,1,0,0,0,1271,1270,1,0,0,0,1272,1294,1,0,0,0,1273,1274,10,3,
        0,0,1274,1275,3,306,153,0,1275,1276,3,198,99,4,1276,1293,1,0,0,0,
        1277,1279,10,1,0,0,1278,1280,5,110,0,0,1279,1278,1,0,0,0,1279,1280,
        1,0,0,0,1280,1281,1,0,0,0,1281,1282,5,354,0,0,1282,1283,3,198,99,
        0,1283,1284,5,112,0,0,1284,1285,3,198,99,2,1285,1293,1,0,0,0,1286,
        1288,10,2,0,0,1287,1289,5,110,0,0,1288,1287,1,0,0,0,1288,1289,1,
        0,0,0,1289,1290,1,0,0,0,1290,1291,5,107,0,0,1291,1293,3,340,170,
        0,1292,1273,1,0,0,0,1292,1277,1,0,0,0,1292,1286,1,0,0,0,1293,1296,
        1,0,0,0,1294,1292,1,0,0,0,1294,1295,1,0,0,0,1295,199,1,0,0,0,1296,
        1294,1,0,0,0,1297,1298,6,100,-1,0,1298,1334,3,312,156,0,1299,1334,
        3,204,102,0,1300,1334,3,250,125,0,1301,1302,5,179,0,0,1302,1303,
        3,10,5,0,1303,1304,5,180,0,0,1304,1334,1,0,0,0,1305,1306,5,177,0,
        0,1306,1311,3,200,100,0,1307,1308,5,161,0,0,1308,1310,3,200,100,
        0,1309,1307,1,0,0,0,1310,1313,1,0,0,0,1311,1309,1,0,0,0,1311,1312,
        1,0,0,0,1312,1314,1,0,0,0,1313,1311,1,0,0,0,1314,1316,5,178,0,0,
        1315,1317,5,110,0,0,1316,1315,1,0,0,0,1316,1317,1,0,0,0,1317,1318,
        1,0,0,0,1318,1319,5,107,0,0,1319,1320,5,179,0,0,1320,1321,3,10,5,
        0,1321,1322,5,180,0,0,1322,1334,1,0,0,0,1323,1324,5,108,0,0,1324,
        1325,5,179,0,0,1325,1326,3,10,5,0,1326,1327,5,180,0,0,1327,1334,
        1,0,0,0,1328,1334,3,226,113,0,1329,1330,5,177,0,0,1330,1331,3,196,
        98,0,1331,1332,5,178,0,0,1332,1334,1,0,0,0,1333,1297,1,0,0,0,1333,
        1299,1,0,0,0,1333,1300,1,0,0,0,1333,1301,1,0,0,0,1333,1305,1,0,0,
        0,1333,1323,1,0,0,0,1333,1328,1,0,0,0,1333,1329,1,0,0,0,1334,1352,
        1,0,0,0,1335,1336,10,11,0,0,1336,1337,7,16,0,0,1337,1351,3,200,100,
        12,1338,1339,10,10,0,0,1339,1340,7,2,0,0,1340,1351,3,200,100,11,
        1341,1343,10,5,0,0,1342,1344,5,110,0,0,1343,1342,1,0,0,0,1343,1344,
        1,0,0,0,1344,1345,1,0,0,0,1345,1346,5,107,0,0,1346,1347,5,179,0,
        0,1347,1348,3,10,5,0,1348,1349,5,180,0,0,1349,1351,1,0,0,0,1350,
        1335,1,0,0,0,1350,1338,1,0,0,0,1350,1341,1,0,0,0,1351,1354,1,0,0,
        0,1352,1350,1,0,0,0,1352,1353,1,0,0,0,1353,201,1,0,0,0,1354,1352,
        1,0,0,0,1355,1356,5,15,0,0,1356,1357,5,177,0,0,1357,1358,3,196,98,
        0,1358,1359,5,178,0,0,1359,203,1,0,0,0,1360,1368,3,232,116,0,1361,
        1368,3,234,117,0,1362,1368,3,206,103,0,1363,1368,3,208,104,0,1364,
        1368,3,292,146,0,1365,1368,3,284,142,0,1366,1368,3,280,140,0,1367,
        1360,1,0,0,0,1367,1361,1,0,0,0,1367,1362,1,0,0,0,1367,1363,1,0,0,
        0,1367,1364,1,0,0,0,1367,1365,1,0,0,0,1367,1366,1,0,0,0,1368,205,
        1,0,0,0,1369,1370,3,304,152,0,1370,1371,5,177,0,0,1371,1372,3,244,
        122,0,1372,1373,5,107,0,0,1373,1374,3,244,122,0,1374,1375,5,178,
        0,0,1375,207,1,0,0,0,1376,1377,5,105,0,0,1377,1378,5,177,0,0,1378,
        1379,3,196,98,0,1379,1380,5,161,0,0,1380,1388,3,200,100,0,1381,1382,
        5,161,0,0,1382,1383,3,196,98,0,1383,1384,5,161,0,0,1384,1385,3,200,
        100,0,1385,1387,1,0,0,0,1386,1381,1,0,0,0,1387,1390,1,0,0,0,1388,
        1386,1,0,0,0,1388,1389,1,0,0,0,1389,1393,1,0,0,0,1390,1388,1,0,0,
        0,1391,1392,5,106,0,0,1392,1394,3,200,100,0,1393,1391,1,0,0,0,1393,
        1394,1,0,0,0,1394,1395,1,0,0,0,1395,1396,5,178,0,0,1396,209,1,0,
        0,0,1397,1400,3,212,106,0,1398,1400,3,214,107,0,1399,1397,1,0,0,
        0,1399,1398,1,0,0,0,1400,211,1,0,0,0,1401,1402,3,308,154,0,1402,
        1403,5,177,0,0,1403,1404,3,260,130,0,1404,1405,5,161,0,0,1405,1410,
        3,262,131,0,1406,1407,5,161,0,0,1407,1409,3,252,126,0,1408,1406,
        1,0,0,0,1409,1412,1,0,0,0,1410,1408,1,0,0,0,1410,1411,1,0,0,0,1411,
        1413,1,0,0,0,1412,1410,1,0,0,0,1413,1414,5,178,0,0,1414,213,1,0,
        0,0,1415,1416,3,310,155,0,1416,1429,5,177,0,0,1417,1418,5,179,0,
        0,1418,1423,3,256,128,0,1419,1420,5,161,0,0,1420,1422,3,256,128,
        0,1421,1419,1,0,0,0,1422,1425,1,0,0,0,1423,1421,1,0,0,0,1423,1424,
        1,0,0,0,1424,1426,1,0,0,0,1425,1423,1,0,0,0,1426,1427,5,180,0,0,
        1427,1428,5,161,0,0,1428,1430,1,0,0,0,1429,1417,1,0,0,0,1429,1430,
        1,0,0,0,1430,1431,1,0,0,0,1431,1436,3,262,131,0,1432,1433,5,161,
        0,0,1433,1435,3,252,126,0,1434,1432,1,0,0,0,1435,1438,1,0,0,0,1436,
        1434,1,0,0,0,1436,1437,1,0,0,0,1437,1439,1,0,0,0,1438,1436,1,0,0,
        0,1439,1440,5,178,0,0,1440,215,1,0,0,0,1441,1444,3,344,172,0,1442,
        1444,5,452,0,0,1443,1441,1,0,0,0,1443,1442,1,0,0,0,1444,217,1,0,
        0,0,1445,1446,3,342,171,0,1446,1447,5,177,0,0,1447,1448,3,242,121,
        0,1448,1449,5,178,0,0,1449,219,1,0,0,0,1450,1455,3,226,113,0,1451,
        1452,5,161,0,0,1452,1454,3,226,113,0,1453,1451,1,0,0,0,1454,1457,
        1,0,0,0,1455,1453,1,0,0,0,1455,1456,1,0,0,0,1456,221,1,0,0,0,1457,
        1455,1,0,0,0,1458,1460,7,2,0,0,1459,1458,1,0,0,0,1459,1460,1,0,0,
        0,1460,1461,1,0,0,0,1461,1462,3,224,112,0,1462,223,1,0,0,0,1463,
        1485,3,226,113,0,1464,1465,5,72,0,0,1465,1466,5,177,0,0,1466,1467,
        3,226,113,0,1467,1468,5,178,0,0,1468,1485,1,0,0,0,1469,1470,5,73,
        0,0,1470,1471,5,177,0,0,1471,1472,3,226,113,0,1472,1473,5,178,0,
        0,1473,1485,1,0,0,0,1474,1475,5,159,0,0,1475,1476,5,177,0,0,1476,
        1477,3,226,113,0,1477,1478,5,178,0,0,1478,1485,1,0,0,0,1479,1480,
        5,74,0,0,1480,1481,5,177,0,0,1481,1482,3,226,113,0,1482,1483,5,178,
        0,0,1483,1485,1,0,0,0,1484,1463,1,0,0,0,1484,1464,1,0,0,0,1484,1469,
        1,0,0,0,1484,1474,1,0,0,0,1484,1479,1,0,0,0,1485,225,1,0,0,0,1486,
        1487,3,342,171,0,1487,227,1,0,0,0,1488,1489,3,346,173,0,1489,229,
        1,0,0,0,1490,1493,3,346,173,0,1491,1493,5,172,0,0,1492,1490,1,0,
        0,0,1492,1491,1,0,0,0,1493,231,1,0,0,0,1494,1495,3,238,119,0,1495,
        1496,5,177,0,0,1496,1497,3,240,120,0,1497,1498,5,178,0,0,1498,233,
        1,0,0,0,1499,1500,5,349,0,0,1500,1501,5,177,0,0,1501,1502,3,196,
        98,0,1502,1503,5,56,0,0,1503,1504,3,236,118,0,1504,1505,5,178,0,
        0,1505,235,1,0,0,0,1506,1519,5,287,0,0,1507,1519,5,316,0,0,1508,
        1519,5,318,0,0,1509,1519,5,152,0,0,1510,1519,5,153,0,0,1511,1519,
        5,154,0,0,1512,1519,5,155,0,0,1513,1519,5,156,0,0,1514,1519,5,157,
        0,0,1515,1519,5,158,0,0,1516,1519,5,159,0,0,1517,1519,5,365,0,0,
        1518,1506,1,0,0,0,1518,1507,1,0,0,0,1518,1508,1,0,0,0,1518,1509,
        1,0,0,0,1518,1510,1,0,0,0,1518,1511,1,0,0,0,1518,1512,1,0,0,0,1518,
        1513,1,0,0,0,1518,1514,1,0,0,0,1518,1515,1,0,0,0,1518,1516,1,0,0,
        0,1518,1517,1,0,0,0,1519,237,1,0,0,0,1520,1532,3,266,133,0,1521,
        1532,3,278,139,0,1522,1532,3,302,151,0,1523,1532,3,296,148,0,1524,
        1532,3,298,149,0,1525,1532,3,300,150,0,1526,1532,3,304,152,0,1527,
        1532,3,276,138,0,1528,1532,3,274,137,0,1529,1532,3,268,134,0,1530,
        1532,3,270,135,0,1531,1520,1,0,0,0,1531,1521,1,0,0,0,1531,1522,1,
        0,0,0,1531,1523,1,0,0,0,1531,1524,1,0,0,0,1531,1525,1,0,0,0,1531,
        1526,1,0,0,0,1531,1527,1,0,0,0,1531,1528,1,0,0,0,1531,1529,1,0,0,
        0,1531,1530,1,0,0,0,1532,239,1,0,0,0,1533,1538,3,244,122,0,1534,
        1535,5,161,0,0,1535,1537,3,244,122,0,1536,1534,1,0,0,0,1537,1540,
        1,0,0,0,1538,1536,1,0,0,0,1538,1539,1,0,0,0,1539,1542,1,0,0,0,1540,
        1538,1,0,0,0,1541,1533,1,0,0,0,1541,1542,1,0,0,0,1542,241,1,0,0,
        0,1543,1548,3,246,123,0,1544,1545,5,161,0,0,1545,1547,3,246,123,
        0,1546,1544,1,0,0,0,1547,1550,1,0,0,0,1548,1546,1,0,0,0,1548,1549,
        1,0,0,0,1549,1552,1,0,0,0,1550,1548,1,0,0,0,1551,1543,1,0,0,0,1551,
        1552,1,0,0,0,1552,243,1,0,0,0,1553,1554,3,248,124,0,1554,245,1,0,
        0,0,1555,1556,3,350,175,0,1556,1557,5,163,0,0,1557,1559,1,0,0,0,
        1558,1555,1,0,0,0,1558,1559,1,0,0,0,1559,1560,1,0,0,0,1560,1561,
        3,248,124,0,1561,247,1,0,0,0,1562,1565,3,250,125,0,1563,1565,3,196,
        98,0,1564,1562,1,0,0,0,1564,1563,1,0,0,0,1565,249,1,0,0,0,1566,1567,
        3,350,175,0,1567,1568,5,186,0,0,1568,1569,3,196,98,0,1569,1583,1,
        0,0,0,1570,1571,5,177,0,0,1571,1574,3,350,175,0,1572,1573,5,161,
        0,0,1573,1575,3,350,175,0,1574,1572,1,0,0,0,1575,1576,1,0,0,0,1576,
        1574,1,0,0,0,1576,1577,1,0,0,0,1577,1578,1,0,0,0,1578,1579,5,178,
        0,0,1579,1580,5,186,0,0,1580,1581,3,196,98,0,1581,1583,1,0,0,0,1582,
        1566,1,0,0,0,1582,1570,1,0,0,0,1583,251,1,0,0,0,1584,1585,3,254,
        127,0,1585,1586,5,163,0,0,1586,1587,3,264,132,0,1587,253,1,0,0,0,
        1588,1589,7,17,0,0,1589,255,1,0,0,0,1590,1599,3,260,130,0,1591,1592,
        3,260,130,0,1592,1593,3,258,129,0,1593,1599,1,0,0,0,1594,1595,3,
        260,130,0,1595,1596,5,189,0,0,1596,1597,3,258,129,0,1597,1599,1,
        0,0,0,1598,1590,1,0,0,0,1598,1591,1,0,0,0,1598,1594,1,0,0,0,1599,
        257,1,0,0,0,1600,1605,3,318,159,0,1601,1605,3,320,160,0,1602,1605,
        3,322,161,0,1603,1605,3,324,162,0,1604,1600,1,0,0,0,1604,1601,1,
        0,0,0,1604,1602,1,0,0,0,1604,1603,1,0,0,0,1605,259,1,0,0,0,1606,
        1609,3,342,171,0,1607,1609,3,316,158,0,1608,1606,1,0,0,0,1608,1607,
        1,0,0,0,1609,261,1,0,0,0,1610,1611,3,264,132,0,1611,263,1,0,0,0,
        1612,1615,3,342,171,0,1613,1615,3,312,156,0,1614,1612,1,0,0,0,1614,
        1613,1,0,0,0,1615,265,1,0,0,0,1616,1649,5,239,0,0,1617,1649,5,235,
        0,0,1618,1649,5,236,0,0,1619,1649,5,237,0,0,1620,1649,5,238,0,0,
        1621,1649,5,240,0,0,1622,1649,5,241,0,0,1623,1649,5,242,0,0,1624,
        1649,5,243,0,0,1625,1649,5,244,0,0,1626,1649,5,245,0,0,1627,1649,
        5,246,0,0,1628,1649,5,247,0,0,1629,1649,5,248,0,0,1630,1649,5,249,
        0,0,1631,1649,5,250,0,0,1632,1649,5,251,0,0,1633,1649,5,252,0,0,
        1634,1649,5,253,0,0,1635,1649,5,254,0,0,1636,1649,5,256,0,0,1637,
        1649,5,257,0,0,1638,1649,5,258,0,0,1639,1649,5,259,0,0,1640,1649,
        5,260,0,0,1641,1649,5,261,0,0,1642,1649,5,262,0,0,1643,1649,5,263,
        0,0,1644,1649,5,264,0,0,1645,1649,5,204,0,0,1646,1649,5,190,0,0,
        1647,1649,3,272,136,0,1648,1616,1,0,0,0,1648,1617,1,0,0,0,1648,1618,
        1,0,0,0,1648,1619,1,0,0,0,1648,1620,1,0,0,0,1648,1621,1,0,0,0,1648,
        1622,1,0,0,0,1648,1623,1,0,0,0,1648,1624,1,0,0,0,1648,1625,1,0,0,
        0,1648,1626,1,0,0,0,1648,1627,1,0,0,0,1648,1628,1,0,0,0,1648,1629,
        1,0,0,0,1648,1630,1,0,0,0,1648,1631,1,0,0,0,1648,1632,1,0,0,0,1648,
        1633,1,0,0,0,1648,1634,1,0,0,0,1648,1635,1,0,0,0,1648,1636,1,0,0,
        0,1648,1637,1,0,0,0,1648,1638,1,0,0,0,1648,1639,1,0,0,0,1648,1640,
        1,0,0,0,1648,1641,1,0,0,0,1648,1642,1,0,0,0,1648,1643,1,0,0,0,1648,
        1644,1,0,0,0,1648,1645,1,0,0,0,1648,1646,1,0,0,0,1648,1647,1,0,0,
        0,1649,267,1,0,0,0,1650,1651,5,109,0,0,1651,269,1,0,0,0,1652,1653,
        7,18,0,0,1653,271,1,0,0,0,1654,1655,7,19,0,0,1655,273,1,0,0,0,1656,
        1657,7,20,0,0,1657,275,1,0,0,0,1658,1659,7,21,0,0,1659,277,1,0,0,
        0,1660,1661,7,22,0,0,1661,279,1,0,0,0,1662,1663,5,301,0,0,1663,1664,
        5,177,0,0,1664,1665,3,282,141,0,1665,1666,5,161,0,0,1666,1667,3,
        244,122,0,1667,1668,5,178,0,0,1668,281,1,0,0,0,1669,1670,7,23,0,
        0,1670,283,1,0,0,0,1671,1672,5,298,0,0,1672,1673,5,177,0,0,1673,
        1674,3,290,145,0,1674,1675,5,6,0,0,1675,1676,3,244,122,0,1676,1677,
        5,178,0,0,1677,285,1,0,0,0,1678,1679,7,24,0,0,1679,287,1,0,0,0,1680,
        1681,7,25,0,0,1681,289,1,0,0,0,1682,1685,3,286,143,0,1683,1685,3,
        288,144,0,1684,1682,1,0,0,0,1684,1683,1,0,0,0,1685,291,1,0,0,0,1686,
        1687,3,294,147,0,1687,1688,5,177,0,0,1688,1689,3,286,143,0,1689,
        1690,5,161,0,0,1690,1691,3,244,122,0,1691,1692,5,161,0,0,1692,1693,
        3,244,122,0,1693,1694,5,178,0,0,1694,293,1,0,0,0,1695,1696,7,26,
        0,0,1696,295,1,0,0,0,1697,1698,7,27,0,0,1698,297,1,0,0,0,1699,1700,
        7,28,0,0,1700,299,1,0,0,0,1701,1702,5,378,0,0,1702,301,1,0,0,0,1703,
        1704,7,29,0,0,1704,303,1,0,0,0,1705,1706,5,255,0,0,1706,305,1,0,
        0,0,1707,1708,7,30,0,0,1708,307,1,0,0,0,1709,1710,7,31,0,0,1710,
        309,1,0,0,0,1711,1712,7,32,0,0,1712,311,1,0,0,0,1713,1722,3,314,
        157,0,1714,1722,3,316,158,0,1715,1722,3,318,159,0,1716,1722,3,320,
        160,0,1717,1722,3,322,161,0,1718,1722,3,324,162,0,1719,1722,3,326,
        163,0,1720,1722,3,328,164,0,1721,1713,1,0,0,0,1721,1714,1,0,0,0,
        1721,1715,1,0,0,0,1721,1716,1,0,0,0,1721,1717,1,0,0,0,1721,1718,
        1,0,0,0,1721,1719,1,0,0,0,1721,1720,1,0,0,0,1722,313,1,0,0,0,1723,
        1724,5,131,0,0,1724,1725,3,200,100,0,1725,1726,3,336,168,0,1726,
        315,1,0,0,0,1727,1728,7,33,0,0,1728,317,1,0,0,0,1729,1731,7,2,0,
        0,1730,1729,1,0,0,0,1730,1731,1,0,0,0,1731,1732,1,0,0,0,1732,1733,
        5,448,0,0,1733,319,1,0,0,0,1734,1736,7,2,0,0,1735,1734,1,0,0,0,1735,
        1736,1,0,0,0,1736,1737,1,0,0,0,1737,1738,5,449,0,0,1738,321,1,0,
        0,0,1739,1741,7,2,0,0,1740,1739,1,0,0,0,1740,1741,1,0,0,0,1741,1742,
        1,0,0,0,1742,1743,5,451,0,0,1743,323,1,0,0,0,1744,1746,7,2,0,0,1745,
        1744,1,0,0,0,1745,1746,1,0,0,0,1746,1747,1,0,0,0,1747,1748,5,450,
        0,0,1748,325,1,0,0,0,1749,1750,7,34,0,0,1750,327,1,0,0,0,1751,1755,
        3,330,165,0,1752,1755,3,332,166,0,1753,1755,3,334,167,0,1754,1751,
        1,0,0,0,1754,1752,1,0,0,0,1754,1753,1,0,0,0,1755,329,1,0,0,0,1756,
        1757,5,287,0,0,1757,1758,3,316,158,0,1758,331,1,0,0,0,1759,1760,
        5,316,0,0,1760,1761,3,316,158,0,1761,333,1,0,0,0,1762,1763,5,318,
        0,0,1763,1764,3,316,158,0,1764,335,1,0,0,0,1765,1766,7,35,0,0,1766,
        337,1,0,0,0,1767,1768,7,36,0,0,1768,339,1,0,0,0,1769,1770,5,177,
        0,0,1770,1775,3,312,156,0,1771,1772,5,161,0,0,1772,1774,3,312,156,
        0,1773,1771,1,0,0,0,1774,1777,1,0,0,0,1775,1773,1,0,0,0,1775,1776,
        1,0,0,0,1776,1778,1,0,0,0,1777,1775,1,0,0,0,1778,1779,5,178,0,0,
        1779,341,1,0,0,0,1780,1785,3,350,175,0,1781,1782,5,162,0,0,1782,
        1784,3,350,175,0,1783,1781,1,0,0,0,1784,1787,1,0,0,0,1785,1783,1,
        0,0,0,1785,1786,1,0,0,0,1786,343,1,0,0,0,1787,1785,1,0,0,0,1788,
        1793,3,352,176,0,1789,1790,5,162,0,0,1790,1792,3,350,175,0,1791,
        1789,1,0,0,0,1792,1795,1,0,0,0,1793,1791,1,0,0,0,1793,1794,1,0,0,
        0,1794,345,1,0,0,0,1795,1793,1,0,0,0,1796,1801,3,354,177,0,1797,
        1798,5,162,0,0,1798,1800,3,354,177,0,1799,1797,1,0,0,0,1800,1803,
        1,0,0,0,1801,1799,1,0,0,0,1801,1802,1,0,0,0,1802,347,1,0,0,0,1803,
        1801,1,0,0,0,1804,1809,3,342,171,0,1805,1806,5,161,0,0,1806,1808,
        3,342,171,0,1807,1805,1,0,0,0,1808,1811,1,0,0,0,1809,1807,1,0,0,
        0,1809,1810,1,0,0,0,1810,1824,1,0,0,0,1811,1809,1,0,0,0,1812,1813,
        5,177,0,0,1813,1818,3,342,171,0,1814,1815,5,161,0,0,1815,1817,3,
        342,171,0,1816,1814,1,0,0,0,1817,1820,1,0,0,0,1818,1816,1,0,0,0,
        1818,1819,1,0,0,0,1819,1821,1,0,0,0,1820,1818,1,0,0,0,1821,1822,
        5,178,0,0,1822,1824,1,0,0,0,1823,1804,1,0,0,0,1823,1812,1,0,0,0,
        1824,349,1,0,0,0,1825,1827,5,162,0,0,1826,1825,1,0,0,0,1826,1827,
        1,0,0,0,1827,1828,1,0,0,0,1828,1836,5,446,0,0,1829,1830,5,185,0,
        0,1830,1831,3,350,175,0,1831,1832,5,185,0,0,1832,1836,1,0,0,0,1833,
        1836,5,455,0,0,1834,1836,3,356,178,0,1835,1826,1,0,0,0,1835,1829,
        1,0,0,0,1835,1833,1,0,0,0,1835,1834,1,0,0,0,1836,351,1,0,0,0,1837,
        1839,5,447,0,0,1838,1837,1,0,0,0,1838,1839,1,0,0,0,1839,1840,1,0,
        0,0,1840,1841,3,350,175,0,1841,353,1,0,0,0,1842,1847,3,350,175,0,
        1843,1844,5,174,0,0,1844,1846,3,350,175,0,1845,1843,1,0,0,0,1846,
        1849,1,0,0,0,1847,1845,1,0,0,0,1847,1848,1,0,0,0,1848,1851,1,0,0,
        0,1849,1847,1,0,0,0,1850,1852,5,174,0,0,1851,1850,1,0,0,0,1851,1852,
        1,0,0,0,1852,1866,1,0,0,0,1853,1854,5,183,0,0,1854,1855,3,354,177,
        0,1855,1856,5,183,0,0,1856,1866,1,0,0,0,1857,1858,5,184,0,0,1858,
        1859,3,354,177,0,1859,1860,5,184,0,0,1860,1866,1,0,0,0,1861,1862,
        5,185,0,0,1862,1863,3,354,177,0,1863,1864,5,185,0,0,1864,1866,1,
        0,0,0,1865,1842,1,0,0,0,1865,1853,1,0,0,0,1865,1857,1,0,0,0,1865,
        1861,1,0,0,0,1866,355,1,0,0,0,1867,1979,5,62,0,0,1868,1979,3,338,
        169,0,1869,1979,5,418,0,0,1870,1979,3,238,119,0,1871,1979,3,274,
        137,0,1872,1979,3,254,127,0,1873,1979,3,336,168,0,1874,1979,3,120,
        60,0,1875,1979,3,308,154,0,1876,1979,3,310,155,0,1877,1979,3,16,
        8,0,1878,1979,3,270,135,0,1879,1979,3,306,153,0,1880,1979,3,8,4,
        0,1881,1979,5,105,0,0,1882,1979,5,106,0,0,1883,1979,5,107,0,0,1884,
        1979,5,186,0,0,1885,1979,5,354,0,0,1886,1979,5,108,0,0,1887,1979,
        5,58,0,0,1888,1979,5,59,0,0,1889,1979,5,60,0,0,1890,1979,5,61,0,
        0,1891,1979,5,63,0,0,1892,1979,5,64,0,0,1893,1979,5,6,0,0,1894,1979,
        5,25,0,0,1895,1979,5,27,0,0,1896,1979,5,41,0,0,1897,1979,5,39,0,
        0,1898,1979,5,40,0,0,1899,1979,5,42,0,0,1900,1979,5,43,0,0,1901,
        1979,5,66,0,0,1902,1979,5,22,0,0,1903,1979,5,23,0,0,1904,1979,5,
        65,0,0,1905,1979,5,349,0,0,1906,1979,5,301,0,0,1907,1979,5,298,0,
        0,1908,1979,5,131,0,0,1909,1979,5,170,0,0,1910,1979,5,171,0,0,1911,
        1979,5,71,0,0,1912,1979,5,72,0,0,1913,1979,5,73,0,0,1914,1979,5,
        159,0,0,1915,1979,5,74,0,0,1916,1979,5,77,0,0,1917,1979,5,78,0,0,
        1918,1979,5,79,0,0,1919,1979,5,80,0,0,1920,1979,5,81,0,0,1921,1979,
        5,82,0,0,1922,1979,5,83,0,0,1923,1979,5,84,0,0,1924,1979,5,85,0,
        0,1925,1979,5,86,0,0,1926,1979,5,87,0,0,1927,1979,5,88,0,0,1928,
        1979,5,89,0,0,1929,1979,5,90,0,0,1930,1979,5,91,0,0,1931,1979,5,
        92,0,0,1932,1979,5,93,0,0,1933,1979,5,94,0,0,1934,1979,5,95,0,0,
        1935,1979,5,96,0,0,1936,1979,5,98,0,0,1937,1979,5,99,0,0,1938,1979,
        5,104,0,0,1939,1979,5,102,0,0,1940,1979,5,103,0,0,1941,1979,3,186,
        93,0,1942,1979,3,178,89,0,1943,1979,5,192,0,0,1944,1979,5,193,0,
        0,1945,1979,5,194,0,0,1946,1979,5,195,0,0,1947,1979,5,197,0,0,1948,
        1979,5,198,0,0,1949,1979,5,200,0,0,1950,1979,5,201,0,0,1951,1979,
        5,202,0,0,1952,1979,5,203,0,0,1953,1979,5,205,0,0,1954,1979,5,206,
        0,0,1955,1979,5,207,0,0,1956,1979,5,215,0,0,1957,1979,5,216,0,0,
        1958,1979,5,217,0,0,1959,1979,5,218,0,0,1960,1979,5,219,0,0,1961,
        1979,5,220,0,0,1962,1979,5,221,0,0,1963,1979,5,222,0,0,1964,1979,
        5,223,0,0,1965,1979,5,224,0,0,1966,1979,5,225,0,0,1967,1979,5,49,
        0,0,1968,1979,5,48,0,0,1969,1979,5,53,0,0,1970,1979,5,344,0,0,1971,
        1979,5,343,0,0,1972,1979,5,50,0,0,1973,1979,5,51,0,0,1974,1979,5,
        52,0,0,1975,1979,5,54,0,0,1976,1979,5,55,0,0,1977,1979,5,445,0,0,
        1978,1867,1,0,0,0,1978,1868,1,0,0,0,1978,1869,1,0,0,0,1978,1870,
        1,0,0,0,1978,1871,1,0,0,0,1978,1872,1,0,0,0,1978,1873,1,0,0,0,1978,
        1874,1,0,0,0,1978,1875,1,0,0,0,1978,1876,1,0,0,0,1978,1877,1,0,0,
        0,1978,1878,1,0,0,0,1978,1879,1,0,0,0,1978,1880,1,0,0,0,1978,1881,
        1,0,0,0,1978,1882,1,0,0,0,1978,1883,1,0,0,0,1978,1884,1,0,0,0,1978,
        1885,1,0,0,0,1978,1886,1,0,0,0,1978,1887,1,0,0,0,1978,1888,1,0,0,
        0,1978,1889,1,0,0,0,1978,1890,1,0,0,0,1978,1891,1,0,0,0,1978,1892,
        1,0,0,0,1978,1893,1,0,0,0,1978,1894,1,0,0,0,1978,1895,1,0,0,0,1978,
        1896,1,0,0,0,1978,1897,1,0,0,0,1978,1898,1,0,0,0,1978,1899,1,0,0,
        0,1978,1900,1,0,0,0,1978,1901,1,0,0,0,1978,1902,1,0,0,0,1978,1903,
        1,0,0,0,1978,1904,1,0,0,0,1978,1905,1,0,0,0,1978,1906,1,0,0,0,1978,
        1907,1,0,0,0,1978,1908,1,0,0,0,1978,1909,1,0,0,0,1978,1910,1,0,0,
        0,1978,1911,1,0,0,0,1978,1912,1,0,0,0,1978,1913,1,0,0,0,1978,1914,
        1,0,0,0,1978,1915,1,0,0,0,1978,1916,1,0,0,0,1978,1917,1,0,0,0,1978,
        1918,1,0,0,0,1978,1919,1,0,0,0,1978,1920,1,0,0,0,1978,1921,1,0,0,
        0,1978,1922,1,0,0,0,1978,1923,1,0,0,0,1978,1924,1,0,0,0,1978,1925,
        1,0,0,0,1978,1926,1,0,0,0,1978,1927,1,0,0,0,1978,1928,1,0,0,0,1978,
        1929,1,0,0,0,1978,1930,1,0,0,0,1978,1931,1,0,0,0,1978,1932,1,0,0,
        0,1978,1933,1,0,0,0,1978,1934,1,0,0,0,1978,1935,1,0,0,0,1978,1936,
        1,0,0,0,1978,1937,1,0,0,0,1978,1938,1,0,0,0,1978,1939,1,0,0,0,1978,
        1940,1,0,0,0,1978,1941,1,0,0,0,1978,1942,1,0,0,0,1978,1943,1,0,0,
        0,1978,1944,1,0,0,0,1978,1945,1,0,0,0,1978,1946,1,0,0,0,1978,1947,
        1,0,0,0,1978,1948,1,0,0,0,1978,1949,1,0,0,0,1978,1950,1,0,0,0,1978,
        1951,1,0,0,0,1978,1952,1,0,0,0,1978,1953,1,0,0,0,1978,1954,1,0,0,
        0,1978,1955,1,0,0,0,1978,1956,1,0,0,0,1978,1957,1,0,0,0,1978,1958,
        1,0,0,0,1978,1959,1,0,0,0,1978,1960,1,0,0,0,1978,1961,1,0,0,0,1978,
        1962,1,0,0,0,1978,1963,1,0,0,0,1978,1964,1,0,0,0,1978,1965,1,0,0,
        0,1978,1966,1,0,0,0,1978,1967,1,0,0,0,1978,1968,1,0,0,0,1978,1969,
        1,0,0,0,1978,1970,1,0,0,0,1978,1971,1,0,0,0,1978,1972,1,0,0,0,1978,
        1973,1,0,0,0,1978,1974,1,0,0,0,1978,1975,1,0,0,0,1978,1976,1,0,0,
        0,1978,1977,1,0,0,0,1979,357,1,0,0,0,183,359,365,372,377,388,394,
        427,432,437,444,463,469,474,483,490,495,500,507,511,516,524,528,
        532,538,543,547,551,559,565,571,574,583,585,591,599,604,608,615,
        620,632,643,648,652,659,665,670,675,679,683,688,693,697,711,722,
        725,732,737,741,757,762,767,772,777,782,787,799,810,817,825,831,
        837,843,851,861,867,878,886,892,898,906,914,920,929,941,947,986,
        992,1011,1018,1021,1028,1033,1039,1042,1047,1052,1056,1060,1063,
        1067,1070,1075,1078,1083,1090,1095,1108,1131,1136,1144,1153,1163,
        1172,1179,1194,1209,1218,1227,1238,1246,1252,1263,1265,1271,1279,
        1288,1292,1294,1311,1316,1333,1343,1350,1352,1367,1388,1393,1399,
        1410,1423,1429,1436,1443,1455,1459,1484,1492,1518,1531,1538,1541,
        1548,1551,1558,1564,1576,1582,1598,1604,1608,1614,1648,1684,1721,
        1730,1735,1740,1745,1754,1775,1785,1793,1801,1809,1818,1823,1826,
        1835,1838,1847,1851,1865,1978
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!OpenSearchPPLParser.__ATN) {
            OpenSearchPPLParser.__ATN = new antlr.ATNDeserializer().deserialize(OpenSearchPPLParser._serializedATN);
        }

        return OpenSearchPPLParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(OpenSearchPPLParser.literalNames, OpenSearchPPLParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return OpenSearchPPLParser.vocabulary;
    }

    private static readonly decisionsToDFA = OpenSearchPPLParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class RootContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.EOF, 0)!;
    }
    public pplStatement(): PplStatementContext | null {
        return this.getRuleContext(0, PplStatementContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_root;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitRoot) {
            return visitor.visitRoot(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PplStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public explainStatement(): ExplainStatementContext | null {
        return this.getRuleContext(0, ExplainStatementContext);
    }
    public queryStatement(): QueryStatementContext | null {
        return this.getRuleContext(0, QueryStatementContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_pplStatement;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitPplStatement) {
            return visitor.visitPplStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QueryStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pplCommands(): PplCommandsContext {
        return this.getRuleContext(0, PplCommandsContext)!;
    }
    public PIPE(): antlr.TerminalNode[];
    public PIPE(i: number): antlr.TerminalNode | null;
    public PIPE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.PIPE);
    	} else {
    		return this.getToken(OpenSearchPPLParser.PIPE, i);
    	}
    }
    public commands(): CommandsContext[];
    public commands(i: number): CommandsContext | null;
    public commands(i?: number): CommandsContext[] | CommandsContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CommandsContext);
        }

        return this.getRuleContext(i, CommandsContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_queryStatement;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitQueryStatement) {
            return visitor.visitQueryStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExplainStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EXPLAIN(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.EXPLAIN, 0)!;
    }
    public queryStatement(): QueryStatementContext {
        return this.getRuleContext(0, QueryStatementContext)!;
    }
    public explainMode(): ExplainModeContext | null {
        return this.getRuleContext(0, ExplainModeContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_explainStatement;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitExplainStatement) {
            return visitor.visitExplainStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExplainModeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SIMPLE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SIMPLE, 0);
    }
    public STANDARD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.STANDARD, 0);
    }
    public COST(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.COST, 0);
    }
    public EXTENDED(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.EXTENDED, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_explainMode;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitExplainMode) {
            return visitor.visitExplainMode(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SubSearchContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public searchCommand(): SearchCommandContext {
        return this.getRuleContext(0, SearchCommandContext)!;
    }
    public PIPE(): antlr.TerminalNode[];
    public PIPE(i: number): antlr.TerminalNode | null;
    public PIPE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.PIPE);
    	} else {
    		return this.getToken(OpenSearchPPLParser.PIPE, i);
    	}
    }
    public commands(): CommandsContext[];
    public commands(i: number): CommandsContext | null;
    public commands(i?: number): CommandsContext[] | CommandsContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CommandsContext);
        }

        return this.getRuleContext(i, CommandsContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_subSearch;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitSubSearch) {
            return visitor.visitSubSearch(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PplCommandsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public describeCommand(): DescribeCommandContext | null {
        return this.getRuleContext(0, DescribeCommandContext);
    }
    public showDataSourcesCommand(): ShowDataSourcesCommandContext | null {
        return this.getRuleContext(0, ShowDataSourcesCommandContext);
    }
    public searchCommand(): SearchCommandContext | null {
        return this.getRuleContext(0, SearchCommandContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_pplCommands;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitPplCommands) {
            return visitor.visitPplCommands(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CommandsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public whereCommand(): WhereCommandContext | null {
        return this.getRuleContext(0, WhereCommandContext);
    }
    public fieldsCommand(): FieldsCommandContext | null {
        return this.getRuleContext(0, FieldsCommandContext);
    }
    public tableCommand(): TableCommandContext | null {
        return this.getRuleContext(0, TableCommandContext);
    }
    public joinCommand(): JoinCommandContext | null {
        return this.getRuleContext(0, JoinCommandContext);
    }
    public renameCommand(): RenameCommandContext | null {
        return this.getRuleContext(0, RenameCommandContext);
    }
    public statsCommand(): StatsCommandContext | null {
        return this.getRuleContext(0, StatsCommandContext);
    }
    public eventstatsCommand(): EventstatsCommandContext | null {
        return this.getRuleContext(0, EventstatsCommandContext);
    }
    public dedupCommand(): DedupCommandContext | null {
        return this.getRuleContext(0, DedupCommandContext);
    }
    public sortCommand(): SortCommandContext | null {
        return this.getRuleContext(0, SortCommandContext);
    }
    public evalCommand(): EvalCommandContext | null {
        return this.getRuleContext(0, EvalCommandContext);
    }
    public headCommand(): HeadCommandContext | null {
        return this.getRuleContext(0, HeadCommandContext);
    }
    public binCommand(): BinCommandContext | null {
        return this.getRuleContext(0, BinCommandContext);
    }
    public topCommand(): TopCommandContext | null {
        return this.getRuleContext(0, TopCommandContext);
    }
    public rareCommand(): RareCommandContext | null {
        return this.getRuleContext(0, RareCommandContext);
    }
    public grokCommand(): GrokCommandContext | null {
        return this.getRuleContext(0, GrokCommandContext);
    }
    public parseCommand(): ParseCommandContext | null {
        return this.getRuleContext(0, ParseCommandContext);
    }
    public spathCommand(): SpathCommandContext | null {
        return this.getRuleContext(0, SpathCommandContext);
    }
    public patternsCommand(): PatternsCommandContext | null {
        return this.getRuleContext(0, PatternsCommandContext);
    }
    public lookupCommand(): LookupCommandContext | null {
        return this.getRuleContext(0, LookupCommandContext);
    }
    public kmeansCommand(): KmeansCommandContext | null {
        return this.getRuleContext(0, KmeansCommandContext);
    }
    public adCommand(): AdCommandContext | null {
        return this.getRuleContext(0, AdCommandContext);
    }
    public mlCommand(): MlCommandContext | null {
        return this.getRuleContext(0, MlCommandContext);
    }
    public fillnullCommand(): FillnullCommandContext | null {
        return this.getRuleContext(0, FillnullCommandContext);
    }
    public trendlineCommand(): TrendlineCommandContext | null {
        return this.getRuleContext(0, TrendlineCommandContext);
    }
    public appendcolCommand(): AppendcolCommandContext | null {
        return this.getRuleContext(0, AppendcolCommandContext);
    }
    public appendCommand(): AppendCommandContext | null {
        return this.getRuleContext(0, AppendCommandContext);
    }
    public expandCommand(): ExpandCommandContext | null {
        return this.getRuleContext(0, ExpandCommandContext);
    }
    public flattenCommand(): FlattenCommandContext | null {
        return this.getRuleContext(0, FlattenCommandContext);
    }
    public reverseCommand(): ReverseCommandContext | null {
        return this.getRuleContext(0, ReverseCommandContext);
    }
    public regexCommand(): RegexCommandContext | null {
        return this.getRuleContext(0, RegexCommandContext);
    }
    public timechartCommand(): TimechartCommandContext | null {
        return this.getRuleContext(0, TimechartCommandContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_commands;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitCommands) {
            return visitor.visitCommands(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CommandNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SEARCH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SEARCH, 0);
    }
    public DESCRIBE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DESCRIBE, 0);
    }
    public SHOW(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SHOW, 0);
    }
    public WHERE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.WHERE, 0);
    }
    public FIELDS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.FIELDS, 0);
    }
    public TABLE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TABLE, 0);
    }
    public JOIN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.JOIN, 0);
    }
    public RENAME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.RENAME, 0);
    }
    public STATS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.STATS, 0);
    }
    public EVENTSTATS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.EVENTSTATS, 0);
    }
    public DEDUP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DEDUP, 0);
    }
    public SORT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SORT, 0);
    }
    public EVAL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.EVAL, 0);
    }
    public HEAD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.HEAD, 0);
    }
    public BIN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.BIN, 0);
    }
    public TOP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TOP, 0);
    }
    public RARE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.RARE, 0);
    }
    public GROK(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.GROK, 0);
    }
    public PARSE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PARSE, 0);
    }
    public PATTERNS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PATTERNS, 0);
    }
    public LOOKUP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LOOKUP, 0);
    }
    public KMEANS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.KMEANS, 0);
    }
    public AD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.AD, 0);
    }
    public ML(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ML, 0);
    }
    public FILLNULL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.FILLNULL, 0);
    }
    public EXPAND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.EXPAND, 0);
    }
    public FLATTEN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.FLATTEN, 0);
    }
    public TRENDLINE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TRENDLINE, 0);
    }
    public TIMECHART(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TIMECHART, 0);
    }
    public EXPLAIN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.EXPLAIN, 0);
    }
    public REVERSE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.REVERSE, 0);
    }
    public REGEX(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.REGEX, 0);
    }
    public APPEND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.APPEND, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_commandName;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitCommandName) {
            return visitor.visitCommandName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SearchCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_searchCommand;
    }
    public override copyFrom(ctx: SearchCommandContext): void {
        super.copyFrom(ctx);
    }
}
export class SearchFromContext extends SearchCommandContext {
    public constructor(ctx: SearchCommandContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public fromClause(): FromClauseContext {
        return this.getRuleContext(0, FromClauseContext)!;
    }
    public SEARCH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SEARCH, 0);
    }
    public logicalExpression(): LogicalExpressionContext[];
    public logicalExpression(i: number): LogicalExpressionContext | null;
    public logicalExpression(i?: number): LogicalExpressionContext[] | LogicalExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LogicalExpressionContext);
        }

        return this.getRuleContext(i, LogicalExpressionContext);
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitSearchFrom) {
            return visitor.visitSearchFrom(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DescribeCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DESCRIBE(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.DESCRIBE, 0)!;
    }
    public tableSourceClause(): TableSourceClauseContext {
        return this.getRuleContext(0, TableSourceClauseContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_describeCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitDescribeCommand) {
            return visitor.visitDescribeCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShowDataSourcesCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SHOW(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.SHOW, 0)!;
    }
    public DATASOURCES(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.DATASOURCES, 0)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_showDataSourcesCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitShowDataSourcesCommand) {
            return visitor.visitShowDataSourcesCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhereCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WHERE(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.WHERE, 0)!;
    }
    public logicalExpression(): LogicalExpressionContext {
        return this.getRuleContext(0, LogicalExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_whereCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitWhereCommand) {
            return visitor.visitWhereCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FieldsCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FIELDS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.FIELDS, 0)!;
    }
    public fieldsCommandBody(): FieldsCommandBodyContext {
        return this.getRuleContext(0, FieldsCommandBodyContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_fieldsCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitFieldsCommand) {
            return visitor.visitFieldsCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TABLE(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.TABLE, 0)!;
    }
    public fieldsCommandBody(): FieldsCommandBodyContext {
        return this.getRuleContext(0, FieldsCommandBodyContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_tableCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitTableCommand) {
            return visitor.visitTableCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FieldsCommandBodyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public wcFieldList(): WcFieldListContext {
        return this.getRuleContext(0, WcFieldListContext)!;
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MINUS, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_fieldsCommandBody;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitFieldsCommandBody) {
            return visitor.visitFieldsCommandBody(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WcFieldListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public selectFieldExpression(): SelectFieldExpressionContext[];
    public selectFieldExpression(i: number): SelectFieldExpressionContext | null;
    public selectFieldExpression(i?: number): SelectFieldExpressionContext[] | SelectFieldExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SelectFieldExpressionContext);
        }

        return this.getRuleContext(i, SelectFieldExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchPPLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_wcFieldList;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitWcFieldList) {
            return visitor.visitWcFieldList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RenameCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RENAME(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RENAME, 0)!;
    }
    public renameClasue(): RenameClasueContext[];
    public renameClasue(i: number): RenameClasueContext | null;
    public renameClasue(i?: number): RenameClasueContext[] | RenameClasueContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RenameClasueContext);
        }

        return this.getRuleContext(i, RenameClasueContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchPPLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_renameCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitRenameCommand) {
            return visitor.visitRenameCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatsCommandContext extends antlr.ParserRuleContext {
    public _partitions?: IntegerLiteralContext;
    public _allnum?: BooleanLiteralContext;
    public _delim?: StringLiteralContext;
    public _dedupsplit?: BooleanLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STATS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.STATS, 0)!;
    }
    public statsAggTerm(): StatsAggTermContext[];
    public statsAggTerm(i: number): StatsAggTermContext | null;
    public statsAggTerm(i?: number): StatsAggTermContext[] | StatsAggTermContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatsAggTermContext);
        }

        return this.getRuleContext(i, StatsAggTermContext);
    }
    public PARTITIONS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PARTITIONS, 0);
    }
    public EQUAL(): antlr.TerminalNode[];
    public EQUAL(i: number): antlr.TerminalNode | null;
    public EQUAL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.EQUAL);
    	} else {
    		return this.getToken(OpenSearchPPLParser.EQUAL, i);
    	}
    }
    public ALLNUM(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ALLNUM, 0);
    }
    public DELIM(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DELIM, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchPPLParser.COMMA, i);
    	}
    }
    public statsByClause(): StatsByClauseContext | null {
        return this.getRuleContext(0, StatsByClauseContext);
    }
    public DEDUP_SPLITVALUES(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DEDUP_SPLITVALUES, 0);
    }
    public integerLiteral(): IntegerLiteralContext | null {
        return this.getRuleContext(0, IntegerLiteralContext);
    }
    public booleanLiteral(): BooleanLiteralContext[];
    public booleanLiteral(i: number): BooleanLiteralContext | null;
    public booleanLiteral(i?: number): BooleanLiteralContext[] | BooleanLiteralContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BooleanLiteralContext);
        }

        return this.getRuleContext(i, BooleanLiteralContext);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_statsCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitStatsCommand) {
            return visitor.visitStatsCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EventstatsCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EVENTSTATS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.EVENTSTATS, 0)!;
    }
    public eventstatsAggTerm(): EventstatsAggTermContext[];
    public eventstatsAggTerm(i: number): EventstatsAggTermContext | null;
    public eventstatsAggTerm(i?: number): EventstatsAggTermContext[] | EventstatsAggTermContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EventstatsAggTermContext);
        }

        return this.getRuleContext(i, EventstatsAggTermContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchPPLParser.COMMA, i);
    	}
    }
    public statsByClause(): StatsByClauseContext | null {
        return this.getRuleContext(0, StatsByClauseContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_eventstatsCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitEventstatsCommand) {
            return visitor.visitEventstatsCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DedupCommandContext extends antlr.ParserRuleContext {
    public _number_?: IntegerLiteralContext;
    public _keepempty?: BooleanLiteralContext;
    public _consecutive?: BooleanLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DEDUP(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.DEDUP, 0)!;
    }
    public fieldList(): FieldListContext {
        return this.getRuleContext(0, FieldListContext)!;
    }
    public KEEPEMPTY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.KEEPEMPTY, 0);
    }
    public EQUAL(): antlr.TerminalNode[];
    public EQUAL(i: number): antlr.TerminalNode | null;
    public EQUAL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.EQUAL);
    	} else {
    		return this.getToken(OpenSearchPPLParser.EQUAL, i);
    	}
    }
    public CONSECUTIVE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CONSECUTIVE, 0);
    }
    public integerLiteral(): IntegerLiteralContext | null {
        return this.getRuleContext(0, IntegerLiteralContext);
    }
    public booleanLiteral(): BooleanLiteralContext[];
    public booleanLiteral(i: number): BooleanLiteralContext | null;
    public booleanLiteral(i?: number): BooleanLiteralContext[] | BooleanLiteralContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BooleanLiteralContext);
        }

        return this.getRuleContext(i, BooleanLiteralContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_dedupCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitDedupCommand) {
            return visitor.visitDedupCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SortCommandContext extends antlr.ParserRuleContext {
    public _count?: IntegerLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SORT(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.SORT, 0)!;
    }
    public sortbyClause(): SortbyClauseContext {
        return this.getRuleContext(0, SortbyClauseContext)!;
    }
    public integerLiteral(): IntegerLiteralContext | null {
        return this.getRuleContext(0, IntegerLiteralContext);
    }
    public ASC(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ASC, 0);
    }
    public A(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.A, 0);
    }
    public DESC(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DESC, 0);
    }
    public D(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.D, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_sortCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitSortCommand) {
            return visitor.visitSortCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReverseCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public REVERSE(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.REVERSE, 0)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_reverseCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitReverseCommand) {
            return visitor.visitReverseCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TimechartCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TIMECHART(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.TIMECHART, 0)!;
    }
    public statsFunction(): StatsFunctionContext {
        return this.getRuleContext(0, StatsFunctionContext)!;
    }
    public timechartParameter(): TimechartParameterContext[];
    public timechartParameter(i: number): TimechartParameterContext | null;
    public timechartParameter(i?: number): TimechartParameterContext[] | TimechartParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TimechartParameterContext);
        }

        return this.getRuleContext(i, TimechartParameterContext);
    }
    public BY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.BY, 0);
    }
    public fieldExpression(): FieldExpressionContext | null {
        return this.getRuleContext(0, FieldExpressionContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_timechartCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitTimechartCommand) {
            return visitor.visitTimechartCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TimechartParameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public spanClause(): SpanClauseContext | null {
        return this.getRuleContext(0, SpanClauseContext);
    }
    public SPAN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SPAN, 0);
    }
    public EQUAL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.EQUAL, 0);
    }
    public spanLiteral(): SpanLiteralContext | null {
        return this.getRuleContext(0, SpanLiteralContext);
    }
    public timechartArg(): TimechartArgContext | null {
        return this.getRuleContext(0, TimechartArgContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_timechartParameter;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitTimechartParameter) {
            return visitor.visitTimechartParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TimechartArgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LIMIT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LIMIT, 0);
    }
    public EQUAL(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.EQUAL, 0)!;
    }
    public integerLiteral(): IntegerLiteralContext | null {
        return this.getRuleContext(0, IntegerLiteralContext);
    }
    public USEOTHER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.USEOTHER, 0);
    }
    public booleanLiteral(): BooleanLiteralContext | null {
        return this.getRuleContext(0, BooleanLiteralContext);
    }
    public ident(): IdentContext | null {
        return this.getRuleContext(0, IdentContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_timechartArg;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitTimechartArg) {
            return visitor.visitTimechartArg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SpanLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public integerLiteral(): IntegerLiteralContext | null {
        return this.getRuleContext(0, IntegerLiteralContext);
    }
    public timespanUnit(): TimespanUnitContext | null {
        return this.getRuleContext(0, TimespanUnitContext);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_spanLiteral;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitSpanLiteral) {
            return visitor.visitSpanLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EvalCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EVAL(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.EVAL, 0)!;
    }
    public evalClause(): EvalClauseContext[];
    public evalClause(i: number): EvalClauseContext | null;
    public evalClause(i?: number): EvalClauseContext[] | EvalClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EvalClauseContext);
        }

        return this.getRuleContext(i, EvalClauseContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchPPLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_evalCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitEvalCommand) {
            return visitor.visitEvalCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class HeadCommandContext extends antlr.ParserRuleContext {
    public _number_?: IntegerLiteralContext;
    public _from_?: IntegerLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public HEAD(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.HEAD, 0)!;
    }
    public FROM(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.FROM, 0);
    }
    public integerLiteral(): IntegerLiteralContext[];
    public integerLiteral(i: number): IntegerLiteralContext | null;
    public integerLiteral(i?: number): IntegerLiteralContext[] | IntegerLiteralContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IntegerLiteralContext);
        }

        return this.getRuleContext(i, IntegerLiteralContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_headCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitHeadCommand) {
            return visitor.visitHeadCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BinCommandContext extends antlr.ParserRuleContext {
    public _alias?: QualifiedNameContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BIN(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.BIN, 0)!;
    }
    public fieldExpression(): FieldExpressionContext {
        return this.getRuleContext(0, FieldExpressionContext)!;
    }
    public binOption(): BinOptionContext[];
    public binOption(i: number): BinOptionContext | null;
    public binOption(i?: number): BinOptionContext[] | BinOptionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BinOptionContext);
        }

        return this.getRuleContext(i, BinOptionContext);
    }
    public AS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.AS, 0);
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_binCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitBinCommand) {
            return visitor.visitBinCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BinOptionContext extends antlr.ParserRuleContext {
    public _span?: SpanValueContext;
    public _bins?: IntegerLiteralContext;
    public _minspan?: LiteralValueContext;
    public _minspanUnit?: TimespanUnitContext;
    public _aligntime?: AligntimeValueContext;
    public _start?: NumericLiteralContext;
    public _end?: NumericLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SPAN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SPAN, 0);
    }
    public EQUAL(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.EQUAL, 0)!;
    }
    public spanValue(): SpanValueContext | null {
        return this.getRuleContext(0, SpanValueContext);
    }
    public BINS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.BINS, 0);
    }
    public integerLiteral(): IntegerLiteralContext | null {
        return this.getRuleContext(0, IntegerLiteralContext);
    }
    public MINSPAN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MINSPAN, 0);
    }
    public literalValue(): LiteralValueContext | null {
        return this.getRuleContext(0, LiteralValueContext);
    }
    public timespanUnit(): TimespanUnitContext | null {
        return this.getRuleContext(0, TimespanUnitContext);
    }
    public ALIGNTIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ALIGNTIME, 0);
    }
    public aligntimeValue(): AligntimeValueContext | null {
        return this.getRuleContext(0, AligntimeValueContext);
    }
    public START(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.START, 0);
    }
    public numericLiteral(): NumericLiteralContext | null {
        return this.getRuleContext(0, NumericLiteralContext);
    }
    public END(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.END, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_binOption;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitBinOption) {
            return visitor.visitBinOption(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AligntimeValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EARLIEST(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.EARLIEST, 0);
    }
    public LATEST(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LATEST, 0);
    }
    public literalValue(): LiteralValueContext | null {
        return this.getRuleContext(0, LiteralValueContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_aligntimeValue;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitAligntimeValue) {
            return visitor.visitAligntimeValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SpanValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_spanValue;
    }
    public override copyFrom(ctx: SpanValueContext): void {
        super.copyFrom(ctx);
    }
}
export class LogBasedSpanValueContext extends SpanValueContext {
    public constructor(ctx: SpanValueContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public logSpanValue(): LogSpanValueContext {
        return this.getRuleContext(0, LogSpanValueContext)!;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitLogBasedSpanValue) {
            return visitor.visitLogBasedSpanValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExtendedTimeSpanValueContext extends SpanValueContext {
    public constructor(ctx: SpanValueContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ident(): IdentContext {
        return this.getRuleContext(0, IdentContext)!;
    }
    public timespanUnit(): TimespanUnitContext {
        return this.getRuleContext(0, TimespanUnitContext)!;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitExtendedTimeSpanValue) {
            return visitor.visitExtendedTimeSpanValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NumericSpanValueContext extends SpanValueContext {
    public constructor(ctx: SpanValueContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public literalValue(): LiteralValueContext {
        return this.getRuleContext(0, LiteralValueContext)!;
    }
    public timespanUnit(): TimespanUnitContext | null {
        return this.getRuleContext(0, TimespanUnitContext);
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitNumericSpanValue) {
            return visitor.visitNumericSpanValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IdentifierSpanValueContext extends SpanValueContext {
    public constructor(ctx: SpanValueContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ident(): IdentContext {
        return this.getRuleContext(0, IdentContext)!;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitIdentifierSpanValue) {
            return visitor.visitIdentifierSpanValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LogSpanValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_logSpanValue;
    }
    public override copyFrom(ctx: LogSpanValueContext): void {
        super.copyFrom(ctx);
    }
}
export class LogWithBaseSpanContext extends LogSpanValueContext {
    public constructor(ctx: LogSpanValueContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LOG_WITH_BASE(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LOG_WITH_BASE, 0)!;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitLogWithBaseSpan) {
            return visitor.visitLogWithBaseSpan(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TopCommandContext extends antlr.ParserRuleContext {
    public _number_?: IntegerLiteralContext;
    public _countfield?: StringLiteralContext;
    public _showcount?: BooleanLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TOP(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.TOP, 0)!;
    }
    public fieldList(): FieldListContext {
        return this.getRuleContext(0, FieldListContext)!;
    }
    public COUNTFIELD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.COUNTFIELD, 0);
    }
    public EQUAL(): antlr.TerminalNode[];
    public EQUAL(i: number): antlr.TerminalNode | null;
    public EQUAL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.EQUAL);
    	} else {
    		return this.getToken(OpenSearchPPLParser.EQUAL, i);
    	}
    }
    public SHOWCOUNT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SHOWCOUNT, 0);
    }
    public byClause(): ByClauseContext | null {
        return this.getRuleContext(0, ByClauseContext);
    }
    public integerLiteral(): IntegerLiteralContext | null {
        return this.getRuleContext(0, IntegerLiteralContext);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public booleanLiteral(): BooleanLiteralContext | null {
        return this.getRuleContext(0, BooleanLiteralContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_topCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitTopCommand) {
            return visitor.visitTopCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RareCommandContext extends antlr.ParserRuleContext {
    public _number_?: IntegerLiteralContext;
    public _countfield?: StringLiteralContext;
    public _showcount?: BooleanLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RARE(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RARE, 0)!;
    }
    public fieldList(): FieldListContext {
        return this.getRuleContext(0, FieldListContext)!;
    }
    public COUNTFIELD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.COUNTFIELD, 0);
    }
    public EQUAL(): antlr.TerminalNode[];
    public EQUAL(i: number): antlr.TerminalNode | null;
    public EQUAL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.EQUAL);
    	} else {
    		return this.getToken(OpenSearchPPLParser.EQUAL, i);
    	}
    }
    public SHOWCOUNT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SHOWCOUNT, 0);
    }
    public byClause(): ByClauseContext | null {
        return this.getRuleContext(0, ByClauseContext);
    }
    public integerLiteral(): IntegerLiteralContext | null {
        return this.getRuleContext(0, IntegerLiteralContext);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public booleanLiteral(): BooleanLiteralContext | null {
        return this.getRuleContext(0, BooleanLiteralContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_rareCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitRareCommand) {
            return visitor.visitRareCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GrokCommandContext extends antlr.ParserRuleContext {
    public _source_field?: ExpressionContext;
    public _pattern?: StringLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GROK(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.GROK, 0)!;
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_grokCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitGrokCommand) {
            return visitor.visitGrokCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParseCommandContext extends antlr.ParserRuleContext {
    public _source_field?: ExpressionContext;
    public _pattern?: StringLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PARSE(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.PARSE, 0)!;
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_parseCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitParseCommand) {
            return visitor.visitParseCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SpathCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SPATH(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.SPATH, 0)!;
    }
    public spathParameter(): SpathParameterContext[];
    public spathParameter(i: number): SpathParameterContext | null;
    public spathParameter(i?: number): SpathParameterContext[] | SpathParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SpathParameterContext);
        }

        return this.getRuleContext(i, SpathParameterContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_spathCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitSpathCommand) {
            return visitor.visitSpathCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SpathParameterContext extends antlr.ParserRuleContext {
    public _input?: ExpressionContext;
    public _output?: ExpressionContext;
    public _path?: IndexablePathContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INPUT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.INPUT, 0);
    }
    public EQUAL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.EQUAL, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public OUTPUT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.OUTPUT, 0);
    }
    public indexablePath(): IndexablePathContext | null {
        return this.getRuleContext(0, IndexablePathContext);
    }
    public PATH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PATH, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_spathParameter;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitSpathParameter) {
            return visitor.visitSpathParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IndexablePathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathElement(): PathElementContext[];
    public pathElement(i: number): PathElementContext | null;
    public pathElement(i?: number): PathElementContext[] | PathElementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PathElementContext);
        }

        return this.getRuleContext(i, PathElementContext);
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.DOT);
    	} else {
    		return this.getToken(OpenSearchPPLParser.DOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_indexablePath;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitIndexablePath) {
            return visitor.visitIndexablePath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PathElementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ident(): IdentContext {
        return this.getRuleContext(0, IdentContext)!;
    }
    public pathArrayAccess(): PathArrayAccessContext | null {
        return this.getRuleContext(0, PathArrayAccessContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_pathElement;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitPathElement) {
            return visitor.visitPathElement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PathArrayAccessContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT_CURLY(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_CURLY, 0)!;
    }
    public RT_CURLY(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_CURLY, 0)!;
    }
    public INTEGER_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.INTEGER_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_pathArrayAccess;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitPathArrayAccess) {
            return visitor.visitPathArrayAccess(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RegexCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public REGEX(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.REGEX, 0)!;
    }
    public regexExpr(): RegexExprContext {
        return this.getRuleContext(0, RegexExprContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_regexCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitRegexCommand) {
            return visitor.visitRegexCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RegexExprContext extends antlr.ParserRuleContext {
    public _field?: QualifiedNameContext;
    public _operator?: Token | null;
    public _pattern?: StringLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public stringLiteral(): StringLiteralContext {
        return this.getRuleContext(0, StringLiteralContext)!;
    }
    public EQUAL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.EQUAL, 0);
    }
    public NOT_EQUAL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.NOT_EQUAL, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_regexExpr;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitRegexExpr) {
            return visitor.visitRegexExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PatternsMethodContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PUNCT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PUNCT, 0);
    }
    public REGEX(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.REGEX, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_patternsMethod;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitPatternsMethod) {
            return visitor.visitPatternsMethod(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PatternsCommandContext extends antlr.ParserRuleContext {
    public _source_field?: ExpressionContext;
    public _method?: PatternMethodContext;
    public _pattern_mode?: PatternModeContext;
    public _max_sample_count?: IntegerLiteralContext;
    public _buffer_limit?: IntegerLiteralContext;
    public _new_field?: StringLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PATTERNS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.PATTERNS, 0)!;
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public statsByClause(): StatsByClauseContext | null {
        return this.getRuleContext(0, StatsByClauseContext);
    }
    public METHOD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.METHOD, 0);
    }
    public EQUAL(): antlr.TerminalNode[];
    public EQUAL(i: number): antlr.TerminalNode | null;
    public EQUAL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.EQUAL);
    	} else {
    		return this.getToken(OpenSearchPPLParser.EQUAL, i);
    	}
    }
    public MODE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MODE, 0);
    }
    public MAX_SAMPLE_COUNT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MAX_SAMPLE_COUNT, 0);
    }
    public BUFFER_LIMIT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.BUFFER_LIMIT, 0);
    }
    public NEW_FIELD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.NEW_FIELD, 0);
    }
    public patternsParameter(): PatternsParameterContext[];
    public patternsParameter(i: number): PatternsParameterContext | null;
    public patternsParameter(i?: number): PatternsParameterContext[] | PatternsParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PatternsParameterContext);
        }

        return this.getRuleContext(i, PatternsParameterContext);
    }
    public patternMethod(): PatternMethodContext | null {
        return this.getRuleContext(0, PatternMethodContext);
    }
    public patternMode(): PatternModeContext | null {
        return this.getRuleContext(0, PatternModeContext);
    }
    public integerLiteral(): IntegerLiteralContext[];
    public integerLiteral(i: number): IntegerLiteralContext | null;
    public integerLiteral(i?: number): IntegerLiteralContext[] | IntegerLiteralContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IntegerLiteralContext);
        }

        return this.getRuleContext(i, IntegerLiteralContext);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_patternsCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitPatternsCommand) {
            return visitor.visitPatternsCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PatternsParameterContext extends antlr.ParserRuleContext {
    public _pattern?: StringLiteralContext;
    public _variable_count_threshold?: IntegerLiteralContext;
    public _frequency_threshold_percentage?: DecimalLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PATTERN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PATTERN, 0);
    }
    public EQUAL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.EQUAL, 0);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public VARIABLE_COUNT_THRESHOLD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.VARIABLE_COUNT_THRESHOLD, 0);
    }
    public integerLiteral(): IntegerLiteralContext | null {
        return this.getRuleContext(0, IntegerLiteralContext);
    }
    public FREQUENCY_THRESHOLD_PERCENTAGE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.FREQUENCY_THRESHOLD_PERCENTAGE, 0);
    }
    public decimalLiteral(): DecimalLiteralContext | null {
        return this.getRuleContext(0, DecimalLiteralContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_patternsParameter;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitPatternsParameter) {
            return visitor.visitPatternsParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PatternMethodContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SIMPLE_PATTERN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SIMPLE_PATTERN, 0);
    }
    public BRAIN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.BRAIN, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_patternMethod;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitPatternMethod) {
            return visitor.visitPatternMethod(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PatternModeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LABEL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LABEL, 0);
    }
    public AGGREGATION(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.AGGREGATION, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_patternMode;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitPatternMode) {
            return visitor.visitPatternMode(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LookupCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOOKUP(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LOOKUP, 0)!;
    }
    public tableSource(): TableSourceContext {
        return this.getRuleContext(0, TableSourceContext)!;
    }
    public lookupMappingList(): LookupMappingListContext {
        return this.getRuleContext(0, LookupMappingListContext)!;
    }
    public outputCandidateList(): OutputCandidateListContext | null {
        return this.getRuleContext(0, OutputCandidateListContext);
    }
    public APPEND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.APPEND, 0);
    }
    public REPLACE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.REPLACE, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_lookupCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitLookupCommand) {
            return visitor.visitLookupCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LookupMappingListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public lookupPair(): LookupPairContext[];
    public lookupPair(i: number): LookupPairContext | null;
    public lookupPair(i?: number): LookupPairContext[] | LookupPairContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LookupPairContext);
        }

        return this.getRuleContext(i, LookupPairContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchPPLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_lookupMappingList;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitLookupMappingList) {
            return visitor.visitLookupMappingList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OutputCandidateListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public lookupPair(): LookupPairContext[];
    public lookupPair(i: number): LookupPairContext | null;
    public lookupPair(i?: number): LookupPairContext[] | LookupPairContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LookupPairContext);
        }

        return this.getRuleContext(i, LookupPairContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchPPLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_outputCandidateList;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitOutputCandidateList) {
            return visitor.visitOutputCandidateList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LookupPairContext extends antlr.ParserRuleContext {
    public _inputField?: FieldExpressionContext;
    public _outputField?: FieldExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public fieldExpression(): FieldExpressionContext[];
    public fieldExpression(i: number): FieldExpressionContext | null;
    public fieldExpression(i?: number): FieldExpressionContext[] | FieldExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FieldExpressionContext);
        }

        return this.getRuleContext(i, FieldExpressionContext);
    }
    public AS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.AS, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_lookupPair;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitLookupPair) {
            return visitor.visitLookupPair(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FillnullCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FILLNULL(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.FILLNULL, 0)!;
    }
    public fillNullWith(): FillNullWithContext | null {
        return this.getRuleContext(0, FillNullWithContext);
    }
    public fillNullUsing(): FillNullUsingContext | null {
        return this.getRuleContext(0, FillNullUsingContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_fillnullCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitFillnullCommand) {
            return visitor.visitFillnullCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FillNullWithContext extends antlr.ParserRuleContext {
    public _replacement?: ValueExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WITH(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.WITH, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public IN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.IN, 0);
    }
    public fieldList(): FieldListContext | null {
        return this.getRuleContext(0, FieldListContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_fillNullWith;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitFillNullWith) {
            return visitor.visitFillNullWith(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FillNullUsingContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public USING(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.USING, 0)!;
    }
    public replacementPair(): ReplacementPairContext[];
    public replacementPair(i: number): ReplacementPairContext | null;
    public replacementPair(i?: number): ReplacementPairContext[] | ReplacementPairContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ReplacementPairContext);
        }

        return this.getRuleContext(i, ReplacementPairContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchPPLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_fillNullUsing;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitFillNullUsing) {
            return visitor.visitFillNullUsing(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReplacementPairContext extends antlr.ParserRuleContext {
    public _replacement?: ValueExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public fieldExpression(): FieldExpressionContext {
        return this.getRuleContext(0, FieldExpressionContext)!;
    }
    public EQUAL(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.EQUAL, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_replacementPair;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitReplacementPair) {
            return visitor.visitReplacementPair(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TrendlineCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TRENDLINE(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.TRENDLINE, 0)!;
    }
    public trendlineClause(): TrendlineClauseContext[];
    public trendlineClause(i: number): TrendlineClauseContext | null;
    public trendlineClause(i?: number): TrendlineClauseContext[] | TrendlineClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TrendlineClauseContext);
        }

        return this.getRuleContext(i, TrendlineClauseContext);
    }
    public SORT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SORT, 0);
    }
    public sortField(): SortFieldContext | null {
        return this.getRuleContext(0, SortFieldContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_trendlineCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitTrendlineCommand) {
            return visitor.visitTrendlineCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TrendlineClauseContext extends antlr.ParserRuleContext {
    public _numberOfDataPoints?: IntegerLiteralContext;
    public _field?: FieldExpressionContext;
    public _alias?: QualifiedNameContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public trendlineType(): TrendlineTypeContext {
        return this.getRuleContext(0, TrendlineTypeContext)!;
    }
    public LT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0)!;
    }
    public COMMA(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.COMMA, 0)!;
    }
    public RT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0)!;
    }
    public integerLiteral(): IntegerLiteralContext {
        return this.getRuleContext(0, IntegerLiteralContext)!;
    }
    public fieldExpression(): FieldExpressionContext {
        return this.getRuleContext(0, FieldExpressionContext)!;
    }
    public AS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.AS, 0);
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_trendlineClause;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitTrendlineClause) {
            return visitor.visitTrendlineClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TrendlineTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SMA(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SMA, 0);
    }
    public WMA(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.WMA, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_trendlineType;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitTrendlineType) {
            return visitor.visitTrendlineType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpandCommandContext extends antlr.ParserRuleContext {
    public _alias?: QualifiedNameContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EXPAND(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.EXPAND, 0)!;
    }
    public fieldExpression(): FieldExpressionContext {
        return this.getRuleContext(0, FieldExpressionContext)!;
    }
    public AS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.AS, 0);
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_expandCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitExpandCommand) {
            return visitor.visitExpandCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FlattenCommandContext extends antlr.ParserRuleContext {
    public _aliases?: IdentifierSeqContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FLATTEN(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.FLATTEN, 0)!;
    }
    public fieldExpression(): FieldExpressionContext {
        return this.getRuleContext(0, FieldExpressionContext)!;
    }
    public AS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.AS, 0);
    }
    public identifierSeq(): IdentifierSeqContext | null {
        return this.getRuleContext(0, IdentifierSeqContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_flattenCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitFlattenCommand) {
            return visitor.visitFlattenCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AppendcolCommandContext extends antlr.ParserRuleContext {
    public _override?: BooleanLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public APPENDCOL(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.APPENDCOL, 0)!;
    }
    public LT_SQR_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_SQR_PRTHS, 0)!;
    }
    public commands(): CommandsContext[];
    public commands(i: number): CommandsContext | null;
    public commands(i?: number): CommandsContext[] | CommandsContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CommandsContext);
        }

        return this.getRuleContext(i, CommandsContext);
    }
    public RT_SQR_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_SQR_PRTHS, 0)!;
    }
    public OVERRIDE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.OVERRIDE, 0);
    }
    public EQUAL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.EQUAL, 0);
    }
    public PIPE(): antlr.TerminalNode[];
    public PIPE(i: number): antlr.TerminalNode | null;
    public PIPE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.PIPE);
    	} else {
    		return this.getToken(OpenSearchPPLParser.PIPE, i);
    	}
    }
    public booleanLiteral(): BooleanLiteralContext | null {
        return this.getRuleContext(0, BooleanLiteralContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_appendcolCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitAppendcolCommand) {
            return visitor.visitAppendcolCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AppendCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public APPEND(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.APPEND, 0)!;
    }
    public LT_SQR_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_SQR_PRTHS, 0)!;
    }
    public RT_SQR_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_SQR_PRTHS, 0)!;
    }
    public searchCommand(): SearchCommandContext | null {
        return this.getRuleContext(0, SearchCommandContext);
    }
    public PIPE(): antlr.TerminalNode[];
    public PIPE(i: number): antlr.TerminalNode | null;
    public PIPE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.PIPE);
    	} else {
    		return this.getToken(OpenSearchPPLParser.PIPE, i);
    	}
    }
    public commands(): CommandsContext[];
    public commands(i: number): CommandsContext | null;
    public commands(i?: number): CommandsContext[] | CommandsContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CommandsContext);
        }

        return this.getRuleContext(i, CommandsContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_appendCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitAppendCommand) {
            return visitor.visitAppendCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class KmeansCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KMEANS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.KMEANS, 0)!;
    }
    public kmeansParameter(): KmeansParameterContext[];
    public kmeansParameter(i: number): KmeansParameterContext | null;
    public kmeansParameter(i?: number): KmeansParameterContext[] | KmeansParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(KmeansParameterContext);
        }

        return this.getRuleContext(i, KmeansParameterContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_kmeansCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitKmeansCommand) {
            return visitor.visitKmeansCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class KmeansParameterContext extends antlr.ParserRuleContext {
    public _centroids?: IntegerLiteralContext;
    public _iterations?: IntegerLiteralContext;
    public _distance_type?: StringLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CENTROIDS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CENTROIDS, 0);
    }
    public EQUAL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.EQUAL, 0);
    }
    public integerLiteral(): IntegerLiteralContext | null {
        return this.getRuleContext(0, IntegerLiteralContext);
    }
    public ITERATIONS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ITERATIONS, 0);
    }
    public DISTANCE_TYPE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DISTANCE_TYPE, 0);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_kmeansParameter;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitKmeansParameter) {
            return visitor.visitKmeansParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AdCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AD(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.AD, 0)!;
    }
    public adParameter(): AdParameterContext[];
    public adParameter(i: number): AdParameterContext | null;
    public adParameter(i?: number): AdParameterContext[] | AdParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AdParameterContext);
        }

        return this.getRuleContext(i, AdParameterContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_adCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitAdCommand) {
            return visitor.visitAdCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AdParameterContext extends antlr.ParserRuleContext {
    public _number_of_trees?: IntegerLiteralContext;
    public _shingle_size?: IntegerLiteralContext;
    public _sample_size?: IntegerLiteralContext;
    public _output_after?: IntegerLiteralContext;
    public _time_decay?: DecimalLiteralContext;
    public _anomaly_rate?: DecimalLiteralContext;
    public _category_field?: StringLiteralContext;
    public _time_field?: StringLiteralContext;
    public _date_format?: StringLiteralContext;
    public _time_zone?: StringLiteralContext;
    public _training_data_size?: IntegerLiteralContext;
    public _anomaly_score_threshold?: DecimalLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NUMBER_OF_TREES(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.NUMBER_OF_TREES, 0);
    }
    public EQUAL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.EQUAL, 0);
    }
    public integerLiteral(): IntegerLiteralContext | null {
        return this.getRuleContext(0, IntegerLiteralContext);
    }
    public SHINGLE_SIZE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SHINGLE_SIZE, 0);
    }
    public SAMPLE_SIZE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SAMPLE_SIZE, 0);
    }
    public OUTPUT_AFTER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.OUTPUT_AFTER, 0);
    }
    public TIME_DECAY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TIME_DECAY, 0);
    }
    public decimalLiteral(): DecimalLiteralContext | null {
        return this.getRuleContext(0, DecimalLiteralContext);
    }
    public ANOMALY_RATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ANOMALY_RATE, 0);
    }
    public CATEGORY_FIELD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CATEGORY_FIELD, 0);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public TIME_FIELD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TIME_FIELD, 0);
    }
    public DATE_FORMAT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DATE_FORMAT, 0);
    }
    public TIME_ZONE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TIME_ZONE, 0);
    }
    public TRAINING_DATA_SIZE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TRAINING_DATA_SIZE, 0);
    }
    public ANOMALY_SCORE_THRESHOLD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ANOMALY_SCORE_THRESHOLD, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_adParameter;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitAdParameter) {
            return visitor.visitAdParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MlCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ML(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.ML, 0)!;
    }
    public mlArg(): MlArgContext[];
    public mlArg(i: number): MlArgContext | null;
    public mlArg(i?: number): MlArgContext[] | MlArgContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MlArgContext);
        }

        return this.getRuleContext(i, MlArgContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_mlCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitMlCommand) {
            return visitor.visitMlCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MlArgContext extends antlr.ParserRuleContext {
    public _argName?: IdentContext;
    public _argValue?: LiteralValueContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQUAL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.EQUAL, 0);
    }
    public ident(): IdentContext | null {
        return this.getRuleContext(0, IdentContext);
    }
    public literalValue(): LiteralValueContext | null {
        return this.getRuleContext(0, LiteralValueContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_mlArg;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitMlArg) {
            return visitor.visitMlArg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FromClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SOURCE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SOURCE, 0);
    }
    public EQUAL(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.EQUAL, 0)!;
    }
    public tableOrSubqueryClause(): TableOrSubqueryClauseContext | null {
        return this.getRuleContext(0, TableOrSubqueryClauseContext);
    }
    public INDEX(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.INDEX, 0);
    }
    public tableFunction(): TableFunctionContext | null {
        return this.getRuleContext(0, TableFunctionContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_fromClause;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitFromClause) {
            return visitor.visitFromClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableOrSubqueryClauseContext extends antlr.ParserRuleContext {
    public _alias?: QualifiedNameContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT_SQR_PRTHS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LT_SQR_PRTHS, 0);
    }
    public subSearch(): SubSearchContext | null {
        return this.getRuleContext(0, SubSearchContext);
    }
    public RT_SQR_PRTHS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.RT_SQR_PRTHS, 0);
    }
    public AS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.AS, 0);
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public tableSourceClause(): TableSourceClauseContext | null {
        return this.getRuleContext(0, TableSourceClauseContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_tableOrSubqueryClause;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitTableOrSubqueryClause) {
            return visitor.visitTableOrSubqueryClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableSourceClauseContext extends antlr.ParserRuleContext {
    public _alias?: QualifiedNameContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tableSource(): TableSourceContext[];
    public tableSource(i: number): TableSourceContext | null;
    public tableSource(i?: number): TableSourceContext[] | TableSourceContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TableSourceContext);
        }

        return this.getRuleContext(i, TableSourceContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchPPLParser.COMMA, i);
    	}
    }
    public AS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.AS, 0);
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_tableSourceClause;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitTableSourceClause) {
            return visitor.visitTableSourceClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class JoinCommandContext extends antlr.ParserRuleContext {
    public _right?: TableOrSubqueryClauseContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public JOIN(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.JOIN, 0)!;
    }
    public sideAlias(): SideAliasContext {
        return this.getRuleContext(0, SideAliasContext)!;
    }
    public tableOrSubqueryClause(): TableOrSubqueryClauseContext {
        return this.getRuleContext(0, TableOrSubqueryClauseContext)!;
    }
    public joinType(): JoinTypeContext | null {
        return this.getRuleContext(0, JoinTypeContext);
    }
    public joinHintList(): JoinHintListContext | null {
        return this.getRuleContext(0, JoinHintListContext);
    }
    public joinCriteria(): JoinCriteriaContext | null {
        return this.getRuleContext(0, JoinCriteriaContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_joinCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitJoinCommand) {
            return visitor.visitJoinCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class JoinTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INNER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.INNER, 0);
    }
    public CROSS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CROSS, 0);
    }
    public LEFT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LEFT, 0);
    }
    public OUTER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.OUTER, 0);
    }
    public RIGHT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.RIGHT, 0);
    }
    public FULL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.FULL, 0);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SEMI, 0);
    }
    public ANTI(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ANTI, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_joinType;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitJoinType) {
            return visitor.visitJoinType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SideAliasContext extends antlr.ParserRuleContext {
    public _leftAlias?: QualifiedNameContext;
    public _rightAlias?: QualifiedNameContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LEFT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LEFT, 0);
    }
    public EQUAL(): antlr.TerminalNode[];
    public EQUAL(i: number): antlr.TerminalNode | null;
    public EQUAL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.EQUAL);
    	} else {
    		return this.getToken(OpenSearchPPLParser.EQUAL, i);
    	}
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.COMMA, 0);
    }
    public RIGHT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.RIGHT, 0);
    }
    public qualifiedName(): QualifiedNameContext[];
    public qualifiedName(i: number): QualifiedNameContext | null;
    public qualifiedName(i?: number): QualifiedNameContext[] | QualifiedNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedNameContext);
        }

        return this.getRuleContext(i, QualifiedNameContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_sideAlias;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitSideAlias) {
            return visitor.visitSideAlias(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class JoinCriteriaContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ON(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.ON, 0)!;
    }
    public logicalExpression(): LogicalExpressionContext {
        return this.getRuleContext(0, LogicalExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_joinCriteria;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitJoinCriteria) {
            return visitor.visitJoinCriteria(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class JoinHintListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public hintPair(): HintPairContext[];
    public hintPair(i: number): HintPairContext | null;
    public hintPair(i?: number): HintPairContext[] | HintPairContext | null {
        if (i === undefined) {
            return this.getRuleContexts(HintPairContext);
        }

        return this.getRuleContext(i, HintPairContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchPPLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_joinHintList;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitJoinHintList) {
            return visitor.visitJoinHintList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class HintPairContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_hintPair;
    }
    public override copyFrom(ctx: HintPairContext): void {
        super.copyFrom(ctx);
    }
}
export class RightHintContext extends HintPairContext {
    public _rightHintKey?: Token | null;
    public _rightHintValue?: IdentContext;
    public constructor(ctx: HintPairContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.DOT, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.ID, 0)!;
    }
    public EQUAL(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.EQUAL, 0)!;
    }
    public RIGHT_HINT(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RIGHT_HINT, 0)!;
    }
    public ident(): IdentContext {
        return this.getRuleContext(0, IdentContext)!;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitRightHint) {
            return visitor.visitRightHint(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LeftHintContext extends HintPairContext {
    public _leftHintKey?: Token | null;
    public _leftHintValue?: IdentContext;
    public constructor(ctx: HintPairContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.DOT, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.ID, 0)!;
    }
    public EQUAL(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.EQUAL, 0)!;
    }
    public LEFT_HINT(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LEFT_HINT, 0)!;
    }
    public ident(): IdentContext {
        return this.getRuleContext(0, IdentContext)!;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitLeftHint) {
            return visitor.visitLeftHint(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RenameClasueContext extends antlr.ParserRuleContext {
    public _orignalField?: WcFieldExpressionContext;
    public _renamedField?: WcFieldExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.AS, 0)!;
    }
    public wcFieldExpression(): WcFieldExpressionContext[];
    public wcFieldExpression(i: number): WcFieldExpressionContext | null;
    public wcFieldExpression(i?: number): WcFieldExpressionContext[] | WcFieldExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(WcFieldExpressionContext);
        }

        return this.getRuleContext(i, WcFieldExpressionContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_renameClasue;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitRenameClasue) {
            return visitor.visitRenameClasue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.BY, 0)!;
    }
    public fieldList(): FieldListContext {
        return this.getRuleContext(0, FieldListContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_byClause;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitByClause) {
            return visitor.visitByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatsByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.BY, 0)!;
    }
    public fieldList(): FieldListContext | null {
        return this.getRuleContext(0, FieldListContext);
    }
    public bySpanClause(): BySpanClauseContext | null {
        return this.getRuleContext(0, BySpanClauseContext);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_statsByClause;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitStatsByClause) {
            return visitor.visitStatsByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BySpanClauseContext extends antlr.ParserRuleContext {
    public _alias?: QualifiedNameContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public spanClause(): SpanClauseContext {
        return this.getRuleContext(0, SpanClauseContext)!;
    }
    public AS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.AS, 0);
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_bySpanClause;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitBySpanClause) {
            return visitor.visitBySpanClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SpanClauseContext extends antlr.ParserRuleContext {
    public _value?: LiteralValueContext;
    public _unit?: TimespanUnitContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SPAN(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.SPAN, 0)!;
    }
    public LT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0)!;
    }
    public fieldExpression(): FieldExpressionContext {
        return this.getRuleContext(0, FieldExpressionContext)!;
    }
    public COMMA(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.COMMA, 0)!;
    }
    public RT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0)!;
    }
    public literalValue(): LiteralValueContext {
        return this.getRuleContext(0, LiteralValueContext)!;
    }
    public timespanUnit(): TimespanUnitContext | null {
        return this.getRuleContext(0, TimespanUnitContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_spanClause;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitSpanClause) {
            return visitor.visitSpanClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SortbyClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public sortField(): SortFieldContext[];
    public sortField(i: number): SortFieldContext | null;
    public sortField(i?: number): SortFieldContext[] | SortFieldContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SortFieldContext);
        }

        return this.getRuleContext(i, SortFieldContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchPPLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_sortbyClause;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitSortbyClause) {
            return visitor.visitSortbyClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EvalClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public fieldExpression(): FieldExpressionContext {
        return this.getRuleContext(0, FieldExpressionContext)!;
    }
    public EQUAL(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.EQUAL, 0)!;
    }
    public logicalExpression(): LogicalExpressionContext {
        return this.getRuleContext(0, LogicalExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_evalClause;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitEvalClause) {
            return visitor.visitEvalClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EventstatsAggTermContext extends antlr.ParserRuleContext {
    public _alias?: WcFieldExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public windowFunction(): WindowFunctionContext {
        return this.getRuleContext(0, WindowFunctionContext)!;
    }
    public AS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.AS, 0);
    }
    public wcFieldExpression(): WcFieldExpressionContext | null {
        return this.getRuleContext(0, WcFieldExpressionContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_eventstatsAggTerm;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitEventstatsAggTerm) {
            return visitor.visitEventstatsAggTerm(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WindowFunctionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public windowFunctionName(): WindowFunctionNameContext {
        return this.getRuleContext(0, WindowFunctionNameContext)!;
    }
    public LT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0)!;
    }
    public functionArgs(): FunctionArgsContext {
        return this.getRuleContext(0, FunctionArgsContext)!;
    }
    public RT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_windowFunction;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitWindowFunction) {
            return visitor.visitWindowFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WindowFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statsFunctionName(): StatsFunctionNameContext | null {
        return this.getRuleContext(0, StatsFunctionNameContext);
    }
    public scalarWindowFunctionName(): ScalarWindowFunctionNameContext | null {
        return this.getRuleContext(0, ScalarWindowFunctionNameContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_windowFunctionName;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitWindowFunctionName) {
            return visitor.visitWindowFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ScalarWindowFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ROW_NUMBER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ROW_NUMBER, 0);
    }
    public RANK(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.RANK, 0);
    }
    public DENSE_RANK(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DENSE_RANK, 0);
    }
    public PERCENT_RANK(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PERCENT_RANK, 0);
    }
    public CUME_DIST(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CUME_DIST, 0);
    }
    public FIRST(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.FIRST, 0);
    }
    public LAST(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LAST, 0);
    }
    public NTH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.NTH, 0);
    }
    public NTILE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.NTILE, 0);
    }
    public DISTINCT_COUNT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DISTINCT_COUNT, 0);
    }
    public DC(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DC, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_scalarWindowFunctionName;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitScalarWindowFunctionName) {
            return visitor.visitScalarWindowFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatsAggTermContext extends antlr.ParserRuleContext {
    public _alias?: WcFieldExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statsFunction(): StatsFunctionContext {
        return this.getRuleContext(0, StatsFunctionContext)!;
    }
    public AS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.AS, 0);
    }
    public wcFieldExpression(): WcFieldExpressionContext | null {
        return this.getRuleContext(0, WcFieldExpressionContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_statsAggTerm;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitStatsAggTerm) {
            return visitor.visitStatsAggTerm(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatsFunctionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_statsFunction;
    }
    public override copyFrom(ctx: StatsFunctionContext): void {
        super.copyFrom(ctx);
    }
}
export class DistinctCountFunctionCallContext extends StatsFunctionContext {
    public constructor(ctx: StatsFunctionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public RT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0)!;
    }
    public DISTINCT_COUNT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DISTINCT_COUNT, 0);
    }
    public DC(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DC, 0);
    }
    public DISTINCT_COUNT_APPROX(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DISTINCT_COUNT_APPROX, 0);
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitDistinctCountFunctionCall) {
            return visitor.visitDistinctCountFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PercentileApproxFunctionCallContext extends StatsFunctionContext {
    public constructor(ctx: StatsFunctionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public percentileApproxFunction(): PercentileApproxFunctionContext {
        return this.getRuleContext(0, PercentileApproxFunctionContext)!;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitPercentileApproxFunctionCall) {
            return visitor.visitPercentileApproxFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PercentileShortcutFunctionCallContext extends StatsFunctionContext {
    public constructor(ctx: StatsFunctionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public PERCENTILE_SHORTCUT(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.PERCENTILE_SHORTCUT, 0)!;
    }
    public LT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public RT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0)!;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitPercentileShortcutFunctionCall) {
            return visitor.visitPercentileShortcutFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class EarliestLatestFunctionCallContext extends StatsFunctionContext {
    public constructor(ctx: StatsFunctionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public earliestLatestFunction(): EarliestLatestFunctionContext {
        return this.getRuleContext(0, EarliestLatestFunctionContext)!;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitEarliestLatestFunctionCall) {
            return visitor.visitEarliestLatestFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StatsFunctionCallContext extends StatsFunctionContext {
    public constructor(ctx: StatsFunctionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public statsFunctionName(): StatsFunctionNameContext {
        return this.getRuleContext(0, StatsFunctionNameContext)!;
    }
    public LT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public RT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0)!;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitStatsFunctionCall) {
            return visitor.visitStatsFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CountEvalFunctionCallContext extends StatsFunctionContext {
    public constructor(ctx: StatsFunctionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0)!;
    }
    public evalExpression(): EvalExpressionContext {
        return this.getRuleContext(0, EvalExpressionContext)!;
    }
    public RT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0)!;
    }
    public COUNT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.COUNT, 0);
    }
    public C(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.C, 0);
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitCountEvalFunctionCall) {
            return visitor.visitCountEvalFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CountAllFunctionCallContext extends StatsFunctionContext {
    public constructor(ctx: StatsFunctionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public COUNT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.COUNT, 0);
    }
    public C(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.C, 0);
    }
    public LT_PRTHS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0);
    }
    public RT_PRTHS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0);
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitCountAllFunctionCall) {
            return visitor.visitCountAllFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TakeAggFunctionCallContext extends StatsFunctionContext {
    public constructor(ctx: StatsFunctionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public takeAggFunction(): TakeAggFunctionContext {
        return this.getRuleContext(0, TakeAggFunctionContext)!;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitTakeAggFunctionCall) {
            return visitor.visitTakeAggFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatsFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AVG(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.AVG, 0);
    }
    public COUNT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.COUNT, 0);
    }
    public SUM(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SUM, 0);
    }
    public MIN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MIN, 0);
    }
    public MAX(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MAX, 0);
    }
    public VAR_SAMP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.VAR_SAMP, 0);
    }
    public VAR_POP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.VAR_POP, 0);
    }
    public STDDEV_SAMP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.STDDEV_SAMP, 0);
    }
    public STDDEV_POP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.STDDEV_POP, 0);
    }
    public PERCENTILE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PERCENTILE, 0);
    }
    public PERCENTILE_APPROX(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PERCENTILE_APPROX, 0);
    }
    public LIST(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LIST, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_statsFunctionName;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitStatsFunctionName) {
            return visitor.visitStatsFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EarliestLatestFunctionContext extends antlr.ParserRuleContext {
    public _timeField?: ValueExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public RT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0)!;
    }
    public EARLIEST(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.EARLIEST, 0);
    }
    public LATEST(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LATEST, 0);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_earliestLatestFunction;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitEarliestLatestFunction) {
            return visitor.visitEarliestLatestFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TakeAggFunctionContext extends antlr.ParserRuleContext {
    public _size?: IntegerLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TAKE(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.TAKE, 0)!;
    }
    public LT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0)!;
    }
    public fieldExpression(): FieldExpressionContext {
        return this.getRuleContext(0, FieldExpressionContext)!;
    }
    public RT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0)!;
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.COMMA, 0);
    }
    public integerLiteral(): IntegerLiteralContext | null {
        return this.getRuleContext(0, IntegerLiteralContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_takeAggFunction;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitTakeAggFunction) {
            return visitor.visitTakeAggFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PercentileApproxFunctionContext extends antlr.ParserRuleContext {
    public _aggField?: ValueExpressionContext;
    public _percent?: NumericLiteralContext;
    public _compression?: NumericLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchPPLParser.COMMA, i);
    	}
    }
    public RT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0)!;
    }
    public PERCENTILE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PERCENTILE, 0);
    }
    public PERCENTILE_APPROX(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PERCENTILE_APPROX, 0);
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public numericLiteral(): NumericLiteralContext[];
    public numericLiteral(i: number): NumericLiteralContext | null;
    public numericLiteral(i?: number): NumericLiteralContext[] | NumericLiteralContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NumericLiteralContext);
        }

        return this.getRuleContext(i, NumericLiteralContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_percentileApproxFunction;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitPercentileApproxFunction) {
            return visitor.visitPercentileApproxFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NumericLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public integerLiteral(): IntegerLiteralContext | null {
        return this.getRuleContext(0, IntegerLiteralContext);
    }
    public decimalLiteral(): DecimalLiteralContext | null {
        return this.getRuleContext(0, DecimalLiteralContext);
    }
    public doubleLiteral(): DoubleLiteralContext | null {
        return this.getRuleContext(0, DoubleLiteralContext);
    }
    public floatLiteral(): FloatLiteralContext | null {
        return this.getRuleContext(0, FloatLiteralContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_numericLiteral;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitNumericLiteral) {
            return visitor.visitNumericLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LogicalExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_logicalExpression;
    }
    public override copyFrom(ctx: LogicalExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class LogicalNotContext extends LogicalExpressionContext {
    public constructor(ctx: LogicalExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NOT(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.NOT, 0)!;
    }
    public logicalExpression(): LogicalExpressionContext {
        return this.getRuleContext(0, LogicalExpressionContext)!;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitLogicalNot) {
            return visitor.visitLogicalNot(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogicalExprContext extends LogicalExpressionContext {
    public constructor(ctx: LogicalExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitLogicalExpr) {
            return visitor.visitLogicalExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogicalAndContext extends LogicalExpressionContext {
    public _left?: LogicalExpressionContext;
    public _right?: LogicalExpressionContext;
    public constructor(ctx: LogicalExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public AND(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.AND, 0)!;
    }
    public logicalExpression(): LogicalExpressionContext[];
    public logicalExpression(i: number): LogicalExpressionContext | null;
    public logicalExpression(i?: number): LogicalExpressionContext[] | LogicalExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LogicalExpressionContext);
        }

        return this.getRuleContext(i, LogicalExpressionContext);
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitLogicalAnd) {
            return visitor.visitLogicalAnd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogicalXorContext extends LogicalExpressionContext {
    public _left?: LogicalExpressionContext;
    public _right?: LogicalExpressionContext;
    public constructor(ctx: LogicalExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public XOR(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.XOR, 0)!;
    }
    public logicalExpression(): LogicalExpressionContext[];
    public logicalExpression(i: number): LogicalExpressionContext | null;
    public logicalExpression(i?: number): LogicalExpressionContext[] | LogicalExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LogicalExpressionContext);
        }

        return this.getRuleContext(i, LogicalExpressionContext);
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitLogicalXor) {
            return visitor.visitLogicalXor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogicalOrContext extends LogicalExpressionContext {
    public _left?: LogicalExpressionContext;
    public _right?: LogicalExpressionContext;
    public constructor(ctx: LogicalExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public OR(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.OR, 0)!;
    }
    public logicalExpression(): LogicalExpressionContext[];
    public logicalExpression(i: number): LogicalExpressionContext | null;
    public logicalExpression(i?: number): LogicalExpressionContext[] | LogicalExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LogicalExpressionContext);
        }

        return this.getRuleContext(i, LogicalExpressionContext);
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitLogicalOr) {
            return visitor.visitLogicalOr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_expression;
    }
    public override copyFrom(ctx: ExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class RelevanceExprContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public relevanceExpression(): RelevanceExpressionContext {
        return this.getRuleContext(0, RelevanceExpressionContext)!;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitRelevanceExpr) {
            return visitor.visitRelevanceExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ValueExprContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitValueExpr) {
            return visitor.visitValueExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class InExprContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public IN(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.IN, 0)!;
    }
    public valueList(): ValueListContext {
        return this.getRuleContext(0, ValueListContext)!;
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.NOT, 0);
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitInExpr) {
            return visitor.visitInExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BetweenContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public BETWEEN(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.BETWEEN, 0)!;
    }
    public AND(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.AND, 0)!;
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.NOT, 0);
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitBetween) {
            return visitor.visitBetween(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CompareExprContext extends ExpressionContext {
    public _left?: ExpressionContext;
    public _right?: ExpressionContext;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public comparisonOperator(): ComparisonOperatorContext {
        return this.getRuleContext(0, ComparisonOperatorContext)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitCompareExpr) {
            return visitor.visitCompareExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ValueExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_valueExpression;
    }
    public override copyFrom(ctx: ValueExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class InSubqueryExprContext extends ValueExpressionContext {
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LT_PRTHS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0);
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public RT_PRTHS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0);
    }
    public IN(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.IN, 0)!;
    }
    public LT_SQR_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_SQR_PRTHS, 0)!;
    }
    public subSearch(): SubSearchContext {
        return this.getRuleContext(0, SubSearchContext)!;
    }
    public RT_SQR_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_SQR_PRTHS, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchPPLParser.COMMA, i);
    	}
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.NOT, 0);
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitInSubqueryExpr) {
            return visitor.visitInSubqueryExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LambdaExprContext extends ValueExpressionContext {
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public lambda(): LambdaContext {
        return this.getRuleContext(0, LambdaContext)!;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitLambdaExpr) {
            return visitor.visitLambdaExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LiteralValueExprContext extends ValueExpressionContext {
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public literalValue(): LiteralValueContext {
        return this.getRuleContext(0, LiteralValueContext)!;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitLiteralValueExpr) {
            return visitor.visitLiteralValueExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionCallExprContext extends ValueExpressionContext {
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public functionCall(): FunctionCallContext {
        return this.getRuleContext(0, FunctionCallContext)!;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionCallExpr) {
            return visitor.visitFunctionCallExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExistsSubqueryExprContext extends ValueExpressionContext {
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public EXISTS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.EXISTS, 0)!;
    }
    public LT_SQR_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_SQR_PRTHS, 0)!;
    }
    public subSearch(): SubSearchContext {
        return this.getRuleContext(0, SubSearchContext)!;
    }
    public RT_SQR_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_SQR_PRTHS, 0)!;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitExistsSubqueryExpr) {
            return visitor.visitExistsSubqueryExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ScalarSubqueryExprContext extends ValueExpressionContext {
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LT_SQR_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_SQR_PRTHS, 0)!;
    }
    public subSearch(): SubSearchContext {
        return this.getRuleContext(0, SubSearchContext)!;
    }
    public RT_SQR_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_SQR_PRTHS, 0)!;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitScalarSubqueryExpr) {
            return visitor.visitScalarSubqueryExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NestedValueExprContext extends ValueExpressionContext {
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0)!;
    }
    public logicalExpression(): LogicalExpressionContext {
        return this.getRuleContext(0, LogicalExpressionContext)!;
    }
    public RT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0)!;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitNestedValueExpr) {
            return visitor.visitNestedValueExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BinaryArithmeticContext extends ValueExpressionContext {
    public _left?: ValueExpressionContext;
    public _binaryOperator?: Token | null;
    public _right?: ValueExpressionContext;
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public STAR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.STAR, 0);
    }
    public DIVIDE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DIVIDE, 0);
    }
    public MODULE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MODULE, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MINUS, 0);
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitBinaryArithmetic) {
            return visitor.visitBinaryArithmetic(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FieldExprContext extends ValueExpressionContext {
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public fieldExpression(): FieldExpressionContext {
        return this.getRuleContext(0, FieldExpressionContext)!;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitFieldExpr) {
            return visitor.visitFieldExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EvalExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EVAL(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.EVAL, 0)!;
    }
    public LT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0)!;
    }
    public logicalExpression(): LogicalExpressionContext {
        return this.getRuleContext(0, LogicalExpressionContext)!;
    }
    public RT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_evalExpression;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitEvalExpression) {
            return visitor.visitEvalExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public evalFunctionCall(): EvalFunctionCallContext | null {
        return this.getRuleContext(0, EvalFunctionCallContext);
    }
    public dataTypeFunctionCall(): DataTypeFunctionCallContext | null {
        return this.getRuleContext(0, DataTypeFunctionCallContext);
    }
    public positionFunctionCall(): PositionFunctionCallContext | null {
        return this.getRuleContext(0, PositionFunctionCallContext);
    }
    public caseFunctionCall(): CaseFunctionCallContext | null {
        return this.getRuleContext(0, CaseFunctionCallContext);
    }
    public timestampFunctionCall(): TimestampFunctionCallContext | null {
        return this.getRuleContext(0, TimestampFunctionCallContext);
    }
    public extractFunctionCall(): ExtractFunctionCallContext | null {
        return this.getRuleContext(0, ExtractFunctionCallContext);
    }
    public getFormatFunctionCall(): GetFormatFunctionCallContext | null {
        return this.getRuleContext(0, GetFormatFunctionCallContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_functionCall;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionCall) {
            return visitor.visitFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PositionFunctionCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public positionFunctionName(): PositionFunctionNameContext {
        return this.getRuleContext(0, PositionFunctionNameContext)!;
    }
    public LT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0)!;
    }
    public functionArg(): FunctionArgContext[];
    public functionArg(i: number): FunctionArgContext | null;
    public functionArg(i?: number): FunctionArgContext[] | FunctionArgContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FunctionArgContext);
        }

        return this.getRuleContext(i, FunctionArgContext);
    }
    public IN(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.IN, 0)!;
    }
    public RT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_positionFunctionCall;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitPositionFunctionCall) {
            return visitor.visitPositionFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CaseFunctionCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CASE(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.CASE, 0)!;
    }
    public LT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0)!;
    }
    public logicalExpression(): LogicalExpressionContext[];
    public logicalExpression(i: number): LogicalExpressionContext | null;
    public logicalExpression(i?: number): LogicalExpressionContext[] | LogicalExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LogicalExpressionContext);
        }

        return this.getRuleContext(i, LogicalExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchPPLParser.COMMA, i);
    	}
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public RT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0)!;
    }
    public ELSE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ELSE, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_caseFunctionCall;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitCaseFunctionCall) {
            return visitor.visitCaseFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RelevanceExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public singleFieldRelevanceFunction(): SingleFieldRelevanceFunctionContext | null {
        return this.getRuleContext(0, SingleFieldRelevanceFunctionContext);
    }
    public multiFieldRelevanceFunction(): MultiFieldRelevanceFunctionContext | null {
        return this.getRuleContext(0, MultiFieldRelevanceFunctionContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_relevanceExpression;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitRelevanceExpression) {
            return visitor.visitRelevanceExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SingleFieldRelevanceFunctionContext extends antlr.ParserRuleContext {
    public _field?: RelevanceFieldContext;
    public _query?: RelevanceQueryContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public singleFieldRelevanceFunctionName(): SingleFieldRelevanceFunctionNameContext {
        return this.getRuleContext(0, SingleFieldRelevanceFunctionNameContext)!;
    }
    public LT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchPPLParser.COMMA, i);
    	}
    }
    public RT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0)!;
    }
    public relevanceField(): RelevanceFieldContext {
        return this.getRuleContext(0, RelevanceFieldContext)!;
    }
    public relevanceQuery(): RelevanceQueryContext {
        return this.getRuleContext(0, RelevanceQueryContext)!;
    }
    public relevanceArg(): RelevanceArgContext[];
    public relevanceArg(i: number): RelevanceArgContext | null;
    public relevanceArg(i?: number): RelevanceArgContext[] | RelevanceArgContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RelevanceArgContext);
        }

        return this.getRuleContext(i, RelevanceArgContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_singleFieldRelevanceFunction;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitSingleFieldRelevanceFunction) {
            return visitor.visitSingleFieldRelevanceFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MultiFieldRelevanceFunctionContext extends antlr.ParserRuleContext {
    public _field?: RelevanceFieldAndWeightContext;
    public _query?: RelevanceQueryContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public multiFieldRelevanceFunctionName(): MultiFieldRelevanceFunctionNameContext {
        return this.getRuleContext(0, MultiFieldRelevanceFunctionNameContext)!;
    }
    public LT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0)!;
    }
    public RT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0)!;
    }
    public relevanceQuery(): RelevanceQueryContext {
        return this.getRuleContext(0, RelevanceQueryContext)!;
    }
    public LT_SQR_PRTHS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LT_SQR_PRTHS, 0);
    }
    public RT_SQR_PRTHS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.RT_SQR_PRTHS, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchPPLParser.COMMA, i);
    	}
    }
    public relevanceArg(): RelevanceArgContext[];
    public relevanceArg(i: number): RelevanceArgContext | null;
    public relevanceArg(i?: number): RelevanceArgContext[] | RelevanceArgContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RelevanceArgContext);
        }

        return this.getRuleContext(i, RelevanceArgContext);
    }
    public relevanceFieldAndWeight(): RelevanceFieldAndWeightContext[];
    public relevanceFieldAndWeight(i: number): RelevanceFieldAndWeightContext | null;
    public relevanceFieldAndWeight(i?: number): RelevanceFieldAndWeightContext[] | RelevanceFieldAndWeightContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RelevanceFieldAndWeightContext);
        }

        return this.getRuleContext(i, RelevanceFieldAndWeightContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_multiFieldRelevanceFunction;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitMultiFieldRelevanceFunction) {
            return visitor.visitMultiFieldRelevanceFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableSourceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tableQualifiedName(): TableQualifiedNameContext | null {
        return this.getRuleContext(0, TableQualifiedNameContext);
    }
    public ID_DATE_SUFFIX(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ID_DATE_SUFFIX, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_tableSource;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitTableSource) {
            return visitor.visitTableSource(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableFunctionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public LT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0)!;
    }
    public namedFunctionArgs(): NamedFunctionArgsContext {
        return this.getRuleContext(0, NamedFunctionArgsContext)!;
    }
    public RT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_tableFunction;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitTableFunction) {
            return visitor.visitTableFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FieldListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public fieldExpression(): FieldExpressionContext[];
    public fieldExpression(i: number): FieldExpressionContext | null;
    public fieldExpression(i?: number): FieldExpressionContext[] | FieldExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FieldExpressionContext);
        }

        return this.getRuleContext(i, FieldExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchPPLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_fieldList;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitFieldList) {
            return visitor.visitFieldList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SortFieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public sortFieldExpression(): SortFieldExpressionContext {
        return this.getRuleContext(0, SortFieldExpressionContext)!;
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MINUS, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_sortField;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitSortField) {
            return visitor.visitSortField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SortFieldExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public fieldExpression(): FieldExpressionContext {
        return this.getRuleContext(0, FieldExpressionContext)!;
    }
    public AUTO(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.AUTO, 0);
    }
    public LT_PRTHS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0);
    }
    public RT_PRTHS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0);
    }
    public STR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.STR, 0);
    }
    public IP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.IP, 0);
    }
    public NUM(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.NUM, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_sortFieldExpression;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitSortFieldExpression) {
            return visitor.visitSortFieldExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FieldExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_fieldExpression;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitFieldExpression) {
            return visitor.visitFieldExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WcFieldExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public wcQualifiedName(): WcQualifiedNameContext {
        return this.getRuleContext(0, WcQualifiedNameContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_wcFieldExpression;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitWcFieldExpression) {
            return visitor.visitWcFieldExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SelectFieldExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public wcQualifiedName(): WcQualifiedNameContext | null {
        return this.getRuleContext(0, WcQualifiedNameContext);
    }
    public STAR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.STAR, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_selectFieldExpression;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitSelectFieldExpression) {
            return visitor.visitSelectFieldExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EvalFunctionCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public evalFunctionName(): EvalFunctionNameContext {
        return this.getRuleContext(0, EvalFunctionNameContext)!;
    }
    public LT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0)!;
    }
    public functionArgs(): FunctionArgsContext {
        return this.getRuleContext(0, FunctionArgsContext)!;
    }
    public RT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_evalFunctionCall;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitEvalFunctionCall) {
            return visitor.visitEvalFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DataTypeFunctionCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CAST(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.CAST, 0)!;
    }
    public LT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0)!;
    }
    public logicalExpression(): LogicalExpressionContext {
        return this.getRuleContext(0, LogicalExpressionContext)!;
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.AS, 0)!;
    }
    public convertedDataType(): ConvertedDataTypeContext {
        return this.getRuleContext(0, ConvertedDataTypeContext)!;
    }
    public RT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_dataTypeFunctionCall;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitDataTypeFunctionCall) {
            return visitor.visitDataTypeFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConvertedDataTypeContext extends antlr.ParserRuleContext {
    public _typeName?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DATE, 0);
    }
    public TIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TIME, 0);
    }
    public TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TIMESTAMP, 0);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.INT, 0);
    }
    public INTEGER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.INTEGER, 0);
    }
    public DOUBLE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DOUBLE, 0);
    }
    public LONG(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LONG, 0);
    }
    public FLOAT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.FLOAT, 0);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.STRING, 0);
    }
    public BOOLEAN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.BOOLEAN, 0);
    }
    public IP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.IP, 0);
    }
    public JSON(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.JSON, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_convertedDataType;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitConvertedDataType) {
            return visitor.visitConvertedDataType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EvalFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public mathematicalFunctionName(): MathematicalFunctionNameContext | null {
        return this.getRuleContext(0, MathematicalFunctionNameContext);
    }
    public dateTimeFunctionName(): DateTimeFunctionNameContext | null {
        return this.getRuleContext(0, DateTimeFunctionNameContext);
    }
    public textFunctionName(): TextFunctionNameContext | null {
        return this.getRuleContext(0, TextFunctionNameContext);
    }
    public conditionFunctionName(): ConditionFunctionNameContext | null {
        return this.getRuleContext(0, ConditionFunctionNameContext);
    }
    public flowControlFunctionName(): FlowControlFunctionNameContext | null {
        return this.getRuleContext(0, FlowControlFunctionNameContext);
    }
    public systemFunctionName(): SystemFunctionNameContext | null {
        return this.getRuleContext(0, SystemFunctionNameContext);
    }
    public positionFunctionName(): PositionFunctionNameContext | null {
        return this.getRuleContext(0, PositionFunctionNameContext);
    }
    public cryptographicFunctionName(): CryptographicFunctionNameContext | null {
        return this.getRuleContext(0, CryptographicFunctionNameContext);
    }
    public jsonFunctionName(): JsonFunctionNameContext | null {
        return this.getRuleContext(0, JsonFunctionNameContext);
    }
    public geoipFunctionName(): GeoipFunctionNameContext | null {
        return this.getRuleContext(0, GeoipFunctionNameContext);
    }
    public collectionFunctionName(): CollectionFunctionNameContext | null {
        return this.getRuleContext(0, CollectionFunctionNameContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_evalFunctionName;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitEvalFunctionName) {
            return visitor.visitEvalFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionArgsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public functionArg(): FunctionArgContext[];
    public functionArg(i: number): FunctionArgContext | null;
    public functionArg(i?: number): FunctionArgContext[] | FunctionArgContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FunctionArgContext);
        }

        return this.getRuleContext(i, FunctionArgContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchPPLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_functionArgs;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionArgs) {
            return visitor.visitFunctionArgs(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NamedFunctionArgsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public namedFunctionArg(): NamedFunctionArgContext[];
    public namedFunctionArg(i: number): NamedFunctionArgContext | null;
    public namedFunctionArg(i?: number): NamedFunctionArgContext[] | NamedFunctionArgContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NamedFunctionArgContext);
        }

        return this.getRuleContext(i, NamedFunctionArgContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchPPLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_namedFunctionArgs;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitNamedFunctionArgs) {
            return visitor.visitNamedFunctionArgs(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionArgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public functionArgExpression(): FunctionArgExpressionContext {
        return this.getRuleContext(0, FunctionArgExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_functionArg;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionArg) {
            return visitor.visitFunctionArg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NamedFunctionArgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public functionArgExpression(): FunctionArgExpressionContext {
        return this.getRuleContext(0, FunctionArgExpressionContext)!;
    }
    public ident(): IdentContext | null {
        return this.getRuleContext(0, IdentContext);
    }
    public EQUAL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.EQUAL, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_namedFunctionArg;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitNamedFunctionArg) {
            return visitor.visitNamedFunctionArg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionArgExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public lambda(): LambdaContext | null {
        return this.getRuleContext(0, LambdaContext);
    }
    public logicalExpression(): LogicalExpressionContext | null {
        return this.getRuleContext(0, LogicalExpressionContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_functionArgExpression;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionArgExpression) {
            return visitor.visitFunctionArgExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LambdaContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ident(): IdentContext[];
    public ident(i: number): IdentContext | null;
    public ident(i?: number): IdentContext[] | IdentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }

        return this.getRuleContext(i, IdentContext);
    }
    public ARROW(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.ARROW, 0)!;
    }
    public logicalExpression(): LogicalExpressionContext {
        return this.getRuleContext(0, LogicalExpressionContext)!;
    }
    public LT_PRTHS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0);
    }
    public RT_PRTHS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchPPLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_lambda;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitLambda) {
            return visitor.visitLambda(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RelevanceArgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public relevanceArgName(): RelevanceArgNameContext {
        return this.getRuleContext(0, RelevanceArgNameContext)!;
    }
    public EQUAL(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.EQUAL, 0)!;
    }
    public relevanceArgValue(): RelevanceArgValueContext {
        return this.getRuleContext(0, RelevanceArgValueContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_relevanceArg;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitRelevanceArg) {
            return visitor.visitRelevanceArg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RelevanceArgNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ALLOW_LEADING_WILDCARD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ALLOW_LEADING_WILDCARD, 0);
    }
    public ANALYZER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ANALYZER, 0);
    }
    public ANALYZE_WILDCARD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ANALYZE_WILDCARD, 0);
    }
    public AUTO_GENERATE_SYNONYMS_PHRASE_QUERY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.AUTO_GENERATE_SYNONYMS_PHRASE_QUERY, 0);
    }
    public BOOST(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.BOOST, 0);
    }
    public CUTOFF_FREQUENCY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CUTOFF_FREQUENCY, 0);
    }
    public DEFAULT_FIELD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DEFAULT_FIELD, 0);
    }
    public DEFAULT_OPERATOR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DEFAULT_OPERATOR, 0);
    }
    public ENABLE_POSITION_INCREMENTS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ENABLE_POSITION_INCREMENTS, 0);
    }
    public ESCAPE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ESCAPE, 0);
    }
    public FIELDS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.FIELDS, 0);
    }
    public FLAGS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.FLAGS, 0);
    }
    public FUZZINESS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.FUZZINESS, 0);
    }
    public FUZZY_MAX_EXPANSIONS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.FUZZY_MAX_EXPANSIONS, 0);
    }
    public FUZZY_PREFIX_LENGTH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.FUZZY_PREFIX_LENGTH, 0);
    }
    public FUZZY_REWRITE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.FUZZY_REWRITE, 0);
    }
    public FUZZY_TRANSPOSITIONS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.FUZZY_TRANSPOSITIONS, 0);
    }
    public LENIENT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LENIENT, 0);
    }
    public LOW_FREQ_OPERATOR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LOW_FREQ_OPERATOR, 0);
    }
    public MAX_DETERMINIZED_STATES(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MAX_DETERMINIZED_STATES, 0);
    }
    public MAX_EXPANSIONS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MAX_EXPANSIONS, 0);
    }
    public MINIMUM_SHOULD_MATCH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MINIMUM_SHOULD_MATCH, 0);
    }
    public OPERATOR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.OPERATOR, 0);
    }
    public PHRASE_SLOP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PHRASE_SLOP, 0);
    }
    public PREFIX_LENGTH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PREFIX_LENGTH, 0);
    }
    public QUOTE_ANALYZER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.QUOTE_ANALYZER, 0);
    }
    public QUOTE_FIELD_SUFFIX(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.QUOTE_FIELD_SUFFIX, 0);
    }
    public REWRITE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.REWRITE, 0);
    }
    public SLOP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SLOP, 0);
    }
    public TIE_BREAKER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TIE_BREAKER, 0);
    }
    public TIME_ZONE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TIME_ZONE, 0);
    }
    public TYPE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TYPE, 0);
    }
    public ZERO_TERMS_QUERY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ZERO_TERMS_QUERY, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_relevanceArgName;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitRelevanceArgName) {
            return visitor.visitRelevanceArgName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RelevanceFieldAndWeightContext extends antlr.ParserRuleContext {
    public _field?: RelevanceFieldContext;
    public _weight?: RelevanceFieldWeightContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public relevanceField(): RelevanceFieldContext {
        return this.getRuleContext(0, RelevanceFieldContext)!;
    }
    public relevanceFieldWeight(): RelevanceFieldWeightContext | null {
        return this.getRuleContext(0, RelevanceFieldWeightContext);
    }
    public BIT_XOR_OP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.BIT_XOR_OP, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_relevanceFieldAndWeight;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitRelevanceFieldAndWeight) {
            return visitor.visitRelevanceFieldAndWeight(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RelevanceFieldWeightContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public integerLiteral(): IntegerLiteralContext | null {
        return this.getRuleContext(0, IntegerLiteralContext);
    }
    public decimalLiteral(): DecimalLiteralContext | null {
        return this.getRuleContext(0, DecimalLiteralContext);
    }
    public doubleLiteral(): DoubleLiteralContext | null {
        return this.getRuleContext(0, DoubleLiteralContext);
    }
    public floatLiteral(): FloatLiteralContext | null {
        return this.getRuleContext(0, FloatLiteralContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_relevanceFieldWeight;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitRelevanceFieldWeight) {
            return visitor.visitRelevanceFieldWeight(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RelevanceFieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_relevanceField;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitRelevanceField) {
            return visitor.visitRelevanceField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RelevanceQueryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public relevanceArgValue(): RelevanceArgValueContext {
        return this.getRuleContext(0, RelevanceArgValueContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_relevanceQuery;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitRelevanceQuery) {
            return visitor.visitRelevanceQuery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RelevanceArgValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public literalValue(): LiteralValueContext | null {
        return this.getRuleContext(0, LiteralValueContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_relevanceArgValue;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitRelevanceArgValue) {
            return visitor.visitRelevanceArgValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MathematicalFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ABS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ABS, 0);
    }
    public PLUS_FUCTION(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PLUS_FUCTION, 0);
    }
    public MINUS_FUCTION(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MINUS_FUCTION, 0);
    }
    public STAR_FUNCTION(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.STAR_FUNCTION, 0);
    }
    public DIVIDE_FUNCTION(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DIVIDE_FUNCTION, 0);
    }
    public CBRT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CBRT, 0);
    }
    public CEIL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CEIL, 0);
    }
    public CEILING(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CEILING, 0);
    }
    public CONV(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CONV, 0);
    }
    public CRC32(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CRC32, 0);
    }
    public E(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.E, 0);
    }
    public EXP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.EXP, 0);
    }
    public EXPM1(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.EXPM1, 0);
    }
    public FLOOR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.FLOOR, 0);
    }
    public LN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LN, 0);
    }
    public LOG(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LOG, 0);
    }
    public LOG_WITH_BASE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LOG_WITH_BASE, 0);
    }
    public MOD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MOD, 0);
    }
    public MODULUS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MODULUS, 0);
    }
    public PI(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PI, 0);
    }
    public POW(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.POW, 0);
    }
    public POWER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.POWER, 0);
    }
    public RAND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.RAND, 0);
    }
    public ROUND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ROUND, 0);
    }
    public SIGN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SIGN, 0);
    }
    public SQRT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SQRT, 0);
    }
    public TRUNCATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TRUNCATE, 0);
    }
    public RINT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.RINT, 0);
    }
    public SIGNUM(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SIGNUM, 0);
    }
    public SUM(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SUM, 0);
    }
    public AVG(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.AVG, 0);
    }
    public trigonometricFunctionName(): TrigonometricFunctionNameContext | null {
        return this.getRuleContext(0, TrigonometricFunctionNameContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_mathematicalFunctionName;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitMathematicalFunctionName) {
            return visitor.visitMathematicalFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GeoipFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GEOIP(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.GEOIP, 0)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_geoipFunctionName;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitGeoipFunctionName) {
            return visitor.visitGeoipFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CollectionFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ARRAY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ARRAY, 0);
    }
    public ARRAY_LENGTH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ARRAY_LENGTH, 0);
    }
    public FORALL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.FORALL, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.EXISTS, 0);
    }
    public FILTER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.FILTER, 0);
    }
    public TRANSFORM(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TRANSFORM, 0);
    }
    public REDUCE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.REDUCE, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_collectionFunctionName;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitCollectionFunctionName) {
            return visitor.visitCollectionFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TrigonometricFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ACOS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ACOS, 0);
    }
    public ASIN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ASIN, 0);
    }
    public ATAN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ATAN, 0);
    }
    public ATAN2(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ATAN2, 0);
    }
    public COS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.COS, 0);
    }
    public COSH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.COSH, 0);
    }
    public COT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.COT, 0);
    }
    public DEGREES(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DEGREES, 0);
    }
    public RADIANS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.RADIANS, 0);
    }
    public SIN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SIN, 0);
    }
    public SINH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SINH, 0);
    }
    public TAN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TAN, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_trigonometricFunctionName;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitTrigonometricFunctionName) {
            return visitor.visitTrigonometricFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class JsonFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public JSON(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.JSON, 0);
    }
    public JSON_OBJECT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.JSON_OBJECT, 0);
    }
    public JSON_ARRAY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.JSON_ARRAY, 0);
    }
    public JSON_ARRAY_LENGTH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.JSON_ARRAY_LENGTH, 0);
    }
    public JSON_EXTRACT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.JSON_EXTRACT, 0);
    }
    public JSON_KEYS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.JSON_KEYS, 0);
    }
    public JSON_SET(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.JSON_SET, 0);
    }
    public JSON_DELETE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.JSON_DELETE, 0);
    }
    public JSON_APPEND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.JSON_APPEND, 0);
    }
    public JSON_EXTEND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.JSON_EXTEND, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_jsonFunctionName;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitJsonFunctionName) {
            return visitor.visitJsonFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CryptographicFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MD5(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MD5, 0);
    }
    public SHA1(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SHA1, 0);
    }
    public SHA2(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SHA2, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_cryptographicFunctionName;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitCryptographicFunctionName) {
            return visitor.visitCryptographicFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DateTimeFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ADDDATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ADDDATE, 0);
    }
    public ADDTIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ADDTIME, 0);
    }
    public CONVERT_TZ(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CONVERT_TZ, 0);
    }
    public CURDATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CURDATE, 0);
    }
    public CURRENT_DATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CURRENT_DATE, 0);
    }
    public CURRENT_TIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CURRENT_TIME, 0);
    }
    public CURRENT_TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CURRENT_TIMESTAMP, 0);
    }
    public CURTIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CURTIME, 0);
    }
    public DATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DATE, 0);
    }
    public DATEDIFF(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DATEDIFF, 0);
    }
    public DATETIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DATETIME, 0);
    }
    public DATE_ADD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DATE_ADD, 0);
    }
    public DATE_FORMAT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DATE_FORMAT, 0);
    }
    public DATE_SUB(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DATE_SUB, 0);
    }
    public DAY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DAY, 0);
    }
    public DAYNAME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DAYNAME, 0);
    }
    public DAYOFMONTH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DAYOFMONTH, 0);
    }
    public DAYOFWEEK(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DAYOFWEEK, 0);
    }
    public DAYOFYEAR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DAYOFYEAR, 0);
    }
    public DAY_OF_MONTH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DAY_OF_MONTH, 0);
    }
    public DAY_OF_WEEK(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DAY_OF_WEEK, 0);
    }
    public DAY_OF_YEAR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DAY_OF_YEAR, 0);
    }
    public FROM_DAYS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.FROM_DAYS, 0);
    }
    public FROM_UNIXTIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.FROM_UNIXTIME, 0);
    }
    public HOUR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.HOUR, 0);
    }
    public HOUR_OF_DAY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.HOUR_OF_DAY, 0);
    }
    public LAST_DAY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LAST_DAY, 0);
    }
    public LOCALTIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LOCALTIME, 0);
    }
    public LOCALTIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LOCALTIMESTAMP, 0);
    }
    public MAKEDATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MAKEDATE, 0);
    }
    public MAKETIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MAKETIME, 0);
    }
    public MICROSECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MICROSECOND, 0);
    }
    public MINUTE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MINUTE, 0);
    }
    public MINUTE_OF_DAY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MINUTE_OF_DAY, 0);
    }
    public MINUTE_OF_HOUR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MINUTE_OF_HOUR, 0);
    }
    public MONTH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MONTH, 0);
    }
    public MONTHNAME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MONTHNAME, 0);
    }
    public MONTH_OF_YEAR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MONTH_OF_YEAR, 0);
    }
    public NOW(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.NOW, 0);
    }
    public PERIOD_ADD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PERIOD_ADD, 0);
    }
    public PERIOD_DIFF(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PERIOD_DIFF, 0);
    }
    public QUARTER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.QUARTER, 0);
    }
    public SECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SECOND, 0);
    }
    public SECOND_OF_MINUTE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SECOND_OF_MINUTE, 0);
    }
    public SEC_TO_TIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SEC_TO_TIME, 0);
    }
    public STR_TO_DATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.STR_TO_DATE, 0);
    }
    public SUBDATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SUBDATE, 0);
    }
    public SUBTIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SUBTIME, 0);
    }
    public SYSDATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SYSDATE, 0);
    }
    public TIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TIME, 0);
    }
    public TIMEDIFF(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TIMEDIFF, 0);
    }
    public TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TIMESTAMP, 0);
    }
    public TIME_FORMAT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TIME_FORMAT, 0);
    }
    public TIME_TO_SEC(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TIME_TO_SEC, 0);
    }
    public TO_DAYS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TO_DAYS, 0);
    }
    public TO_SECONDS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TO_SECONDS, 0);
    }
    public UNIX_TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.UNIX_TIMESTAMP, 0);
    }
    public UTC_DATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.UTC_DATE, 0);
    }
    public UTC_TIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.UTC_TIME, 0);
    }
    public UTC_TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.UTC_TIMESTAMP, 0);
    }
    public WEEK(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.WEEK, 0);
    }
    public WEEKDAY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.WEEKDAY, 0);
    }
    public WEEK_OF_YEAR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.WEEK_OF_YEAR, 0);
    }
    public YEAR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.YEAR, 0);
    }
    public YEARWEEK(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.YEARWEEK, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_dateTimeFunctionName;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitDateTimeFunctionName) {
            return visitor.visitDateTimeFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GetFormatFunctionCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GET_FORMAT(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.GET_FORMAT, 0)!;
    }
    public LT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0)!;
    }
    public getFormatType(): GetFormatTypeContext {
        return this.getRuleContext(0, GetFormatTypeContext)!;
    }
    public COMMA(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.COMMA, 0)!;
    }
    public functionArg(): FunctionArgContext {
        return this.getRuleContext(0, FunctionArgContext)!;
    }
    public RT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_getFormatFunctionCall;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitGetFormatFunctionCall) {
            return visitor.visitGetFormatFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GetFormatTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DATE, 0);
    }
    public DATETIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DATETIME, 0);
    }
    public TIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TIME, 0);
    }
    public TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TIMESTAMP, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_getFormatType;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitGetFormatType) {
            return visitor.visitGetFormatType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExtractFunctionCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EXTRACT(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.EXTRACT, 0)!;
    }
    public LT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0)!;
    }
    public datetimePart(): DatetimePartContext {
        return this.getRuleContext(0, DatetimePartContext)!;
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.FROM, 0)!;
    }
    public functionArg(): FunctionArgContext {
        return this.getRuleContext(0, FunctionArgContext)!;
    }
    public RT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_extractFunctionCall;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitExtractFunctionCall) {
            return visitor.visitExtractFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SimpleDateTimePartContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MICROSECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MICROSECOND, 0);
    }
    public SECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SECOND, 0);
    }
    public MINUTE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MINUTE, 0);
    }
    public HOUR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.HOUR, 0);
    }
    public DAY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DAY, 0);
    }
    public WEEK(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.WEEK, 0);
    }
    public MONTH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MONTH, 0);
    }
    public QUARTER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.QUARTER, 0);
    }
    public YEAR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.YEAR, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_simpleDateTimePart;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitSimpleDateTimePart) {
            return visitor.visitSimpleDateTimePart(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComplexDateTimePartContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SECOND_MICROSECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SECOND_MICROSECOND, 0);
    }
    public MINUTE_MICROSECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MINUTE_MICROSECOND, 0);
    }
    public MINUTE_SECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MINUTE_SECOND, 0);
    }
    public HOUR_MICROSECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.HOUR_MICROSECOND, 0);
    }
    public HOUR_SECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.HOUR_SECOND, 0);
    }
    public HOUR_MINUTE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.HOUR_MINUTE, 0);
    }
    public DAY_MICROSECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DAY_MICROSECOND, 0);
    }
    public DAY_SECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DAY_SECOND, 0);
    }
    public DAY_MINUTE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DAY_MINUTE, 0);
    }
    public DAY_HOUR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DAY_HOUR, 0);
    }
    public YEAR_MONTH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.YEAR_MONTH, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_complexDateTimePart;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitComplexDateTimePart) {
            return visitor.visitComplexDateTimePart(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DatetimePartContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public simpleDateTimePart(): SimpleDateTimePartContext | null {
        return this.getRuleContext(0, SimpleDateTimePartContext);
    }
    public complexDateTimePart(): ComplexDateTimePartContext | null {
        return this.getRuleContext(0, ComplexDateTimePartContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_datetimePart;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitDatetimePart) {
            return visitor.visitDatetimePart(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TimestampFunctionCallContext extends antlr.ParserRuleContext {
    public _firstArg?: FunctionArgContext;
    public _secondArg?: FunctionArgContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public timestampFunctionName(): TimestampFunctionNameContext {
        return this.getRuleContext(0, TimestampFunctionNameContext)!;
    }
    public LT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0)!;
    }
    public simpleDateTimePart(): SimpleDateTimePartContext {
        return this.getRuleContext(0, SimpleDateTimePartContext)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchPPLParser.COMMA, i);
    	}
    }
    public RT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0)!;
    }
    public functionArg(): FunctionArgContext[];
    public functionArg(i: number): FunctionArgContext | null;
    public functionArg(i?: number): FunctionArgContext[] | FunctionArgContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FunctionArgContext);
        }

        return this.getRuleContext(i, FunctionArgContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_timestampFunctionCall;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitTimestampFunctionCall) {
            return visitor.visitTimestampFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TimestampFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TIMESTAMPADD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TIMESTAMPADD, 0);
    }
    public TIMESTAMPDIFF(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TIMESTAMPDIFF, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_timestampFunctionName;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitTimestampFunctionName) {
            return visitor.visitTimestampFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConditionFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LIKE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LIKE, 0);
    }
    public ISNULL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ISNULL, 0);
    }
    public ISNOTNULL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ISNOTNULL, 0);
    }
    public CIDRMATCH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CIDRMATCH, 0);
    }
    public REGEX_MATCH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.REGEX_MATCH, 0);
    }
    public JSON_VALID(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.JSON_VALID, 0);
    }
    public ISPRESENT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ISPRESENT, 0);
    }
    public ISEMPTY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ISEMPTY, 0);
    }
    public ISBLANK(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ISBLANK, 0);
    }
    public EARLIEST(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.EARLIEST, 0);
    }
    public LATEST(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LATEST, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_conditionFunctionName;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitConditionFunctionName) {
            return visitor.visitConditionFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FlowControlFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.IF, 0);
    }
    public IFNULL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.IFNULL, 0);
    }
    public NULLIF(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.NULLIF, 0);
    }
    public COALESCE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.COALESCE, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_flowControlFunctionName;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitFlowControlFunctionName) {
            return visitor.visitFlowControlFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SystemFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TYPEOF(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.TYPEOF, 0)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_systemFunctionName;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitSystemFunctionName) {
            return visitor.visitSystemFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TextFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SUBSTR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SUBSTR, 0);
    }
    public SUBSTRING(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SUBSTRING, 0);
    }
    public TRIM(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TRIM, 0);
    }
    public LTRIM(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LTRIM, 0);
    }
    public RTRIM(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.RTRIM, 0);
    }
    public LOWER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LOWER, 0);
    }
    public UPPER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.UPPER, 0);
    }
    public CONCAT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CONCAT, 0);
    }
    public CONCAT_WS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CONCAT_WS, 0);
    }
    public LENGTH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LENGTH, 0);
    }
    public STRCMP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.STRCMP, 0);
    }
    public RIGHT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.RIGHT, 0);
    }
    public LEFT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LEFT, 0);
    }
    public ASCII(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ASCII, 0);
    }
    public LOCATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LOCATE, 0);
    }
    public REPLACE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.REPLACE, 0);
    }
    public REVERSE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.REVERSE, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_textFunctionName;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitTextFunctionName) {
            return visitor.visitTextFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PositionFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public POSITION(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.POSITION, 0)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_positionFunctionName;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitPositionFunctionName) {
            return visitor.visitPositionFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComparisonOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQUAL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.EQUAL, 0);
    }
    public DOUBLE_EQUAL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DOUBLE_EQUAL, 0);
    }
    public NOT_EQUAL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.NOT_EQUAL, 0);
    }
    public LESS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LESS, 0);
    }
    public NOT_LESS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.NOT_LESS, 0);
    }
    public GREATER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.GREATER, 0);
    }
    public NOT_GREATER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.NOT_GREATER, 0);
    }
    public REGEXP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.REGEXP, 0);
    }
    public LIKE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LIKE, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_comparisonOperator;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitComparisonOperator) {
            return visitor.visitComparisonOperator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SingleFieldRelevanceFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MATCH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MATCH, 0);
    }
    public MATCH_PHRASE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MATCH_PHRASE, 0);
    }
    public MATCH_BOOL_PREFIX(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MATCH_BOOL_PREFIX, 0);
    }
    public MATCH_PHRASE_PREFIX(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MATCH_PHRASE_PREFIX, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_singleFieldRelevanceFunctionName;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitSingleFieldRelevanceFunctionName) {
            return visitor.visitSingleFieldRelevanceFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MultiFieldRelevanceFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SIMPLE_QUERY_STRING(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SIMPLE_QUERY_STRING, 0);
    }
    public MULTI_MATCH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MULTI_MATCH, 0);
    }
    public QUERY_STRING(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.QUERY_STRING, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_multiFieldRelevanceFunctionName;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitMultiFieldRelevanceFunctionName) {
            return visitor.visitMultiFieldRelevanceFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LiteralValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public intervalLiteral(): IntervalLiteralContext | null {
        return this.getRuleContext(0, IntervalLiteralContext);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public integerLiteral(): IntegerLiteralContext | null {
        return this.getRuleContext(0, IntegerLiteralContext);
    }
    public decimalLiteral(): DecimalLiteralContext | null {
        return this.getRuleContext(0, DecimalLiteralContext);
    }
    public doubleLiteral(): DoubleLiteralContext | null {
        return this.getRuleContext(0, DoubleLiteralContext);
    }
    public floatLiteral(): FloatLiteralContext | null {
        return this.getRuleContext(0, FloatLiteralContext);
    }
    public booleanLiteral(): BooleanLiteralContext | null {
        return this.getRuleContext(0, BooleanLiteralContext);
    }
    public datetimeLiteral(): DatetimeLiteralContext | null {
        return this.getRuleContext(0, DatetimeLiteralContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_literalValue;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitLiteralValue) {
            return visitor.visitLiteralValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IntervalLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INTERVAL(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.INTERVAL, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public intervalUnit(): IntervalUnitContext {
        return this.getRuleContext(0, IntervalUnitContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_intervalLiteral;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitIntervalLiteral) {
            return visitor.visitIntervalLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StringLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DQUOTA_STRING(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DQUOTA_STRING, 0);
    }
    public SQUOTA_STRING(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SQUOTA_STRING, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_stringLiteral;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitStringLiteral) {
            return visitor.visitStringLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IntegerLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INTEGER_LITERAL(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.INTEGER_LITERAL, 0)!;
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MINUS, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_integerLiteral;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitIntegerLiteral) {
            return visitor.visitIntegerLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DecimalLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DECIMAL_LITERAL(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.DECIMAL_LITERAL, 0)!;
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MINUS, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_decimalLiteral;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitDecimalLiteral) {
            return visitor.visitDecimalLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DoubleLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DOUBLE_LITERAL(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.DOUBLE_LITERAL, 0)!;
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MINUS, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_doubleLiteral;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitDoubleLiteral) {
            return visitor.visitDoubleLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FloatLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FLOAT_LITERAL(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.FLOAT_LITERAL, 0)!;
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MINUS, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_floatLiteral;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitFloatLiteral) {
            return visitor.visitFloatLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BooleanLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TRUE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TRUE, 0);
    }
    public FALSE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.FALSE, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_booleanLiteral;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitBooleanLiteral) {
            return visitor.visitBooleanLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DatetimeLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public dateLiteral(): DateLiteralContext | null {
        return this.getRuleContext(0, DateLiteralContext);
    }
    public timeLiteral(): TimeLiteralContext | null {
        return this.getRuleContext(0, TimeLiteralContext);
    }
    public timestampLiteral(): TimestampLiteralContext | null {
        return this.getRuleContext(0, TimestampLiteralContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_datetimeLiteral;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitDatetimeLiteral) {
            return visitor.visitDatetimeLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DateLiteralContext extends antlr.ParserRuleContext {
    public _date?: StringLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DATE(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.DATE, 0)!;
    }
    public stringLiteral(): StringLiteralContext {
        return this.getRuleContext(0, StringLiteralContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_dateLiteral;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitDateLiteral) {
            return visitor.visitDateLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TimeLiteralContext extends antlr.ParserRuleContext {
    public _time?: StringLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TIME(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.TIME, 0)!;
    }
    public stringLiteral(): StringLiteralContext {
        return this.getRuleContext(0, StringLiteralContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_timeLiteral;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitTimeLiteral) {
            return visitor.visitTimeLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TimestampLiteralContext extends antlr.ParserRuleContext {
    public _timestamp?: StringLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TIMESTAMP(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.TIMESTAMP, 0)!;
    }
    public stringLiteral(): StringLiteralContext {
        return this.getRuleContext(0, StringLiteralContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_timestampLiteral;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitTimestampLiteral) {
            return visitor.visitTimestampLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IntervalUnitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MICROSECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MICROSECOND, 0);
    }
    public SECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SECOND, 0);
    }
    public MINUTE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MINUTE, 0);
    }
    public HOUR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.HOUR, 0);
    }
    public DAY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DAY, 0);
    }
    public WEEK(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.WEEK, 0);
    }
    public MONTH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MONTH, 0);
    }
    public QUARTER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.QUARTER, 0);
    }
    public YEAR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.YEAR, 0);
    }
    public SECOND_MICROSECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SECOND_MICROSECOND, 0);
    }
    public MINUTE_MICROSECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MINUTE_MICROSECOND, 0);
    }
    public MINUTE_SECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MINUTE_SECOND, 0);
    }
    public HOUR_MICROSECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.HOUR_MICROSECOND, 0);
    }
    public HOUR_SECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.HOUR_SECOND, 0);
    }
    public HOUR_MINUTE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.HOUR_MINUTE, 0);
    }
    public DAY_MICROSECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DAY_MICROSECOND, 0);
    }
    public DAY_SECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DAY_SECOND, 0);
    }
    public DAY_MINUTE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DAY_MINUTE, 0);
    }
    public DAY_HOUR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DAY_HOUR, 0);
    }
    public YEAR_MONTH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.YEAR_MONTH, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_intervalUnit;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitIntervalUnit) {
            return visitor.visitIntervalUnit(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TimespanUnitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MS, 0);
    }
    public S(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.S, 0);
    }
    public M(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.M, 0);
    }
    public H(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.H, 0);
    }
    public D(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.D, 0);
    }
    public W(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.W, 0);
    }
    public Q(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.Q, 0);
    }
    public Y(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.Y, 0);
    }
    public MILLISECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MILLISECOND, 0);
    }
    public SECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SECOND, 0);
    }
    public MINUTE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MINUTE, 0);
    }
    public HOUR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.HOUR, 0);
    }
    public DAY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DAY, 0);
    }
    public WEEK(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.WEEK, 0);
    }
    public MONTH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MONTH, 0);
    }
    public QUARTER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.QUARTER, 0);
    }
    public YEAR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.YEAR, 0);
    }
    public SEC(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SEC, 0);
    }
    public SECS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SECS, 0);
    }
    public SECONDS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SECONDS, 0);
    }
    public MINS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MINS, 0);
    }
    public MINUTES(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MINUTES, 0);
    }
    public HR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.HR, 0);
    }
    public HRS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.HRS, 0);
    }
    public HOURS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.HOURS, 0);
    }
    public DAYS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DAYS, 0);
    }
    public MON(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MON, 0);
    }
    public MONTHS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MONTHS, 0);
    }
    public US(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.US, 0);
    }
    public CS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CS, 0);
    }
    public DS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DS, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_timespanUnit;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitTimespanUnit) {
            return visitor.visitTimespanUnit(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ValueListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0)!;
    }
    public literalValue(): LiteralValueContext[];
    public literalValue(i: number): LiteralValueContext | null;
    public literalValue(i?: number): LiteralValueContext[] | LiteralValueContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LiteralValueContext);
        }

        return this.getRuleContext(i, LiteralValueContext);
    }
    public RT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchPPLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_valueList;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitValueList) {
            return visitor.visitValueList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QualifiedNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_qualifiedName;
    }
    public override copyFrom(ctx: QualifiedNameContext): void {
        super.copyFrom(ctx);
    }
}
export class IdentsAsQualifiedNameContext extends QualifiedNameContext {
    public constructor(ctx: QualifiedNameContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ident(): IdentContext[];
    public ident(i: number): IdentContext | null;
    public ident(i?: number): IdentContext[] | IdentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }

        return this.getRuleContext(i, IdentContext);
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.DOT);
    	} else {
    		return this.getToken(OpenSearchPPLParser.DOT, i);
    	}
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitIdentsAsQualifiedName) {
            return visitor.visitIdentsAsQualifiedName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableQualifiedNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_tableQualifiedName;
    }
    public override copyFrom(ctx: TableQualifiedNameContext): void {
        super.copyFrom(ctx);
    }
}
export class IdentsAsTableQualifiedNameContext extends TableQualifiedNameContext {
    public constructor(ctx: TableQualifiedNameContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public tableIdent(): TableIdentContext {
        return this.getRuleContext(0, TableIdentContext)!;
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.DOT);
    	} else {
    		return this.getToken(OpenSearchPPLParser.DOT, i);
    	}
    }
    public ident(): IdentContext[];
    public ident(i: number): IdentContext | null;
    public ident(i?: number): IdentContext[] | IdentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }

        return this.getRuleContext(i, IdentContext);
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitIdentsAsTableQualifiedName) {
            return visitor.visitIdentsAsTableQualifiedName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WcQualifiedNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_wcQualifiedName;
    }
    public override copyFrom(ctx: WcQualifiedNameContext): void {
        super.copyFrom(ctx);
    }
}
export class IdentsAsWildcardQualifiedNameContext extends WcQualifiedNameContext {
    public constructor(ctx: WcQualifiedNameContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public wildcard(): WildcardContext[];
    public wildcard(i: number): WildcardContext | null;
    public wildcard(i?: number): WildcardContext[] | WildcardContext | null {
        if (i === undefined) {
            return this.getRuleContexts(WildcardContext);
        }

        return this.getRuleContext(i, WildcardContext);
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.DOT);
    	} else {
    		return this.getToken(OpenSearchPPLParser.DOT, i);
    	}
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitIdentsAsWildcardQualifiedName) {
            return visitor.visitIdentsAsWildcardQualifiedName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentifierSeqContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_identifierSeq;
    }
    public override copyFrom(ctx: IdentifierSeqContext): void {
        super.copyFrom(ctx);
    }
}
export class IdentsAsQualifiedNameSeqContext extends IdentifierSeqContext {
    public constructor(ctx: IdentifierSeqContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public qualifiedName(): QualifiedNameContext[];
    public qualifiedName(i: number): QualifiedNameContext | null;
    public qualifiedName(i?: number): QualifiedNameContext[] | QualifiedNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedNameContext);
        }

        return this.getRuleContext(i, QualifiedNameContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchPPLParser.COMMA, i);
    	}
    }
    public LT_PRTHS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0);
    }
    public RT_PRTHS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0);
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitIdentsAsQualifiedNameSeq) {
            return visitor.visitIdentsAsQualifiedNameSeq(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ID, 0);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DOT, 0);
    }
    public BACKTICK(): antlr.TerminalNode[];
    public BACKTICK(i: number): antlr.TerminalNode | null;
    public BACKTICK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.BACKTICK);
    	} else {
    		return this.getToken(OpenSearchPPLParser.BACKTICK, i);
    	}
    }
    public ident(): IdentContext | null {
        return this.getRuleContext(0, IdentContext);
    }
    public BQUOTA_STRING(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.BQUOTA_STRING, 0);
    }
    public keywordsCanBeId(): KeywordsCanBeIdContext | null {
        return this.getRuleContext(0, KeywordsCanBeIdContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_ident;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitIdent) {
            return visitor.visitIdent(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableIdentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ident(): IdentContext {
        return this.getRuleContext(0, IdentContext)!;
    }
    public CLUSTER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CLUSTER, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_tableIdent;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitTableIdent) {
            return visitor.visitTableIdent(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WildcardContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ident(): IdentContext[];
    public ident(i: number): IdentContext | null;
    public ident(i?: number): IdentContext[] | IdentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }

        return this.getRuleContext(i, IdentContext);
    }
    public MODULE(): antlr.TerminalNode[];
    public MODULE(i: number): antlr.TerminalNode | null;
    public MODULE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.MODULE);
    	} else {
    		return this.getToken(OpenSearchPPLParser.MODULE, i);
    	}
    }
    public SINGLE_QUOTE(): antlr.TerminalNode[];
    public SINGLE_QUOTE(i: number): antlr.TerminalNode | null;
    public SINGLE_QUOTE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.SINGLE_QUOTE);
    	} else {
    		return this.getToken(OpenSearchPPLParser.SINGLE_QUOTE, i);
    	}
    }
    public wildcard(): WildcardContext | null {
        return this.getRuleContext(0, WildcardContext);
    }
    public DOUBLE_QUOTE(): antlr.TerminalNode[];
    public DOUBLE_QUOTE(i: number): antlr.TerminalNode | null;
    public DOUBLE_QUOTE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.DOUBLE_QUOTE);
    	} else {
    		return this.getToken(OpenSearchPPLParser.DOUBLE_QUOTE, i);
    	}
    }
    public BACKTICK(): antlr.TerminalNode[];
    public BACKTICK(i: number): antlr.TerminalNode | null;
    public BACKTICK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchPPLParser.BACKTICK);
    	} else {
    		return this.getToken(OpenSearchPPLParser.BACKTICK, i);
    	}
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_wildcard;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitWildcard) {
            return visitor.visitWildcard(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class KeywordsCanBeIdContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public D(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.D, 0);
    }
    public timespanUnit(): TimespanUnitContext | null {
        return this.getRuleContext(0, TimespanUnitContext);
    }
    public SPAN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SPAN, 0);
    }
    public evalFunctionName(): EvalFunctionNameContext | null {
        return this.getRuleContext(0, EvalFunctionNameContext);
    }
    public jsonFunctionName(): JsonFunctionNameContext | null {
        return this.getRuleContext(0, JsonFunctionNameContext);
    }
    public relevanceArgName(): RelevanceArgNameContext | null {
        return this.getRuleContext(0, RelevanceArgNameContext);
    }
    public intervalUnit(): IntervalUnitContext | null {
        return this.getRuleContext(0, IntervalUnitContext);
    }
    public trendlineType(): TrendlineTypeContext | null {
        return this.getRuleContext(0, TrendlineTypeContext);
    }
    public singleFieldRelevanceFunctionName(): SingleFieldRelevanceFunctionNameContext | null {
        return this.getRuleContext(0, SingleFieldRelevanceFunctionNameContext);
    }
    public multiFieldRelevanceFunctionName(): MultiFieldRelevanceFunctionNameContext | null {
        return this.getRuleContext(0, MultiFieldRelevanceFunctionNameContext);
    }
    public commandName(): CommandNameContext | null {
        return this.getRuleContext(0, CommandNameContext);
    }
    public collectionFunctionName(): CollectionFunctionNameContext | null {
        return this.getRuleContext(0, CollectionFunctionNameContext);
    }
    public comparisonOperator(): ComparisonOperatorContext | null {
        return this.getRuleContext(0, ComparisonOperatorContext);
    }
    public explainMode(): ExplainModeContext | null {
        return this.getRuleContext(0, ExplainModeContext);
    }
    public CASE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CASE, 0);
    }
    public ELSE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ELSE, 0);
    }
    public IN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.IN, 0);
    }
    public ARROW(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ARROW, 0);
    }
    public BETWEEN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.BETWEEN, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.EXISTS, 0);
    }
    public SOURCE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SOURCE, 0);
    }
    public INDEX(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.INDEX, 0);
    }
    public A(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.A, 0);
    }
    public ASC(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ASC, 0);
    }
    public DESC(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DESC, 0);
    }
    public DATASOURCES(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DATASOURCES, 0);
    }
    public FROM(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.FROM, 0);
    }
    public PATTERN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PATTERN, 0);
    }
    public NEW_FIELD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.NEW_FIELD, 0);
    }
    public METHOD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.METHOD, 0);
    }
    public VARIABLE_COUNT_THRESHOLD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.VARIABLE_COUNT_THRESHOLD, 0);
    }
    public FREQUENCY_THRESHOLD_PERCENTAGE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.FREQUENCY_THRESHOLD_PERCENTAGE, 0);
    }
    public MAX_SAMPLE_COUNT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MAX_SAMPLE_COUNT, 0);
    }
    public BUFFER_LIMIT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.BUFFER_LIMIT, 0);
    }
    public WITH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.WITH, 0);
    }
    public REGEX(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.REGEX, 0);
    }
    public PUNCT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PUNCT, 0);
    }
    public USING(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.USING, 0);
    }
    public CAST(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CAST, 0);
    }
    public GET_FORMAT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.GET_FORMAT, 0);
    }
    public EXTRACT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.EXTRACT, 0);
    }
    public INTERVAL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.INTERVAL, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MINUS, 0);
    }
    public OVERRIDE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.OVERRIDE, 0);
    }
    public AUTO(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.AUTO, 0);
    }
    public STR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.STR, 0);
    }
    public IP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.IP, 0);
    }
    public NUM(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.NUM, 0);
    }
    public KEEPEMPTY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.KEEPEMPTY, 0);
    }
    public CONSECUTIVE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CONSECUTIVE, 0);
    }
    public DEDUP_SPLITVALUES(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DEDUP_SPLITVALUES, 0);
    }
    public PARTITIONS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PARTITIONS, 0);
    }
    public ALLNUM(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ALLNUM, 0);
    }
    public DELIM(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DELIM, 0);
    }
    public CENTROIDS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CENTROIDS, 0);
    }
    public ITERATIONS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ITERATIONS, 0);
    }
    public DISTANCE_TYPE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DISTANCE_TYPE, 0);
    }
    public NUMBER_OF_TREES(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.NUMBER_OF_TREES, 0);
    }
    public SHINGLE_SIZE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SHINGLE_SIZE, 0);
    }
    public SAMPLE_SIZE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SAMPLE_SIZE, 0);
    }
    public OUTPUT_AFTER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.OUTPUT_AFTER, 0);
    }
    public TIME_DECAY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TIME_DECAY, 0);
    }
    public ANOMALY_RATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ANOMALY_RATE, 0);
    }
    public CATEGORY_FIELD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CATEGORY_FIELD, 0);
    }
    public TIME_FIELD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TIME_FIELD, 0);
    }
    public TIME_ZONE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TIME_ZONE, 0);
    }
    public TRAINING_DATA_SIZE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TRAINING_DATA_SIZE, 0);
    }
    public ANOMALY_SCORE_THRESHOLD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ANOMALY_SCORE_THRESHOLD, 0);
    }
    public COUNTFIELD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.COUNTFIELD, 0);
    }
    public SHOWCOUNT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SHOWCOUNT, 0);
    }
    public PATH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PATH, 0);
    }
    public INPUT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.INPUT, 0);
    }
    public OUTPUT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.OUTPUT, 0);
    }
    public statsFunctionName(): StatsFunctionNameContext | null {
        return this.getRuleContext(0, StatsFunctionNameContext);
    }
    public windowFunctionName(): WindowFunctionNameContext | null {
        return this.getRuleContext(0, WindowFunctionNameContext);
    }
    public DISTINCT_COUNT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DISTINCT_COUNT, 0);
    }
    public DISTINCT_COUNT_APPROX(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DISTINCT_COUNT_APPROX, 0);
    }
    public ESTDC(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ESTDC, 0);
    }
    public ESTDC_ERROR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ESTDC_ERROR, 0);
    }
    public MEAN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MEAN, 0);
    }
    public MEDIAN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MEDIAN, 0);
    }
    public MODE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MODE, 0);
    }
    public RANGE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.RANGE, 0);
    }
    public STDEV(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.STDEV, 0);
    }
    public STDEVP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.STDEVP, 0);
    }
    public SUMSQ(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SUMSQ, 0);
    }
    public VAR_SAMP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.VAR_SAMP, 0);
    }
    public VAR_POP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.VAR_POP, 0);
    }
    public TAKE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.TAKE, 0);
    }
    public LIST(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LIST, 0);
    }
    public VALUES(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.VALUES, 0);
    }
    public PER_DAY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PER_DAY, 0);
    }
    public PER_HOUR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PER_HOUR, 0);
    }
    public PER_MINUTE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PER_MINUTE, 0);
    }
    public PER_SECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PER_SECOND, 0);
    }
    public RATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.RATE, 0);
    }
    public SPARKLINE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SPARKLINE, 0);
    }
    public C(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.C, 0);
    }
    public DC(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.DC, 0);
    }
    public OUTER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.OUTER, 0);
    }
    public INNER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.INNER, 0);
    }
    public CROSS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CROSS, 0);
    }
    public LEFT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LEFT, 0);
    }
    public RIGHT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.RIGHT, 0);
    }
    public FULL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.FULL, 0);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.SEMI, 0);
    }
    public ANTI(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.ANTI, 0);
    }
    public LEFT_HINT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LEFT_HINT, 0);
    }
    public RIGHT_HINT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.RIGHT_HINT, 0);
    }
    public PERCENTILE_SHORTCUT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PERCENTILE_SHORTCUT, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_keywordsCanBeId;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitKeywordsCanBeId) {
            return visitor.visitKeywordsCanBeId(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
