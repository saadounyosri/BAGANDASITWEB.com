// Data encrypted (Base64) bech ma t-banch f-el-source code
const gamesData = [
    { name: "Red Dead Redemption 2", img: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg", origPrice: "10dt", promoPrice: "5DT", u: "bHBldXEyNTI0MQ==", p: "b2h2cWMyNDU1OQ==" },
    { name: "Resident Evil Requiem", img: "https://image.api.playstation.com/vulcan/ap/rnd/202512/1205/79661d7a2bdb9784749b4e57e1456ca89f7ac7bed8615aee.png", origPrice: "55DT", promoPrice: "5DT", u: "ZmczZTQ1Z2VkZg==", p: "R0RGRzQ1NVRCRkRE" },
    { name: "the witcher", img: "https://image.api.playstation.com/vulcan/ap/rnd/202211/1412/5YlA3POEEpaAJsUq3eg6U8d6.png", origPrice: "30DT", promoPrice: "5DT", u: "a2luZ29mdGhlZGVhZDQ3Mw==", p: "S2luZzRsaWZlMzM=" },
    { name: "Stray", img: "https://wallpaperaccess.com/full/8322547.jpg", origPrice: "20DT", promoPrice: "5DT", u: "b3JkaW5hcnlyaGlub2Nlcm9zNjM1OA==", p: "YThlZjMyYTNiNzZlZmZiNCFhWg==" },
    { name: "Spider-Man Remastered", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg", origPrice: "30DT", promoPrice: "5DT", u: "dWN1em95dW5jdW5zcGlkZXJtYW4=", p: "VWN1em95dW5jdW4uc3BpZGVyMQ==" },
    { name: "A Plague Tale: Requiem", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1182900/header.jpg", origPrice: "25DT", promoPrice: "5DT", u: "bHVjaWVubmVjcmFzZTIwMDc=", p: "VW5peDIxMDAw" },
    { name: "Horizon Forbidden West", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2420110/header.jpg", origPrice: "35DT", promoPrice: "5DT", u: "Rm9yYmlpZGRlbldlc3Q=", p: "Rm9yYmlkZGVuMiQ0NTY3" },
    { name: "Grand Theft Auto V", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg", origPrice: "30DT", promoPrice: "5DT", u: "TnUwSHo0UXo5VWkw", p: "R20xR3Y2SWMyTm82" },
    { name: "it takes two", img: "https://variety.com/wp-content/uploads/2022/01/It-Takes-Two-e1643647274115.jpg?w=1000&h=632&crop=1", origPrice: "5DT", promoPrice: "1DT 😍", u: "NG9zRVdPcDdI", p: "dEZNYzZOb2FzUENqZDdB" },
    { name: "EA SPORTS FC 26", img: "https://wallpaperaccess.com/full/22537619.jpg", origPrice: "25DT", promoPrice: "5DT", u: "Zm5xdDEyMzI0", p: "RXM5VmUxRGIwRXoz" },
    { name: "MECHA CHAMELEON", img: "https://upload.wikimedia.org/wikipedia/en/8/8f/Meccha_Chameleon_Steam_Header.jpg", origPrice: "15DT", promoPrice: "5DT", u: "YXdha2lfbG4=", p: "TGVubnkxMjA5" },
    { name: "PEAK", img: "https://wallpaperaccess.com/full/25896790.jpg", origPrice: "12DT", promoPrice: "5DT", u: "bml3dHowaWVustk=", p: "S3BTMVdmS0h0SQ==" },
    { name: "Forza Horizon 6", img: "https://images5.alphacoders.com/140/thumb-1920-1401537.jpg", origPrice: "30DT", promoPrice: "5DT", u: "QUp2UlFwekFw", p: "Uk05WThYU1RXRVZ4cGx6" },
    { name: "Call of Duty: Black Ops", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/42700/header.jpg", origPrice: "20DT", promoPrice: "5DT", u: "Z3JubjYwNw==", p: "MDUwMTMwODA3MHotcA==" },
    { name: "Assetto Corsa", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/244210/header.jpg", origPrice: "15DT", promoPrice: "5DT", u: "Z3JubjYwNw==", p: "MDUwMTMwODA3MHotcA==" },
    { name: "Rust", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg", origPrice: "20DT", promoPrice: "5DT", u: "Z3JubjYwNw==", p: "MDUwMTMwODA3MHotcA==" },
    { name: "Dead by Daylight", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/381210/header.jpg", origPrice: "15DT", promoPrice: "5DT", u: "Z3JubjYwNw==", p: "MDUwMTMwODA3MHotcA==" },
    { name: "Wallpaper Engine", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/431960/header.jpg", origPrice: "10DT", promoPrice: "5DT", u: "Z3JubjYwNw==", p: "MDUwMTMwODA3MHotcA==" }
];

// Function bech t-decodi el-passwords kan ki y-cliki 3al-card
const decodeData = (str) => atob(str);

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    root.innerHTML = `
        <div class="glow-bg top-left"></div>
        <div class="glow-bg bottom-right"></div>

        <header class="navbar">
            <div class="logo">
                <span class="crown">👑</span> STEAM BAGANDA 
            </div>
            <nav class="nav-links">
                <a href="#home" class="active">Home</a>
                <a href="#games">Steam Games</a>
            </nav>
        </header>

        <section class="games-section" id="games">
            <h2 class="section-title"><i class="fa-brands fa-steam"></i> Available Steam Accounts</h2>
            <div class="games-grid" id="gamesGrid"></div>
        </section>
    `;

    const grid = document.getElementById("gamesGrid");
    gamesData.forEach(game => {
        const card = document.createElement("div");
        card.className = "game-card";
        
        // Decodage y-sir kan waqt el-click!
        card.onclick = () => {
            const realUser = decodeData(game.u);
            const realPass = decodeData(game.p);
            alert(`🎮 Game: ${game.name}\n👤 Username: ${realUser}\n🔑 Password: ${realPass}`);
        };

        card.innerHTML = `
            <img src="${game.img}" alt="${game.name}">
            <div class="game-header">
                <h3>${game.name}</h3>
                <div class="price-container">
                    <span class="original-price-tag">${game.origPrice}</span>
                    <span class="promo-price-tag">${game.promoPrice}</span>
                </div>
            </div>
            <span class="status"><i class="fa-solid fa-lock"></i> Click to view credentials</span>
        `;
        grid.appendChild(card);
    });
});