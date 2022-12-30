
export const isNumeric = (num) => {
    return !isNaN(num)
}

export const truncate = (str, max = 20) => {
    return str.length > max ? str.substr(0, max-1) + '…' : str;
}