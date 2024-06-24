import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { ConsoleReport } from "./reportTargets/ConsoleReport";

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const manUnitedWins = new WinsAnalysis('Man United');
const summary = new Summary(manUnitedWins, new ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);