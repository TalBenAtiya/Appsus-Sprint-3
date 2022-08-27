import { NoteList } from "../cmps/note-list.jsx"
import { NoteFilter } from "../cmps/notes-filter.jsx"
import { NoteAdd } from "../cmps/note-add.jsx"
export function PinnedNotes(
    {
        notes,
        onChangeBackgroundColor,
        onchangeTxt,
        onchangeTodoTxt,
        onTodoIsDone,
        onRemoveNote,
        onaddLabel,
        onchangeLabelTxt,
        onRemoveLabel,
    }
) {
    return <section className="note-index pinned">
        <NoteList notes={notes}
            onChangeBackgroundColor={onChangeBackgroundColor}
            onchangeTxt={onchangeTxt}
            onchangeTodoTxt={onchangeTodoTxt}
            onTodoIsDone={onTodoIsDone}
            onRemoveNote={onRemoveNote}
            onaddLabel={onaddLabel}
            onchangeLabelTxt={onchangeLabelTxt}
            onRemoveLabel={onRemoveLabel}
        />
    </section>
}
