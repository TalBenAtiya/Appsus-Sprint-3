import { NoteList } from "../cmps/note-list.jsx"
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
        onMakePinned,
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
            onMakePinned={onMakePinned}
        />
    </section>
}
