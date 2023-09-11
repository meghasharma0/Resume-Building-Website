const areAllAlphabets = (str) => {
    for (let i = 0; i < str.length; i++){
        let c = str.charCodeAt(i);
        if ((c != 32 && c < 65) || (c > 90 && c < 97) || c > 123){
            return false;
        }
    }
    return true;
}
const capitalizeFirstLetter = (str) => {
    const arr = str.split(" ");
    const newArr = arr.map((elem) => {
        if (elem.length > 0){
            return elem[0].toUpperCase() + elem.slice(1);
        }
    });
    return newArr.join(" ");
}

export { areAllAlphabets, capitalizeFirstLetter };