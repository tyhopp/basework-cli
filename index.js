#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const cli = require('yargs');

const runCommand = (command, ext) => {
  const file = `${command}${ext ? `.${ext}` : ''}`;
  const local = path.resolve(`./node_modules/basework-core/${file}`);
  if (fs.existsSync(local)) {
    require(local)[command]();
    return;
  }
  require(`basework-core/${file}`)[command]();
}

cli.scriptName('basework')
  .usage('Usage: basework <command> [options]')
  .command('new', '', {}, argv => {
    runCommand('generate');
  })
  .command('start', '', {}, argv => {
    runCommand('serve');
  })
  .command('build', '', {}, argv => {
   runCommand('bootstrap', 'js');
  })
  .help()
  .argv;