const fs = require('fs') // require fileSystem
const chalk = require('chalk') // require chalk

////////////////////////////
//function addNote() to app
const addNote = (title, body) => {
    const notes = loadNote();
    const dublicateNote = notes.filter((note) => {
        return note.title === title;
    });
    if (dublicateNote.length === 0) {
        notes.push({
            title, // shorthand 
            body
        })
        saveNote(notes);
        console.log(chalk.blueBright.inverse('newNoteAdded!!!'));
    } else {
        console.log(chalk.redBright.inverse('alreadyExisted???'));
    };

};

////////////////////////////////
//function deleteNote() to app
const deleteNote = (title) => {
    const notes = loadNote();
    const data = notes.filter((note) => {
        return note.title !== title;
    });
    if (notes.length > data.length) {
        console.log(chalk.blueBright.inverse('noteDeleted!!!'))
        saveNote(data);
    } else {
        console.log(chalk.redBright.inverse('alreadyDeleted???'))
    }
};

////////////////////////////////
//function readNote() to app
const readNote = (title) => {
    const notes = loadNote();
    const data = notes.find((note) => {
        return note.title === title;
    });
    if (data) {
        console.log('string');
        console.log(chalk.greenBright(data.title) + " : " + chalk.blueBright(data.body));
    } else {
        console.log(chalk.redBright.inverse('noteNotFound???'))
    }
};

////////////////////////////////
//function listNote() to app
const listNote = () => {
    const notes = loadNote();
    console.log(chalk.redBright.inverse('listOfNotes'));
    notes.forEach((note) => {
        console.log("Title : " + chalk.greenBright(note.title) + " Body : " + chalk.blueBright(note.body))
    });
};

//return array 
const loadNote = () => {
    try {
        const dataBuff = fs.readFileSync('notes.json');
        const dataJSON = dataBuff.toString()
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
}

//write in notes.json
const saveNote = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

//export own modules
module.exports = {
    addNote,
    deleteNote,
    readNote,
    listNote
};