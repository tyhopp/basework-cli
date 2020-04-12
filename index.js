#!/usr/bin/env node

const cli = require('yargs');

cli.scriptName('basework')
  .usage('Usage: basework <command> [options]')
  .command('new', '', {}, argv => { // TODO - Pass arguments for which project to generate
    const { generate } = require('basework-core/generate');
    generate();
  })
  .command('start', '', {}, argv => {
    const { serve } = require('basework-core/serve');
    serve();
  })
  .command('build', '', {}, argv => {
    const { bootstrap } = require('basework-core/bootstrap');
    bootstrap();
  })
  .help()
  .argv;