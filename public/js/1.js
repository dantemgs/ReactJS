function loop(times = 0, callback = null) {
    if (callback === null) {
        return;
    }

    let str = '';

    for (let i = 0; i < times; i++) {
        str += callback();
    }

    return str;
}

function callback() {
    return '23<br>';
}


