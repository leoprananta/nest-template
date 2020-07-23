import { Module } from "@nestjs/common";
import { NotesService } from "./note.service";
import { NotesController } from "./note.controllers";

@Module({
    imports: [],
    controllers: [NotesController],
    providers: [NotesService],
    exports: [NotesService],
})

export class NotesModule{};