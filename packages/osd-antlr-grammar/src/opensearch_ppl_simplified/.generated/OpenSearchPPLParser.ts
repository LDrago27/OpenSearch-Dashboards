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
    public static readonly FIELD = 9;
    public static readonly TABLE = 10;
    public static readonly RENAME = 11;
    public static readonly STATS = 12;
    public static readonly EVENTSTATS = 13;
    public static readonly DEDUP = 14;
    public static readonly SORT = 15;
    public static readonly EVAL = 16;
    public static readonly HEAD = 17;
    public static readonly BIN = 18;
    public static readonly TOP = 19;
    public static readonly RARE = 20;
    public static readonly PARSE = 21;
    public static readonly SPATH = 22;
    public static readonly REGEX = 23;
    public static readonly REX = 24;
    public static readonly PUNCT = 25;
    public static readonly GROK = 26;
    public static readonly PATTERN = 27;
    public static readonly PATTERNS = 28;
    public static readonly NEW_FIELD = 29;
    public static readonly KMEANS = 30;
    public static readonly AD = 31;
    public static readonly ML = 32;
    public static readonly FILLNULL = 33;
    public static readonly FLATTEN = 34;
    public static readonly TRENDLINE = 35;
    public static readonly TIMECHART = 36;
    public static readonly APPENDCOL = 37;
    public static readonly EXPAND = 38;
    public static readonly SIMPLE_PATTERN = 39;
    public static readonly BRAIN = 40;
    public static readonly VARIABLE_COUNT_THRESHOLD = 41;
    public static readonly FREQUENCY_THRESHOLD_PERCENTAGE = 42;
    public static readonly METHOD = 43;
    public static readonly MAX_SAMPLE_COUNT = 44;
    public static readonly MAX_MATCH = 45;
    public static readonly BUFFER_LIMIT = 46;
    public static readonly LABEL = 47;
    public static readonly AGGREGATION = 48;
    public static readonly JOIN = 49;
    public static readonly ON = 50;
    public static readonly INNER = 51;
    public static readonly OUTER = 52;
    public static readonly FULL = 53;
    public static readonly SEMI = 54;
    public static readonly ANTI = 55;
    public static readonly CROSS = 56;
    public static readonly LEFT_HINT = 57;
    public static readonly RIGHT_HINT = 58;
    public static readonly AS = 59;
    public static readonly BY = 60;
    public static readonly SOURCE = 61;
    public static readonly INDEX = 62;
    public static readonly A = 63;
    public static readonly ASC = 64;
    public static readonly D = 65;
    public static readonly DESC = 66;
    public static readonly DATASOURCES = 67;
    public static readonly USING = 68;
    public static readonly WITH = 69;
    public static readonly SIMPLE = 70;
    public static readonly STANDARD = 71;
    public static readonly COST = 72;
    public static readonly EXTENDED = 73;
    public static readonly OVERRIDE = 74;
    public static readonly AUTO = 75;
    public static readonly STR = 76;
    public static readonly NUM = 77;
    public static readonly SMA = 78;
    public static readonly WMA = 79;
    public static readonly KEEPEMPTY = 80;
    public static readonly CONSECUTIVE = 81;
    public static readonly DEDUP_SPLITVALUES = 82;
    public static readonly PARTITIONS = 83;
    public static readonly ALLNUM = 84;
    public static readonly DELIM = 85;
    public static readonly CENTROIDS = 86;
    public static readonly ITERATIONS = 87;
    public static readonly DISTANCE_TYPE = 88;
    public static readonly NUMBER_OF_TREES = 89;
    public static readonly SHINGLE_SIZE = 90;
    public static readonly SAMPLE_SIZE = 91;
    public static readonly OUTPUT_AFTER = 92;
    public static readonly TIME_DECAY = 93;
    public static readonly ANOMALY_RATE = 94;
    public static readonly CATEGORY_FIELD = 95;
    public static readonly TIME_FIELD = 96;
    public static readonly TIME_ZONE = 97;
    public static readonly TRAINING_DATA_SIZE = 98;
    public static readonly ANOMALY_SCORE_THRESHOLD = 99;
    public static readonly APPEND = 100;
    public static readonly COUNTFIELD = 101;
    public static readonly SHOWCOUNT = 102;
    public static readonly LIMIT = 103;
    public static readonly USEOTHER = 104;
    public static readonly INPUT = 105;
    public static readonly OUTPUT = 106;
    public static readonly PATH = 107;
    public static readonly CASE = 108;
    public static readonly ELSE = 109;
    public static readonly IN = 110;
    public static readonly EXISTS = 111;
    public static readonly GEOIP = 112;
    public static readonly NOT = 113;
    public static readonly OR = 114;
    public static readonly AND = 115;
    public static readonly XOR = 116;
    public static readonly TRUE = 117;
    public static readonly FALSE = 118;
    public static readonly REGEXP = 119;
    public static readonly REGEX_MATCH = 120;
    public static readonly CONVERT_TZ = 121;
    public static readonly DATETIME = 122;
    public static readonly DAY = 123;
    public static readonly DAY_HOUR = 124;
    public static readonly DAY_MICROSECOND = 125;
    public static readonly DAY_MINUTE = 126;
    public static readonly DAY_OF_YEAR = 127;
    public static readonly DAY_SECOND = 128;
    public static readonly HOUR = 129;
    public static readonly HOUR_MICROSECOND = 130;
    public static readonly HOUR_MINUTE = 131;
    public static readonly HOUR_OF_DAY = 132;
    public static readonly HOUR_SECOND = 133;
    public static readonly INTERVAL = 134;
    public static readonly MICROSECOND = 135;
    public static readonly MILLISECOND = 136;
    public static readonly MINUTE = 137;
    public static readonly MINUTE_MICROSECOND = 138;
    public static readonly MINUTE_OF_DAY = 139;
    public static readonly MINUTE_OF_HOUR = 140;
    public static readonly MINUTE_SECOND = 141;
    public static readonly MONTH = 142;
    public static readonly MONTH_OF_YEAR = 143;
    public static readonly QUARTER = 144;
    public static readonly SECOND = 145;
    public static readonly SECOND_MICROSECOND = 146;
    public static readonly SECOND_OF_MINUTE = 147;
    public static readonly WEEK = 148;
    public static readonly WEEK_OF_YEAR = 149;
    public static readonly YEAR = 150;
    public static readonly YEAR_MONTH = 151;
    public static readonly DATAMODEL = 152;
    public static readonly LOOKUP = 153;
    public static readonly SAVEDSEARCH = 154;
    public static readonly INT = 155;
    public static readonly INTEGER = 156;
    public static readonly DOUBLE = 157;
    public static readonly LONG = 158;
    public static readonly FLOAT = 159;
    public static readonly STRING = 160;
    public static readonly BOOLEAN = 161;
    public static readonly IP = 162;
    public static readonly PIPE = 163;
    public static readonly COMMA = 164;
    public static readonly DOT = 165;
    public static readonly EQUAL = 166;
    public static readonly DOUBLE_EQUAL = 167;
    public static readonly GREATER = 168;
    public static readonly LESS = 169;
    public static readonly NOT_GREATER = 170;
    public static readonly NOT_LESS = 171;
    public static readonly NOT_EQUAL = 172;
    public static readonly PLUS = 173;
    public static readonly MINUS = 174;
    public static readonly STAR = 175;
    public static readonly DIVIDE = 176;
    public static readonly MODULE = 177;
    public static readonly EXCLAMATION_SYMBOL = 178;
    public static readonly COLON = 179;
    public static readonly LT_PRTHS = 180;
    public static readonly RT_PRTHS = 181;
    public static readonly LT_SQR_PRTHS = 182;
    public static readonly RT_SQR_PRTHS = 183;
    public static readonly LT_CURLY = 184;
    public static readonly RT_CURLY = 185;
    public static readonly SINGLE_QUOTE = 186;
    public static readonly DOUBLE_QUOTE = 187;
    public static readonly BACKTICK = 188;
    public static readonly ARROW = 189;
    public static readonly BIT_NOT_OP = 190;
    public static readonly BIT_AND_OP = 191;
    public static readonly BIT_XOR_OP = 192;
    public static readonly AVG = 193;
    public static readonly COUNT = 194;
    public static readonly DISTINCT_COUNT = 195;
    public static readonly DISTINCT_COUNT_APPROX = 196;
    public static readonly ESTDC = 197;
    public static readonly ESTDC_ERROR = 198;
    public static readonly MAX = 199;
    public static readonly MEAN = 200;
    public static readonly MEDIAN = 201;
    public static readonly MIN = 202;
    public static readonly MODE = 203;
    public static readonly RANGE = 204;
    public static readonly STDEV = 205;
    public static readonly STDEVP = 206;
    public static readonly SUM = 207;
    public static readonly SUMSQ = 208;
    public static readonly VAR_SAMP = 209;
    public static readonly VAR_POP = 210;
    public static readonly STDDEV_SAMP = 211;
    public static readonly STDDEV_POP = 212;
    public static readonly PERC = 213;
    public static readonly PERCENTILE = 214;
    public static readonly PERCENTILE_APPROX = 215;
    public static readonly EARLIEST = 216;
    public static readonly LATEST = 217;
    public static readonly TAKE = 218;
    public static readonly LIST = 219;
    public static readonly VALUES = 220;
    public static readonly PER_DAY = 221;
    public static readonly PER_HOUR = 222;
    public static readonly PER_MINUTE = 223;
    public static readonly PER_SECOND = 224;
    public static readonly RATE = 225;
    public static readonly SPARKLINE = 226;
    public static readonly C = 227;
    public static readonly DC = 228;
    public static readonly ROW_NUMBER = 229;
    public static readonly RANK = 230;
    public static readonly DENSE_RANK = 231;
    public static readonly PERCENT_RANK = 232;
    public static readonly CUME_DIST = 233;
    public static readonly FIRST = 234;
    public static readonly LAST = 235;
    public static readonly NTH = 236;
    public static readonly NTILE = 237;
    public static readonly PLUS_FUCTION = 238;
    public static readonly MINUS_FUCTION = 239;
    public static readonly STAR_FUNCTION = 240;
    public static readonly DIVIDE_FUNCTION = 241;
    public static readonly ABS = 242;
    public static readonly CBRT = 243;
    public static readonly CEIL = 244;
    public static readonly CEILING = 245;
    public static readonly CONV = 246;
    public static readonly CRC32 = 247;
    public static readonly E = 248;
    public static readonly EXP = 249;
    public static readonly EXPM1 = 250;
    public static readonly FLOOR = 251;
    public static readonly LN = 252;
    public static readonly LOG = 253;
    public static readonly LOG_WITH_BASE = 254;
    public static readonly MOD = 255;
    public static readonly MODULUS = 256;
    public static readonly PI = 257;
    public static readonly POSITION = 258;
    public static readonly POW = 259;
    public static readonly POWER = 260;
    public static readonly RAND = 261;
    public static readonly ROUND = 262;
    public static readonly SIGN = 263;
    public static readonly SQRT = 264;
    public static readonly TRUNCATE = 265;
    public static readonly RINT = 266;
    public static readonly SIGNUM = 267;
    public static readonly ACOS = 268;
    public static readonly ASIN = 269;
    public static readonly ATAN = 270;
    public static readonly ATAN2 = 271;
    public static readonly COS = 272;
    public static readonly COSH = 273;
    public static readonly COT = 274;
    public static readonly DEGREES = 275;
    public static readonly RADIANS = 276;
    public static readonly SIN = 277;
    public static readonly SINH = 278;
    public static readonly TAN = 279;
    public static readonly MD5 = 280;
    public static readonly SHA1 = 281;
    public static readonly SHA2 = 282;
    public static readonly ADDDATE = 283;
    public static readonly ADDTIME = 284;
    public static readonly CURDATE = 285;
    public static readonly CURRENT_DATE = 286;
    public static readonly CURRENT_TIME = 287;
    public static readonly CURRENT_TIMESTAMP = 288;
    public static readonly CURTIME = 289;
    public static readonly DATE = 290;
    public static readonly DATEDIFF = 291;
    public static readonly DATE_ADD = 292;
    public static readonly DATE_FORMAT = 293;
    public static readonly DATE_SUB = 294;
    public static readonly DAYNAME = 295;
    public static readonly DAYOFMONTH = 296;
    public static readonly DAYOFWEEK = 297;
    public static readonly DAYOFYEAR = 298;
    public static readonly DAY_OF_MONTH = 299;
    public static readonly DAY_OF_WEEK = 300;
    public static readonly EXTRACT = 301;
    public static readonly FROM_DAYS = 302;
    public static readonly FROM_UNIXTIME = 303;
    public static readonly GET_FORMAT = 304;
    public static readonly LAST_DAY = 305;
    public static readonly LOCALTIME = 306;
    public static readonly LOCALTIMESTAMP = 307;
    public static readonly MAKEDATE = 308;
    public static readonly MAKETIME = 309;
    public static readonly MONTHNAME = 310;
    public static readonly NOW = 311;
    public static readonly PERIOD_ADD = 312;
    public static readonly PERIOD_DIFF = 313;
    public static readonly SEC_TO_TIME = 314;
    public static readonly STR_TO_DATE = 315;
    public static readonly SUBDATE = 316;
    public static readonly SUBTIME = 317;
    public static readonly SYSDATE = 318;
    public static readonly TIME = 319;
    public static readonly TIMEDIFF = 320;
    public static readonly TIMESTAMP = 321;
    public static readonly TIMESTAMPADD = 322;
    public static readonly TIMESTAMPDIFF = 323;
    public static readonly TIME_FORMAT = 324;
    public static readonly TIME_TO_SEC = 325;
    public static readonly TO_DAYS = 326;
    public static readonly TO_SECONDS = 327;
    public static readonly UNIX_TIMESTAMP = 328;
    public static readonly UTC_DATE = 329;
    public static readonly UTC_TIME = 330;
    public static readonly UTC_TIMESTAMP = 331;
    public static readonly WEEKDAY = 332;
    public static readonly YEARWEEK = 333;
    public static readonly SUBSTR = 334;
    public static readonly SUBSTRING = 335;
    public static readonly LTRIM = 336;
    public static readonly RTRIM = 337;
    public static readonly TRIM = 338;
    public static readonly TO = 339;
    public static readonly LOWER = 340;
    public static readonly UPPER = 341;
    public static readonly CONCAT = 342;
    public static readonly CONCAT_WS = 343;
    public static readonly LENGTH = 344;
    public static readonly STRCMP = 345;
    public static readonly RIGHT = 346;
    public static readonly LEFT = 347;
    public static readonly ASCII = 348;
    public static readonly LOCATE = 349;
    public static readonly REPLACE = 350;
    public static readonly REVERSE = 351;
    public static readonly CAST = 352;
    public static readonly LIKE = 353;
    public static readonly ISNULL = 354;
    public static readonly ISNOTNULL = 355;
    public static readonly CIDRMATCH = 356;
    public static readonly BETWEEN = 357;
    public static readonly ISPRESENT = 358;
    public static readonly ISEMPTY = 359;
    public static readonly ISBLANK = 360;
    public static readonly ARRAY = 361;
    public static readonly ARRAY_LENGTH = 362;
    public static readonly FORALL = 363;
    public static readonly FILTER = 364;
    public static readonly TRANSFORM = 365;
    public static readonly REDUCE = 366;
    public static readonly JSON_VALID = 367;
    public static readonly JSON = 368;
    public static readonly JSON_OBJECT = 369;
    public static readonly JSON_ARRAY = 370;
    public static readonly JSON_ARRAY_LENGTH = 371;
    public static readonly JSON_EXTRACT = 372;
    public static readonly JSON_KEYS = 373;
    public static readonly JSON_SET = 374;
    public static readonly JSON_DELETE = 375;
    public static readonly JSON_APPEND = 376;
    public static readonly JSON_EXTEND = 377;
    public static readonly IFNULL = 378;
    public static readonly NULLIF = 379;
    public static readonly IF = 380;
    public static readonly TYPEOF = 381;
    public static readonly COALESCE = 382;
    public static readonly MATCH = 383;
    public static readonly MATCH_PHRASE = 384;
    public static readonly MATCH_PHRASE_PREFIX = 385;
    public static readonly MATCH_BOOL_PREFIX = 386;
    public static readonly SIMPLE_QUERY_STRING = 387;
    public static readonly MULTI_MATCH = 388;
    public static readonly QUERY_STRING = 389;
    public static readonly ALLOW_LEADING_WILDCARD = 390;
    public static readonly ANALYZE_WILDCARD = 391;
    public static readonly ANALYZER = 392;
    public static readonly AUTO_GENERATE_SYNONYMS_PHRASE_QUERY = 393;
    public static readonly BOOST = 394;
    public static readonly CUTOFF_FREQUENCY = 395;
    public static readonly DEFAULT_FIELD = 396;
    public static readonly DEFAULT_OPERATOR = 397;
    public static readonly ENABLE_POSITION_INCREMENTS = 398;
    public static readonly ESCAPE = 399;
    public static readonly FLAGS = 400;
    public static readonly FUZZY_MAX_EXPANSIONS = 401;
    public static readonly FUZZY_PREFIX_LENGTH = 402;
    public static readonly FUZZY_TRANSPOSITIONS = 403;
    public static readonly FUZZY_REWRITE = 404;
    public static readonly FUZZINESS = 405;
    public static readonly LENIENT = 406;
    public static readonly LOW_FREQ_OPERATOR = 407;
    public static readonly MAX_DETERMINIZED_STATES = 408;
    public static readonly MAX_EXPANSIONS = 409;
    public static readonly MINIMUM_SHOULD_MATCH = 410;
    public static readonly OPERATOR = 411;
    public static readonly PHRASE_SLOP = 412;
    public static readonly PREFIX_LENGTH = 413;
    public static readonly QUOTE_ANALYZER = 414;
    public static readonly QUOTE_FIELD_SUFFIX = 415;
    public static readonly REWRITE = 416;
    public static readonly SLOP = 417;
    public static readonly TIE_BREAKER = 418;
    public static readonly TYPE = 419;
    public static readonly ZERO_TERMS_QUERY = 420;
    public static readonly SPAN = 421;
    public static readonly BINS = 422;
    public static readonly MINSPAN = 423;
    public static readonly START = 424;
    public static readonly END = 425;
    public static readonly ALIGNTIME = 426;
    public static readonly MS = 427;
    public static readonly S = 428;
    public static readonly M = 429;
    public static readonly H = 430;
    public static readonly W = 431;
    public static readonly Q = 432;
    public static readonly Y = 433;
    public static readonly SEC = 434;
    public static readonly SECS = 435;
    public static readonly SECONDS = 436;
    public static readonly MINS = 437;
    public static readonly MINUTES = 438;
    public static readonly HR = 439;
    public static readonly HRS = 440;
    public static readonly HOURS = 441;
    public static readonly DAYS = 442;
    public static readonly MON = 443;
    public static readonly MONTHS = 444;
    public static readonly US = 445;
    public static readonly CS = 446;
    public static readonly DS = 447;
    public static readonly PERCENTILE_SHORTCUT = 448;
    public static readonly ID = 449;
    public static readonly CLUSTER = 450;
    public static readonly INTEGER_LITERAL = 451;
    public static readonly DECIMAL_LITERAL = 452;
    public static readonly FLOAT_LITERAL = 453;
    public static readonly DOUBLE_LITERAL = 454;
    public static readonly ID_DATE_SUFFIX = 455;
    public static readonly DQUOTA_STRING = 456;
    public static readonly SQUOTA_STRING = 457;
    public static readonly BQUOTA_STRING = 458;
    public static readonly LINE_COMMENT = 459;
    public static readonly BLOCK_COMMENT = 460;
    public static readonly ERROR_RECOGNITION = 461;
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
    public static readonly RULE_rexCommand = 45;
    public static readonly RULE_rexExpr = 46;
    public static readonly RULE_rexOption = 47;
    public static readonly RULE_patternsMethod = 48;
    public static readonly RULE_patternsCommand = 49;
    public static readonly RULE_patternsParameter = 50;
    public static readonly RULE_patternMethod = 51;
    public static readonly RULE_patternMode = 52;
    public static readonly RULE_lookupCommand = 53;
    public static readonly RULE_lookupMappingList = 54;
    public static readonly RULE_outputCandidateList = 55;
    public static readonly RULE_lookupPair = 56;
    public static readonly RULE_fillnullCommand = 57;
    public static readonly RULE_fillNullWith = 58;
    public static readonly RULE_fillNullUsing = 59;
    public static readonly RULE_replacementPair = 60;
    public static readonly RULE_trendlineCommand = 61;
    public static readonly RULE_trendlineClause = 62;
    public static readonly RULE_trendlineType = 63;
    public static readonly RULE_expandCommand = 64;
    public static readonly RULE_flattenCommand = 65;
    public static readonly RULE_appendcolCommand = 66;
    public static readonly RULE_appendCommand = 67;
    public static readonly RULE_kmeansCommand = 68;
    public static readonly RULE_kmeansParameter = 69;
    public static readonly RULE_adCommand = 70;
    public static readonly RULE_adParameter = 71;
    public static readonly RULE_mlCommand = 72;
    public static readonly RULE_mlArg = 73;
    public static readonly RULE_fromClause = 74;
    public static readonly RULE_tableOrSubqueryClause = 75;
    public static readonly RULE_tableSourceClause = 76;
    public static readonly RULE_dynamicSourceClause = 77;
    public static readonly RULE_sourceReferences = 78;
    public static readonly RULE_sourceReference = 79;
    public static readonly RULE_sourceFilterArgs = 80;
    public static readonly RULE_sourceFilterArg = 81;
    public static readonly RULE_joinCommand = 82;
    public static readonly RULE_joinType = 83;
    public static readonly RULE_sideAlias = 84;
    public static readonly RULE_joinCriteria = 85;
    public static readonly RULE_joinHintList = 86;
    public static readonly RULE_hintPair = 87;
    public static readonly RULE_renameClasue = 88;
    public static readonly RULE_byClause = 89;
    public static readonly RULE_statsByClause = 90;
    public static readonly RULE_bySpanClause = 91;
    public static readonly RULE_spanClause = 92;
    public static readonly RULE_sortbyClause = 93;
    public static readonly RULE_evalClause = 94;
    public static readonly RULE_eventstatsAggTerm = 95;
    public static readonly RULE_windowFunction = 96;
    public static readonly RULE_windowFunctionName = 97;
    public static readonly RULE_scalarWindowFunctionName = 98;
    public static readonly RULE_statsAggTerm = 99;
    public static readonly RULE_statsFunction = 100;
    public static readonly RULE_statsFunctionName = 101;
    public static readonly RULE_earliestLatestFunction = 102;
    public static readonly RULE_takeAggFunction = 103;
    public static readonly RULE_percentileApproxFunction = 104;
    public static readonly RULE_numericLiteral = 105;
    public static readonly RULE_logicalExpression = 106;
    public static readonly RULE_expression = 107;
    public static readonly RULE_valueExpression = 108;
    public static readonly RULE_evalExpression = 109;
    public static readonly RULE_functionCall = 110;
    public static readonly RULE_positionFunctionCall = 111;
    public static readonly RULE_caseFunctionCall = 112;
    public static readonly RULE_relevanceExpression = 113;
    public static readonly RULE_singleFieldRelevanceFunction = 114;
    public static readonly RULE_multiFieldRelevanceFunction = 115;
    public static readonly RULE_tableSource = 116;
    public static readonly RULE_tableFunction = 117;
    public static readonly RULE_fieldList = 118;
    public static readonly RULE_sortField = 119;
    public static readonly RULE_sortFieldExpression = 120;
    public static readonly RULE_fieldExpression = 121;
    public static readonly RULE_wcFieldExpression = 122;
    public static readonly RULE_selectFieldExpression = 123;
    public static readonly RULE_renameFieldExpression = 124;
    public static readonly RULE_evalFunctionCall = 125;
    public static readonly RULE_dataTypeFunctionCall = 126;
    public static readonly RULE_convertedDataType = 127;
    public static readonly RULE_evalFunctionName = 128;
    public static readonly RULE_functionArgs = 129;
    public static readonly RULE_namedFunctionArgs = 130;
    public static readonly RULE_functionArg = 131;
    public static readonly RULE_namedFunctionArg = 132;
    public static readonly RULE_functionArgExpression = 133;
    public static readonly RULE_lambda = 134;
    public static readonly RULE_relevanceArg = 135;
    public static readonly RULE_relevanceArgName = 136;
    public static readonly RULE_relevanceFieldAndWeight = 137;
    public static readonly RULE_relevanceFieldWeight = 138;
    public static readonly RULE_relevanceField = 139;
    public static readonly RULE_relevanceQuery = 140;
    public static readonly RULE_relevanceArgValue = 141;
    public static readonly RULE_mathematicalFunctionName = 142;
    public static readonly RULE_geoipFunctionName = 143;
    public static readonly RULE_collectionFunctionName = 144;
    public static readonly RULE_trigonometricFunctionName = 145;
    public static readonly RULE_jsonFunctionName = 146;
    public static readonly RULE_cryptographicFunctionName = 147;
    public static readonly RULE_dateTimeFunctionName = 148;
    public static readonly RULE_getFormatFunctionCall = 149;
    public static readonly RULE_getFormatType = 150;
    public static readonly RULE_extractFunctionCall = 151;
    public static readonly RULE_simpleDateTimePart = 152;
    public static readonly RULE_complexDateTimePart = 153;
    public static readonly RULE_datetimePart = 154;
    public static readonly RULE_timestampFunctionCall = 155;
    public static readonly RULE_timestampFunctionName = 156;
    public static readonly RULE_conditionFunctionName = 157;
    public static readonly RULE_flowControlFunctionName = 158;
    public static readonly RULE_systemFunctionName = 159;
    public static readonly RULE_textFunctionName = 160;
    public static readonly RULE_positionFunctionName = 161;
    public static readonly RULE_comparisonOperator = 162;
    public static readonly RULE_singleFieldRelevanceFunctionName = 163;
    public static readonly RULE_multiFieldRelevanceFunctionName = 164;
    public static readonly RULE_literalValue = 165;
    public static readonly RULE_intervalLiteral = 166;
    public static readonly RULE_stringLiteral = 167;
    public static readonly RULE_integerLiteral = 168;
    public static readonly RULE_decimalLiteral = 169;
    public static readonly RULE_doubleLiteral = 170;
    public static readonly RULE_floatLiteral = 171;
    public static readonly RULE_booleanLiteral = 172;
    public static readonly RULE_datetimeLiteral = 173;
    public static readonly RULE_dateLiteral = 174;
    public static readonly RULE_timeLiteral = 175;
    public static readonly RULE_timestampLiteral = 176;
    public static readonly RULE_intervalUnit = 177;
    public static readonly RULE_timespanUnit = 178;
    public static readonly RULE_valueList = 179;
    public static readonly RULE_qualifiedName = 180;
    public static readonly RULE_tableQualifiedName = 181;
    public static readonly RULE_wcQualifiedName = 182;
    public static readonly RULE_identifierSeq = 183;
    public static readonly RULE_ident = 184;
    public static readonly RULE_tableIdent = 185;
    public static readonly RULE_wildcard = 186;
    public static readonly RULE_keywordsCanBeId = 187;

    public static readonly literalNames = [
        null, null, "'SEARCH'", "'DESCRIBE'", "'SHOW'", "'EXPLAIN'", "'FROM'", 
        "'WHERE'", "'FIELDS'", "'FIELD'", "'TABLE'", "'RENAME'", "'STATS'", 
        "'EVENTSTATS'", "'DEDUP'", "'SORT'", "'EVAL'", "'HEAD'", "'BIN'", 
        "'TOP'", "'RARE'", "'PARSE'", "'SPATH'", "'REGEX'", "'REX'", "'PUNCT'", 
        "'GROK'", "'PATTERN'", "'PATTERNS'", "'NEW_FIELD'", "'KMEANS'", 
        "'AD'", "'ML'", "'FILLNULL'", "'FLATTEN'", "'TRENDLINE'", "'TIMECHART'", 
        "'APPENDCOL'", "'EXPAND'", "'SIMPLE_PATTERN'", "'BRAIN'", "'VARIABLE_COUNT_THRESHOLD'", 
        "'FREQUENCY_THRESHOLD_PERCENTAGE'", "'METHOD'", "'MAX_SAMPLE_COUNT'", 
        "'MAX_MATCH'", "'BUFFER_LIMIT'", "'LABEL'", "'AGGREGATION'", "'JOIN'", 
        "'ON'", "'INNER'", "'OUTER'", "'FULL'", "'SEMI'", "'ANTI'", "'CROSS'", 
        "'HINT.LEFT'", "'HINT.RIGHT'", "'AS'", "'BY'", "'SOURCE'", "'INDEX'", 
        "'A'", "'ASC'", "'D'", "'DESC'", "'DATASOURCES'", "'USING'", "'WITH'", 
        "'SIMPLE'", "'STANDARD'", "'COST'", "'EXTENDED'", "'OVERRIDE'", 
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
        "WHERE", "FIELDS", "FIELD", "TABLE", "RENAME", "STATS", "EVENTSTATS", 
        "DEDUP", "SORT", "EVAL", "HEAD", "BIN", "TOP", "RARE", "PARSE", 
        "SPATH", "REGEX", "REX", "PUNCT", "GROK", "PATTERN", "PATTERNS", 
        "NEW_FIELD", "KMEANS", "AD", "ML", "FILLNULL", "FLATTEN", "TRENDLINE", 
        "TIMECHART", "APPENDCOL", "EXPAND", "SIMPLE_PATTERN", "BRAIN", "VARIABLE_COUNT_THRESHOLD", 
        "FREQUENCY_THRESHOLD_PERCENTAGE", "METHOD", "MAX_SAMPLE_COUNT", 
        "MAX_MATCH", "BUFFER_LIMIT", "LABEL", "AGGREGATION", "JOIN", "ON", 
        "INNER", "OUTER", "FULL", "SEMI", "ANTI", "CROSS", "LEFT_HINT", 
        "RIGHT_HINT", "AS", "BY", "SOURCE", "INDEX", "A", "ASC", "D", "DESC", 
        "DATASOURCES", "USING", "WITH", "SIMPLE", "STANDARD", "COST", "EXTENDED", 
        "OVERRIDE", "AUTO", "STR", "NUM", "SMA", "WMA", "KEEPEMPTY", "CONSECUTIVE", 
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
        "regexExpr", "rexCommand", "rexExpr", "rexOption", "patternsMethod", 
        "patternsCommand", "patternsParameter", "patternMethod", "patternMode", 
        "lookupCommand", "lookupMappingList", "outputCandidateList", "lookupPair", 
        "fillnullCommand", "fillNullWith", "fillNullUsing", "replacementPair", 
        "trendlineCommand", "trendlineClause", "trendlineType", "expandCommand", 
        "flattenCommand", "appendcolCommand", "appendCommand", "kmeansCommand", 
        "kmeansParameter", "adCommand", "adParameter", "mlCommand", "mlArg", 
        "fromClause", "tableOrSubqueryClause", "tableSourceClause", "dynamicSourceClause", 
        "sourceReferences", "sourceReference", "sourceFilterArgs", "sourceFilterArg", 
        "joinCommand", "joinType", "sideAlias", "joinCriteria", "joinHintList", 
        "hintPair", "renameClasue", "byClause", "statsByClause", "bySpanClause", 
        "spanClause", "sortbyClause", "evalClause", "eventstatsAggTerm", 
        "windowFunction", "windowFunctionName", "scalarWindowFunctionName", 
        "statsAggTerm", "statsFunction", "statsFunctionName", "earliestLatestFunction", 
        "takeAggFunction", "percentileApproxFunction", "numericLiteral", 
        "logicalExpression", "expression", "valueExpression", "evalExpression", 
        "functionCall", "positionFunctionCall", "caseFunctionCall", "relevanceExpression", 
        "singleFieldRelevanceFunction", "multiFieldRelevanceFunction", "tableSource", 
        "tableFunction", "fieldList", "sortField", "sortFieldExpression", 
        "fieldExpression", "wcFieldExpression", "selectFieldExpression", 
        "renameFieldExpression", "evalFunctionCall", "dataTypeFunctionCall", 
        "convertedDataType", "evalFunctionName", "functionArgs", "namedFunctionArgs", 
        "functionArg", "namedFunctionArg", "functionArgExpression", "lambda", 
        "relevanceArg", "relevanceArgName", "relevanceFieldAndWeight", "relevanceFieldWeight", 
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
            this.state = 377;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4290772476) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3891945055) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4293131903) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 50331647) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 2350129145) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 4294443007) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 4294967295) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 4294967295) !== 0) || ((((_la - 290)) & ~0x1F) === 0 && ((1 << (_la - 290)) & 4294967295) !== 0) || ((((_la - 322)) & ~0x1F) === 0 && ((1 << (_la - 322)) & 4294836223) !== 0) || ((((_la - 354)) & ~0x1F) === 0 && ((1 << (_la - 354)) & 4294967295) !== 0) || ((((_la - 386)) & ~0x1F) === 0 && ((1 << (_la - 386)) & 4294967295) !== 0) || ((((_la - 418)) & ~0x1F) === 0 && ((1 << (_la - 418)) & 4294966799) !== 0) || ((((_la - 451)) & ~0x1F) === 0 && ((1 << (_la - 451)) & 239) !== 0)) {
                {
                this.state = 376;
                this.pplStatement();
                }
            }

            this.state = 379;
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
            this.state = 383;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 381;
                this.explainStatement();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 382;
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
            this.state = 385;
            this.pplCommands();
            this.state = 390;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 163) {
                {
                {
                this.state = 386;
                this.match(OpenSearchPPLParser.PIPE);
                this.state = 387;
                this.commands();
                }
                }
                this.state = 392;
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
            this.state = 393;
            this.match(OpenSearchPPLParser.EXPLAIN);
            this.state = 395;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context) ) {
            case 1:
                {
                this.state = 394;
                this.explainMode();
                }
                break;
            }
            this.state = 397;
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
            this.state = 399;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 15) !== 0))) {
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
            this.state = 401;
            this.searchCommand();
            this.state = 406;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 163) {
                {
                {
                this.state = 402;
                this.match(OpenSearchPPLParser.PIPE);
                this.state = 403;
                this.commands();
                }
                }
                this.state = 408;
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
            this.state = 412;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 409;
                this.describeCommand();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 410;
                this.showDataSourcesCommand();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 411;
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
            this.state = 446;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.WHERE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 414;
                this.whereCommand();
                }
                break;
            case OpenSearchPPLParser.FIELDS:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 415;
                this.fieldsCommand();
                }
                break;
            case OpenSearchPPLParser.TABLE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 416;
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
                this.state = 417;
                this.joinCommand();
                }
                break;
            case OpenSearchPPLParser.RENAME:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 418;
                this.renameCommand();
                }
                break;
            case OpenSearchPPLParser.STATS:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 419;
                this.statsCommand();
                }
                break;
            case OpenSearchPPLParser.EVENTSTATS:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 420;
                this.eventstatsCommand();
                }
                break;
            case OpenSearchPPLParser.DEDUP:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 421;
                this.dedupCommand();
                }
                break;
            case OpenSearchPPLParser.SORT:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 422;
                this.sortCommand();
                }
                break;
            case OpenSearchPPLParser.EVAL:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 423;
                this.evalCommand();
                }
                break;
            case OpenSearchPPLParser.HEAD:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 424;
                this.headCommand();
                }
                break;
            case OpenSearchPPLParser.BIN:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 425;
                this.binCommand();
                }
                break;
            case OpenSearchPPLParser.TOP:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 426;
                this.topCommand();
                }
                break;
            case OpenSearchPPLParser.RARE:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 427;
                this.rareCommand();
                }
                break;
            case OpenSearchPPLParser.GROK:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 428;
                this.grokCommand();
                }
                break;
            case OpenSearchPPLParser.PARSE:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 429;
                this.parseCommand();
                }
                break;
            case OpenSearchPPLParser.SPATH:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 430;
                this.spathCommand();
                }
                break;
            case OpenSearchPPLParser.PATTERNS:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 431;
                this.patternsCommand();
                }
                break;
            case OpenSearchPPLParser.LOOKUP:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 432;
                this.lookupCommand();
                }
                break;
            case OpenSearchPPLParser.KMEANS:
                this.enterOuterAlt(localContext, 20);
                {
                this.state = 433;
                this.kmeansCommand();
                }
                break;
            case OpenSearchPPLParser.AD:
                this.enterOuterAlt(localContext, 21);
                {
                this.state = 434;
                this.adCommand();
                }
                break;
            case OpenSearchPPLParser.ML:
                this.enterOuterAlt(localContext, 22);
                {
                this.state = 435;
                this.mlCommand();
                }
                break;
            case OpenSearchPPLParser.FILLNULL:
                this.enterOuterAlt(localContext, 23);
                {
                this.state = 436;
                this.fillnullCommand();
                }
                break;
            case OpenSearchPPLParser.TRENDLINE:
                this.enterOuterAlt(localContext, 24);
                {
                this.state = 437;
                this.trendlineCommand();
                }
                break;
            case OpenSearchPPLParser.APPENDCOL:
                this.enterOuterAlt(localContext, 25);
                {
                this.state = 438;
                this.appendcolCommand();
                }
                break;
            case OpenSearchPPLParser.APPEND:
                this.enterOuterAlt(localContext, 26);
                {
                this.state = 439;
                this.appendCommand();
                }
                break;
            case OpenSearchPPLParser.EXPAND:
                this.enterOuterAlt(localContext, 27);
                {
                this.state = 440;
                this.expandCommand();
                }
                break;
            case OpenSearchPPLParser.FLATTEN:
                this.enterOuterAlt(localContext, 28);
                {
                this.state = 441;
                this.flattenCommand();
                }
                break;
            case OpenSearchPPLParser.REVERSE:
                this.enterOuterAlt(localContext, 29);
                {
                this.state = 442;
                this.reverseCommand();
                }
                break;
            case OpenSearchPPLParser.REGEX:
                this.enterOuterAlt(localContext, 30);
                {
                this.state = 443;
                this.regexCommand();
                }
                break;
            case OpenSearchPPLParser.TIMECHART:
                this.enterOuterAlt(localContext, 31);
                {
                this.state = 444;
                this.timechartCommand();
                }
                break;
            case OpenSearchPPLParser.REX:
                this.enterOuterAlt(localContext, 32);
                {
                this.state = 445;
                this.rexCommand();
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
            this.state = 448;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 3586129340) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 131167) !== 0) || _la === 100 || _la === 153 || _la === 351)) {
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
            this.state = 451;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
            case 1:
                {
                this.state = 450;
                this.match(OpenSearchPPLParser.SEARCH);
                }
                break;
            }
            this.state = 456;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 453;
                    this.logicalExpression(0);
                    }
                    }
                }
                this.state = 458;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            }
            this.state = 459;
            this.fromClause();
            this.state = 463;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4290772476) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3891945055) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4293131903) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 50331647) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 2350129145) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 4294443007) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 4294967295) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 4294967295) !== 0) || ((((_la - 290)) & ~0x1F) === 0 && ((1 << (_la - 290)) & 4294967295) !== 0) || ((((_la - 322)) & ~0x1F) === 0 && ((1 << (_la - 322)) & 4294836223) !== 0) || ((((_la - 354)) & ~0x1F) === 0 && ((1 << (_la - 354)) & 4294967295) !== 0) || ((((_la - 386)) & ~0x1F) === 0 && ((1 << (_la - 386)) & 4294967295) !== 0) || ((((_la - 418)) & ~0x1F) === 0 && ((1 << (_la - 418)) & 4294966799) !== 0) || ((((_la - 451)) & ~0x1F) === 0 && ((1 << (_la - 451)) & 239) !== 0)) {
                {
                {
                this.state = 460;
                this.logicalExpression(0);
                }
                }
                this.state = 465;
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
            this.state = 466;
            this.match(OpenSearchPPLParser.DESCRIBE);
            this.state = 467;
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
            this.state = 469;
            this.match(OpenSearchPPLParser.SHOW);
            this.state = 470;
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
            this.state = 472;
            this.match(OpenSearchPPLParser.WHERE);
            this.state = 473;
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
            this.state = 475;
            this.match(OpenSearchPPLParser.FIELDS);
            this.state = 476;
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
            this.state = 478;
            this.match(OpenSearchPPLParser.TABLE);
            this.state = 479;
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
            this.state = 482;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 10, this.context) ) {
            case 1:
                {
                this.state = 481;
                _la = this.tokenStream.LA(1);
                if(!(_la === 173 || _la === 174)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            }
            this.state = 484;
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
            this.state = 486;
            this.selectFieldExpression();
            this.state = 493;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4290772476) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3891945055) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4286709375) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 50331647) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 2399158269) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 4294443007) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 4294967295) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 4294967295) !== 0) || ((((_la - 290)) & ~0x1F) === 0 && ((1 << (_la - 290)) & 4294967295) !== 0) || ((((_la - 324)) & ~0x1F) === 0 && ((1 << (_la - 324)) & 4294934527) !== 0) || ((((_la - 356)) & ~0x1F) === 0 && ((1 << (_la - 356)) & 4294967295) !== 0) || ((((_la - 388)) & ~0x1F) === 0 && ((1 << (_la - 388)) & 4294967295) !== 0) || ((((_la - 420)) & ~0x1F) === 0 && ((1 << (_la - 420)) & 1073741699) !== 0) || _la === 458) {
                {
                {
                this.state = 488;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 164) {
                    {
                    this.state = 487;
                    this.match(OpenSearchPPLParser.COMMA);
                    }
                }

                this.state = 490;
                this.selectFieldExpression();
                }
                }
                this.state = 495;
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
            this.state = 496;
            this.match(OpenSearchPPLParser.RENAME);
            this.state = 497;
            this.renameClasue();
            this.state = 504;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4290772476) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3891945055) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4286709375) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 50331647) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 2399158269) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 4294443007) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 4294967295) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 4294967295) !== 0) || ((((_la - 290)) & ~0x1F) === 0 && ((1 << (_la - 290)) & 4294967295) !== 0) || ((((_la - 324)) & ~0x1F) === 0 && ((1 << (_la - 324)) & 4294934527) !== 0) || ((((_la - 356)) & ~0x1F) === 0 && ((1 << (_la - 356)) & 4294967295) !== 0) || ((((_la - 388)) & ~0x1F) === 0 && ((1 << (_la - 388)) & 4294967295) !== 0) || ((((_la - 420)) & ~0x1F) === 0 && ((1 << (_la - 420)) & 1073741699) !== 0) || _la === 458) {
                {
                {
                this.state = 499;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 164) {
                    {
                    this.state = 498;
                    this.match(OpenSearchPPLParser.COMMA);
                    }
                }

                this.state = 501;
                this.renameClasue();
                }
                }
                this.state = 506;
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
            this.state = 507;
            this.match(OpenSearchPPLParser.STATS);
            this.state = 511;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 83) {
                {
                this.state = 508;
                this.match(OpenSearchPPLParser.PARTITIONS);
                this.state = 509;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 510;
                localContext._partitions = this.integerLiteral();
                }
            }

            this.state = 516;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 84) {
                {
                this.state = 513;
                this.match(OpenSearchPPLParser.ALLNUM);
                this.state = 514;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 515;
                localContext._allnum = this.booleanLiteral();
                }
            }

            this.state = 521;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 85) {
                {
                this.state = 518;
                this.match(OpenSearchPPLParser.DELIM);
                this.state = 519;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 520;
                localContext._delim = this.stringLiteral();
                }
            }

            this.state = 523;
            this.statsAggTerm();
            this.state = 528;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 164) {
                {
                {
                this.state = 524;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 525;
                this.statsAggTerm();
                }
                }
                this.state = 530;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 532;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 60) {
                {
                this.state = 531;
                this.statsByClause();
                }
            }

            this.state = 537;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 82) {
                {
                this.state = 534;
                this.match(OpenSearchPPLParser.DEDUP_SPLITVALUES);
                this.state = 535;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 536;
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
            this.state = 539;
            this.match(OpenSearchPPLParser.EVENTSTATS);
            this.state = 540;
            this.eventstatsAggTerm();
            this.state = 545;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 164) {
                {
                {
                this.state = 541;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 542;
                this.eventstatsAggTerm();
                }
                }
                this.state = 547;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 549;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 60) {
                {
                this.state = 548;
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
            this.state = 551;
            this.match(OpenSearchPPLParser.DEDUP);
            this.state = 553;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 23, this.context) ) {
            case 1:
                {
                this.state = 552;
                localContext._number_ = this.integerLiteral();
                }
                break;
            }
            this.state = 555;
            this.fieldList();
            this.state = 559;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 80) {
                {
                this.state = 556;
                this.match(OpenSearchPPLParser.KEEPEMPTY);
                this.state = 557;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 558;
                localContext._keepempty = this.booleanLiteral();
                }
            }

            this.state = 564;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 81) {
                {
                this.state = 561;
                this.match(OpenSearchPPLParser.CONSECUTIVE);
                this.state = 562;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 563;
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
            this.state = 566;
            this.match(OpenSearchPPLParser.SORT);
            this.state = 568;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context) ) {
            case 1:
                {
                this.state = 567;
                localContext._count = this.integerLiteral();
                }
                break;
            }
            this.state = 570;
            this.sortbyClause();
            this.state = 572;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & 15) !== 0)) {
                {
                this.state = 571;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & 15) !== 0))) {
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
            this.state = 574;
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
            this.state = 576;
            this.match(OpenSearchPPLParser.TIMECHART);
            this.state = 580;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 103 || _la === 104 || _la === 421) {
                {
                {
                this.state = 577;
                this.timechartParameter();
                }
                }
                this.state = 582;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 583;
            this.statsFunction();
            this.state = 586;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 60) {
                {
                this.state = 584;
                this.match(OpenSearchPPLParser.BY);
                this.state = 585;
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
            this.state = 595;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.SPAN:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 592;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 30, this.context) ) {
                case 1:
                    {
                    this.state = 588;
                    this.spanClause();
                    }
                    break;
                case 2:
                    {
                    this.state = 589;
                    this.match(OpenSearchPPLParser.SPAN);
                    this.state = 590;
                    this.match(OpenSearchPPLParser.EQUAL);
                    this.state = 591;
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
                this.state = 594;
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
            this.state = 606;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.LIMIT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 597;
                this.match(OpenSearchPPLParser.LIMIT);
                this.state = 598;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 599;
                this.integerLiteral();
                }
                break;
            case OpenSearchPPLParser.USEOTHER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 600;
                this.match(OpenSearchPPLParser.USEOTHER);
                this.state = 601;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 604;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case OpenSearchPPLParser.TRUE:
                case OpenSearchPPLParser.FALSE:
                    {
                    this.state = 602;
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
                case OpenSearchPPLParser.REX:
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
                    this.state = 603;
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
            this.state = 612;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.PLUS:
            case OpenSearchPPLParser.MINUS:
            case OpenSearchPPLParser.INTEGER_LITERAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 608;
                this.integerLiteral();
                this.state = 609;
                this.timespanUnit();
                }
                break;
            case OpenSearchPPLParser.DQUOTA_STRING:
            case OpenSearchPPLParser.SQUOTA_STRING:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 611;
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
            this.state = 614;
            this.match(OpenSearchPPLParser.EVAL);
            this.state = 615;
            this.evalClause();
            this.state = 620;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 164) {
                {
                {
                this.state = 616;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 617;
                this.evalClause();
                }
                }
                this.state = 622;
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
            this.state = 623;
            this.match(OpenSearchPPLParser.HEAD);
            this.state = 625;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 173 || _la === 174 || _la === 451) {
                {
                this.state = 624;
                localContext._number_ = this.integerLiteral();
                }
            }

            this.state = 629;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 627;
                this.match(OpenSearchPPLParser.FROM);
                this.state = 628;
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
            this.state = 631;
            this.match(OpenSearchPPLParser.BIN);
            this.state = 632;
            this.fieldExpression();
            this.state = 636;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 421)) & ~0x1F) === 0 && ((1 << (_la - 421)) & 63) !== 0)) {
                {
                {
                this.state = 633;
                this.binOption();
                }
                }
                this.state = 638;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 641;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 59) {
                {
                this.state = 639;
                this.match(OpenSearchPPLParser.AS);
                this.state = 640;
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
            this.state = 664;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.SPAN:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 643;
                this.match(OpenSearchPPLParser.SPAN);
                this.state = 644;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 645;
                localContext._span = this.spanValue();
                }
                break;
            case OpenSearchPPLParser.BINS:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 646;
                this.match(OpenSearchPPLParser.BINS);
                this.state = 647;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 648;
                localContext._bins = this.integerLiteral();
                }
                break;
            case OpenSearchPPLParser.MINSPAN:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 649;
                this.match(OpenSearchPPLParser.MINSPAN);
                this.state = 650;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 651;
                localContext._minspan = this.literalValue();
                this.state = 653;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 65 || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 174612545) !== 0) || ((((_la - 427)) & ~0x1F) === 0 && ((1 << (_la - 427)) & 2097151) !== 0)) {
                    {
                    this.state = 652;
                    localContext._minspanUnit = this.timespanUnit();
                    }
                }

                }
                break;
            case OpenSearchPPLParser.ALIGNTIME:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 655;
                this.match(OpenSearchPPLParser.ALIGNTIME);
                this.state = 656;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 657;
                localContext._aligntime = this.aligntimeValue();
                }
                break;
            case OpenSearchPPLParser.START:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 658;
                this.match(OpenSearchPPLParser.START);
                this.state = 659;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 660;
                localContext._start = this.numericLiteral();
                }
                break;
            case OpenSearchPPLParser.END:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 661;
                this.match(OpenSearchPPLParser.END);
                this.state = 662;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 663;
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
            this.state = 669;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.EARLIEST:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 666;
                this.match(OpenSearchPPLParser.EARLIEST);
                }
                break;
            case OpenSearchPPLParser.LATEST:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 667;
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
                this.state = 668;
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
            this.state = 680;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 44, this.context) ) {
            case 1:
                localContext = new NumericSpanValueContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 671;
                this.literalValue();
                this.state = 673;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 65 || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 174612545) !== 0) || ((((_la - 427)) & ~0x1F) === 0 && ((1 << (_la - 427)) & 2097151) !== 0)) {
                    {
                    this.state = 672;
                    this.timespanUnit();
                    }
                }

                }
                break;
            case 2:
                localContext = new LogBasedSpanValueContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 675;
                this.logSpanValue();
                }
                break;
            case 3:
                localContext = new ExtendedTimeSpanValueContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 676;
                this.ident();
                this.state = 677;
                this.timespanUnit();
                }
                break;
            case 4:
                localContext = new IdentifierSpanValueContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 679;
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
            this.state = 682;
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
            this.state = 684;
            this.match(OpenSearchPPLParser.TOP);
            this.state = 686;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 45, this.context) ) {
            case 1:
                {
                this.state = 685;
                localContext._number_ = this.integerLiteral();
                }
                break;
            }
            this.state = 691;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 46, this.context) ) {
            case 1:
                {
                this.state = 688;
                this.match(OpenSearchPPLParser.COUNTFIELD);
                this.state = 689;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 690;
                localContext._countfield = this.stringLiteral();
                }
                break;
            }
            this.state = 696;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 47, this.context) ) {
            case 1:
                {
                this.state = 693;
                this.match(OpenSearchPPLParser.SHOWCOUNT);
                this.state = 694;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 695;
                localContext._showcount = this.booleanLiteral();
                }
                break;
            }
            this.state = 698;
            this.fieldList();
            this.state = 700;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 60) {
                {
                this.state = 699;
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
            this.state = 702;
            this.match(OpenSearchPPLParser.RARE);
            this.state = 704;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 49, this.context) ) {
            case 1:
                {
                this.state = 703;
                localContext._number_ = this.integerLiteral();
                }
                break;
            }
            this.state = 709;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 50, this.context) ) {
            case 1:
                {
                this.state = 706;
                this.match(OpenSearchPPLParser.COUNTFIELD);
                this.state = 707;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 708;
                localContext._countfield = this.stringLiteral();
                }
                break;
            }
            this.state = 714;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 51, this.context) ) {
            case 1:
                {
                this.state = 711;
                this.match(OpenSearchPPLParser.SHOWCOUNT);
                this.state = 712;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 713;
                localContext._showcount = this.booleanLiteral();
                }
                break;
            }
            this.state = 716;
            this.fieldList();
            this.state = 718;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 60) {
                {
                this.state = 717;
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
            this.state = 720;
            this.match(OpenSearchPPLParser.GROK);
            {
            this.state = 721;
            localContext._source_field = this.expression(0);
            }
            {
            this.state = 722;
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
            this.state = 724;
            this.match(OpenSearchPPLParser.PARSE);
            {
            this.state = 725;
            localContext._source_field = this.expression(0);
            }
            {
            this.state = 726;
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
            this.state = 728;
            this.match(OpenSearchPPLParser.SPATH);
            this.state = 732;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4290772476) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3891945055) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4286709375) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 50331647) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 2348818425) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 4294443007) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 4294967295) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 4294967295) !== 0) || ((((_la - 290)) & ~0x1F) === 0 && ((1 << (_la - 290)) & 4294967295) !== 0) || ((((_la - 324)) & ~0x1F) === 0 && ((1 << (_la - 324)) & 4294934527) !== 0) || ((((_la - 356)) & ~0x1F) === 0 && ((1 << (_la - 356)) & 4294967295) !== 0) || ((((_la - 388)) & ~0x1F) === 0 && ((1 << (_la - 388)) & 4294967295) !== 0) || ((((_la - 420)) & ~0x1F) === 0 && ((1 << (_la - 420)) & 1073741699) !== 0) || _la === 458) {
                {
                {
                this.state = 729;
                this.spathParameter();
                }
                }
                this.state = 734;
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
            this.state = 746;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 55, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 735;
                this.match(OpenSearchPPLParser.INPUT);
                this.state = 736;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 737;
                localContext._input = this.expression(0);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                {
                this.state = 738;
                this.match(OpenSearchPPLParser.OUTPUT);
                this.state = 739;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 740;
                localContext._output = this.expression(0);
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                {
                this.state = 743;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 54, this.context) ) {
                case 1:
                    {
                    this.state = 741;
                    this.match(OpenSearchPPLParser.PATH);
                    this.state = 742;
                    this.match(OpenSearchPPLParser.EQUAL);
                    }
                    break;
                }
                this.state = 745;
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
            this.state = 748;
            this.pathElement();
            this.state = 753;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 56, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 749;
                    this.match(OpenSearchPPLParser.DOT);
                    this.state = 750;
                    this.pathElement();
                    }
                    }
                }
                this.state = 755;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 56, this.context);
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
            this.state = 756;
            this.ident();
            this.state = 758;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 184) {
                {
                this.state = 757;
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
            this.state = 760;
            this.match(OpenSearchPPLParser.LT_CURLY);
            this.state = 762;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 451) {
                {
                this.state = 761;
                this.match(OpenSearchPPLParser.INTEGER_LITERAL);
                }
            }

            this.state = 764;
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
            this.state = 766;
            this.match(OpenSearchPPLParser.REGEX);
            this.state = 767;
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
            this.state = 769;
            localContext._field = this.qualifiedName();
            this.state = 770;
            localContext._operator = this.tokenStream.LT(1);
            _la = this.tokenStream.LA(1);
            if(!(_la === 166 || _la === 172)) {
                localContext._operator = this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 771;
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
    public rexCommand(): RexCommandContext {
        let localContext = new RexCommandContext(this.context, this.state);
        this.enterRule(localContext, 90, OpenSearchPPLParser.RULE_rexCommand);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 773;
            this.match(OpenSearchPPLParser.REX);
            this.state = 774;
            this.rexExpr();
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
    public rexExpr(): RexExprContext {
        let localContext = new RexExprContext(this.context, this.state);
        this.enterRule(localContext, 92, OpenSearchPPLParser.RULE_rexExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 776;
            this.match(OpenSearchPPLParser.FIELD);
            this.state = 777;
            this.match(OpenSearchPPLParser.EQUAL);
            this.state = 778;
            localContext._field = this.qualifiedName();
            this.state = 782;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 45 || _la === 203) {
                {
                {
                this.state = 779;
                this.rexOption();
                }
                }
                this.state = 784;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 785;
            localContext._pattern = this.stringLiteral();
            this.state = 789;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 45 || _la === 203) {
                {
                {
                this.state = 786;
                this.rexOption();
                }
                }
                this.state = 791;
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
    public rexOption(): RexOptionContext {
        let localContext = new RexOptionContext(this.context, this.state);
        this.enterRule(localContext, 94, OpenSearchPPLParser.RULE_rexOption);
        try {
            this.state = 798;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.MAX_MATCH:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 792;
                this.match(OpenSearchPPLParser.MAX_MATCH);
                this.state = 793;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 794;
                localContext._maxMatch = this.integerLiteral();
                }
                break;
            case OpenSearchPPLParser.MODE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 795;
                this.match(OpenSearchPPLParser.MODE);
                this.state = 796;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 797;
                this.match(OpenSearchPPLParser.EXTRACT);
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
    public patternsMethod(): PatternsMethodContext {
        let localContext = new PatternsMethodContext(this.context, this.state);
        this.enterRule(localContext, 96, OpenSearchPPLParser.RULE_patternsMethod);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 800;
            _la = this.tokenStream.LA(1);
            if(!(_la === 23 || _la === 25)) {
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
        this.enterRule(localContext, 98, OpenSearchPPLParser.RULE_patternsCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 802;
            this.match(OpenSearchPPLParser.PATTERNS);
            {
            this.state = 803;
            localContext._source_field = this.expression(0);
            }
            this.state = 805;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 60) {
                {
                this.state = 804;
                this.statsByClause();
                }
            }

            this.state = 810;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 43) {
                {
                this.state = 807;
                this.match(OpenSearchPPLParser.METHOD);
                this.state = 808;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 809;
                localContext._method = this.patternMethod();
                }
            }

            this.state = 815;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 203) {
                {
                this.state = 812;
                this.match(OpenSearchPPLParser.MODE);
                this.state = 813;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 814;
                localContext._pattern_mode = this.patternMode();
                }
            }

            this.state = 820;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 44) {
                {
                this.state = 817;
                this.match(OpenSearchPPLParser.MAX_SAMPLE_COUNT);
                this.state = 818;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 819;
                localContext._max_sample_count = this.integerLiteral();
                }
            }

            this.state = 825;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 46) {
                {
                this.state = 822;
                this.match(OpenSearchPPLParser.BUFFER_LIMIT);
                this.state = 823;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 824;
                localContext._buffer_limit = this.integerLiteral();
                }
            }

            this.state = 830;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 29) {
                {
                this.state = 827;
                this.match(OpenSearchPPLParser.NEW_FIELD);
                this.state = 828;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 829;
                localContext._new_field = this.stringLiteral();
                }
            }

            this.state = 835;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 49153) !== 0)) {
                {
                {
                this.state = 832;
                this.patternsParameter();
                }
                }
                this.state = 837;
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
        this.enterRule(localContext, 100, OpenSearchPPLParser.RULE_patternsParameter);
        try {
            this.state = 847;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.PATTERN:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 838;
                this.match(OpenSearchPPLParser.PATTERN);
                this.state = 839;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 840;
                localContext._pattern = this.stringLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.VARIABLE_COUNT_THRESHOLD:
                this.enterOuterAlt(localContext, 2);
                {
                {
                this.state = 841;
                this.match(OpenSearchPPLParser.VARIABLE_COUNT_THRESHOLD);
                this.state = 842;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 843;
                localContext._variable_count_threshold = this.integerLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.FREQUENCY_THRESHOLD_PERCENTAGE:
                this.enterOuterAlt(localContext, 3);
                {
                {
                this.state = 844;
                this.match(OpenSearchPPLParser.FREQUENCY_THRESHOLD_PERCENTAGE);
                this.state = 845;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 846;
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
        this.enterRule(localContext, 102, OpenSearchPPLParser.RULE_patternMethod);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 849;
            _la = this.tokenStream.LA(1);
            if(!(_la === 39 || _la === 40)) {
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
        this.enterRule(localContext, 104, OpenSearchPPLParser.RULE_patternMode);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 851;
            _la = this.tokenStream.LA(1);
            if(!(_la === 47 || _la === 48)) {
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
        this.enterRule(localContext, 106, OpenSearchPPLParser.RULE_lookupCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 853;
            this.match(OpenSearchPPLParser.LOOKUP);
            this.state = 854;
            this.tableSource();
            this.state = 855;
            this.lookupMappingList();
            this.state = 858;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 100 || _la === 350) {
                {
                this.state = 856;
                _la = this.tokenStream.LA(1);
                if(!(_la === 100 || _la === 350)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 857;
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
        this.enterRule(localContext, 108, OpenSearchPPLParser.RULE_lookupMappingList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 860;
            this.lookupPair();
            this.state = 865;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 164) {
                {
                {
                this.state = 861;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 862;
                this.lookupPair();
                }
                }
                this.state = 867;
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
        this.enterRule(localContext, 110, OpenSearchPPLParser.RULE_outputCandidateList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 868;
            this.lookupPair();
            this.state = 873;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 164) {
                {
                {
                this.state = 869;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 870;
                this.lookupPair();
                }
                }
                this.state = 875;
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
        this.enterRule(localContext, 112, OpenSearchPPLParser.RULE_lookupPair);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 876;
            localContext._inputField = this.fieldExpression();
            this.state = 879;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 59) {
                {
                this.state = 877;
                this.match(OpenSearchPPLParser.AS);
                this.state = 878;
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
        this.enterRule(localContext, 114, OpenSearchPPLParser.RULE_fillnullCommand);
        try {
            this.state = 885;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 74, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 881;
                this.match(OpenSearchPPLParser.FILLNULL);
                this.state = 882;
                this.fillNullWith();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 883;
                this.match(OpenSearchPPLParser.FILLNULL);
                this.state = 884;
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
        this.enterRule(localContext, 116, OpenSearchPPLParser.RULE_fillNullWith);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 887;
            this.match(OpenSearchPPLParser.WITH);
            this.state = 888;
            localContext._replacement = this.valueExpression(0);
            this.state = 891;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 110) {
                {
                this.state = 889;
                this.match(OpenSearchPPLParser.IN);
                this.state = 890;
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
        this.enterRule(localContext, 118, OpenSearchPPLParser.RULE_fillNullUsing);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 893;
            this.match(OpenSearchPPLParser.USING);
            this.state = 894;
            this.replacementPair();
            this.state = 899;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 164) {
                {
                {
                this.state = 895;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 896;
                this.replacementPair();
                }
                }
                this.state = 901;
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
        this.enterRule(localContext, 120, OpenSearchPPLParser.RULE_replacementPair);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 902;
            this.fieldExpression();
            this.state = 903;
            this.match(OpenSearchPPLParser.EQUAL);
            this.state = 904;
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
        this.enterRule(localContext, 122, OpenSearchPPLParser.RULE_trendlineCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 906;
            this.match(OpenSearchPPLParser.TRENDLINE);
            this.state = 909;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 15) {
                {
                this.state = 907;
                this.match(OpenSearchPPLParser.SORT);
                this.state = 908;
                this.sortField();
                }
            }

            this.state = 911;
            this.trendlineClause();
            this.state = 915;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 78 || _la === 79) {
                {
                {
                this.state = 912;
                this.trendlineClause();
                }
                }
                this.state = 917;
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
        this.enterRule(localContext, 124, OpenSearchPPLParser.RULE_trendlineClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 918;
            this.trendlineType();
            this.state = 919;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 920;
            localContext._numberOfDataPoints = this.integerLiteral();
            this.state = 921;
            this.match(OpenSearchPPLParser.COMMA);
            this.state = 922;
            localContext._field = this.fieldExpression();
            this.state = 923;
            this.match(OpenSearchPPLParser.RT_PRTHS);
            this.state = 926;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 59) {
                {
                this.state = 924;
                this.match(OpenSearchPPLParser.AS);
                this.state = 925;
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
        this.enterRule(localContext, 126, OpenSearchPPLParser.RULE_trendlineType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 928;
            _la = this.tokenStream.LA(1);
            if(!(_la === 78 || _la === 79)) {
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
        this.enterRule(localContext, 128, OpenSearchPPLParser.RULE_expandCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 930;
            this.match(OpenSearchPPLParser.EXPAND);
            this.state = 931;
            this.fieldExpression();
            this.state = 934;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 59) {
                {
                this.state = 932;
                this.match(OpenSearchPPLParser.AS);
                this.state = 933;
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
        this.enterRule(localContext, 130, OpenSearchPPLParser.RULE_flattenCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 936;
            this.match(OpenSearchPPLParser.FLATTEN);
            this.state = 937;
            this.fieldExpression();
            this.state = 940;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 59) {
                {
                this.state = 938;
                this.match(OpenSearchPPLParser.AS);
                this.state = 939;
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
        this.enterRule(localContext, 132, OpenSearchPPLParser.RULE_appendcolCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 942;
            this.match(OpenSearchPPLParser.APPENDCOL);
            this.state = 946;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 74) {
                {
                this.state = 943;
                this.match(OpenSearchPPLParser.OVERRIDE);
                this.state = 944;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 945;
                localContext._override = this.booleanLiteral();
                }
            }

            this.state = 948;
            this.match(OpenSearchPPLParser.LT_SQR_PRTHS);
            this.state = 949;
            this.commands();
            this.state = 954;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 163) {
                {
                {
                this.state = 950;
                this.match(OpenSearchPPLParser.PIPE);
                this.state = 951;
                this.commands();
                }
                }
                this.state = 956;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 957;
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
        this.enterRule(localContext, 134, OpenSearchPPLParser.RULE_appendCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 959;
            this.match(OpenSearchPPLParser.APPEND);
            this.state = 960;
            this.match(OpenSearchPPLParser.LT_SQR_PRTHS);
            this.state = 962;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4290772476) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3891945055) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4293131903) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 50331647) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 2350129145) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 4294443007) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 4294967295) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 4294967295) !== 0) || ((((_la - 290)) & ~0x1F) === 0 && ((1 << (_la - 290)) & 4294967295) !== 0) || ((((_la - 322)) & ~0x1F) === 0 && ((1 << (_la - 322)) & 4294836223) !== 0) || ((((_la - 354)) & ~0x1F) === 0 && ((1 << (_la - 354)) & 4294967295) !== 0) || ((((_la - 386)) & ~0x1F) === 0 && ((1 << (_la - 386)) & 4294967295) !== 0) || ((((_la - 418)) & ~0x1F) === 0 && ((1 << (_la - 418)) & 4294966799) !== 0) || ((((_la - 451)) & ~0x1F) === 0 && ((1 << (_la - 451)) & 239) !== 0)) {
                {
                this.state = 961;
                this.searchCommand();
                }
            }

            this.state = 968;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 163) {
                {
                {
                this.state = 964;
                this.match(OpenSearchPPLParser.PIPE);
                this.state = 965;
                this.commands();
                }
                }
                this.state = 970;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 971;
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
        this.enterRule(localContext, 136, OpenSearchPPLParser.RULE_kmeansCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 973;
            this.match(OpenSearchPPLParser.KMEANS);
            this.state = 977;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 7) !== 0)) {
                {
                {
                this.state = 974;
                this.kmeansParameter();
                }
                }
                this.state = 979;
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
        this.enterRule(localContext, 138, OpenSearchPPLParser.RULE_kmeansParameter);
        try {
            this.state = 989;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.CENTROIDS:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 980;
                this.match(OpenSearchPPLParser.CENTROIDS);
                this.state = 981;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 982;
                localContext._centroids = this.integerLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.ITERATIONS:
                this.enterOuterAlt(localContext, 2);
                {
                {
                this.state = 983;
                this.match(OpenSearchPPLParser.ITERATIONS);
                this.state = 984;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 985;
                localContext._iterations = this.integerLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.DISTANCE_TYPE:
                this.enterOuterAlt(localContext, 3);
                {
                {
                this.state = 986;
                this.match(OpenSearchPPLParser.DISTANCE_TYPE);
                this.state = 987;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 988;
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
        this.enterRule(localContext, 140, OpenSearchPPLParser.RULE_adCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 991;
            this.match(OpenSearchPPLParser.AD);
            this.state = 995;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 2047) !== 0) || _la === 293) {
                {
                {
                this.state = 992;
                this.adParameter();
                }
                }
                this.state = 997;
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
        this.enterRule(localContext, 142, OpenSearchPPLParser.RULE_adParameter);
        try {
            this.state = 1034;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.NUMBER_OF_TREES:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 998;
                this.match(OpenSearchPPLParser.NUMBER_OF_TREES);
                this.state = 999;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1000;
                localContext._number_of_trees = this.integerLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.SHINGLE_SIZE:
                this.enterOuterAlt(localContext, 2);
                {
                {
                this.state = 1001;
                this.match(OpenSearchPPLParser.SHINGLE_SIZE);
                this.state = 1002;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1003;
                localContext._shingle_size = this.integerLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.SAMPLE_SIZE:
                this.enterOuterAlt(localContext, 3);
                {
                {
                this.state = 1004;
                this.match(OpenSearchPPLParser.SAMPLE_SIZE);
                this.state = 1005;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1006;
                localContext._sample_size = this.integerLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.OUTPUT_AFTER:
                this.enterOuterAlt(localContext, 4);
                {
                {
                this.state = 1007;
                this.match(OpenSearchPPLParser.OUTPUT_AFTER);
                this.state = 1008;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1009;
                localContext._output_after = this.integerLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.TIME_DECAY:
                this.enterOuterAlt(localContext, 5);
                {
                {
                this.state = 1010;
                this.match(OpenSearchPPLParser.TIME_DECAY);
                this.state = 1011;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1012;
                localContext._time_decay = this.decimalLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.ANOMALY_RATE:
                this.enterOuterAlt(localContext, 6);
                {
                {
                this.state = 1013;
                this.match(OpenSearchPPLParser.ANOMALY_RATE);
                this.state = 1014;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1015;
                localContext._anomaly_rate = this.decimalLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.CATEGORY_FIELD:
                this.enterOuterAlt(localContext, 7);
                {
                {
                this.state = 1016;
                this.match(OpenSearchPPLParser.CATEGORY_FIELD);
                this.state = 1017;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1018;
                localContext._category_field = this.stringLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.TIME_FIELD:
                this.enterOuterAlt(localContext, 8);
                {
                {
                this.state = 1019;
                this.match(OpenSearchPPLParser.TIME_FIELD);
                this.state = 1020;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1021;
                localContext._time_field = this.stringLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.DATE_FORMAT:
                this.enterOuterAlt(localContext, 9);
                {
                {
                this.state = 1022;
                this.match(OpenSearchPPLParser.DATE_FORMAT);
                this.state = 1023;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1024;
                localContext._date_format = this.stringLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.TIME_ZONE:
                this.enterOuterAlt(localContext, 10);
                {
                {
                this.state = 1025;
                this.match(OpenSearchPPLParser.TIME_ZONE);
                this.state = 1026;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1027;
                localContext._time_zone = this.stringLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.TRAINING_DATA_SIZE:
                this.enterOuterAlt(localContext, 11);
                {
                {
                this.state = 1028;
                this.match(OpenSearchPPLParser.TRAINING_DATA_SIZE);
                this.state = 1029;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1030;
                localContext._training_data_size = this.integerLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.ANOMALY_SCORE_THRESHOLD:
                this.enterOuterAlt(localContext, 12);
                {
                {
                this.state = 1031;
                this.match(OpenSearchPPLParser.ANOMALY_SCORE_THRESHOLD);
                this.state = 1032;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1033;
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
        this.enterRule(localContext, 144, OpenSearchPPLParser.RULE_mlCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1036;
            this.match(OpenSearchPPLParser.ML);
            this.state = 1040;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4290772476) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3891945055) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4286709375) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 50331647) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 2348818425) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 4294443007) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 4294967295) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 4294967295) !== 0) || ((((_la - 290)) & ~0x1F) === 0 && ((1 << (_la - 290)) & 4294967295) !== 0) || ((((_la - 324)) & ~0x1F) === 0 && ((1 << (_la - 324)) & 4294934527) !== 0) || ((((_la - 356)) & ~0x1F) === 0 && ((1 << (_la - 356)) & 4294967295) !== 0) || ((((_la - 388)) & ~0x1F) === 0 && ((1 << (_la - 388)) & 4294967295) !== 0) || ((((_la - 420)) & ~0x1F) === 0 && ((1 << (_la - 420)) & 1073741699) !== 0) || _la === 458) {
                {
                {
                this.state = 1037;
                this.mlArg();
                }
                }
                this.state = 1042;
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
        this.enterRule(localContext, 146, OpenSearchPPLParser.RULE_mlArg);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 1043;
            localContext._argName = this.ident();
            this.state = 1044;
            this.match(OpenSearchPPLParser.EQUAL);
            this.state = 1045;
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
        this.enterRule(localContext, 148, OpenSearchPPLParser.RULE_fromClause);
        try {
            this.state = 1065;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 91, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1047;
                this.match(OpenSearchPPLParser.SOURCE);
                this.state = 1048;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1049;
                this.tableOrSubqueryClause();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1050;
                this.match(OpenSearchPPLParser.INDEX);
                this.state = 1051;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1052;
                this.tableOrSubqueryClause();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1053;
                this.match(OpenSearchPPLParser.SOURCE);
                this.state = 1054;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1055;
                this.tableFunction();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1056;
                this.match(OpenSearchPPLParser.INDEX);
                this.state = 1057;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1058;
                this.tableFunction();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1059;
                this.match(OpenSearchPPLParser.SOURCE);
                this.state = 1060;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1061;
                this.dynamicSourceClause();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1062;
                this.match(OpenSearchPPLParser.INDEX);
                this.state = 1063;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1064;
                this.dynamicSourceClause();
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
        this.enterRule(localContext, 150, OpenSearchPPLParser.RULE_tableOrSubqueryClause);
        let _la: number;
        try {
            this.state = 1075;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.LT_SQR_PRTHS:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1067;
                this.match(OpenSearchPPLParser.LT_SQR_PRTHS);
                this.state = 1068;
                this.subSearch();
                this.state = 1069;
                this.match(OpenSearchPPLParser.RT_SQR_PRTHS);
                this.state = 1072;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 59) {
                    {
                    this.state = 1070;
                    this.match(OpenSearchPPLParser.AS);
                    this.state = 1071;
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
            case OpenSearchPPLParser.REX:
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
                this.state = 1074;
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
        this.enterRule(localContext, 152, OpenSearchPPLParser.RULE_tableSourceClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1077;
            this.tableSource();
            this.state = 1082;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 164) {
                {
                {
                this.state = 1078;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1079;
                this.tableSource();
                }
                }
                this.state = 1084;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1087;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 59) {
                {
                this.state = 1085;
                this.match(OpenSearchPPLParser.AS);
                this.state = 1086;
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
    public dynamicSourceClause(): DynamicSourceClauseContext {
        let localContext = new DynamicSourceClauseContext(this.context, this.state);
        this.enterRule(localContext, 154, OpenSearchPPLParser.RULE_dynamicSourceClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1089;
            this.match(OpenSearchPPLParser.LT_SQR_PRTHS);
            this.state = 1090;
            this.sourceReferences();
            this.state = 1093;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 164) {
                {
                this.state = 1091;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1092;
                this.sourceFilterArgs();
                }
            }

            this.state = 1095;
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
    public sourceReferences(): SourceReferencesContext {
        let localContext = new SourceReferencesContext(this.context, this.state);
        this.enterRule(localContext, 156, OpenSearchPPLParser.RULE_sourceReferences);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1097;
            this.sourceReference();
            this.state = 1102;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 97, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1098;
                    this.match(OpenSearchPPLParser.COMMA);
                    this.state = 1099;
                    this.sourceReference();
                    }
                    }
                }
                this.state = 1104;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 97, this.context);
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
    public sourceReference(): SourceReferenceContext {
        let localContext = new SourceReferenceContext(this.context, this.state);
        this.enterRule(localContext, 158, OpenSearchPPLParser.RULE_sourceReference);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1106;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 450) {
                {
                this.state = 1105;
                this.match(OpenSearchPPLParser.CLUSTER);
                }
            }

            this.state = 1108;
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
    public sourceFilterArgs(): SourceFilterArgsContext {
        let localContext = new SourceFilterArgsContext(this.context, this.state);
        this.enterRule(localContext, 160, OpenSearchPPLParser.RULE_sourceFilterArgs);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1110;
            this.sourceFilterArg();
            this.state = 1115;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 164) {
                {
                {
                this.state = 1111;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1112;
                this.sourceFilterArg();
                }
                }
                this.state = 1117;
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
    public sourceFilterArg(): SourceFilterArgContext {
        let localContext = new SourceFilterArgContext(this.context, this.state);
        this.enterRule(localContext, 162, OpenSearchPPLParser.RULE_sourceFilterArg);
        try {
            this.state = 1126;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 100, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1118;
                this.ident();
                this.state = 1119;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1120;
                this.literalValue();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1122;
                this.ident();
                this.state = 1123;
                this.match(OpenSearchPPLParser.IN);
                this.state = 1124;
                this.valueList();
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
    public joinCommand(): JoinCommandContext {
        let localContext = new JoinCommandContext(this.context, this.state);
        this.enterRule(localContext, 164, OpenSearchPPLParser.RULE_joinCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 1128;
            this.joinType();
            }
            this.state = 1129;
            this.match(OpenSearchPPLParser.JOIN);
            this.state = 1130;
            this.sideAlias();
            this.state = 1132;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 101, this.context) ) {
            case 1:
                {
                this.state = 1131;
                this.joinHintList();
                }
                break;
            }
            this.state = 1135;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 50) {
                {
                this.state = 1134;
                this.joinCriteria();
                }
            }

            this.state = 1137;
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
        this.enterRule(localContext, 166, OpenSearchPPLParser.RULE_joinType);
        let _la: number;
        try {
            this.state = 1163;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 109, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1140;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 51) {
                    {
                    this.state = 1139;
                    this.match(OpenSearchPPLParser.INNER);
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1142;
                this.match(OpenSearchPPLParser.CROSS);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1143;
                this.match(OpenSearchPPLParser.LEFT);
                this.state = 1145;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 52) {
                    {
                    this.state = 1144;
                    this.match(OpenSearchPPLParser.OUTER);
                    }
                }

                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1147;
                this.match(OpenSearchPPLParser.RIGHT);
                this.state = 1149;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 52) {
                    {
                    this.state = 1148;
                    this.match(OpenSearchPPLParser.OUTER);
                    }
                }

                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1151;
                this.match(OpenSearchPPLParser.FULL);
                this.state = 1153;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 52) {
                    {
                    this.state = 1152;
                    this.match(OpenSearchPPLParser.OUTER);
                    }
                }

                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1156;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 347) {
                    {
                    this.state = 1155;
                    this.match(OpenSearchPPLParser.LEFT);
                    }
                }

                this.state = 1158;
                this.match(OpenSearchPPLParser.SEMI);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1160;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 347) {
                    {
                    this.state = 1159;
                    this.match(OpenSearchPPLParser.LEFT);
                    }
                }

                this.state = 1162;
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
        this.enterRule(localContext, 168, OpenSearchPPLParser.RULE_sideAlias);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1168;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 110, this.context) ) {
            case 1:
                {
                this.state = 1165;
                this.match(OpenSearchPPLParser.LEFT);
                this.state = 1166;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1167;
                localContext._leftAlias = this.qualifiedName();
                }
                break;
            }
            this.state = 1171;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 164) {
                {
                this.state = 1170;
                this.match(OpenSearchPPLParser.COMMA);
                }
            }

            this.state = 1176;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 112, this.context) ) {
            case 1:
                {
                this.state = 1173;
                this.match(OpenSearchPPLParser.RIGHT);
                this.state = 1174;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1175;
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
        this.enterRule(localContext, 170, OpenSearchPPLParser.RULE_joinCriteria);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1178;
            this.match(OpenSearchPPLParser.ON);
            this.state = 1179;
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
        this.enterRule(localContext, 172, OpenSearchPPLParser.RULE_joinHintList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1181;
            this.hintPair();
            this.state = 1188;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 114, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1183;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 164) {
                        {
                        this.state = 1182;
                        this.match(OpenSearchPPLParser.COMMA);
                        }
                    }

                    this.state = 1185;
                    this.hintPair();
                    }
                    }
                }
                this.state = 1190;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 114, this.context);
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
        this.enterRule(localContext, 174, OpenSearchPPLParser.RULE_hintPair);
        try {
            this.state = 1201;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.LEFT_HINT:
                localContext = new LeftHintContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1191;
                (localContext as LeftHintContext)._leftHintKey = this.match(OpenSearchPPLParser.LEFT_HINT);
                this.state = 1192;
                this.match(OpenSearchPPLParser.DOT);
                this.state = 1193;
                this.match(OpenSearchPPLParser.ID);
                this.state = 1194;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1195;
                (localContext as LeftHintContext)._leftHintValue = this.ident();
                }
                break;
            case OpenSearchPPLParser.RIGHT_HINT:
                localContext = new RightHintContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1196;
                (localContext as RightHintContext)._rightHintKey = this.match(OpenSearchPPLParser.RIGHT_HINT);
                this.state = 1197;
                this.match(OpenSearchPPLParser.DOT);
                this.state = 1198;
                this.match(OpenSearchPPLParser.ID);
                this.state = 1199;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 1200;
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
        this.enterRule(localContext, 176, OpenSearchPPLParser.RULE_renameClasue);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1203;
            localContext._orignalField = this.renameFieldExpression();
            this.state = 1204;
            this.match(OpenSearchPPLParser.AS);
            this.state = 1205;
            localContext._renamedField = this.renameFieldExpression();
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
        this.enterRule(localContext, 178, OpenSearchPPLParser.RULE_byClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1207;
            this.match(OpenSearchPPLParser.BY);
            this.state = 1208;
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
        this.enterRule(localContext, 180, OpenSearchPPLParser.RULE_statsByClause);
        try {
            this.state = 1224;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 116, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1210;
                this.match(OpenSearchPPLParser.BY);
                this.state = 1211;
                this.fieldList();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1212;
                this.match(OpenSearchPPLParser.BY);
                this.state = 1213;
                this.bySpanClause();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1214;
                this.match(OpenSearchPPLParser.BY);
                this.state = 1215;
                this.bySpanClause();
                this.state = 1216;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1217;
                this.fieldList();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1219;
                this.match(OpenSearchPPLParser.BY);
                this.state = 1220;
                this.fieldList();
                this.state = 1221;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1222;
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
        this.enterRule(localContext, 182, OpenSearchPPLParser.RULE_bySpanClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1226;
            this.spanClause();
            this.state = 1229;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 59) {
                {
                this.state = 1227;
                this.match(OpenSearchPPLParser.AS);
                this.state = 1228;
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
        this.enterRule(localContext, 184, OpenSearchPPLParser.RULE_spanClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1231;
            this.match(OpenSearchPPLParser.SPAN);
            this.state = 1232;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1233;
            this.fieldExpression();
            this.state = 1234;
            this.match(OpenSearchPPLParser.COMMA);
            this.state = 1235;
            localContext._value = this.literalValue();
            this.state = 1237;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 65 || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 174612545) !== 0) || ((((_la - 427)) & ~0x1F) === 0 && ((1 << (_la - 427)) & 2097151) !== 0)) {
                {
                this.state = 1236;
                localContext._unit = this.timespanUnit();
                }
            }

            this.state = 1239;
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
        this.enterRule(localContext, 186, OpenSearchPPLParser.RULE_sortbyClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1241;
            this.sortField();
            this.state = 1246;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 164) {
                {
                {
                this.state = 1242;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1243;
                this.sortField();
                }
                }
                this.state = 1248;
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
        this.enterRule(localContext, 188, OpenSearchPPLParser.RULE_evalClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1249;
            this.fieldExpression();
            this.state = 1250;
            this.match(OpenSearchPPLParser.EQUAL);
            this.state = 1251;
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
        this.enterRule(localContext, 190, OpenSearchPPLParser.RULE_eventstatsAggTerm);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1253;
            this.windowFunction();
            this.state = 1256;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 59) {
                {
                this.state = 1254;
                this.match(OpenSearchPPLParser.AS);
                this.state = 1255;
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
        this.enterRule(localContext, 192, OpenSearchPPLParser.RULE_windowFunction);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1258;
            this.windowFunctionName();
            this.state = 1259;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1260;
            this.functionArgs();
            this.state = 1261;
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
        this.enterRule(localContext, 194, OpenSearchPPLParser.RULE_windowFunctionName);
        try {
            this.state = 1265;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.AVG:
            case OpenSearchPPLParser.COUNT:
            case OpenSearchPPLParser.MAX:
            case OpenSearchPPLParser.MEDIAN:
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
                this.state = 1263;
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
                this.state = 1264;
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
        this.enterRule(localContext, 196, OpenSearchPPLParser.RULE_scalarWindowFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1267;
            _la = this.tokenStream.LA(1);
            if(!(_la === 195 || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & 1023) !== 0))) {
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
        this.enterRule(localContext, 198, OpenSearchPPLParser.RULE_statsAggTerm);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1269;
            this.statsFunction();
            this.state = 1272;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 59) {
                {
                this.state = 1270;
                this.match(OpenSearchPPLParser.AS);
                this.state = 1271;
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
        this.enterRule(localContext, 200, OpenSearchPPLParser.RULE_statsFunction);
        let _la: number;
        try {
            this.state = 1302;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 124, this.context) ) {
            case 1:
                localContext = new StatsFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1274;
                this.statsFunctionName();
                this.state = 1275;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1276;
                this.valueExpression(0);
                this.state = 1277;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                }
                break;
            case 2:
                localContext = new CountEvalFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1279;
                _la = this.tokenStream.LA(1);
                if(!(_la === 194 || _la === 227)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1280;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1281;
                this.evalExpression();
                this.state = 1282;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                }
                break;
            case 3:
                localContext = new CountAllFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1284;
                _la = this.tokenStream.LA(1);
                if(!(_la === 194 || _la === 227)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1287;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 180) {
                    {
                    this.state = 1285;
                    this.match(OpenSearchPPLParser.LT_PRTHS);
                    this.state = 1286;
                    this.match(OpenSearchPPLParser.RT_PRTHS);
                    }
                }

                }
                break;
            case 4:
                localContext = new PercentileShortcutFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1289;
                this.match(OpenSearchPPLParser.PERCENTILE_SHORTCUT);
                this.state = 1290;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1291;
                this.valueExpression(0);
                this.state = 1292;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                }
                break;
            case 5:
                localContext = new DistinctCountFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1294;
                _la = this.tokenStream.LA(1);
                if(!(_la === 195 || _la === 196 || _la === 228)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1295;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1296;
                this.valueExpression(0);
                this.state = 1297;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                }
                break;
            case 6:
                localContext = new TakeAggFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1299;
                this.takeAggFunction();
                }
                break;
            case 7:
                localContext = new PercentileApproxFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1300;
                this.percentileApproxFunction();
                }
                break;
            case 8:
                localContext = new EarliestLatestFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1301;
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
        this.enterRule(localContext, 202, OpenSearchPPLParser.RULE_statsFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1304;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & 74400579) !== 0))) {
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
        this.enterRule(localContext, 204, OpenSearchPPLParser.RULE_earliestLatestFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1306;
            _la = this.tokenStream.LA(1);
            if(!(_la === 216 || _la === 217)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1307;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1308;
            this.valueExpression(0);
            this.state = 1311;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 164) {
                {
                this.state = 1309;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1310;
                localContext._timeField = this.valueExpression(0);
                }
            }

            this.state = 1313;
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
        this.enterRule(localContext, 206, OpenSearchPPLParser.RULE_takeAggFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1315;
            this.match(OpenSearchPPLParser.TAKE);
            this.state = 1316;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1317;
            this.fieldExpression();
            this.state = 1320;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 164) {
                {
                this.state = 1318;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1319;
                localContext._size = this.integerLiteral();
                }
            }

            this.state = 1322;
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
        this.enterRule(localContext, 208, OpenSearchPPLParser.RULE_percentileApproxFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1324;
            _la = this.tokenStream.LA(1);
            if(!(_la === 214 || _la === 215)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1325;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1326;
            localContext._aggField = this.valueExpression(0);
            this.state = 1327;
            this.match(OpenSearchPPLParser.COMMA);
            this.state = 1328;
            localContext._percent = this.numericLiteral();
            this.state = 1331;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 164) {
                {
                this.state = 1329;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1330;
                localContext._compression = this.numericLiteral();
                }
            }

            this.state = 1333;
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
        this.enterRule(localContext, 210, OpenSearchPPLParser.RULE_numericLiteral);
        try {
            this.state = 1339;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 128, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1335;
                this.integerLiteral();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1336;
                this.decimalLiteral();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1337;
                this.doubleLiteral();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1338;
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
        let _startState = 212;
        this.enterRecursionRule(localContext, 212, OpenSearchPPLParser.RULE_logicalExpression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1345;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.NOT:
                {
                localContext = new LogicalNotContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1342;
                this.match(OpenSearchPPLParser.NOT);
                this.state = 1343;
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
            case OpenSearchPPLParser.REX:
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
                this.state = 1344;
                this.expression(0);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1358;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 131, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1356;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 130, this.context) ) {
                    case 1:
                        {
                        localContext = new LogicalAndContext(new LogicalExpressionContext(parentContext, parentState));
                        (localContext as LogicalAndContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchPPLParser.RULE_logicalExpression);
                        this.state = 1347;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 1348;
                        this.match(OpenSearchPPLParser.AND);
                        this.state = 1349;
                        (localContext as LogicalAndContext)._right = this.logicalExpression(5);
                        }
                        break;
                    case 2:
                        {
                        localContext = new LogicalXorContext(new LogicalExpressionContext(parentContext, parentState));
                        (localContext as LogicalXorContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchPPLParser.RULE_logicalExpression);
                        this.state = 1350;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 1351;
                        this.match(OpenSearchPPLParser.XOR);
                        this.state = 1352;
                        (localContext as LogicalXorContext)._right = this.logicalExpression(4);
                        }
                        break;
                    case 3:
                        {
                        localContext = new LogicalOrContext(new LogicalExpressionContext(parentContext, parentState));
                        (localContext as LogicalOrContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchPPLParser.RULE_logicalExpression);
                        this.state = 1353;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 1354;
                        this.match(OpenSearchPPLParser.OR);
                        this.state = 1355;
                        (localContext as LogicalOrContext)._right = this.logicalExpression(3);
                        }
                        break;
                    }
                    }
                }
                this.state = 1360;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 131, this.context);
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
        let _startState = 214;
        this.enterRecursionRule(localContext, 214, OpenSearchPPLParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1364;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 132, this.context) ) {
            case 1:
                {
                localContext = new ValueExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1362;
                this.valueExpression(0);
                }
                break;
            case 2:
                {
                localContext = new RelevanceExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1363;
                this.relevanceExpression();
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1387;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 136, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1385;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 135, this.context) ) {
                    case 1:
                        {
                        localContext = new CompareExprContext(new ExpressionContext(parentContext, parentState));
                        (localContext as CompareExprContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchPPLParser.RULE_expression);
                        this.state = 1366;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 1367;
                        this.comparisonOperator();
                        this.state = 1368;
                        (localContext as CompareExprContext)._right = this.expression(4);
                        }
                        break;
                    case 2:
                        {
                        localContext = new BetweenContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchPPLParser.RULE_expression);
                        this.state = 1370;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 1372;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 113) {
                            {
                            this.state = 1371;
                            this.match(OpenSearchPPLParser.NOT);
                            }
                        }

                        this.state = 1374;
                        this.match(OpenSearchPPLParser.BETWEEN);
                        this.state = 1375;
                        this.expression(0);
                        this.state = 1376;
                        this.match(OpenSearchPPLParser.AND);
                        this.state = 1377;
                        this.expression(2);
                        }
                        break;
                    case 3:
                        {
                        localContext = new InExprContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchPPLParser.RULE_expression);
                        this.state = 1379;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 1381;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 113) {
                            {
                            this.state = 1380;
                            this.match(OpenSearchPPLParser.NOT);
                            }
                        }

                        this.state = 1383;
                        this.match(OpenSearchPPLParser.IN);
                        this.state = 1384;
                        this.valueList();
                        }
                        break;
                    }
                    }
                }
                this.state = 1389;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 136, this.context);
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
        let _startState = 216;
        this.enterRecursionRule(localContext, 216, OpenSearchPPLParser.RULE_valueExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1426;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 139, this.context) ) {
            case 1:
                {
                localContext = new LiteralValueExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1391;
                this.literalValue();
                }
                break;
            case 2:
                {
                localContext = new FunctionCallExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1392;
                this.functionCall();
                }
                break;
            case 3:
                {
                localContext = new LambdaExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1393;
                this.lambda();
                }
                break;
            case 4:
                {
                localContext = new ScalarSubqueryExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1394;
                this.match(OpenSearchPPLParser.LT_SQR_PRTHS);
                this.state = 1395;
                this.subSearch();
                this.state = 1396;
                this.match(OpenSearchPPLParser.RT_SQR_PRTHS);
                }
                break;
            case 5:
                {
                localContext = new InSubqueryExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1398;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1399;
                this.valueExpression(0);
                this.state = 1404;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 164) {
                    {
                    {
                    this.state = 1400;
                    this.match(OpenSearchPPLParser.COMMA);
                    this.state = 1401;
                    this.valueExpression(0);
                    }
                    }
                    this.state = 1406;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1407;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                this.state = 1409;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 113) {
                    {
                    this.state = 1408;
                    this.match(OpenSearchPPLParser.NOT);
                    }
                }

                this.state = 1411;
                this.match(OpenSearchPPLParser.IN);
                this.state = 1412;
                this.match(OpenSearchPPLParser.LT_SQR_PRTHS);
                this.state = 1413;
                this.subSearch();
                this.state = 1414;
                this.match(OpenSearchPPLParser.RT_SQR_PRTHS);
                }
                break;
            case 6:
                {
                localContext = new ExistsSubqueryExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1416;
                this.match(OpenSearchPPLParser.EXISTS);
                this.state = 1417;
                this.match(OpenSearchPPLParser.LT_SQR_PRTHS);
                this.state = 1418;
                this.subSearch();
                this.state = 1419;
                this.match(OpenSearchPPLParser.RT_SQR_PRTHS);
                }
                break;
            case 7:
                {
                localContext = new FieldExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1421;
                this.fieldExpression();
                }
                break;
            case 8:
                {
                localContext = new NestedValueExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1422;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1423;
                this.logicalExpression(0);
                this.state = 1424;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1445;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 142, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1443;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 141, this.context) ) {
                    case 1:
                        {
                        localContext = new BinaryArithmeticContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as BinaryArithmeticContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchPPLParser.RULE_valueExpression);
                        this.state = 1428;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 1429;
                        (localContext as BinaryArithmeticContext)._binaryOperator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 175)) & ~0x1F) === 0 && ((1 << (_la - 175)) & 7) !== 0))) {
                            (localContext as BinaryArithmeticContext)._binaryOperator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1430;
                        (localContext as BinaryArithmeticContext)._right = this.valueExpression(12);
                        }
                        break;
                    case 2:
                        {
                        localContext = new BinaryArithmeticContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as BinaryArithmeticContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchPPLParser.RULE_valueExpression);
                        this.state = 1431;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 1432;
                        (localContext as BinaryArithmeticContext)._binaryOperator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 173 || _la === 174)) {
                            (localContext as BinaryArithmeticContext)._binaryOperator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1433;
                        (localContext as BinaryArithmeticContext)._right = this.valueExpression(11);
                        }
                        break;
                    case 3:
                        {
                        localContext = new InSubqueryExprContext(new ValueExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchPPLParser.RULE_valueExpression);
                        this.state = 1434;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 1436;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 113) {
                            {
                            this.state = 1435;
                            this.match(OpenSearchPPLParser.NOT);
                            }
                        }

                        this.state = 1438;
                        this.match(OpenSearchPPLParser.IN);
                        this.state = 1439;
                        this.match(OpenSearchPPLParser.LT_SQR_PRTHS);
                        this.state = 1440;
                        this.subSearch();
                        this.state = 1441;
                        this.match(OpenSearchPPLParser.RT_SQR_PRTHS);
                        }
                        break;
                    }
                    }
                }
                this.state = 1447;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 142, this.context);
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
        this.enterRule(localContext, 218, OpenSearchPPLParser.RULE_evalExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1448;
            this.match(OpenSearchPPLParser.EVAL);
            this.state = 1449;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1450;
            this.logicalExpression(0);
            this.state = 1451;
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
        this.enterRule(localContext, 220, OpenSearchPPLParser.RULE_functionCall);
        try {
            this.state = 1460;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 143, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1453;
                this.evalFunctionCall();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1454;
                this.dataTypeFunctionCall();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1455;
                this.positionFunctionCall();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1456;
                this.caseFunctionCall();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1457;
                this.timestampFunctionCall();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1458;
                this.extractFunctionCall();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1459;
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
        this.enterRule(localContext, 222, OpenSearchPPLParser.RULE_positionFunctionCall);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1462;
            this.positionFunctionName();
            this.state = 1463;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1464;
            this.functionArg();
            this.state = 1465;
            this.match(OpenSearchPPLParser.IN);
            this.state = 1466;
            this.functionArg();
            this.state = 1467;
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
        this.enterRule(localContext, 224, OpenSearchPPLParser.RULE_caseFunctionCall);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1469;
            this.match(OpenSearchPPLParser.CASE);
            this.state = 1470;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1471;
            this.logicalExpression(0);
            this.state = 1472;
            this.match(OpenSearchPPLParser.COMMA);
            this.state = 1473;
            this.valueExpression(0);
            this.state = 1481;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 164) {
                {
                {
                this.state = 1474;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1475;
                this.logicalExpression(0);
                this.state = 1476;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1477;
                this.valueExpression(0);
                }
                }
                this.state = 1483;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1486;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 109) {
                {
                this.state = 1484;
                this.match(OpenSearchPPLParser.ELSE);
                this.state = 1485;
                this.valueExpression(0);
                }
            }

            this.state = 1488;
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
        this.enterRule(localContext, 226, OpenSearchPPLParser.RULE_relevanceExpression);
        try {
            this.state = 1492;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.MATCH:
            case OpenSearchPPLParser.MATCH_PHRASE:
            case OpenSearchPPLParser.MATCH_PHRASE_PREFIX:
            case OpenSearchPPLParser.MATCH_BOOL_PREFIX:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1490;
                this.singleFieldRelevanceFunction();
                }
                break;
            case OpenSearchPPLParser.SIMPLE_QUERY_STRING:
            case OpenSearchPPLParser.MULTI_MATCH:
            case OpenSearchPPLParser.QUERY_STRING:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1491;
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
        this.enterRule(localContext, 228, OpenSearchPPLParser.RULE_singleFieldRelevanceFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1494;
            this.singleFieldRelevanceFunctionName();
            this.state = 1495;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1496;
            localContext._field = this.relevanceField();
            this.state = 1497;
            this.match(OpenSearchPPLParser.COMMA);
            this.state = 1498;
            localContext._query = this.relevanceQuery();
            this.state = 1503;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 164) {
                {
                {
                this.state = 1499;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1500;
                this.relevanceArg();
                }
                }
                this.state = 1505;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1506;
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
        this.enterRule(localContext, 230, OpenSearchPPLParser.RULE_multiFieldRelevanceFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1508;
            this.multiFieldRelevanceFunctionName();
            this.state = 1509;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1522;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 182) {
                {
                this.state = 1510;
                this.match(OpenSearchPPLParser.LT_SQR_PRTHS);
                this.state = 1511;
                localContext._field = this.relevanceFieldAndWeight();
                this.state = 1516;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 164) {
                    {
                    {
                    this.state = 1512;
                    this.match(OpenSearchPPLParser.COMMA);
                    this.state = 1513;
                    localContext._field = this.relevanceFieldAndWeight();
                    }
                    }
                    this.state = 1518;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1519;
                this.match(OpenSearchPPLParser.RT_SQR_PRTHS);
                this.state = 1520;
                this.match(OpenSearchPPLParser.COMMA);
                }
            }

            this.state = 1524;
            localContext._query = this.relevanceQuery();
            this.state = 1529;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 164) {
                {
                {
                this.state = 1525;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1526;
                this.relevanceArg();
                }
                }
                this.state = 1531;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1532;
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
        this.enterRule(localContext, 232, OpenSearchPPLParser.RULE_tableSource);
        try {
            this.state = 1536;
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
            case OpenSearchPPLParser.REX:
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
                this.state = 1534;
                this.tableQualifiedName();
                }
                break;
            case OpenSearchPPLParser.ID_DATE_SUFFIX:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1535;
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
        this.enterRule(localContext, 234, OpenSearchPPLParser.RULE_tableFunction);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1538;
            this.qualifiedName();
            this.state = 1539;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1540;
            this.namedFunctionArgs();
            this.state = 1541;
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
        this.enterRule(localContext, 236, OpenSearchPPLParser.RULE_fieldList);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1543;
            this.fieldExpression();
            this.state = 1548;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 152, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1544;
                    this.match(OpenSearchPPLParser.COMMA);
                    this.state = 1545;
                    this.fieldExpression();
                    }
                    }
                }
                this.state = 1550;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 152, this.context);
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
        this.enterRule(localContext, 238, OpenSearchPPLParser.RULE_sortField);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1552;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 153, this.context) ) {
            case 1:
                {
                this.state = 1551;
                _la = this.tokenStream.LA(1);
                if(!(_la === 173 || _la === 174)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            }
            this.state = 1554;
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
        this.enterRule(localContext, 240, OpenSearchPPLParser.RULE_sortFieldExpression);
        try {
            this.state = 1577;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 154, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1556;
                this.fieldExpression();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1557;
                this.match(OpenSearchPPLParser.AUTO);
                this.state = 1558;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1559;
                this.fieldExpression();
                this.state = 1560;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1562;
                this.match(OpenSearchPPLParser.STR);
                this.state = 1563;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1564;
                this.fieldExpression();
                this.state = 1565;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1567;
                this.match(OpenSearchPPLParser.IP);
                this.state = 1568;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1569;
                this.fieldExpression();
                this.state = 1570;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1572;
                this.match(OpenSearchPPLParser.NUM);
                this.state = 1573;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1574;
                this.fieldExpression();
                this.state = 1575;
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
        this.enterRule(localContext, 242, OpenSearchPPLParser.RULE_fieldExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1579;
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
        this.enterRule(localContext, 244, OpenSearchPPLParser.RULE_wcFieldExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1581;
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
        this.enterRule(localContext, 246, OpenSearchPPLParser.RULE_selectFieldExpression);
        try {
            this.state = 1585;
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
            case OpenSearchPPLParser.REX:
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
                this.state = 1583;
                this.wcQualifiedName();
                }
                break;
            case OpenSearchPPLParser.STAR:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1584;
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
    public renameFieldExpression(): RenameFieldExpressionContext {
        let localContext = new RenameFieldExpressionContext(this.context, this.state);
        this.enterRule(localContext, 248, OpenSearchPPLParser.RULE_renameFieldExpression);
        try {
            this.state = 1589;
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
            case OpenSearchPPLParser.REX:
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
                this.state = 1587;
                this.wcQualifiedName();
                }
                break;
            case OpenSearchPPLParser.STAR:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1588;
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
        this.enterRule(localContext, 250, OpenSearchPPLParser.RULE_evalFunctionCall);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1591;
            this.evalFunctionName();
            this.state = 1592;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1593;
            this.functionArgs();
            this.state = 1594;
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
        this.enterRule(localContext, 252, OpenSearchPPLParser.RULE_dataTypeFunctionCall);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1596;
            this.match(OpenSearchPPLParser.CAST);
            this.state = 1597;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1598;
            this.logicalExpression(0);
            this.state = 1599;
            this.match(OpenSearchPPLParser.AS);
            this.state = 1600;
            this.convertedDataType();
            this.state = 1601;
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
        this.enterRule(localContext, 254, OpenSearchPPLParser.RULE_convertedDataType);
        try {
            this.state = 1615;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.DATE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1603;
                localContext._typeName = this.match(OpenSearchPPLParser.DATE);
                }
                break;
            case OpenSearchPPLParser.TIME:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1604;
                localContext._typeName = this.match(OpenSearchPPLParser.TIME);
                }
                break;
            case OpenSearchPPLParser.TIMESTAMP:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1605;
                localContext._typeName = this.match(OpenSearchPPLParser.TIMESTAMP);
                }
                break;
            case OpenSearchPPLParser.INT:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1606;
                localContext._typeName = this.match(OpenSearchPPLParser.INT);
                }
                break;
            case OpenSearchPPLParser.INTEGER:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1607;
                localContext._typeName = this.match(OpenSearchPPLParser.INTEGER);
                }
                break;
            case OpenSearchPPLParser.DOUBLE:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1608;
                localContext._typeName = this.match(OpenSearchPPLParser.DOUBLE);
                }
                break;
            case OpenSearchPPLParser.LONG:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1609;
                localContext._typeName = this.match(OpenSearchPPLParser.LONG);
                }
                break;
            case OpenSearchPPLParser.FLOAT:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1610;
                localContext._typeName = this.match(OpenSearchPPLParser.FLOAT);
                }
                break;
            case OpenSearchPPLParser.STRING:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1611;
                localContext._typeName = this.match(OpenSearchPPLParser.STRING);
                }
                break;
            case OpenSearchPPLParser.BOOLEAN:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1612;
                localContext._typeName = this.match(OpenSearchPPLParser.BOOLEAN);
                }
                break;
            case OpenSearchPPLParser.IP:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1613;
                localContext._typeName = this.match(OpenSearchPPLParser.IP);
                }
                break;
            case OpenSearchPPLParser.JSON:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 1614;
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
        this.enterRule(localContext, 256, OpenSearchPPLParser.RULE_evalFunctionName);
        try {
            this.state = 1628;
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
                this.state = 1617;
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
                this.state = 1618;
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
                this.state = 1619;
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
                this.state = 1620;
                this.conditionFunctionName();
                }
                break;
            case OpenSearchPPLParser.IFNULL:
            case OpenSearchPPLParser.NULLIF:
            case OpenSearchPPLParser.IF:
            case OpenSearchPPLParser.COALESCE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1621;
                this.flowControlFunctionName();
                }
                break;
            case OpenSearchPPLParser.TYPEOF:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1622;
                this.systemFunctionName();
                }
                break;
            case OpenSearchPPLParser.POSITION:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1623;
                this.positionFunctionName();
                }
                break;
            case OpenSearchPPLParser.MD5:
            case OpenSearchPPLParser.SHA1:
            case OpenSearchPPLParser.SHA2:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1624;
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
                this.state = 1625;
                this.jsonFunctionName();
                }
                break;
            case OpenSearchPPLParser.GEOIP:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1626;
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
                this.state = 1627;
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
        this.enterRule(localContext, 258, OpenSearchPPLParser.RULE_functionArgs);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1638;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4290772476) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3891945055) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4293131903) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 50331647) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 2350129145) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 4294443007) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 4294967295) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 4294967295) !== 0) || ((((_la - 290)) & ~0x1F) === 0 && ((1 << (_la - 290)) & 4294967295) !== 0) || ((((_la - 322)) & ~0x1F) === 0 && ((1 << (_la - 322)) & 4294836223) !== 0) || ((((_la - 354)) & ~0x1F) === 0 && ((1 << (_la - 354)) & 4294967295) !== 0) || ((((_la - 386)) & ~0x1F) === 0 && ((1 << (_la - 386)) & 4294967295) !== 0) || ((((_la - 418)) & ~0x1F) === 0 && ((1 << (_la - 418)) & 4294966799) !== 0) || ((((_la - 451)) & ~0x1F) === 0 && ((1 << (_la - 451)) & 239) !== 0)) {
                {
                this.state = 1630;
                this.functionArg();
                this.state = 1635;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 164) {
                    {
                    {
                    this.state = 1631;
                    this.match(OpenSearchPPLParser.COMMA);
                    this.state = 1632;
                    this.functionArg();
                    }
                    }
                    this.state = 1637;
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
        this.enterRule(localContext, 260, OpenSearchPPLParser.RULE_namedFunctionArgs);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1648;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4290772476) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3891945055) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4293131903) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 50331647) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 2350129145) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 4294443007) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 4294967295) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 4294967295) !== 0) || ((((_la - 290)) & ~0x1F) === 0 && ((1 << (_la - 290)) & 4294967295) !== 0) || ((((_la - 322)) & ~0x1F) === 0 && ((1 << (_la - 322)) & 4294836223) !== 0) || ((((_la - 354)) & ~0x1F) === 0 && ((1 << (_la - 354)) & 4294967295) !== 0) || ((((_la - 386)) & ~0x1F) === 0 && ((1 << (_la - 386)) & 4294967295) !== 0) || ((((_la - 418)) & ~0x1F) === 0 && ((1 << (_la - 418)) & 4294966799) !== 0) || ((((_la - 451)) & ~0x1F) === 0 && ((1 << (_la - 451)) & 239) !== 0)) {
                {
                this.state = 1640;
                this.namedFunctionArg();
                this.state = 1645;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 164) {
                    {
                    {
                    this.state = 1641;
                    this.match(OpenSearchPPLParser.COMMA);
                    this.state = 1642;
                    this.namedFunctionArg();
                    }
                    }
                    this.state = 1647;
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
        this.enterRule(localContext, 262, OpenSearchPPLParser.RULE_functionArg);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1650;
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
        this.enterRule(localContext, 264, OpenSearchPPLParser.RULE_namedFunctionArg);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1655;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 163, this.context) ) {
            case 1:
                {
                this.state = 1652;
                this.ident();
                this.state = 1653;
                this.match(OpenSearchPPLParser.EQUAL);
                }
                break;
            }
            this.state = 1657;
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
        this.enterRule(localContext, 266, OpenSearchPPLParser.RULE_functionArgExpression);
        try {
            this.state = 1661;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 164, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1659;
                this.lambda();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1660;
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
        this.enterRule(localContext, 268, OpenSearchPPLParser.RULE_lambda);
        let _la: number;
        try {
            this.state = 1679;
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
            case OpenSearchPPLParser.REX:
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
                this.state = 1663;
                this.ident();
                this.state = 1664;
                this.match(OpenSearchPPLParser.ARROW);
                this.state = 1665;
                this.logicalExpression(0);
                }
                break;
            case OpenSearchPPLParser.LT_PRTHS:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1667;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1668;
                this.ident();
                this.state = 1671;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1669;
                    this.match(OpenSearchPPLParser.COMMA);
                    this.state = 1670;
                    this.ident();
                    }
                    }
                    this.state = 1673;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 164);
                this.state = 1675;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                this.state = 1676;
                this.match(OpenSearchPPLParser.ARROW);
                this.state = 1677;
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
        this.enterRule(localContext, 270, OpenSearchPPLParser.RULE_relevanceArg);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1681;
            this.relevanceArgName();
            this.state = 1682;
            this.match(OpenSearchPPLParser.EQUAL);
            this.state = 1683;
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
        this.enterRule(localContext, 272, OpenSearchPPLParser.RULE_relevanceArgName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1685;
            _la = this.tokenStream.LA(1);
            if(!(_la === 8 || _la === 97 || ((((_la - 390)) & ~0x1F) === 0 && ((1 << (_la - 390)) & 2147483647) !== 0))) {
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
        this.enterRule(localContext, 274, OpenSearchPPLParser.RULE_relevanceFieldAndWeight);
        try {
            this.state = 1695;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 167, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1687;
                localContext._field = this.relevanceField();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1688;
                localContext._field = this.relevanceField();
                this.state = 1689;
                localContext._weight = this.relevanceFieldWeight();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1691;
                localContext._field = this.relevanceField();
                this.state = 1692;
                this.match(OpenSearchPPLParser.BIT_XOR_OP);
                this.state = 1693;
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
        this.enterRule(localContext, 276, OpenSearchPPLParser.RULE_relevanceFieldWeight);
        try {
            this.state = 1701;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 168, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1697;
                this.integerLiteral();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1698;
                this.decimalLiteral();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1699;
                this.doubleLiteral();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1700;
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
        this.enterRule(localContext, 278, OpenSearchPPLParser.RULE_relevanceField);
        try {
            this.state = 1705;
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
            case OpenSearchPPLParser.REX:
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
                this.state = 1703;
                this.qualifiedName();
                }
                break;
            case OpenSearchPPLParser.DQUOTA_STRING:
            case OpenSearchPPLParser.SQUOTA_STRING:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1704;
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
        this.enterRule(localContext, 280, OpenSearchPPLParser.RULE_relevanceQuery);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1707;
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
        this.enterRule(localContext, 282, OpenSearchPPLParser.RULE_relevanceArgValue);
        try {
            this.state = 1711;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 170, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1709;
                this.qualifiedName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1710;
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
        this.enterRule(localContext, 284, OpenSearchPPLParser.RULE_mathematicalFunctionName);
        try {
            this.state = 1745;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.ABS:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1713;
                this.match(OpenSearchPPLParser.ABS);
                }
                break;
            case OpenSearchPPLParser.PLUS_FUCTION:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1714;
                this.match(OpenSearchPPLParser.PLUS_FUCTION);
                }
                break;
            case OpenSearchPPLParser.MINUS_FUCTION:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1715;
                this.match(OpenSearchPPLParser.MINUS_FUCTION);
                }
                break;
            case OpenSearchPPLParser.STAR_FUNCTION:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1716;
                this.match(OpenSearchPPLParser.STAR_FUNCTION);
                }
                break;
            case OpenSearchPPLParser.DIVIDE_FUNCTION:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1717;
                this.match(OpenSearchPPLParser.DIVIDE_FUNCTION);
                }
                break;
            case OpenSearchPPLParser.CBRT:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1718;
                this.match(OpenSearchPPLParser.CBRT);
                }
                break;
            case OpenSearchPPLParser.CEIL:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1719;
                this.match(OpenSearchPPLParser.CEIL);
                }
                break;
            case OpenSearchPPLParser.CEILING:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1720;
                this.match(OpenSearchPPLParser.CEILING);
                }
                break;
            case OpenSearchPPLParser.CONV:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1721;
                this.match(OpenSearchPPLParser.CONV);
                }
                break;
            case OpenSearchPPLParser.CRC32:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1722;
                this.match(OpenSearchPPLParser.CRC32);
                }
                break;
            case OpenSearchPPLParser.E:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1723;
                this.match(OpenSearchPPLParser.E);
                }
                break;
            case OpenSearchPPLParser.EXP:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 1724;
                this.match(OpenSearchPPLParser.EXP);
                }
                break;
            case OpenSearchPPLParser.EXPM1:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 1725;
                this.match(OpenSearchPPLParser.EXPM1);
                }
                break;
            case OpenSearchPPLParser.FLOOR:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 1726;
                this.match(OpenSearchPPLParser.FLOOR);
                }
                break;
            case OpenSearchPPLParser.LN:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 1727;
                this.match(OpenSearchPPLParser.LN);
                }
                break;
            case OpenSearchPPLParser.LOG:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 1728;
                this.match(OpenSearchPPLParser.LOG);
                }
                break;
            case OpenSearchPPLParser.LOG_WITH_BASE:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 1729;
                this.match(OpenSearchPPLParser.LOG_WITH_BASE);
                }
                break;
            case OpenSearchPPLParser.MOD:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 1730;
                this.match(OpenSearchPPLParser.MOD);
                }
                break;
            case OpenSearchPPLParser.MODULUS:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 1731;
                this.match(OpenSearchPPLParser.MODULUS);
                }
                break;
            case OpenSearchPPLParser.PI:
                this.enterOuterAlt(localContext, 20);
                {
                this.state = 1732;
                this.match(OpenSearchPPLParser.PI);
                }
                break;
            case OpenSearchPPLParser.POW:
                this.enterOuterAlt(localContext, 21);
                {
                this.state = 1733;
                this.match(OpenSearchPPLParser.POW);
                }
                break;
            case OpenSearchPPLParser.POWER:
                this.enterOuterAlt(localContext, 22);
                {
                this.state = 1734;
                this.match(OpenSearchPPLParser.POWER);
                }
                break;
            case OpenSearchPPLParser.RAND:
                this.enterOuterAlt(localContext, 23);
                {
                this.state = 1735;
                this.match(OpenSearchPPLParser.RAND);
                }
                break;
            case OpenSearchPPLParser.ROUND:
                this.enterOuterAlt(localContext, 24);
                {
                this.state = 1736;
                this.match(OpenSearchPPLParser.ROUND);
                }
                break;
            case OpenSearchPPLParser.SIGN:
                this.enterOuterAlt(localContext, 25);
                {
                this.state = 1737;
                this.match(OpenSearchPPLParser.SIGN);
                }
                break;
            case OpenSearchPPLParser.SQRT:
                this.enterOuterAlt(localContext, 26);
                {
                this.state = 1738;
                this.match(OpenSearchPPLParser.SQRT);
                }
                break;
            case OpenSearchPPLParser.TRUNCATE:
                this.enterOuterAlt(localContext, 27);
                {
                this.state = 1739;
                this.match(OpenSearchPPLParser.TRUNCATE);
                }
                break;
            case OpenSearchPPLParser.RINT:
                this.enterOuterAlt(localContext, 28);
                {
                this.state = 1740;
                this.match(OpenSearchPPLParser.RINT);
                }
                break;
            case OpenSearchPPLParser.SIGNUM:
                this.enterOuterAlt(localContext, 29);
                {
                this.state = 1741;
                this.match(OpenSearchPPLParser.SIGNUM);
                }
                break;
            case OpenSearchPPLParser.SUM:
                this.enterOuterAlt(localContext, 30);
                {
                this.state = 1742;
                this.match(OpenSearchPPLParser.SUM);
                }
                break;
            case OpenSearchPPLParser.AVG:
                this.enterOuterAlt(localContext, 31);
                {
                this.state = 1743;
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
                this.state = 1744;
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
        this.enterRule(localContext, 286, OpenSearchPPLParser.RULE_geoipFunctionName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1747;
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
        this.enterRule(localContext, 288, OpenSearchPPLParser.RULE_collectionFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1749;
            _la = this.tokenStream.LA(1);
            if(!(_la === 111 || ((((_la - 361)) & ~0x1F) === 0 && ((1 << (_la - 361)) & 63) !== 0))) {
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
        this.enterRule(localContext, 290, OpenSearchPPLParser.RULE_trigonometricFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1751;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 268)) & ~0x1F) === 0 && ((1 << (_la - 268)) & 4095) !== 0))) {
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
        this.enterRule(localContext, 292, OpenSearchPPLParser.RULE_jsonFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1753;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 368)) & ~0x1F) === 0 && ((1 << (_la - 368)) & 1023) !== 0))) {
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
        this.enterRule(localContext, 294, OpenSearchPPLParser.RULE_cryptographicFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1755;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 280)) & ~0x1F) === 0 && ((1 << (_la - 280)) & 7) !== 0))) {
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
        this.enterRule(localContext, 296, OpenSearchPPLParser.RULE_dateTimeFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1757;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & 1038960967) !== 0) || ((((_la - 283)) & ~0x1F) === 0 && ((1 << (_la - 283)) & 4292607999) !== 0) || ((((_la - 315)) & ~0x1F) === 0 && ((1 << (_la - 315)) & 523903) !== 0))) {
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
        this.enterRule(localContext, 298, OpenSearchPPLParser.RULE_getFormatFunctionCall);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1759;
            this.match(OpenSearchPPLParser.GET_FORMAT);
            this.state = 1760;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1761;
            this.getFormatType();
            this.state = 1762;
            this.match(OpenSearchPPLParser.COMMA);
            this.state = 1763;
            this.functionArg();
            this.state = 1764;
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
        this.enterRule(localContext, 300, OpenSearchPPLParser.RULE_getFormatType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1766;
            _la = this.tokenStream.LA(1);
            if(!(_la === 122 || ((((_la - 290)) & ~0x1F) === 0 && ((1 << (_la - 290)) & 2684354561) !== 0))) {
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
        this.enterRule(localContext, 302, OpenSearchPPLParser.RULE_extractFunctionCall);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1768;
            this.match(OpenSearchPPLParser.EXTRACT);
            this.state = 1769;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1770;
            this.datetimePart();
            this.state = 1771;
            this.match(OpenSearchPPLParser.FROM);
            this.state = 1772;
            this.functionArg();
            this.state = 1773;
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
        this.enterRule(localContext, 304, OpenSearchPPLParser.RULE_simpleDateTimePart);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1775;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 174608449) !== 0))) {
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
        this.enterRule(localContext, 306, OpenSearchPPLParser.RULE_complexDateTimePart);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1777;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & 138560215) !== 0))) {
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
        this.enterRule(localContext, 308, OpenSearchPPLParser.RULE_datetimePart);
        try {
            this.state = 1781;
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
                this.state = 1779;
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
                this.state = 1780;
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
        this.enterRule(localContext, 310, OpenSearchPPLParser.RULE_timestampFunctionCall);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1783;
            this.timestampFunctionName();
            this.state = 1784;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1785;
            this.simpleDateTimePart();
            this.state = 1786;
            this.match(OpenSearchPPLParser.COMMA);
            this.state = 1787;
            localContext._firstArg = this.functionArg();
            this.state = 1788;
            this.match(OpenSearchPPLParser.COMMA);
            this.state = 1789;
            localContext._secondArg = this.functionArg();
            this.state = 1790;
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
        this.enterRule(localContext, 312, OpenSearchPPLParser.RULE_timestampFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1792;
            _la = this.tokenStream.LA(1);
            if(!(_la === 322 || _la === 323)) {
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
        this.enterRule(localContext, 314, OpenSearchPPLParser.RULE_conditionFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1794;
            _la = this.tokenStream.LA(1);
            if(!(_la === 120 || _la === 216 || _la === 217 || ((((_la - 353)) & ~0x1F) === 0 && ((1 << (_la - 353)) & 16623) !== 0))) {
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
        this.enterRule(localContext, 316, OpenSearchPPLParser.RULE_flowControlFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1796;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 378)) & ~0x1F) === 0 && ((1 << (_la - 378)) & 23) !== 0))) {
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
        this.enterRule(localContext, 318, OpenSearchPPLParser.RULE_systemFunctionName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1798;
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
        this.enterRule(localContext, 320, OpenSearchPPLParser.RULE_textFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1800;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 334)) & ~0x1F) === 0 && ((1 << (_la - 334)) & 262111) !== 0))) {
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
        this.enterRule(localContext, 322, OpenSearchPPLParser.RULE_positionFunctionName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1802;
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
        this.enterRule(localContext, 324, OpenSearchPPLParser.RULE_comparisonOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1804;
            _la = this.tokenStream.LA(1);
            if(!(_la === 119 || ((((_la - 166)) & ~0x1F) === 0 && ((1 << (_la - 166)) & 127) !== 0) || _la === 353)) {
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
        this.enterRule(localContext, 326, OpenSearchPPLParser.RULE_singleFieldRelevanceFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1806;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 383)) & ~0x1F) === 0 && ((1 << (_la - 383)) & 15) !== 0))) {
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
        this.enterRule(localContext, 328, OpenSearchPPLParser.RULE_multiFieldRelevanceFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1808;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 387)) & ~0x1F) === 0 && ((1 << (_la - 387)) & 7) !== 0))) {
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
        this.enterRule(localContext, 330, OpenSearchPPLParser.RULE_literalValue);
        try {
            this.state = 1818;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 173, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1810;
                this.intervalLiteral();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1811;
                this.stringLiteral();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1812;
                this.integerLiteral();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1813;
                this.decimalLiteral();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1814;
                this.doubleLiteral();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1815;
                this.floatLiteral();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1816;
                this.booleanLiteral();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1817;
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
        this.enterRule(localContext, 332, OpenSearchPPLParser.RULE_intervalLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1820;
            this.match(OpenSearchPPLParser.INTERVAL);
            this.state = 1821;
            this.valueExpression(0);
            this.state = 1822;
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
        this.enterRule(localContext, 334, OpenSearchPPLParser.RULE_stringLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1824;
            _la = this.tokenStream.LA(1);
            if(!(_la === 456 || _la === 457)) {
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
        this.enterRule(localContext, 336, OpenSearchPPLParser.RULE_integerLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1827;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 173 || _la === 174) {
                {
                this.state = 1826;
                _la = this.tokenStream.LA(1);
                if(!(_la === 173 || _la === 174)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 1829;
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
        this.enterRule(localContext, 338, OpenSearchPPLParser.RULE_decimalLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1832;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 173 || _la === 174) {
                {
                this.state = 1831;
                _la = this.tokenStream.LA(1);
                if(!(_la === 173 || _la === 174)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 1834;
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
        this.enterRule(localContext, 340, OpenSearchPPLParser.RULE_doubleLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1837;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 173 || _la === 174) {
                {
                this.state = 1836;
                _la = this.tokenStream.LA(1);
                if(!(_la === 173 || _la === 174)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 1839;
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
        this.enterRule(localContext, 342, OpenSearchPPLParser.RULE_floatLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1842;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 173 || _la === 174) {
                {
                this.state = 1841;
                _la = this.tokenStream.LA(1);
                if(!(_la === 173 || _la === 174)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 1844;
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
        this.enterRule(localContext, 344, OpenSearchPPLParser.RULE_booleanLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1846;
            _la = this.tokenStream.LA(1);
            if(!(_la === 117 || _la === 118)) {
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
        this.enterRule(localContext, 346, OpenSearchPPLParser.RULE_datetimeLiteral);
        try {
            this.state = 1851;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.DATE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1848;
                this.dateLiteral();
                }
                break;
            case OpenSearchPPLParser.TIME:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1849;
                this.timeLiteral();
                }
                break;
            case OpenSearchPPLParser.TIMESTAMP:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1850;
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
        this.enterRule(localContext, 348, OpenSearchPPLParser.RULE_dateLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1853;
            this.match(OpenSearchPPLParser.DATE);
            this.state = 1854;
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
        this.enterRule(localContext, 350, OpenSearchPPLParser.RULE_timeLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1856;
            this.match(OpenSearchPPLParser.TIME);
            this.state = 1857;
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
        this.enterRule(localContext, 352, OpenSearchPPLParser.RULE_timestampLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1859;
            this.match(OpenSearchPPLParser.TIMESTAMP);
            this.state = 1860;
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
        this.enterRule(localContext, 354, OpenSearchPPLParser.RULE_intervalUnit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1862;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 451728879) !== 0))) {
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
        this.enterRule(localContext, 356, OpenSearchPPLParser.RULE_timespanUnit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1864;
            _la = this.tokenStream.LA(1);
            if(!(_la === 65 || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 174612545) !== 0) || ((((_la - 427)) & ~0x1F) === 0 && ((1 << (_la - 427)) & 2097151) !== 0))) {
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
        this.enterRule(localContext, 358, OpenSearchPPLParser.RULE_valueList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1866;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1867;
            this.literalValue();
            this.state = 1872;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 164) {
                {
                {
                this.state = 1868;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1869;
                this.literalValue();
                }
                }
                this.state = 1874;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1875;
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
        this.enterRule(localContext, 360, OpenSearchPPLParser.RULE_qualifiedName);
        try {
            let alternative: number;
            localContext = new IdentsAsQualifiedNameContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1877;
            this.ident();
            this.state = 1882;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 180, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1878;
                    this.match(OpenSearchPPLParser.DOT);
                    this.state = 1879;
                    this.ident();
                    }
                    }
                }
                this.state = 1884;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 180, this.context);
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
        this.enterRule(localContext, 362, OpenSearchPPLParser.RULE_tableQualifiedName);
        try {
            let alternative: number;
            localContext = new IdentsAsTableQualifiedNameContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1885;
            this.tableIdent();
            this.state = 1890;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 181, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1886;
                    this.match(OpenSearchPPLParser.DOT);
                    this.state = 1887;
                    this.ident();
                    }
                    }
                }
                this.state = 1892;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 181, this.context);
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
        this.enterRule(localContext, 364, OpenSearchPPLParser.RULE_wcQualifiedName);
        try {
            let alternative: number;
            localContext = new IdentsAsWildcardQualifiedNameContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1893;
            this.wildcard();
            this.state = 1898;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 182, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1894;
                    this.match(OpenSearchPPLParser.DOT);
                    this.state = 1895;
                    this.wildcard();
                    }
                    }
                }
                this.state = 1900;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 182, this.context);
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
        this.enterRule(localContext, 366, OpenSearchPPLParser.RULE_identifierSeq);
        let _la: number;
        try {
            this.state = 1920;
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
            case OpenSearchPPLParser.REX:
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
                this.state = 1901;
                this.qualifiedName();
                this.state = 1906;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 164) {
                    {
                    {
                    this.state = 1902;
                    this.match(OpenSearchPPLParser.COMMA);
                    this.state = 1903;
                    this.qualifiedName();
                    }
                    }
                    this.state = 1908;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            case OpenSearchPPLParser.LT_PRTHS:
                localContext = new IdentsAsQualifiedNameSeqContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1909;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1910;
                this.qualifiedName();
                this.state = 1915;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 164) {
                    {
                    {
                    this.state = 1911;
                    this.match(OpenSearchPPLParser.COMMA);
                    this.state = 1912;
                    this.qualifiedName();
                    }
                    }
                    this.state = 1917;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1918;
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
        this.enterRule(localContext, 368, OpenSearchPPLParser.RULE_ident);
        let _la: number;
        try {
            this.state = 1932;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.DOT:
            case OpenSearchPPLParser.ID:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1923;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 165) {
                    {
                    this.state = 1922;
                    this.match(OpenSearchPPLParser.DOT);
                    }
                }

                this.state = 1925;
                this.match(OpenSearchPPLParser.ID);
                }
                break;
            case OpenSearchPPLParser.BACKTICK:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1926;
                this.match(OpenSearchPPLParser.BACKTICK);
                this.state = 1927;
                this.ident();
                this.state = 1928;
                this.match(OpenSearchPPLParser.BACKTICK);
                }
                break;
            case OpenSearchPPLParser.BQUOTA_STRING:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1930;
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
            case OpenSearchPPLParser.REX:
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
                this.state = 1931;
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
        this.enterRule(localContext, 370, OpenSearchPPLParser.RULE_tableIdent);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1935;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 450) {
                {
                this.state = 1934;
                this.match(OpenSearchPPLParser.CLUSTER);
                }
            }

            this.state = 1937;
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
        this.enterRule(localContext, 372, OpenSearchPPLParser.RULE_wildcard);
        let _la: number;
        try {
            let alternative: number;
            this.state = 1962;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 191, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1939;
                this.ident();
                this.state = 1944;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 189, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1940;
                        this.match(OpenSearchPPLParser.MODULE);
                        this.state = 1941;
                        this.ident();
                        }
                        }
                    }
                    this.state = 1946;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 189, this.context);
                }
                this.state = 1948;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 177) {
                    {
                    this.state = 1947;
                    this.match(OpenSearchPPLParser.MODULE);
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1950;
                this.match(OpenSearchPPLParser.SINGLE_QUOTE);
                this.state = 1951;
                this.wildcard();
                this.state = 1952;
                this.match(OpenSearchPPLParser.SINGLE_QUOTE);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1954;
                this.match(OpenSearchPPLParser.DOUBLE_QUOTE);
                this.state = 1955;
                this.wildcard();
                this.state = 1956;
                this.match(OpenSearchPPLParser.DOUBLE_QUOTE);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1958;
                this.match(OpenSearchPPLParser.BACKTICK);
                this.state = 1959;
                this.wildcard();
                this.state = 1960;
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
        this.enterRule(localContext, 374, OpenSearchPPLParser.RULE_keywordsCanBeId);
        try {
            this.state = 2075;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 192, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1964;
                this.match(OpenSearchPPLParser.D);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1965;
                this.timespanUnit();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1966;
                this.match(OpenSearchPPLParser.SPAN);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1967;
                this.evalFunctionName();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1968;
                this.jsonFunctionName();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1969;
                this.relevanceArgName();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1970;
                this.intervalUnit();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1971;
                this.trendlineType();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1972;
                this.singleFieldRelevanceFunctionName();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1973;
                this.multiFieldRelevanceFunctionName();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1974;
                this.commandName();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 1975;
                this.collectionFunctionName();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 1976;
                this.comparisonOperator();
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 1977;
                this.explainMode();
                }
                break;
            case 15:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 1978;
                this.match(OpenSearchPPLParser.CASE);
                }
                break;
            case 16:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 1979;
                this.match(OpenSearchPPLParser.ELSE);
                }
                break;
            case 17:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 1980;
                this.match(OpenSearchPPLParser.IN);
                }
                break;
            case 18:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 1981;
                this.match(OpenSearchPPLParser.ARROW);
                }
                break;
            case 19:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 1982;
                this.match(OpenSearchPPLParser.BETWEEN);
                }
                break;
            case 20:
                this.enterOuterAlt(localContext, 20);
                {
                this.state = 1983;
                this.match(OpenSearchPPLParser.EXISTS);
                }
                break;
            case 21:
                this.enterOuterAlt(localContext, 21);
                {
                this.state = 1984;
                this.match(OpenSearchPPLParser.SOURCE);
                }
                break;
            case 22:
                this.enterOuterAlt(localContext, 22);
                {
                this.state = 1985;
                this.match(OpenSearchPPLParser.INDEX);
                }
                break;
            case 23:
                this.enterOuterAlt(localContext, 23);
                {
                this.state = 1986;
                this.match(OpenSearchPPLParser.A);
                }
                break;
            case 24:
                this.enterOuterAlt(localContext, 24);
                {
                this.state = 1987;
                this.match(OpenSearchPPLParser.ASC);
                }
                break;
            case 25:
                this.enterOuterAlt(localContext, 25);
                {
                this.state = 1988;
                this.match(OpenSearchPPLParser.DESC);
                }
                break;
            case 26:
                this.enterOuterAlt(localContext, 26);
                {
                this.state = 1989;
                this.match(OpenSearchPPLParser.DATASOURCES);
                }
                break;
            case 27:
                this.enterOuterAlt(localContext, 27);
                {
                this.state = 1990;
                this.match(OpenSearchPPLParser.FROM);
                }
                break;
            case 28:
                this.enterOuterAlt(localContext, 28);
                {
                this.state = 1991;
                this.match(OpenSearchPPLParser.PATTERN);
                }
                break;
            case 29:
                this.enterOuterAlt(localContext, 29);
                {
                this.state = 1992;
                this.match(OpenSearchPPLParser.NEW_FIELD);
                }
                break;
            case 30:
                this.enterOuterAlt(localContext, 30);
                {
                this.state = 1993;
                this.match(OpenSearchPPLParser.METHOD);
                }
                break;
            case 31:
                this.enterOuterAlt(localContext, 31);
                {
                this.state = 1994;
                this.match(OpenSearchPPLParser.VARIABLE_COUNT_THRESHOLD);
                }
                break;
            case 32:
                this.enterOuterAlt(localContext, 32);
                {
                this.state = 1995;
                this.match(OpenSearchPPLParser.FREQUENCY_THRESHOLD_PERCENTAGE);
                }
                break;
            case 33:
                this.enterOuterAlt(localContext, 33);
                {
                this.state = 1996;
                this.match(OpenSearchPPLParser.MAX_SAMPLE_COUNT);
                }
                break;
            case 34:
                this.enterOuterAlt(localContext, 34);
                {
                this.state = 1997;
                this.match(OpenSearchPPLParser.BUFFER_LIMIT);
                }
                break;
            case 35:
                this.enterOuterAlt(localContext, 35);
                {
                this.state = 1998;
                this.match(OpenSearchPPLParser.WITH);
                }
                break;
            case 36:
                this.enterOuterAlt(localContext, 36);
                {
                this.state = 1999;
                this.match(OpenSearchPPLParser.REGEX);
                }
                break;
            case 37:
                this.enterOuterAlt(localContext, 37);
                {
                this.state = 2000;
                this.match(OpenSearchPPLParser.PUNCT);
                }
                break;
            case 38:
                this.enterOuterAlt(localContext, 38);
                {
                this.state = 2001;
                this.match(OpenSearchPPLParser.USING);
                }
                break;
            case 39:
                this.enterOuterAlt(localContext, 39);
                {
                this.state = 2002;
                this.match(OpenSearchPPLParser.CAST);
                }
                break;
            case 40:
                this.enterOuterAlt(localContext, 40);
                {
                this.state = 2003;
                this.match(OpenSearchPPLParser.GET_FORMAT);
                }
                break;
            case 41:
                this.enterOuterAlt(localContext, 41);
                {
                this.state = 2004;
                this.match(OpenSearchPPLParser.EXTRACT);
                }
                break;
            case 42:
                this.enterOuterAlt(localContext, 42);
                {
                this.state = 2005;
                this.match(OpenSearchPPLParser.INTERVAL);
                }
                break;
            case 43:
                this.enterOuterAlt(localContext, 43);
                {
                this.state = 2006;
                this.match(OpenSearchPPLParser.PLUS);
                }
                break;
            case 44:
                this.enterOuterAlt(localContext, 44);
                {
                this.state = 2007;
                this.match(OpenSearchPPLParser.MINUS);
                }
                break;
            case 45:
                this.enterOuterAlt(localContext, 45);
                {
                this.state = 2008;
                this.match(OpenSearchPPLParser.OVERRIDE);
                }
                break;
            case 46:
                this.enterOuterAlt(localContext, 46);
                {
                this.state = 2009;
                this.match(OpenSearchPPLParser.AUTO);
                }
                break;
            case 47:
                this.enterOuterAlt(localContext, 47);
                {
                this.state = 2010;
                this.match(OpenSearchPPLParser.STR);
                }
                break;
            case 48:
                this.enterOuterAlt(localContext, 48);
                {
                this.state = 2011;
                this.match(OpenSearchPPLParser.IP);
                }
                break;
            case 49:
                this.enterOuterAlt(localContext, 49);
                {
                this.state = 2012;
                this.match(OpenSearchPPLParser.NUM);
                }
                break;
            case 50:
                this.enterOuterAlt(localContext, 50);
                {
                this.state = 2013;
                this.match(OpenSearchPPLParser.KEEPEMPTY);
                }
                break;
            case 51:
                this.enterOuterAlt(localContext, 51);
                {
                this.state = 2014;
                this.match(OpenSearchPPLParser.CONSECUTIVE);
                }
                break;
            case 52:
                this.enterOuterAlt(localContext, 52);
                {
                this.state = 2015;
                this.match(OpenSearchPPLParser.DEDUP_SPLITVALUES);
                }
                break;
            case 53:
                this.enterOuterAlt(localContext, 53);
                {
                this.state = 2016;
                this.match(OpenSearchPPLParser.PARTITIONS);
                }
                break;
            case 54:
                this.enterOuterAlt(localContext, 54);
                {
                this.state = 2017;
                this.match(OpenSearchPPLParser.ALLNUM);
                }
                break;
            case 55:
                this.enterOuterAlt(localContext, 55);
                {
                this.state = 2018;
                this.match(OpenSearchPPLParser.DELIM);
                }
                break;
            case 56:
                this.enterOuterAlt(localContext, 56);
                {
                this.state = 2019;
                this.match(OpenSearchPPLParser.CENTROIDS);
                }
                break;
            case 57:
                this.enterOuterAlt(localContext, 57);
                {
                this.state = 2020;
                this.match(OpenSearchPPLParser.ITERATIONS);
                }
                break;
            case 58:
                this.enterOuterAlt(localContext, 58);
                {
                this.state = 2021;
                this.match(OpenSearchPPLParser.DISTANCE_TYPE);
                }
                break;
            case 59:
                this.enterOuterAlt(localContext, 59);
                {
                this.state = 2022;
                this.match(OpenSearchPPLParser.NUMBER_OF_TREES);
                }
                break;
            case 60:
                this.enterOuterAlt(localContext, 60);
                {
                this.state = 2023;
                this.match(OpenSearchPPLParser.SHINGLE_SIZE);
                }
                break;
            case 61:
                this.enterOuterAlt(localContext, 61);
                {
                this.state = 2024;
                this.match(OpenSearchPPLParser.SAMPLE_SIZE);
                }
                break;
            case 62:
                this.enterOuterAlt(localContext, 62);
                {
                this.state = 2025;
                this.match(OpenSearchPPLParser.OUTPUT_AFTER);
                }
                break;
            case 63:
                this.enterOuterAlt(localContext, 63);
                {
                this.state = 2026;
                this.match(OpenSearchPPLParser.TIME_DECAY);
                }
                break;
            case 64:
                this.enterOuterAlt(localContext, 64);
                {
                this.state = 2027;
                this.match(OpenSearchPPLParser.ANOMALY_RATE);
                }
                break;
            case 65:
                this.enterOuterAlt(localContext, 65);
                {
                this.state = 2028;
                this.match(OpenSearchPPLParser.CATEGORY_FIELD);
                }
                break;
            case 66:
                this.enterOuterAlt(localContext, 66);
                {
                this.state = 2029;
                this.match(OpenSearchPPLParser.TIME_FIELD);
                }
                break;
            case 67:
                this.enterOuterAlt(localContext, 67);
                {
                this.state = 2030;
                this.match(OpenSearchPPLParser.TIME_ZONE);
                }
                break;
            case 68:
                this.enterOuterAlt(localContext, 68);
                {
                this.state = 2031;
                this.match(OpenSearchPPLParser.TRAINING_DATA_SIZE);
                }
                break;
            case 69:
                this.enterOuterAlt(localContext, 69);
                {
                this.state = 2032;
                this.match(OpenSearchPPLParser.ANOMALY_SCORE_THRESHOLD);
                }
                break;
            case 70:
                this.enterOuterAlt(localContext, 70);
                {
                this.state = 2033;
                this.match(OpenSearchPPLParser.COUNTFIELD);
                }
                break;
            case 71:
                this.enterOuterAlt(localContext, 71);
                {
                this.state = 2034;
                this.match(OpenSearchPPLParser.SHOWCOUNT);
                }
                break;
            case 72:
                this.enterOuterAlt(localContext, 72);
                {
                this.state = 2035;
                this.match(OpenSearchPPLParser.PATH);
                }
                break;
            case 73:
                this.enterOuterAlt(localContext, 73);
                {
                this.state = 2036;
                this.match(OpenSearchPPLParser.INPUT);
                }
                break;
            case 74:
                this.enterOuterAlt(localContext, 74);
                {
                this.state = 2037;
                this.match(OpenSearchPPLParser.OUTPUT);
                }
                break;
            case 75:
                this.enterOuterAlt(localContext, 75);
                {
                this.state = 2038;
                this.statsFunctionName();
                }
                break;
            case 76:
                this.enterOuterAlt(localContext, 76);
                {
                this.state = 2039;
                this.windowFunctionName();
                }
                break;
            case 77:
                this.enterOuterAlt(localContext, 77);
                {
                this.state = 2040;
                this.match(OpenSearchPPLParser.DISTINCT_COUNT);
                }
                break;
            case 78:
                this.enterOuterAlt(localContext, 78);
                {
                this.state = 2041;
                this.match(OpenSearchPPLParser.DISTINCT_COUNT_APPROX);
                }
                break;
            case 79:
                this.enterOuterAlt(localContext, 79);
                {
                this.state = 2042;
                this.match(OpenSearchPPLParser.ESTDC);
                }
                break;
            case 80:
                this.enterOuterAlt(localContext, 80);
                {
                this.state = 2043;
                this.match(OpenSearchPPLParser.ESTDC_ERROR);
                }
                break;
            case 81:
                this.enterOuterAlt(localContext, 81);
                {
                this.state = 2044;
                this.match(OpenSearchPPLParser.MEAN);
                }
                break;
            case 82:
                this.enterOuterAlt(localContext, 82);
                {
                this.state = 2045;
                this.match(OpenSearchPPLParser.MEDIAN);
                }
                break;
            case 83:
                this.enterOuterAlt(localContext, 83);
                {
                this.state = 2046;
                this.match(OpenSearchPPLParser.MODE);
                }
                break;
            case 84:
                this.enterOuterAlt(localContext, 84);
                {
                this.state = 2047;
                this.match(OpenSearchPPLParser.RANGE);
                }
                break;
            case 85:
                this.enterOuterAlt(localContext, 85);
                {
                this.state = 2048;
                this.match(OpenSearchPPLParser.STDEV);
                }
                break;
            case 86:
                this.enterOuterAlt(localContext, 86);
                {
                this.state = 2049;
                this.match(OpenSearchPPLParser.STDEVP);
                }
                break;
            case 87:
                this.enterOuterAlt(localContext, 87);
                {
                this.state = 2050;
                this.match(OpenSearchPPLParser.SUMSQ);
                }
                break;
            case 88:
                this.enterOuterAlt(localContext, 88);
                {
                this.state = 2051;
                this.match(OpenSearchPPLParser.VAR_SAMP);
                }
                break;
            case 89:
                this.enterOuterAlt(localContext, 89);
                {
                this.state = 2052;
                this.match(OpenSearchPPLParser.VAR_POP);
                }
                break;
            case 90:
                this.enterOuterAlt(localContext, 90);
                {
                this.state = 2053;
                this.match(OpenSearchPPLParser.TAKE);
                }
                break;
            case 91:
                this.enterOuterAlt(localContext, 91);
                {
                this.state = 2054;
                this.match(OpenSearchPPLParser.LIST);
                }
                break;
            case 92:
                this.enterOuterAlt(localContext, 92);
                {
                this.state = 2055;
                this.match(OpenSearchPPLParser.VALUES);
                }
                break;
            case 93:
                this.enterOuterAlt(localContext, 93);
                {
                this.state = 2056;
                this.match(OpenSearchPPLParser.PER_DAY);
                }
                break;
            case 94:
                this.enterOuterAlt(localContext, 94);
                {
                this.state = 2057;
                this.match(OpenSearchPPLParser.PER_HOUR);
                }
                break;
            case 95:
                this.enterOuterAlt(localContext, 95);
                {
                this.state = 2058;
                this.match(OpenSearchPPLParser.PER_MINUTE);
                }
                break;
            case 96:
                this.enterOuterAlt(localContext, 96);
                {
                this.state = 2059;
                this.match(OpenSearchPPLParser.PER_SECOND);
                }
                break;
            case 97:
                this.enterOuterAlt(localContext, 97);
                {
                this.state = 2060;
                this.match(OpenSearchPPLParser.RATE);
                }
                break;
            case 98:
                this.enterOuterAlt(localContext, 98);
                {
                this.state = 2061;
                this.match(OpenSearchPPLParser.SPARKLINE);
                }
                break;
            case 99:
                this.enterOuterAlt(localContext, 99);
                {
                this.state = 2062;
                this.match(OpenSearchPPLParser.C);
                }
                break;
            case 100:
                this.enterOuterAlt(localContext, 100);
                {
                this.state = 2063;
                this.match(OpenSearchPPLParser.DC);
                }
                break;
            case 101:
                this.enterOuterAlt(localContext, 101);
                {
                this.state = 2064;
                this.match(OpenSearchPPLParser.OUTER);
                }
                break;
            case 102:
                this.enterOuterAlt(localContext, 102);
                {
                this.state = 2065;
                this.match(OpenSearchPPLParser.INNER);
                }
                break;
            case 103:
                this.enterOuterAlt(localContext, 103);
                {
                this.state = 2066;
                this.match(OpenSearchPPLParser.CROSS);
                }
                break;
            case 104:
                this.enterOuterAlt(localContext, 104);
                {
                this.state = 2067;
                this.match(OpenSearchPPLParser.LEFT);
                }
                break;
            case 105:
                this.enterOuterAlt(localContext, 105);
                {
                this.state = 2068;
                this.match(OpenSearchPPLParser.RIGHT);
                }
                break;
            case 106:
                this.enterOuterAlt(localContext, 106);
                {
                this.state = 2069;
                this.match(OpenSearchPPLParser.FULL);
                }
                break;
            case 107:
                this.enterOuterAlt(localContext, 107);
                {
                this.state = 2070;
                this.match(OpenSearchPPLParser.SEMI);
                }
                break;
            case 108:
                this.enterOuterAlt(localContext, 108);
                {
                this.state = 2071;
                this.match(OpenSearchPPLParser.ANTI);
                }
                break;
            case 109:
                this.enterOuterAlt(localContext, 109);
                {
                this.state = 2072;
                this.match(OpenSearchPPLParser.LEFT_HINT);
                }
                break;
            case 110:
                this.enterOuterAlt(localContext, 110);
                {
                this.state = 2073;
                this.match(OpenSearchPPLParser.RIGHT_HINT);
                }
                break;
            case 111:
                this.enterOuterAlt(localContext, 111);
                {
                this.state = 2074;
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
        case 106:
            return this.logicalExpression_sempred(localContext as LogicalExpressionContext, predIndex);
        case 107:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        case 108:
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
        4,1,461,2078,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
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
        7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,7,180,
        2,181,7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,2,186,
        7,186,2,187,7,187,1,0,3,0,378,8,0,1,0,1,0,1,1,1,1,3,1,384,8,1,1,
        2,1,2,1,2,5,2,389,8,2,10,2,12,2,392,9,2,1,3,1,3,3,3,396,8,3,1,3,
        1,3,1,4,1,4,1,5,1,5,1,5,5,5,405,8,5,10,5,12,5,408,9,5,1,6,1,6,1,
        6,3,6,413,8,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
        7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
        7,1,7,1,7,1,7,3,7,447,8,7,1,8,1,8,1,9,3,9,452,8,9,1,9,5,9,455,8,
        9,10,9,12,9,458,9,9,1,9,1,9,5,9,462,8,9,10,9,12,9,465,9,9,1,10,1,
        10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,13,1,14,1,14,1,
        14,1,15,3,15,483,8,15,1,15,1,15,1,16,1,16,3,16,489,8,16,1,16,5,16,
        492,8,16,10,16,12,16,495,9,16,1,17,1,17,1,17,3,17,500,8,17,1,17,
        5,17,503,8,17,10,17,12,17,506,9,17,1,18,1,18,1,18,1,18,3,18,512,
        8,18,1,18,1,18,1,18,3,18,517,8,18,1,18,1,18,1,18,3,18,522,8,18,1,
        18,1,18,1,18,5,18,527,8,18,10,18,12,18,530,9,18,1,18,3,18,533,8,
        18,1,18,1,18,1,18,3,18,538,8,18,1,19,1,19,1,19,1,19,5,19,544,8,19,
        10,19,12,19,547,9,19,1,19,3,19,550,8,19,1,20,1,20,3,20,554,8,20,
        1,20,1,20,1,20,1,20,3,20,560,8,20,1,20,1,20,1,20,3,20,565,8,20,1,
        21,1,21,3,21,569,8,21,1,21,1,21,3,21,573,8,21,1,22,1,22,1,23,1,23,
        5,23,579,8,23,10,23,12,23,582,9,23,1,23,1,23,1,23,3,23,587,8,23,
        1,24,1,24,1,24,1,24,3,24,593,8,24,1,24,3,24,596,8,24,1,25,1,25,1,
        25,1,25,1,25,1,25,1,25,3,25,605,8,25,3,25,607,8,25,1,26,1,26,1,26,
        1,26,3,26,613,8,26,1,27,1,27,1,27,1,27,5,27,619,8,27,10,27,12,27,
        622,9,27,1,28,1,28,3,28,626,8,28,1,28,1,28,3,28,630,8,28,1,29,1,
        29,1,29,5,29,635,8,29,10,29,12,29,638,9,29,1,29,1,29,3,29,642,8,
        29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,3,30,654,8,
        30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,3,30,665,8,30,1,
        31,1,31,1,31,3,31,670,8,31,1,32,1,32,3,32,674,8,32,1,32,1,32,1,32,
        1,32,1,32,3,32,681,8,32,1,33,1,33,1,34,1,34,3,34,687,8,34,1,34,1,
        34,1,34,3,34,692,8,34,1,34,1,34,1,34,3,34,697,8,34,1,34,1,34,3,34,
        701,8,34,1,35,1,35,3,35,705,8,35,1,35,1,35,1,35,3,35,710,8,35,1,
        35,1,35,1,35,3,35,715,8,35,1,35,1,35,3,35,719,8,35,1,36,1,36,1,36,
        1,36,1,37,1,37,1,37,1,37,1,38,1,38,5,38,731,8,38,10,38,12,38,734,
        9,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,3,39,744,8,39,1,39,
        3,39,747,8,39,1,40,1,40,1,40,5,40,752,8,40,10,40,12,40,755,9,40,
        1,41,1,41,3,41,759,8,41,1,42,1,42,3,42,763,8,42,1,42,1,42,1,43,1,
        43,1,43,1,44,1,44,1,44,1,44,1,45,1,45,1,45,1,46,1,46,1,46,1,46,5,
        46,781,8,46,10,46,12,46,784,9,46,1,46,1,46,5,46,788,8,46,10,46,12,
        46,791,9,46,1,47,1,47,1,47,1,47,1,47,1,47,3,47,799,8,47,1,48,1,48,
        1,49,1,49,1,49,3,49,806,8,49,1,49,1,49,1,49,3,49,811,8,49,1,49,1,
        49,1,49,3,49,816,8,49,1,49,1,49,1,49,3,49,821,8,49,1,49,1,49,1,49,
        3,49,826,8,49,1,49,1,49,1,49,3,49,831,8,49,1,49,5,49,834,8,49,10,
        49,12,49,837,9,49,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,3,
        50,848,8,50,1,51,1,51,1,52,1,52,1,53,1,53,1,53,1,53,1,53,3,53,859,
        8,53,1,54,1,54,1,54,5,54,864,8,54,10,54,12,54,867,9,54,1,55,1,55,
        1,55,5,55,872,8,55,10,55,12,55,875,9,55,1,56,1,56,1,56,3,56,880,
        8,56,1,57,1,57,1,57,1,57,3,57,886,8,57,1,58,1,58,1,58,1,58,3,58,
        892,8,58,1,59,1,59,1,59,1,59,5,59,898,8,59,10,59,12,59,901,9,59,
        1,60,1,60,1,60,1,60,1,61,1,61,1,61,3,61,910,8,61,1,61,1,61,5,61,
        914,8,61,10,61,12,61,917,9,61,1,62,1,62,1,62,1,62,1,62,1,62,1,62,
        1,62,3,62,927,8,62,1,63,1,63,1,64,1,64,1,64,1,64,3,64,935,8,64,1,
        65,1,65,1,65,1,65,3,65,941,8,65,1,66,1,66,1,66,1,66,3,66,947,8,66,
        1,66,1,66,1,66,1,66,5,66,953,8,66,10,66,12,66,956,9,66,1,66,1,66,
        1,67,1,67,1,67,3,67,963,8,67,1,67,1,67,5,67,967,8,67,10,67,12,67,
        970,9,67,1,67,1,67,1,68,1,68,5,68,976,8,68,10,68,12,68,979,9,68,
        1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,69,3,69,990,8,69,1,70,
        1,70,5,70,994,8,70,10,70,12,70,997,9,70,1,71,1,71,1,71,1,71,1,71,
        1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,
        1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,
        1,71,1,71,1,71,1,71,1,71,3,71,1035,8,71,1,72,1,72,5,72,1039,8,72,
        10,72,12,72,1042,9,72,1,73,1,73,1,73,1,73,1,74,1,74,1,74,1,74,1,
        74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,
        74,3,74,1066,8,74,1,75,1,75,1,75,1,75,1,75,3,75,1073,8,75,1,75,3,
        75,1076,8,75,1,76,1,76,1,76,5,76,1081,8,76,10,76,12,76,1084,9,76,
        1,76,1,76,3,76,1088,8,76,1,77,1,77,1,77,1,77,3,77,1094,8,77,1,77,
        1,77,1,78,1,78,1,78,5,78,1101,8,78,10,78,12,78,1104,9,78,1,79,3,
        79,1107,8,79,1,79,1,79,1,80,1,80,1,80,5,80,1114,8,80,10,80,12,80,
        1117,9,80,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,3,81,1127,8,81,
        1,82,1,82,1,82,1,82,3,82,1133,8,82,1,82,3,82,1136,8,82,1,82,1,82,
        1,83,3,83,1141,8,83,1,83,1,83,1,83,3,83,1146,8,83,1,83,1,83,3,83,
        1150,8,83,1,83,1,83,3,83,1154,8,83,1,83,3,83,1157,8,83,1,83,1,83,
        3,83,1161,8,83,1,83,3,83,1164,8,83,1,84,1,84,1,84,3,84,1169,8,84,
        1,84,3,84,1172,8,84,1,84,1,84,1,84,3,84,1177,8,84,1,85,1,85,1,85,
        1,86,1,86,3,86,1184,8,86,1,86,5,86,1187,8,86,10,86,12,86,1190,9,
        86,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,3,87,1202,8,
        87,1,88,1,88,1,88,1,88,1,89,1,89,1,89,1,90,1,90,1,90,1,90,1,90,1,
        90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,3,90,1225,8,90,1,91,1,
        91,1,91,3,91,1230,8,91,1,92,1,92,1,92,1,92,1,92,1,92,3,92,1238,8,
        92,1,92,1,92,1,93,1,93,1,93,5,93,1245,8,93,10,93,12,93,1248,9,93,
        1,94,1,94,1,94,1,94,1,95,1,95,1,95,3,95,1257,8,95,1,96,1,96,1,96,
        1,96,1,96,1,97,1,97,3,97,1266,8,97,1,98,1,98,1,99,1,99,1,99,3,99,
        1273,8,99,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,
        1,100,1,100,1,100,1,100,3,100,1288,8,100,1,100,1,100,1,100,1,100,
        1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,3,100,1303,
        8,100,1,101,1,101,1,102,1,102,1,102,1,102,1,102,3,102,1312,8,102,
        1,102,1,102,1,103,1,103,1,103,1,103,1,103,3,103,1321,8,103,1,103,
        1,103,1,104,1,104,1,104,1,104,1,104,1,104,1,104,3,104,1332,8,104,
        1,104,1,104,1,105,1,105,1,105,1,105,3,105,1340,8,105,1,106,1,106,
        1,106,1,106,3,106,1346,8,106,1,106,1,106,1,106,1,106,1,106,1,106,
        1,106,1,106,1,106,5,106,1357,8,106,10,106,12,106,1360,9,106,1,107,
        1,107,1,107,3,107,1365,8,107,1,107,1,107,1,107,1,107,1,107,1,107,
        3,107,1373,8,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,3,107,
        1382,8,107,1,107,1,107,5,107,1386,8,107,10,107,12,107,1389,9,107,
        1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,
        1,108,5,108,1403,8,108,10,108,12,108,1406,9,108,1,108,1,108,3,108,
        1410,8,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,
        1,108,1,108,1,108,1,108,1,108,1,108,3,108,1427,8,108,1,108,1,108,
        1,108,1,108,1,108,1,108,1,108,1,108,3,108,1437,8,108,1,108,1,108,
        1,108,1,108,1,108,5,108,1444,8,108,10,108,12,108,1447,9,108,1,109,
        1,109,1,109,1,109,1,109,1,110,1,110,1,110,1,110,1,110,1,110,1,110,
        3,110,1461,8,110,1,111,1,111,1,111,1,111,1,111,1,111,1,111,1,112,
        1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,5,112,1480,
        8,112,10,112,12,112,1483,9,112,1,112,1,112,3,112,1487,8,112,1,112,
        1,112,1,113,1,113,3,113,1493,8,113,1,114,1,114,1,114,1,114,1,114,
        1,114,1,114,5,114,1502,8,114,10,114,12,114,1505,9,114,1,114,1,114,
        1,115,1,115,1,115,1,115,1,115,1,115,5,115,1515,8,115,10,115,12,115,
        1518,9,115,1,115,1,115,1,115,3,115,1523,8,115,1,115,1,115,1,115,
        5,115,1528,8,115,10,115,12,115,1531,9,115,1,115,1,115,1,116,1,116,
        3,116,1537,8,116,1,117,1,117,1,117,1,117,1,117,1,118,1,118,1,118,
        5,118,1547,8,118,10,118,12,118,1550,9,118,1,119,3,119,1553,8,119,
        1,119,1,119,1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,
        1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,
        1,120,3,120,1578,8,120,1,121,1,121,1,122,1,122,1,123,1,123,3,123,
        1586,8,123,1,124,1,124,3,124,1590,8,124,1,125,1,125,1,125,1,125,
        1,125,1,126,1,126,1,126,1,126,1,126,1,126,1,126,1,127,1,127,1,127,
        1,127,1,127,1,127,1,127,1,127,1,127,1,127,1,127,1,127,3,127,1616,
        8,127,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,
        1,128,3,128,1629,8,128,1,129,1,129,1,129,5,129,1634,8,129,10,129,
        12,129,1637,9,129,3,129,1639,8,129,1,130,1,130,1,130,5,130,1644,
        8,130,10,130,12,130,1647,9,130,3,130,1649,8,130,1,131,1,131,1,132,
        1,132,1,132,3,132,1656,8,132,1,132,1,132,1,133,1,133,3,133,1662,
        8,133,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,4,134,1672,
        8,134,11,134,12,134,1673,1,134,1,134,1,134,1,134,3,134,1680,8,134,
        1,135,1,135,1,135,1,135,1,136,1,136,1,137,1,137,1,137,1,137,1,137,
        1,137,1,137,1,137,3,137,1696,8,137,1,138,1,138,1,138,1,138,3,138,
        1702,8,138,1,139,1,139,3,139,1706,8,139,1,140,1,140,1,141,1,141,
        3,141,1712,8,141,1,142,1,142,1,142,1,142,1,142,1,142,1,142,1,142,
        1,142,1,142,1,142,1,142,1,142,1,142,1,142,1,142,1,142,1,142,1,142,
        1,142,1,142,1,142,1,142,1,142,1,142,1,142,1,142,1,142,1,142,1,142,
        1,142,1,142,3,142,1746,8,142,1,143,1,143,1,144,1,144,1,145,1,145,
        1,146,1,146,1,147,1,147,1,148,1,148,1,149,1,149,1,149,1,149,1,149,
        1,149,1,149,1,150,1,150,1,151,1,151,1,151,1,151,1,151,1,151,1,151,
        1,152,1,152,1,153,1,153,1,154,1,154,3,154,1782,8,154,1,155,1,155,
        1,155,1,155,1,155,1,155,1,155,1,155,1,155,1,156,1,156,1,157,1,157,
        1,158,1,158,1,159,1,159,1,160,1,160,1,161,1,161,1,162,1,162,1,163,
        1,163,1,164,1,164,1,165,1,165,1,165,1,165,1,165,1,165,1,165,1,165,
        3,165,1819,8,165,1,166,1,166,1,166,1,166,1,167,1,167,1,168,3,168,
        1828,8,168,1,168,1,168,1,169,3,169,1833,8,169,1,169,1,169,1,170,
        3,170,1838,8,170,1,170,1,170,1,171,3,171,1843,8,171,1,171,1,171,
        1,172,1,172,1,173,1,173,1,173,3,173,1852,8,173,1,174,1,174,1,174,
        1,175,1,175,1,175,1,176,1,176,1,176,1,177,1,177,1,178,1,178,1,179,
        1,179,1,179,1,179,5,179,1871,8,179,10,179,12,179,1874,9,179,1,179,
        1,179,1,180,1,180,1,180,5,180,1881,8,180,10,180,12,180,1884,9,180,
        1,181,1,181,1,181,5,181,1889,8,181,10,181,12,181,1892,9,181,1,182,
        1,182,1,182,5,182,1897,8,182,10,182,12,182,1900,9,182,1,183,1,183,
        1,183,5,183,1905,8,183,10,183,12,183,1908,9,183,1,183,1,183,1,183,
        1,183,5,183,1914,8,183,10,183,12,183,1917,9,183,1,183,1,183,3,183,
        1921,8,183,1,184,3,184,1924,8,184,1,184,1,184,1,184,1,184,1,184,
        1,184,1,184,3,184,1933,8,184,1,185,3,185,1936,8,185,1,185,1,185,
        1,186,1,186,1,186,5,186,1943,8,186,10,186,12,186,1946,9,186,1,186,
        3,186,1949,8,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,3,186,1963,8,186,1,187,1,187,1,187,1,187,
        1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,
        1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,
        1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,
        1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,
        1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,
        1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,
        1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,
        1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,
        1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,
        1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,3,187,2076,8,187,
        1,187,0,3,212,214,216,188,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
        30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,
        74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,
        114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,
        146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,
        178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,
        210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,
        242,244,246,248,250,252,254,256,258,260,262,264,266,268,270,272,
        274,276,278,280,282,284,286,288,290,292,294,296,298,300,302,304,
        306,308,310,312,314,316,318,320,322,324,326,328,330,332,334,336,
        338,340,342,344,346,348,350,352,354,356,358,360,362,364,366,368,
        370,372,374,0,37,1,0,70,73,12,0,2,5,7,8,10,21,23,24,26,26,28,28,
        30,36,38,38,49,49,100,100,153,153,351,351,1,0,173,174,1,0,63,66,
        2,0,166,166,172,172,2,0,23,23,25,25,1,0,39,40,1,0,47,48,2,0,100,
        100,350,350,1,0,78,79,2,0,195,195,228,237,2,0,194,194,227,227,2,
        0,195,196,228,228,7,0,193,194,199,199,201,202,207,207,209,212,214,
        215,219,219,1,0,216,217,1,0,214,215,1,0,175,177,3,0,8,8,97,97,390,
        420,2,0,111,111,361,366,1,0,268,279,1,0,368,377,1,0,280,282,13,0,
        121,123,127,127,129,129,132,132,135,135,137,137,139,140,142,145,
        147,150,283,300,302,303,305,321,324,333,4,0,122,122,290,290,319,
        319,321,321,8,0,123,123,129,129,135,135,137,137,142,142,144,145,
        148,148,150,150,8,0,124,126,128,128,130,131,133,133,138,138,141,
        141,146,146,151,151,1,0,322,323,5,0,120,120,216,217,353,356,358,
        360,367,367,2,0,378,380,382,382,2,0,334,338,340,351,3,0,119,119,
        166,172,353,353,1,0,383,386,1,0,387,389,1,0,456,457,1,0,117,118,
        9,0,123,126,128,131,133,133,135,135,137,138,141,142,144,146,148,
        148,150,151,9,0,65,65,123,123,129,129,136,137,142,142,144,145,148,
        148,150,150,427,447,2341,0,377,1,0,0,0,2,383,1,0,0,0,4,385,1,0,0,
        0,6,393,1,0,0,0,8,399,1,0,0,0,10,401,1,0,0,0,12,412,1,0,0,0,14,446,
        1,0,0,0,16,448,1,0,0,0,18,451,1,0,0,0,20,466,1,0,0,0,22,469,1,0,
        0,0,24,472,1,0,0,0,26,475,1,0,0,0,28,478,1,0,0,0,30,482,1,0,0,0,
        32,486,1,0,0,0,34,496,1,0,0,0,36,507,1,0,0,0,38,539,1,0,0,0,40,551,
        1,0,0,0,42,566,1,0,0,0,44,574,1,0,0,0,46,576,1,0,0,0,48,595,1,0,
        0,0,50,606,1,0,0,0,52,612,1,0,0,0,54,614,1,0,0,0,56,623,1,0,0,0,
        58,631,1,0,0,0,60,664,1,0,0,0,62,669,1,0,0,0,64,680,1,0,0,0,66,682,
        1,0,0,0,68,684,1,0,0,0,70,702,1,0,0,0,72,720,1,0,0,0,74,724,1,0,
        0,0,76,728,1,0,0,0,78,746,1,0,0,0,80,748,1,0,0,0,82,756,1,0,0,0,
        84,760,1,0,0,0,86,766,1,0,0,0,88,769,1,0,0,0,90,773,1,0,0,0,92,776,
        1,0,0,0,94,798,1,0,0,0,96,800,1,0,0,0,98,802,1,0,0,0,100,847,1,0,
        0,0,102,849,1,0,0,0,104,851,1,0,0,0,106,853,1,0,0,0,108,860,1,0,
        0,0,110,868,1,0,0,0,112,876,1,0,0,0,114,885,1,0,0,0,116,887,1,0,
        0,0,118,893,1,0,0,0,120,902,1,0,0,0,122,906,1,0,0,0,124,918,1,0,
        0,0,126,928,1,0,0,0,128,930,1,0,0,0,130,936,1,0,0,0,132,942,1,0,
        0,0,134,959,1,0,0,0,136,973,1,0,0,0,138,989,1,0,0,0,140,991,1,0,
        0,0,142,1034,1,0,0,0,144,1036,1,0,0,0,146,1043,1,0,0,0,148,1065,
        1,0,0,0,150,1075,1,0,0,0,152,1077,1,0,0,0,154,1089,1,0,0,0,156,1097,
        1,0,0,0,158,1106,1,0,0,0,160,1110,1,0,0,0,162,1126,1,0,0,0,164,1128,
        1,0,0,0,166,1163,1,0,0,0,168,1168,1,0,0,0,170,1178,1,0,0,0,172,1181,
        1,0,0,0,174,1201,1,0,0,0,176,1203,1,0,0,0,178,1207,1,0,0,0,180,1224,
        1,0,0,0,182,1226,1,0,0,0,184,1231,1,0,0,0,186,1241,1,0,0,0,188,1249,
        1,0,0,0,190,1253,1,0,0,0,192,1258,1,0,0,0,194,1265,1,0,0,0,196,1267,
        1,0,0,0,198,1269,1,0,0,0,200,1302,1,0,0,0,202,1304,1,0,0,0,204,1306,
        1,0,0,0,206,1315,1,0,0,0,208,1324,1,0,0,0,210,1339,1,0,0,0,212,1345,
        1,0,0,0,214,1364,1,0,0,0,216,1426,1,0,0,0,218,1448,1,0,0,0,220,1460,
        1,0,0,0,222,1462,1,0,0,0,224,1469,1,0,0,0,226,1492,1,0,0,0,228,1494,
        1,0,0,0,230,1508,1,0,0,0,232,1536,1,0,0,0,234,1538,1,0,0,0,236,1543,
        1,0,0,0,238,1552,1,0,0,0,240,1577,1,0,0,0,242,1579,1,0,0,0,244,1581,
        1,0,0,0,246,1585,1,0,0,0,248,1589,1,0,0,0,250,1591,1,0,0,0,252,1596,
        1,0,0,0,254,1615,1,0,0,0,256,1628,1,0,0,0,258,1638,1,0,0,0,260,1648,
        1,0,0,0,262,1650,1,0,0,0,264,1655,1,0,0,0,266,1661,1,0,0,0,268,1679,
        1,0,0,0,270,1681,1,0,0,0,272,1685,1,0,0,0,274,1695,1,0,0,0,276,1701,
        1,0,0,0,278,1705,1,0,0,0,280,1707,1,0,0,0,282,1711,1,0,0,0,284,1745,
        1,0,0,0,286,1747,1,0,0,0,288,1749,1,0,0,0,290,1751,1,0,0,0,292,1753,
        1,0,0,0,294,1755,1,0,0,0,296,1757,1,0,0,0,298,1759,1,0,0,0,300,1766,
        1,0,0,0,302,1768,1,0,0,0,304,1775,1,0,0,0,306,1777,1,0,0,0,308,1781,
        1,0,0,0,310,1783,1,0,0,0,312,1792,1,0,0,0,314,1794,1,0,0,0,316,1796,
        1,0,0,0,318,1798,1,0,0,0,320,1800,1,0,0,0,322,1802,1,0,0,0,324,1804,
        1,0,0,0,326,1806,1,0,0,0,328,1808,1,0,0,0,330,1818,1,0,0,0,332,1820,
        1,0,0,0,334,1824,1,0,0,0,336,1827,1,0,0,0,338,1832,1,0,0,0,340,1837,
        1,0,0,0,342,1842,1,0,0,0,344,1846,1,0,0,0,346,1851,1,0,0,0,348,1853,
        1,0,0,0,350,1856,1,0,0,0,352,1859,1,0,0,0,354,1862,1,0,0,0,356,1864,
        1,0,0,0,358,1866,1,0,0,0,360,1877,1,0,0,0,362,1885,1,0,0,0,364,1893,
        1,0,0,0,366,1920,1,0,0,0,368,1932,1,0,0,0,370,1935,1,0,0,0,372,1962,
        1,0,0,0,374,2075,1,0,0,0,376,378,3,2,1,0,377,376,1,0,0,0,377,378,
        1,0,0,0,378,379,1,0,0,0,379,380,5,0,0,1,380,1,1,0,0,0,381,384,3,
        6,3,0,382,384,3,4,2,0,383,381,1,0,0,0,383,382,1,0,0,0,384,3,1,0,
        0,0,385,390,3,12,6,0,386,387,5,163,0,0,387,389,3,14,7,0,388,386,
        1,0,0,0,389,392,1,0,0,0,390,388,1,0,0,0,390,391,1,0,0,0,391,5,1,
        0,0,0,392,390,1,0,0,0,393,395,5,5,0,0,394,396,3,8,4,0,395,394,1,
        0,0,0,395,396,1,0,0,0,396,397,1,0,0,0,397,398,3,4,2,0,398,7,1,0,
        0,0,399,400,7,0,0,0,400,9,1,0,0,0,401,406,3,18,9,0,402,403,5,163,
        0,0,403,405,3,14,7,0,404,402,1,0,0,0,405,408,1,0,0,0,406,404,1,0,
        0,0,406,407,1,0,0,0,407,11,1,0,0,0,408,406,1,0,0,0,409,413,3,20,
        10,0,410,413,3,22,11,0,411,413,3,18,9,0,412,409,1,0,0,0,412,410,
        1,0,0,0,412,411,1,0,0,0,413,13,1,0,0,0,414,447,3,24,12,0,415,447,
        3,26,13,0,416,447,3,28,14,0,417,447,3,164,82,0,418,447,3,34,17,0,
        419,447,3,36,18,0,420,447,3,38,19,0,421,447,3,40,20,0,422,447,3,
        42,21,0,423,447,3,54,27,0,424,447,3,56,28,0,425,447,3,58,29,0,426,
        447,3,68,34,0,427,447,3,70,35,0,428,447,3,72,36,0,429,447,3,74,37,
        0,430,447,3,76,38,0,431,447,3,98,49,0,432,447,3,106,53,0,433,447,
        3,136,68,0,434,447,3,140,70,0,435,447,3,144,72,0,436,447,3,114,57,
        0,437,447,3,122,61,0,438,447,3,132,66,0,439,447,3,134,67,0,440,447,
        3,128,64,0,441,447,3,130,65,0,442,447,3,44,22,0,443,447,3,86,43,
        0,444,447,3,46,23,0,445,447,3,90,45,0,446,414,1,0,0,0,446,415,1,
        0,0,0,446,416,1,0,0,0,446,417,1,0,0,0,446,418,1,0,0,0,446,419,1,
        0,0,0,446,420,1,0,0,0,446,421,1,0,0,0,446,422,1,0,0,0,446,423,1,
        0,0,0,446,424,1,0,0,0,446,425,1,0,0,0,446,426,1,0,0,0,446,427,1,
        0,0,0,446,428,1,0,0,0,446,429,1,0,0,0,446,430,1,0,0,0,446,431,1,
        0,0,0,446,432,1,0,0,0,446,433,1,0,0,0,446,434,1,0,0,0,446,435,1,
        0,0,0,446,436,1,0,0,0,446,437,1,0,0,0,446,438,1,0,0,0,446,439,1,
        0,0,0,446,440,1,0,0,0,446,441,1,0,0,0,446,442,1,0,0,0,446,443,1,
        0,0,0,446,444,1,0,0,0,446,445,1,0,0,0,447,15,1,0,0,0,448,449,7,1,
        0,0,449,17,1,0,0,0,450,452,5,2,0,0,451,450,1,0,0,0,451,452,1,0,0,
        0,452,456,1,0,0,0,453,455,3,212,106,0,454,453,1,0,0,0,455,458,1,
        0,0,0,456,454,1,0,0,0,456,457,1,0,0,0,457,459,1,0,0,0,458,456,1,
        0,0,0,459,463,3,148,74,0,460,462,3,212,106,0,461,460,1,0,0,0,462,
        465,1,0,0,0,463,461,1,0,0,0,463,464,1,0,0,0,464,19,1,0,0,0,465,463,
        1,0,0,0,466,467,5,3,0,0,467,468,3,152,76,0,468,21,1,0,0,0,469,470,
        5,4,0,0,470,471,5,67,0,0,471,23,1,0,0,0,472,473,5,7,0,0,473,474,
        3,212,106,0,474,25,1,0,0,0,475,476,5,8,0,0,476,477,3,30,15,0,477,
        27,1,0,0,0,478,479,5,10,0,0,479,480,3,30,15,0,480,29,1,0,0,0,481,
        483,7,2,0,0,482,481,1,0,0,0,482,483,1,0,0,0,483,484,1,0,0,0,484,
        485,3,32,16,0,485,31,1,0,0,0,486,493,3,246,123,0,487,489,5,164,0,
        0,488,487,1,0,0,0,488,489,1,0,0,0,489,490,1,0,0,0,490,492,3,246,
        123,0,491,488,1,0,0,0,492,495,1,0,0,0,493,491,1,0,0,0,493,494,1,
        0,0,0,494,33,1,0,0,0,495,493,1,0,0,0,496,497,5,11,0,0,497,504,3,
        176,88,0,498,500,5,164,0,0,499,498,1,0,0,0,499,500,1,0,0,0,500,501,
        1,0,0,0,501,503,3,176,88,0,502,499,1,0,0,0,503,506,1,0,0,0,504,502,
        1,0,0,0,504,505,1,0,0,0,505,35,1,0,0,0,506,504,1,0,0,0,507,511,5,
        12,0,0,508,509,5,83,0,0,509,510,5,166,0,0,510,512,3,336,168,0,511,
        508,1,0,0,0,511,512,1,0,0,0,512,516,1,0,0,0,513,514,5,84,0,0,514,
        515,5,166,0,0,515,517,3,344,172,0,516,513,1,0,0,0,516,517,1,0,0,
        0,517,521,1,0,0,0,518,519,5,85,0,0,519,520,5,166,0,0,520,522,3,334,
        167,0,521,518,1,0,0,0,521,522,1,0,0,0,522,523,1,0,0,0,523,528,3,
        198,99,0,524,525,5,164,0,0,525,527,3,198,99,0,526,524,1,0,0,0,527,
        530,1,0,0,0,528,526,1,0,0,0,528,529,1,0,0,0,529,532,1,0,0,0,530,
        528,1,0,0,0,531,533,3,180,90,0,532,531,1,0,0,0,532,533,1,0,0,0,533,
        537,1,0,0,0,534,535,5,82,0,0,535,536,5,166,0,0,536,538,3,344,172,
        0,537,534,1,0,0,0,537,538,1,0,0,0,538,37,1,0,0,0,539,540,5,13,0,
        0,540,545,3,190,95,0,541,542,5,164,0,0,542,544,3,190,95,0,543,541,
        1,0,0,0,544,547,1,0,0,0,545,543,1,0,0,0,545,546,1,0,0,0,546,549,
        1,0,0,0,547,545,1,0,0,0,548,550,3,180,90,0,549,548,1,0,0,0,549,550,
        1,0,0,0,550,39,1,0,0,0,551,553,5,14,0,0,552,554,3,336,168,0,553,
        552,1,0,0,0,553,554,1,0,0,0,554,555,1,0,0,0,555,559,3,236,118,0,
        556,557,5,80,0,0,557,558,5,166,0,0,558,560,3,344,172,0,559,556,1,
        0,0,0,559,560,1,0,0,0,560,564,1,0,0,0,561,562,5,81,0,0,562,563,5,
        166,0,0,563,565,3,344,172,0,564,561,1,0,0,0,564,565,1,0,0,0,565,
        41,1,0,0,0,566,568,5,15,0,0,567,569,3,336,168,0,568,567,1,0,0,0,
        568,569,1,0,0,0,569,570,1,0,0,0,570,572,3,186,93,0,571,573,7,3,0,
        0,572,571,1,0,0,0,572,573,1,0,0,0,573,43,1,0,0,0,574,575,5,351,0,
        0,575,45,1,0,0,0,576,580,5,36,0,0,577,579,3,48,24,0,578,577,1,0,
        0,0,579,582,1,0,0,0,580,578,1,0,0,0,580,581,1,0,0,0,581,583,1,0,
        0,0,582,580,1,0,0,0,583,586,3,200,100,0,584,585,5,60,0,0,585,587,
        3,242,121,0,586,584,1,0,0,0,586,587,1,0,0,0,587,47,1,0,0,0,588,593,
        3,184,92,0,589,590,5,421,0,0,590,591,5,166,0,0,591,593,3,52,26,0,
        592,588,1,0,0,0,592,589,1,0,0,0,593,596,1,0,0,0,594,596,3,50,25,
        0,595,592,1,0,0,0,595,594,1,0,0,0,596,49,1,0,0,0,597,598,5,103,0,
        0,598,599,5,166,0,0,599,607,3,336,168,0,600,601,5,104,0,0,601,604,
        5,166,0,0,602,605,3,344,172,0,603,605,3,368,184,0,604,602,1,0,0,
        0,604,603,1,0,0,0,605,607,1,0,0,0,606,597,1,0,0,0,606,600,1,0,0,
        0,607,51,1,0,0,0,608,609,3,336,168,0,609,610,3,356,178,0,610,613,
        1,0,0,0,611,613,3,334,167,0,612,608,1,0,0,0,612,611,1,0,0,0,613,
        53,1,0,0,0,614,615,5,16,0,0,615,620,3,188,94,0,616,617,5,164,0,0,
        617,619,3,188,94,0,618,616,1,0,0,0,619,622,1,0,0,0,620,618,1,0,0,
        0,620,621,1,0,0,0,621,55,1,0,0,0,622,620,1,0,0,0,623,625,5,17,0,
        0,624,626,3,336,168,0,625,624,1,0,0,0,625,626,1,0,0,0,626,629,1,
        0,0,0,627,628,5,6,0,0,628,630,3,336,168,0,629,627,1,0,0,0,629,630,
        1,0,0,0,630,57,1,0,0,0,631,632,5,18,0,0,632,636,3,242,121,0,633,
        635,3,60,30,0,634,633,1,0,0,0,635,638,1,0,0,0,636,634,1,0,0,0,636,
        637,1,0,0,0,637,641,1,0,0,0,638,636,1,0,0,0,639,640,5,59,0,0,640,
        642,3,360,180,0,641,639,1,0,0,0,641,642,1,0,0,0,642,59,1,0,0,0,643,
        644,5,421,0,0,644,645,5,166,0,0,645,665,3,64,32,0,646,647,5,422,
        0,0,647,648,5,166,0,0,648,665,3,336,168,0,649,650,5,423,0,0,650,
        651,5,166,0,0,651,653,3,330,165,0,652,654,3,356,178,0,653,652,1,
        0,0,0,653,654,1,0,0,0,654,665,1,0,0,0,655,656,5,426,0,0,656,657,
        5,166,0,0,657,665,3,62,31,0,658,659,5,424,0,0,659,660,5,166,0,0,
        660,665,3,210,105,0,661,662,5,425,0,0,662,663,5,166,0,0,663,665,
        3,210,105,0,664,643,1,0,0,0,664,646,1,0,0,0,664,649,1,0,0,0,664,
        655,1,0,0,0,664,658,1,0,0,0,664,661,1,0,0,0,665,61,1,0,0,0,666,670,
        5,216,0,0,667,670,5,217,0,0,668,670,3,330,165,0,669,666,1,0,0,0,
        669,667,1,0,0,0,669,668,1,0,0,0,670,63,1,0,0,0,671,673,3,330,165,
        0,672,674,3,356,178,0,673,672,1,0,0,0,673,674,1,0,0,0,674,681,1,
        0,0,0,675,681,3,66,33,0,676,677,3,368,184,0,677,678,3,356,178,0,
        678,681,1,0,0,0,679,681,3,368,184,0,680,671,1,0,0,0,680,675,1,0,
        0,0,680,676,1,0,0,0,680,679,1,0,0,0,681,65,1,0,0,0,682,683,5,254,
        0,0,683,67,1,0,0,0,684,686,5,19,0,0,685,687,3,336,168,0,686,685,
        1,0,0,0,686,687,1,0,0,0,687,691,1,0,0,0,688,689,5,101,0,0,689,690,
        5,166,0,0,690,692,3,334,167,0,691,688,1,0,0,0,691,692,1,0,0,0,692,
        696,1,0,0,0,693,694,5,102,0,0,694,695,5,166,0,0,695,697,3,344,172,
        0,696,693,1,0,0,0,696,697,1,0,0,0,697,698,1,0,0,0,698,700,3,236,
        118,0,699,701,3,178,89,0,700,699,1,0,0,0,700,701,1,0,0,0,701,69,
        1,0,0,0,702,704,5,20,0,0,703,705,3,336,168,0,704,703,1,0,0,0,704,
        705,1,0,0,0,705,709,1,0,0,0,706,707,5,101,0,0,707,708,5,166,0,0,
        708,710,3,334,167,0,709,706,1,0,0,0,709,710,1,0,0,0,710,714,1,0,
        0,0,711,712,5,102,0,0,712,713,5,166,0,0,713,715,3,344,172,0,714,
        711,1,0,0,0,714,715,1,0,0,0,715,716,1,0,0,0,716,718,3,236,118,0,
        717,719,3,178,89,0,718,717,1,0,0,0,718,719,1,0,0,0,719,71,1,0,0,
        0,720,721,5,26,0,0,721,722,3,214,107,0,722,723,3,334,167,0,723,73,
        1,0,0,0,724,725,5,21,0,0,725,726,3,214,107,0,726,727,3,334,167,0,
        727,75,1,0,0,0,728,732,5,22,0,0,729,731,3,78,39,0,730,729,1,0,0,
        0,731,734,1,0,0,0,732,730,1,0,0,0,732,733,1,0,0,0,733,77,1,0,0,0,
        734,732,1,0,0,0,735,736,5,105,0,0,736,737,5,166,0,0,737,747,3,214,
        107,0,738,739,5,106,0,0,739,740,5,166,0,0,740,747,3,214,107,0,741,
        742,5,107,0,0,742,744,5,166,0,0,743,741,1,0,0,0,743,744,1,0,0,0,
        744,745,1,0,0,0,745,747,3,80,40,0,746,735,1,0,0,0,746,738,1,0,0,
        0,746,743,1,0,0,0,747,79,1,0,0,0,748,753,3,82,41,0,749,750,5,165,
        0,0,750,752,3,82,41,0,751,749,1,0,0,0,752,755,1,0,0,0,753,751,1,
        0,0,0,753,754,1,0,0,0,754,81,1,0,0,0,755,753,1,0,0,0,756,758,3,368,
        184,0,757,759,3,84,42,0,758,757,1,0,0,0,758,759,1,0,0,0,759,83,1,
        0,0,0,760,762,5,184,0,0,761,763,5,451,0,0,762,761,1,0,0,0,762,763,
        1,0,0,0,763,764,1,0,0,0,764,765,5,185,0,0,765,85,1,0,0,0,766,767,
        5,23,0,0,767,768,3,88,44,0,768,87,1,0,0,0,769,770,3,360,180,0,770,
        771,7,4,0,0,771,772,3,334,167,0,772,89,1,0,0,0,773,774,5,24,0,0,
        774,775,3,92,46,0,775,91,1,0,0,0,776,777,5,9,0,0,777,778,5,166,0,
        0,778,782,3,360,180,0,779,781,3,94,47,0,780,779,1,0,0,0,781,784,
        1,0,0,0,782,780,1,0,0,0,782,783,1,0,0,0,783,785,1,0,0,0,784,782,
        1,0,0,0,785,789,3,334,167,0,786,788,3,94,47,0,787,786,1,0,0,0,788,
        791,1,0,0,0,789,787,1,0,0,0,789,790,1,0,0,0,790,93,1,0,0,0,791,789,
        1,0,0,0,792,793,5,45,0,0,793,794,5,166,0,0,794,799,3,336,168,0,795,
        796,5,203,0,0,796,797,5,166,0,0,797,799,5,301,0,0,798,792,1,0,0,
        0,798,795,1,0,0,0,799,95,1,0,0,0,800,801,7,5,0,0,801,97,1,0,0,0,
        802,803,5,28,0,0,803,805,3,214,107,0,804,806,3,180,90,0,805,804,
        1,0,0,0,805,806,1,0,0,0,806,810,1,0,0,0,807,808,5,43,0,0,808,809,
        5,166,0,0,809,811,3,102,51,0,810,807,1,0,0,0,810,811,1,0,0,0,811,
        815,1,0,0,0,812,813,5,203,0,0,813,814,5,166,0,0,814,816,3,104,52,
        0,815,812,1,0,0,0,815,816,1,0,0,0,816,820,1,0,0,0,817,818,5,44,0,
        0,818,819,5,166,0,0,819,821,3,336,168,0,820,817,1,0,0,0,820,821,
        1,0,0,0,821,825,1,0,0,0,822,823,5,46,0,0,823,824,5,166,0,0,824,826,
        3,336,168,0,825,822,1,0,0,0,825,826,1,0,0,0,826,830,1,0,0,0,827,
        828,5,29,0,0,828,829,5,166,0,0,829,831,3,334,167,0,830,827,1,0,0,
        0,830,831,1,0,0,0,831,835,1,0,0,0,832,834,3,100,50,0,833,832,1,0,
        0,0,834,837,1,0,0,0,835,833,1,0,0,0,835,836,1,0,0,0,836,99,1,0,0,
        0,837,835,1,0,0,0,838,839,5,27,0,0,839,840,5,166,0,0,840,848,3,334,
        167,0,841,842,5,41,0,0,842,843,5,166,0,0,843,848,3,336,168,0,844,
        845,5,42,0,0,845,846,5,166,0,0,846,848,3,338,169,0,847,838,1,0,0,
        0,847,841,1,0,0,0,847,844,1,0,0,0,848,101,1,0,0,0,849,850,7,6,0,
        0,850,103,1,0,0,0,851,852,7,7,0,0,852,105,1,0,0,0,853,854,5,153,
        0,0,854,855,3,232,116,0,855,858,3,108,54,0,856,857,7,8,0,0,857,859,
        3,110,55,0,858,856,1,0,0,0,858,859,1,0,0,0,859,107,1,0,0,0,860,865,
        3,112,56,0,861,862,5,164,0,0,862,864,3,112,56,0,863,861,1,0,0,0,
        864,867,1,0,0,0,865,863,1,0,0,0,865,866,1,0,0,0,866,109,1,0,0,0,
        867,865,1,0,0,0,868,873,3,112,56,0,869,870,5,164,0,0,870,872,3,112,
        56,0,871,869,1,0,0,0,872,875,1,0,0,0,873,871,1,0,0,0,873,874,1,0,
        0,0,874,111,1,0,0,0,875,873,1,0,0,0,876,879,3,242,121,0,877,878,
        5,59,0,0,878,880,3,242,121,0,879,877,1,0,0,0,879,880,1,0,0,0,880,
        113,1,0,0,0,881,882,5,33,0,0,882,886,3,116,58,0,883,884,5,33,0,0,
        884,886,3,118,59,0,885,881,1,0,0,0,885,883,1,0,0,0,886,115,1,0,0,
        0,887,888,5,69,0,0,888,891,3,216,108,0,889,890,5,110,0,0,890,892,
        3,236,118,0,891,889,1,0,0,0,891,892,1,0,0,0,892,117,1,0,0,0,893,
        894,5,68,0,0,894,899,3,120,60,0,895,896,5,164,0,0,896,898,3,120,
        60,0,897,895,1,0,0,0,898,901,1,0,0,0,899,897,1,0,0,0,899,900,1,0,
        0,0,900,119,1,0,0,0,901,899,1,0,0,0,902,903,3,242,121,0,903,904,
        5,166,0,0,904,905,3,216,108,0,905,121,1,0,0,0,906,909,5,35,0,0,907,
        908,5,15,0,0,908,910,3,238,119,0,909,907,1,0,0,0,909,910,1,0,0,0,
        910,911,1,0,0,0,911,915,3,124,62,0,912,914,3,124,62,0,913,912,1,
        0,0,0,914,917,1,0,0,0,915,913,1,0,0,0,915,916,1,0,0,0,916,123,1,
        0,0,0,917,915,1,0,0,0,918,919,3,126,63,0,919,920,5,180,0,0,920,921,
        3,336,168,0,921,922,5,164,0,0,922,923,3,242,121,0,923,926,5,181,
        0,0,924,925,5,59,0,0,925,927,3,360,180,0,926,924,1,0,0,0,926,927,
        1,0,0,0,927,125,1,0,0,0,928,929,7,9,0,0,929,127,1,0,0,0,930,931,
        5,38,0,0,931,934,3,242,121,0,932,933,5,59,0,0,933,935,3,360,180,
        0,934,932,1,0,0,0,934,935,1,0,0,0,935,129,1,0,0,0,936,937,5,34,0,
        0,937,940,3,242,121,0,938,939,5,59,0,0,939,941,3,366,183,0,940,938,
        1,0,0,0,940,941,1,0,0,0,941,131,1,0,0,0,942,946,5,37,0,0,943,944,
        5,74,0,0,944,945,5,166,0,0,945,947,3,344,172,0,946,943,1,0,0,0,946,
        947,1,0,0,0,947,948,1,0,0,0,948,949,5,182,0,0,949,954,3,14,7,0,950,
        951,5,163,0,0,951,953,3,14,7,0,952,950,1,0,0,0,953,956,1,0,0,0,954,
        952,1,0,0,0,954,955,1,0,0,0,955,957,1,0,0,0,956,954,1,0,0,0,957,
        958,5,183,0,0,958,133,1,0,0,0,959,960,5,100,0,0,960,962,5,182,0,
        0,961,963,3,18,9,0,962,961,1,0,0,0,962,963,1,0,0,0,963,968,1,0,0,
        0,964,965,5,163,0,0,965,967,3,14,7,0,966,964,1,0,0,0,967,970,1,0,
        0,0,968,966,1,0,0,0,968,969,1,0,0,0,969,971,1,0,0,0,970,968,1,0,
        0,0,971,972,5,183,0,0,972,135,1,0,0,0,973,977,5,30,0,0,974,976,3,
        138,69,0,975,974,1,0,0,0,976,979,1,0,0,0,977,975,1,0,0,0,977,978,
        1,0,0,0,978,137,1,0,0,0,979,977,1,0,0,0,980,981,5,86,0,0,981,982,
        5,166,0,0,982,990,3,336,168,0,983,984,5,87,0,0,984,985,5,166,0,0,
        985,990,3,336,168,0,986,987,5,88,0,0,987,988,5,166,0,0,988,990,3,
        334,167,0,989,980,1,0,0,0,989,983,1,0,0,0,989,986,1,0,0,0,990,139,
        1,0,0,0,991,995,5,31,0,0,992,994,3,142,71,0,993,992,1,0,0,0,994,
        997,1,0,0,0,995,993,1,0,0,0,995,996,1,0,0,0,996,141,1,0,0,0,997,
        995,1,0,0,0,998,999,5,89,0,0,999,1000,5,166,0,0,1000,1035,3,336,
        168,0,1001,1002,5,90,0,0,1002,1003,5,166,0,0,1003,1035,3,336,168,
        0,1004,1005,5,91,0,0,1005,1006,5,166,0,0,1006,1035,3,336,168,0,1007,
        1008,5,92,0,0,1008,1009,5,166,0,0,1009,1035,3,336,168,0,1010,1011,
        5,93,0,0,1011,1012,5,166,0,0,1012,1035,3,338,169,0,1013,1014,5,94,
        0,0,1014,1015,5,166,0,0,1015,1035,3,338,169,0,1016,1017,5,95,0,0,
        1017,1018,5,166,0,0,1018,1035,3,334,167,0,1019,1020,5,96,0,0,1020,
        1021,5,166,0,0,1021,1035,3,334,167,0,1022,1023,5,293,0,0,1023,1024,
        5,166,0,0,1024,1035,3,334,167,0,1025,1026,5,97,0,0,1026,1027,5,166,
        0,0,1027,1035,3,334,167,0,1028,1029,5,98,0,0,1029,1030,5,166,0,0,
        1030,1035,3,336,168,0,1031,1032,5,99,0,0,1032,1033,5,166,0,0,1033,
        1035,3,338,169,0,1034,998,1,0,0,0,1034,1001,1,0,0,0,1034,1004,1,
        0,0,0,1034,1007,1,0,0,0,1034,1010,1,0,0,0,1034,1013,1,0,0,0,1034,
        1016,1,0,0,0,1034,1019,1,0,0,0,1034,1022,1,0,0,0,1034,1025,1,0,0,
        0,1034,1028,1,0,0,0,1034,1031,1,0,0,0,1035,143,1,0,0,0,1036,1040,
        5,32,0,0,1037,1039,3,146,73,0,1038,1037,1,0,0,0,1039,1042,1,0,0,
        0,1040,1038,1,0,0,0,1040,1041,1,0,0,0,1041,145,1,0,0,0,1042,1040,
        1,0,0,0,1043,1044,3,368,184,0,1044,1045,5,166,0,0,1045,1046,3,330,
        165,0,1046,147,1,0,0,0,1047,1048,5,61,0,0,1048,1049,5,166,0,0,1049,
        1066,3,150,75,0,1050,1051,5,62,0,0,1051,1052,5,166,0,0,1052,1066,
        3,150,75,0,1053,1054,5,61,0,0,1054,1055,5,166,0,0,1055,1066,3,234,
        117,0,1056,1057,5,62,0,0,1057,1058,5,166,0,0,1058,1066,3,234,117,
        0,1059,1060,5,61,0,0,1060,1061,5,166,0,0,1061,1066,3,154,77,0,1062,
        1063,5,62,0,0,1063,1064,5,166,0,0,1064,1066,3,154,77,0,1065,1047,
        1,0,0,0,1065,1050,1,0,0,0,1065,1053,1,0,0,0,1065,1056,1,0,0,0,1065,
        1059,1,0,0,0,1065,1062,1,0,0,0,1066,149,1,0,0,0,1067,1068,5,182,
        0,0,1068,1069,3,10,5,0,1069,1072,5,183,0,0,1070,1071,5,59,0,0,1071,
        1073,3,360,180,0,1072,1070,1,0,0,0,1072,1073,1,0,0,0,1073,1076,1,
        0,0,0,1074,1076,3,152,76,0,1075,1067,1,0,0,0,1075,1074,1,0,0,0,1076,
        151,1,0,0,0,1077,1082,3,232,116,0,1078,1079,5,164,0,0,1079,1081,
        3,232,116,0,1080,1078,1,0,0,0,1081,1084,1,0,0,0,1082,1080,1,0,0,
        0,1082,1083,1,0,0,0,1083,1087,1,0,0,0,1084,1082,1,0,0,0,1085,1086,
        5,59,0,0,1086,1088,3,360,180,0,1087,1085,1,0,0,0,1087,1088,1,0,0,
        0,1088,153,1,0,0,0,1089,1090,5,182,0,0,1090,1093,3,156,78,0,1091,
        1092,5,164,0,0,1092,1094,3,160,80,0,1093,1091,1,0,0,0,1093,1094,
        1,0,0,0,1094,1095,1,0,0,0,1095,1096,5,183,0,0,1096,155,1,0,0,0,1097,
        1102,3,158,79,0,1098,1099,5,164,0,0,1099,1101,3,158,79,0,1100,1098,
        1,0,0,0,1101,1104,1,0,0,0,1102,1100,1,0,0,0,1102,1103,1,0,0,0,1103,
        157,1,0,0,0,1104,1102,1,0,0,0,1105,1107,5,450,0,0,1106,1105,1,0,
        0,0,1106,1107,1,0,0,0,1107,1108,1,0,0,0,1108,1109,3,364,182,0,1109,
        159,1,0,0,0,1110,1115,3,162,81,0,1111,1112,5,164,0,0,1112,1114,3,
        162,81,0,1113,1111,1,0,0,0,1114,1117,1,0,0,0,1115,1113,1,0,0,0,1115,
        1116,1,0,0,0,1116,161,1,0,0,0,1117,1115,1,0,0,0,1118,1119,3,368,
        184,0,1119,1120,5,166,0,0,1120,1121,3,330,165,0,1121,1127,1,0,0,
        0,1122,1123,3,368,184,0,1123,1124,5,110,0,0,1124,1125,3,358,179,
        0,1125,1127,1,0,0,0,1126,1118,1,0,0,0,1126,1122,1,0,0,0,1127,163,
        1,0,0,0,1128,1129,3,166,83,0,1129,1130,5,49,0,0,1130,1132,3,168,
        84,0,1131,1133,3,172,86,0,1132,1131,1,0,0,0,1132,1133,1,0,0,0,1133,
        1135,1,0,0,0,1134,1136,3,170,85,0,1135,1134,1,0,0,0,1135,1136,1,
        0,0,0,1136,1137,1,0,0,0,1137,1138,3,150,75,0,1138,165,1,0,0,0,1139,
        1141,5,51,0,0,1140,1139,1,0,0,0,1140,1141,1,0,0,0,1141,1164,1,0,
        0,0,1142,1164,5,56,0,0,1143,1145,5,347,0,0,1144,1146,5,52,0,0,1145,
        1144,1,0,0,0,1145,1146,1,0,0,0,1146,1164,1,0,0,0,1147,1149,5,346,
        0,0,1148,1150,5,52,0,0,1149,1148,1,0,0,0,1149,1150,1,0,0,0,1150,
        1164,1,0,0,0,1151,1153,5,53,0,0,1152,1154,5,52,0,0,1153,1152,1,0,
        0,0,1153,1154,1,0,0,0,1154,1164,1,0,0,0,1155,1157,5,347,0,0,1156,
        1155,1,0,0,0,1156,1157,1,0,0,0,1157,1158,1,0,0,0,1158,1164,5,54,
        0,0,1159,1161,5,347,0,0,1160,1159,1,0,0,0,1160,1161,1,0,0,0,1161,
        1162,1,0,0,0,1162,1164,5,55,0,0,1163,1140,1,0,0,0,1163,1142,1,0,
        0,0,1163,1143,1,0,0,0,1163,1147,1,0,0,0,1163,1151,1,0,0,0,1163,1156,
        1,0,0,0,1163,1160,1,0,0,0,1164,167,1,0,0,0,1165,1166,5,347,0,0,1166,
        1167,5,166,0,0,1167,1169,3,360,180,0,1168,1165,1,0,0,0,1168,1169,
        1,0,0,0,1169,1171,1,0,0,0,1170,1172,5,164,0,0,1171,1170,1,0,0,0,
        1171,1172,1,0,0,0,1172,1176,1,0,0,0,1173,1174,5,346,0,0,1174,1175,
        5,166,0,0,1175,1177,3,360,180,0,1176,1173,1,0,0,0,1176,1177,1,0,
        0,0,1177,169,1,0,0,0,1178,1179,5,50,0,0,1179,1180,3,212,106,0,1180,
        171,1,0,0,0,1181,1188,3,174,87,0,1182,1184,5,164,0,0,1183,1182,1,
        0,0,0,1183,1184,1,0,0,0,1184,1185,1,0,0,0,1185,1187,3,174,87,0,1186,
        1183,1,0,0,0,1187,1190,1,0,0,0,1188,1186,1,0,0,0,1188,1189,1,0,0,
        0,1189,173,1,0,0,0,1190,1188,1,0,0,0,1191,1192,5,57,0,0,1192,1193,
        5,165,0,0,1193,1194,5,449,0,0,1194,1195,5,166,0,0,1195,1202,3,368,
        184,0,1196,1197,5,58,0,0,1197,1198,5,165,0,0,1198,1199,5,449,0,0,
        1199,1200,5,166,0,0,1200,1202,3,368,184,0,1201,1191,1,0,0,0,1201,
        1196,1,0,0,0,1202,175,1,0,0,0,1203,1204,3,248,124,0,1204,1205,5,
        59,0,0,1205,1206,3,248,124,0,1206,177,1,0,0,0,1207,1208,5,60,0,0,
        1208,1209,3,236,118,0,1209,179,1,0,0,0,1210,1211,5,60,0,0,1211,1225,
        3,236,118,0,1212,1213,5,60,0,0,1213,1225,3,182,91,0,1214,1215,5,
        60,0,0,1215,1216,3,182,91,0,1216,1217,5,164,0,0,1217,1218,3,236,
        118,0,1218,1225,1,0,0,0,1219,1220,5,60,0,0,1220,1221,3,236,118,0,
        1221,1222,5,164,0,0,1222,1223,3,182,91,0,1223,1225,1,0,0,0,1224,
        1210,1,0,0,0,1224,1212,1,0,0,0,1224,1214,1,0,0,0,1224,1219,1,0,0,
        0,1225,181,1,0,0,0,1226,1229,3,184,92,0,1227,1228,5,59,0,0,1228,
        1230,3,360,180,0,1229,1227,1,0,0,0,1229,1230,1,0,0,0,1230,183,1,
        0,0,0,1231,1232,5,421,0,0,1232,1233,5,180,0,0,1233,1234,3,242,121,
        0,1234,1235,5,164,0,0,1235,1237,3,330,165,0,1236,1238,3,356,178,
        0,1237,1236,1,0,0,0,1237,1238,1,0,0,0,1238,1239,1,0,0,0,1239,1240,
        5,181,0,0,1240,185,1,0,0,0,1241,1246,3,238,119,0,1242,1243,5,164,
        0,0,1243,1245,3,238,119,0,1244,1242,1,0,0,0,1245,1248,1,0,0,0,1246,
        1244,1,0,0,0,1246,1247,1,0,0,0,1247,187,1,0,0,0,1248,1246,1,0,0,
        0,1249,1250,3,242,121,0,1250,1251,5,166,0,0,1251,1252,3,212,106,
        0,1252,189,1,0,0,0,1253,1256,3,192,96,0,1254,1255,5,59,0,0,1255,
        1257,3,244,122,0,1256,1254,1,0,0,0,1256,1257,1,0,0,0,1257,191,1,
        0,0,0,1258,1259,3,194,97,0,1259,1260,5,180,0,0,1260,1261,3,258,129,
        0,1261,1262,5,181,0,0,1262,193,1,0,0,0,1263,1266,3,202,101,0,1264,
        1266,3,196,98,0,1265,1263,1,0,0,0,1265,1264,1,0,0,0,1266,195,1,0,
        0,0,1267,1268,7,10,0,0,1268,197,1,0,0,0,1269,1272,3,200,100,0,1270,
        1271,5,59,0,0,1271,1273,3,244,122,0,1272,1270,1,0,0,0,1272,1273,
        1,0,0,0,1273,199,1,0,0,0,1274,1275,3,202,101,0,1275,1276,5,180,0,
        0,1276,1277,3,216,108,0,1277,1278,5,181,0,0,1278,1303,1,0,0,0,1279,
        1280,7,11,0,0,1280,1281,5,180,0,0,1281,1282,3,218,109,0,1282,1283,
        5,181,0,0,1283,1303,1,0,0,0,1284,1287,7,11,0,0,1285,1286,5,180,0,
        0,1286,1288,5,181,0,0,1287,1285,1,0,0,0,1287,1288,1,0,0,0,1288,1303,
        1,0,0,0,1289,1290,5,448,0,0,1290,1291,5,180,0,0,1291,1292,3,216,
        108,0,1292,1293,5,181,0,0,1293,1303,1,0,0,0,1294,1295,7,12,0,0,1295,
        1296,5,180,0,0,1296,1297,3,216,108,0,1297,1298,5,181,0,0,1298,1303,
        1,0,0,0,1299,1303,3,206,103,0,1300,1303,3,208,104,0,1301,1303,3,
        204,102,0,1302,1274,1,0,0,0,1302,1279,1,0,0,0,1302,1284,1,0,0,0,
        1302,1289,1,0,0,0,1302,1294,1,0,0,0,1302,1299,1,0,0,0,1302,1300,
        1,0,0,0,1302,1301,1,0,0,0,1303,201,1,0,0,0,1304,1305,7,13,0,0,1305,
        203,1,0,0,0,1306,1307,7,14,0,0,1307,1308,5,180,0,0,1308,1311,3,216,
        108,0,1309,1310,5,164,0,0,1310,1312,3,216,108,0,1311,1309,1,0,0,
        0,1311,1312,1,0,0,0,1312,1313,1,0,0,0,1313,1314,5,181,0,0,1314,205,
        1,0,0,0,1315,1316,5,218,0,0,1316,1317,5,180,0,0,1317,1320,3,242,
        121,0,1318,1319,5,164,0,0,1319,1321,3,336,168,0,1320,1318,1,0,0,
        0,1320,1321,1,0,0,0,1321,1322,1,0,0,0,1322,1323,5,181,0,0,1323,207,
        1,0,0,0,1324,1325,7,15,0,0,1325,1326,5,180,0,0,1326,1327,3,216,108,
        0,1327,1328,5,164,0,0,1328,1331,3,210,105,0,1329,1330,5,164,0,0,
        1330,1332,3,210,105,0,1331,1329,1,0,0,0,1331,1332,1,0,0,0,1332,1333,
        1,0,0,0,1333,1334,5,181,0,0,1334,209,1,0,0,0,1335,1340,3,336,168,
        0,1336,1340,3,338,169,0,1337,1340,3,340,170,0,1338,1340,3,342,171,
        0,1339,1335,1,0,0,0,1339,1336,1,0,0,0,1339,1337,1,0,0,0,1339,1338,
        1,0,0,0,1340,211,1,0,0,0,1341,1342,6,106,-1,0,1342,1343,5,113,0,
        0,1343,1346,3,212,106,5,1344,1346,3,214,107,0,1345,1341,1,0,0,0,
        1345,1344,1,0,0,0,1346,1358,1,0,0,0,1347,1348,10,4,0,0,1348,1349,
        5,115,0,0,1349,1357,3,212,106,5,1350,1351,10,3,0,0,1351,1352,5,116,
        0,0,1352,1357,3,212,106,4,1353,1354,10,2,0,0,1354,1355,5,114,0,0,
        1355,1357,3,212,106,3,1356,1347,1,0,0,0,1356,1350,1,0,0,0,1356,1353,
        1,0,0,0,1357,1360,1,0,0,0,1358,1356,1,0,0,0,1358,1359,1,0,0,0,1359,
        213,1,0,0,0,1360,1358,1,0,0,0,1361,1362,6,107,-1,0,1362,1365,3,216,
        108,0,1363,1365,3,226,113,0,1364,1361,1,0,0,0,1364,1363,1,0,0,0,
        1365,1387,1,0,0,0,1366,1367,10,3,0,0,1367,1368,3,324,162,0,1368,
        1369,3,214,107,4,1369,1386,1,0,0,0,1370,1372,10,1,0,0,1371,1373,
        5,113,0,0,1372,1371,1,0,0,0,1372,1373,1,0,0,0,1373,1374,1,0,0,0,
        1374,1375,5,357,0,0,1375,1376,3,214,107,0,1376,1377,5,115,0,0,1377,
        1378,3,214,107,2,1378,1386,1,0,0,0,1379,1381,10,2,0,0,1380,1382,
        5,113,0,0,1381,1380,1,0,0,0,1381,1382,1,0,0,0,1382,1383,1,0,0,0,
        1383,1384,5,110,0,0,1384,1386,3,358,179,0,1385,1366,1,0,0,0,1385,
        1370,1,0,0,0,1385,1379,1,0,0,0,1386,1389,1,0,0,0,1387,1385,1,0,0,
        0,1387,1388,1,0,0,0,1388,215,1,0,0,0,1389,1387,1,0,0,0,1390,1391,
        6,108,-1,0,1391,1427,3,330,165,0,1392,1427,3,220,110,0,1393,1427,
        3,268,134,0,1394,1395,5,182,0,0,1395,1396,3,10,5,0,1396,1397,5,183,
        0,0,1397,1427,1,0,0,0,1398,1399,5,180,0,0,1399,1404,3,216,108,0,
        1400,1401,5,164,0,0,1401,1403,3,216,108,0,1402,1400,1,0,0,0,1403,
        1406,1,0,0,0,1404,1402,1,0,0,0,1404,1405,1,0,0,0,1405,1407,1,0,0,
        0,1406,1404,1,0,0,0,1407,1409,5,181,0,0,1408,1410,5,113,0,0,1409,
        1408,1,0,0,0,1409,1410,1,0,0,0,1410,1411,1,0,0,0,1411,1412,5,110,
        0,0,1412,1413,5,182,0,0,1413,1414,3,10,5,0,1414,1415,5,183,0,0,1415,
        1427,1,0,0,0,1416,1417,5,111,0,0,1417,1418,5,182,0,0,1418,1419,3,
        10,5,0,1419,1420,5,183,0,0,1420,1427,1,0,0,0,1421,1427,3,242,121,
        0,1422,1423,5,180,0,0,1423,1424,3,212,106,0,1424,1425,5,181,0,0,
        1425,1427,1,0,0,0,1426,1390,1,0,0,0,1426,1392,1,0,0,0,1426,1393,
        1,0,0,0,1426,1394,1,0,0,0,1426,1398,1,0,0,0,1426,1416,1,0,0,0,1426,
        1421,1,0,0,0,1426,1422,1,0,0,0,1427,1445,1,0,0,0,1428,1429,10,11,
        0,0,1429,1430,7,16,0,0,1430,1444,3,216,108,12,1431,1432,10,10,0,
        0,1432,1433,7,2,0,0,1433,1444,3,216,108,11,1434,1436,10,5,0,0,1435,
        1437,5,113,0,0,1436,1435,1,0,0,0,1436,1437,1,0,0,0,1437,1438,1,0,
        0,0,1438,1439,5,110,0,0,1439,1440,5,182,0,0,1440,1441,3,10,5,0,1441,
        1442,5,183,0,0,1442,1444,1,0,0,0,1443,1428,1,0,0,0,1443,1431,1,0,
        0,0,1443,1434,1,0,0,0,1444,1447,1,0,0,0,1445,1443,1,0,0,0,1445,1446,
        1,0,0,0,1446,217,1,0,0,0,1447,1445,1,0,0,0,1448,1449,5,16,0,0,1449,
        1450,5,180,0,0,1450,1451,3,212,106,0,1451,1452,5,181,0,0,1452,219,
        1,0,0,0,1453,1461,3,250,125,0,1454,1461,3,252,126,0,1455,1461,3,
        222,111,0,1456,1461,3,224,112,0,1457,1461,3,310,155,0,1458,1461,
        3,302,151,0,1459,1461,3,298,149,0,1460,1453,1,0,0,0,1460,1454,1,
        0,0,0,1460,1455,1,0,0,0,1460,1456,1,0,0,0,1460,1457,1,0,0,0,1460,
        1458,1,0,0,0,1460,1459,1,0,0,0,1461,221,1,0,0,0,1462,1463,3,322,
        161,0,1463,1464,5,180,0,0,1464,1465,3,262,131,0,1465,1466,5,110,
        0,0,1466,1467,3,262,131,0,1467,1468,5,181,0,0,1468,223,1,0,0,0,1469,
        1470,5,108,0,0,1470,1471,5,180,0,0,1471,1472,3,212,106,0,1472,1473,
        5,164,0,0,1473,1481,3,216,108,0,1474,1475,5,164,0,0,1475,1476,3,
        212,106,0,1476,1477,5,164,0,0,1477,1478,3,216,108,0,1478,1480,1,
        0,0,0,1479,1474,1,0,0,0,1480,1483,1,0,0,0,1481,1479,1,0,0,0,1481,
        1482,1,0,0,0,1482,1486,1,0,0,0,1483,1481,1,0,0,0,1484,1485,5,109,
        0,0,1485,1487,3,216,108,0,1486,1484,1,0,0,0,1486,1487,1,0,0,0,1487,
        1488,1,0,0,0,1488,1489,5,181,0,0,1489,225,1,0,0,0,1490,1493,3,228,
        114,0,1491,1493,3,230,115,0,1492,1490,1,0,0,0,1492,1491,1,0,0,0,
        1493,227,1,0,0,0,1494,1495,3,326,163,0,1495,1496,5,180,0,0,1496,
        1497,3,278,139,0,1497,1498,5,164,0,0,1498,1503,3,280,140,0,1499,
        1500,5,164,0,0,1500,1502,3,270,135,0,1501,1499,1,0,0,0,1502,1505,
        1,0,0,0,1503,1501,1,0,0,0,1503,1504,1,0,0,0,1504,1506,1,0,0,0,1505,
        1503,1,0,0,0,1506,1507,5,181,0,0,1507,229,1,0,0,0,1508,1509,3,328,
        164,0,1509,1522,5,180,0,0,1510,1511,5,182,0,0,1511,1516,3,274,137,
        0,1512,1513,5,164,0,0,1513,1515,3,274,137,0,1514,1512,1,0,0,0,1515,
        1518,1,0,0,0,1516,1514,1,0,0,0,1516,1517,1,0,0,0,1517,1519,1,0,0,
        0,1518,1516,1,0,0,0,1519,1520,5,183,0,0,1520,1521,5,164,0,0,1521,
        1523,1,0,0,0,1522,1510,1,0,0,0,1522,1523,1,0,0,0,1523,1524,1,0,0,
        0,1524,1529,3,280,140,0,1525,1526,5,164,0,0,1526,1528,3,270,135,
        0,1527,1525,1,0,0,0,1528,1531,1,0,0,0,1529,1527,1,0,0,0,1529,1530,
        1,0,0,0,1530,1532,1,0,0,0,1531,1529,1,0,0,0,1532,1533,5,181,0,0,
        1533,231,1,0,0,0,1534,1537,3,362,181,0,1535,1537,5,455,0,0,1536,
        1534,1,0,0,0,1536,1535,1,0,0,0,1537,233,1,0,0,0,1538,1539,3,360,
        180,0,1539,1540,5,180,0,0,1540,1541,3,260,130,0,1541,1542,5,181,
        0,0,1542,235,1,0,0,0,1543,1548,3,242,121,0,1544,1545,5,164,0,0,1545,
        1547,3,242,121,0,1546,1544,1,0,0,0,1547,1550,1,0,0,0,1548,1546,1,
        0,0,0,1548,1549,1,0,0,0,1549,237,1,0,0,0,1550,1548,1,0,0,0,1551,
        1553,7,2,0,0,1552,1551,1,0,0,0,1552,1553,1,0,0,0,1553,1554,1,0,0,
        0,1554,1555,3,240,120,0,1555,239,1,0,0,0,1556,1578,3,242,121,0,1557,
        1558,5,75,0,0,1558,1559,5,180,0,0,1559,1560,3,242,121,0,1560,1561,
        5,181,0,0,1561,1578,1,0,0,0,1562,1563,5,76,0,0,1563,1564,5,180,0,
        0,1564,1565,3,242,121,0,1565,1566,5,181,0,0,1566,1578,1,0,0,0,1567,
        1568,5,162,0,0,1568,1569,5,180,0,0,1569,1570,3,242,121,0,1570,1571,
        5,181,0,0,1571,1578,1,0,0,0,1572,1573,5,77,0,0,1573,1574,5,180,0,
        0,1574,1575,3,242,121,0,1575,1576,5,181,0,0,1576,1578,1,0,0,0,1577,
        1556,1,0,0,0,1577,1557,1,0,0,0,1577,1562,1,0,0,0,1577,1567,1,0,0,
        0,1577,1572,1,0,0,0,1578,241,1,0,0,0,1579,1580,3,360,180,0,1580,
        243,1,0,0,0,1581,1582,3,364,182,0,1582,245,1,0,0,0,1583,1586,3,364,
        182,0,1584,1586,5,175,0,0,1585,1583,1,0,0,0,1585,1584,1,0,0,0,1586,
        247,1,0,0,0,1587,1590,3,364,182,0,1588,1590,5,175,0,0,1589,1587,
        1,0,0,0,1589,1588,1,0,0,0,1590,249,1,0,0,0,1591,1592,3,256,128,0,
        1592,1593,5,180,0,0,1593,1594,3,258,129,0,1594,1595,5,181,0,0,1595,
        251,1,0,0,0,1596,1597,5,352,0,0,1597,1598,5,180,0,0,1598,1599,3,
        212,106,0,1599,1600,5,59,0,0,1600,1601,3,254,127,0,1601,1602,5,181,
        0,0,1602,253,1,0,0,0,1603,1616,5,290,0,0,1604,1616,5,319,0,0,1605,
        1616,5,321,0,0,1606,1616,5,155,0,0,1607,1616,5,156,0,0,1608,1616,
        5,157,0,0,1609,1616,5,158,0,0,1610,1616,5,159,0,0,1611,1616,5,160,
        0,0,1612,1616,5,161,0,0,1613,1616,5,162,0,0,1614,1616,5,368,0,0,
        1615,1603,1,0,0,0,1615,1604,1,0,0,0,1615,1605,1,0,0,0,1615,1606,
        1,0,0,0,1615,1607,1,0,0,0,1615,1608,1,0,0,0,1615,1609,1,0,0,0,1615,
        1610,1,0,0,0,1615,1611,1,0,0,0,1615,1612,1,0,0,0,1615,1613,1,0,0,
        0,1615,1614,1,0,0,0,1616,255,1,0,0,0,1617,1629,3,284,142,0,1618,
        1629,3,296,148,0,1619,1629,3,320,160,0,1620,1629,3,314,157,0,1621,
        1629,3,316,158,0,1622,1629,3,318,159,0,1623,1629,3,322,161,0,1624,
        1629,3,294,147,0,1625,1629,3,292,146,0,1626,1629,3,286,143,0,1627,
        1629,3,288,144,0,1628,1617,1,0,0,0,1628,1618,1,0,0,0,1628,1619,1,
        0,0,0,1628,1620,1,0,0,0,1628,1621,1,0,0,0,1628,1622,1,0,0,0,1628,
        1623,1,0,0,0,1628,1624,1,0,0,0,1628,1625,1,0,0,0,1628,1626,1,0,0,
        0,1628,1627,1,0,0,0,1629,257,1,0,0,0,1630,1635,3,262,131,0,1631,
        1632,5,164,0,0,1632,1634,3,262,131,0,1633,1631,1,0,0,0,1634,1637,
        1,0,0,0,1635,1633,1,0,0,0,1635,1636,1,0,0,0,1636,1639,1,0,0,0,1637,
        1635,1,0,0,0,1638,1630,1,0,0,0,1638,1639,1,0,0,0,1639,259,1,0,0,
        0,1640,1645,3,264,132,0,1641,1642,5,164,0,0,1642,1644,3,264,132,
        0,1643,1641,1,0,0,0,1644,1647,1,0,0,0,1645,1643,1,0,0,0,1645,1646,
        1,0,0,0,1646,1649,1,0,0,0,1647,1645,1,0,0,0,1648,1640,1,0,0,0,1648,
        1649,1,0,0,0,1649,261,1,0,0,0,1650,1651,3,266,133,0,1651,263,1,0,
        0,0,1652,1653,3,368,184,0,1653,1654,5,166,0,0,1654,1656,1,0,0,0,
        1655,1652,1,0,0,0,1655,1656,1,0,0,0,1656,1657,1,0,0,0,1657,1658,
        3,266,133,0,1658,265,1,0,0,0,1659,1662,3,268,134,0,1660,1662,3,212,
        106,0,1661,1659,1,0,0,0,1661,1660,1,0,0,0,1662,267,1,0,0,0,1663,
        1664,3,368,184,0,1664,1665,5,189,0,0,1665,1666,3,212,106,0,1666,
        1680,1,0,0,0,1667,1668,5,180,0,0,1668,1671,3,368,184,0,1669,1670,
        5,164,0,0,1670,1672,3,368,184,0,1671,1669,1,0,0,0,1672,1673,1,0,
        0,0,1673,1671,1,0,0,0,1673,1674,1,0,0,0,1674,1675,1,0,0,0,1675,1676,
        5,181,0,0,1676,1677,5,189,0,0,1677,1678,3,212,106,0,1678,1680,1,
        0,0,0,1679,1663,1,0,0,0,1679,1667,1,0,0,0,1680,269,1,0,0,0,1681,
        1682,3,272,136,0,1682,1683,5,166,0,0,1683,1684,3,282,141,0,1684,
        271,1,0,0,0,1685,1686,7,17,0,0,1686,273,1,0,0,0,1687,1696,3,278,
        139,0,1688,1689,3,278,139,0,1689,1690,3,276,138,0,1690,1696,1,0,
        0,0,1691,1692,3,278,139,0,1692,1693,5,192,0,0,1693,1694,3,276,138,
        0,1694,1696,1,0,0,0,1695,1687,1,0,0,0,1695,1688,1,0,0,0,1695,1691,
        1,0,0,0,1696,275,1,0,0,0,1697,1702,3,336,168,0,1698,1702,3,338,169,
        0,1699,1702,3,340,170,0,1700,1702,3,342,171,0,1701,1697,1,0,0,0,
        1701,1698,1,0,0,0,1701,1699,1,0,0,0,1701,1700,1,0,0,0,1702,277,1,
        0,0,0,1703,1706,3,360,180,0,1704,1706,3,334,167,0,1705,1703,1,0,
        0,0,1705,1704,1,0,0,0,1706,279,1,0,0,0,1707,1708,3,282,141,0,1708,
        281,1,0,0,0,1709,1712,3,360,180,0,1710,1712,3,330,165,0,1711,1709,
        1,0,0,0,1711,1710,1,0,0,0,1712,283,1,0,0,0,1713,1746,5,242,0,0,1714,
        1746,5,238,0,0,1715,1746,5,239,0,0,1716,1746,5,240,0,0,1717,1746,
        5,241,0,0,1718,1746,5,243,0,0,1719,1746,5,244,0,0,1720,1746,5,245,
        0,0,1721,1746,5,246,0,0,1722,1746,5,247,0,0,1723,1746,5,248,0,0,
        1724,1746,5,249,0,0,1725,1746,5,250,0,0,1726,1746,5,251,0,0,1727,
        1746,5,252,0,0,1728,1746,5,253,0,0,1729,1746,5,254,0,0,1730,1746,
        5,255,0,0,1731,1746,5,256,0,0,1732,1746,5,257,0,0,1733,1746,5,259,
        0,0,1734,1746,5,260,0,0,1735,1746,5,261,0,0,1736,1746,5,262,0,0,
        1737,1746,5,263,0,0,1738,1746,5,264,0,0,1739,1746,5,265,0,0,1740,
        1746,5,266,0,0,1741,1746,5,267,0,0,1742,1746,5,207,0,0,1743,1746,
        5,193,0,0,1744,1746,3,290,145,0,1745,1713,1,0,0,0,1745,1714,1,0,
        0,0,1745,1715,1,0,0,0,1745,1716,1,0,0,0,1745,1717,1,0,0,0,1745,1718,
        1,0,0,0,1745,1719,1,0,0,0,1745,1720,1,0,0,0,1745,1721,1,0,0,0,1745,
        1722,1,0,0,0,1745,1723,1,0,0,0,1745,1724,1,0,0,0,1745,1725,1,0,0,
        0,1745,1726,1,0,0,0,1745,1727,1,0,0,0,1745,1728,1,0,0,0,1745,1729,
        1,0,0,0,1745,1730,1,0,0,0,1745,1731,1,0,0,0,1745,1732,1,0,0,0,1745,
        1733,1,0,0,0,1745,1734,1,0,0,0,1745,1735,1,0,0,0,1745,1736,1,0,0,
        0,1745,1737,1,0,0,0,1745,1738,1,0,0,0,1745,1739,1,0,0,0,1745,1740,
        1,0,0,0,1745,1741,1,0,0,0,1745,1742,1,0,0,0,1745,1743,1,0,0,0,1745,
        1744,1,0,0,0,1746,285,1,0,0,0,1747,1748,5,112,0,0,1748,287,1,0,0,
        0,1749,1750,7,18,0,0,1750,289,1,0,0,0,1751,1752,7,19,0,0,1752,291,
        1,0,0,0,1753,1754,7,20,0,0,1754,293,1,0,0,0,1755,1756,7,21,0,0,1756,
        295,1,0,0,0,1757,1758,7,22,0,0,1758,297,1,0,0,0,1759,1760,5,304,
        0,0,1760,1761,5,180,0,0,1761,1762,3,300,150,0,1762,1763,5,164,0,
        0,1763,1764,3,262,131,0,1764,1765,5,181,0,0,1765,299,1,0,0,0,1766,
        1767,7,23,0,0,1767,301,1,0,0,0,1768,1769,5,301,0,0,1769,1770,5,180,
        0,0,1770,1771,3,308,154,0,1771,1772,5,6,0,0,1772,1773,3,262,131,
        0,1773,1774,5,181,0,0,1774,303,1,0,0,0,1775,1776,7,24,0,0,1776,305,
        1,0,0,0,1777,1778,7,25,0,0,1778,307,1,0,0,0,1779,1782,3,304,152,
        0,1780,1782,3,306,153,0,1781,1779,1,0,0,0,1781,1780,1,0,0,0,1782,
        309,1,0,0,0,1783,1784,3,312,156,0,1784,1785,5,180,0,0,1785,1786,
        3,304,152,0,1786,1787,5,164,0,0,1787,1788,3,262,131,0,1788,1789,
        5,164,0,0,1789,1790,3,262,131,0,1790,1791,5,181,0,0,1791,311,1,0,
        0,0,1792,1793,7,26,0,0,1793,313,1,0,0,0,1794,1795,7,27,0,0,1795,
        315,1,0,0,0,1796,1797,7,28,0,0,1797,317,1,0,0,0,1798,1799,5,381,
        0,0,1799,319,1,0,0,0,1800,1801,7,29,0,0,1801,321,1,0,0,0,1802,1803,
        5,258,0,0,1803,323,1,0,0,0,1804,1805,7,30,0,0,1805,325,1,0,0,0,1806,
        1807,7,31,0,0,1807,327,1,0,0,0,1808,1809,7,32,0,0,1809,329,1,0,0,
        0,1810,1819,3,332,166,0,1811,1819,3,334,167,0,1812,1819,3,336,168,
        0,1813,1819,3,338,169,0,1814,1819,3,340,170,0,1815,1819,3,342,171,
        0,1816,1819,3,344,172,0,1817,1819,3,346,173,0,1818,1810,1,0,0,0,
        1818,1811,1,0,0,0,1818,1812,1,0,0,0,1818,1813,1,0,0,0,1818,1814,
        1,0,0,0,1818,1815,1,0,0,0,1818,1816,1,0,0,0,1818,1817,1,0,0,0,1819,
        331,1,0,0,0,1820,1821,5,134,0,0,1821,1822,3,216,108,0,1822,1823,
        3,354,177,0,1823,333,1,0,0,0,1824,1825,7,33,0,0,1825,335,1,0,0,0,
        1826,1828,7,2,0,0,1827,1826,1,0,0,0,1827,1828,1,0,0,0,1828,1829,
        1,0,0,0,1829,1830,5,451,0,0,1830,337,1,0,0,0,1831,1833,7,2,0,0,1832,
        1831,1,0,0,0,1832,1833,1,0,0,0,1833,1834,1,0,0,0,1834,1835,5,452,
        0,0,1835,339,1,0,0,0,1836,1838,7,2,0,0,1837,1836,1,0,0,0,1837,1838,
        1,0,0,0,1838,1839,1,0,0,0,1839,1840,5,454,0,0,1840,341,1,0,0,0,1841,
        1843,7,2,0,0,1842,1841,1,0,0,0,1842,1843,1,0,0,0,1843,1844,1,0,0,
        0,1844,1845,5,453,0,0,1845,343,1,0,0,0,1846,1847,7,34,0,0,1847,345,
        1,0,0,0,1848,1852,3,348,174,0,1849,1852,3,350,175,0,1850,1852,3,
        352,176,0,1851,1848,1,0,0,0,1851,1849,1,0,0,0,1851,1850,1,0,0,0,
        1852,347,1,0,0,0,1853,1854,5,290,0,0,1854,1855,3,334,167,0,1855,
        349,1,0,0,0,1856,1857,5,319,0,0,1857,1858,3,334,167,0,1858,351,1,
        0,0,0,1859,1860,5,321,0,0,1860,1861,3,334,167,0,1861,353,1,0,0,0,
        1862,1863,7,35,0,0,1863,355,1,0,0,0,1864,1865,7,36,0,0,1865,357,
        1,0,0,0,1866,1867,5,180,0,0,1867,1872,3,330,165,0,1868,1869,5,164,
        0,0,1869,1871,3,330,165,0,1870,1868,1,0,0,0,1871,1874,1,0,0,0,1872,
        1870,1,0,0,0,1872,1873,1,0,0,0,1873,1875,1,0,0,0,1874,1872,1,0,0,
        0,1875,1876,5,181,0,0,1876,359,1,0,0,0,1877,1882,3,368,184,0,1878,
        1879,5,165,0,0,1879,1881,3,368,184,0,1880,1878,1,0,0,0,1881,1884,
        1,0,0,0,1882,1880,1,0,0,0,1882,1883,1,0,0,0,1883,361,1,0,0,0,1884,
        1882,1,0,0,0,1885,1890,3,370,185,0,1886,1887,5,165,0,0,1887,1889,
        3,368,184,0,1888,1886,1,0,0,0,1889,1892,1,0,0,0,1890,1888,1,0,0,
        0,1890,1891,1,0,0,0,1891,363,1,0,0,0,1892,1890,1,0,0,0,1893,1898,
        3,372,186,0,1894,1895,5,165,0,0,1895,1897,3,372,186,0,1896,1894,
        1,0,0,0,1897,1900,1,0,0,0,1898,1896,1,0,0,0,1898,1899,1,0,0,0,1899,
        365,1,0,0,0,1900,1898,1,0,0,0,1901,1906,3,360,180,0,1902,1903,5,
        164,0,0,1903,1905,3,360,180,0,1904,1902,1,0,0,0,1905,1908,1,0,0,
        0,1906,1904,1,0,0,0,1906,1907,1,0,0,0,1907,1921,1,0,0,0,1908,1906,
        1,0,0,0,1909,1910,5,180,0,0,1910,1915,3,360,180,0,1911,1912,5,164,
        0,0,1912,1914,3,360,180,0,1913,1911,1,0,0,0,1914,1917,1,0,0,0,1915,
        1913,1,0,0,0,1915,1916,1,0,0,0,1916,1918,1,0,0,0,1917,1915,1,0,0,
        0,1918,1919,5,181,0,0,1919,1921,1,0,0,0,1920,1901,1,0,0,0,1920,1909,
        1,0,0,0,1921,367,1,0,0,0,1922,1924,5,165,0,0,1923,1922,1,0,0,0,1923,
        1924,1,0,0,0,1924,1925,1,0,0,0,1925,1933,5,449,0,0,1926,1927,5,188,
        0,0,1927,1928,3,368,184,0,1928,1929,5,188,0,0,1929,1933,1,0,0,0,
        1930,1933,5,458,0,0,1931,1933,3,374,187,0,1932,1923,1,0,0,0,1932,
        1926,1,0,0,0,1932,1930,1,0,0,0,1932,1931,1,0,0,0,1933,369,1,0,0,
        0,1934,1936,5,450,0,0,1935,1934,1,0,0,0,1935,1936,1,0,0,0,1936,1937,
        1,0,0,0,1937,1938,3,368,184,0,1938,371,1,0,0,0,1939,1944,3,368,184,
        0,1940,1941,5,177,0,0,1941,1943,3,368,184,0,1942,1940,1,0,0,0,1943,
        1946,1,0,0,0,1944,1942,1,0,0,0,1944,1945,1,0,0,0,1945,1948,1,0,0,
        0,1946,1944,1,0,0,0,1947,1949,5,177,0,0,1948,1947,1,0,0,0,1948,1949,
        1,0,0,0,1949,1963,1,0,0,0,1950,1951,5,186,0,0,1951,1952,3,372,186,
        0,1952,1953,5,186,0,0,1953,1963,1,0,0,0,1954,1955,5,187,0,0,1955,
        1956,3,372,186,0,1956,1957,5,187,0,0,1957,1963,1,0,0,0,1958,1959,
        5,188,0,0,1959,1960,3,372,186,0,1960,1961,5,188,0,0,1961,1963,1,
        0,0,0,1962,1939,1,0,0,0,1962,1950,1,0,0,0,1962,1954,1,0,0,0,1962,
        1958,1,0,0,0,1963,373,1,0,0,0,1964,2076,5,65,0,0,1965,2076,3,356,
        178,0,1966,2076,5,421,0,0,1967,2076,3,256,128,0,1968,2076,3,292,
        146,0,1969,2076,3,272,136,0,1970,2076,3,354,177,0,1971,2076,3,126,
        63,0,1972,2076,3,326,163,0,1973,2076,3,328,164,0,1974,2076,3,16,
        8,0,1975,2076,3,288,144,0,1976,2076,3,324,162,0,1977,2076,3,8,4,
        0,1978,2076,5,108,0,0,1979,2076,5,109,0,0,1980,2076,5,110,0,0,1981,
        2076,5,189,0,0,1982,2076,5,357,0,0,1983,2076,5,111,0,0,1984,2076,
        5,61,0,0,1985,2076,5,62,0,0,1986,2076,5,63,0,0,1987,2076,5,64,0,
        0,1988,2076,5,66,0,0,1989,2076,5,67,0,0,1990,2076,5,6,0,0,1991,2076,
        5,27,0,0,1992,2076,5,29,0,0,1993,2076,5,43,0,0,1994,2076,5,41,0,
        0,1995,2076,5,42,0,0,1996,2076,5,44,0,0,1997,2076,5,46,0,0,1998,
        2076,5,69,0,0,1999,2076,5,23,0,0,2000,2076,5,25,0,0,2001,2076,5,
        68,0,0,2002,2076,5,352,0,0,2003,2076,5,304,0,0,2004,2076,5,301,0,
        0,2005,2076,5,134,0,0,2006,2076,5,173,0,0,2007,2076,5,174,0,0,2008,
        2076,5,74,0,0,2009,2076,5,75,0,0,2010,2076,5,76,0,0,2011,2076,5,
        162,0,0,2012,2076,5,77,0,0,2013,2076,5,80,0,0,2014,2076,5,81,0,0,
        2015,2076,5,82,0,0,2016,2076,5,83,0,0,2017,2076,5,84,0,0,2018,2076,
        5,85,0,0,2019,2076,5,86,0,0,2020,2076,5,87,0,0,2021,2076,5,88,0,
        0,2022,2076,5,89,0,0,2023,2076,5,90,0,0,2024,2076,5,91,0,0,2025,
        2076,5,92,0,0,2026,2076,5,93,0,0,2027,2076,5,94,0,0,2028,2076,5,
        95,0,0,2029,2076,5,96,0,0,2030,2076,5,97,0,0,2031,2076,5,98,0,0,
        2032,2076,5,99,0,0,2033,2076,5,101,0,0,2034,2076,5,102,0,0,2035,
        2076,5,107,0,0,2036,2076,5,105,0,0,2037,2076,5,106,0,0,2038,2076,
        3,202,101,0,2039,2076,3,194,97,0,2040,2076,5,195,0,0,2041,2076,5,
        196,0,0,2042,2076,5,197,0,0,2043,2076,5,198,0,0,2044,2076,5,200,
        0,0,2045,2076,5,201,0,0,2046,2076,5,203,0,0,2047,2076,5,204,0,0,
        2048,2076,5,205,0,0,2049,2076,5,206,0,0,2050,2076,5,208,0,0,2051,
        2076,5,209,0,0,2052,2076,5,210,0,0,2053,2076,5,218,0,0,2054,2076,
        5,219,0,0,2055,2076,5,220,0,0,2056,2076,5,221,0,0,2057,2076,5,222,
        0,0,2058,2076,5,223,0,0,2059,2076,5,224,0,0,2060,2076,5,225,0,0,
        2061,2076,5,226,0,0,2062,2076,5,227,0,0,2063,2076,5,228,0,0,2064,
        2076,5,52,0,0,2065,2076,5,51,0,0,2066,2076,5,56,0,0,2067,2076,5,
        347,0,0,2068,2076,5,346,0,0,2069,2076,5,53,0,0,2070,2076,5,54,0,
        0,2071,2076,5,55,0,0,2072,2076,5,57,0,0,2073,2076,5,58,0,0,2074,
        2076,5,448,0,0,2075,1964,1,0,0,0,2075,1965,1,0,0,0,2075,1966,1,0,
        0,0,2075,1967,1,0,0,0,2075,1968,1,0,0,0,2075,1969,1,0,0,0,2075,1970,
        1,0,0,0,2075,1971,1,0,0,0,2075,1972,1,0,0,0,2075,1973,1,0,0,0,2075,
        1974,1,0,0,0,2075,1975,1,0,0,0,2075,1976,1,0,0,0,2075,1977,1,0,0,
        0,2075,1978,1,0,0,0,2075,1979,1,0,0,0,2075,1980,1,0,0,0,2075,1981,
        1,0,0,0,2075,1982,1,0,0,0,2075,1983,1,0,0,0,2075,1984,1,0,0,0,2075,
        1985,1,0,0,0,2075,1986,1,0,0,0,2075,1987,1,0,0,0,2075,1988,1,0,0,
        0,2075,1989,1,0,0,0,2075,1990,1,0,0,0,2075,1991,1,0,0,0,2075,1992,
        1,0,0,0,2075,1993,1,0,0,0,2075,1994,1,0,0,0,2075,1995,1,0,0,0,2075,
        1996,1,0,0,0,2075,1997,1,0,0,0,2075,1998,1,0,0,0,2075,1999,1,0,0,
        0,2075,2000,1,0,0,0,2075,2001,1,0,0,0,2075,2002,1,0,0,0,2075,2003,
        1,0,0,0,2075,2004,1,0,0,0,2075,2005,1,0,0,0,2075,2006,1,0,0,0,2075,
        2007,1,0,0,0,2075,2008,1,0,0,0,2075,2009,1,0,0,0,2075,2010,1,0,0,
        0,2075,2011,1,0,0,0,2075,2012,1,0,0,0,2075,2013,1,0,0,0,2075,2014,
        1,0,0,0,2075,2015,1,0,0,0,2075,2016,1,0,0,0,2075,2017,1,0,0,0,2075,
        2018,1,0,0,0,2075,2019,1,0,0,0,2075,2020,1,0,0,0,2075,2021,1,0,0,
        0,2075,2022,1,0,0,0,2075,2023,1,0,0,0,2075,2024,1,0,0,0,2075,2025,
        1,0,0,0,2075,2026,1,0,0,0,2075,2027,1,0,0,0,2075,2028,1,0,0,0,2075,
        2029,1,0,0,0,2075,2030,1,0,0,0,2075,2031,1,0,0,0,2075,2032,1,0,0,
        0,2075,2033,1,0,0,0,2075,2034,1,0,0,0,2075,2035,1,0,0,0,2075,2036,
        1,0,0,0,2075,2037,1,0,0,0,2075,2038,1,0,0,0,2075,2039,1,0,0,0,2075,
        2040,1,0,0,0,2075,2041,1,0,0,0,2075,2042,1,0,0,0,2075,2043,1,0,0,
        0,2075,2044,1,0,0,0,2075,2045,1,0,0,0,2075,2046,1,0,0,0,2075,2047,
        1,0,0,0,2075,2048,1,0,0,0,2075,2049,1,0,0,0,2075,2050,1,0,0,0,2075,
        2051,1,0,0,0,2075,2052,1,0,0,0,2075,2053,1,0,0,0,2075,2054,1,0,0,
        0,2075,2055,1,0,0,0,2075,2056,1,0,0,0,2075,2057,1,0,0,0,2075,2058,
        1,0,0,0,2075,2059,1,0,0,0,2075,2060,1,0,0,0,2075,2061,1,0,0,0,2075,
        2062,1,0,0,0,2075,2063,1,0,0,0,2075,2064,1,0,0,0,2075,2065,1,0,0,
        0,2075,2066,1,0,0,0,2075,2067,1,0,0,0,2075,2068,1,0,0,0,2075,2069,
        1,0,0,0,2075,2070,1,0,0,0,2075,2071,1,0,0,0,2075,2072,1,0,0,0,2075,
        2073,1,0,0,0,2075,2074,1,0,0,0,2076,375,1,0,0,0,193,377,383,390,
        395,406,412,446,451,456,463,482,488,493,499,504,511,516,521,528,
        532,537,545,549,553,559,564,568,572,580,586,592,595,604,606,612,
        620,625,629,636,641,653,664,669,673,680,686,691,696,700,704,709,
        714,718,732,743,746,753,758,762,782,789,798,805,810,815,820,825,
        830,835,847,858,865,873,879,885,891,899,909,915,926,934,940,946,
        954,962,968,977,989,995,1034,1040,1065,1072,1075,1082,1087,1093,
        1102,1106,1115,1126,1132,1135,1140,1145,1149,1153,1156,1160,1163,
        1168,1171,1176,1183,1188,1201,1224,1229,1237,1246,1256,1265,1272,
        1287,1302,1311,1320,1331,1339,1345,1356,1358,1364,1372,1381,1385,
        1387,1404,1409,1426,1436,1443,1445,1460,1481,1486,1492,1503,1516,
        1522,1529,1536,1548,1552,1577,1585,1589,1615,1628,1635,1638,1645,
        1648,1655,1661,1673,1679,1695,1701,1705,1711,1745,1781,1818,1827,
        1832,1837,1842,1851,1872,1882,1890,1898,1906,1915,1920,1923,1932,
        1935,1944,1948,1962,2075
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
    public rexCommand(): RexCommandContext | null {
        return this.getRuleContext(0, RexCommandContext);
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
    public REX(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.REX, 0);
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


export class RexCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public REX(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.REX, 0)!;
    }
    public rexExpr(): RexExprContext {
        return this.getRuleContext(0, RexExprContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_rexCommand;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitRexCommand) {
            return visitor.visitRexCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RexExprContext extends antlr.ParserRuleContext {
    public _field?: QualifiedNameContext;
    public _pattern?: StringLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FIELD(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.FIELD, 0)!;
    }
    public EQUAL(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.EQUAL, 0)!;
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public stringLiteral(): StringLiteralContext {
        return this.getRuleContext(0, StringLiteralContext)!;
    }
    public rexOption(): RexOptionContext[];
    public rexOption(i: number): RexOptionContext | null;
    public rexOption(i?: number): RexOptionContext[] | RexOptionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RexOptionContext);
        }

        return this.getRuleContext(i, RexOptionContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_rexExpr;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitRexExpr) {
            return visitor.visitRexExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RexOptionContext extends antlr.ParserRuleContext {
    public _maxMatch?: IntegerLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MAX_MATCH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MAX_MATCH, 0);
    }
    public EQUAL(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.EQUAL, 0)!;
    }
    public integerLiteral(): IntegerLiteralContext | null {
        return this.getRuleContext(0, IntegerLiteralContext);
    }
    public MODE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MODE, 0);
    }
    public EXTRACT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.EXTRACT, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_rexOption;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitRexOption) {
            return visitor.visitRexOption(this);
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
    public dynamicSourceClause(): DynamicSourceClauseContext | null {
        return this.getRuleContext(0, DynamicSourceClauseContext);
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


export class DynamicSourceClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT_SQR_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_SQR_PRTHS, 0)!;
    }
    public sourceReferences(): SourceReferencesContext {
        return this.getRuleContext(0, SourceReferencesContext)!;
    }
    public RT_SQR_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_SQR_PRTHS, 0)!;
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.COMMA, 0);
    }
    public sourceFilterArgs(): SourceFilterArgsContext | null {
        return this.getRuleContext(0, SourceFilterArgsContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_dynamicSourceClause;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitDynamicSourceClause) {
            return visitor.visitDynamicSourceClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SourceReferencesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public sourceReference(): SourceReferenceContext[];
    public sourceReference(i: number): SourceReferenceContext | null;
    public sourceReference(i?: number): SourceReferenceContext[] | SourceReferenceContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SourceReferenceContext);
        }

        return this.getRuleContext(i, SourceReferenceContext);
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
        return OpenSearchPPLParser.RULE_sourceReferences;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitSourceReferences) {
            return visitor.visitSourceReferences(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SourceReferenceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public wcQualifiedName(): WcQualifiedNameContext {
        return this.getRuleContext(0, WcQualifiedNameContext)!;
    }
    public CLUSTER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.CLUSTER, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_sourceReference;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitSourceReference) {
            return visitor.visitSourceReference(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SourceFilterArgsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public sourceFilterArg(): SourceFilterArgContext[];
    public sourceFilterArg(i: number): SourceFilterArgContext | null;
    public sourceFilterArg(i?: number): SourceFilterArgContext[] | SourceFilterArgContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SourceFilterArgContext);
        }

        return this.getRuleContext(i, SourceFilterArgContext);
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
        return OpenSearchPPLParser.RULE_sourceFilterArgs;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitSourceFilterArgs) {
            return visitor.visitSourceFilterArgs(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SourceFilterArgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ident(): IdentContext {
        return this.getRuleContext(0, IdentContext)!;
    }
    public EQUAL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.EQUAL, 0);
    }
    public literalValue(): LiteralValueContext | null {
        return this.getRuleContext(0, LiteralValueContext);
    }
    public IN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.IN, 0);
    }
    public valueList(): ValueListContext | null {
        return this.getRuleContext(0, ValueListContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchPPLParser.RULE_sourceFilterArg;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitSourceFilterArg) {
            return visitor.visitSourceFilterArg(this);
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
    public _orignalField?: RenameFieldExpressionContext;
    public _renamedField?: RenameFieldExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.AS, 0)!;
    }
    public renameFieldExpression(): RenameFieldExpressionContext[];
    public renameFieldExpression(i: number): RenameFieldExpressionContext | null;
    public renameFieldExpression(i?: number): RenameFieldExpressionContext[] | RenameFieldExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RenameFieldExpressionContext);
        }

        return this.getRuleContext(i, RenameFieldExpressionContext);
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
    public MEDIAN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MEDIAN, 0);
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


export class RenameFieldExpressionContext extends antlr.ParserRuleContext {
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
        return OpenSearchPPLParser.RULE_renameFieldExpression;
    }
    public override accept<Result>(visitor: OpenSearchPPLParserVisitor<Result>): Result | null {
        if (visitor.visitRenameFieldExpression) {
            return visitor.visitRenameFieldExpression(this);
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
