// Data Array mta3 el-games bech tzid walla t-modifi fisa3
const gamesData = [
    { name: "Red Dead Redemption 2", img: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg", origPrice: "10dt", promoPrice: "5DT", user: "lpeuq25241", pass: "ohvqc24559", key: "reddead2026" },
    { name: "Resident Evil Requiem", img: "https://image.api.playstation.com/vulcan/ap/rnd/202512/1205/79661d7a2bdb9784749b4e57e1456ca89f7ac7bed8615aee.png", origPrice: "55DT", promoPrice: "5DT", user: "fg3e45gedf", pass: "GDFG455TBBDD", key: "requiem2026" },
    { name: "the witcher", img: "https://image.api.playstation.com/vulcan/ap/rnd/202211/1412/5YlA3POEEpaAJsUq3eg6U8d6.png", origPrice: "30DT", promoPrice: "5DT", user: "kingofthedead473", pass: "King4life33", key: "thewitcher2026" },
    { name: "Stray", img: "https://wallpaperaccess.com/full/8322547.jpg", origPrice: "20DT", promoPrice: "5DT", user: "ordinaryrhinoceros6358", pass: "a8ef32a3b76effb41!aZ", key: "strayk2026" },
    { name: "Spider-Man Remastered", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg", origPrice: "30DT", promoPrice: "5DT", user: "ucuzoyuncunspiderman", pass: "Ucuzoyuncun.spider1", key: "spider2026" },
    { name: "A Plague Tale: Requiem", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1182900/header.jpg", origPrice: "25DT", promoPrice: "5DT", user: "luciennecrase2007", pass: "Unix21000", key: "resonance2026" },
    { name: "Horizon Forbidden West", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2420110/header.jpg", origPrice: "35DT", promoPrice: "5DT", user: "ForbiiiddenWest", pass: "Forbidden2$4567", key: "horizonforbiddenwest2026" },
    { name: "Grand Theft Auto V", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg", origPrice: "30DT", promoPrice: "5DT", user: "Nu0Hz4Qz9Ui0", pass: "Gm1Gv6Ic2No6", key: "grandettheftautov2026" },
    { name: "it takes two", img: "https://variety.com/wp-content/uploads/2022/01/It-Takes-Two-e1643647274115.jpg?w=1000&h=632&crop=1", origPrice: "5DT", promoPrice: "1DT 😍", user: "4osEWOp7H", pass: "tFMc6NoasPCjd7A", key: "ittakestwo2026" },
    { name: "EA SPORTS FC 26", img: "https://wallpaperaccess.com/full/22537619.jpg", origPrice: "25DT", promoPrice: "5DT", user: "fnqt12324", pass: "Es9Ve1Db0Ez3", key: "easportsfc262026" },
    { name: "MECHA CHAMELEON", img: "https://upload.wikimedia.org/wikipedia/en/8/8f/Meccha_Chameleon_Steam_Header.jpg", origPrice: "15DT", promoPrice: "5DT", user: "awaki_ln", pass: "Lenny1209", key: "meechachameleon2026" },
    { name: "PEAK", img: "https://wallpaperaccess.com/full/25896790.jpg", origPrice: "12DT", promoPrice: "5DT", user: "niwtz3ienk9", pass: "KpS1WfKHtI", key: "pp8-eak2026" },
    { name: "Forza Horizon 6", img: "https://images5.alphacoders.com/140/thumb-1920-1401537.jpg", origPrice: "30DT", promoPrice: "5DT", user: "AJvRQpzAp", pass: "RM9Y8XSTWEVxplz", key: "12forzahorizon62026" },
    { name: "Call of Duty: Black Ops", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/42700/header.jpg", origPrice: "20DT", promoPrice: "5DT", user: "grnn607", pass: "0501308070z-p", key: "cocallofduty2026" },
    { name: "Assetto Corsa", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/244210/header.jpg", origPrice: "15DT", promoPrice: "5DT", user: "grnn607", pass: "0501308070z-p", key: "assettocorsaai2026" },
    { name: "Rust", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg", origPrice: "20DT", promoPrice: "5DT", user: "grnn607", pass: "0501308070z-p", key: "rustiss20226" },
    { name: "Dead by Daylight", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/381210/header.jpg", origPrice: "15DT", promoPrice: "5DT", user: "grnn607", pass: "0501308070z-p", key: "deadbydaylight2026" },
    { name: "Wallpaper Engine", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/431960/header.jpg", origPrice: "10DT", promoPrice: "5DT", user: "grnn607", pass: "0501308070z-p", key: "wallpaperrs2026" }
];

// Dynamic HTML Injection
document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    root.innerHTML = `
        <div class="glow-bg top-left"></div>
        <div class="glow-bg bottom-right"></div>

        <audio id="phonkAudio" loop preload="auto" autoplay>
            <source src="https://c.top4top.io/m_3904nfyl01.mp3" type="audio/mpeg">
        </audio>

        <header class="navbar">
            <div class="logo">
                <span class="crown">👑</span> STEAM BAGANDA 
                <a href="https://discord.gg/ahEnb3D9F" target="_blank" class="btn-contact-discord" style="color:#a0aec0; font-size:14px; text-decoration:none;">
                    <i class="fa-brands fa-discord"></i> Contact Discord
                </a>
            </div>
            <nav class="nav-links">
                <a href="#home" class="active">Home</a>
                <a href="#games">Steam Games</a>
                <a href="#about">About</a>
            </nav>
            <div class="nav-actions">
                <div class="promo-container">
                    <input type="text" id="promoInput" placeholder="Code Promo...">
                    <button class="btn-apply-promo" id="applyPromoBtn">Apply</button>
                </div>
                <div class="music-control-wrapper">
                    <button class="music-player-btn" id="musicBtn">
                        <i class="fa-solid fa-compact-disc" id="musicIcon"></i> <span id="musicText">PHONK ⚡</span>
                    </button>
                    <i class="fa-solid fa-volume-high" style="font-size: 11px; color: #00ff88;"></i>
                    <input type="range" class="volume-slider" id="volumeSlider" min="0" max="100" value="70">
                </div>
                <button class="btn-screenshot" id="screenshotBtn"><i class="fa-solid fa-camera"></i> Screenshot</button>
                <button class="btn-discord" id="loginDiscordBtn"><i class="fa-brands fa-discord"></i> Login with Discord</button>
            </div>
        </header>

        <main class="hero" id="home">
            <span class="badge">🔥 Free Public Steam Accounts</span>
            <h1>Welcome to <span class="highlight">STEAM BAGANDA</span></h1>
            <p>Get instant access to public Steam accounts for top games. Choose a game below and start playing!</p>
            <div class="hero-buttons">
                <a href="#games" class="btn-primary">Browse Games</a>
            </div>
        </main>

        <section class="games-section" id="games">
            <h2 class="section-title"><i class="fa-brands fa-steam" style="color: #087cff;"></i> Available Steam Accounts</h2>
            <div class="games-grid" id="gamesGrid"></div>
        </section>
    `;

    // Render Game Cards Dynamically
    const grid = document.getElementById("gamesGrid");
    gamesData.forEach(game => {
        const card = document.createElement("div");
        card.className = "game-card";
        card.onclick = () => alert(`Game: ${game.name}\nUsername: ${game.user}\nPassword: ${game.pass}`);
        card.innerHTML = `
            <img src="${game.img}" alt="${game.name}">
            <div class="game-header">
                <h3>${game.name}</h3>
                <div class="price-container">
                    <span class="original-price-tag">${game.origPrice}</span>
                    <span class="promo-price-tag">${game.promoPrice}</span>
                </div>
            </div>
            <span class="status"><i class="fa-solid fa-lock"></i> Protected by Password</span>
        `;
        grid.appendChild(card);
    });

    // Prevent View Source Shortcuts (Ctrl+U, F12, Right-Click)
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.onkeydown = function (e) {
        if (e.keyCode == 123 || 
           (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 67 || e.keyCode == 74)) || 
           (e.ctrlKey && e.keyCode == 85)) {
            return false;
        }
    };
});
// Empêcher Ctrl+U, F12, et Clic Droit
document.addEventListener('contextmenu', e => e.preventDefault());

document.addEventListener('keydown', e => {
    // Bloquer Ctrl + U
    if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
        return false;
    }
    // Bloquer F12 (Inspecter)
    if (e.key === 'F12') {
        e.preventDefault();
        return false;
    }
    // Bloquer Ctrl + Shift + I / C / J
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J')) {
        e.preventDefault();
        return false;
    }
});