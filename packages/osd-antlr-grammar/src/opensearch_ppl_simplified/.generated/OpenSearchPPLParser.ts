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
    public static readonly RENAME = 9;
    public static readonly STATS = 10;
    public static readonly EVENTSTATS = 11;
    public static readonly DEDUP = 12;
    public static readonly SORT = 13;
    public static readonly EVAL = 14;
    public static readonly HEAD = 15;
    public static readonly TOP = 16;
    public static readonly RARE = 17;
    public static readonly PARSE = 18;
    public static readonly REGEX = 19;
    public static readonly PUNCT = 20;
    public static readonly GROK = 21;
    public static readonly PATTERN = 22;
    public static readonly PATTERNS = 23;
    public static readonly NEW_FIELD = 24;
    public static readonly KMEANS = 25;
    public static readonly AD = 26;
    public static readonly ML = 27;
    public static readonly FILLNULL = 28;
    public static readonly FLATTEN = 29;
    public static readonly TRENDLINE = 30;
    public static readonly APPENDCOL = 31;
    public static readonly EXPAND = 32;
    public static readonly SIMPLE_PATTERN = 33;
    public static readonly BRAIN = 34;
    public static readonly VARIABLE_COUNT_THRESHOLD = 35;
    public static readonly FREQUENCY_THRESHOLD_PERCENTAGE = 36;
    public static readonly METHOD = 37;
    public static readonly MAX_SAMPLE_COUNT = 38;
    public static readonly BUFFER_LIMIT = 39;
    public static readonly LABEL = 40;
    public static readonly AGGREGATION = 41;
    public static readonly JOIN = 42;
    public static readonly ON = 43;
    public static readonly INNER = 44;
    public static readonly OUTER = 45;
    public static readonly FULL = 46;
    public static readonly SEMI = 47;
    public static readonly ANTI = 48;
    public static readonly CROSS = 49;
    public static readonly LEFT_HINT = 50;
    public static readonly RIGHT_HINT = 51;
    public static readonly AS = 52;
    public static readonly BY = 53;
    public static readonly SOURCE = 54;
    public static readonly INDEX = 55;
    public static readonly D = 56;
    public static readonly DESC = 57;
    public static readonly DATASOURCES = 58;
    public static readonly USING = 59;
    public static readonly WITH = 60;
    public static readonly SIMPLE = 61;
    public static readonly STANDARD = 62;
    public static readonly COST = 63;
    public static readonly EXTENDED = 64;
    public static readonly OVERRIDE = 65;
    public static readonly AUTO = 66;
    public static readonly STR = 67;
    public static readonly NUM = 68;
    public static readonly SMA = 69;
    public static readonly WMA = 70;
    public static readonly KEEPEMPTY = 71;
    public static readonly CONSECUTIVE = 72;
    public static readonly DEDUP_SPLITVALUES = 73;
    public static readonly PARTITIONS = 74;
    public static readonly ALLNUM = 75;
    public static readonly DELIM = 76;
    public static readonly CENTROIDS = 77;
    public static readonly ITERATIONS = 78;
    public static readonly DISTANCE_TYPE = 79;
    public static readonly NUMBER_OF_TREES = 80;
    public static readonly SHINGLE_SIZE = 81;
    public static readonly SAMPLE_SIZE = 82;
    public static readonly OUTPUT_AFTER = 83;
    public static readonly TIME_DECAY = 84;
    public static readonly ANOMALY_RATE = 85;
    public static readonly CATEGORY_FIELD = 86;
    public static readonly TIME_FIELD = 87;
    public static readonly TIME_ZONE = 88;
    public static readonly TRAINING_DATA_SIZE = 89;
    public static readonly ANOMALY_SCORE_THRESHOLD = 90;
    public static readonly APPEND = 91;
    public static readonly COUNTFIELD = 92;
    public static readonly SHOWCOUNT = 93;
    public static readonly CASE = 94;
    public static readonly ELSE = 95;
    public static readonly IN = 96;
    public static readonly EXISTS = 97;
    public static readonly GEOIP = 98;
    public static readonly NOT = 99;
    public static readonly OR = 100;
    public static readonly AND = 101;
    public static readonly XOR = 102;
    public static readonly TRUE = 103;
    public static readonly FALSE = 104;
    public static readonly REGEXP = 105;
    public static readonly CONVERT_TZ = 106;
    public static readonly DATETIME = 107;
    public static readonly DAY = 108;
    public static readonly DAY_HOUR = 109;
    public static readonly DAY_MICROSECOND = 110;
    public static readonly DAY_MINUTE = 111;
    public static readonly DAY_OF_YEAR = 112;
    public static readonly DAY_SECOND = 113;
    public static readonly HOUR = 114;
    public static readonly HOUR_MICROSECOND = 115;
    public static readonly HOUR_MINUTE = 116;
    public static readonly HOUR_OF_DAY = 117;
    public static readonly HOUR_SECOND = 118;
    public static readonly INTERVAL = 119;
    public static readonly MICROSECOND = 120;
    public static readonly MILLISECOND = 121;
    public static readonly MINUTE = 122;
    public static readonly MINUTE_MICROSECOND = 123;
    public static readonly MINUTE_OF_DAY = 124;
    public static readonly MINUTE_OF_HOUR = 125;
    public static readonly MINUTE_SECOND = 126;
    public static readonly MONTH = 127;
    public static readonly MONTH_OF_YEAR = 128;
    public static readonly QUARTER = 129;
    public static readonly SECOND = 130;
    public static readonly SECOND_MICROSECOND = 131;
    public static readonly SECOND_OF_MINUTE = 132;
    public static readonly WEEK = 133;
    public static readonly WEEK_OF_YEAR = 134;
    public static readonly YEAR = 135;
    public static readonly YEAR_MONTH = 136;
    public static readonly DATAMODEL = 137;
    public static readonly LOOKUP = 138;
    public static readonly SAVEDSEARCH = 139;
    public static readonly INT = 140;
    public static readonly INTEGER = 141;
    public static readonly DOUBLE = 142;
    public static readonly LONG = 143;
    public static readonly FLOAT = 144;
    public static readonly STRING = 145;
    public static readonly BOOLEAN = 146;
    public static readonly IP = 147;
    public static readonly PIPE = 148;
    public static readonly COMMA = 149;
    public static readonly DOT = 150;
    public static readonly EQUAL = 151;
    public static readonly GREATER = 152;
    public static readonly LESS = 153;
    public static readonly NOT_GREATER = 154;
    public static readonly NOT_LESS = 155;
    public static readonly NOT_EQUAL = 156;
    public static readonly PLUS = 157;
    public static readonly MINUS = 158;
    public static readonly STAR = 159;
    public static readonly DIVIDE = 160;
    public static readonly MODULE = 161;
    public static readonly EXCLAMATION_SYMBOL = 162;
    public static readonly COLON = 163;
    public static readonly LT_PRTHS = 164;
    public static readonly RT_PRTHS = 165;
    public static readonly LT_SQR_PRTHS = 166;
    public static readonly RT_SQR_PRTHS = 167;
    public static readonly SINGLE_QUOTE = 168;
    public static readonly DOUBLE_QUOTE = 169;
    public static readonly BACKTICK = 170;
    public static readonly ARROW = 171;
    public static readonly BIT_NOT_OP = 172;
    public static readonly BIT_AND_OP = 173;
    public static readonly BIT_XOR_OP = 174;
    public static readonly AVG = 175;
    public static readonly COUNT = 176;
    public static readonly DISTINCT_COUNT = 177;
    public static readonly DISTINCT_COUNT_APPROX = 178;
    public static readonly ESTDC = 179;
    public static readonly ESTDC_ERROR = 180;
    public static readonly MAX = 181;
    public static readonly MEAN = 182;
    public static readonly MEDIAN = 183;
    public static readonly MIN = 184;
    public static readonly MODE = 185;
    public static readonly RANGE = 186;
    public static readonly STDEV = 187;
    public static readonly STDEVP = 188;
    public static readonly SUM = 189;
    public static readonly SUMSQ = 190;
    public static readonly VAR_SAMP = 191;
    public static readonly VAR_POP = 192;
    public static readonly STDDEV_SAMP = 193;
    public static readonly STDDEV_POP = 194;
    public static readonly PERCENTILE = 195;
    public static readonly PERCENTILE_APPROX = 196;
    public static readonly EARLIEST = 197;
    public static readonly LATEST = 198;
    public static readonly TAKE = 199;
    public static readonly LIST = 200;
    public static readonly VALUES = 201;
    public static readonly PER_DAY = 202;
    public static readonly PER_HOUR = 203;
    public static readonly PER_MINUTE = 204;
    public static readonly PER_SECOND = 205;
    public static readonly RATE = 206;
    public static readonly SPARKLINE = 207;
    public static readonly C = 208;
    public static readonly DC = 209;
    public static readonly ROW_NUMBER = 210;
    public static readonly RANK = 211;
    public static readonly DENSE_RANK = 212;
    public static readonly PERCENT_RANK = 213;
    public static readonly CUME_DIST = 214;
    public static readonly FIRST = 215;
    public static readonly LAST = 216;
    public static readonly NTH = 217;
    public static readonly NTILE = 218;
    public static readonly ABS = 219;
    public static readonly CBRT = 220;
    public static readonly CEIL = 221;
    public static readonly CEILING = 222;
    public static readonly CONV = 223;
    public static readonly CRC32 = 224;
    public static readonly E = 225;
    public static readonly EXP = 226;
    public static readonly FLOOR = 227;
    public static readonly LN = 228;
    public static readonly LOG = 229;
    public static readonly LOG10 = 230;
    public static readonly LOG2 = 231;
    public static readonly MOD = 232;
    public static readonly PI = 233;
    public static readonly POSITION = 234;
    public static readonly POW = 235;
    public static readonly POWER = 236;
    public static readonly RAND = 237;
    public static readonly ROUND = 238;
    public static readonly SIGN = 239;
    public static readonly SQRT = 240;
    public static readonly TRUNCATE = 241;
    public static readonly ACOS = 242;
    public static readonly ASIN = 243;
    public static readonly ATAN = 244;
    public static readonly ATAN2 = 245;
    public static readonly COS = 246;
    public static readonly COT = 247;
    public static readonly DEGREES = 248;
    public static readonly RADIANS = 249;
    public static readonly SIN = 250;
    public static readonly TAN = 251;
    public static readonly MD5 = 252;
    public static readonly SHA1 = 253;
    public static readonly SHA2 = 254;
    public static readonly ADDDATE = 255;
    public static readonly ADDTIME = 256;
    public static readonly CURDATE = 257;
    public static readonly CURRENT_DATE = 258;
    public static readonly CURRENT_TIME = 259;
    public static readonly CURRENT_TIMESTAMP = 260;
    public static readonly CURTIME = 261;
    public static readonly DATE = 262;
    public static readonly DATEDIFF = 263;
    public static readonly DATE_ADD = 264;
    public static readonly DATE_FORMAT = 265;
    public static readonly DATE_SUB = 266;
    public static readonly DAYNAME = 267;
    public static readonly DAYOFMONTH = 268;
    public static readonly DAYOFWEEK = 269;
    public static readonly DAYOFYEAR = 270;
    public static readonly DAY_OF_MONTH = 271;
    public static readonly DAY_OF_WEEK = 272;
    public static readonly EXTRACT = 273;
    public static readonly FROM_DAYS = 274;
    public static readonly FROM_UNIXTIME = 275;
    public static readonly GET_FORMAT = 276;
    public static readonly LAST_DAY = 277;
    public static readonly LOCALTIME = 278;
    public static readonly LOCALTIMESTAMP = 279;
    public static readonly MAKEDATE = 280;
    public static readonly MAKETIME = 281;
    public static readonly MONTHNAME = 282;
    public static readonly NOW = 283;
    public static readonly PERIOD_ADD = 284;
    public static readonly PERIOD_DIFF = 285;
    public static readonly SEC_TO_TIME = 286;
    public static readonly STR_TO_DATE = 287;
    public static readonly SUBDATE = 288;
    public static readonly SUBTIME = 289;
    public static readonly SYSDATE = 290;
    public static readonly TIME = 291;
    public static readonly TIMEDIFF = 292;
    public static readonly TIMESTAMP = 293;
    public static readonly TIMESTAMPADD = 294;
    public static readonly TIMESTAMPDIFF = 295;
    public static readonly TIME_FORMAT = 296;
    public static readonly TIME_TO_SEC = 297;
    public static readonly TO_DAYS = 298;
    public static readonly TO_SECONDS = 299;
    public static readonly UNIX_TIMESTAMP = 300;
    public static readonly UTC_DATE = 301;
    public static readonly UTC_TIME = 302;
    public static readonly UTC_TIMESTAMP = 303;
    public static readonly WEEKDAY = 304;
    public static readonly YEARWEEK = 305;
    public static readonly SUBSTR = 306;
    public static readonly SUBSTRING = 307;
    public static readonly LTRIM = 308;
    public static readonly RTRIM = 309;
    public static readonly TRIM = 310;
    public static readonly TO = 311;
    public static readonly LOWER = 312;
    public static readonly UPPER = 313;
    public static readonly CONCAT = 314;
    public static readonly CONCAT_WS = 315;
    public static readonly LENGTH = 316;
    public static readonly STRCMP = 317;
    public static readonly RIGHT = 318;
    public static readonly LEFT = 319;
    public static readonly ASCII = 320;
    public static readonly LOCATE = 321;
    public static readonly REPLACE = 322;
    public static readonly REVERSE = 323;
    public static readonly CAST = 324;
    public static readonly LIKE = 325;
    public static readonly ISNULL = 326;
    public static readonly ISNOTNULL = 327;
    public static readonly CIDRMATCH = 328;
    public static readonly BETWEEN = 329;
    public static readonly ISPRESENT = 330;
    public static readonly ISEMPTY = 331;
    public static readonly ISBLANK = 332;
    public static readonly ARRAY = 333;
    public static readonly ARRAY_LENGTH = 334;
    public static readonly FORALL = 335;
    public static readonly FILTER = 336;
    public static readonly TRANSFORM = 337;
    public static readonly REDUCE = 338;
    public static readonly JSON_VALID = 339;
    public static readonly JSON = 340;
    public static readonly JSON_OBJECT = 341;
    public static readonly JSON_ARRAY = 342;
    public static readonly JSON_ARRAY_LENGTH = 343;
    public static readonly JSON_EXTRACT = 344;
    public static readonly JSON_KEYS = 345;
    public static readonly JSON_SET = 346;
    public static readonly JSON_DELETE = 347;
    public static readonly JSON_APPEND = 348;
    public static readonly JSON_EXTEND = 349;
    public static readonly IFNULL = 350;
    public static readonly NULLIF = 351;
    public static readonly IF = 352;
    public static readonly TYPEOF = 353;
    public static readonly COALESCE = 354;
    public static readonly MATCH = 355;
    public static readonly MATCH_PHRASE = 356;
    public static readonly MATCH_PHRASE_PREFIX = 357;
    public static readonly MATCH_BOOL_PREFIX = 358;
    public static readonly SIMPLE_QUERY_STRING = 359;
    public static readonly MULTI_MATCH = 360;
    public static readonly QUERY_STRING = 361;
    public static readonly ALLOW_LEADING_WILDCARD = 362;
    public static readonly ANALYZE_WILDCARD = 363;
    public static readonly ANALYZER = 364;
    public static readonly AUTO_GENERATE_SYNONYMS_PHRASE_QUERY = 365;
    public static readonly BOOST = 366;
    public static readonly CUTOFF_FREQUENCY = 367;
    public static readonly DEFAULT_FIELD = 368;
    public static readonly DEFAULT_OPERATOR = 369;
    public static readonly ENABLE_POSITION_INCREMENTS = 370;
    public static readonly ESCAPE = 371;
    public static readonly FLAGS = 372;
    public static readonly FUZZY_MAX_EXPANSIONS = 373;
    public static readonly FUZZY_PREFIX_LENGTH = 374;
    public static readonly FUZZY_TRANSPOSITIONS = 375;
    public static readonly FUZZY_REWRITE = 376;
    public static readonly FUZZINESS = 377;
    public static readonly LENIENT = 378;
    public static readonly LOW_FREQ_OPERATOR = 379;
    public static readonly MAX_DETERMINIZED_STATES = 380;
    public static readonly MAX_EXPANSIONS = 381;
    public static readonly MINIMUM_SHOULD_MATCH = 382;
    public static readonly OPERATOR = 383;
    public static readonly PHRASE_SLOP = 384;
    public static readonly PREFIX_LENGTH = 385;
    public static readonly QUOTE_ANALYZER = 386;
    public static readonly QUOTE_FIELD_SUFFIX = 387;
    public static readonly REWRITE = 388;
    public static readonly SLOP = 389;
    public static readonly TIE_BREAKER = 390;
    public static readonly TYPE = 391;
    public static readonly ZERO_TERMS_QUERY = 392;
    public static readonly SPAN = 393;
    public static readonly MS = 394;
    public static readonly S = 395;
    public static readonly M = 396;
    public static readonly H = 397;
    public static readonly W = 398;
    public static readonly Q = 399;
    public static readonly Y = 400;
    public static readonly ID = 401;
    public static readonly CLUSTER = 402;
    public static readonly INTEGER_LITERAL = 403;
    public static readonly DECIMAL_LITERAL = 404;
    public static readonly FLOAT_LITERAL = 405;
    public static readonly DOUBLE_LITERAL = 406;
    public static readonly ID_DATE_SUFFIX = 407;
    public static readonly DQUOTA_STRING = 408;
    public static readonly SQUOTA_STRING = 409;
    public static readonly BQUOTA_STRING = 410;
    public static readonly LINE_COMMENT = 411;
    public static readonly BLOCK_COMMENT = 412;
    public static readonly ERROR_RECOGNITION = 413;
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
    public static readonly RULE_renameCommand = 14;
    public static readonly RULE_statsCommand = 15;
    public static readonly RULE_eventstatsCommand = 16;
    public static readonly RULE_dedupCommand = 17;
    public static readonly RULE_sortCommand = 18;
    public static readonly RULE_evalCommand = 19;
    public static readonly RULE_headCommand = 20;
    public static readonly RULE_topCommand = 21;
    public static readonly RULE_rareCommand = 22;
    public static readonly RULE_grokCommand = 23;
    public static readonly RULE_parseCommand = 24;
    public static readonly RULE_patternsMethod = 25;
    public static readonly RULE_patternsCommand = 26;
    public static readonly RULE_patternsParameter = 27;
    public static readonly RULE_patternMethod = 28;
    public static readonly RULE_patternMode = 29;
    public static readonly RULE_lookupCommand = 30;
    public static readonly RULE_lookupMappingList = 31;
    public static readonly RULE_outputCandidateList = 32;
    public static readonly RULE_lookupPair = 33;
    public static readonly RULE_fillnullCommand = 34;
    public static readonly RULE_fillNullWith = 35;
    public static readonly RULE_fillNullUsing = 36;
    public static readonly RULE_replacementPair = 37;
    public static readonly RULE_trendlineCommand = 38;
    public static readonly RULE_trendlineClause = 39;
    public static readonly RULE_trendlineType = 40;
    public static readonly RULE_expandCommand = 41;
    public static readonly RULE_flattenCommand = 42;
    public static readonly RULE_appendcolCommand = 43;
    public static readonly RULE_kmeansCommand = 44;
    public static readonly RULE_kmeansParameter = 45;
    public static readonly RULE_adCommand = 46;
    public static readonly RULE_adParameter = 47;
    public static readonly RULE_mlCommand = 48;
    public static readonly RULE_mlArg = 49;
    public static readonly RULE_fromClause = 50;
    public static readonly RULE_tableOrSubqueryClause = 51;
    public static readonly RULE_tableSourceClause = 52;
    public static readonly RULE_joinCommand = 53;
    public static readonly RULE_joinType = 54;
    public static readonly RULE_sideAlias = 55;
    public static readonly RULE_joinCriteria = 56;
    public static readonly RULE_joinHintList = 57;
    public static readonly RULE_hintPair = 58;
    public static readonly RULE_renameClasue = 59;
    public static readonly RULE_byClause = 60;
    public static readonly RULE_statsByClause = 61;
    public static readonly RULE_bySpanClause = 62;
    public static readonly RULE_spanClause = 63;
    public static readonly RULE_sortbyClause = 64;
    public static readonly RULE_evalClause = 65;
    public static readonly RULE_eventstatsAggTerm = 66;
    public static readonly RULE_windowFunction = 67;
    public static readonly RULE_windowFunctionName = 68;
    public static readonly RULE_scalarWindowFunctionName = 69;
    public static readonly RULE_statsAggTerm = 70;
    public static readonly RULE_statsFunction = 71;
    public static readonly RULE_statsFunctionName = 72;
    public static readonly RULE_takeAggFunction = 73;
    public static readonly RULE_percentileApproxFunction = 74;
    public static readonly RULE_numericLiteral = 75;
    public static readonly RULE_logicalExpression = 76;
    public static readonly RULE_expression = 77;
    public static readonly RULE_valueExpression = 78;
    public static readonly RULE_functionCall = 79;
    public static readonly RULE_positionFunctionCall = 80;
    public static readonly RULE_caseFunctionCall = 81;
    public static readonly RULE_relevanceExpression = 82;
    public static readonly RULE_singleFieldRelevanceFunction = 83;
    public static readonly RULE_multiFieldRelevanceFunction = 84;
    public static readonly RULE_tableSource = 85;
    public static readonly RULE_tableFunction = 86;
    public static readonly RULE_fieldList = 87;
    public static readonly RULE_wcFieldList = 88;
    public static readonly RULE_sortField = 89;
    public static readonly RULE_sortFieldExpression = 90;
    public static readonly RULE_fieldExpression = 91;
    public static readonly RULE_wcFieldExpression = 92;
    public static readonly RULE_evalFunctionCall = 93;
    public static readonly RULE_dataTypeFunctionCall = 94;
    public static readonly RULE_convertedDataType = 95;
    public static readonly RULE_evalFunctionName = 96;
    public static readonly RULE_functionArgs = 97;
    public static readonly RULE_functionArg = 98;
    public static readonly RULE_functionArgExpression = 99;
    public static readonly RULE_lambda = 100;
    public static readonly RULE_relevanceArg = 101;
    public static readonly RULE_relevanceArgName = 102;
    public static readonly RULE_relevanceFieldAndWeight = 103;
    public static readonly RULE_relevanceFieldWeight = 104;
    public static readonly RULE_relevanceField = 105;
    public static readonly RULE_relevanceQuery = 106;
    public static readonly RULE_relevanceArgValue = 107;
    public static readonly RULE_mathematicalFunctionName = 108;
    public static readonly RULE_geoipFunctionName = 109;
    public static readonly RULE_collectionFunctionName = 110;
    public static readonly RULE_trigonometricFunctionName = 111;
    public static readonly RULE_jsonFunctionName = 112;
    public static readonly RULE_cryptographicFunctionName = 113;
    public static readonly RULE_dateTimeFunctionName = 114;
    public static readonly RULE_getFormatFunctionCall = 115;
    public static readonly RULE_getFormatType = 116;
    public static readonly RULE_extractFunctionCall = 117;
    public static readonly RULE_simpleDateTimePart = 118;
    public static readonly RULE_complexDateTimePart = 119;
    public static readonly RULE_datetimePart = 120;
    public static readonly RULE_timestampFunctionCall = 121;
    public static readonly RULE_timestampFunctionName = 122;
    public static readonly RULE_conditionFunctionName = 123;
    public static readonly RULE_flowControlFunctionName = 124;
    public static readonly RULE_systemFunctionName = 125;
    public static readonly RULE_textFunctionName = 126;
    public static readonly RULE_positionFunctionName = 127;
    public static readonly RULE_comparisonOperator = 128;
    public static readonly RULE_singleFieldRelevanceFunctionName = 129;
    public static readonly RULE_multiFieldRelevanceFunctionName = 130;
    public static readonly RULE_literalValue = 131;
    public static readonly RULE_intervalLiteral = 132;
    public static readonly RULE_stringLiteral = 133;
    public static readonly RULE_integerLiteral = 134;
    public static readonly RULE_decimalLiteral = 135;
    public static readonly RULE_doubleLiteral = 136;
    public static readonly RULE_floatLiteral = 137;
    public static readonly RULE_booleanLiteral = 138;
    public static readonly RULE_datetimeLiteral = 139;
    public static readonly RULE_dateLiteral = 140;
    public static readonly RULE_timeLiteral = 141;
    public static readonly RULE_timestampLiteral = 142;
    public static readonly RULE_intervalUnit = 143;
    public static readonly RULE_timespanUnit = 144;
    public static readonly RULE_valueList = 145;
    public static readonly RULE_qualifiedName = 146;
    public static readonly RULE_tableQualifiedName = 147;
    public static readonly RULE_wcQualifiedName = 148;
    public static readonly RULE_identifierSeq = 149;
    public static readonly RULE_ident = 150;
    public static readonly RULE_tableIdent = 151;
    public static readonly RULE_wildcard = 152;
    public static readonly RULE_keywordsCanBeId = 153;

    public static readonly literalNames = [
        null, null, "'SEARCH'", "'DESCRIBE'", "'SHOW'", "'EXPLAIN'", "'FROM'", 
        "'WHERE'", "'FIELDS'", "'RENAME'", "'STATS'", "'EVENTSTATS'", "'DEDUP'", 
        "'SORT'", "'EVAL'", "'HEAD'", "'TOP'", "'RARE'", "'PARSE'", "'REGEX'", 
        "'PUNCT'", "'GROK'", "'PATTERN'", "'PATTERNS'", "'NEW_FIELD'", "'KMEANS'", 
        "'AD'", "'ML'", "'FILLNULL'", "'FLATTEN'", "'TRENDLINE'", "'APPENDCOL'", 
        "'EXPAND'", "'SIMPLE_PATTERN'", "'BRAIN'", "'VARIABLE_COUNT_THRESHOLD'", 
        "'FREQUENCY_THRESHOLD_PERCENTAGE'", "'METHOD'", "'MAX_SAMPLE_COUNT'", 
        "'BUFFER_LIMIT'", "'LABEL'", "'AGGREGATION'", "'JOIN'", "'ON'", 
        "'INNER'", "'OUTER'", "'FULL'", "'SEMI'", "'ANTI'", "'CROSS'", "'HINT.LEFT'", 
        "'HINT.RIGHT'", "'AS'", "'BY'", "'SOURCE'", "'INDEX'", "'D'", "'DESC'", 
        "'DATASOURCES'", "'USING'", "'WITH'", "'SIMPLE'", "'STANDARD'", 
        "'COST'", "'EXTENDED'", "'OVERRIDE'", "'AUTO'", "'STR'", "'NUM'", 
        "'SMA'", "'WMA'", "'KEEPEMPTY'", "'CONSECUTIVE'", "'DEDUP_SPLITVALUES'", 
        "'PARTITIONS'", "'ALLNUM'", "'DELIM'", "'CENTROIDS'", "'ITERATIONS'", 
        "'DISTANCE_TYPE'", "'NUMBER_OF_TREES'", "'SHINGLE_SIZE'", "'SAMPLE_SIZE'", 
        "'OUTPUT_AFTER'", "'TIME_DECAY'", "'ANOMALY_RATE'", "'CATEGORY_FIELD'", 
        "'TIME_FIELD'", "'TIME_ZONE'", "'TRAINING_DATA_SIZE'", "'ANOMALY_SCORE_THRESHOLD'", 
        "'APPEND'", "'COUNTFIELD'", "'SHOWCOUNT'", "'CASE'", "'ELSE'", "'IN'", 
        "'EXISTS'", "'GEOIP'", "'NOT'", "'OR'", "'AND'", "'XOR'", "'TRUE'", 
        "'FALSE'", "'REGEXP'", "'CONVERT_TZ'", "'DATETIME'", "'DAY'", "'DAY_HOUR'", 
        "'DAY_MICROSECOND'", "'DAY_MINUTE'", "'DAY_OF_YEAR'", "'DAY_SECOND'", 
        "'HOUR'", "'HOUR_MICROSECOND'", "'HOUR_MINUTE'", "'HOUR_OF_DAY'", 
        "'HOUR_SECOND'", "'INTERVAL'", "'MICROSECOND'", "'MILLISECOND'", 
        "'MINUTE'", "'MINUTE_MICROSECOND'", "'MINUTE_OF_DAY'", "'MINUTE_OF_HOUR'", 
        "'MINUTE_SECOND'", "'MONTH'", "'MONTH_OF_YEAR'", "'QUARTER'", "'SECOND'", 
        "'SECOND_MICROSECOND'", "'SECOND_OF_MINUTE'", "'WEEK'", "'WEEK_OF_YEAR'", 
        "'YEAR'", "'YEAR_MONTH'", "'DATAMODEL'", "'LOOKUP'", "'SAVEDSEARCH'", 
        "'INT'", "'INTEGER'", "'DOUBLE'", "'LONG'", "'FLOAT'", "'STRING'", 
        "'BOOLEAN'", "'IP'", "'|'", "','", "'.'", "'='", "'>'", "'<'", null, 
        null, null, "'+'", "'-'", "'*'", "'/'", "'%'", "'!'", "':'", "'('", 
        "')'", "'['", "']'", "'''", "'\"'", "'`'", "'->'", "'~'", "'&'", 
        "'^'", "'AVG'", "'COUNT'", "'DISTINCT_COUNT'", "'DISTINCT_COUNT_APPROX'", 
        "'ESTDC'", "'ESTDC_ERROR'", "'MAX'", "'MEAN'", "'MEDIAN'", "'MIN'", 
        "'MODE'", "'RANGE'", "'STDEV'", "'STDEVP'", "'SUM'", "'SUMSQ'", 
        "'VAR_SAMP'", "'VAR_POP'", "'STDDEV_SAMP'", "'STDDEV_POP'", "'PERCENTILE'", 
        "'PERCENTILE_APPROX'", "'EARLIEST'", "'LATEST'", "'TAKE'", "'LIST'", 
        "'VALUES'", "'PER_DAY'", "'PER_HOUR'", "'PER_MINUTE'", "'PER_SECOND'", 
        "'RATE'", "'SPARKLINE'", "'C'", "'DC'", "'ROW_NUMBER'", "'RANK'", 
        "'DENSE_RANK'", "'PERCENT_RANK'", "'CUME_DIST'", "'FIRST'", "'LAST'", 
        "'NTH'", "'NTILE'", "'ABS'", "'CBRT'", "'CEIL'", "'CEILING'", "'CONV'", 
        "'CRC32'", "'E'", "'EXP'", "'FLOOR'", "'LN'", "'LOG'", "'LOG10'", 
        "'LOG2'", "'MOD'", "'PI'", "'POSITION'", "'POW'", "'POWER'", "'RAND'", 
        "'ROUND'", "'SIGN'", "'SQRT'", "'TRUNCATE'", "'ACOS'", "'ASIN'", 
        "'ATAN'", "'ATAN2'", "'COS'", "'COT'", "'DEGREES'", "'RADIANS'", 
        "'SIN'", "'TAN'", "'MD5'", "'SHA1'", "'SHA2'", "'ADDDATE'", "'ADDTIME'", 
        "'CURDATE'", "'CURRENT_DATE'", "'CURRENT_TIME'", "'CURRENT_TIMESTAMP'", 
        "'CURTIME'", "'DATE'", "'DATEDIFF'", "'DATE_ADD'", "'DATE_FORMAT'", 
        "'DATE_SUB'", "'DAYNAME'", "'DAYOFMONTH'", "'DAYOFWEEK'", "'DAYOFYEAR'", 
        "'DAY_OF_MONTH'", "'DAY_OF_WEEK'", "'EXTRACT'", "'FROM_DAYS'", "'FROM_UNIXTIME'", 
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
        "'MS'", "'S'", "'M'", "'H'", "'W'", "'Q'", "'Y'"
    ];

    public static readonly symbolicNames = [
        null, "SPACE", "SEARCH", "DESCRIBE", "SHOW", "EXPLAIN", "FROM", 
        "WHERE", "FIELDS", "RENAME", "STATS", "EVENTSTATS", "DEDUP", "SORT", 
        "EVAL", "HEAD", "TOP", "RARE", "PARSE", "REGEX", "PUNCT", "GROK", 
        "PATTERN", "PATTERNS", "NEW_FIELD", "KMEANS", "AD", "ML", "FILLNULL", 
        "FLATTEN", "TRENDLINE", "APPENDCOL", "EXPAND", "SIMPLE_PATTERN", 
        "BRAIN", "VARIABLE_COUNT_THRESHOLD", "FREQUENCY_THRESHOLD_PERCENTAGE", 
        "METHOD", "MAX_SAMPLE_COUNT", "BUFFER_LIMIT", "LABEL", "AGGREGATION", 
        "JOIN", "ON", "INNER", "OUTER", "FULL", "SEMI", "ANTI", "CROSS", 
        "LEFT_HINT", "RIGHT_HINT", "AS", "BY", "SOURCE", "INDEX", "D", "DESC", 
        "DATASOURCES", "USING", "WITH", "SIMPLE", "STANDARD", "COST", "EXTENDED", 
        "OVERRIDE", "AUTO", "STR", "NUM", "SMA", "WMA", "KEEPEMPTY", "CONSECUTIVE", 
        "DEDUP_SPLITVALUES", "PARTITIONS", "ALLNUM", "DELIM", "CENTROIDS", 
        "ITERATIONS", "DISTANCE_TYPE", "NUMBER_OF_TREES", "SHINGLE_SIZE", 
        "SAMPLE_SIZE", "OUTPUT_AFTER", "TIME_DECAY", "ANOMALY_RATE", "CATEGORY_FIELD", 
        "TIME_FIELD", "TIME_ZONE", "TRAINING_DATA_SIZE", "ANOMALY_SCORE_THRESHOLD", 
        "APPEND", "COUNTFIELD", "SHOWCOUNT", "CASE", "ELSE", "IN", "EXISTS", 
        "GEOIP", "NOT", "OR", "AND", "XOR", "TRUE", "FALSE", "REGEXP", "CONVERT_TZ", 
        "DATETIME", "DAY", "DAY_HOUR", "DAY_MICROSECOND", "DAY_MINUTE", 
        "DAY_OF_YEAR", "DAY_SECOND", "HOUR", "HOUR_MICROSECOND", "HOUR_MINUTE", 
        "HOUR_OF_DAY", "HOUR_SECOND", "INTERVAL", "MICROSECOND", "MILLISECOND", 
        "MINUTE", "MINUTE_MICROSECOND", "MINUTE_OF_DAY", "MINUTE_OF_HOUR", 
        "MINUTE_SECOND", "MONTH", "MONTH_OF_YEAR", "QUARTER", "SECOND", 
        "SECOND_MICROSECOND", "SECOND_OF_MINUTE", "WEEK", "WEEK_OF_YEAR", 
        "YEAR", "YEAR_MONTH", "DATAMODEL", "LOOKUP", "SAVEDSEARCH", "INT", 
        "INTEGER", "DOUBLE", "LONG", "FLOAT", "STRING", "BOOLEAN", "IP", 
        "PIPE", "COMMA", "DOT", "EQUAL", "GREATER", "LESS", "NOT_GREATER", 
        "NOT_LESS", "NOT_EQUAL", "PLUS", "MINUS", "STAR", "DIVIDE", "MODULE", 
        "EXCLAMATION_SYMBOL", "COLON", "LT_PRTHS", "RT_PRTHS", "LT_SQR_PRTHS", 
        "RT_SQR_PRTHS", "SINGLE_QUOTE", "DOUBLE_QUOTE", "BACKTICK", "ARROW", 
        "BIT_NOT_OP", "BIT_AND_OP", "BIT_XOR_OP", "AVG", "COUNT", "DISTINCT_COUNT", 
        "DISTINCT_COUNT_APPROX", "ESTDC", "ESTDC_ERROR", "MAX", "MEAN", 
        "MEDIAN", "MIN", "MODE", "RANGE", "STDEV", "STDEVP", "SUM", "SUMSQ", 
        "VAR_SAMP", "VAR_POP", "STDDEV_SAMP", "STDDEV_POP", "PERCENTILE", 
        "PERCENTILE_APPROX", "EARLIEST", "LATEST", "TAKE", "LIST", "VALUES", 
        "PER_DAY", "PER_HOUR", "PER_MINUTE", "PER_SECOND", "RATE", "SPARKLINE", 
        "C", "DC", "ROW_NUMBER", "RANK", "DENSE_RANK", "PERCENT_RANK", "CUME_DIST", 
        "FIRST", "LAST", "NTH", "NTILE", "ABS", "CBRT", "CEIL", "CEILING", 
        "CONV", "CRC32", "E", "EXP", "FLOOR", "LN", "LOG", "LOG10", "LOG2", 
        "MOD", "PI", "POSITION", "POW", "POWER", "RAND", "ROUND", "SIGN", 
        "SQRT", "TRUNCATE", "ACOS", "ASIN", "ATAN", "ATAN2", "COS", "COT", 
        "DEGREES", "RADIANS", "SIN", "TAN", "MD5", "SHA1", "SHA2", "ADDDATE", 
        "ADDTIME", "CURDATE", "CURRENT_DATE", "CURRENT_TIME", "CURRENT_TIMESTAMP", 
        "CURTIME", "DATE", "DATEDIFF", "DATE_ADD", "DATE_FORMAT", "DATE_SUB", 
        "DAYNAME", "DAYOFMONTH", "DAYOFWEEK", "DAYOFYEAR", "DAY_OF_MONTH", 
        "DAY_OF_WEEK", "EXTRACT", "FROM_DAYS", "FROM_UNIXTIME", "GET_FORMAT", 
        "LAST_DAY", "LOCALTIME", "LOCALTIMESTAMP", "MAKEDATE", "MAKETIME", 
        "MONTHNAME", "NOW", "PERIOD_ADD", "PERIOD_DIFF", "SEC_TO_TIME", 
        "STR_TO_DATE", "SUBDATE", "SUBTIME", "SYSDATE", "TIME", "TIMEDIFF", 
        "TIMESTAMP", "TIMESTAMPADD", "TIMESTAMPDIFF", "TIME_FORMAT", "TIME_TO_SEC", 
        "TO_DAYS", "TO_SECONDS", "UNIX_TIMESTAMP", "UTC_DATE", "UTC_TIME", 
        "UTC_TIMESTAMP", "WEEKDAY", "YEARWEEK", "SUBSTR", "SUBSTRING", "LTRIM", 
        "RTRIM", "TRIM", "TO", "LOWER", "UPPER", "CONCAT", "CONCAT_WS", 
        "LENGTH", "STRCMP", "RIGHT", "LEFT", "ASCII", "LOCATE", "REPLACE", 
        "REVERSE", "CAST", "LIKE", "ISNULL", "ISNOTNULL", "CIDRMATCH", "BETWEEN", 
        "ISPRESENT", "ISEMPTY", "ISBLANK", "ARRAY", "ARRAY_LENGTH", "FORALL", 
        "FILTER", "TRANSFORM", "REDUCE", "JSON_VALID", "JSON", "JSON_OBJECT", 
        "JSON_ARRAY", "JSON_ARRAY_LENGTH", "JSON_EXTRACT", "JSON_KEYS", 
        "JSON_SET", "JSON_DELETE", "JSON_APPEND", "JSON_EXTEND", "IFNULL", 
        "NULLIF", "IF", "TYPEOF", "COALESCE", "MATCH", "MATCH_PHRASE", "MATCH_PHRASE_PREFIX", 
        "MATCH_BOOL_PREFIX", "SIMPLE_QUERY_STRING", "MULTI_MATCH", "QUERY_STRING", 
        "ALLOW_LEADING_WILDCARD", "ANALYZE_WILDCARD", "ANALYZER", "AUTO_GENERATE_SYNONYMS_PHRASE_QUERY", 
        "BOOST", "CUTOFF_FREQUENCY", "DEFAULT_FIELD", "DEFAULT_OPERATOR", 
        "ENABLE_POSITION_INCREMENTS", "ESCAPE", "FLAGS", "FUZZY_MAX_EXPANSIONS", 
        "FUZZY_PREFIX_LENGTH", "FUZZY_TRANSPOSITIONS", "FUZZY_REWRITE", 
        "FUZZINESS", "LENIENT", "LOW_FREQ_OPERATOR", "MAX_DETERMINIZED_STATES", 
        "MAX_EXPANSIONS", "MINIMUM_SHOULD_MATCH", "OPERATOR", "PHRASE_SLOP", 
        "PREFIX_LENGTH", "QUOTE_ANALYZER", "QUOTE_FIELD_SUFFIX", "REWRITE", 
        "SLOP", "TIE_BREAKER", "TYPE", "ZERO_TERMS_QUERY", "SPAN", "MS", 
        "S", "M", "H", "W", "Q", "Y", "ID", "CLUSTER", "INTEGER_LITERAL", 
        "DECIMAL_LITERAL", "FLOAT_LITERAL", "DOUBLE_LITERAL", "ID_DATE_SUFFIX", 
        "DQUOTA_STRING", "SQUOTA_STRING", "BQUOTA_STRING", "LINE_COMMENT", 
        "BLOCK_COMMENT", "ERROR_RECOGNITION"
    ];
    public static readonly ruleNames = [
        "root", "pplStatement", "queryStatement", "explainStatement", "explainMode", 
        "subSearch", "pplCommands", "commands", "commandName", "searchCommand", 
        "describeCommand", "showDataSourcesCommand", "whereCommand", "fieldsCommand", 
        "renameCommand", "statsCommand", "eventstatsCommand", "dedupCommand", 
        "sortCommand", "evalCommand", "headCommand", "topCommand", "rareCommand", 
        "grokCommand", "parseCommand", "patternsMethod", "patternsCommand", 
        "patternsParameter", "patternMethod", "patternMode", "lookupCommand", 
        "lookupMappingList", "outputCandidateList", "lookupPair", "fillnullCommand", 
        "fillNullWith", "fillNullUsing", "replacementPair", "trendlineCommand", 
        "trendlineClause", "trendlineType", "expandCommand", "flattenCommand", 
        "appendcolCommand", "kmeansCommand", "kmeansParameter", "adCommand", 
        "adParameter", "mlCommand", "mlArg", "fromClause", "tableOrSubqueryClause", 
        "tableSourceClause", "joinCommand", "joinType", "sideAlias", "joinCriteria", 
        "joinHintList", "hintPair", "renameClasue", "byClause", "statsByClause", 
        "bySpanClause", "spanClause", "sortbyClause", "evalClause", "eventstatsAggTerm", 
        "windowFunction", "windowFunctionName", "scalarWindowFunctionName", 
        "statsAggTerm", "statsFunction", "statsFunctionName", "takeAggFunction", 
        "percentileApproxFunction", "numericLiteral", "logicalExpression", 
        "expression", "valueExpression", "functionCall", "positionFunctionCall", 
        "caseFunctionCall", "relevanceExpression", "singleFieldRelevanceFunction", 
        "multiFieldRelevanceFunction", "tableSource", "tableFunction", "fieldList", 
        "wcFieldList", "sortField", "sortFieldExpression", "fieldExpression", 
        "wcFieldExpression", "evalFunctionCall", "dataTypeFunctionCall", 
        "convertedDataType", "evalFunctionName", "functionArgs", "functionArg", 
        "functionArgExpression", "lambda", "relevanceArg", "relevanceArgName", 
        "relevanceFieldAndWeight", "relevanceFieldWeight", "relevanceField", 
        "relevanceQuery", "relevanceArgValue", "mathematicalFunctionName", 
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
            this.state = 309;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2147483644) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4291818745) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4160749567) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967183) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 2143815167) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & 4294965445) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & 4294967295) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & 4294967295) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 4294967295) !== 0) || ((((_la - 292)) & ~0x1F) === 0 && ((1 << (_la - 292)) & 4294443007) !== 0) || ((((_la - 324)) & ~0x1F) === 0 && ((1 << (_la - 324)) & 4294967295) !== 0) || ((((_la - 356)) & ~0x1F) === 0 && ((1 << (_la - 356)) & 4294967295) !== 0) || ((((_la - 388)) & ~0x1F) === 0 && ((1 << (_la - 388)) & 7847935) !== 0)) {
                {
                this.state = 308;
                this.pplStatement();
                }
            }

            this.state = 311;
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
            this.state = 315;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 313;
                this.explainStatement();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 314;
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
            this.state = 317;
            this.pplCommands();
            this.state = 322;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 148) {
                {
                {
                this.state = 318;
                this.match(OpenSearchPPLParser.PIPE);
                this.state = 319;
                this.commands();
                }
                }
                this.state = 324;
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
            this.state = 325;
            this.match(OpenSearchPPLParser.EXPLAIN);
            this.state = 327;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context) ) {
            case 1:
                {
                this.state = 326;
                this.explainMode();
                }
                break;
            }
            this.state = 329;
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
            this.state = 331;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & 15) !== 0))) {
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
            this.state = 333;
            this.searchCommand();
            this.state = 338;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 148) {
                {
                {
                this.state = 334;
                this.match(OpenSearchPPLParser.PIPE);
                this.state = 335;
                this.commands();
                }
                }
                this.state = 340;
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
            this.state = 344;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 341;
                this.describeCommand();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 342;
                this.showDataSourcesCommand();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 343;
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
            this.state = 370;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.WHERE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 346;
                this.whereCommand();
                }
                break;
            case OpenSearchPPLParser.FIELDS:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 347;
                this.fieldsCommand();
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
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 348;
                this.joinCommand();
                }
                break;
            case OpenSearchPPLParser.RENAME:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 349;
                this.renameCommand();
                }
                break;
            case OpenSearchPPLParser.STATS:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 350;
                this.statsCommand();
                }
                break;
            case OpenSearchPPLParser.EVENTSTATS:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 351;
                this.eventstatsCommand();
                }
                break;
            case OpenSearchPPLParser.DEDUP:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 352;
                this.dedupCommand();
                }
                break;
            case OpenSearchPPLParser.SORT:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 353;
                this.sortCommand();
                }
                break;
            case OpenSearchPPLParser.EVAL:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 354;
                this.evalCommand();
                }
                break;
            case OpenSearchPPLParser.HEAD:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 355;
                this.headCommand();
                }
                break;
            case OpenSearchPPLParser.TOP:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 356;
                this.topCommand();
                }
                break;
            case OpenSearchPPLParser.RARE:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 357;
                this.rareCommand();
                }
                break;
            case OpenSearchPPLParser.GROK:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 358;
                this.grokCommand();
                }
                break;
            case OpenSearchPPLParser.PARSE:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 359;
                this.parseCommand();
                }
                break;
            case OpenSearchPPLParser.PATTERNS:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 360;
                this.patternsCommand();
                }
                break;
            case OpenSearchPPLParser.LOOKUP:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 361;
                this.lookupCommand();
                }
                break;
            case OpenSearchPPLParser.KMEANS:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 362;
                this.kmeansCommand();
                }
                break;
            case OpenSearchPPLParser.AD:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 363;
                this.adCommand();
                }
                break;
            case OpenSearchPPLParser.ML:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 364;
                this.mlCommand();
                }
                break;
            case OpenSearchPPLParser.FILLNULL:
                this.enterOuterAlt(localContext, 20);
                {
                this.state = 365;
                this.fillnullCommand();
                }
                break;
            case OpenSearchPPLParser.TRENDLINE:
                this.enterOuterAlt(localContext, 21);
                {
                this.state = 366;
                this.trendlineCommand();
                }
                break;
            case OpenSearchPPLParser.APPENDCOL:
                this.enterOuterAlt(localContext, 22);
                {
                this.state = 367;
                this.appendcolCommand();
                }
                break;
            case OpenSearchPPLParser.EXPAND:
                this.enterOuterAlt(localContext, 23);
                {
                this.state = 368;
                this.expandCommand();
                }
                break;
            case OpenSearchPPLParser.FLATTEN:
                this.enterOuterAlt(localContext, 24);
                {
                this.state = 369;
                this.flattenCommand();
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
            this.state = 372;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 2124939196) !== 0) || _la === 32 || _la === 42 || _la === 138)) {
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
            this.state = 375;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
            case 1:
                {
                this.state = 374;
                this.match(OpenSearchPPLParser.SEARCH);
                }
                break;
            }
            this.state = 380;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 377;
                    this.logicalExpression(0);
                    }
                    }
                }
                this.state = 382;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            }
            this.state = 383;
            this.fromClause();
            this.state = 387;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2147483644) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4291818745) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4160749567) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967183) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 2143815167) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & 4294965445) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & 4294967295) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & 4294967295) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 4294967295) !== 0) || ((((_la - 292)) & ~0x1F) === 0 && ((1 << (_la - 292)) & 4294443007) !== 0) || ((((_la - 324)) & ~0x1F) === 0 && ((1 << (_la - 324)) & 4294967295) !== 0) || ((((_la - 356)) & ~0x1F) === 0 && ((1 << (_la - 356)) & 4294967295) !== 0) || ((((_la - 388)) & ~0x1F) === 0 && ((1 << (_la - 388)) & 7847935) !== 0)) {
                {
                {
                this.state = 384;
                this.logicalExpression(0);
                }
                }
                this.state = 389;
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
            this.state = 390;
            this.match(OpenSearchPPLParser.DESCRIBE);
            this.state = 391;
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
            this.state = 393;
            this.match(OpenSearchPPLParser.SHOW);
            this.state = 394;
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
            this.state = 396;
            this.match(OpenSearchPPLParser.WHERE);
            this.state = 397;
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
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 399;
            this.match(OpenSearchPPLParser.FIELDS);
            this.state = 401;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 10, this.context) ) {
            case 1:
                {
                this.state = 400;
                _la = this.tokenStream.LA(1);
                if(!(_la === 157 || _la === 158)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            }
            this.state = 403;
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
    public renameCommand(): RenameCommandContext {
        let localContext = new RenameCommandContext(this.context, this.state);
        this.enterRule(localContext, 28, OpenSearchPPLParser.RULE_renameCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 405;
            this.match(OpenSearchPPLParser.RENAME);
            this.state = 406;
            this.renameClasue();
            this.state = 411;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 149) {
                {
                {
                this.state = 407;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 408;
                this.renameClasue();
                }
                }
                this.state = 413;
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
        this.enterRule(localContext, 30, OpenSearchPPLParser.RULE_statsCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 414;
            this.match(OpenSearchPPLParser.STATS);
            this.state = 418;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 74) {
                {
                this.state = 415;
                this.match(OpenSearchPPLParser.PARTITIONS);
                this.state = 416;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 417;
                localContext._partitions = this.integerLiteral();
                }
            }

            this.state = 423;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 75) {
                {
                this.state = 420;
                this.match(OpenSearchPPLParser.ALLNUM);
                this.state = 421;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 422;
                localContext._allnum = this.booleanLiteral();
                }
            }

            this.state = 428;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 76) {
                {
                this.state = 425;
                this.match(OpenSearchPPLParser.DELIM);
                this.state = 426;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 427;
                localContext._delim = this.stringLiteral();
                }
            }

            this.state = 430;
            this.statsAggTerm();
            this.state = 435;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 149) {
                {
                {
                this.state = 431;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 432;
                this.statsAggTerm();
                }
                }
                this.state = 437;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 439;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 53) {
                {
                this.state = 438;
                this.statsByClause();
                }
            }

            this.state = 444;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 73) {
                {
                this.state = 441;
                this.match(OpenSearchPPLParser.DEDUP_SPLITVALUES);
                this.state = 442;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 443;
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
        this.enterRule(localContext, 32, OpenSearchPPLParser.RULE_eventstatsCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 446;
            this.match(OpenSearchPPLParser.EVENTSTATS);
            this.state = 447;
            this.eventstatsAggTerm();
            this.state = 452;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 149) {
                {
                {
                this.state = 448;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 449;
                this.eventstatsAggTerm();
                }
                }
                this.state = 454;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 456;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 53) {
                {
                this.state = 455;
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
        this.enterRule(localContext, 34, OpenSearchPPLParser.RULE_dedupCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 458;
            this.match(OpenSearchPPLParser.DEDUP);
            this.state = 460;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context) ) {
            case 1:
                {
                this.state = 459;
                localContext._number_ = this.integerLiteral();
                }
                break;
            }
            this.state = 462;
            this.fieldList();
            this.state = 466;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 71) {
                {
                this.state = 463;
                this.match(OpenSearchPPLParser.KEEPEMPTY);
                this.state = 464;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 465;
                localContext._keepempty = this.booleanLiteral();
                }
            }

            this.state = 471;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 72) {
                {
                this.state = 468;
                this.match(OpenSearchPPLParser.CONSECUTIVE);
                this.state = 469;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 470;
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
        this.enterRule(localContext, 36, OpenSearchPPLParser.RULE_sortCommand);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 473;
            this.match(OpenSearchPPLParser.SORT);
            this.state = 474;
            this.sortbyClause();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
        this.enterRule(localContext, 38, OpenSearchPPLParser.RULE_evalCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 476;
            this.match(OpenSearchPPLParser.EVAL);
            this.state = 477;
            this.evalClause();
            this.state = 482;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 149) {
                {
                {
                this.state = 478;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 479;
                this.evalClause();
                }
                }
                this.state = 484;
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
        this.enterRule(localContext, 40, OpenSearchPPLParser.RULE_headCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 485;
            this.match(OpenSearchPPLParser.HEAD);
            this.state = 487;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 157 || _la === 158 || _la === 403) {
                {
                this.state = 486;
                localContext._number_ = this.integerLiteral();
                }
            }

            this.state = 491;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 489;
                this.match(OpenSearchPPLParser.FROM);
                this.state = 490;
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
    public topCommand(): TopCommandContext {
        let localContext = new TopCommandContext(this.context, this.state);
        this.enterRule(localContext, 42, OpenSearchPPLParser.RULE_topCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 493;
            this.match(OpenSearchPPLParser.TOP);
            this.state = 495;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context) ) {
            case 1:
                {
                this.state = 494;
                localContext._number_ = this.integerLiteral();
                }
                break;
            }
            this.state = 500;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 27, this.context) ) {
            case 1:
                {
                this.state = 497;
                this.match(OpenSearchPPLParser.COUNTFIELD);
                this.state = 498;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 499;
                localContext._countfield = this.stringLiteral();
                }
                break;
            }
            this.state = 505;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 28, this.context) ) {
            case 1:
                {
                this.state = 502;
                this.match(OpenSearchPPLParser.SHOWCOUNT);
                this.state = 503;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 504;
                localContext._showcount = this.booleanLiteral();
                }
                break;
            }
            this.state = 507;
            this.fieldList();
            this.state = 509;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 53) {
                {
                this.state = 508;
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
        this.enterRule(localContext, 44, OpenSearchPPLParser.RULE_rareCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 511;
            this.match(OpenSearchPPLParser.RARE);
            this.state = 513;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 30, this.context) ) {
            case 1:
                {
                this.state = 512;
                localContext._number_ = this.integerLiteral();
                }
                break;
            }
            this.state = 518;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 31, this.context) ) {
            case 1:
                {
                this.state = 515;
                this.match(OpenSearchPPLParser.COUNTFIELD);
                this.state = 516;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 517;
                localContext._countfield = this.stringLiteral();
                }
                break;
            }
            this.state = 523;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 32, this.context) ) {
            case 1:
                {
                this.state = 520;
                this.match(OpenSearchPPLParser.SHOWCOUNT);
                this.state = 521;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 522;
                localContext._showcount = this.booleanLiteral();
                }
                break;
            }
            this.state = 525;
            this.fieldList();
            this.state = 527;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 53) {
                {
                this.state = 526;
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
        this.enterRule(localContext, 46, OpenSearchPPLParser.RULE_grokCommand);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 529;
            this.match(OpenSearchPPLParser.GROK);
            {
            this.state = 530;
            localContext._source_field = this.expression(0);
            }
            {
            this.state = 531;
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
        this.enterRule(localContext, 48, OpenSearchPPLParser.RULE_parseCommand);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 533;
            this.match(OpenSearchPPLParser.PARSE);
            {
            this.state = 534;
            localContext._source_field = this.expression(0);
            }
            {
            this.state = 535;
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
    public patternsMethod(): PatternsMethodContext {
        let localContext = new PatternsMethodContext(this.context, this.state);
        this.enterRule(localContext, 50, OpenSearchPPLParser.RULE_patternsMethod);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 537;
            _la = this.tokenStream.LA(1);
            if(!(_la === 19 || _la === 20)) {
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
        this.enterRule(localContext, 52, OpenSearchPPLParser.RULE_patternsCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 539;
            this.match(OpenSearchPPLParser.PATTERNS);
            {
            this.state = 540;
            localContext._source_field = this.expression(0);
            }
            this.state = 542;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 53) {
                {
                this.state = 541;
                this.statsByClause();
                }
            }

            this.state = 547;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 37) {
                {
                this.state = 544;
                this.match(OpenSearchPPLParser.METHOD);
                this.state = 545;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 546;
                localContext._method = this.patternMethod();
                }
            }

            this.state = 552;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 185) {
                {
                this.state = 549;
                this.match(OpenSearchPPLParser.MODE);
                this.state = 550;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 551;
                localContext._pattern_mode = this.patternMode();
                }
            }

            this.state = 557;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 38) {
                {
                this.state = 554;
                this.match(OpenSearchPPLParser.MAX_SAMPLE_COUNT);
                this.state = 555;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 556;
                localContext._max_sample_count = this.integerLiteral();
                }
            }

            this.state = 562;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 39) {
                {
                this.state = 559;
                this.match(OpenSearchPPLParser.BUFFER_LIMIT);
                this.state = 560;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 561;
                localContext._buffer_limit = this.integerLiteral();
                }
            }

            this.state = 567;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 24) {
                {
                this.state = 564;
                this.match(OpenSearchPPLParser.NEW_FIELD);
                this.state = 565;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 566;
                localContext._new_field = this.stringLiteral();
                }
            }

            this.state = 572;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & 24577) !== 0)) {
                {
                {
                this.state = 569;
                this.patternsParameter();
                }
                }
                this.state = 574;
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
        this.enterRule(localContext, 54, OpenSearchPPLParser.RULE_patternsParameter);
        try {
            this.state = 584;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.PATTERN:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 575;
                this.match(OpenSearchPPLParser.PATTERN);
                this.state = 576;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 577;
                localContext._pattern = this.stringLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.VARIABLE_COUNT_THRESHOLD:
                this.enterOuterAlt(localContext, 2);
                {
                {
                this.state = 578;
                this.match(OpenSearchPPLParser.VARIABLE_COUNT_THRESHOLD);
                this.state = 579;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 580;
                localContext._variable_count_threshold = this.integerLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.FREQUENCY_THRESHOLD_PERCENTAGE:
                this.enterOuterAlt(localContext, 3);
                {
                {
                this.state = 581;
                this.match(OpenSearchPPLParser.FREQUENCY_THRESHOLD_PERCENTAGE);
                this.state = 582;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 583;
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
        this.enterRule(localContext, 56, OpenSearchPPLParser.RULE_patternMethod);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 586;
            _la = this.tokenStream.LA(1);
            if(!(_la === 33 || _la === 34)) {
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
        this.enterRule(localContext, 58, OpenSearchPPLParser.RULE_patternMode);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 588;
            _la = this.tokenStream.LA(1);
            if(!(_la === 40 || _la === 41)) {
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
        this.enterRule(localContext, 60, OpenSearchPPLParser.RULE_lookupCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 590;
            this.match(OpenSearchPPLParser.LOOKUP);
            this.state = 591;
            this.tableSource();
            this.state = 592;
            this.lookupMappingList();
            this.state = 595;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 91 || _la === 322) {
                {
                this.state = 593;
                _la = this.tokenStream.LA(1);
                if(!(_la === 91 || _la === 322)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 594;
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
        this.enterRule(localContext, 62, OpenSearchPPLParser.RULE_lookupMappingList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 597;
            this.lookupPair();
            this.state = 602;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 149) {
                {
                {
                this.state = 598;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 599;
                this.lookupPair();
                }
                }
                this.state = 604;
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
        this.enterRule(localContext, 64, OpenSearchPPLParser.RULE_outputCandidateList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 605;
            this.lookupPair();
            this.state = 610;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 149) {
                {
                {
                this.state = 606;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 607;
                this.lookupPair();
                }
                }
                this.state = 612;
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
        this.enterRule(localContext, 66, OpenSearchPPLParser.RULE_lookupPair);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 613;
            localContext._inputField = this.fieldExpression();
            this.state = 616;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 614;
                this.match(OpenSearchPPLParser.AS);
                this.state = 615;
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
        this.enterRule(localContext, 68, OpenSearchPPLParser.RULE_fillnullCommand);
        try {
            this.state = 622;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 46, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 618;
                this.match(OpenSearchPPLParser.FILLNULL);
                this.state = 619;
                this.fillNullWith();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 620;
                this.match(OpenSearchPPLParser.FILLNULL);
                this.state = 621;
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
        this.enterRule(localContext, 70, OpenSearchPPLParser.RULE_fillNullWith);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 624;
            this.match(OpenSearchPPLParser.WITH);
            this.state = 625;
            localContext._replacement = this.valueExpression(0);
            this.state = 628;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 96) {
                {
                this.state = 626;
                this.match(OpenSearchPPLParser.IN);
                this.state = 627;
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
        this.enterRule(localContext, 72, OpenSearchPPLParser.RULE_fillNullUsing);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 630;
            this.match(OpenSearchPPLParser.USING);
            this.state = 631;
            this.replacementPair();
            this.state = 636;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 149) {
                {
                {
                this.state = 632;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 633;
                this.replacementPair();
                }
                }
                this.state = 638;
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
        this.enterRule(localContext, 74, OpenSearchPPLParser.RULE_replacementPair);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 639;
            this.fieldExpression();
            this.state = 640;
            this.match(OpenSearchPPLParser.EQUAL);
            this.state = 641;
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
        this.enterRule(localContext, 76, OpenSearchPPLParser.RULE_trendlineCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 643;
            this.match(OpenSearchPPLParser.TRENDLINE);
            this.state = 646;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 13) {
                {
                this.state = 644;
                this.match(OpenSearchPPLParser.SORT);
                this.state = 645;
                this.sortField();
                }
            }

            this.state = 648;
            this.trendlineClause();
            this.state = 652;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 69 || _la === 70) {
                {
                {
                this.state = 649;
                this.trendlineClause();
                }
                }
                this.state = 654;
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
        this.enterRule(localContext, 78, OpenSearchPPLParser.RULE_trendlineClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 655;
            this.trendlineType();
            this.state = 656;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 657;
            localContext._numberOfDataPoints = this.integerLiteral();
            this.state = 658;
            this.match(OpenSearchPPLParser.COMMA);
            this.state = 659;
            localContext._field = this.fieldExpression();
            this.state = 660;
            this.match(OpenSearchPPLParser.RT_PRTHS);
            this.state = 663;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 661;
                this.match(OpenSearchPPLParser.AS);
                this.state = 662;
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
        this.enterRule(localContext, 80, OpenSearchPPLParser.RULE_trendlineType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 665;
            _la = this.tokenStream.LA(1);
            if(!(_la === 69 || _la === 70)) {
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
        this.enterRule(localContext, 82, OpenSearchPPLParser.RULE_expandCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 667;
            this.match(OpenSearchPPLParser.EXPAND);
            this.state = 668;
            this.fieldExpression();
            this.state = 671;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 669;
                this.match(OpenSearchPPLParser.AS);
                this.state = 670;
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
        this.enterRule(localContext, 84, OpenSearchPPLParser.RULE_flattenCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 673;
            this.match(OpenSearchPPLParser.FLATTEN);
            this.state = 674;
            this.fieldExpression();
            this.state = 677;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 675;
                this.match(OpenSearchPPLParser.AS);
                this.state = 676;
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
        this.enterRule(localContext, 86, OpenSearchPPLParser.RULE_appendcolCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 679;
            this.match(OpenSearchPPLParser.APPENDCOL);
            this.state = 683;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 65) {
                {
                this.state = 680;
                this.match(OpenSearchPPLParser.OVERRIDE);
                this.state = 681;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 682;
                localContext._override = this.booleanLiteral();
                }
            }

            this.state = 685;
            this.match(OpenSearchPPLParser.LT_SQR_PRTHS);
            this.state = 686;
            this.commands();
            this.state = 691;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 148) {
                {
                {
                this.state = 687;
                this.match(OpenSearchPPLParser.PIPE);
                this.state = 688;
                this.commands();
                }
                }
                this.state = 693;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 694;
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
        this.enterRule(localContext, 88, OpenSearchPPLParser.RULE_kmeansCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 696;
            this.match(OpenSearchPPLParser.KMEANS);
            this.state = 700;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & 7) !== 0)) {
                {
                {
                this.state = 697;
                this.kmeansParameter();
                }
                }
                this.state = 702;
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
        this.enterRule(localContext, 90, OpenSearchPPLParser.RULE_kmeansParameter);
        try {
            this.state = 712;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.CENTROIDS:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 703;
                this.match(OpenSearchPPLParser.CENTROIDS);
                this.state = 704;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 705;
                localContext._centroids = this.integerLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.ITERATIONS:
                this.enterOuterAlt(localContext, 2);
                {
                {
                this.state = 706;
                this.match(OpenSearchPPLParser.ITERATIONS);
                this.state = 707;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 708;
                localContext._iterations = this.integerLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.DISTANCE_TYPE:
                this.enterOuterAlt(localContext, 3);
                {
                {
                this.state = 709;
                this.match(OpenSearchPPLParser.DISTANCE_TYPE);
                this.state = 710;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 711;
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
        this.enterRule(localContext, 92, OpenSearchPPLParser.RULE_adCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 714;
            this.match(OpenSearchPPLParser.AD);
            this.state = 718;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 2047) !== 0) || _la === 265) {
                {
                {
                this.state = 715;
                this.adParameter();
                }
                }
                this.state = 720;
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
        this.enterRule(localContext, 94, OpenSearchPPLParser.RULE_adParameter);
        try {
            this.state = 757;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.NUMBER_OF_TREES:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 721;
                this.match(OpenSearchPPLParser.NUMBER_OF_TREES);
                this.state = 722;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 723;
                localContext._number_of_trees = this.integerLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.SHINGLE_SIZE:
                this.enterOuterAlt(localContext, 2);
                {
                {
                this.state = 724;
                this.match(OpenSearchPPLParser.SHINGLE_SIZE);
                this.state = 725;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 726;
                localContext._shingle_size = this.integerLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.SAMPLE_SIZE:
                this.enterOuterAlt(localContext, 3);
                {
                {
                this.state = 727;
                this.match(OpenSearchPPLParser.SAMPLE_SIZE);
                this.state = 728;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 729;
                localContext._sample_size = this.integerLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.OUTPUT_AFTER:
                this.enterOuterAlt(localContext, 4);
                {
                {
                this.state = 730;
                this.match(OpenSearchPPLParser.OUTPUT_AFTER);
                this.state = 731;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 732;
                localContext._output_after = this.integerLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.TIME_DECAY:
                this.enterOuterAlt(localContext, 5);
                {
                {
                this.state = 733;
                this.match(OpenSearchPPLParser.TIME_DECAY);
                this.state = 734;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 735;
                localContext._time_decay = this.decimalLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.ANOMALY_RATE:
                this.enterOuterAlt(localContext, 6);
                {
                {
                this.state = 736;
                this.match(OpenSearchPPLParser.ANOMALY_RATE);
                this.state = 737;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 738;
                localContext._anomaly_rate = this.decimalLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.CATEGORY_FIELD:
                this.enterOuterAlt(localContext, 7);
                {
                {
                this.state = 739;
                this.match(OpenSearchPPLParser.CATEGORY_FIELD);
                this.state = 740;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 741;
                localContext._category_field = this.stringLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.TIME_FIELD:
                this.enterOuterAlt(localContext, 8);
                {
                {
                this.state = 742;
                this.match(OpenSearchPPLParser.TIME_FIELD);
                this.state = 743;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 744;
                localContext._time_field = this.stringLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.DATE_FORMAT:
                this.enterOuterAlt(localContext, 9);
                {
                {
                this.state = 745;
                this.match(OpenSearchPPLParser.DATE_FORMAT);
                this.state = 746;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 747;
                localContext._date_format = this.stringLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.TIME_ZONE:
                this.enterOuterAlt(localContext, 10);
                {
                {
                this.state = 748;
                this.match(OpenSearchPPLParser.TIME_ZONE);
                this.state = 749;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 750;
                localContext._time_zone = this.stringLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.TRAINING_DATA_SIZE:
                this.enterOuterAlt(localContext, 11);
                {
                {
                this.state = 751;
                this.match(OpenSearchPPLParser.TRAINING_DATA_SIZE);
                this.state = 752;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 753;
                localContext._training_data_size = this.integerLiteral();
                }
                }
                break;
            case OpenSearchPPLParser.ANOMALY_SCORE_THRESHOLD:
                this.enterOuterAlt(localContext, 12);
                {
                {
                this.state = 754;
                this.match(OpenSearchPPLParser.ANOMALY_SCORE_THRESHOLD);
                this.state = 755;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 756;
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
        this.enterRule(localContext, 96, OpenSearchPPLParser.RULE_mlCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 759;
            this.match(OpenSearchPPLParser.ML);
            this.state = 763;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2147483644) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4291818745) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4160749567) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294966791) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 2143815167) !== 0) || ((((_la - 170)) & ~0x1F) === 0 && ((1 << (_la - 170)) & 4294967267) !== 0) || ((((_la - 202)) & ~0x1F) === 0 && ((1 << (_la - 202)) & 4294967295) !== 0) || ((((_la - 234)) & ~0x1F) === 0 && ((1 << (_la - 234)) & 4294967295) !== 0) || ((((_la - 266)) & ~0x1F) === 0 && ((1 << (_la - 266)) & 3489660927) !== 0) || ((((_la - 298)) & ~0x1F) === 0 && ((1 << (_la - 298)) & 4294959103) !== 0) || ((((_la - 330)) & ~0x1F) === 0 && ((1 << (_la - 330)) & 4294967295) !== 0) || ((((_la - 362)) & ~0x1F) === 0 && ((1 << (_la - 362)) & 4294967295) !== 0) || ((((_la - 394)) & ~0x1F) === 0 && ((1 << (_la - 394)) & 65791) !== 0)) {
                {
                {
                this.state = 760;
                this.mlArg();
                }
                }
                this.state = 765;
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
        this.enterRule(localContext, 98, OpenSearchPPLParser.RULE_mlArg);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 766;
            localContext._argName = this.ident();
            this.state = 767;
            this.match(OpenSearchPPLParser.EQUAL);
            this.state = 768;
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
        this.enterRule(localContext, 100, OpenSearchPPLParser.RULE_fromClause);
        try {
            this.state = 782;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 61, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 770;
                this.match(OpenSearchPPLParser.SOURCE);
                this.state = 771;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 772;
                this.tableOrSubqueryClause();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 773;
                this.match(OpenSearchPPLParser.INDEX);
                this.state = 774;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 775;
                this.tableOrSubqueryClause();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 776;
                this.match(OpenSearchPPLParser.SOURCE);
                this.state = 777;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 778;
                this.tableFunction();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 779;
                this.match(OpenSearchPPLParser.INDEX);
                this.state = 780;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 781;
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
        this.enterRule(localContext, 102, OpenSearchPPLParser.RULE_tableOrSubqueryClause);
        let _la: number;
        try {
            this.state = 792;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.LT_SQR_PRTHS:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 784;
                this.match(OpenSearchPPLParser.LT_SQR_PRTHS);
                this.state = 785;
                this.subSearch();
                this.state = 786;
                this.match(OpenSearchPPLParser.RT_SQR_PRTHS);
                this.state = 789;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 52) {
                    {
                    this.state = 787;
                    this.match(OpenSearchPPLParser.AS);
                    this.state = 788;
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
            case OpenSearchPPLParser.RENAME:
            case OpenSearchPPLParser.STATS:
            case OpenSearchPPLParser.EVENTSTATS:
            case OpenSearchPPLParser.DEDUP:
            case OpenSearchPPLParser.SORT:
            case OpenSearchPPLParser.EVAL:
            case OpenSearchPPLParser.HEAD:
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
            case OpenSearchPPLParser.COUNTFIELD:
            case OpenSearchPPLParser.SHOWCOUNT:
            case OpenSearchPPLParser.CASE:
            case OpenSearchPPLParser.ELSE:
            case OpenSearchPPLParser.IN:
            case OpenSearchPPLParser.EXISTS:
            case OpenSearchPPLParser.GEOIP:
            case OpenSearchPPLParser.REGEXP:
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
            case OpenSearchPPLParser.ABS:
            case OpenSearchPPLParser.CBRT:
            case OpenSearchPPLParser.CEIL:
            case OpenSearchPPLParser.CEILING:
            case OpenSearchPPLParser.CONV:
            case OpenSearchPPLParser.CRC32:
            case OpenSearchPPLParser.E:
            case OpenSearchPPLParser.EXP:
            case OpenSearchPPLParser.FLOOR:
            case OpenSearchPPLParser.LN:
            case OpenSearchPPLParser.LOG:
            case OpenSearchPPLParser.LOG10:
            case OpenSearchPPLParser.LOG2:
            case OpenSearchPPLParser.MOD:
            case OpenSearchPPLParser.PI:
            case OpenSearchPPLParser.POSITION:
            case OpenSearchPPLParser.POW:
            case OpenSearchPPLParser.POWER:
            case OpenSearchPPLParser.RAND:
            case OpenSearchPPLParser.ROUND:
            case OpenSearchPPLParser.SIGN:
            case OpenSearchPPLParser.SQRT:
            case OpenSearchPPLParser.TRUNCATE:
            case OpenSearchPPLParser.ACOS:
            case OpenSearchPPLParser.ASIN:
            case OpenSearchPPLParser.ATAN:
            case OpenSearchPPLParser.ATAN2:
            case OpenSearchPPLParser.COS:
            case OpenSearchPPLParser.COT:
            case OpenSearchPPLParser.DEGREES:
            case OpenSearchPPLParser.RADIANS:
            case OpenSearchPPLParser.SIN:
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
            case OpenSearchPPLParser.ID:
            case OpenSearchPPLParser.CLUSTER:
            case OpenSearchPPLParser.ID_DATE_SUFFIX:
            case OpenSearchPPLParser.BQUOTA_STRING:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 791;
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
        this.enterRule(localContext, 104, OpenSearchPPLParser.RULE_tableSourceClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 794;
            this.tableSource();
            this.state = 799;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 149) {
                {
                {
                this.state = 795;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 796;
                this.tableSource();
                }
                }
                this.state = 801;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 804;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 802;
                this.match(OpenSearchPPLParser.AS);
                this.state = 803;
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
        this.enterRule(localContext, 106, OpenSearchPPLParser.RULE_joinCommand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 806;
            this.joinType();
            }
            this.state = 807;
            this.match(OpenSearchPPLParser.JOIN);
            this.state = 808;
            this.sideAlias();
            this.state = 810;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 66, this.context) ) {
            case 1:
                {
                this.state = 809;
                this.joinHintList();
                }
                break;
            }
            this.state = 813;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 43) {
                {
                this.state = 812;
                this.joinCriteria();
                }
            }

            this.state = 815;
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
        this.enterRule(localContext, 108, OpenSearchPPLParser.RULE_joinType);
        let _la: number;
        try {
            this.state = 841;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 74, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 818;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 44) {
                    {
                    this.state = 817;
                    this.match(OpenSearchPPLParser.INNER);
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 820;
                this.match(OpenSearchPPLParser.CROSS);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 821;
                this.match(OpenSearchPPLParser.LEFT);
                this.state = 823;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 45) {
                    {
                    this.state = 822;
                    this.match(OpenSearchPPLParser.OUTER);
                    }
                }

                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 825;
                this.match(OpenSearchPPLParser.RIGHT);
                this.state = 827;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 45) {
                    {
                    this.state = 826;
                    this.match(OpenSearchPPLParser.OUTER);
                    }
                }

                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 829;
                this.match(OpenSearchPPLParser.FULL);
                this.state = 831;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 45) {
                    {
                    this.state = 830;
                    this.match(OpenSearchPPLParser.OUTER);
                    }
                }

                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 834;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 319) {
                    {
                    this.state = 833;
                    this.match(OpenSearchPPLParser.LEFT);
                    }
                }

                this.state = 836;
                this.match(OpenSearchPPLParser.SEMI);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 838;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 319) {
                    {
                    this.state = 837;
                    this.match(OpenSearchPPLParser.LEFT);
                    }
                }

                this.state = 840;
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
        this.enterRule(localContext, 110, OpenSearchPPLParser.RULE_sideAlias);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 846;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 75, this.context) ) {
            case 1:
                {
                this.state = 843;
                this.match(OpenSearchPPLParser.LEFT);
                this.state = 844;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 845;
                localContext._leftAlias = this.qualifiedName();
                }
                break;
            }
            this.state = 849;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 149) {
                {
                this.state = 848;
                this.match(OpenSearchPPLParser.COMMA);
                }
            }

            this.state = 854;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 77, this.context) ) {
            case 1:
                {
                this.state = 851;
                this.match(OpenSearchPPLParser.RIGHT);
                this.state = 852;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 853;
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
        this.enterRule(localContext, 112, OpenSearchPPLParser.RULE_joinCriteria);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 856;
            this.match(OpenSearchPPLParser.ON);
            this.state = 857;
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
        this.enterRule(localContext, 114, OpenSearchPPLParser.RULE_joinHintList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 859;
            this.hintPair();
            this.state = 866;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 79, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 861;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 149) {
                        {
                        this.state = 860;
                        this.match(OpenSearchPPLParser.COMMA);
                        }
                    }

                    this.state = 863;
                    this.hintPair();
                    }
                    }
                }
                this.state = 868;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 79, this.context);
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
        this.enterRule(localContext, 116, OpenSearchPPLParser.RULE_hintPair);
        try {
            this.state = 879;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.LEFT_HINT:
                localContext = new LeftHintContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 869;
                (localContext as LeftHintContext)._leftHintKey = this.match(OpenSearchPPLParser.LEFT_HINT);
                this.state = 870;
                this.match(OpenSearchPPLParser.DOT);
                this.state = 871;
                this.match(OpenSearchPPLParser.ID);
                this.state = 872;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 873;
                (localContext as LeftHintContext)._leftHintValue = this.ident();
                }
                break;
            case OpenSearchPPLParser.RIGHT_HINT:
                localContext = new RightHintContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 874;
                (localContext as RightHintContext)._rightHintKey = this.match(OpenSearchPPLParser.RIGHT_HINT);
                this.state = 875;
                this.match(OpenSearchPPLParser.DOT);
                this.state = 876;
                this.match(OpenSearchPPLParser.ID);
                this.state = 877;
                this.match(OpenSearchPPLParser.EQUAL);
                this.state = 878;
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
        this.enterRule(localContext, 118, OpenSearchPPLParser.RULE_renameClasue);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 881;
            localContext._orignalField = this.wcFieldExpression();
            this.state = 882;
            this.match(OpenSearchPPLParser.AS);
            this.state = 883;
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
        this.enterRule(localContext, 120, OpenSearchPPLParser.RULE_byClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 885;
            this.match(OpenSearchPPLParser.BY);
            this.state = 886;
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
        this.enterRule(localContext, 122, OpenSearchPPLParser.RULE_statsByClause);
        try {
            this.state = 902;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 81, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 888;
                this.match(OpenSearchPPLParser.BY);
                this.state = 889;
                this.fieldList();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 890;
                this.match(OpenSearchPPLParser.BY);
                this.state = 891;
                this.bySpanClause();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 892;
                this.match(OpenSearchPPLParser.BY);
                this.state = 893;
                this.bySpanClause();
                this.state = 894;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 895;
                this.fieldList();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 897;
                this.match(OpenSearchPPLParser.BY);
                this.state = 898;
                this.fieldList();
                this.state = 899;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 900;
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
        this.enterRule(localContext, 124, OpenSearchPPLParser.RULE_bySpanClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 904;
            this.spanClause();
            this.state = 907;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 905;
                this.match(OpenSearchPPLParser.AS);
                this.state = 906;
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
        this.enterRule(localContext, 126, OpenSearchPPLParser.RULE_spanClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 909;
            this.match(OpenSearchPPLParser.SPAN);
            this.state = 910;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 911;
            this.fieldExpression();
            this.state = 912;
            this.match(OpenSearchPPLParser.COMMA);
            this.state = 913;
            localContext._value = this.literalValue();
            this.state = 915;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 56 || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & 174612545) !== 0) || ((((_la - 394)) & ~0x1F) === 0 && ((1 << (_la - 394)) & 127) !== 0)) {
                {
                this.state = 914;
                localContext._unit = this.timespanUnit();
                }
            }

            this.state = 917;
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
        this.enterRule(localContext, 128, OpenSearchPPLParser.RULE_sortbyClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 919;
            this.sortField();
            this.state = 924;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 149) {
                {
                {
                this.state = 920;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 921;
                this.sortField();
                }
                }
                this.state = 926;
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
        this.enterRule(localContext, 130, OpenSearchPPLParser.RULE_evalClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 927;
            this.fieldExpression();
            this.state = 928;
            this.match(OpenSearchPPLParser.EQUAL);
            this.state = 929;
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
        this.enterRule(localContext, 132, OpenSearchPPLParser.RULE_eventstatsAggTerm);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 931;
            this.windowFunction();
            this.state = 934;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 932;
                this.match(OpenSearchPPLParser.AS);
                this.state = 933;
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
        this.enterRule(localContext, 134, OpenSearchPPLParser.RULE_windowFunction);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 936;
            this.windowFunctionName();
            this.state = 937;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 938;
            this.functionArgs();
            this.state = 939;
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
        this.enterRule(localContext, 136, OpenSearchPPLParser.RULE_windowFunctionName);
        try {
            this.state = 943;
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
            case OpenSearchPPLParser.EARLIEST:
            case OpenSearchPPLParser.LATEST:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 941;
                this.statsFunctionName();
                }
                break;
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
                this.state = 942;
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
        this.enterRule(localContext, 138, OpenSearchPPLParser.RULE_scalarWindowFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 945;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 210)) & ~0x1F) === 0 && ((1 << (_la - 210)) & 511) !== 0))) {
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
        this.enterRule(localContext, 140, OpenSearchPPLParser.RULE_statsAggTerm);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 947;
            this.statsFunction();
            this.state = 950;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 948;
                this.match(OpenSearchPPLParser.AS);
                this.state = 949;
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
        this.enterRule(localContext, 142, OpenSearchPPLParser.RULE_statsFunction);
        let _la: number;
        try {
            this.state = 967;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 88, this.context) ) {
            case 1:
                localContext = new StatsFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 952;
                this.statsFunctionName();
                this.state = 953;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 954;
                this.valueExpression(0);
                this.state = 955;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                }
                break;
            case 2:
                localContext = new CountAllFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 957;
                this.match(OpenSearchPPLParser.COUNT);
                this.state = 958;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 959;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                }
                break;
            case 3:
                localContext = new DistinctCountFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 960;
                _la = this.tokenStream.LA(1);
                if(!(_la === 177 || _la === 178 || _la === 209)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 961;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 962;
                this.valueExpression(0);
                this.state = 963;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                }
                break;
            case 4:
                localContext = new TakeAggFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 965;
                this.takeAggFunction();
                }
                break;
            case 5:
                localContext = new PercentileApproxFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 966;
                this.percentileApproxFunction();
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
        this.enterRule(localContext, 144, OpenSearchPPLParser.RULE_statsFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 969;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 175)) & ~0x1F) === 0 && ((1 << (_la - 175)) & 16728643) !== 0))) {
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
    public takeAggFunction(): TakeAggFunctionContext {
        let localContext = new TakeAggFunctionContext(this.context, this.state);
        this.enterRule(localContext, 146, OpenSearchPPLParser.RULE_takeAggFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 971;
            this.match(OpenSearchPPLParser.TAKE);
            this.state = 972;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 973;
            this.fieldExpression();
            this.state = 976;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 149) {
                {
                this.state = 974;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 975;
                localContext._size = this.integerLiteral();
                }
            }

            this.state = 978;
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
        this.enterRule(localContext, 148, OpenSearchPPLParser.RULE_percentileApproxFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 980;
            _la = this.tokenStream.LA(1);
            if(!(_la === 195 || _la === 196)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 981;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 982;
            localContext._aggField = this.valueExpression(0);
            this.state = 983;
            this.match(OpenSearchPPLParser.COMMA);
            this.state = 984;
            localContext._percent = this.numericLiteral();
            this.state = 987;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 149) {
                {
                this.state = 985;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 986;
                localContext._compression = this.numericLiteral();
                }
            }

            this.state = 989;
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
        this.enterRule(localContext, 150, OpenSearchPPLParser.RULE_numericLiteral);
        try {
            this.state = 995;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 91, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 991;
                this.integerLiteral();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 992;
                this.decimalLiteral();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 993;
                this.doubleLiteral();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 994;
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
        let _startState = 152;
        this.enterRecursionRule(localContext, 152, OpenSearchPPLParser.RULE_logicalExpression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1001;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.NOT:
                {
                localContext = new LogicalNotContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 998;
                this.match(OpenSearchPPLParser.NOT);
                this.state = 999;
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
            case OpenSearchPPLParser.RENAME:
            case OpenSearchPPLParser.STATS:
            case OpenSearchPPLParser.EVENTSTATS:
            case OpenSearchPPLParser.DEDUP:
            case OpenSearchPPLParser.SORT:
            case OpenSearchPPLParser.EVAL:
            case OpenSearchPPLParser.HEAD:
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
            case OpenSearchPPLParser.COUNTFIELD:
            case OpenSearchPPLParser.SHOWCOUNT:
            case OpenSearchPPLParser.CASE:
            case OpenSearchPPLParser.ELSE:
            case OpenSearchPPLParser.IN:
            case OpenSearchPPLParser.EXISTS:
            case OpenSearchPPLParser.GEOIP:
            case OpenSearchPPLParser.TRUE:
            case OpenSearchPPLParser.FALSE:
            case OpenSearchPPLParser.REGEXP:
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
            case OpenSearchPPLParser.ABS:
            case OpenSearchPPLParser.CBRT:
            case OpenSearchPPLParser.CEIL:
            case OpenSearchPPLParser.CEILING:
            case OpenSearchPPLParser.CONV:
            case OpenSearchPPLParser.CRC32:
            case OpenSearchPPLParser.E:
            case OpenSearchPPLParser.EXP:
            case OpenSearchPPLParser.FLOOR:
            case OpenSearchPPLParser.LN:
            case OpenSearchPPLParser.LOG:
            case OpenSearchPPLParser.LOG10:
            case OpenSearchPPLParser.LOG2:
            case OpenSearchPPLParser.MOD:
            case OpenSearchPPLParser.PI:
            case OpenSearchPPLParser.POSITION:
            case OpenSearchPPLParser.POW:
            case OpenSearchPPLParser.POWER:
            case OpenSearchPPLParser.RAND:
            case OpenSearchPPLParser.ROUND:
            case OpenSearchPPLParser.SIGN:
            case OpenSearchPPLParser.SQRT:
            case OpenSearchPPLParser.TRUNCATE:
            case OpenSearchPPLParser.ACOS:
            case OpenSearchPPLParser.ASIN:
            case OpenSearchPPLParser.ATAN:
            case OpenSearchPPLParser.ATAN2:
            case OpenSearchPPLParser.COS:
            case OpenSearchPPLParser.COT:
            case OpenSearchPPLParser.DEGREES:
            case OpenSearchPPLParser.RADIANS:
            case OpenSearchPPLParser.SIN:
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
                this.state = 1000;
                this.expression(0);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1014;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 94, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1012;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 93, this.context) ) {
                    case 1:
                        {
                        localContext = new LogicalAndContext(new LogicalExpressionContext(parentContext, parentState));
                        (localContext as LogicalAndContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchPPLParser.RULE_logicalExpression);
                        this.state = 1003;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 1004;
                        this.match(OpenSearchPPLParser.AND);
                        this.state = 1005;
                        (localContext as LogicalAndContext)._right = this.logicalExpression(5);
                        }
                        break;
                    case 2:
                        {
                        localContext = new LogicalXorContext(new LogicalExpressionContext(parentContext, parentState));
                        (localContext as LogicalXorContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchPPLParser.RULE_logicalExpression);
                        this.state = 1006;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 1007;
                        this.match(OpenSearchPPLParser.XOR);
                        this.state = 1008;
                        (localContext as LogicalXorContext)._right = this.logicalExpression(4);
                        }
                        break;
                    case 3:
                        {
                        localContext = new LogicalOrContext(new LogicalExpressionContext(parentContext, parentState));
                        (localContext as LogicalOrContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchPPLParser.RULE_logicalExpression);
                        this.state = 1009;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 1010;
                        this.match(OpenSearchPPLParser.OR);
                        this.state = 1011;
                        (localContext as LogicalOrContext)._right = this.logicalExpression(3);
                        }
                        break;
                    }
                    }
                }
                this.state = 1016;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 94, this.context);
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
        let _startState = 154;
        this.enterRecursionRule(localContext, 154, OpenSearchPPLParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1020;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 95, this.context) ) {
            case 1:
                {
                localContext = new ValueExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1018;
                this.valueExpression(0);
                }
                break;
            case 2:
                {
                localContext = new RelevanceExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1019;
                this.relevanceExpression();
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1043;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 99, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1041;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 98, this.context) ) {
                    case 1:
                        {
                        localContext = new CompareExprContext(new ExpressionContext(parentContext, parentState));
                        (localContext as CompareExprContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchPPLParser.RULE_expression);
                        this.state = 1022;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 1023;
                        this.comparisonOperator();
                        this.state = 1024;
                        (localContext as CompareExprContext)._right = this.expression(4);
                        }
                        break;
                    case 2:
                        {
                        localContext = new BetweenContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchPPLParser.RULE_expression);
                        this.state = 1026;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 1028;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 99) {
                            {
                            this.state = 1027;
                            this.match(OpenSearchPPLParser.NOT);
                            }
                        }

                        this.state = 1030;
                        this.match(OpenSearchPPLParser.BETWEEN);
                        this.state = 1031;
                        this.expression(0);
                        this.state = 1032;
                        this.match(OpenSearchPPLParser.AND);
                        this.state = 1033;
                        this.expression(2);
                        }
                        break;
                    case 3:
                        {
                        localContext = new InExprContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchPPLParser.RULE_expression);
                        this.state = 1035;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 1037;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 99) {
                            {
                            this.state = 1036;
                            this.match(OpenSearchPPLParser.NOT);
                            }
                        }

                        this.state = 1039;
                        this.match(OpenSearchPPLParser.IN);
                        this.state = 1040;
                        this.valueList();
                        }
                        break;
                    }
                    }
                }
                this.state = 1045;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 99, this.context);
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
        let _startState = 156;
        this.enterRecursionRule(localContext, 156, OpenSearchPPLParser.RULE_valueExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1082;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 102, this.context) ) {
            case 1:
                {
                localContext = new LiteralValueExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1047;
                this.literalValue();
                }
                break;
            case 2:
                {
                localContext = new FunctionCallExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1048;
                this.functionCall();
                }
                break;
            case 3:
                {
                localContext = new LambdaExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1049;
                this.lambda();
                }
                break;
            case 4:
                {
                localContext = new ScalarSubqueryExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1050;
                this.match(OpenSearchPPLParser.LT_SQR_PRTHS);
                this.state = 1051;
                this.subSearch();
                this.state = 1052;
                this.match(OpenSearchPPLParser.RT_SQR_PRTHS);
                }
                break;
            case 5:
                {
                localContext = new InSubqueryExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1054;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1055;
                this.valueExpression(0);
                this.state = 1060;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 149) {
                    {
                    {
                    this.state = 1056;
                    this.match(OpenSearchPPLParser.COMMA);
                    this.state = 1057;
                    this.valueExpression(0);
                    }
                    }
                    this.state = 1062;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1063;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                this.state = 1065;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 99) {
                    {
                    this.state = 1064;
                    this.match(OpenSearchPPLParser.NOT);
                    }
                }

                this.state = 1067;
                this.match(OpenSearchPPLParser.IN);
                this.state = 1068;
                this.match(OpenSearchPPLParser.LT_SQR_PRTHS);
                this.state = 1069;
                this.subSearch();
                this.state = 1070;
                this.match(OpenSearchPPLParser.RT_SQR_PRTHS);
                }
                break;
            case 6:
                {
                localContext = new ExistsSubqueryExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1072;
                this.match(OpenSearchPPLParser.EXISTS);
                this.state = 1073;
                this.match(OpenSearchPPLParser.LT_SQR_PRTHS);
                this.state = 1074;
                this.subSearch();
                this.state = 1075;
                this.match(OpenSearchPPLParser.RT_SQR_PRTHS);
                }
                break;
            case 7:
                {
                localContext = new FieldExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1077;
                this.fieldExpression();
                }
                break;
            case 8:
                {
                localContext = new NestedValueExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1078;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1079;
                this.logicalExpression(0);
                this.state = 1080;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1101;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 105, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1099;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 104, this.context) ) {
                    case 1:
                        {
                        localContext = new BinaryArithmeticContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as BinaryArithmeticContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchPPLParser.RULE_valueExpression);
                        this.state = 1084;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 1085;
                        (localContext as BinaryArithmeticContext)._binaryOperator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & 7) !== 0))) {
                            (localContext as BinaryArithmeticContext)._binaryOperator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1086;
                        (localContext as BinaryArithmeticContext)._right = this.valueExpression(12);
                        }
                        break;
                    case 2:
                        {
                        localContext = new BinaryArithmeticContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as BinaryArithmeticContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchPPLParser.RULE_valueExpression);
                        this.state = 1087;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 1088;
                        (localContext as BinaryArithmeticContext)._binaryOperator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 157 || _la === 158)) {
                            (localContext as BinaryArithmeticContext)._binaryOperator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1089;
                        (localContext as BinaryArithmeticContext)._right = this.valueExpression(11);
                        }
                        break;
                    case 3:
                        {
                        localContext = new InSubqueryExprContext(new ValueExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchPPLParser.RULE_valueExpression);
                        this.state = 1090;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 1092;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 99) {
                            {
                            this.state = 1091;
                            this.match(OpenSearchPPLParser.NOT);
                            }
                        }

                        this.state = 1094;
                        this.match(OpenSearchPPLParser.IN);
                        this.state = 1095;
                        this.match(OpenSearchPPLParser.LT_SQR_PRTHS);
                        this.state = 1096;
                        this.subSearch();
                        this.state = 1097;
                        this.match(OpenSearchPPLParser.RT_SQR_PRTHS);
                        }
                        break;
                    }
                    }
                }
                this.state = 1103;
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
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public functionCall(): FunctionCallContext {
        let localContext = new FunctionCallContext(this.context, this.state);
        this.enterRule(localContext, 158, OpenSearchPPLParser.RULE_functionCall);
        try {
            this.state = 1111;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 106, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1104;
                this.evalFunctionCall();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1105;
                this.dataTypeFunctionCall();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1106;
                this.positionFunctionCall();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1107;
                this.caseFunctionCall();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1108;
                this.timestampFunctionCall();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1109;
                this.extractFunctionCall();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1110;
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
        this.enterRule(localContext, 160, OpenSearchPPLParser.RULE_positionFunctionCall);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1113;
            this.positionFunctionName();
            this.state = 1114;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1115;
            this.functionArg();
            this.state = 1116;
            this.match(OpenSearchPPLParser.IN);
            this.state = 1117;
            this.functionArg();
            this.state = 1118;
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
        this.enterRule(localContext, 162, OpenSearchPPLParser.RULE_caseFunctionCall);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1120;
            this.match(OpenSearchPPLParser.CASE);
            this.state = 1121;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1122;
            this.logicalExpression(0);
            this.state = 1123;
            this.match(OpenSearchPPLParser.COMMA);
            this.state = 1124;
            this.valueExpression(0);
            this.state = 1132;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 149) {
                {
                {
                this.state = 1125;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1126;
                this.logicalExpression(0);
                this.state = 1127;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1128;
                this.valueExpression(0);
                }
                }
                this.state = 1134;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1137;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 95) {
                {
                this.state = 1135;
                this.match(OpenSearchPPLParser.ELSE);
                this.state = 1136;
                this.valueExpression(0);
                }
            }

            this.state = 1139;
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
        this.enterRule(localContext, 164, OpenSearchPPLParser.RULE_relevanceExpression);
        try {
            this.state = 1143;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.MATCH:
            case OpenSearchPPLParser.MATCH_PHRASE:
            case OpenSearchPPLParser.MATCH_PHRASE_PREFIX:
            case OpenSearchPPLParser.MATCH_BOOL_PREFIX:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1141;
                this.singleFieldRelevanceFunction();
                }
                break;
            case OpenSearchPPLParser.SIMPLE_QUERY_STRING:
            case OpenSearchPPLParser.MULTI_MATCH:
            case OpenSearchPPLParser.QUERY_STRING:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1142;
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
        this.enterRule(localContext, 166, OpenSearchPPLParser.RULE_singleFieldRelevanceFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1145;
            this.singleFieldRelevanceFunctionName();
            this.state = 1146;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1147;
            localContext._field = this.relevanceField();
            this.state = 1148;
            this.match(OpenSearchPPLParser.COMMA);
            this.state = 1149;
            localContext._query = this.relevanceQuery();
            this.state = 1154;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 149) {
                {
                {
                this.state = 1150;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1151;
                this.relevanceArg();
                }
                }
                this.state = 1156;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1157;
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
        this.enterRule(localContext, 168, OpenSearchPPLParser.RULE_multiFieldRelevanceFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1159;
            this.multiFieldRelevanceFunctionName();
            this.state = 1160;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1161;
            this.match(OpenSearchPPLParser.LT_SQR_PRTHS);
            this.state = 1162;
            localContext._field = this.relevanceFieldAndWeight();
            this.state = 1167;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 149) {
                {
                {
                this.state = 1163;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1164;
                localContext._field = this.relevanceFieldAndWeight();
                }
                }
                this.state = 1169;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1170;
            this.match(OpenSearchPPLParser.RT_SQR_PRTHS);
            this.state = 1171;
            this.match(OpenSearchPPLParser.COMMA);
            this.state = 1172;
            localContext._query = this.relevanceQuery();
            this.state = 1177;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 149) {
                {
                {
                this.state = 1173;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1174;
                this.relevanceArg();
                }
                }
                this.state = 1179;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1180;
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
        this.enterRule(localContext, 170, OpenSearchPPLParser.RULE_tableSource);
        try {
            this.state = 1184;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.SEARCH:
            case OpenSearchPPLParser.DESCRIBE:
            case OpenSearchPPLParser.SHOW:
            case OpenSearchPPLParser.EXPLAIN:
            case OpenSearchPPLParser.FROM:
            case OpenSearchPPLParser.WHERE:
            case OpenSearchPPLParser.FIELDS:
            case OpenSearchPPLParser.RENAME:
            case OpenSearchPPLParser.STATS:
            case OpenSearchPPLParser.EVENTSTATS:
            case OpenSearchPPLParser.DEDUP:
            case OpenSearchPPLParser.SORT:
            case OpenSearchPPLParser.EVAL:
            case OpenSearchPPLParser.HEAD:
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
            case OpenSearchPPLParser.COUNTFIELD:
            case OpenSearchPPLParser.SHOWCOUNT:
            case OpenSearchPPLParser.CASE:
            case OpenSearchPPLParser.ELSE:
            case OpenSearchPPLParser.IN:
            case OpenSearchPPLParser.EXISTS:
            case OpenSearchPPLParser.GEOIP:
            case OpenSearchPPLParser.REGEXP:
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
            case OpenSearchPPLParser.ABS:
            case OpenSearchPPLParser.CBRT:
            case OpenSearchPPLParser.CEIL:
            case OpenSearchPPLParser.CEILING:
            case OpenSearchPPLParser.CONV:
            case OpenSearchPPLParser.CRC32:
            case OpenSearchPPLParser.E:
            case OpenSearchPPLParser.EXP:
            case OpenSearchPPLParser.FLOOR:
            case OpenSearchPPLParser.LN:
            case OpenSearchPPLParser.LOG:
            case OpenSearchPPLParser.LOG10:
            case OpenSearchPPLParser.LOG2:
            case OpenSearchPPLParser.MOD:
            case OpenSearchPPLParser.PI:
            case OpenSearchPPLParser.POSITION:
            case OpenSearchPPLParser.POW:
            case OpenSearchPPLParser.POWER:
            case OpenSearchPPLParser.RAND:
            case OpenSearchPPLParser.ROUND:
            case OpenSearchPPLParser.SIGN:
            case OpenSearchPPLParser.SQRT:
            case OpenSearchPPLParser.TRUNCATE:
            case OpenSearchPPLParser.ACOS:
            case OpenSearchPPLParser.ASIN:
            case OpenSearchPPLParser.ATAN:
            case OpenSearchPPLParser.ATAN2:
            case OpenSearchPPLParser.COS:
            case OpenSearchPPLParser.COT:
            case OpenSearchPPLParser.DEGREES:
            case OpenSearchPPLParser.RADIANS:
            case OpenSearchPPLParser.SIN:
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
            case OpenSearchPPLParser.ID:
            case OpenSearchPPLParser.CLUSTER:
            case OpenSearchPPLParser.BQUOTA_STRING:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1182;
                this.tableQualifiedName();
                }
                break;
            case OpenSearchPPLParser.ID_DATE_SUFFIX:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1183;
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
        this.enterRule(localContext, 172, OpenSearchPPLParser.RULE_tableFunction);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1186;
            this.qualifiedName();
            this.state = 1187;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1188;
            this.functionArgs();
            this.state = 1189;
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
        this.enterRule(localContext, 174, OpenSearchPPLParser.RULE_fieldList);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1191;
            this.fieldExpression();
            this.state = 1196;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 114, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1192;
                    this.match(OpenSearchPPLParser.COMMA);
                    this.state = 1193;
                    this.fieldExpression();
                    }
                    }
                }
                this.state = 1198;
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
    public wcFieldList(): WcFieldListContext {
        let localContext = new WcFieldListContext(this.context, this.state);
        this.enterRule(localContext, 176, OpenSearchPPLParser.RULE_wcFieldList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1199;
            this.wcFieldExpression();
            this.state = 1204;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 149) {
                {
                {
                this.state = 1200;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1201;
                this.wcFieldExpression();
                }
                }
                this.state = 1206;
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
    public sortField(): SortFieldContext {
        let localContext = new SortFieldContext(this.context, this.state);
        this.enterRule(localContext, 178, OpenSearchPPLParser.RULE_sortField);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1208;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 116, this.context) ) {
            case 1:
                {
                this.state = 1207;
                _la = this.tokenStream.LA(1);
                if(!(_la === 157 || _la === 158)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            }
            this.state = 1210;
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
        this.enterRule(localContext, 180, OpenSearchPPLParser.RULE_sortFieldExpression);
        try {
            this.state = 1233;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 117, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1212;
                this.fieldExpression();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1213;
                this.match(OpenSearchPPLParser.AUTO);
                this.state = 1214;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1215;
                this.fieldExpression();
                this.state = 1216;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1218;
                this.match(OpenSearchPPLParser.STR);
                this.state = 1219;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1220;
                this.fieldExpression();
                this.state = 1221;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1223;
                this.match(OpenSearchPPLParser.IP);
                this.state = 1224;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1225;
                this.fieldExpression();
                this.state = 1226;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1228;
                this.match(OpenSearchPPLParser.NUM);
                this.state = 1229;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1230;
                this.fieldExpression();
                this.state = 1231;
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
        this.enterRule(localContext, 182, OpenSearchPPLParser.RULE_fieldExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1235;
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
        this.enterRule(localContext, 184, OpenSearchPPLParser.RULE_wcFieldExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1237;
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
    public evalFunctionCall(): EvalFunctionCallContext {
        let localContext = new EvalFunctionCallContext(this.context, this.state);
        this.enterRule(localContext, 186, OpenSearchPPLParser.RULE_evalFunctionCall);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1239;
            this.evalFunctionName();
            this.state = 1240;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1241;
            this.functionArgs();
            this.state = 1242;
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
        this.enterRule(localContext, 188, OpenSearchPPLParser.RULE_dataTypeFunctionCall);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1244;
            this.match(OpenSearchPPLParser.CAST);
            this.state = 1245;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1246;
            this.logicalExpression(0);
            this.state = 1247;
            this.match(OpenSearchPPLParser.AS);
            this.state = 1248;
            this.convertedDataType();
            this.state = 1249;
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
        this.enterRule(localContext, 190, OpenSearchPPLParser.RULE_convertedDataType);
        try {
            this.state = 1263;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.DATE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1251;
                localContext._typeName = this.match(OpenSearchPPLParser.DATE);
                }
                break;
            case OpenSearchPPLParser.TIME:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1252;
                localContext._typeName = this.match(OpenSearchPPLParser.TIME);
                }
                break;
            case OpenSearchPPLParser.TIMESTAMP:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1253;
                localContext._typeName = this.match(OpenSearchPPLParser.TIMESTAMP);
                }
                break;
            case OpenSearchPPLParser.INT:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1254;
                localContext._typeName = this.match(OpenSearchPPLParser.INT);
                }
                break;
            case OpenSearchPPLParser.INTEGER:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1255;
                localContext._typeName = this.match(OpenSearchPPLParser.INTEGER);
                }
                break;
            case OpenSearchPPLParser.DOUBLE:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1256;
                localContext._typeName = this.match(OpenSearchPPLParser.DOUBLE);
                }
                break;
            case OpenSearchPPLParser.LONG:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1257;
                localContext._typeName = this.match(OpenSearchPPLParser.LONG);
                }
                break;
            case OpenSearchPPLParser.FLOAT:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1258;
                localContext._typeName = this.match(OpenSearchPPLParser.FLOAT);
                }
                break;
            case OpenSearchPPLParser.STRING:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1259;
                localContext._typeName = this.match(OpenSearchPPLParser.STRING);
                }
                break;
            case OpenSearchPPLParser.BOOLEAN:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1260;
                localContext._typeName = this.match(OpenSearchPPLParser.BOOLEAN);
                }
                break;
            case OpenSearchPPLParser.IP:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1261;
                localContext._typeName = this.match(OpenSearchPPLParser.IP);
                }
                break;
            case OpenSearchPPLParser.JSON:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 1262;
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
        this.enterRule(localContext, 192, OpenSearchPPLParser.RULE_evalFunctionName);
        try {
            this.state = 1276;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.ABS:
            case OpenSearchPPLParser.CBRT:
            case OpenSearchPPLParser.CEIL:
            case OpenSearchPPLParser.CEILING:
            case OpenSearchPPLParser.CONV:
            case OpenSearchPPLParser.CRC32:
            case OpenSearchPPLParser.E:
            case OpenSearchPPLParser.EXP:
            case OpenSearchPPLParser.FLOOR:
            case OpenSearchPPLParser.LN:
            case OpenSearchPPLParser.LOG:
            case OpenSearchPPLParser.LOG10:
            case OpenSearchPPLParser.LOG2:
            case OpenSearchPPLParser.MOD:
            case OpenSearchPPLParser.PI:
            case OpenSearchPPLParser.POW:
            case OpenSearchPPLParser.POWER:
            case OpenSearchPPLParser.RAND:
            case OpenSearchPPLParser.ROUND:
            case OpenSearchPPLParser.SIGN:
            case OpenSearchPPLParser.SQRT:
            case OpenSearchPPLParser.TRUNCATE:
            case OpenSearchPPLParser.ACOS:
            case OpenSearchPPLParser.ASIN:
            case OpenSearchPPLParser.ATAN:
            case OpenSearchPPLParser.ATAN2:
            case OpenSearchPPLParser.COS:
            case OpenSearchPPLParser.COT:
            case OpenSearchPPLParser.DEGREES:
            case OpenSearchPPLParser.RADIANS:
            case OpenSearchPPLParser.SIN:
            case OpenSearchPPLParser.TAN:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1265;
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
                this.state = 1266;
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
                this.state = 1267;
                this.textFunctionName();
                }
                break;
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
                this.state = 1268;
                this.conditionFunctionName();
                }
                break;
            case OpenSearchPPLParser.IFNULL:
            case OpenSearchPPLParser.NULLIF:
            case OpenSearchPPLParser.IF:
            case OpenSearchPPLParser.COALESCE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1269;
                this.flowControlFunctionName();
                }
                break;
            case OpenSearchPPLParser.TYPEOF:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1270;
                this.systemFunctionName();
                }
                break;
            case OpenSearchPPLParser.POSITION:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1271;
                this.positionFunctionName();
                }
                break;
            case OpenSearchPPLParser.MD5:
            case OpenSearchPPLParser.SHA1:
            case OpenSearchPPLParser.SHA2:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1272;
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
                this.state = 1273;
                this.jsonFunctionName();
                }
                break;
            case OpenSearchPPLParser.GEOIP:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1274;
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
                this.state = 1275;
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
        this.enterRule(localContext, 194, OpenSearchPPLParser.RULE_functionArgs);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1286;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2147483644) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4291818745) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4160749567) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967183) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 2143815167) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & 4294965445) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & 4294967295) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & 4294967295) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 4294967295) !== 0) || ((((_la - 292)) & ~0x1F) === 0 && ((1 << (_la - 292)) & 4294443007) !== 0) || ((((_la - 324)) & ~0x1F) === 0 && ((1 << (_la - 324)) & 4294967295) !== 0) || ((((_la - 356)) & ~0x1F) === 0 && ((1 << (_la - 356)) & 4294967295) !== 0) || ((((_la - 388)) & ~0x1F) === 0 && ((1 << (_la - 388)) & 7847935) !== 0)) {
                {
                this.state = 1278;
                this.functionArg();
                this.state = 1283;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 149) {
                    {
                    {
                    this.state = 1279;
                    this.match(OpenSearchPPLParser.COMMA);
                    this.state = 1280;
                    this.functionArg();
                    }
                    }
                    this.state = 1285;
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
        this.enterRule(localContext, 196, OpenSearchPPLParser.RULE_functionArg);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1291;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 122, this.context) ) {
            case 1:
                {
                this.state = 1288;
                this.ident();
                this.state = 1289;
                this.match(OpenSearchPPLParser.EQUAL);
                }
                break;
            }
            this.state = 1293;
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
        this.enterRule(localContext, 198, OpenSearchPPLParser.RULE_functionArgExpression);
        try {
            this.state = 1297;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 123, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1295;
                this.lambda();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1296;
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
        this.enterRule(localContext, 200, OpenSearchPPLParser.RULE_lambda);
        let _la: number;
        try {
            this.state = 1315;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.SEARCH:
            case OpenSearchPPLParser.DESCRIBE:
            case OpenSearchPPLParser.SHOW:
            case OpenSearchPPLParser.EXPLAIN:
            case OpenSearchPPLParser.FROM:
            case OpenSearchPPLParser.WHERE:
            case OpenSearchPPLParser.FIELDS:
            case OpenSearchPPLParser.RENAME:
            case OpenSearchPPLParser.STATS:
            case OpenSearchPPLParser.EVENTSTATS:
            case OpenSearchPPLParser.DEDUP:
            case OpenSearchPPLParser.SORT:
            case OpenSearchPPLParser.EVAL:
            case OpenSearchPPLParser.HEAD:
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
            case OpenSearchPPLParser.COUNTFIELD:
            case OpenSearchPPLParser.SHOWCOUNT:
            case OpenSearchPPLParser.CASE:
            case OpenSearchPPLParser.ELSE:
            case OpenSearchPPLParser.IN:
            case OpenSearchPPLParser.EXISTS:
            case OpenSearchPPLParser.GEOIP:
            case OpenSearchPPLParser.REGEXP:
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
            case OpenSearchPPLParser.ABS:
            case OpenSearchPPLParser.CBRT:
            case OpenSearchPPLParser.CEIL:
            case OpenSearchPPLParser.CEILING:
            case OpenSearchPPLParser.CONV:
            case OpenSearchPPLParser.CRC32:
            case OpenSearchPPLParser.E:
            case OpenSearchPPLParser.EXP:
            case OpenSearchPPLParser.FLOOR:
            case OpenSearchPPLParser.LN:
            case OpenSearchPPLParser.LOG:
            case OpenSearchPPLParser.LOG10:
            case OpenSearchPPLParser.LOG2:
            case OpenSearchPPLParser.MOD:
            case OpenSearchPPLParser.PI:
            case OpenSearchPPLParser.POSITION:
            case OpenSearchPPLParser.POW:
            case OpenSearchPPLParser.POWER:
            case OpenSearchPPLParser.RAND:
            case OpenSearchPPLParser.ROUND:
            case OpenSearchPPLParser.SIGN:
            case OpenSearchPPLParser.SQRT:
            case OpenSearchPPLParser.TRUNCATE:
            case OpenSearchPPLParser.ACOS:
            case OpenSearchPPLParser.ASIN:
            case OpenSearchPPLParser.ATAN:
            case OpenSearchPPLParser.ATAN2:
            case OpenSearchPPLParser.COS:
            case OpenSearchPPLParser.COT:
            case OpenSearchPPLParser.DEGREES:
            case OpenSearchPPLParser.RADIANS:
            case OpenSearchPPLParser.SIN:
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
            case OpenSearchPPLParser.ID:
            case OpenSearchPPLParser.BQUOTA_STRING:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1299;
                this.ident();
                this.state = 1300;
                this.match(OpenSearchPPLParser.ARROW);
                this.state = 1301;
                this.logicalExpression(0);
                }
                break;
            case OpenSearchPPLParser.LT_PRTHS:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1303;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1304;
                this.ident();
                this.state = 1307;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1305;
                    this.match(OpenSearchPPLParser.COMMA);
                    this.state = 1306;
                    this.ident();
                    }
                    }
                    this.state = 1309;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 149);
                this.state = 1311;
                this.match(OpenSearchPPLParser.RT_PRTHS);
                this.state = 1312;
                this.match(OpenSearchPPLParser.ARROW);
                this.state = 1313;
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
        this.enterRule(localContext, 202, OpenSearchPPLParser.RULE_relevanceArg);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1317;
            this.relevanceArgName();
            this.state = 1318;
            this.match(OpenSearchPPLParser.EQUAL);
            this.state = 1319;
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
        this.enterRule(localContext, 204, OpenSearchPPLParser.RULE_relevanceArgName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1321;
            _la = this.tokenStream.LA(1);
            if(!(_la === 8 || _la === 88 || ((((_la - 362)) & ~0x1F) === 0 && ((1 << (_la - 362)) & 2147483647) !== 0))) {
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
        this.enterRule(localContext, 206, OpenSearchPPLParser.RULE_relevanceFieldAndWeight);
        try {
            this.state = 1331;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 126, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1323;
                localContext._field = this.relevanceField();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1324;
                localContext._field = this.relevanceField();
                this.state = 1325;
                localContext._weight = this.relevanceFieldWeight();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1327;
                localContext._field = this.relevanceField();
                this.state = 1328;
                this.match(OpenSearchPPLParser.BIT_XOR_OP);
                this.state = 1329;
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
        this.enterRule(localContext, 208, OpenSearchPPLParser.RULE_relevanceFieldWeight);
        try {
            this.state = 1337;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 127, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1333;
                this.integerLiteral();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1334;
                this.decimalLiteral();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1335;
                this.doubleLiteral();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1336;
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
        this.enterRule(localContext, 210, OpenSearchPPLParser.RULE_relevanceField);
        try {
            this.state = 1341;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.SEARCH:
            case OpenSearchPPLParser.DESCRIBE:
            case OpenSearchPPLParser.SHOW:
            case OpenSearchPPLParser.EXPLAIN:
            case OpenSearchPPLParser.FROM:
            case OpenSearchPPLParser.WHERE:
            case OpenSearchPPLParser.FIELDS:
            case OpenSearchPPLParser.RENAME:
            case OpenSearchPPLParser.STATS:
            case OpenSearchPPLParser.EVENTSTATS:
            case OpenSearchPPLParser.DEDUP:
            case OpenSearchPPLParser.SORT:
            case OpenSearchPPLParser.EVAL:
            case OpenSearchPPLParser.HEAD:
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
            case OpenSearchPPLParser.COUNTFIELD:
            case OpenSearchPPLParser.SHOWCOUNT:
            case OpenSearchPPLParser.CASE:
            case OpenSearchPPLParser.ELSE:
            case OpenSearchPPLParser.IN:
            case OpenSearchPPLParser.EXISTS:
            case OpenSearchPPLParser.GEOIP:
            case OpenSearchPPLParser.REGEXP:
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
            case OpenSearchPPLParser.ABS:
            case OpenSearchPPLParser.CBRT:
            case OpenSearchPPLParser.CEIL:
            case OpenSearchPPLParser.CEILING:
            case OpenSearchPPLParser.CONV:
            case OpenSearchPPLParser.CRC32:
            case OpenSearchPPLParser.E:
            case OpenSearchPPLParser.EXP:
            case OpenSearchPPLParser.FLOOR:
            case OpenSearchPPLParser.LN:
            case OpenSearchPPLParser.LOG:
            case OpenSearchPPLParser.LOG10:
            case OpenSearchPPLParser.LOG2:
            case OpenSearchPPLParser.MOD:
            case OpenSearchPPLParser.PI:
            case OpenSearchPPLParser.POSITION:
            case OpenSearchPPLParser.POW:
            case OpenSearchPPLParser.POWER:
            case OpenSearchPPLParser.RAND:
            case OpenSearchPPLParser.ROUND:
            case OpenSearchPPLParser.SIGN:
            case OpenSearchPPLParser.SQRT:
            case OpenSearchPPLParser.TRUNCATE:
            case OpenSearchPPLParser.ACOS:
            case OpenSearchPPLParser.ASIN:
            case OpenSearchPPLParser.ATAN:
            case OpenSearchPPLParser.ATAN2:
            case OpenSearchPPLParser.COS:
            case OpenSearchPPLParser.COT:
            case OpenSearchPPLParser.DEGREES:
            case OpenSearchPPLParser.RADIANS:
            case OpenSearchPPLParser.SIN:
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
            case OpenSearchPPLParser.ID:
            case OpenSearchPPLParser.BQUOTA_STRING:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1339;
                this.qualifiedName();
                }
                break;
            case OpenSearchPPLParser.DQUOTA_STRING:
            case OpenSearchPPLParser.SQUOTA_STRING:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1340;
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
        this.enterRule(localContext, 212, OpenSearchPPLParser.RULE_relevanceQuery);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1343;
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
        this.enterRule(localContext, 214, OpenSearchPPLParser.RULE_relevanceArgValue);
        try {
            this.state = 1347;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 129, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1345;
                this.qualifiedName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1346;
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
        this.enterRule(localContext, 216, OpenSearchPPLParser.RULE_mathematicalFunctionName);
        try {
            this.state = 1372;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.ABS:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1349;
                this.match(OpenSearchPPLParser.ABS);
                }
                break;
            case OpenSearchPPLParser.CBRT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1350;
                this.match(OpenSearchPPLParser.CBRT);
                }
                break;
            case OpenSearchPPLParser.CEIL:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1351;
                this.match(OpenSearchPPLParser.CEIL);
                }
                break;
            case OpenSearchPPLParser.CEILING:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1352;
                this.match(OpenSearchPPLParser.CEILING);
                }
                break;
            case OpenSearchPPLParser.CONV:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1353;
                this.match(OpenSearchPPLParser.CONV);
                }
                break;
            case OpenSearchPPLParser.CRC32:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1354;
                this.match(OpenSearchPPLParser.CRC32);
                }
                break;
            case OpenSearchPPLParser.E:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1355;
                this.match(OpenSearchPPLParser.E);
                }
                break;
            case OpenSearchPPLParser.EXP:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1356;
                this.match(OpenSearchPPLParser.EXP);
                }
                break;
            case OpenSearchPPLParser.FLOOR:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1357;
                this.match(OpenSearchPPLParser.FLOOR);
                }
                break;
            case OpenSearchPPLParser.LN:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1358;
                this.match(OpenSearchPPLParser.LN);
                }
                break;
            case OpenSearchPPLParser.LOG:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1359;
                this.match(OpenSearchPPLParser.LOG);
                }
                break;
            case OpenSearchPPLParser.LOG10:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 1360;
                this.match(OpenSearchPPLParser.LOG10);
                }
                break;
            case OpenSearchPPLParser.LOG2:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 1361;
                this.match(OpenSearchPPLParser.LOG2);
                }
                break;
            case OpenSearchPPLParser.MOD:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 1362;
                this.match(OpenSearchPPLParser.MOD);
                }
                break;
            case OpenSearchPPLParser.PI:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 1363;
                this.match(OpenSearchPPLParser.PI);
                }
                break;
            case OpenSearchPPLParser.POW:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 1364;
                this.match(OpenSearchPPLParser.POW);
                }
                break;
            case OpenSearchPPLParser.POWER:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 1365;
                this.match(OpenSearchPPLParser.POWER);
                }
                break;
            case OpenSearchPPLParser.RAND:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 1366;
                this.match(OpenSearchPPLParser.RAND);
                }
                break;
            case OpenSearchPPLParser.ROUND:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 1367;
                this.match(OpenSearchPPLParser.ROUND);
                }
                break;
            case OpenSearchPPLParser.SIGN:
                this.enterOuterAlt(localContext, 20);
                {
                this.state = 1368;
                this.match(OpenSearchPPLParser.SIGN);
                }
                break;
            case OpenSearchPPLParser.SQRT:
                this.enterOuterAlt(localContext, 21);
                {
                this.state = 1369;
                this.match(OpenSearchPPLParser.SQRT);
                }
                break;
            case OpenSearchPPLParser.TRUNCATE:
                this.enterOuterAlt(localContext, 22);
                {
                this.state = 1370;
                this.match(OpenSearchPPLParser.TRUNCATE);
                }
                break;
            case OpenSearchPPLParser.ACOS:
            case OpenSearchPPLParser.ASIN:
            case OpenSearchPPLParser.ATAN:
            case OpenSearchPPLParser.ATAN2:
            case OpenSearchPPLParser.COS:
            case OpenSearchPPLParser.COT:
            case OpenSearchPPLParser.DEGREES:
            case OpenSearchPPLParser.RADIANS:
            case OpenSearchPPLParser.SIN:
            case OpenSearchPPLParser.TAN:
                this.enterOuterAlt(localContext, 23);
                {
                this.state = 1371;
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
        this.enterRule(localContext, 218, OpenSearchPPLParser.RULE_geoipFunctionName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1374;
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
        this.enterRule(localContext, 220, OpenSearchPPLParser.RULE_collectionFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1376;
            _la = this.tokenStream.LA(1);
            if(!(_la === 97 || ((((_la - 333)) & ~0x1F) === 0 && ((1 << (_la - 333)) & 63) !== 0))) {
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
        this.enterRule(localContext, 222, OpenSearchPPLParser.RULE_trigonometricFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1378;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 242)) & ~0x1F) === 0 && ((1 << (_la - 242)) & 1023) !== 0))) {
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
        this.enterRule(localContext, 224, OpenSearchPPLParser.RULE_jsonFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1380;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 340)) & ~0x1F) === 0 && ((1 << (_la - 340)) & 1023) !== 0))) {
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
        this.enterRule(localContext, 226, OpenSearchPPLParser.RULE_cryptographicFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1382;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 252)) & ~0x1F) === 0 && ((1 << (_la - 252)) & 7) !== 0))) {
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
        this.enterRule(localContext, 228, OpenSearchPPLParser.RULE_dateTimeFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1384;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 1038960967) !== 0) || ((((_la - 255)) & ~0x1F) === 0 && ((1 << (_la - 255)) & 4292607999) !== 0) || ((((_la - 287)) & ~0x1F) === 0 && ((1 << (_la - 287)) & 523903) !== 0))) {
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
        this.enterRule(localContext, 230, OpenSearchPPLParser.RULE_getFormatFunctionCall);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1386;
            this.match(OpenSearchPPLParser.GET_FORMAT);
            this.state = 1387;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1388;
            this.getFormatType();
            this.state = 1389;
            this.match(OpenSearchPPLParser.COMMA);
            this.state = 1390;
            this.functionArg();
            this.state = 1391;
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
        this.enterRule(localContext, 232, OpenSearchPPLParser.RULE_getFormatType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1393;
            _la = this.tokenStream.LA(1);
            if(!(_la === 107 || ((((_la - 262)) & ~0x1F) === 0 && ((1 << (_la - 262)) & 2684354561) !== 0))) {
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
        this.enterRule(localContext, 234, OpenSearchPPLParser.RULE_extractFunctionCall);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1395;
            this.match(OpenSearchPPLParser.EXTRACT);
            this.state = 1396;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1397;
            this.datetimePart();
            this.state = 1398;
            this.match(OpenSearchPPLParser.FROM);
            this.state = 1399;
            this.functionArg();
            this.state = 1400;
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
        this.enterRule(localContext, 236, OpenSearchPPLParser.RULE_simpleDateTimePart);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1402;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & 174608449) !== 0))) {
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
        this.enterRule(localContext, 238, OpenSearchPPLParser.RULE_complexDateTimePart);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1404;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & 138560215) !== 0))) {
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
        this.enterRule(localContext, 240, OpenSearchPPLParser.RULE_datetimePart);
        try {
            this.state = 1408;
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
                this.state = 1406;
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
                this.state = 1407;
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
        this.enterRule(localContext, 242, OpenSearchPPLParser.RULE_timestampFunctionCall);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1410;
            this.timestampFunctionName();
            this.state = 1411;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1412;
            this.simpleDateTimePart();
            this.state = 1413;
            this.match(OpenSearchPPLParser.COMMA);
            this.state = 1414;
            localContext._firstArg = this.functionArg();
            this.state = 1415;
            this.match(OpenSearchPPLParser.COMMA);
            this.state = 1416;
            localContext._secondArg = this.functionArg();
            this.state = 1417;
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
        this.enterRule(localContext, 244, OpenSearchPPLParser.RULE_timestampFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1419;
            _la = this.tokenStream.LA(1);
            if(!(_la === 294 || _la === 295)) {
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
        this.enterRule(localContext, 246, OpenSearchPPLParser.RULE_conditionFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1421;
            _la = this.tokenStream.LA(1);
            if(!(_la === 197 || _la === 198 || ((((_la - 325)) & ~0x1F) === 0 && ((1 << (_la - 325)) & 16623) !== 0))) {
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
        this.enterRule(localContext, 248, OpenSearchPPLParser.RULE_flowControlFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1423;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 350)) & ~0x1F) === 0 && ((1 << (_la - 350)) & 23) !== 0))) {
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
        this.enterRule(localContext, 250, OpenSearchPPLParser.RULE_systemFunctionName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1425;
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
        this.enterRule(localContext, 252, OpenSearchPPLParser.RULE_textFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1427;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 306)) & ~0x1F) === 0 && ((1 << (_la - 306)) & 262111) !== 0))) {
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
        this.enterRule(localContext, 254, OpenSearchPPLParser.RULE_positionFunctionName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1429;
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
        this.enterRule(localContext, 256, OpenSearchPPLParser.RULE_comparisonOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1431;
            _la = this.tokenStream.LA(1);
            if(!(_la === 105 || ((((_la - 151)) & ~0x1F) === 0 && ((1 << (_la - 151)) & 63) !== 0))) {
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
        this.enterRule(localContext, 258, OpenSearchPPLParser.RULE_singleFieldRelevanceFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1433;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 355)) & ~0x1F) === 0 && ((1 << (_la - 355)) & 15) !== 0))) {
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
        this.enterRule(localContext, 260, OpenSearchPPLParser.RULE_multiFieldRelevanceFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1435;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 359)) & ~0x1F) === 0 && ((1 << (_la - 359)) & 7) !== 0))) {
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
        this.enterRule(localContext, 262, OpenSearchPPLParser.RULE_literalValue);
        try {
            this.state = 1445;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 132, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1437;
                this.intervalLiteral();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1438;
                this.stringLiteral();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1439;
                this.integerLiteral();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1440;
                this.decimalLiteral();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1441;
                this.doubleLiteral();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1442;
                this.floatLiteral();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1443;
                this.booleanLiteral();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1444;
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
        this.enterRule(localContext, 264, OpenSearchPPLParser.RULE_intervalLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1447;
            this.match(OpenSearchPPLParser.INTERVAL);
            this.state = 1448;
            this.valueExpression(0);
            this.state = 1449;
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
        this.enterRule(localContext, 266, OpenSearchPPLParser.RULE_stringLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1451;
            _la = this.tokenStream.LA(1);
            if(!(_la === 408 || _la === 409)) {
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
        this.enterRule(localContext, 268, OpenSearchPPLParser.RULE_integerLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1454;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 157 || _la === 158) {
                {
                this.state = 1453;
                _la = this.tokenStream.LA(1);
                if(!(_la === 157 || _la === 158)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 1456;
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
        this.enterRule(localContext, 270, OpenSearchPPLParser.RULE_decimalLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1459;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 157 || _la === 158) {
                {
                this.state = 1458;
                _la = this.tokenStream.LA(1);
                if(!(_la === 157 || _la === 158)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 1461;
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
        this.enterRule(localContext, 272, OpenSearchPPLParser.RULE_doubleLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1464;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 157 || _la === 158) {
                {
                this.state = 1463;
                _la = this.tokenStream.LA(1);
                if(!(_la === 157 || _la === 158)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 1466;
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
        this.enterRule(localContext, 274, OpenSearchPPLParser.RULE_floatLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1469;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 157 || _la === 158) {
                {
                this.state = 1468;
                _la = this.tokenStream.LA(1);
                if(!(_la === 157 || _la === 158)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 1471;
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
        this.enterRule(localContext, 276, OpenSearchPPLParser.RULE_booleanLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1473;
            _la = this.tokenStream.LA(1);
            if(!(_la === 103 || _la === 104)) {
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
        this.enterRule(localContext, 278, OpenSearchPPLParser.RULE_datetimeLiteral);
        try {
            this.state = 1478;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.DATE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1475;
                this.dateLiteral();
                }
                break;
            case OpenSearchPPLParser.TIME:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1476;
                this.timeLiteral();
                }
                break;
            case OpenSearchPPLParser.TIMESTAMP:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1477;
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
        this.enterRule(localContext, 280, OpenSearchPPLParser.RULE_dateLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1480;
            this.match(OpenSearchPPLParser.DATE);
            this.state = 1481;
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
        this.enterRule(localContext, 282, OpenSearchPPLParser.RULE_timeLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1483;
            this.match(OpenSearchPPLParser.TIME);
            this.state = 1484;
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
        this.enterRule(localContext, 284, OpenSearchPPLParser.RULE_timestampLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1486;
            this.match(OpenSearchPPLParser.TIMESTAMP);
            this.state = 1487;
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
        this.enterRule(localContext, 286, OpenSearchPPLParser.RULE_intervalUnit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1489;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & 451728879) !== 0))) {
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
        this.enterRule(localContext, 288, OpenSearchPPLParser.RULE_timespanUnit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1491;
            _la = this.tokenStream.LA(1);
            if(!(_la === 56 || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & 174612545) !== 0) || ((((_la - 394)) & ~0x1F) === 0 && ((1 << (_la - 394)) & 127) !== 0))) {
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
        this.enterRule(localContext, 290, OpenSearchPPLParser.RULE_valueList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1493;
            this.match(OpenSearchPPLParser.LT_PRTHS);
            this.state = 1494;
            this.literalValue();
            this.state = 1499;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 149) {
                {
                {
                this.state = 1495;
                this.match(OpenSearchPPLParser.COMMA);
                this.state = 1496;
                this.literalValue();
                }
                }
                this.state = 1501;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1502;
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
        this.enterRule(localContext, 292, OpenSearchPPLParser.RULE_qualifiedName);
        try {
            let alternative: number;
            localContext = new IdentsAsQualifiedNameContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1504;
            this.ident();
            this.state = 1509;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 139, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1505;
                    this.match(OpenSearchPPLParser.DOT);
                    this.state = 1506;
                    this.ident();
                    }
                    }
                }
                this.state = 1511;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 139, this.context);
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
        this.enterRule(localContext, 294, OpenSearchPPLParser.RULE_tableQualifiedName);
        try {
            let alternative: number;
            localContext = new IdentsAsTableQualifiedNameContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1512;
            this.tableIdent();
            this.state = 1517;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 140, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1513;
                    this.match(OpenSearchPPLParser.DOT);
                    this.state = 1514;
                    this.ident();
                    }
                    }
                }
                this.state = 1519;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 140, this.context);
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
        this.enterRule(localContext, 296, OpenSearchPPLParser.RULE_wcQualifiedName);
        let _la: number;
        try {
            localContext = new IdentsAsWildcardQualifiedNameContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1520;
            this.wildcard();
            this.state = 1525;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 150) {
                {
                {
                this.state = 1521;
                this.match(OpenSearchPPLParser.DOT);
                this.state = 1522;
                this.wildcard();
                }
                }
                this.state = 1527;
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
    public identifierSeq(): IdentifierSeqContext {
        let localContext = new IdentifierSeqContext(this.context, this.state);
        this.enterRule(localContext, 298, OpenSearchPPLParser.RULE_identifierSeq);
        let _la: number;
        try {
            this.state = 1547;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.SEARCH:
            case OpenSearchPPLParser.DESCRIBE:
            case OpenSearchPPLParser.SHOW:
            case OpenSearchPPLParser.EXPLAIN:
            case OpenSearchPPLParser.FROM:
            case OpenSearchPPLParser.WHERE:
            case OpenSearchPPLParser.FIELDS:
            case OpenSearchPPLParser.RENAME:
            case OpenSearchPPLParser.STATS:
            case OpenSearchPPLParser.EVENTSTATS:
            case OpenSearchPPLParser.DEDUP:
            case OpenSearchPPLParser.SORT:
            case OpenSearchPPLParser.EVAL:
            case OpenSearchPPLParser.HEAD:
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
            case OpenSearchPPLParser.COUNTFIELD:
            case OpenSearchPPLParser.SHOWCOUNT:
            case OpenSearchPPLParser.CASE:
            case OpenSearchPPLParser.ELSE:
            case OpenSearchPPLParser.IN:
            case OpenSearchPPLParser.EXISTS:
            case OpenSearchPPLParser.GEOIP:
            case OpenSearchPPLParser.REGEXP:
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
            case OpenSearchPPLParser.ABS:
            case OpenSearchPPLParser.CBRT:
            case OpenSearchPPLParser.CEIL:
            case OpenSearchPPLParser.CEILING:
            case OpenSearchPPLParser.CONV:
            case OpenSearchPPLParser.CRC32:
            case OpenSearchPPLParser.E:
            case OpenSearchPPLParser.EXP:
            case OpenSearchPPLParser.FLOOR:
            case OpenSearchPPLParser.LN:
            case OpenSearchPPLParser.LOG:
            case OpenSearchPPLParser.LOG10:
            case OpenSearchPPLParser.LOG2:
            case OpenSearchPPLParser.MOD:
            case OpenSearchPPLParser.PI:
            case OpenSearchPPLParser.POSITION:
            case OpenSearchPPLParser.POW:
            case OpenSearchPPLParser.POWER:
            case OpenSearchPPLParser.RAND:
            case OpenSearchPPLParser.ROUND:
            case OpenSearchPPLParser.SIGN:
            case OpenSearchPPLParser.SQRT:
            case OpenSearchPPLParser.TRUNCATE:
            case OpenSearchPPLParser.ACOS:
            case OpenSearchPPLParser.ASIN:
            case OpenSearchPPLParser.ATAN:
            case OpenSearchPPLParser.ATAN2:
            case OpenSearchPPLParser.COS:
            case OpenSearchPPLParser.COT:
            case OpenSearchPPLParser.DEGREES:
            case OpenSearchPPLParser.RADIANS:
            case OpenSearchPPLParser.SIN:
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
            case OpenSearchPPLParser.ID:
            case OpenSearchPPLParser.BQUOTA_STRING:
                localContext = new IdentsAsQualifiedNameSeqContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1528;
                this.qualifiedName();
                this.state = 1533;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 149) {
                    {
                    {
                    this.state = 1529;
                    this.match(OpenSearchPPLParser.COMMA);
                    this.state = 1530;
                    this.qualifiedName();
                    }
                    }
                    this.state = 1535;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            case OpenSearchPPLParser.LT_PRTHS:
                localContext = new IdentsAsQualifiedNameSeqContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1536;
                this.match(OpenSearchPPLParser.LT_PRTHS);
                this.state = 1537;
                this.qualifiedName();
                this.state = 1542;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 149) {
                    {
                    {
                    this.state = 1538;
                    this.match(OpenSearchPPLParser.COMMA);
                    this.state = 1539;
                    this.qualifiedName();
                    }
                    }
                    this.state = 1544;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1545;
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
        this.enterRule(localContext, 300, OpenSearchPPLParser.RULE_ident);
        let _la: number;
        try {
            this.state = 1559;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchPPLParser.DOT:
            case OpenSearchPPLParser.ID:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1550;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 150) {
                    {
                    this.state = 1549;
                    this.match(OpenSearchPPLParser.DOT);
                    }
                }

                this.state = 1552;
                this.match(OpenSearchPPLParser.ID);
                }
                break;
            case OpenSearchPPLParser.BACKTICK:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1553;
                this.match(OpenSearchPPLParser.BACKTICK);
                this.state = 1554;
                this.ident();
                this.state = 1555;
                this.match(OpenSearchPPLParser.BACKTICK);
                }
                break;
            case OpenSearchPPLParser.BQUOTA_STRING:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1557;
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
            case OpenSearchPPLParser.RENAME:
            case OpenSearchPPLParser.STATS:
            case OpenSearchPPLParser.EVENTSTATS:
            case OpenSearchPPLParser.DEDUP:
            case OpenSearchPPLParser.SORT:
            case OpenSearchPPLParser.EVAL:
            case OpenSearchPPLParser.HEAD:
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
            case OpenSearchPPLParser.COUNTFIELD:
            case OpenSearchPPLParser.SHOWCOUNT:
            case OpenSearchPPLParser.CASE:
            case OpenSearchPPLParser.ELSE:
            case OpenSearchPPLParser.IN:
            case OpenSearchPPLParser.EXISTS:
            case OpenSearchPPLParser.GEOIP:
            case OpenSearchPPLParser.REGEXP:
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
            case OpenSearchPPLParser.ABS:
            case OpenSearchPPLParser.CBRT:
            case OpenSearchPPLParser.CEIL:
            case OpenSearchPPLParser.CEILING:
            case OpenSearchPPLParser.CONV:
            case OpenSearchPPLParser.CRC32:
            case OpenSearchPPLParser.E:
            case OpenSearchPPLParser.EXP:
            case OpenSearchPPLParser.FLOOR:
            case OpenSearchPPLParser.LN:
            case OpenSearchPPLParser.LOG:
            case OpenSearchPPLParser.LOG10:
            case OpenSearchPPLParser.LOG2:
            case OpenSearchPPLParser.MOD:
            case OpenSearchPPLParser.PI:
            case OpenSearchPPLParser.POSITION:
            case OpenSearchPPLParser.POW:
            case OpenSearchPPLParser.POWER:
            case OpenSearchPPLParser.RAND:
            case OpenSearchPPLParser.ROUND:
            case OpenSearchPPLParser.SIGN:
            case OpenSearchPPLParser.SQRT:
            case OpenSearchPPLParser.TRUNCATE:
            case OpenSearchPPLParser.ACOS:
            case OpenSearchPPLParser.ASIN:
            case OpenSearchPPLParser.ATAN:
            case OpenSearchPPLParser.ATAN2:
            case OpenSearchPPLParser.COS:
            case OpenSearchPPLParser.COT:
            case OpenSearchPPLParser.DEGREES:
            case OpenSearchPPLParser.RADIANS:
            case OpenSearchPPLParser.SIN:
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
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1558;
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
        this.enterRule(localContext, 302, OpenSearchPPLParser.RULE_tableIdent);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1562;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 402) {
                {
                this.state = 1561;
                this.match(OpenSearchPPLParser.CLUSTER);
                }
            }

            this.state = 1564;
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
        this.enterRule(localContext, 304, OpenSearchPPLParser.RULE_wildcard);
        let _la: number;
        try {
            let alternative: number;
            this.state = 1589;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 150, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1566;
                this.ident();
                this.state = 1571;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 148, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1567;
                        this.match(OpenSearchPPLParser.MODULE);
                        this.state = 1568;
                        this.ident();
                        }
                        }
                    }
                    this.state = 1573;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 148, this.context);
                }
                this.state = 1575;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 161) {
                    {
                    this.state = 1574;
                    this.match(OpenSearchPPLParser.MODULE);
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1577;
                this.match(OpenSearchPPLParser.SINGLE_QUOTE);
                this.state = 1578;
                this.wildcard();
                this.state = 1579;
                this.match(OpenSearchPPLParser.SINGLE_QUOTE);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1581;
                this.match(OpenSearchPPLParser.DOUBLE_QUOTE);
                this.state = 1582;
                this.wildcard();
                this.state = 1583;
                this.match(OpenSearchPPLParser.DOUBLE_QUOTE);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1585;
                this.match(OpenSearchPPLParser.BACKTICK);
                this.state = 1586;
                this.wildcard();
                this.state = 1587;
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
        this.enterRule(localContext, 306, OpenSearchPPLParser.RULE_keywordsCanBeId);
        try {
            this.state = 1696;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 151, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1591;
                this.match(OpenSearchPPLParser.D);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1592;
                this.timespanUnit();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1593;
                this.match(OpenSearchPPLParser.SPAN);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1594;
                this.evalFunctionName();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1595;
                this.jsonFunctionName();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1596;
                this.relevanceArgName();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1597;
                this.intervalUnit();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1598;
                this.trendlineType();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1599;
                this.singleFieldRelevanceFunctionName();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1600;
                this.multiFieldRelevanceFunctionName();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1601;
                this.commandName();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 1602;
                this.collectionFunctionName();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 1603;
                this.comparisonOperator();
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 1604;
                this.explainMode();
                }
                break;
            case 15:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 1605;
                this.match(OpenSearchPPLParser.CASE);
                }
                break;
            case 16:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 1606;
                this.match(OpenSearchPPLParser.ELSE);
                }
                break;
            case 17:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 1607;
                this.match(OpenSearchPPLParser.IN);
                }
                break;
            case 18:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 1608;
                this.match(OpenSearchPPLParser.ARROW);
                }
                break;
            case 19:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 1609;
                this.match(OpenSearchPPLParser.BETWEEN);
                }
                break;
            case 20:
                this.enterOuterAlt(localContext, 20);
                {
                this.state = 1610;
                this.match(OpenSearchPPLParser.EXISTS);
                }
                break;
            case 21:
                this.enterOuterAlt(localContext, 21);
                {
                this.state = 1611;
                this.match(OpenSearchPPLParser.SOURCE);
                }
                break;
            case 22:
                this.enterOuterAlt(localContext, 22);
                {
                this.state = 1612;
                this.match(OpenSearchPPLParser.INDEX);
                }
                break;
            case 23:
                this.enterOuterAlt(localContext, 23);
                {
                this.state = 1613;
                this.match(OpenSearchPPLParser.DESC);
                }
                break;
            case 24:
                this.enterOuterAlt(localContext, 24);
                {
                this.state = 1614;
                this.match(OpenSearchPPLParser.DATASOURCES);
                }
                break;
            case 25:
                this.enterOuterAlt(localContext, 25);
                {
                this.state = 1615;
                this.match(OpenSearchPPLParser.FROM);
                }
                break;
            case 26:
                this.enterOuterAlt(localContext, 26);
                {
                this.state = 1616;
                this.match(OpenSearchPPLParser.PATTERN);
                }
                break;
            case 27:
                this.enterOuterAlt(localContext, 27);
                {
                this.state = 1617;
                this.match(OpenSearchPPLParser.NEW_FIELD);
                }
                break;
            case 28:
                this.enterOuterAlt(localContext, 28);
                {
                this.state = 1618;
                this.match(OpenSearchPPLParser.METHOD);
                }
                break;
            case 29:
                this.enterOuterAlt(localContext, 29);
                {
                this.state = 1619;
                this.match(OpenSearchPPLParser.VARIABLE_COUNT_THRESHOLD);
                }
                break;
            case 30:
                this.enterOuterAlt(localContext, 30);
                {
                this.state = 1620;
                this.match(OpenSearchPPLParser.FREQUENCY_THRESHOLD_PERCENTAGE);
                }
                break;
            case 31:
                this.enterOuterAlt(localContext, 31);
                {
                this.state = 1621;
                this.match(OpenSearchPPLParser.MAX_SAMPLE_COUNT);
                }
                break;
            case 32:
                this.enterOuterAlt(localContext, 32);
                {
                this.state = 1622;
                this.match(OpenSearchPPLParser.BUFFER_LIMIT);
                }
                break;
            case 33:
                this.enterOuterAlt(localContext, 33);
                {
                this.state = 1623;
                this.match(OpenSearchPPLParser.WITH);
                }
                break;
            case 34:
                this.enterOuterAlt(localContext, 34);
                {
                this.state = 1624;
                this.match(OpenSearchPPLParser.REGEX);
                }
                break;
            case 35:
                this.enterOuterAlt(localContext, 35);
                {
                this.state = 1625;
                this.match(OpenSearchPPLParser.PUNCT);
                }
                break;
            case 36:
                this.enterOuterAlt(localContext, 36);
                {
                this.state = 1626;
                this.match(OpenSearchPPLParser.USING);
                }
                break;
            case 37:
                this.enterOuterAlt(localContext, 37);
                {
                this.state = 1627;
                this.match(OpenSearchPPLParser.CAST);
                }
                break;
            case 38:
                this.enterOuterAlt(localContext, 38);
                {
                this.state = 1628;
                this.match(OpenSearchPPLParser.GET_FORMAT);
                }
                break;
            case 39:
                this.enterOuterAlt(localContext, 39);
                {
                this.state = 1629;
                this.match(OpenSearchPPLParser.EXTRACT);
                }
                break;
            case 40:
                this.enterOuterAlt(localContext, 40);
                {
                this.state = 1630;
                this.match(OpenSearchPPLParser.INTERVAL);
                }
                break;
            case 41:
                this.enterOuterAlt(localContext, 41);
                {
                this.state = 1631;
                this.match(OpenSearchPPLParser.PLUS);
                }
                break;
            case 42:
                this.enterOuterAlt(localContext, 42);
                {
                this.state = 1632;
                this.match(OpenSearchPPLParser.MINUS);
                }
                break;
            case 43:
                this.enterOuterAlt(localContext, 43);
                {
                this.state = 1633;
                this.match(OpenSearchPPLParser.OVERRIDE);
                }
                break;
            case 44:
                this.enterOuterAlt(localContext, 44);
                {
                this.state = 1634;
                this.match(OpenSearchPPLParser.AUTO);
                }
                break;
            case 45:
                this.enterOuterAlt(localContext, 45);
                {
                this.state = 1635;
                this.match(OpenSearchPPLParser.STR);
                }
                break;
            case 46:
                this.enterOuterAlt(localContext, 46);
                {
                this.state = 1636;
                this.match(OpenSearchPPLParser.IP);
                }
                break;
            case 47:
                this.enterOuterAlt(localContext, 47);
                {
                this.state = 1637;
                this.match(OpenSearchPPLParser.NUM);
                }
                break;
            case 48:
                this.enterOuterAlt(localContext, 48);
                {
                this.state = 1638;
                this.match(OpenSearchPPLParser.KEEPEMPTY);
                }
                break;
            case 49:
                this.enterOuterAlt(localContext, 49);
                {
                this.state = 1639;
                this.match(OpenSearchPPLParser.CONSECUTIVE);
                }
                break;
            case 50:
                this.enterOuterAlt(localContext, 50);
                {
                this.state = 1640;
                this.match(OpenSearchPPLParser.DEDUP_SPLITVALUES);
                }
                break;
            case 51:
                this.enterOuterAlt(localContext, 51);
                {
                this.state = 1641;
                this.match(OpenSearchPPLParser.PARTITIONS);
                }
                break;
            case 52:
                this.enterOuterAlt(localContext, 52);
                {
                this.state = 1642;
                this.match(OpenSearchPPLParser.ALLNUM);
                }
                break;
            case 53:
                this.enterOuterAlt(localContext, 53);
                {
                this.state = 1643;
                this.match(OpenSearchPPLParser.DELIM);
                }
                break;
            case 54:
                this.enterOuterAlt(localContext, 54);
                {
                this.state = 1644;
                this.match(OpenSearchPPLParser.CENTROIDS);
                }
                break;
            case 55:
                this.enterOuterAlt(localContext, 55);
                {
                this.state = 1645;
                this.match(OpenSearchPPLParser.ITERATIONS);
                }
                break;
            case 56:
                this.enterOuterAlt(localContext, 56);
                {
                this.state = 1646;
                this.match(OpenSearchPPLParser.DISTANCE_TYPE);
                }
                break;
            case 57:
                this.enterOuterAlt(localContext, 57);
                {
                this.state = 1647;
                this.match(OpenSearchPPLParser.NUMBER_OF_TREES);
                }
                break;
            case 58:
                this.enterOuterAlt(localContext, 58);
                {
                this.state = 1648;
                this.match(OpenSearchPPLParser.SHINGLE_SIZE);
                }
                break;
            case 59:
                this.enterOuterAlt(localContext, 59);
                {
                this.state = 1649;
                this.match(OpenSearchPPLParser.SAMPLE_SIZE);
                }
                break;
            case 60:
                this.enterOuterAlt(localContext, 60);
                {
                this.state = 1650;
                this.match(OpenSearchPPLParser.OUTPUT_AFTER);
                }
                break;
            case 61:
                this.enterOuterAlt(localContext, 61);
                {
                this.state = 1651;
                this.match(OpenSearchPPLParser.TIME_DECAY);
                }
                break;
            case 62:
                this.enterOuterAlt(localContext, 62);
                {
                this.state = 1652;
                this.match(OpenSearchPPLParser.ANOMALY_RATE);
                }
                break;
            case 63:
                this.enterOuterAlt(localContext, 63);
                {
                this.state = 1653;
                this.match(OpenSearchPPLParser.CATEGORY_FIELD);
                }
                break;
            case 64:
                this.enterOuterAlt(localContext, 64);
                {
                this.state = 1654;
                this.match(OpenSearchPPLParser.TIME_FIELD);
                }
                break;
            case 65:
                this.enterOuterAlt(localContext, 65);
                {
                this.state = 1655;
                this.match(OpenSearchPPLParser.TIME_ZONE);
                }
                break;
            case 66:
                this.enterOuterAlt(localContext, 66);
                {
                this.state = 1656;
                this.match(OpenSearchPPLParser.TRAINING_DATA_SIZE);
                }
                break;
            case 67:
                this.enterOuterAlt(localContext, 67);
                {
                this.state = 1657;
                this.match(OpenSearchPPLParser.ANOMALY_SCORE_THRESHOLD);
                }
                break;
            case 68:
                this.enterOuterAlt(localContext, 68);
                {
                this.state = 1658;
                this.match(OpenSearchPPLParser.COUNTFIELD);
                }
                break;
            case 69:
                this.enterOuterAlt(localContext, 69);
                {
                this.state = 1659;
                this.match(OpenSearchPPLParser.SHOWCOUNT);
                }
                break;
            case 70:
                this.enterOuterAlt(localContext, 70);
                {
                this.state = 1660;
                this.statsFunctionName();
                }
                break;
            case 71:
                this.enterOuterAlt(localContext, 71);
                {
                this.state = 1661;
                this.windowFunctionName();
                }
                break;
            case 72:
                this.enterOuterAlt(localContext, 72);
                {
                this.state = 1662;
                this.match(OpenSearchPPLParser.DISTINCT_COUNT);
                }
                break;
            case 73:
                this.enterOuterAlt(localContext, 73);
                {
                this.state = 1663;
                this.match(OpenSearchPPLParser.DISTINCT_COUNT_APPROX);
                }
                break;
            case 74:
                this.enterOuterAlt(localContext, 74);
                {
                this.state = 1664;
                this.match(OpenSearchPPLParser.ESTDC);
                }
                break;
            case 75:
                this.enterOuterAlt(localContext, 75);
                {
                this.state = 1665;
                this.match(OpenSearchPPLParser.ESTDC_ERROR);
                }
                break;
            case 76:
                this.enterOuterAlt(localContext, 76);
                {
                this.state = 1666;
                this.match(OpenSearchPPLParser.MEAN);
                }
                break;
            case 77:
                this.enterOuterAlt(localContext, 77);
                {
                this.state = 1667;
                this.match(OpenSearchPPLParser.MEDIAN);
                }
                break;
            case 78:
                this.enterOuterAlt(localContext, 78);
                {
                this.state = 1668;
                this.match(OpenSearchPPLParser.MODE);
                }
                break;
            case 79:
                this.enterOuterAlt(localContext, 79);
                {
                this.state = 1669;
                this.match(OpenSearchPPLParser.RANGE);
                }
                break;
            case 80:
                this.enterOuterAlt(localContext, 80);
                {
                this.state = 1670;
                this.match(OpenSearchPPLParser.STDEV);
                }
                break;
            case 81:
                this.enterOuterAlt(localContext, 81);
                {
                this.state = 1671;
                this.match(OpenSearchPPLParser.STDEVP);
                }
                break;
            case 82:
                this.enterOuterAlt(localContext, 82);
                {
                this.state = 1672;
                this.match(OpenSearchPPLParser.SUMSQ);
                }
                break;
            case 83:
                this.enterOuterAlt(localContext, 83);
                {
                this.state = 1673;
                this.match(OpenSearchPPLParser.VAR_SAMP);
                }
                break;
            case 84:
                this.enterOuterAlt(localContext, 84);
                {
                this.state = 1674;
                this.match(OpenSearchPPLParser.VAR_POP);
                }
                break;
            case 85:
                this.enterOuterAlt(localContext, 85);
                {
                this.state = 1675;
                this.match(OpenSearchPPLParser.TAKE);
                }
                break;
            case 86:
                this.enterOuterAlt(localContext, 86);
                {
                this.state = 1676;
                this.match(OpenSearchPPLParser.LIST);
                }
                break;
            case 87:
                this.enterOuterAlt(localContext, 87);
                {
                this.state = 1677;
                this.match(OpenSearchPPLParser.VALUES);
                }
                break;
            case 88:
                this.enterOuterAlt(localContext, 88);
                {
                this.state = 1678;
                this.match(OpenSearchPPLParser.PER_DAY);
                }
                break;
            case 89:
                this.enterOuterAlt(localContext, 89);
                {
                this.state = 1679;
                this.match(OpenSearchPPLParser.PER_HOUR);
                }
                break;
            case 90:
                this.enterOuterAlt(localContext, 90);
                {
                this.state = 1680;
                this.match(OpenSearchPPLParser.PER_MINUTE);
                }
                break;
            case 91:
                this.enterOuterAlt(localContext, 91);
                {
                this.state = 1681;
                this.match(OpenSearchPPLParser.PER_SECOND);
                }
                break;
            case 92:
                this.enterOuterAlt(localContext, 92);
                {
                this.state = 1682;
                this.match(OpenSearchPPLParser.RATE);
                }
                break;
            case 93:
                this.enterOuterAlt(localContext, 93);
                {
                this.state = 1683;
                this.match(OpenSearchPPLParser.SPARKLINE);
                }
                break;
            case 94:
                this.enterOuterAlt(localContext, 94);
                {
                this.state = 1684;
                this.match(OpenSearchPPLParser.C);
                }
                break;
            case 95:
                this.enterOuterAlt(localContext, 95);
                {
                this.state = 1685;
                this.match(OpenSearchPPLParser.DC);
                }
                break;
            case 96:
                this.enterOuterAlt(localContext, 96);
                {
                this.state = 1686;
                this.match(OpenSearchPPLParser.OUTER);
                }
                break;
            case 97:
                this.enterOuterAlt(localContext, 97);
                {
                this.state = 1687;
                this.match(OpenSearchPPLParser.INNER);
                }
                break;
            case 98:
                this.enterOuterAlt(localContext, 98);
                {
                this.state = 1688;
                this.match(OpenSearchPPLParser.CROSS);
                }
                break;
            case 99:
                this.enterOuterAlt(localContext, 99);
                {
                this.state = 1689;
                this.match(OpenSearchPPLParser.LEFT);
                }
                break;
            case 100:
                this.enterOuterAlt(localContext, 100);
                {
                this.state = 1690;
                this.match(OpenSearchPPLParser.RIGHT);
                }
                break;
            case 101:
                this.enterOuterAlt(localContext, 101);
                {
                this.state = 1691;
                this.match(OpenSearchPPLParser.FULL);
                }
                break;
            case 102:
                this.enterOuterAlt(localContext, 102);
                {
                this.state = 1692;
                this.match(OpenSearchPPLParser.SEMI);
                }
                break;
            case 103:
                this.enterOuterAlt(localContext, 103);
                {
                this.state = 1693;
                this.match(OpenSearchPPLParser.ANTI);
                }
                break;
            case 104:
                this.enterOuterAlt(localContext, 104);
                {
                this.state = 1694;
                this.match(OpenSearchPPLParser.LEFT_HINT);
                }
                break;
            case 105:
                this.enterOuterAlt(localContext, 105);
                {
                this.state = 1695;
                this.match(OpenSearchPPLParser.RIGHT_HINT);
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
        case 76:
            return this.logicalExpression_sempred(localContext as LogicalExpressionContext, predIndex);
        case 77:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        case 78:
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
        4,1,413,1699,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
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
        7,153,1,0,3,0,310,8,0,1,0,1,0,1,1,1,1,3,1,316,8,1,1,2,1,2,1,2,5,
        2,321,8,2,10,2,12,2,324,9,2,1,3,1,3,3,3,328,8,3,1,3,1,3,1,4,1,4,
        1,5,1,5,1,5,5,5,337,8,5,10,5,12,5,340,9,5,1,6,1,6,1,6,3,6,345,8,
        6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
        7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,371,8,7,1,8,1,8,1,9,3,9,376,
        8,9,1,9,5,9,379,8,9,10,9,12,9,382,9,9,1,9,1,9,5,9,386,8,9,10,9,12,
        9,389,9,9,1,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,
        3,13,402,8,13,1,13,1,13,1,14,1,14,1,14,1,14,5,14,410,8,14,10,14,
        12,14,413,9,14,1,15,1,15,1,15,1,15,3,15,419,8,15,1,15,1,15,1,15,
        3,15,424,8,15,1,15,1,15,1,15,3,15,429,8,15,1,15,1,15,1,15,5,15,434,
        8,15,10,15,12,15,437,9,15,1,15,3,15,440,8,15,1,15,1,15,1,15,3,15,
        445,8,15,1,16,1,16,1,16,1,16,5,16,451,8,16,10,16,12,16,454,9,16,
        1,16,3,16,457,8,16,1,17,1,17,3,17,461,8,17,1,17,1,17,1,17,1,17,3,
        17,467,8,17,1,17,1,17,1,17,3,17,472,8,17,1,18,1,18,1,18,1,19,1,19,
        1,19,1,19,5,19,481,8,19,10,19,12,19,484,9,19,1,20,1,20,3,20,488,
        8,20,1,20,1,20,3,20,492,8,20,1,21,1,21,3,21,496,8,21,1,21,1,21,1,
        21,3,21,501,8,21,1,21,1,21,1,21,3,21,506,8,21,1,21,1,21,3,21,510,
        8,21,1,22,1,22,3,22,514,8,22,1,22,1,22,1,22,3,22,519,8,22,1,22,1,
        22,1,22,3,22,524,8,22,1,22,1,22,3,22,528,8,22,1,23,1,23,1,23,1,23,
        1,24,1,24,1,24,1,24,1,25,1,25,1,26,1,26,1,26,3,26,543,8,26,1,26,
        1,26,1,26,3,26,548,8,26,1,26,1,26,1,26,3,26,553,8,26,1,26,1,26,1,
        26,3,26,558,8,26,1,26,1,26,1,26,3,26,563,8,26,1,26,1,26,1,26,3,26,
        568,8,26,1,26,5,26,571,8,26,10,26,12,26,574,9,26,1,27,1,27,1,27,
        1,27,1,27,1,27,1,27,1,27,1,27,3,27,585,8,27,1,28,1,28,1,29,1,29,
        1,30,1,30,1,30,1,30,1,30,3,30,596,8,30,1,31,1,31,1,31,5,31,601,8,
        31,10,31,12,31,604,9,31,1,32,1,32,1,32,5,32,609,8,32,10,32,12,32,
        612,9,32,1,33,1,33,1,33,3,33,617,8,33,1,34,1,34,1,34,1,34,3,34,623,
        8,34,1,35,1,35,1,35,1,35,3,35,629,8,35,1,36,1,36,1,36,1,36,5,36,
        635,8,36,10,36,12,36,638,9,36,1,37,1,37,1,37,1,37,1,38,1,38,1,38,
        3,38,647,8,38,1,38,1,38,5,38,651,8,38,10,38,12,38,654,9,38,1,39,
        1,39,1,39,1,39,1,39,1,39,1,39,1,39,3,39,664,8,39,1,40,1,40,1,41,
        1,41,1,41,1,41,3,41,672,8,41,1,42,1,42,1,42,1,42,3,42,678,8,42,1,
        43,1,43,1,43,1,43,3,43,684,8,43,1,43,1,43,1,43,1,43,5,43,690,8,43,
        10,43,12,43,693,9,43,1,43,1,43,1,44,1,44,5,44,699,8,44,10,44,12,
        44,702,9,44,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,3,45,713,
        8,45,1,46,1,46,5,46,717,8,46,10,46,12,46,720,9,46,1,47,1,47,1,47,
        1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,
        1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,
        1,47,1,47,1,47,1,47,1,47,1,47,1,47,3,47,758,8,47,1,48,1,48,5,48,
        762,8,48,10,48,12,48,765,9,48,1,49,1,49,1,49,1,49,1,50,1,50,1,50,
        1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,3,50,783,8,50,1,51,
        1,51,1,51,1,51,1,51,3,51,790,8,51,1,51,3,51,793,8,51,1,52,1,52,1,
        52,5,52,798,8,52,10,52,12,52,801,9,52,1,52,1,52,3,52,805,8,52,1,
        53,1,53,1,53,1,53,3,53,811,8,53,1,53,3,53,814,8,53,1,53,1,53,1,54,
        3,54,819,8,54,1,54,1,54,1,54,3,54,824,8,54,1,54,1,54,3,54,828,8,
        54,1,54,1,54,3,54,832,8,54,1,54,3,54,835,8,54,1,54,1,54,3,54,839,
        8,54,1,54,3,54,842,8,54,1,55,1,55,1,55,3,55,847,8,55,1,55,3,55,850,
        8,55,1,55,1,55,1,55,3,55,855,8,55,1,56,1,56,1,56,1,57,1,57,3,57,
        862,8,57,1,57,5,57,865,8,57,10,57,12,57,868,9,57,1,58,1,58,1,58,
        1,58,1,58,1,58,1,58,1,58,1,58,1,58,3,58,880,8,58,1,59,1,59,1,59,
        1,59,1,60,1,60,1,60,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,
        1,61,1,61,1,61,1,61,1,61,3,61,903,8,61,1,62,1,62,1,62,3,62,908,8,
        62,1,63,1,63,1,63,1,63,1,63,1,63,3,63,916,8,63,1,63,1,63,1,64,1,
        64,1,64,5,64,923,8,64,10,64,12,64,926,9,64,1,65,1,65,1,65,1,65,1,
        66,1,66,1,66,3,66,935,8,66,1,67,1,67,1,67,1,67,1,67,1,68,1,68,3,
        68,944,8,68,1,69,1,69,1,70,1,70,1,70,3,70,951,8,70,1,71,1,71,1,71,
        1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,3,71,
        968,8,71,1,72,1,72,1,73,1,73,1,73,1,73,1,73,3,73,977,8,73,1,73,1,
        73,1,74,1,74,1,74,1,74,1,74,1,74,1,74,3,74,988,8,74,1,74,1,74,1,
        75,1,75,1,75,1,75,3,75,996,8,75,1,76,1,76,1,76,1,76,3,76,1002,8,
        76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,5,76,1013,8,76,10,
        76,12,76,1016,9,76,1,77,1,77,1,77,3,77,1021,8,77,1,77,1,77,1,77,
        1,77,1,77,1,77,3,77,1029,8,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,
        3,77,1038,8,77,1,77,1,77,5,77,1042,8,77,10,77,12,77,1045,9,77,1,
        78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,5,78,1059,
        8,78,10,78,12,78,1062,9,78,1,78,1,78,3,78,1066,8,78,1,78,1,78,1,
        78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,3,
        78,1083,8,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,3,78,1093,8,
        78,1,78,1,78,1,78,1,78,1,78,5,78,1100,8,78,10,78,12,78,1103,9,78,
        1,79,1,79,1,79,1,79,1,79,1,79,1,79,3,79,1112,8,79,1,80,1,80,1,80,
        1,80,1,80,1,80,1,80,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,
        1,81,5,81,1131,8,81,10,81,12,81,1134,9,81,1,81,1,81,3,81,1138,8,
        81,1,81,1,81,1,82,1,82,3,82,1144,8,82,1,83,1,83,1,83,1,83,1,83,1,
        83,1,83,5,83,1153,8,83,10,83,12,83,1156,9,83,1,83,1,83,1,84,1,84,
        1,84,1,84,1,84,1,84,5,84,1166,8,84,10,84,12,84,1169,9,84,1,84,1,
        84,1,84,1,84,1,84,5,84,1176,8,84,10,84,12,84,1179,9,84,1,84,1,84,
        1,85,1,85,3,85,1185,8,85,1,86,1,86,1,86,1,86,1,86,1,87,1,87,1,87,
        5,87,1195,8,87,10,87,12,87,1198,9,87,1,88,1,88,1,88,5,88,1203,8,
        88,10,88,12,88,1206,9,88,1,89,3,89,1209,8,89,1,89,1,89,1,90,1,90,
        1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,
        1,90,1,90,1,90,1,90,1,90,1,90,3,90,1234,8,90,1,91,1,91,1,92,1,92,
        1,93,1,93,1,93,1,93,1,93,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,95,
        1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,3,95,1264,
        8,95,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,3,96,
        1277,8,96,1,97,1,97,1,97,5,97,1282,8,97,10,97,12,97,1285,9,97,3,
        97,1287,8,97,1,98,1,98,1,98,3,98,1292,8,98,1,98,1,98,1,99,1,99,3,
        99,1298,8,99,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,4,100,
        1308,8,100,11,100,12,100,1309,1,100,1,100,1,100,1,100,3,100,1316,
        8,100,1,101,1,101,1,101,1,101,1,102,1,102,1,103,1,103,1,103,1,103,
        1,103,1,103,1,103,1,103,3,103,1332,8,103,1,104,1,104,1,104,1,104,
        3,104,1338,8,104,1,105,1,105,3,105,1342,8,105,1,106,1,106,1,107,
        1,107,3,107,1348,8,107,1,108,1,108,1,108,1,108,1,108,1,108,1,108,
        1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,
        1,108,1,108,1,108,1,108,1,108,3,108,1373,8,108,1,109,1,109,1,110,
        1,110,1,111,1,111,1,112,1,112,1,113,1,113,1,114,1,114,1,115,1,115,
        1,115,1,115,1,115,1,115,1,115,1,116,1,116,1,117,1,117,1,117,1,117,
        1,117,1,117,1,117,1,118,1,118,1,119,1,119,1,120,1,120,3,120,1409,
        8,120,1,121,1,121,1,121,1,121,1,121,1,121,1,121,1,121,1,121,1,122,
        1,122,1,123,1,123,1,124,1,124,1,125,1,125,1,126,1,126,1,127,1,127,
        1,128,1,128,1,129,1,129,1,130,1,130,1,131,1,131,1,131,1,131,1,131,
        1,131,1,131,1,131,3,131,1446,8,131,1,132,1,132,1,132,1,132,1,133,
        1,133,1,134,3,134,1455,8,134,1,134,1,134,1,135,3,135,1460,8,135,
        1,135,1,135,1,136,3,136,1465,8,136,1,136,1,136,1,137,3,137,1470,
        8,137,1,137,1,137,1,138,1,138,1,139,1,139,1,139,3,139,1479,8,139,
        1,140,1,140,1,140,1,141,1,141,1,141,1,142,1,142,1,142,1,143,1,143,
        1,144,1,144,1,145,1,145,1,145,1,145,5,145,1498,8,145,10,145,12,145,
        1501,9,145,1,145,1,145,1,146,1,146,1,146,5,146,1508,8,146,10,146,
        12,146,1511,9,146,1,147,1,147,1,147,5,147,1516,8,147,10,147,12,147,
        1519,9,147,1,148,1,148,1,148,5,148,1524,8,148,10,148,12,148,1527,
        9,148,1,149,1,149,1,149,5,149,1532,8,149,10,149,12,149,1535,9,149,
        1,149,1,149,1,149,1,149,5,149,1541,8,149,10,149,12,149,1544,9,149,
        1,149,1,149,3,149,1548,8,149,1,150,3,150,1551,8,150,1,150,1,150,
        1,150,1,150,1,150,1,150,1,150,3,150,1560,8,150,1,151,3,151,1563,
        8,151,1,151,1,151,1,152,1,152,1,152,5,152,1570,8,152,10,152,12,152,
        1573,9,152,1,152,3,152,1576,8,152,1,152,1,152,1,152,1,152,1,152,
        1,152,1,152,1,152,1,152,1,152,1,152,1,152,3,152,1590,8,152,1,153,
        1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,
        1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,
        1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,
        1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,
        1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,
        1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,
        1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,
        1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,
        1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,
        1,153,1,153,1,153,1,153,1,153,3,153,1697,8,153,1,153,0,3,152,154,
        156,154,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
        42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,
        86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,
        122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,
        154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,
        186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,
        218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,
        250,252,254,256,258,260,262,264,266,268,270,272,274,276,278,280,
        282,284,286,288,290,292,294,296,298,300,302,304,306,0,33,1,0,61,
        64,8,0,2,5,7,18,21,21,23,23,25,30,32,32,42,42,138,138,1,0,157,158,
        1,0,19,20,1,0,33,34,1,0,40,41,2,0,91,91,322,322,1,0,69,70,1,0,210,
        218,2,0,177,178,209,209,5,0,175,176,181,181,184,184,189,189,191,
        198,1,0,195,196,1,0,159,161,3,0,8,8,88,88,362,392,2,0,97,97,333,
        338,1,0,242,251,1,0,340,349,1,0,252,254,13,0,106,108,112,112,114,
        114,117,117,120,120,122,122,124,125,127,130,132,135,255,272,274,
        275,277,293,296,305,4,0,107,107,262,262,291,291,293,293,8,0,108,
        108,114,114,120,120,122,122,127,127,129,130,133,133,135,135,8,0,
        109,111,113,113,115,116,118,118,123,123,126,126,131,131,136,136,
        1,0,294,295,4,0,197,198,325,328,330,332,339,339,2,0,350,352,354,
        354,2,0,306,310,312,323,2,0,105,105,151,156,1,0,355,358,1,0,359,
        361,1,0,408,409,1,0,103,104,9,0,108,111,113,116,118,118,120,120,
        122,123,126,127,129,131,133,133,135,136,9,0,56,56,108,108,114,114,
        121,122,127,127,129,130,133,133,135,135,394,400,1919,0,309,1,0,0,
        0,2,315,1,0,0,0,4,317,1,0,0,0,6,325,1,0,0,0,8,331,1,0,0,0,10,333,
        1,0,0,0,12,344,1,0,0,0,14,370,1,0,0,0,16,372,1,0,0,0,18,375,1,0,
        0,0,20,390,1,0,0,0,22,393,1,0,0,0,24,396,1,0,0,0,26,399,1,0,0,0,
        28,405,1,0,0,0,30,414,1,0,0,0,32,446,1,0,0,0,34,458,1,0,0,0,36,473,
        1,0,0,0,38,476,1,0,0,0,40,485,1,0,0,0,42,493,1,0,0,0,44,511,1,0,
        0,0,46,529,1,0,0,0,48,533,1,0,0,0,50,537,1,0,0,0,52,539,1,0,0,0,
        54,584,1,0,0,0,56,586,1,0,0,0,58,588,1,0,0,0,60,590,1,0,0,0,62,597,
        1,0,0,0,64,605,1,0,0,0,66,613,1,0,0,0,68,622,1,0,0,0,70,624,1,0,
        0,0,72,630,1,0,0,0,74,639,1,0,0,0,76,643,1,0,0,0,78,655,1,0,0,0,
        80,665,1,0,0,0,82,667,1,0,0,0,84,673,1,0,0,0,86,679,1,0,0,0,88,696,
        1,0,0,0,90,712,1,0,0,0,92,714,1,0,0,0,94,757,1,0,0,0,96,759,1,0,
        0,0,98,766,1,0,0,0,100,782,1,0,0,0,102,792,1,0,0,0,104,794,1,0,0,
        0,106,806,1,0,0,0,108,841,1,0,0,0,110,846,1,0,0,0,112,856,1,0,0,
        0,114,859,1,0,0,0,116,879,1,0,0,0,118,881,1,0,0,0,120,885,1,0,0,
        0,122,902,1,0,0,0,124,904,1,0,0,0,126,909,1,0,0,0,128,919,1,0,0,
        0,130,927,1,0,0,0,132,931,1,0,0,0,134,936,1,0,0,0,136,943,1,0,0,
        0,138,945,1,0,0,0,140,947,1,0,0,0,142,967,1,0,0,0,144,969,1,0,0,
        0,146,971,1,0,0,0,148,980,1,0,0,0,150,995,1,0,0,0,152,1001,1,0,0,
        0,154,1020,1,0,0,0,156,1082,1,0,0,0,158,1111,1,0,0,0,160,1113,1,
        0,0,0,162,1120,1,0,0,0,164,1143,1,0,0,0,166,1145,1,0,0,0,168,1159,
        1,0,0,0,170,1184,1,0,0,0,172,1186,1,0,0,0,174,1191,1,0,0,0,176,1199,
        1,0,0,0,178,1208,1,0,0,0,180,1233,1,0,0,0,182,1235,1,0,0,0,184,1237,
        1,0,0,0,186,1239,1,0,0,0,188,1244,1,0,0,0,190,1263,1,0,0,0,192,1276,
        1,0,0,0,194,1286,1,0,0,0,196,1291,1,0,0,0,198,1297,1,0,0,0,200,1315,
        1,0,0,0,202,1317,1,0,0,0,204,1321,1,0,0,0,206,1331,1,0,0,0,208,1337,
        1,0,0,0,210,1341,1,0,0,0,212,1343,1,0,0,0,214,1347,1,0,0,0,216,1372,
        1,0,0,0,218,1374,1,0,0,0,220,1376,1,0,0,0,222,1378,1,0,0,0,224,1380,
        1,0,0,0,226,1382,1,0,0,0,228,1384,1,0,0,0,230,1386,1,0,0,0,232,1393,
        1,0,0,0,234,1395,1,0,0,0,236,1402,1,0,0,0,238,1404,1,0,0,0,240,1408,
        1,0,0,0,242,1410,1,0,0,0,244,1419,1,0,0,0,246,1421,1,0,0,0,248,1423,
        1,0,0,0,250,1425,1,0,0,0,252,1427,1,0,0,0,254,1429,1,0,0,0,256,1431,
        1,0,0,0,258,1433,1,0,0,0,260,1435,1,0,0,0,262,1445,1,0,0,0,264,1447,
        1,0,0,0,266,1451,1,0,0,0,268,1454,1,0,0,0,270,1459,1,0,0,0,272,1464,
        1,0,0,0,274,1469,1,0,0,0,276,1473,1,0,0,0,278,1478,1,0,0,0,280,1480,
        1,0,0,0,282,1483,1,0,0,0,284,1486,1,0,0,0,286,1489,1,0,0,0,288,1491,
        1,0,0,0,290,1493,1,0,0,0,292,1504,1,0,0,0,294,1512,1,0,0,0,296,1520,
        1,0,0,0,298,1547,1,0,0,0,300,1559,1,0,0,0,302,1562,1,0,0,0,304,1589,
        1,0,0,0,306,1696,1,0,0,0,308,310,3,2,1,0,309,308,1,0,0,0,309,310,
        1,0,0,0,310,311,1,0,0,0,311,312,5,0,0,1,312,1,1,0,0,0,313,316,3,
        6,3,0,314,316,3,4,2,0,315,313,1,0,0,0,315,314,1,0,0,0,316,3,1,0,
        0,0,317,322,3,12,6,0,318,319,5,148,0,0,319,321,3,14,7,0,320,318,
        1,0,0,0,321,324,1,0,0,0,322,320,1,0,0,0,322,323,1,0,0,0,323,5,1,
        0,0,0,324,322,1,0,0,0,325,327,5,5,0,0,326,328,3,8,4,0,327,326,1,
        0,0,0,327,328,1,0,0,0,328,329,1,0,0,0,329,330,3,4,2,0,330,7,1,0,
        0,0,331,332,7,0,0,0,332,9,1,0,0,0,333,338,3,18,9,0,334,335,5,148,
        0,0,335,337,3,14,7,0,336,334,1,0,0,0,337,340,1,0,0,0,338,336,1,0,
        0,0,338,339,1,0,0,0,339,11,1,0,0,0,340,338,1,0,0,0,341,345,3,20,
        10,0,342,345,3,22,11,0,343,345,3,18,9,0,344,341,1,0,0,0,344,342,
        1,0,0,0,344,343,1,0,0,0,345,13,1,0,0,0,346,371,3,24,12,0,347,371,
        3,26,13,0,348,371,3,106,53,0,349,371,3,28,14,0,350,371,3,30,15,0,
        351,371,3,32,16,0,352,371,3,34,17,0,353,371,3,36,18,0,354,371,3,
        38,19,0,355,371,3,40,20,0,356,371,3,42,21,0,357,371,3,44,22,0,358,
        371,3,46,23,0,359,371,3,48,24,0,360,371,3,52,26,0,361,371,3,60,30,
        0,362,371,3,88,44,0,363,371,3,92,46,0,364,371,3,96,48,0,365,371,
        3,68,34,0,366,371,3,76,38,0,367,371,3,86,43,0,368,371,3,82,41,0,
        369,371,3,84,42,0,370,346,1,0,0,0,370,347,1,0,0,0,370,348,1,0,0,
        0,370,349,1,0,0,0,370,350,1,0,0,0,370,351,1,0,0,0,370,352,1,0,0,
        0,370,353,1,0,0,0,370,354,1,0,0,0,370,355,1,0,0,0,370,356,1,0,0,
        0,370,357,1,0,0,0,370,358,1,0,0,0,370,359,1,0,0,0,370,360,1,0,0,
        0,370,361,1,0,0,0,370,362,1,0,0,0,370,363,1,0,0,0,370,364,1,0,0,
        0,370,365,1,0,0,0,370,366,1,0,0,0,370,367,1,0,0,0,370,368,1,0,0,
        0,370,369,1,0,0,0,371,15,1,0,0,0,372,373,7,1,0,0,373,17,1,0,0,0,
        374,376,5,2,0,0,375,374,1,0,0,0,375,376,1,0,0,0,376,380,1,0,0,0,
        377,379,3,152,76,0,378,377,1,0,0,0,379,382,1,0,0,0,380,378,1,0,0,
        0,380,381,1,0,0,0,381,383,1,0,0,0,382,380,1,0,0,0,383,387,3,100,
        50,0,384,386,3,152,76,0,385,384,1,0,0,0,386,389,1,0,0,0,387,385,
        1,0,0,0,387,388,1,0,0,0,388,19,1,0,0,0,389,387,1,0,0,0,390,391,5,
        3,0,0,391,392,3,104,52,0,392,21,1,0,0,0,393,394,5,4,0,0,394,395,
        5,58,0,0,395,23,1,0,0,0,396,397,5,7,0,0,397,398,3,152,76,0,398,25,
        1,0,0,0,399,401,5,8,0,0,400,402,7,2,0,0,401,400,1,0,0,0,401,402,
        1,0,0,0,402,403,1,0,0,0,403,404,3,174,87,0,404,27,1,0,0,0,405,406,
        5,9,0,0,406,411,3,118,59,0,407,408,5,149,0,0,408,410,3,118,59,0,
        409,407,1,0,0,0,410,413,1,0,0,0,411,409,1,0,0,0,411,412,1,0,0,0,
        412,29,1,0,0,0,413,411,1,0,0,0,414,418,5,10,0,0,415,416,5,74,0,0,
        416,417,5,151,0,0,417,419,3,268,134,0,418,415,1,0,0,0,418,419,1,
        0,0,0,419,423,1,0,0,0,420,421,5,75,0,0,421,422,5,151,0,0,422,424,
        3,276,138,0,423,420,1,0,0,0,423,424,1,0,0,0,424,428,1,0,0,0,425,
        426,5,76,0,0,426,427,5,151,0,0,427,429,3,266,133,0,428,425,1,0,0,
        0,428,429,1,0,0,0,429,430,1,0,0,0,430,435,3,140,70,0,431,432,5,149,
        0,0,432,434,3,140,70,0,433,431,1,0,0,0,434,437,1,0,0,0,435,433,1,
        0,0,0,435,436,1,0,0,0,436,439,1,0,0,0,437,435,1,0,0,0,438,440,3,
        122,61,0,439,438,1,0,0,0,439,440,1,0,0,0,440,444,1,0,0,0,441,442,
        5,73,0,0,442,443,5,151,0,0,443,445,3,276,138,0,444,441,1,0,0,0,444,
        445,1,0,0,0,445,31,1,0,0,0,446,447,5,11,0,0,447,452,3,132,66,0,448,
        449,5,149,0,0,449,451,3,132,66,0,450,448,1,0,0,0,451,454,1,0,0,0,
        452,450,1,0,0,0,452,453,1,0,0,0,453,456,1,0,0,0,454,452,1,0,0,0,
        455,457,3,122,61,0,456,455,1,0,0,0,456,457,1,0,0,0,457,33,1,0,0,
        0,458,460,5,12,0,0,459,461,3,268,134,0,460,459,1,0,0,0,460,461,1,
        0,0,0,461,462,1,0,0,0,462,466,3,174,87,0,463,464,5,71,0,0,464,465,
        5,151,0,0,465,467,3,276,138,0,466,463,1,0,0,0,466,467,1,0,0,0,467,
        471,1,0,0,0,468,469,5,72,0,0,469,470,5,151,0,0,470,472,3,276,138,
        0,471,468,1,0,0,0,471,472,1,0,0,0,472,35,1,0,0,0,473,474,5,13,0,
        0,474,475,3,128,64,0,475,37,1,0,0,0,476,477,5,14,0,0,477,482,3,130,
        65,0,478,479,5,149,0,0,479,481,3,130,65,0,480,478,1,0,0,0,481,484,
        1,0,0,0,482,480,1,0,0,0,482,483,1,0,0,0,483,39,1,0,0,0,484,482,1,
        0,0,0,485,487,5,15,0,0,486,488,3,268,134,0,487,486,1,0,0,0,487,488,
        1,0,0,0,488,491,1,0,0,0,489,490,5,6,0,0,490,492,3,268,134,0,491,
        489,1,0,0,0,491,492,1,0,0,0,492,41,1,0,0,0,493,495,5,16,0,0,494,
        496,3,268,134,0,495,494,1,0,0,0,495,496,1,0,0,0,496,500,1,0,0,0,
        497,498,5,92,0,0,498,499,5,151,0,0,499,501,3,266,133,0,500,497,1,
        0,0,0,500,501,1,0,0,0,501,505,1,0,0,0,502,503,5,93,0,0,503,504,5,
        151,0,0,504,506,3,276,138,0,505,502,1,0,0,0,505,506,1,0,0,0,506,
        507,1,0,0,0,507,509,3,174,87,0,508,510,3,120,60,0,509,508,1,0,0,
        0,509,510,1,0,0,0,510,43,1,0,0,0,511,513,5,17,0,0,512,514,3,268,
        134,0,513,512,1,0,0,0,513,514,1,0,0,0,514,518,1,0,0,0,515,516,5,
        92,0,0,516,517,5,151,0,0,517,519,3,266,133,0,518,515,1,0,0,0,518,
        519,1,0,0,0,519,523,1,0,0,0,520,521,5,93,0,0,521,522,5,151,0,0,522,
        524,3,276,138,0,523,520,1,0,0,0,523,524,1,0,0,0,524,525,1,0,0,0,
        525,527,3,174,87,0,526,528,3,120,60,0,527,526,1,0,0,0,527,528,1,
        0,0,0,528,45,1,0,0,0,529,530,5,21,0,0,530,531,3,154,77,0,531,532,
        3,266,133,0,532,47,1,0,0,0,533,534,5,18,0,0,534,535,3,154,77,0,535,
        536,3,266,133,0,536,49,1,0,0,0,537,538,7,3,0,0,538,51,1,0,0,0,539,
        540,5,23,0,0,540,542,3,154,77,0,541,543,3,122,61,0,542,541,1,0,0,
        0,542,543,1,0,0,0,543,547,1,0,0,0,544,545,5,37,0,0,545,546,5,151,
        0,0,546,548,3,56,28,0,547,544,1,0,0,0,547,548,1,0,0,0,548,552,1,
        0,0,0,549,550,5,185,0,0,550,551,5,151,0,0,551,553,3,58,29,0,552,
        549,1,0,0,0,552,553,1,0,0,0,553,557,1,0,0,0,554,555,5,38,0,0,555,
        556,5,151,0,0,556,558,3,268,134,0,557,554,1,0,0,0,557,558,1,0,0,
        0,558,562,1,0,0,0,559,560,5,39,0,0,560,561,5,151,0,0,561,563,3,268,
        134,0,562,559,1,0,0,0,562,563,1,0,0,0,563,567,1,0,0,0,564,565,5,
        24,0,0,565,566,5,151,0,0,566,568,3,266,133,0,567,564,1,0,0,0,567,
        568,1,0,0,0,568,572,1,0,0,0,569,571,3,54,27,0,570,569,1,0,0,0,571,
        574,1,0,0,0,572,570,1,0,0,0,572,573,1,0,0,0,573,53,1,0,0,0,574,572,
        1,0,0,0,575,576,5,22,0,0,576,577,5,151,0,0,577,585,3,266,133,0,578,
        579,5,35,0,0,579,580,5,151,0,0,580,585,3,268,134,0,581,582,5,36,
        0,0,582,583,5,151,0,0,583,585,3,270,135,0,584,575,1,0,0,0,584,578,
        1,0,0,0,584,581,1,0,0,0,585,55,1,0,0,0,586,587,7,4,0,0,587,57,1,
        0,0,0,588,589,7,5,0,0,589,59,1,0,0,0,590,591,5,138,0,0,591,592,3,
        170,85,0,592,595,3,62,31,0,593,594,7,6,0,0,594,596,3,64,32,0,595,
        593,1,0,0,0,595,596,1,0,0,0,596,61,1,0,0,0,597,602,3,66,33,0,598,
        599,5,149,0,0,599,601,3,66,33,0,600,598,1,0,0,0,601,604,1,0,0,0,
        602,600,1,0,0,0,602,603,1,0,0,0,603,63,1,0,0,0,604,602,1,0,0,0,605,
        610,3,66,33,0,606,607,5,149,0,0,607,609,3,66,33,0,608,606,1,0,0,
        0,609,612,1,0,0,0,610,608,1,0,0,0,610,611,1,0,0,0,611,65,1,0,0,0,
        612,610,1,0,0,0,613,616,3,182,91,0,614,615,5,52,0,0,615,617,3,182,
        91,0,616,614,1,0,0,0,616,617,1,0,0,0,617,67,1,0,0,0,618,619,5,28,
        0,0,619,623,3,70,35,0,620,621,5,28,0,0,621,623,3,72,36,0,622,618,
        1,0,0,0,622,620,1,0,0,0,623,69,1,0,0,0,624,625,5,60,0,0,625,628,
        3,156,78,0,626,627,5,96,0,0,627,629,3,174,87,0,628,626,1,0,0,0,628,
        629,1,0,0,0,629,71,1,0,0,0,630,631,5,59,0,0,631,636,3,74,37,0,632,
        633,5,149,0,0,633,635,3,74,37,0,634,632,1,0,0,0,635,638,1,0,0,0,
        636,634,1,0,0,0,636,637,1,0,0,0,637,73,1,0,0,0,638,636,1,0,0,0,639,
        640,3,182,91,0,640,641,5,151,0,0,641,642,3,156,78,0,642,75,1,0,0,
        0,643,646,5,30,0,0,644,645,5,13,0,0,645,647,3,178,89,0,646,644,1,
        0,0,0,646,647,1,0,0,0,647,648,1,0,0,0,648,652,3,78,39,0,649,651,
        3,78,39,0,650,649,1,0,0,0,651,654,1,0,0,0,652,650,1,0,0,0,652,653,
        1,0,0,0,653,77,1,0,0,0,654,652,1,0,0,0,655,656,3,80,40,0,656,657,
        5,164,0,0,657,658,3,268,134,0,658,659,5,149,0,0,659,660,3,182,91,
        0,660,663,5,165,0,0,661,662,5,52,0,0,662,664,3,292,146,0,663,661,
        1,0,0,0,663,664,1,0,0,0,664,79,1,0,0,0,665,666,7,7,0,0,666,81,1,
        0,0,0,667,668,5,32,0,0,668,671,3,182,91,0,669,670,5,52,0,0,670,672,
        3,292,146,0,671,669,1,0,0,0,671,672,1,0,0,0,672,83,1,0,0,0,673,674,
        5,29,0,0,674,677,3,182,91,0,675,676,5,52,0,0,676,678,3,298,149,0,
        677,675,1,0,0,0,677,678,1,0,0,0,678,85,1,0,0,0,679,683,5,31,0,0,
        680,681,5,65,0,0,681,682,5,151,0,0,682,684,3,276,138,0,683,680,1,
        0,0,0,683,684,1,0,0,0,684,685,1,0,0,0,685,686,5,166,0,0,686,691,
        3,14,7,0,687,688,5,148,0,0,688,690,3,14,7,0,689,687,1,0,0,0,690,
        693,1,0,0,0,691,689,1,0,0,0,691,692,1,0,0,0,692,694,1,0,0,0,693,
        691,1,0,0,0,694,695,5,167,0,0,695,87,1,0,0,0,696,700,5,25,0,0,697,
        699,3,90,45,0,698,697,1,0,0,0,699,702,1,0,0,0,700,698,1,0,0,0,700,
        701,1,0,0,0,701,89,1,0,0,0,702,700,1,0,0,0,703,704,5,77,0,0,704,
        705,5,151,0,0,705,713,3,268,134,0,706,707,5,78,0,0,707,708,5,151,
        0,0,708,713,3,268,134,0,709,710,5,79,0,0,710,711,5,151,0,0,711,713,
        3,266,133,0,712,703,1,0,0,0,712,706,1,0,0,0,712,709,1,0,0,0,713,
        91,1,0,0,0,714,718,5,26,0,0,715,717,3,94,47,0,716,715,1,0,0,0,717,
        720,1,0,0,0,718,716,1,0,0,0,718,719,1,0,0,0,719,93,1,0,0,0,720,718,
        1,0,0,0,721,722,5,80,0,0,722,723,5,151,0,0,723,758,3,268,134,0,724,
        725,5,81,0,0,725,726,5,151,0,0,726,758,3,268,134,0,727,728,5,82,
        0,0,728,729,5,151,0,0,729,758,3,268,134,0,730,731,5,83,0,0,731,732,
        5,151,0,0,732,758,3,268,134,0,733,734,5,84,0,0,734,735,5,151,0,0,
        735,758,3,270,135,0,736,737,5,85,0,0,737,738,5,151,0,0,738,758,3,
        270,135,0,739,740,5,86,0,0,740,741,5,151,0,0,741,758,3,266,133,0,
        742,743,5,87,0,0,743,744,5,151,0,0,744,758,3,266,133,0,745,746,5,
        265,0,0,746,747,5,151,0,0,747,758,3,266,133,0,748,749,5,88,0,0,749,
        750,5,151,0,0,750,758,3,266,133,0,751,752,5,89,0,0,752,753,5,151,
        0,0,753,758,3,268,134,0,754,755,5,90,0,0,755,756,5,151,0,0,756,758,
        3,270,135,0,757,721,1,0,0,0,757,724,1,0,0,0,757,727,1,0,0,0,757,
        730,1,0,0,0,757,733,1,0,0,0,757,736,1,0,0,0,757,739,1,0,0,0,757,
        742,1,0,0,0,757,745,1,0,0,0,757,748,1,0,0,0,757,751,1,0,0,0,757,
        754,1,0,0,0,758,95,1,0,0,0,759,763,5,27,0,0,760,762,3,98,49,0,761,
        760,1,0,0,0,762,765,1,0,0,0,763,761,1,0,0,0,763,764,1,0,0,0,764,
        97,1,0,0,0,765,763,1,0,0,0,766,767,3,300,150,0,767,768,5,151,0,0,
        768,769,3,262,131,0,769,99,1,0,0,0,770,771,5,54,0,0,771,772,5,151,
        0,0,772,783,3,102,51,0,773,774,5,55,0,0,774,775,5,151,0,0,775,783,
        3,102,51,0,776,777,5,54,0,0,777,778,5,151,0,0,778,783,3,172,86,0,
        779,780,5,55,0,0,780,781,5,151,0,0,781,783,3,172,86,0,782,770,1,
        0,0,0,782,773,1,0,0,0,782,776,1,0,0,0,782,779,1,0,0,0,783,101,1,
        0,0,0,784,785,5,166,0,0,785,786,3,10,5,0,786,789,5,167,0,0,787,788,
        5,52,0,0,788,790,3,292,146,0,789,787,1,0,0,0,789,790,1,0,0,0,790,
        793,1,0,0,0,791,793,3,104,52,0,792,784,1,0,0,0,792,791,1,0,0,0,793,
        103,1,0,0,0,794,799,3,170,85,0,795,796,5,149,0,0,796,798,3,170,85,
        0,797,795,1,0,0,0,798,801,1,0,0,0,799,797,1,0,0,0,799,800,1,0,0,
        0,800,804,1,0,0,0,801,799,1,0,0,0,802,803,5,52,0,0,803,805,3,292,
        146,0,804,802,1,0,0,0,804,805,1,0,0,0,805,105,1,0,0,0,806,807,3,
        108,54,0,807,808,5,42,0,0,808,810,3,110,55,0,809,811,3,114,57,0,
        810,809,1,0,0,0,810,811,1,0,0,0,811,813,1,0,0,0,812,814,3,112,56,
        0,813,812,1,0,0,0,813,814,1,0,0,0,814,815,1,0,0,0,815,816,3,102,
        51,0,816,107,1,0,0,0,817,819,5,44,0,0,818,817,1,0,0,0,818,819,1,
        0,0,0,819,842,1,0,0,0,820,842,5,49,0,0,821,823,5,319,0,0,822,824,
        5,45,0,0,823,822,1,0,0,0,823,824,1,0,0,0,824,842,1,0,0,0,825,827,
        5,318,0,0,826,828,5,45,0,0,827,826,1,0,0,0,827,828,1,0,0,0,828,842,
        1,0,0,0,829,831,5,46,0,0,830,832,5,45,0,0,831,830,1,0,0,0,831,832,
        1,0,0,0,832,842,1,0,0,0,833,835,5,319,0,0,834,833,1,0,0,0,834,835,
        1,0,0,0,835,836,1,0,0,0,836,842,5,47,0,0,837,839,5,319,0,0,838,837,
        1,0,0,0,838,839,1,0,0,0,839,840,1,0,0,0,840,842,5,48,0,0,841,818,
        1,0,0,0,841,820,1,0,0,0,841,821,1,0,0,0,841,825,1,0,0,0,841,829,
        1,0,0,0,841,834,1,0,0,0,841,838,1,0,0,0,842,109,1,0,0,0,843,844,
        5,319,0,0,844,845,5,151,0,0,845,847,3,292,146,0,846,843,1,0,0,0,
        846,847,1,0,0,0,847,849,1,0,0,0,848,850,5,149,0,0,849,848,1,0,0,
        0,849,850,1,0,0,0,850,854,1,0,0,0,851,852,5,318,0,0,852,853,5,151,
        0,0,853,855,3,292,146,0,854,851,1,0,0,0,854,855,1,0,0,0,855,111,
        1,0,0,0,856,857,5,43,0,0,857,858,3,152,76,0,858,113,1,0,0,0,859,
        866,3,116,58,0,860,862,5,149,0,0,861,860,1,0,0,0,861,862,1,0,0,0,
        862,863,1,0,0,0,863,865,3,116,58,0,864,861,1,0,0,0,865,868,1,0,0,
        0,866,864,1,0,0,0,866,867,1,0,0,0,867,115,1,0,0,0,868,866,1,0,0,
        0,869,870,5,50,0,0,870,871,5,150,0,0,871,872,5,401,0,0,872,873,5,
        151,0,0,873,880,3,300,150,0,874,875,5,51,0,0,875,876,5,150,0,0,876,
        877,5,401,0,0,877,878,5,151,0,0,878,880,3,300,150,0,879,869,1,0,
        0,0,879,874,1,0,0,0,880,117,1,0,0,0,881,882,3,184,92,0,882,883,5,
        52,0,0,883,884,3,184,92,0,884,119,1,0,0,0,885,886,5,53,0,0,886,887,
        3,174,87,0,887,121,1,0,0,0,888,889,5,53,0,0,889,903,3,174,87,0,890,
        891,5,53,0,0,891,903,3,124,62,0,892,893,5,53,0,0,893,894,3,124,62,
        0,894,895,5,149,0,0,895,896,3,174,87,0,896,903,1,0,0,0,897,898,5,
        53,0,0,898,899,3,174,87,0,899,900,5,149,0,0,900,901,3,124,62,0,901,
        903,1,0,0,0,902,888,1,0,0,0,902,890,1,0,0,0,902,892,1,0,0,0,902,
        897,1,0,0,0,903,123,1,0,0,0,904,907,3,126,63,0,905,906,5,52,0,0,
        906,908,3,292,146,0,907,905,1,0,0,0,907,908,1,0,0,0,908,125,1,0,
        0,0,909,910,5,393,0,0,910,911,5,164,0,0,911,912,3,182,91,0,912,913,
        5,149,0,0,913,915,3,262,131,0,914,916,3,288,144,0,915,914,1,0,0,
        0,915,916,1,0,0,0,916,917,1,0,0,0,917,918,5,165,0,0,918,127,1,0,
        0,0,919,924,3,178,89,0,920,921,5,149,0,0,921,923,3,178,89,0,922,
        920,1,0,0,0,923,926,1,0,0,0,924,922,1,0,0,0,924,925,1,0,0,0,925,
        129,1,0,0,0,926,924,1,0,0,0,927,928,3,182,91,0,928,929,5,151,0,0,
        929,930,3,152,76,0,930,131,1,0,0,0,931,934,3,134,67,0,932,933,5,
        52,0,0,933,935,3,184,92,0,934,932,1,0,0,0,934,935,1,0,0,0,935,133,
        1,0,0,0,936,937,3,136,68,0,937,938,5,164,0,0,938,939,3,194,97,0,
        939,940,5,165,0,0,940,135,1,0,0,0,941,944,3,144,72,0,942,944,3,138,
        69,0,943,941,1,0,0,0,943,942,1,0,0,0,944,137,1,0,0,0,945,946,7,8,
        0,0,946,139,1,0,0,0,947,950,3,142,71,0,948,949,5,52,0,0,949,951,
        3,184,92,0,950,948,1,0,0,0,950,951,1,0,0,0,951,141,1,0,0,0,952,953,
        3,144,72,0,953,954,5,164,0,0,954,955,3,156,78,0,955,956,5,165,0,
        0,956,968,1,0,0,0,957,958,5,176,0,0,958,959,5,164,0,0,959,968,5,
        165,0,0,960,961,7,9,0,0,961,962,5,164,0,0,962,963,3,156,78,0,963,
        964,5,165,0,0,964,968,1,0,0,0,965,968,3,146,73,0,966,968,3,148,74,
        0,967,952,1,0,0,0,967,957,1,0,0,0,967,960,1,0,0,0,967,965,1,0,0,
        0,967,966,1,0,0,0,968,143,1,0,0,0,969,970,7,10,0,0,970,145,1,0,0,
        0,971,972,5,199,0,0,972,973,5,164,0,0,973,976,3,182,91,0,974,975,
        5,149,0,0,975,977,3,268,134,0,976,974,1,0,0,0,976,977,1,0,0,0,977,
        978,1,0,0,0,978,979,5,165,0,0,979,147,1,0,0,0,980,981,7,11,0,0,981,
        982,5,164,0,0,982,983,3,156,78,0,983,984,5,149,0,0,984,987,3,150,
        75,0,985,986,5,149,0,0,986,988,3,150,75,0,987,985,1,0,0,0,987,988,
        1,0,0,0,988,989,1,0,0,0,989,990,5,165,0,0,990,149,1,0,0,0,991,996,
        3,268,134,0,992,996,3,270,135,0,993,996,3,272,136,0,994,996,3,274,
        137,0,995,991,1,0,0,0,995,992,1,0,0,0,995,993,1,0,0,0,995,994,1,
        0,0,0,996,151,1,0,0,0,997,998,6,76,-1,0,998,999,5,99,0,0,999,1002,
        3,152,76,5,1000,1002,3,154,77,0,1001,997,1,0,0,0,1001,1000,1,0,0,
        0,1002,1014,1,0,0,0,1003,1004,10,4,0,0,1004,1005,5,101,0,0,1005,
        1013,3,152,76,5,1006,1007,10,3,0,0,1007,1008,5,102,0,0,1008,1013,
        3,152,76,4,1009,1010,10,2,0,0,1010,1011,5,100,0,0,1011,1013,3,152,
        76,3,1012,1003,1,0,0,0,1012,1006,1,0,0,0,1012,1009,1,0,0,0,1013,
        1016,1,0,0,0,1014,1012,1,0,0,0,1014,1015,1,0,0,0,1015,153,1,0,0,
        0,1016,1014,1,0,0,0,1017,1018,6,77,-1,0,1018,1021,3,156,78,0,1019,
        1021,3,164,82,0,1020,1017,1,0,0,0,1020,1019,1,0,0,0,1021,1043,1,
        0,0,0,1022,1023,10,3,0,0,1023,1024,3,256,128,0,1024,1025,3,154,77,
        4,1025,1042,1,0,0,0,1026,1028,10,1,0,0,1027,1029,5,99,0,0,1028,1027,
        1,0,0,0,1028,1029,1,0,0,0,1029,1030,1,0,0,0,1030,1031,5,329,0,0,
        1031,1032,3,154,77,0,1032,1033,5,101,0,0,1033,1034,3,154,77,2,1034,
        1042,1,0,0,0,1035,1037,10,2,0,0,1036,1038,5,99,0,0,1037,1036,1,0,
        0,0,1037,1038,1,0,0,0,1038,1039,1,0,0,0,1039,1040,5,96,0,0,1040,
        1042,3,290,145,0,1041,1022,1,0,0,0,1041,1026,1,0,0,0,1041,1035,1,
        0,0,0,1042,1045,1,0,0,0,1043,1041,1,0,0,0,1043,1044,1,0,0,0,1044,
        155,1,0,0,0,1045,1043,1,0,0,0,1046,1047,6,78,-1,0,1047,1083,3,262,
        131,0,1048,1083,3,158,79,0,1049,1083,3,200,100,0,1050,1051,5,166,
        0,0,1051,1052,3,10,5,0,1052,1053,5,167,0,0,1053,1083,1,0,0,0,1054,
        1055,5,164,0,0,1055,1060,3,156,78,0,1056,1057,5,149,0,0,1057,1059,
        3,156,78,0,1058,1056,1,0,0,0,1059,1062,1,0,0,0,1060,1058,1,0,0,0,
        1060,1061,1,0,0,0,1061,1063,1,0,0,0,1062,1060,1,0,0,0,1063,1065,
        5,165,0,0,1064,1066,5,99,0,0,1065,1064,1,0,0,0,1065,1066,1,0,0,0,
        1066,1067,1,0,0,0,1067,1068,5,96,0,0,1068,1069,5,166,0,0,1069,1070,
        3,10,5,0,1070,1071,5,167,0,0,1071,1083,1,0,0,0,1072,1073,5,97,0,
        0,1073,1074,5,166,0,0,1074,1075,3,10,5,0,1075,1076,5,167,0,0,1076,
        1083,1,0,0,0,1077,1083,3,182,91,0,1078,1079,5,164,0,0,1079,1080,
        3,152,76,0,1080,1081,5,165,0,0,1081,1083,1,0,0,0,1082,1046,1,0,0,
        0,1082,1048,1,0,0,0,1082,1049,1,0,0,0,1082,1050,1,0,0,0,1082,1054,
        1,0,0,0,1082,1072,1,0,0,0,1082,1077,1,0,0,0,1082,1078,1,0,0,0,1083,
        1101,1,0,0,0,1084,1085,10,11,0,0,1085,1086,7,12,0,0,1086,1100,3,
        156,78,12,1087,1088,10,10,0,0,1088,1089,7,2,0,0,1089,1100,3,156,
        78,11,1090,1092,10,5,0,0,1091,1093,5,99,0,0,1092,1091,1,0,0,0,1092,
        1093,1,0,0,0,1093,1094,1,0,0,0,1094,1095,5,96,0,0,1095,1096,5,166,
        0,0,1096,1097,3,10,5,0,1097,1098,5,167,0,0,1098,1100,1,0,0,0,1099,
        1084,1,0,0,0,1099,1087,1,0,0,0,1099,1090,1,0,0,0,1100,1103,1,0,0,
        0,1101,1099,1,0,0,0,1101,1102,1,0,0,0,1102,157,1,0,0,0,1103,1101,
        1,0,0,0,1104,1112,3,186,93,0,1105,1112,3,188,94,0,1106,1112,3,160,
        80,0,1107,1112,3,162,81,0,1108,1112,3,242,121,0,1109,1112,3,234,
        117,0,1110,1112,3,230,115,0,1111,1104,1,0,0,0,1111,1105,1,0,0,0,
        1111,1106,1,0,0,0,1111,1107,1,0,0,0,1111,1108,1,0,0,0,1111,1109,
        1,0,0,0,1111,1110,1,0,0,0,1112,159,1,0,0,0,1113,1114,3,254,127,0,
        1114,1115,5,164,0,0,1115,1116,3,196,98,0,1116,1117,5,96,0,0,1117,
        1118,3,196,98,0,1118,1119,5,165,0,0,1119,161,1,0,0,0,1120,1121,5,
        94,0,0,1121,1122,5,164,0,0,1122,1123,3,152,76,0,1123,1124,5,149,
        0,0,1124,1132,3,156,78,0,1125,1126,5,149,0,0,1126,1127,3,152,76,
        0,1127,1128,5,149,0,0,1128,1129,3,156,78,0,1129,1131,1,0,0,0,1130,
        1125,1,0,0,0,1131,1134,1,0,0,0,1132,1130,1,0,0,0,1132,1133,1,0,0,
        0,1133,1137,1,0,0,0,1134,1132,1,0,0,0,1135,1136,5,95,0,0,1136,1138,
        3,156,78,0,1137,1135,1,0,0,0,1137,1138,1,0,0,0,1138,1139,1,0,0,0,
        1139,1140,5,165,0,0,1140,163,1,0,0,0,1141,1144,3,166,83,0,1142,1144,
        3,168,84,0,1143,1141,1,0,0,0,1143,1142,1,0,0,0,1144,165,1,0,0,0,
        1145,1146,3,258,129,0,1146,1147,5,164,0,0,1147,1148,3,210,105,0,
        1148,1149,5,149,0,0,1149,1154,3,212,106,0,1150,1151,5,149,0,0,1151,
        1153,3,202,101,0,1152,1150,1,0,0,0,1153,1156,1,0,0,0,1154,1152,1,
        0,0,0,1154,1155,1,0,0,0,1155,1157,1,0,0,0,1156,1154,1,0,0,0,1157,
        1158,5,165,0,0,1158,167,1,0,0,0,1159,1160,3,260,130,0,1160,1161,
        5,164,0,0,1161,1162,5,166,0,0,1162,1167,3,206,103,0,1163,1164,5,
        149,0,0,1164,1166,3,206,103,0,1165,1163,1,0,0,0,1166,1169,1,0,0,
        0,1167,1165,1,0,0,0,1167,1168,1,0,0,0,1168,1170,1,0,0,0,1169,1167,
        1,0,0,0,1170,1171,5,167,0,0,1171,1172,5,149,0,0,1172,1177,3,212,
        106,0,1173,1174,5,149,0,0,1174,1176,3,202,101,0,1175,1173,1,0,0,
        0,1176,1179,1,0,0,0,1177,1175,1,0,0,0,1177,1178,1,0,0,0,1178,1180,
        1,0,0,0,1179,1177,1,0,0,0,1180,1181,5,165,0,0,1181,169,1,0,0,0,1182,
        1185,3,294,147,0,1183,1185,5,407,0,0,1184,1182,1,0,0,0,1184,1183,
        1,0,0,0,1185,171,1,0,0,0,1186,1187,3,292,146,0,1187,1188,5,164,0,
        0,1188,1189,3,194,97,0,1189,1190,5,165,0,0,1190,173,1,0,0,0,1191,
        1196,3,182,91,0,1192,1193,5,149,0,0,1193,1195,3,182,91,0,1194,1192,
        1,0,0,0,1195,1198,1,0,0,0,1196,1194,1,0,0,0,1196,1197,1,0,0,0,1197,
        175,1,0,0,0,1198,1196,1,0,0,0,1199,1204,3,184,92,0,1200,1201,5,149,
        0,0,1201,1203,3,184,92,0,1202,1200,1,0,0,0,1203,1206,1,0,0,0,1204,
        1202,1,0,0,0,1204,1205,1,0,0,0,1205,177,1,0,0,0,1206,1204,1,0,0,
        0,1207,1209,7,2,0,0,1208,1207,1,0,0,0,1208,1209,1,0,0,0,1209,1210,
        1,0,0,0,1210,1211,3,180,90,0,1211,179,1,0,0,0,1212,1234,3,182,91,
        0,1213,1214,5,66,0,0,1214,1215,5,164,0,0,1215,1216,3,182,91,0,1216,
        1217,5,165,0,0,1217,1234,1,0,0,0,1218,1219,5,67,0,0,1219,1220,5,
        164,0,0,1220,1221,3,182,91,0,1221,1222,5,165,0,0,1222,1234,1,0,0,
        0,1223,1224,5,147,0,0,1224,1225,5,164,0,0,1225,1226,3,182,91,0,1226,
        1227,5,165,0,0,1227,1234,1,0,0,0,1228,1229,5,68,0,0,1229,1230,5,
        164,0,0,1230,1231,3,182,91,0,1231,1232,5,165,0,0,1232,1234,1,0,0,
        0,1233,1212,1,0,0,0,1233,1213,1,0,0,0,1233,1218,1,0,0,0,1233,1223,
        1,0,0,0,1233,1228,1,0,0,0,1234,181,1,0,0,0,1235,1236,3,292,146,0,
        1236,183,1,0,0,0,1237,1238,3,296,148,0,1238,185,1,0,0,0,1239,1240,
        3,192,96,0,1240,1241,5,164,0,0,1241,1242,3,194,97,0,1242,1243,5,
        165,0,0,1243,187,1,0,0,0,1244,1245,5,324,0,0,1245,1246,5,164,0,0,
        1246,1247,3,152,76,0,1247,1248,5,52,0,0,1248,1249,3,190,95,0,1249,
        1250,5,165,0,0,1250,189,1,0,0,0,1251,1264,5,262,0,0,1252,1264,5,
        291,0,0,1253,1264,5,293,0,0,1254,1264,5,140,0,0,1255,1264,5,141,
        0,0,1256,1264,5,142,0,0,1257,1264,5,143,0,0,1258,1264,5,144,0,0,
        1259,1264,5,145,0,0,1260,1264,5,146,0,0,1261,1264,5,147,0,0,1262,
        1264,5,340,0,0,1263,1251,1,0,0,0,1263,1252,1,0,0,0,1263,1253,1,0,
        0,0,1263,1254,1,0,0,0,1263,1255,1,0,0,0,1263,1256,1,0,0,0,1263,1257,
        1,0,0,0,1263,1258,1,0,0,0,1263,1259,1,0,0,0,1263,1260,1,0,0,0,1263,
        1261,1,0,0,0,1263,1262,1,0,0,0,1264,191,1,0,0,0,1265,1277,3,216,
        108,0,1266,1277,3,228,114,0,1267,1277,3,252,126,0,1268,1277,3,246,
        123,0,1269,1277,3,248,124,0,1270,1277,3,250,125,0,1271,1277,3,254,
        127,0,1272,1277,3,226,113,0,1273,1277,3,224,112,0,1274,1277,3,218,
        109,0,1275,1277,3,220,110,0,1276,1265,1,0,0,0,1276,1266,1,0,0,0,
        1276,1267,1,0,0,0,1276,1268,1,0,0,0,1276,1269,1,0,0,0,1276,1270,
        1,0,0,0,1276,1271,1,0,0,0,1276,1272,1,0,0,0,1276,1273,1,0,0,0,1276,
        1274,1,0,0,0,1276,1275,1,0,0,0,1277,193,1,0,0,0,1278,1283,3,196,
        98,0,1279,1280,5,149,0,0,1280,1282,3,196,98,0,1281,1279,1,0,0,0,
        1282,1285,1,0,0,0,1283,1281,1,0,0,0,1283,1284,1,0,0,0,1284,1287,
        1,0,0,0,1285,1283,1,0,0,0,1286,1278,1,0,0,0,1286,1287,1,0,0,0,1287,
        195,1,0,0,0,1288,1289,3,300,150,0,1289,1290,5,151,0,0,1290,1292,
        1,0,0,0,1291,1288,1,0,0,0,1291,1292,1,0,0,0,1292,1293,1,0,0,0,1293,
        1294,3,198,99,0,1294,197,1,0,0,0,1295,1298,3,200,100,0,1296,1298,
        3,152,76,0,1297,1295,1,0,0,0,1297,1296,1,0,0,0,1298,199,1,0,0,0,
        1299,1300,3,300,150,0,1300,1301,5,171,0,0,1301,1302,3,152,76,0,1302,
        1316,1,0,0,0,1303,1304,5,164,0,0,1304,1307,3,300,150,0,1305,1306,
        5,149,0,0,1306,1308,3,300,150,0,1307,1305,1,0,0,0,1308,1309,1,0,
        0,0,1309,1307,1,0,0,0,1309,1310,1,0,0,0,1310,1311,1,0,0,0,1311,1312,
        5,165,0,0,1312,1313,5,171,0,0,1313,1314,3,152,76,0,1314,1316,1,0,
        0,0,1315,1299,1,0,0,0,1315,1303,1,0,0,0,1316,201,1,0,0,0,1317,1318,
        3,204,102,0,1318,1319,5,151,0,0,1319,1320,3,214,107,0,1320,203,1,
        0,0,0,1321,1322,7,13,0,0,1322,205,1,0,0,0,1323,1332,3,210,105,0,
        1324,1325,3,210,105,0,1325,1326,3,208,104,0,1326,1332,1,0,0,0,1327,
        1328,3,210,105,0,1328,1329,5,174,0,0,1329,1330,3,208,104,0,1330,
        1332,1,0,0,0,1331,1323,1,0,0,0,1331,1324,1,0,0,0,1331,1327,1,0,0,
        0,1332,207,1,0,0,0,1333,1338,3,268,134,0,1334,1338,3,270,135,0,1335,
        1338,3,272,136,0,1336,1338,3,274,137,0,1337,1333,1,0,0,0,1337,1334,
        1,0,0,0,1337,1335,1,0,0,0,1337,1336,1,0,0,0,1338,209,1,0,0,0,1339,
        1342,3,292,146,0,1340,1342,3,266,133,0,1341,1339,1,0,0,0,1341,1340,
        1,0,0,0,1342,211,1,0,0,0,1343,1344,3,214,107,0,1344,213,1,0,0,0,
        1345,1348,3,292,146,0,1346,1348,3,262,131,0,1347,1345,1,0,0,0,1347,
        1346,1,0,0,0,1348,215,1,0,0,0,1349,1373,5,219,0,0,1350,1373,5,220,
        0,0,1351,1373,5,221,0,0,1352,1373,5,222,0,0,1353,1373,5,223,0,0,
        1354,1373,5,224,0,0,1355,1373,5,225,0,0,1356,1373,5,226,0,0,1357,
        1373,5,227,0,0,1358,1373,5,228,0,0,1359,1373,5,229,0,0,1360,1373,
        5,230,0,0,1361,1373,5,231,0,0,1362,1373,5,232,0,0,1363,1373,5,233,
        0,0,1364,1373,5,235,0,0,1365,1373,5,236,0,0,1366,1373,5,237,0,0,
        1367,1373,5,238,0,0,1368,1373,5,239,0,0,1369,1373,5,240,0,0,1370,
        1373,5,241,0,0,1371,1373,3,222,111,0,1372,1349,1,0,0,0,1372,1350,
        1,0,0,0,1372,1351,1,0,0,0,1372,1352,1,0,0,0,1372,1353,1,0,0,0,1372,
        1354,1,0,0,0,1372,1355,1,0,0,0,1372,1356,1,0,0,0,1372,1357,1,0,0,
        0,1372,1358,1,0,0,0,1372,1359,1,0,0,0,1372,1360,1,0,0,0,1372,1361,
        1,0,0,0,1372,1362,1,0,0,0,1372,1363,1,0,0,0,1372,1364,1,0,0,0,1372,
        1365,1,0,0,0,1372,1366,1,0,0,0,1372,1367,1,0,0,0,1372,1368,1,0,0,
        0,1372,1369,1,0,0,0,1372,1370,1,0,0,0,1372,1371,1,0,0,0,1373,217,
        1,0,0,0,1374,1375,5,98,0,0,1375,219,1,0,0,0,1376,1377,7,14,0,0,1377,
        221,1,0,0,0,1378,1379,7,15,0,0,1379,223,1,0,0,0,1380,1381,7,16,0,
        0,1381,225,1,0,0,0,1382,1383,7,17,0,0,1383,227,1,0,0,0,1384,1385,
        7,18,0,0,1385,229,1,0,0,0,1386,1387,5,276,0,0,1387,1388,5,164,0,
        0,1388,1389,3,232,116,0,1389,1390,5,149,0,0,1390,1391,3,196,98,0,
        1391,1392,5,165,0,0,1392,231,1,0,0,0,1393,1394,7,19,0,0,1394,233,
        1,0,0,0,1395,1396,5,273,0,0,1396,1397,5,164,0,0,1397,1398,3,240,
        120,0,1398,1399,5,6,0,0,1399,1400,3,196,98,0,1400,1401,5,165,0,0,
        1401,235,1,0,0,0,1402,1403,7,20,0,0,1403,237,1,0,0,0,1404,1405,7,
        21,0,0,1405,239,1,0,0,0,1406,1409,3,236,118,0,1407,1409,3,238,119,
        0,1408,1406,1,0,0,0,1408,1407,1,0,0,0,1409,241,1,0,0,0,1410,1411,
        3,244,122,0,1411,1412,5,164,0,0,1412,1413,3,236,118,0,1413,1414,
        5,149,0,0,1414,1415,3,196,98,0,1415,1416,5,149,0,0,1416,1417,3,196,
        98,0,1417,1418,5,165,0,0,1418,243,1,0,0,0,1419,1420,7,22,0,0,1420,
        245,1,0,0,0,1421,1422,7,23,0,0,1422,247,1,0,0,0,1423,1424,7,24,0,
        0,1424,249,1,0,0,0,1425,1426,5,353,0,0,1426,251,1,0,0,0,1427,1428,
        7,25,0,0,1428,253,1,0,0,0,1429,1430,5,234,0,0,1430,255,1,0,0,0,1431,
        1432,7,26,0,0,1432,257,1,0,0,0,1433,1434,7,27,0,0,1434,259,1,0,0,
        0,1435,1436,7,28,0,0,1436,261,1,0,0,0,1437,1446,3,264,132,0,1438,
        1446,3,266,133,0,1439,1446,3,268,134,0,1440,1446,3,270,135,0,1441,
        1446,3,272,136,0,1442,1446,3,274,137,0,1443,1446,3,276,138,0,1444,
        1446,3,278,139,0,1445,1437,1,0,0,0,1445,1438,1,0,0,0,1445,1439,1,
        0,0,0,1445,1440,1,0,0,0,1445,1441,1,0,0,0,1445,1442,1,0,0,0,1445,
        1443,1,0,0,0,1445,1444,1,0,0,0,1446,263,1,0,0,0,1447,1448,5,119,
        0,0,1448,1449,3,156,78,0,1449,1450,3,286,143,0,1450,265,1,0,0,0,
        1451,1452,7,29,0,0,1452,267,1,0,0,0,1453,1455,7,2,0,0,1454,1453,
        1,0,0,0,1454,1455,1,0,0,0,1455,1456,1,0,0,0,1456,1457,5,403,0,0,
        1457,269,1,0,0,0,1458,1460,7,2,0,0,1459,1458,1,0,0,0,1459,1460,1,
        0,0,0,1460,1461,1,0,0,0,1461,1462,5,404,0,0,1462,271,1,0,0,0,1463,
        1465,7,2,0,0,1464,1463,1,0,0,0,1464,1465,1,0,0,0,1465,1466,1,0,0,
        0,1466,1467,5,406,0,0,1467,273,1,0,0,0,1468,1470,7,2,0,0,1469,1468,
        1,0,0,0,1469,1470,1,0,0,0,1470,1471,1,0,0,0,1471,1472,5,405,0,0,
        1472,275,1,0,0,0,1473,1474,7,30,0,0,1474,277,1,0,0,0,1475,1479,3,
        280,140,0,1476,1479,3,282,141,0,1477,1479,3,284,142,0,1478,1475,
        1,0,0,0,1478,1476,1,0,0,0,1478,1477,1,0,0,0,1479,279,1,0,0,0,1480,
        1481,5,262,0,0,1481,1482,3,266,133,0,1482,281,1,0,0,0,1483,1484,
        5,291,0,0,1484,1485,3,266,133,0,1485,283,1,0,0,0,1486,1487,5,293,
        0,0,1487,1488,3,266,133,0,1488,285,1,0,0,0,1489,1490,7,31,0,0,1490,
        287,1,0,0,0,1491,1492,7,32,0,0,1492,289,1,0,0,0,1493,1494,5,164,
        0,0,1494,1499,3,262,131,0,1495,1496,5,149,0,0,1496,1498,3,262,131,
        0,1497,1495,1,0,0,0,1498,1501,1,0,0,0,1499,1497,1,0,0,0,1499,1500,
        1,0,0,0,1500,1502,1,0,0,0,1501,1499,1,0,0,0,1502,1503,5,165,0,0,
        1503,291,1,0,0,0,1504,1509,3,300,150,0,1505,1506,5,150,0,0,1506,
        1508,3,300,150,0,1507,1505,1,0,0,0,1508,1511,1,0,0,0,1509,1507,1,
        0,0,0,1509,1510,1,0,0,0,1510,293,1,0,0,0,1511,1509,1,0,0,0,1512,
        1517,3,302,151,0,1513,1514,5,150,0,0,1514,1516,3,300,150,0,1515,
        1513,1,0,0,0,1516,1519,1,0,0,0,1517,1515,1,0,0,0,1517,1518,1,0,0,
        0,1518,295,1,0,0,0,1519,1517,1,0,0,0,1520,1525,3,304,152,0,1521,
        1522,5,150,0,0,1522,1524,3,304,152,0,1523,1521,1,0,0,0,1524,1527,
        1,0,0,0,1525,1523,1,0,0,0,1525,1526,1,0,0,0,1526,297,1,0,0,0,1527,
        1525,1,0,0,0,1528,1533,3,292,146,0,1529,1530,5,149,0,0,1530,1532,
        3,292,146,0,1531,1529,1,0,0,0,1532,1535,1,0,0,0,1533,1531,1,0,0,
        0,1533,1534,1,0,0,0,1534,1548,1,0,0,0,1535,1533,1,0,0,0,1536,1537,
        5,164,0,0,1537,1542,3,292,146,0,1538,1539,5,149,0,0,1539,1541,3,
        292,146,0,1540,1538,1,0,0,0,1541,1544,1,0,0,0,1542,1540,1,0,0,0,
        1542,1543,1,0,0,0,1543,1545,1,0,0,0,1544,1542,1,0,0,0,1545,1546,
        5,165,0,0,1546,1548,1,0,0,0,1547,1528,1,0,0,0,1547,1536,1,0,0,0,
        1548,299,1,0,0,0,1549,1551,5,150,0,0,1550,1549,1,0,0,0,1550,1551,
        1,0,0,0,1551,1552,1,0,0,0,1552,1560,5,401,0,0,1553,1554,5,170,0,
        0,1554,1555,3,300,150,0,1555,1556,5,170,0,0,1556,1560,1,0,0,0,1557,
        1560,5,410,0,0,1558,1560,3,306,153,0,1559,1550,1,0,0,0,1559,1553,
        1,0,0,0,1559,1557,1,0,0,0,1559,1558,1,0,0,0,1560,301,1,0,0,0,1561,
        1563,5,402,0,0,1562,1561,1,0,0,0,1562,1563,1,0,0,0,1563,1564,1,0,
        0,0,1564,1565,3,300,150,0,1565,303,1,0,0,0,1566,1571,3,300,150,0,
        1567,1568,5,161,0,0,1568,1570,3,300,150,0,1569,1567,1,0,0,0,1570,
        1573,1,0,0,0,1571,1569,1,0,0,0,1571,1572,1,0,0,0,1572,1575,1,0,0,
        0,1573,1571,1,0,0,0,1574,1576,5,161,0,0,1575,1574,1,0,0,0,1575,1576,
        1,0,0,0,1576,1590,1,0,0,0,1577,1578,5,168,0,0,1578,1579,3,304,152,
        0,1579,1580,5,168,0,0,1580,1590,1,0,0,0,1581,1582,5,169,0,0,1582,
        1583,3,304,152,0,1583,1584,5,169,0,0,1584,1590,1,0,0,0,1585,1586,
        5,170,0,0,1586,1587,3,304,152,0,1587,1588,5,170,0,0,1588,1590,1,
        0,0,0,1589,1566,1,0,0,0,1589,1577,1,0,0,0,1589,1581,1,0,0,0,1589,
        1585,1,0,0,0,1590,305,1,0,0,0,1591,1697,5,56,0,0,1592,1697,3,288,
        144,0,1593,1697,5,393,0,0,1594,1697,3,192,96,0,1595,1697,3,224,112,
        0,1596,1697,3,204,102,0,1597,1697,3,286,143,0,1598,1697,3,80,40,
        0,1599,1697,3,258,129,0,1600,1697,3,260,130,0,1601,1697,3,16,8,0,
        1602,1697,3,220,110,0,1603,1697,3,256,128,0,1604,1697,3,8,4,0,1605,
        1697,5,94,0,0,1606,1697,5,95,0,0,1607,1697,5,96,0,0,1608,1697,5,
        171,0,0,1609,1697,5,329,0,0,1610,1697,5,97,0,0,1611,1697,5,54,0,
        0,1612,1697,5,55,0,0,1613,1697,5,57,0,0,1614,1697,5,58,0,0,1615,
        1697,5,6,0,0,1616,1697,5,22,0,0,1617,1697,5,24,0,0,1618,1697,5,37,
        0,0,1619,1697,5,35,0,0,1620,1697,5,36,0,0,1621,1697,5,38,0,0,1622,
        1697,5,39,0,0,1623,1697,5,60,0,0,1624,1697,5,19,0,0,1625,1697,5,
        20,0,0,1626,1697,5,59,0,0,1627,1697,5,324,0,0,1628,1697,5,276,0,
        0,1629,1697,5,273,0,0,1630,1697,5,119,0,0,1631,1697,5,157,0,0,1632,
        1697,5,158,0,0,1633,1697,5,65,0,0,1634,1697,5,66,0,0,1635,1697,5,
        67,0,0,1636,1697,5,147,0,0,1637,1697,5,68,0,0,1638,1697,5,71,0,0,
        1639,1697,5,72,0,0,1640,1697,5,73,0,0,1641,1697,5,74,0,0,1642,1697,
        5,75,0,0,1643,1697,5,76,0,0,1644,1697,5,77,0,0,1645,1697,5,78,0,
        0,1646,1697,5,79,0,0,1647,1697,5,80,0,0,1648,1697,5,81,0,0,1649,
        1697,5,82,0,0,1650,1697,5,83,0,0,1651,1697,5,84,0,0,1652,1697,5,
        85,0,0,1653,1697,5,86,0,0,1654,1697,5,87,0,0,1655,1697,5,88,0,0,
        1656,1697,5,89,0,0,1657,1697,5,90,0,0,1658,1697,5,92,0,0,1659,1697,
        5,93,0,0,1660,1697,3,144,72,0,1661,1697,3,136,68,0,1662,1697,5,177,
        0,0,1663,1697,5,178,0,0,1664,1697,5,179,0,0,1665,1697,5,180,0,0,
        1666,1697,5,182,0,0,1667,1697,5,183,0,0,1668,1697,5,185,0,0,1669,
        1697,5,186,0,0,1670,1697,5,187,0,0,1671,1697,5,188,0,0,1672,1697,
        5,190,0,0,1673,1697,5,191,0,0,1674,1697,5,192,0,0,1675,1697,5,199,
        0,0,1676,1697,5,200,0,0,1677,1697,5,201,0,0,1678,1697,5,202,0,0,
        1679,1697,5,203,0,0,1680,1697,5,204,0,0,1681,1697,5,205,0,0,1682,
        1697,5,206,0,0,1683,1697,5,207,0,0,1684,1697,5,208,0,0,1685,1697,
        5,209,0,0,1686,1697,5,45,0,0,1687,1697,5,44,0,0,1688,1697,5,49,0,
        0,1689,1697,5,319,0,0,1690,1697,5,318,0,0,1691,1697,5,46,0,0,1692,
        1697,5,47,0,0,1693,1697,5,48,0,0,1694,1697,5,50,0,0,1695,1697,5,
        51,0,0,1696,1591,1,0,0,0,1696,1592,1,0,0,0,1696,1593,1,0,0,0,1696,
        1594,1,0,0,0,1696,1595,1,0,0,0,1696,1596,1,0,0,0,1696,1597,1,0,0,
        0,1696,1598,1,0,0,0,1696,1599,1,0,0,0,1696,1600,1,0,0,0,1696,1601,
        1,0,0,0,1696,1602,1,0,0,0,1696,1603,1,0,0,0,1696,1604,1,0,0,0,1696,
        1605,1,0,0,0,1696,1606,1,0,0,0,1696,1607,1,0,0,0,1696,1608,1,0,0,
        0,1696,1609,1,0,0,0,1696,1610,1,0,0,0,1696,1611,1,0,0,0,1696,1612,
        1,0,0,0,1696,1613,1,0,0,0,1696,1614,1,0,0,0,1696,1615,1,0,0,0,1696,
        1616,1,0,0,0,1696,1617,1,0,0,0,1696,1618,1,0,0,0,1696,1619,1,0,0,
        0,1696,1620,1,0,0,0,1696,1621,1,0,0,0,1696,1622,1,0,0,0,1696,1623,
        1,0,0,0,1696,1624,1,0,0,0,1696,1625,1,0,0,0,1696,1626,1,0,0,0,1696,
        1627,1,0,0,0,1696,1628,1,0,0,0,1696,1629,1,0,0,0,1696,1630,1,0,0,
        0,1696,1631,1,0,0,0,1696,1632,1,0,0,0,1696,1633,1,0,0,0,1696,1634,
        1,0,0,0,1696,1635,1,0,0,0,1696,1636,1,0,0,0,1696,1637,1,0,0,0,1696,
        1638,1,0,0,0,1696,1639,1,0,0,0,1696,1640,1,0,0,0,1696,1641,1,0,0,
        0,1696,1642,1,0,0,0,1696,1643,1,0,0,0,1696,1644,1,0,0,0,1696,1645,
        1,0,0,0,1696,1646,1,0,0,0,1696,1647,1,0,0,0,1696,1648,1,0,0,0,1696,
        1649,1,0,0,0,1696,1650,1,0,0,0,1696,1651,1,0,0,0,1696,1652,1,0,0,
        0,1696,1653,1,0,0,0,1696,1654,1,0,0,0,1696,1655,1,0,0,0,1696,1656,
        1,0,0,0,1696,1657,1,0,0,0,1696,1658,1,0,0,0,1696,1659,1,0,0,0,1696,
        1660,1,0,0,0,1696,1661,1,0,0,0,1696,1662,1,0,0,0,1696,1663,1,0,0,
        0,1696,1664,1,0,0,0,1696,1665,1,0,0,0,1696,1666,1,0,0,0,1696,1667,
        1,0,0,0,1696,1668,1,0,0,0,1696,1669,1,0,0,0,1696,1670,1,0,0,0,1696,
        1671,1,0,0,0,1696,1672,1,0,0,0,1696,1673,1,0,0,0,1696,1674,1,0,0,
        0,1696,1675,1,0,0,0,1696,1676,1,0,0,0,1696,1677,1,0,0,0,1696,1678,
        1,0,0,0,1696,1679,1,0,0,0,1696,1680,1,0,0,0,1696,1681,1,0,0,0,1696,
        1682,1,0,0,0,1696,1683,1,0,0,0,1696,1684,1,0,0,0,1696,1685,1,0,0,
        0,1696,1686,1,0,0,0,1696,1687,1,0,0,0,1696,1688,1,0,0,0,1696,1689,
        1,0,0,0,1696,1690,1,0,0,0,1696,1691,1,0,0,0,1696,1692,1,0,0,0,1696,
        1693,1,0,0,0,1696,1694,1,0,0,0,1696,1695,1,0,0,0,1697,307,1,0,0,
        0,152,309,315,322,327,338,344,370,375,380,387,401,411,418,423,428,
        435,439,444,452,456,460,466,471,482,487,491,495,500,505,509,513,
        518,523,527,542,547,552,557,562,567,572,584,595,602,610,616,622,
        628,636,646,652,663,671,677,683,691,700,712,718,757,763,782,789,
        792,799,804,810,813,818,823,827,831,834,838,841,846,849,854,861,
        866,879,902,907,915,924,934,943,950,967,976,987,995,1001,1012,1014,
        1020,1028,1037,1041,1043,1060,1065,1082,1092,1099,1101,1111,1132,
        1137,1143,1154,1167,1177,1184,1196,1204,1208,1233,1263,1276,1283,
        1286,1291,1297,1309,1315,1331,1337,1341,1347,1372,1408,1445,1454,
        1459,1464,1469,1478,1499,1509,1517,1525,1533,1542,1547,1550,1559,
        1562,1571,1575,1589,1696
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
    public expandCommand(): ExpandCommandContext | null {
        return this.getRuleContext(0, ExpandCommandContext);
    }
    public flattenCommand(): FlattenCommandContext | null {
        return this.getRuleContext(0, FlattenCommandContext);
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
    public EXPLAIN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.EXPLAIN, 0);
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
    public fieldList(): FieldListContext {
        return this.getRuleContext(0, FieldListContext)!;
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MINUS, 0);
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
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SORT(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.SORT, 0)!;
    }
    public sortbyClause(): SortbyClauseContext {
        return this.getRuleContext(0, SortbyClauseContext)!;
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
export class CountAllFunctionCallContext extends StatsFunctionContext {
    public constructor(ctx: StatsFunctionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public COUNT(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.COUNT, 0)!;
    }
    public LT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_PRTHS, 0)!;
    }
    public RT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0)!;
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
    public EARLIEST(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.EARLIEST, 0);
    }
    public LATEST(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LATEST, 0);
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
    public LT_SQR_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.LT_SQR_PRTHS, 0)!;
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
    public RT_PRTHS(): antlr.TerminalNode {
        return this.getToken(OpenSearchPPLParser.RT_PRTHS, 0)!;
    }
    public relevanceFieldAndWeight(): RelevanceFieldAndWeightContext[];
    public relevanceFieldAndWeight(i: number): RelevanceFieldAndWeightContext | null;
    public relevanceFieldAndWeight(i?: number): RelevanceFieldAndWeightContext[] | RelevanceFieldAndWeightContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RelevanceFieldAndWeightContext);
        }

        return this.getRuleContext(i, RelevanceFieldAndWeightContext);
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
    public functionArgs(): FunctionArgsContext {
        return this.getRuleContext(0, FunctionArgsContext)!;
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


export class WcFieldListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public wcFieldExpression(): WcFieldExpressionContext[];
    public wcFieldExpression(i: number): WcFieldExpressionContext | null;
    public wcFieldExpression(i?: number): WcFieldExpressionContext[] | WcFieldExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(WcFieldExpressionContext);
        }

        return this.getRuleContext(i, WcFieldExpressionContext);
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


export class FunctionArgContext extends antlr.ParserRuleContext {
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
    public FLOOR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.FLOOR, 0);
    }
    public LN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LN, 0);
    }
    public LOG(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LOG, 0);
    }
    public LOG10(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LOG10, 0);
    }
    public LOG2(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.LOG2, 0);
    }
    public MOD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchPPLParser.MOD, 0);
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
