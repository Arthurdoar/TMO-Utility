if (window.location.host !== "https://zonatmo.com/") { 
    let match = window.location.pathname.match(/\/news\/([a-fA-F0-9]{32})\//)    //se agregó que busque un identificador en hexadecimal de 32 caractéres
    if (match) {
        let id = match[1];
        let matchOptions = window.location.pathname.match(/\/\w+\/\w+\/(.*)/);
        if (matchOptions) {
            window.location.replace("https://zonatmo.com/viewer/" + id + "/" + matchOptions[1])
        } else window.location.replace("https://zonatmo.com/viewer/" + id)
    } else console.log("TempHexID not found")
}
