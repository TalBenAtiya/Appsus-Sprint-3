export function NoteFilter({ onSetFilter }) {

    function onFilter({ target }) {
        onSetFilter(target.value)
    }

    return <section className="notes-filter">
        <input
            className="search-notes"
            type="text"
            placeholder="Search by title/label"
            name="search"
            onChange={(ev) => onFilter(ev)}
        />
    </section>
}
