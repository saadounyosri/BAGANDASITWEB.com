// Bloquer Clic Droit
document.addEventListener('contextmenu', e => e.preventDefault());

// Bloquer Tout les raccourcis
document.addEventListener('keydown', e => {
    // Ctrl + U
    if (e.ctrlKey && (e.keyCode === 85 || e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
    // F12
    if (e.keyCode === 123 || e.key === 'F12') {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
    // Ctrl + Shift + I / C / J
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 67 || e.keyCode === 74)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
    // Ctrl + S (Enregistrer la page)
    if (e.ctrlKey && (e.keyCode === 83 || e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
}, true); // "true" bech y-ekhou el-event fi l-capture phase