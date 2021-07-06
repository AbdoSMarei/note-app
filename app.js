const yargs = require('yargs'); //required npm module (yargs)
const notes = require('./notes') //required own module

// use command from yargs (add)
yargs.command({
    command: 'add',
    describe: 'addTitle',
    builder: {
        title: {
            describe: 'noteTitle',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'noteBody',
            demandOption: true,
            type: 'string'
        },
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body);
    }
});

// use command from yargs (delete)
yargs.command({
    command: 'delete',
    describe: 'deleteTitle',
    builder: {
        title: {
            describe: 'noteTitle',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.deleteNote(argv.title);
    }
});

// use command from yargs (read)
yargs.command({
    command: 'read',
    describe: 'readTitle',
    builder: {
        title: {
            describe: 'noteTitle',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title);
    }
});

// use command from yargs (list)
yargs.command({
    command: 'list',
    describe: 'listTitle',
    handler: (argv) => {
        notes.listNote();
    }
});

yargs.parse();