import { Controller, Get, Post, Body } from "@nestjs/common";
import { CreateNotesDTO } from "./dto/note.dto";
import { NotesService } from "./note.service";

@Controller('notes')
export class NotesController{
    constructor(private readonly notesService: NotesService){};
    
    @Post()
    create(@Body() createNotesDTO:CreateNotesDTO){
        return this.notesService.create(createNotesDTO);
    }
    
    @Get()
    findAll(){
        return this.notesService.findAll();
    }
}