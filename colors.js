function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0'); // Convert to Hex
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

function generateRandomPalette() {
    const hue = getRandomInt(0, 360);  // Random hue value between 0 and 360
    const saturation1 = getRandomInt(40, 60);  // Saturation for the first color
    const saturation2 = getRandomInt(60, 80);  // Higher saturation for the second color
    const lightness1 = getRandomInt(50, 70);   // Lightness for the first color
    const lightness2 = getRandomInt(30, 50);   // Lower lightness for the second color

    const color1 = hslToHex(hue, saturation1, lightness1);
    const color2 = hslToHex(hue, saturation2, lightness2);
    const color3 = hslToHex((hue + 120) % 360, saturation1, lightness1);
    const color4 = hslToHex((hue + 240) % 360, saturation2, lightness2);

    document.documentElement.style.setProperty('--color1', color1);
    document.documentElement.style.setProperty('--color2', color2);
    document.documentElement.style.setProperty('--color3', color3);
    document.documentElement.style.setProperty('--color4', color4);
}

window.onload = generateRandomPalette;
