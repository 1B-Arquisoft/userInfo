const db = {
    'users': [
        { id: '1', name: 'Carlos', doc_type: 'cc', document: '123', is_admin: false, rol: 'student' },
    ],
    'teachers': [],
    'students': [],
};

function list(tabla) {
    return db[tabla] || [];
}

function get(tabla, id) {
    let col = list(tabla);
    return col.filter(item => item.id === id)[0] || null;
}

function upsert(tabla, data) {
    if (!db[tabla]) {
        db[tabla] = [];
    }
    db[tabla].push(data);
    console.log(db);
}

function remove(tabla, id) {
    return true;
}

async function query(tabla, q) {
    let col = await list(tabla);
    let keys = Object.keys(q);
    let key = keys[0];

    return col.filter(item => item[key] === q[key])[0] || null;
}

module.exports = {
    list,
    get,
    upsert,
    remove,
    query,
};
