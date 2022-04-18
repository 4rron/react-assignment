function setHeader(newHeader: string){
    const header = document.getElementById("header");
    if (header === null) {}
    else { header.innerHTML = newHeader; }
}

export default setHeader;