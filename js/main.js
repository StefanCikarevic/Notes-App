import NotesAPI from "./NotesAPI.js";

NotesAPI.saveNotes({
  id: 8285582,
  title: "New Note!",
  body: "I am a new note",
});

console.log(NotesAPI.getAllNotes());
