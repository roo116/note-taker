function createNewNote(body, data) {
    id = randomUUID();
    body.id = id;
    data.push(body)
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'), JSON.stringify(data), null, 2);
    return data
}

modules.export =
    { createNewNote };