// Classic meme images array
const memeImages = [
    'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',  // Classic Doge
    'https://i.kym-cdn.com/entries/icons/original/000/029/959/Screen_Shot_2019-06-05_at_1.26.32_PM.jpg',  // Stonks
    'https://i.kym-cdn.com/photos/images/newsfeed/001/499/826/2f0.png',  // Diamond Hands
    'https://i.kym-cdn.com/entries/icons/original/000/022/138/highresrollsafe.jpg',  // Think About It
    'https://i.kym-cdn.com/entries/icons/original/000/000/142/feelsgoodman.png',  // Pepe
    'https://i.kym-cdn.com/entries/icons/original/000/006/907/ugly.jpg',  // Take My Money
    'https://i.kym-cdn.com/photos/images/original/002/652/460/d70.jpg',  // Crypto Wojak
    'https://i.kym-cdn.com/entries/icons/original/000/041/127/cover8.jpg',  // Moon Soon
];

// Chaotic meme phrases
const memePhrases = [
    'NGMI BRO 💀',
    'wen moon ser? 🌙',
    'WAGMI FAM 🚀',
    'cope + seethe 🤡',
    'anon pls 👻',
    'kek 🐸',
    'PUMP IT 📈',
    'DUMP EET 📉',
    'PAMP EET 💰',
    'DAMP EET 💸',
    'REEEEEEEEE 😤',
    'based 😎',
    'cringe 😬',
    '/b/ros 🤖',
    'sauce? 🍝'
];

// Audio setup
const bgMusic = document.getElementById('bgMusic');
const soundToggle = document.querySelector('.sound-toggle');
let isMusicPlaying = false;

// Cursor trail effect
const cursorTrail = document.querySelector('.cursor-trail');
document.addEventListener('mousemove', (e) => {
    cursorTrail.style.left = e.pageX + 'px';
    cursorTrail.style.top = e.pageY + 'px';
});

// Sound toggle functionality
soundToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        bgMusic.pause();
        soundToggle.textContent = '🔇';
    } else {
        bgMusic.play();
        soundToggle.textContent = '🔊';
    }
    isMusicPlaying = !isMusicPlaying;
});

// Populate meme gallery
const memeGrid = document.querySelector('.meme-grid');
memeImages.forEach(imgSrc => {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = 'Classic Meme';
    img.classList.add('animate__animated');
    memeGrid.appendChild(img);

    // Add random animation on hover
    img.addEventListener('mouseenter', () => {
        const animations = ['bounce', 'shake', 'tada', 'wobble', 'jello'];
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        img.classList.add(`animate__${randomAnimation}`);
    });

    img.addEventListener('mouseleave', () => {
        img.className = ''; // Remove all animations
        img.classList.add('animate__animated');
    });
});

// Buy button effects
const buyButton = document.querySelector('.buy-button');
buyButton.addEventListener('click', () => {
    const responses = [
        'NGMI WITHOUT US SER',
        'ENJOY POVERTY',
        'PUMP IT',
        'BOGDANOFF, HE BOUGHT',
        'PAMP EET',
        '/biz/ approves',
        'REEEEEEEEEEE',
        'TO THE MOON! 🚀',
        'anon pls',
        'kek'
    ];
    alert(responses[Math.floor(Math.random() * responses.length)]);
    screenShake();
    document.body.style.filter = 'hue-rotate(360deg)';
    setTimeout(() => {
        document.body.style.filter = 'none';
    }, 1000);
});

// MLG Airhorn sound effect
function playMLGAirhorn() {
    const airhorn = new Audio('https://www.myinstants.com/media/sounds/mlg-airhorn.mp3');
    airhorn.play();
}

// Konami code easter egg
let konamiCode = '';
const secretCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba';

document.addEventListener('keydown', (e) => {
    konamiCode += e.key;
    if (konamiCode.includes(secretCode)) {
        document.querySelector('.easter-egg').style.display = 'block';
        setTimeout(() => {
            document.querySelector('.easter-egg').style.display = 'none';
        }, 3000);
        konamiCode = '';
    }
});

// Random price ticker updates
setInterval(() => {
    const priceTicker = document.querySelector('.price-ticker');
    const randomChange = Math.random() > 0.5 ? '📈' : '📉';
    const randomEmoji = ['🚀', '💎', '🌙', '🔥'][Math.floor(Math.random() * 4)];
    priceTicker.textContent = `1 MEME = ${randomEmoji} MOON ${randomChange}`;
}, 3000);

// Rainbow background color cycle for buy button
let hue = 0;
setInterval(() => {
    hue = (hue + 1) % 360;
    buyButton.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
}, 50);

