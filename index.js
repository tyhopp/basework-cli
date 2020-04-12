#!/usr/bin/env node

const cli = require('yargs');

cli.scriptName('basework')
  .usage('Usage: basework <command> [options]')
  .command('start', '', {}, argv => {
    const { serve } = require('basework/serve');
    serve();
  })
  .command('build', '', {}, argv => {
    const { bootstrap } = require('basework/bootstrap');
    bootstrap();
  })
  .help()
  .argv;
