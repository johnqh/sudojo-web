import { fatalExec, nonFatalExec } from './shared-utils.js';

const clean = process.argv.includes('--clean');

if (clean) {
  infoMessage('Running deep clean.');
  nonFatalExec('npm remove Sudojo'); // remove Sudojo from node_modules
  nonFatalExec('cd ../SudokuSchool && ./gradlew clean'); // cleanup gradle build outputs
  nonFatalExec('cd ../SudokuSchool && ./gradlew --stop'); // stop any running gradle daemons
  nonFatalExec('rm -rf ~/.gradle/caches'); // nuke the gradle cache
}

infoMessage('Cleaning up any previously built Sudojo packages...');
nonFatalExec('rm ../SudokuSchool/build/packages/*.tgz');

infoMessage('Building Sudojo...');
fatalExec('cd ../SudokuSchool && ./gradlew packJsPackage');

infoMessage('Installing local Sudojo package...');
fatalExec("find ../SudokuSchool/build/packages -name '*.tgz' | head -n 1 | xargs npm install");
infoMessage('Successfully installed local Sudojo package.');

infoMessage('Generating local-sudojo-hash...');
fatalExec(
  "find ../SudokuSchool/build/packages -name '*.tgz' | head -n 1 | shasum > local-sudojo-hash"
);

infoMessage('Vite dev server should have restarted automatically.');

function infoMessage(message) {
  console.log('\n**** install-local-sudojo.js: ' + message + '\n');
}
