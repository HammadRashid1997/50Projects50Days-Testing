import { ClientFunction, Selector } from "testcafe";

fixture('Notes App').page('http://127.0.0.1:5501/notes-app/index.html')

// Start writing the tests
test('The website opens in the browser', async t => {
    const body = Selector('body')
    await t.expect(body.exists).ok()
})

test('The website has the correct background color', async t => {
    const body = Selector('body')
    const getBodyColor = ClientFunction(() => {
        return window ? window.getComputedStyle(document.body).getPropertyValue('background-color') : null
    })

    const bodyColor = getBodyColor()
    await t.expect(body.exists).ok().expect(bodyColor).eql('rgb(123, 218, 243)')
})

test('There is a add note button', async t => {
    const addNote = Selector('.add')
    await t.expect(addNote.exists).ok()
})

test('The add note button has the correct text', async t => {
    const addNote = Selector('.add')
    const text = 'Add note'
    await t.expect(addNote.exists).ok().expect(text).eql('Add note')
})

test('The add note text has the correct color', async t => {
    const addNote = Selector('.add')
    const getTextColor = ClientFunction(() => {
        const textAddNote = document.querySelector('.add')
        return textAddNote ? window.getComputedStyle(textAddNote).getPropertyValue('color') : null
    })
    const textColor = getTextColor()
    await t.expect(addNote.exists).ok().expect(textColor).eql('rgb(255, 255, 255)')
})

test('The add note button has a plus icon', async t => {
    const addButton = Selector('.fas.fa-plus')
    await t.expect(addButton.exists).ok()
})

test('The add note button is clickable', async t => {
    const addNote = Selector('.add')
    await t.expect(addNote.exists).ok().click(addNote)
})

test('The button when clicked adds a sticky note to the screen', async t => {
    const addNote = Selector('.add')
    await t.expect(addNote.exists).ok().click(addNote)

    const note = Selector('.note')
    await t.expect(note.exists).ok()
})

test('The tools on the top of the note are visible', async t => {
    const addNote = Selector('.add')
    await t.expect(addNote.exists).ok().click(addNote)

    const tools = Selector('.tools')
    await t.expect(tools.exists).ok()
})

test('The edit icon is visible', async t => {
    const addNote = Selector('.add')
    await t.expect(addNote.exists).ok().click(addNote)

    const edit = Selector('.edit')
    await t.expect(edit.exists).ok()
})

test('The edit icon is clickable', async t => {
    const addNote = Selector('.add')
    await t.expect(addNote.exists).ok().click(addNote)

    const edit = Selector('.edit')
    await t.expect(edit.exists).ok().click(edit)
})

test('The button when clicked does not allow to write anything in text area', async t => {
    const addNote = Selector('.add')
    await t.expect(addNote.exists).ok().click(addNote)

    const edit = Selector('.edit')
    await t.expect(edit.exists).ok().click(edit) 

    const textArea = Selector('.hidden')
    await t.expect(textArea.exists).ok()
})

test('The delete icon is visible', async t => {
    const addNote = Selector('.add')
    await t.expect(addNote.exists).ok().click(addNote)

    const deleteIcon = Selector('.delete')
    await t.expect(deleteIcon.exists).ok()
})

test('The delete icon is clickable', async t => {
    const addNote = Selector('.add')
    await t.expect(addNote.exists).ok().click(addNote)

    const deleteIcon = Selector('.delete')
    await t.expect(deleteIcon.exists).ok().click(deleteIcon)
})

test('The delete icon when clicked deletes that note from the screen', async t => {
    const addNote = Selector('.add')
    await t.expect(addNote.exists).ok().click(addNote)

    const deleteIcon = Selector('.delete')
    await t.expect(deleteIcon.exists).ok().click(deleteIcon)

    const note = Selector('.note')
    await t.expect(note.exists).notOk()
})

test('The text area is visible', async t => {
    const addNote = Selector('.add')
    await t.expect(addNote.exists).ok().click(addNote)

    const textArea = Selector('textarea')
    await t.expect(textArea.exists).ok()
})

test('The text area is editable', async t => {
    const addNote = Selector('.add')
    await t.expect(addNote.exists).ok().click(addNote)

    const textArea = Selector('textarea')
    await t.expect(textArea.exists).ok().click(textArea).typeText(textArea, 'Hello this is my first note.')
})
