export function email() {
    let hex  = '6976616e406a6574737061726b2e696f';
    let str = [];
    for (var n = 0; n < hex.length; n += 2) {
        str.push(String.fromCharCode(parseInt(hex.substr(n, 2), 16)));
    }
    return str.join('');
}
