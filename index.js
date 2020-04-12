#!/usr/bin/env node

const cli = require('yargs');

cli.scriptName('basework')
  .usage('Usage: basework <command> [options]')
  .command('new', '', {}, argv => { // TODO - Pass arguments for which project to generate
    const { generate } = require('basework/generate');
    generate();
  })
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