// Add random "wow" effects
setInterval(() => {
    const wow = document.createElement('div');
    wow.textContent = 'WOW!';
    wow.style.position = 'fixed';
    wow.style.left = Math.random() * window.innerWidth + 'px';
    wow.style.top = Math.random() * window.innerHeight + 'px';
    wow.style.transform = `rotate(${Math.random() * 360}deg)`;
    wow.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    wow.style.fontSize = '2em';
    wow.style.pointerEvents = 'none';
    wow.style.zIndex = '9999';
    wow.style.transition = 'all 1s ease-out';
    document.body.appendChild(wow);

    setTimeout(() => {
        wow.style.opacity = '0';
        wow.style.transform = `rotate(${Math.random() * 360}deg) translate(100px, -100px)`;
        setTimeout(() => wow.remove(), 1000);
    }, 1000);
}, 5000);

// Initialize page with some pizzazz
window.addEventListener('load', () => {
    // Trigger initial animations
    document.querySelector('header').classList.add('animate__animated', 'animate__bounce');
    
    // Add some random sparkles
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'fixed';
            sparkle.style.left = Math.random() * window.innerWidth + 'px';
            sparkle.style.top = Math.random() * window.innerHeight + 'px';
            sparkle.style.fontSize = '2em';
            sparkle.style.pointerEvents = 'none';
            document.body.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 1000);
        }, i * 200);
    }
    
    createMatrixRain();
    addRainbowBorder();
    
    // Add random laser beams
    setInterval(() => {
        const laser = document.createElement('div');
        laser.style.position = 'fixed';
        laser.style.width = '2px';
        laser.style.height = '100vh';
        laser.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        laser.style.left = Math.random() * window.innerWidth + 'px';
        laser.style.top = '0';
        laser.style.zIndex = '9997';
        laser.style.transform = `rotate(${Math.random() * 360}deg)`;
        laser.style.opacity = '0.7';
        laser.style.filter = 'blur(1px)';
        laser.style.pointerEvents = 'none';
        document.body.appendChild(laser);

        setTimeout(() => {
            laser.style.opacity = '0';
            setTimeout(() => laser.remove(), 500);
        }, 500);
    }, 2000);
});

// Add floating meme phrases
setInterval(() => {
    const phrase = memePhrases[Math.floor(Math.random() * memePhrases.length)];
    const floatingText = document.createElement('div');
    floatingText.textContent = phrase;
    floatingText.style.position = 'fixed';
    floatingText.style.left = Math.random() * window.innerWidth + 'px';
    floatingText.style.top = Math.random() * window.innerHeight + 'px';
    floatingText.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    floatingText.style.fontSize = '1.5em';
    floatingText.style.fontFamily = "'Press Start 2P', cursive";
    floatingText.style.textShadow = '2px 2px 4px rgba(0,0,0,0.5)';
    floatingText.style.pointerEvents = 'none';
    floatingText.style.zIndex = '9999';
    floatingText.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
    floatingText.style.transition = 'all 2s ease-out';
    document.body.appendChild(floatingText);

    setTimeout(() => {
        floatingText.style.opacity = '0';
        floatingText.style.transform = `translateY(-100px) rotate(${Math.random() * 360}deg)`;
        setTimeout(() => floatingText.remove(), 2000);
    }, 2000);
}, 3000);

// Add matrix rain effect
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.1';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
    const drops = [];
    const fontSize = 10;
    const columns = canvas.width / fontSize;

    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = matrix[Math.floor(Math.random() * matrix.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 35);
}

// Rainbow border effect
function addRainbowBorder() {
    const border = document.createElement('div');
    border.style.position = 'fixed';
    border.style.top = '0';
    border.style.left = '0';
    border.style.right = '0';
    border.style.bottom = '0';
    border.style.zIndex = '9998';
    border.style.pointerEvents = 'none';
    border.style.border = '3px solid transparent';
    document.body.appendChild(border);

    let hue = 0;
    setInterval(() => {
        hue = (hue + 1) % 360;
        border.style.border = `3px solid hsl(${hue}, 100%, 50%)`;
        border.style.boxShadow = `0 0 20px hsl(${hue}, 100%, 50%)`;
    }, 50);
}

// Glitchy cursor trail
document.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.1) {  // Only create trail 10% of the time for glitchy effect
        const trail = document.createElement('div');
        trail.innerHTML = memePhrases[Math.floor(Math.random() * memePhrases.length)];
        trail.style.position = 'fixed';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        trail.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        trail.style.fontSize = '20px';
        trail.style.pointerEvents = 'none';
        trail.style.fontFamily = 'Comic Sans MS';
        trail.style.textShadow = '2px 2px #000';
        trail.style.zIndex = '9999';
        document.body.appendChild(trail);

        setTimeout(() => {
            trail.remove();
        }, 500);
    }
});

// Random text corruption
function corruptText(text) {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/';
    return text.split('').map(char => 
        Math.random() < 0.1 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
    ).join('');
}

