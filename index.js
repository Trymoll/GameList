const listGame = [
    {
        "nom": "Fortnite" ,
        "type": "survival, battle royale, sandbox" ,
        "url": "https://www.fortnite.com/" 
        
    },
    {
        "nom" : "Minecraft",
        "type": "sandbox, craft",
        "url": "https://www.minecraft.net"
    }

    
];

console.log(listGame);

listGame.forEach(element => {
    console.log(`J'ai joué à ${element.nom}`);
    const listGameBalise = document.getElementById("list-game");
    listGameBalise.innerHTML += `<li title="${element.type}"><a href="${element.url}" target="_blank">${element.nom}</a></li>`;
});
