module.exports = (data, option) => {
    switch (option) {
        case "warn":
            console.log(`[ WARN ] -> ${data}`);
            break;
        case "error":
            console.log(`[ ERR ] -> ${data}`);
            break;
        default:
            console.log(`[ ${(option || 'info').toUpperCase()} ] -> ${data}`);
            break;
    }
}

module.exports.loader = (data, option) => {
    switch (option) {
        case "warn":
            console.log(`[ WARN ] -> ${data}`);
            break;
        case "error":
            console.log(`[ ERR ] -> ${data}`);
            break;
        default:
            console.log(`[ ${(option || 'info').toUpperCase()} ] -> ${data}`);
            break;
    }
}