// Corrupt all text periodically
setInterval(() => {
    document.querySelectorAll('h1, h2, h3, p, button').forEach(element => {
        if (Math.random() < 0.1) {
            const originalText = element.getAttribute('data-original') || element.textContent;
            element.setAttribute('data-original', originalText);
            element.textContent = corruptText(originalText);
            setTimeout(() => {
                element.textContent = originalText;
            }, 100);
        }
    });
}, 2000);

// Random element shake
setInterval(() => {
    const elements = document.querySelectorAll('div, img, button');
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    randomElement.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
    setTimeout(() => {
        randomElement.style.transform = 'none';
    }, 100);
}, 1000);

// Random color inversion
setInterval(() => {
    if (Math.random() < 0.05) {
        document.body.style.filter = 'invert(100%)';
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 100);
    }
}, 3000);

// Spawn random meme faces
setInterval(() => {
    if (Math.random() < 0.1) {
        const memeface = document.createElement('div');
        const faces = ['( ͡° ͜ʖ ͡°)', '¯\\_(ツ)_/¯', 'ಠ_ಠ', '(╯°□°）╯︵ ┻━┻', '༼ つ ◕_◕ ༽つ'];
        memeface.textContent = faces[Math.floor(Math.random() * faces.length)];
        memeface.style.position = 'fixed';
        memeface.style.left = Math.random() * window.innerWidth + 'px';
        memeface.style.top = Math.random() * window.innerHeight + 'px';
        memeface.style.fontSize = '30px';
        memeface.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        memeface.style.textShadow = '2px 2px #000';
        memeface.style.zIndex = '9999';
        memeface.style.pointerEvents = 'none';
        document.body.appendChild(memeface);
        
        setTimeout(() => {
            memeface.style.transition = 'all 0.5s';
            memeface.style.opacity = '0';
            memeface.style.transform = 'scale(2) rotate(360deg)';
            setTimeout(() => memeface.remove(), 500);
        }, 1000);
    }
}, 2000);

// Random screen shake
function screenShake() {
    document.body.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
    setTimeout(() => {
        document.body.style.transform = 'none';
    }, 100);
}

setInterval(() => {
    if (Math.random() < 0.1) {
        screenShake();
    }
}, 5000);

// Random glitch overlay
function createGlitchOverlay() {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = `repeating-linear-gradient(
        ${Math.random() * 360}deg,
        rgba(255,0,0,0.1),
        rgba(0,255,0,0.1) 10px,
        rgba(0,0,255,0.1) 20px
    )`;
    overlay.style.mixBlendMode = 'difference';
    overlay.style.pointerEvents = 'none';
    overlay.style.zIndex = '9998';
    document.body.appendChild(overlay);
    
    setTimeout(() => overlay.remove(), 200);
}

setInterval(createGlitchOverlay, 5000);

// Initialize everything
window.addEventListener('load', () => {
    // Initial screen effect
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);

    // Random audio effects
    const audioEffects = [
        'https://www.myinstants.com/media/sounds/mlg-airhorn.mp3',
        'https://www.myinstants.com/media/sounds/wow.mp3',
        'https://www.myinstants.com/media/sounds/nope.mp3'
    ];

    setInterval(() => {
        if (Math.random() < 0.05) {
            const audio = new Audio(audioEffects[Math.floor(Math.random() * audioEffects.length)]);
            audio.volume = 0.2;
            audio.play();
        }
    }, 10000);
});

// Cookie popup functionality
function rickRoll() {
    // Create a full-screen overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = '#000';
    overlay.style.zIndex = '99999';
    document.body.appendChild(overlay);

    // Create and play Rick Roll video
    const video = document.createElement('iframe');
    video.width = '100%';
    video.height = '100%';
    video.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';
    video.allow = 'autoplay';
    video.style.border = 'none';
    overlay.appendChild(video);

    // Add a close button
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'X';
    closeBtn.style.position = 'fixed';
    closeBtn.style.right = '20px';
    closeBtn.style.top = '20px';
    closeBtn.style.zIndex = '100000';
    closeBtn.style.background = '#ff0000';
    closeBtn.style.color = '#fff';
    closeBtn.style.border = 'none';
    closeBtn.style.padding = '10px 20px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.fontFamily = 'Comic Sans MS';
    closeBtn.style.fontSize = '20px';
    closeBtn.onclick = () => {
        overlay.remove();
        closeBtn.remove();
    };
    document.body.appendChild(closeBtn);
}

// Handle cookie popup buttons
document.querySelectorAll('.cookie-buttons button').forEach(button => {
    button.addEventListener('click', () => {
        // Add glitch effect before Rick Roll
        document.body.style.filter = 'hue-rotate(360deg) blur(5px)';
        setTimeout(() => {
            document.body.style.filter = 'none';
            // Hide cookie popup with a glitch effect
            const popup = document.querySelector('.cookie-popup');
            popup.style.transform = 'translateX(-50%) scale(0)';
            popup.style.opacity = '0';
            // Trigger Rick Roll
            setTimeout(rickRoll, 500);
        }, 500);
    });
}); 