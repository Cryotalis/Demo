const http = require('https'); // or 'https' for https:// URLs
const fs = require('fs');
const path = require('path')

{ // For scraping emote names and links from discord (must be used at the Emoji tab of Server Settings)
    var emoteInfo = document.body.innerHTML.match(/(?<=url\(&quot;)https:\/\/cdn.discordapp.com\/emojis.+?(?=\?).+?value=".+?"/g)
    var emotes = emoteInfo.map(i => ({
        name: i.match(/(?<=value=").+(?=")/)[0],
        link: i.match(/.+?(?=\?)/)[0].replace("webp", "png"),
    }))
}

const emotes = [
    {
        "name": "Steam_Standard",
        "link": "https://cdn.discordapp.com/emojis/1270403105774768148.png"
    },
    {
        "name": "ripwitch",
        "link": "https://cdn.discordapp.com/emojis/1264623063862087761.png"
    },
    {
        "name": "minibetsy",
        "link": "https://cdn.discordapp.com/emojis/1234564015557181571.png"
    },
    {
        "name": "jumbobetsy",
        "link": "https://cdn.discordapp.com/emojis/1234564014411878501.png"
    },
    {
        "name": "Blinkee",
        "link": "https://cdn.discordapp.com/emojis/1225453632221216868.png"
    },
    {
        "name": "Aquarion",
        "link": "https://cdn.discordapp.com/emojis/1223299224268181555.png"
    },
    {
        "name": "gobusip",
        "link": "https://cdn.discordapp.com/emojis/1209198879145332856.png"
    },
    {
        "name": "bughunter",
        "link": "https://cdn.discordapp.com/emojis/1170054365327929434.png"
    },
    {
        "name": "Hunter",
        "link": "https://cdn.discordapp.com/emojis/1167149310119510046.png"
    },
    {
        "name": "LUL",
        "link": "https://cdn.discordapp.com/emojis/1136980911473295370.png"
    },
    {
        "name": "DDA_Summoner",
        "link": "https://cdn.discordapp.com/emojis/1092505623301730415.png"
    },
    {
        "name": "Engineer",
        "link": "https://cdn.discordapp.com/emojis/1090841647383859230.png"
    },
    {
        "name": "SleepyCat",
        "link": "https://cdn.discordapp.com/emojis/1065062003787432047.png"
    },
    {
        "name": "Twitch",
        "link": "https://cdn.discordapp.com/emojis/1060644829052280903.png"
    },
    {
        "name": "RadCat",
        "link": "https://cdn.discordapp.com/emojis/1044753728533704835.png"
    },
    {
        "name": "MadCat",
        "link": "https://cdn.discordapp.com/emojis/1044751753360449646.png"
    },
    {
        "name": "Chromatic",
        "link": "https://cdn.discordapp.com/emojis/1019660750354120725.png"
    },
    {
        "name": "Steam",
        "link": "https://cdn.discordapp.com/emojis/1019659406255857804.png"
    },
    {
        "name": "Defense",
        "link": "https://cdn.discordapp.com/emojis/1019659145156231168.png"
    },
    {
        "name": "Countess",
        "link": "https://cdn.discordapp.com/emojis/981719805784629308.png"
    },
    {
        "name": "DD2Role",
        "link": "https://cdn.discordapp.com/emojis/958355551014748190.png"
    },
    {
        "name": "DD1Role",
        "link": "https://cdn.discordapp.com/emojis/958355550972809216.png"
    },
    {
        "name": "DDARole",
        "link": "https://cdn.discordapp.com/emojis/958355550935089242.png"
    },
    {
        "name": "DDGR",
        "link": "https://cdn.discordapp.com/emojis/958355550872158248.png"
    },
    {
        "name": "sadpropeller",
        "link": "https://cdn.discordapp.com/emojis/920347609779019787.png"
    },
    {
        "name": "Mercenary",
        "link": "https://cdn.discordapp.com/emojis/908430318845956136.png"
    },
    {
        "name": "DDA_EV",
        "link": "https://cdn.discordapp.com/emojis/897509544995987466.png"
    },
    {
        "name": "DDA_Huntress",
        "link": "https://cdn.discordapp.com/emojis/897509544815656960.png"
    },
    {
        "name": "DDA_Apprentice",
        "link": "https://cdn.discordapp.com/emojis/897509544807243887.png"
    },
    {
        "name": "DDAMonk",
        "link": "https://cdn.discordapp.com/emojis/897509156821545001.png"
    },
    {
        "name": "DDA_Squire",
        "link": "https://cdn.discordapp.com/emojis/897509156720881684.png"
    },
    {
        "name": "DDA_Rogue",
        "link": "https://cdn.discordapp.com/emojis/897509156444069898.png"
    },
    {
        "name": "DDA_Warden",
        "link": "https://cdn.discordapp.com/emojis/897509155970105346.png"
    },
    {
        "name": "Switch",
        "link": "https://cdn.discordapp.com/emojis/874070978244804728.png"
    },
    {
        "name": "GreenBullet",
        "link": "https://cdn.discordapp.com/emojis/841739183789834251.png"
    },
    {
        "name": "Windows",
        "link": "https://cdn.discordapp.com/emojis/841728740333715497.png"
    },
    {
        "name": "DD1",
        "link": "https://cdn.discordapp.com/emojis/841728740317069322.png"
    },
    {
        "name": "Xbox",
        "link": "https://cdn.discordapp.com/emojis/841728740303437824.png"
    },
    {
        "name": "Trader",
        "link": "https://cdn.discordapp.com/emojis/841728740282990612.png"
    },
    {
        "name": "PS",
        "link": "https://cdn.discordapp.com/emojis/841728740282597426.png"
    },
    {
        "name": "Adventurer",
        "link": "https://cdn.discordapp.com/emojis/841723227722350643.png"
    },
    {
        "name": "judgeWitch",
        "link": "https://cdn.discordapp.com/emojis/835350475644731492.png"
    },
    {
        "name": "SleepyOctopod",
        "link": "https://cdn.discordapp.com/emojis/831064853221212167.png"
    },
    {
        "name": "peepers",
        "link": "https://cdn.discordapp.com/emojis/828030696936439808.png"
    },
    {
        "name": "corgi",
        "link": "https://cdn.discordapp.com/emojis/827011653501321227.png"
    },
    {
        "name": "Golden_Douglas",
        "link": "https://cdn.discordapp.com/emojis/758430709424586783.png"
    },
    {
        "name": "thumbs_up",
        "link": "https://cdn.discordapp.com/emojis/745501111015833632.png"
    },
    {
        "name": "thumbs_sideways",
        "link": "https://cdn.discordapp.com/emojis/745501110403465318.png"
    },
    {
        "name": "thumbs_down",
        "link": "https://cdn.discordapp.com/emojis/745501108075626578.png"
    },
    {
        "name": "gobunospeak",
        "link": "https://cdn.discordapp.com/emojis/702311071272403044.png"
    },
    {
        "name": "godab",
        "link": "https://cdn.discordapp.com/emojis/702310750055825428.png"
    },
    {
        "name": "Paws",
        "link": "https://cdn.discordapp.com/emojis/700414148734877806.png"
    },
    {
        "name": "PawsSurf",
        "link": "https://cdn.discordapp.com/emojis/700409603720085617.png"
    },
    {
        "name": "megachicken",
        "link": "https://cdn.discordapp.com/emojis/687168076122161154.png"
    },
    {
        "name": "incursions",
        "link": "https://cdn.discordapp.com/emojis/617056872725479454.png"
    },
    {
        "name": "gobuhug3",
        "link": "https://cdn.discordapp.com/emojis/586279988785840180.png"
    },
    {
        "name": "gobuhug2",
        "link": "https://cdn.discordapp.com/emojis/586279936952631308.png"
    },
    {
        "name": "gobucry",
        "link": "https://cdn.discordapp.com/emojis/586276489859825664.png"
    },
    {
        "name": "gobuhug",
        "link": "https://cdn.discordapp.com/emojis/586274245957517322.png"
    },
    {
        "name": "gwderp",
        "link": "https://cdn.discordapp.com/emojis/586273648696885248.png"
    },
    {
        "name": "SophiNo",
        "link": "https://cdn.discordapp.com/emojis/586273647707291659.png"
    },
    {
        "name": "gobunohear",
        "link": "https://cdn.discordapp.com/emojis/586273647308701718.png"
    },
    {
        "name": "gobuthink",
        "link": "https://cdn.discordapp.com/emojis/586273647229009920.png"
    },
    {
        "name": "puhpuh",
        "link": "https://cdn.discordapp.com/emojis/586273647002648583.png"
    },
    {
        "name": "gobuyay2",
        "link": "https://cdn.discordapp.com/emojis/586273646528692225.png"
    },
    {
        "name": "gobushades",
        "link": "https://cdn.discordapp.com/emojis/586273646239285248.png"
    },
    {
        "name": "gobuevil",
        "link": "https://cdn.discordapp.com/emojis/586273629143302145.png"
    },
    {
        "name": "giveaway",
        "link": "https://cdn.discordapp.com/emojis/579194439776600064.png"
    },
    {
        "name": "protobot",
        "link": "https://cdn.discordapp.com/emojis/563244237433602048.png"
    },
    {
        "name": "gold",
        "link": "https://cdn.discordapp.com/emojis/460345588911833088.png"
    },
    {
        "name": "ProfessorProteus",
        "link": "https://cdn.discordapp.com/emojis/458747552502644746.png"
    },
    {
        "name": "TowerRoyale",
        "link": "https://cdn.discordapp.com/emojis/430086647174922241.png"
    },
    {
        "name": "barbarian",
        "link": "https://cdn.discordapp.com/emojis/421073360584310785.png"
    },
    {
        "name": "adept",
        "link": "https://cdn.discordapp.com/emojis/350402392178556948.png"
    },
    {
        "name": "dryad",
        "link": "https://cdn.discordapp.com/emojis/345156191967641600.png"
    },
    {
        "name": "initiate",
        "link": "https://cdn.discordapp.com/emojis/327210374581714964.png"
    },
    {
        "name": "gobuhuntress",
        "link": "https://cdn.discordapp.com/emojis/312848780385058816.png"
    },
    {
        "name": "huntresswow",
        "link": "https://cdn.discordapp.com/emojis/307112424614395906.png"
    },
    {
        "name": "GKey",
        "link": "https://cdn.discordapp.com/emojis/306261992052752384.png"
    },
    {
        "name": "ORB",
        "link": "https://cdn.discordapp.com/emojis/304724581275533315.png"
    },
    {
        "name": "DiscordDefender",
        "link": "https://cdn.discordapp.com/emojis/303874289654956033.png"
    },
    {
        "name": "GD2",
        "link": "https://cdn.discordapp.com/emojis/297859621748736000.png"
    },
    {
        "name": "OrcLady2",
        "link": "https://cdn.discordapp.com/emojis/291585292593266699.png"
    },
    {
        "name": "SiegeRoller",
        "link": "https://cdn.discordapp.com/emojis/291576910763393024.png"
    },
    {
        "name": "ClownMonk",
        "link": "https://cdn.discordapp.com/emojis/290869510078988290.png"
    },
    {
        "name": "TrialsHYPE",
        "link": "https://cdn.discordapp.com/emojis/286104702540709888.png"
    },
    {
        "name": "mystic",
        "link": "https://cdn.discordapp.com/emojis/250374210562555904.png"
    },
    {
        "name": "DemonLord",
        "link": "https://cdn.discordapp.com/emojis/250374210503835648.png"
    },
    {
        "name": "gunwitch",
        "link": "https://cdn.discordapp.com/emojis/250374210382200832.png"
    },
    {
        "name": "Harbinger",
        "link": "https://cdn.discordapp.com/emojis/250374210361360384.png"
    },
    {
        "name": "squire",
        "link": "https://cdn.discordapp.com/emojis/250374210352840704.png"
    },
    {
        "name": "goblinRanged",
        "link": "https://cdn.discordapp.com/emojis/250374210214559745.png"
    },
    {
        "name": "seriesEV",
        "link": "https://cdn.discordapp.com/emojis/250374210113765376.png"
    },
    {
        "name": "wyvern",
        "link": "https://cdn.discordapp.com/emojis/250374210101313537.png"
    },
    {
        "name": "ogre",
        "link": "https://cdn.discordapp.com/emojis/250374210084536320.png"
    },
    {
        "name": "koboldFlier",
        "link": "https://cdn.discordapp.com/emojis/250374209996455936.png"
    },
    {
        "name": "orc",
        "link": "https://cdn.discordapp.com/emojis/250374209950318592.png"
    },
    {
        "name": "wither",
        "link": "https://cdn.discordapp.com/emojis/250374209803386881.png"
    },
    {
        "name": "WarBoar3",
        "link": "https://cdn.discordapp.com/emojis/250374209690271754.png"
    },
    {
        "name": "skele",
        "link": "https://cdn.discordapp.com/emojis/250374209308590080.png"
    },
    {
        "name": "WarBoar",
        "link": "https://cdn.discordapp.com/emojis/250374209228767232.png"
    },
    {
        "name": "kobold",
        "link": "https://cdn.discordapp.com/emojis/250374209140686859.png"
    },
    {
        "name": "dryad2",
        "link": "https://cdn.discordapp.com/emojis/250374209010663425.png"
    },
    {
        "name": "ogreCarnival",
        "link": "https://cdn.discordapp.com/emojis/250374209010663424.png"
    },
    {
        "name": "OrcLady",
        "link": "https://cdn.discordapp.com/emojis/250374208872251392.png"
    },
    {
        "name": "goblin",
        "link": "https://cdn.discordapp.com/emojis/250374208855605249.png"
    },
    {
        "name": "huntress",
        "link": "https://cdn.discordapp.com/emojis/250374208800948225.png"
    },
    {
        "name": "draken",
        "link": "https://cdn.discordapp.com/emojis/250374208637501450.png"
    },
    {
        "name": "skeleOrc",
        "link": "https://cdn.discordapp.com/emojis/250374208327122944.png"
    },
    {
        "name": "apprentice",
        "link": "https://cdn.discordapp.com/emojis/250374207651708928.png"
    },
    {
        "name": "goblinTier3",
        "link": "https://cdn.discordapp.com/emojis/250374207555239937.png"
    },
    {
        "name": "lavamancer",
        "link": "https://cdn.discordapp.com/emojis/250374207517491200.png"
    },
    {
        "name": "DarkMage",
        "link": "https://cdn.discordapp.com/emojis/250374207479873541.png"
    },
    {
        "name": "monk",
        "link": "https://cdn.discordapp.com/emojis/250374207194529812.png"
    },
    {
        "name": "AbyssLord",
        "link": "https://cdn.discordapp.com/emojis/250374207156912128.png"
    },
    {
        "name": "Betsy",
        "link": "https://cdn.discordapp.com/emojis/250374206930419713.png"
    },
    {
        "name": "questionmark",
        "link": "https://cdn.discordapp.com/emojis/250374206846533632.png"
    },
    {
        "name": "GoodDev",
        "link": "https://cdn.discordapp.com/emojis/1065061496473800774.gif"
    },
    {
        "name": "PetTheCorgi",
        "link": "https://cdn.discordapp.com/emojis/969684962804641852.gif"
    },
    {
        "name": "golook",
        "link": "https://cdn.discordapp.com/emojis/721157253012652053.gif"
    },
    {
        "name": "BlobSoonTM",
        "link": "https://cdn.discordapp.com/emojis/702335969818443797.gif"
    },
    {
        "name": "moose",
        "link": "https://cdn.discordapp.com/emojis/679765202702565491.gif"
    },
    {
        "name": "gobunom",
        "link": "https://cdn.discordapp.com/emojis/586278514253365278.gif"
    },
    {
        "name": "gobuhi",
        "link": "https://cdn.discordapp.com/emojis/586273662559322112.gif"
    },
    {
        "name": "gobusweat",
        "link": "https://cdn.discordapp.com/emojis/586273646314782725.gif"
    },
    {
        "name": "wasntgobu",
        "link": "https://cdn.discordapp.com/emojis/586273641919021058.gif"
    },
    {
        "name": "ev2grin",
        "link": "https://cdn.discordapp.com/emojis/586273627507523644.gif"
    }
]

function downloadFile(url, name) {
    const extension = url.match(/.+(\..+)$/m)[1]
    const file = fs.createWriteStream(`${name}${extension}`)
    
    http.get(url, response => {
        response.pipe(file);

        // Close filestream after download is completed
        file.on("finish", () => file.close())
    })
}

function downloadFiles(files, folderName) {
    const folderPath = path.join(__dirname, folderName)
    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath)

    for (let file of files) {
        downloadFile(file.link, `${folderName}/${file.name}`)
    }
}

downloadFiles(emotes, "DD2 Emotes")