export function NoteLabels({note,noteId, labels , onchangeLabelTxt,onRemoveLabel}) {

    function changeLabelTxt({ target }, idx) {
        onchangeLabelTxt(noteId, idx, target.innerText,note.isPinned)
    }

    function removeLabel(idx) {
        onRemoveLabel(noteId,idx,note.isPinned)
    }


    return <section className="note-labels">
        {labels.map((label,idx) =>
        <div key={idx} className="labels-container">
            <p className="label-txt" onBlur={(ev) => changeLabelTxt(ev, idx)} role='textbox' datatext="Enter label name" aria-multiline="true" contentEditable="true" suppressContentEditableWarning='true' >{label}</p>
            <div className="remove-label" onClick={()=>{removeLabel(idx)}}>X</div>
        </div>
        )}
    </section>
}
