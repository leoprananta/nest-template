import { Notes } from "./interface/note.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class NotesService{
    private readonly notes: Notes[] = [];

    create(note: Notes){
        return this.notes.push(note)
    }

    findAll(){
        return this.notes;
    }
}