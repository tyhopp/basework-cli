#!/usr/bin/env node

const cli = require('yargs');

  cli.scriptName('basework')
  .usage('Usage: basework <command> [options]')
  .command('build', '', yargs => {}, argv => {
    const { bootstrap } = require('basework/bootstrap');
    bootstrap();
  })
  .help()
  .argv;
