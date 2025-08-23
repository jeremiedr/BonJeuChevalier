/* ======================= CONSTANTES TIRS ENNEMIS ======================== */
const ENEMY_BULLET_RANGE = 75;   // distance que la balle ennemie peut parcourir
const ENEMY_BULLET_SPEED = 2.5;  // vitesse des balles ennemies (px/frame)
const ENEMY_SPAWN_OFFSET = 16;   // spawn 1 tuile devant le tireur (éviter les murs)

/* =========================== NIVEAUX (avec 'z') =========================== */

let level1 = [
  '                                                                           ',
  '                   c  S                                                    ',
  '     f            PPPPPPP     t       b                       FF           ',
  '    PPP                    F E       PPPP               PPPPPPPPPPP        ',
  '                           ggggg                p                          ',
  '       c            z  F  ddddddd                                          ', // +1 z
  '      PPP             PPP               g      PPP     c                   ',
  '                          b  S  f       dg            PPP                  ',
  ' b   fff   F         ggggggggggggggg    ddg                                ',
  'ggggggggggggg       gddddddddddddddd    dddg             S        F        ',
  'ddddddddddddd       ddddddddddddddddg   ddddgggggggggggggggggggggggggg     ',
  'ddddddddddddd       dddddddddddddddddg  dddddddddddddddddddddddddddddd     ',
  'ddddddddddddd       ddddddddddddddddd   dddddddddddddddddddddddddddddd     ',
  'ddddddddddddd       dddddddddddddccc     cccdddddddddddddddddddddddddd     ',
  'ddddddddddddd       dddddddddddddgggggggggggddddddddddddddddddddddddddddddd',
];

let level2 = [
  '                             E  F                                          ',
  '                           rrrrrrrrrr                                  z c ', // +1 z
  '                   p       S cc                                            ',
  '                    F     rrrrrrrr            ccc                          ',
  '                 rrrrr                      r rrrr                         ',
  '                                     z  rr rR                S c F         ', // +2 z total
  '         B S                       rr rrR                   rrrrrrr        ',
  '       rrrrrr                                                              ',
  '                                                                     M     ',
  '                                                                           ',
  '   S   B                                                                   ',
  'crrrrrrrrrr  rrrr   B         p            p                    p          ',
  'rRRRRRRRRRR  RRRRrrrrrrrFccccc ccc             B   S    M            F     ',
  'RRRRRRRRRRR  RRRRRRRRRRRrrrrrrrrrrrrrr   rrrrrrrrrrrrrrrrrr  rrrrrrrrrrrrrr',
  'RRRRRRRRRRR  RRRRcccF                    RRRRRRRRRRRRRRRRRR  RRRRRRRRRRRRRR',
  'RRRRRRRRRRR  RRRRrrrrrrrrrrrrrrrrrrrrrrrrRRRRRRRRRRRRRRRRRR  RRRRRRRRRRRRRR',
  'RRRRRRRRRRR  RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR  RRRRRRRRRRRRRR',
];

let level3 = [
  '                                                 p                                       ',
  '                                               B   F                                     ',
  '                                              ssssss                                     ',
  '                                        c          s                                     ',
  '                                  p    sss         D                                     ',
  '                             B    S            s   D                 p                   ',
  '                           ssssssssss         sD   Ds                  S                 ',
  '                   z  p                      sDD  sDDs             ssssss                ', // +1 z
  '                          S                 sDDDs  DDDs                        z  SB     ', // +2 z
  '                     sssssss               sDDDDcccDDDDs                      sssssssssss',
  '                                          sDDDDDcccDDDDDs  S   z    cc     sssDDDDDDDDDDD', // +3 z total
  '  F         B        S       S     ccc   sDDDDDDDDDDDDDDDsssss  sssssssssssDDDDDDDDcDDDDD',
  'sssssssssssssssssssssssss  ssssssssssssssDDDDDD  ccFDDDDDDDDDD  DDDDDDDDDDDDDDDDDDDcDDDDD',
  'DDDDDDDDDDDDDDDDDDDDDDDDD  DDDDDDDDDDDDDDDDDDDD  DDDDDDDDDDc      DDDDDDDDDDDDDDDDDcDDDDD',
  'DDDDF        ccccc              B           S       cccDDDDDDDDD         B      S ccFDDDD',
  'DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD',
];

/* ------------ NIVEAUX 4–5 ---------------- */

let level4 = [
  '                                                                                   ',
  '                   c         c         c                 E                          ',
  '         S       PPPP     PPPPPPPP   PPPPPP          PPPPP                          ',
  '                iiii       iiii        iiii                 c                       ',
  '       z  ggggggddddgggggggddddggg  ggddddggggggg F     S         p                 ', // +1 z
  '        gddddddddddddddddddddddddd  ddddddddddddddgg          z     PPP             ', // +2
  '      gddddd    c     S     c     S     c     dddddg         c     z  c            ', // +3
  '    gddd F PPPPPPP        PPPPP        PPPPP        dddg   PPPPPP   PPPPPP          ',
  '   gdd   iiii   iiiii  iiii   iiiii  iiii   iiiii    ddg        iiii       S       ',
  '  gdd  c      c      cc     c      cc     c      c    ddg   z  c      c            ', // +4 total
  ' gdd      S        S      S       S      S        S     ddg    S   S   S     F     ',
  ' gdd   PPPPP  PPPPP  PPPPP  PPPPP  PPPPP  PPPPP  PPPPP   ddg  PPPPPPPPPPP          ',
  ' gdd       iiii      iiii      iiii      iiii      iiii   ddg                       ',
  ' gddd   c      c  c      c  c      c  c      c  c      c  dddg          M          ',
  ' gddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddggggggggggggggggggggg ',
  ' dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd ',
];

let level5 = [
  '                                                                                   ',
  '                         S       c       c       c     c F                         ',
  '                         PPPPP t      PPPPP    PPPPP   PPPPP                        ',
  '                 S                                   S                 S            ', // +1
  '            PPPPP    c   PPPPPPPPPPPPPPPPPP    c   PPPPP    c   PPPPP              ',
  '         iiii   iiii     iiii   iiii     iiii   iiii     iiii   iiii        z      ', // +2
  '      PPP            PPP            PPP            PPP            PPP               ',
  '        z     c   S          c   S          c   S          c   S   z             z  ', // +4
  '   p     PPPPPPPPPPP  PPPPPPPPPPP  PPPPPPPPPPP  PPPPPPPPPPP  PPPPPPPPPPP           ',
  '             iiii        iiii        iiii        iiii        iiii                  ',
  '     c   c         c  c        c  c        c  c        c  c        c              ',
  '        S     S     S     S     S     S     S     S     S     S     S             ',
  '   PPPPP  PPPPP  PPPPP  PPPPP  PPPPP  PPPPP  PPPPP  PPPPP  PPPPP  PPPPP           ',
  '      z  c        c     F  c        c        c        c        c        c   F  z  ', // +6 total
  ' gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg        ',
  ' ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd        ',
];

/* ------------ NIVEAUX 6–10 ---------------- */

let level6 = [
  '                                                                                   ',
  '        z    c      c        c             c         c                         z   ', // +2
  '        PPPPPPP  PPPPPPP  PPPPPPP    PPPPPPP   PPPPPPP   PPPP                       ',
  '                 iiii         iiii      iiii      iiii                             ',
  '   z     S     gddddgggggggggddddgggggggddddggggggddddg       S                z    ', // +4
  '             gdddddddddddddddddddddddddddddddddddddddddgg                           ',
  '    c  z  gddd   c   S   c      c     S     c   S   c   ddg    c         c         ', // +5
  '   PPPP  gdd    PPPPPPP      PPPPP         PPPPP      PPP  dg  PPPP    PPPP        ',
  '         gdd   iiii   iiii  iiii   iiii  iiii   iiii        dg        iiii         ',
  '    S    gdd c     c     c c    c     c c    c     c   c    dg   S          z      ', // +6 total
  '   PPPP  gdd    S     S      S     S      S     S      S    dg  PPPP    F          ',
  'F        gddd  PPPPP  PPPPP  PPPPP  PPPPP  PPPPP  PPPPP                  F          ',
  '          gddddddddddddddddddddddddddddddddddddddddddddddgggggggggggggggggggggg     ',
  '           ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd      ',
];

let level7 = [
  '                                                                                   ',
  '                 z                c     c     c                               z     ', // +2
  '                             PPPPPPPPPPPPP   PPPPP                                 ',
  '           z        S                                                   S      z    ', // +4
  '                 PPPPP           M        M        M          PPPPP                 ',
  '            iiii       iiii   PPPPP   PPPPP   PPPP     iiii         iiii     z     ', // +5
  '         PPP       PPP       PPP       PPP       PPP        PPP       PPP          ',
  '        z        c     c     c     c     c     c     c                        F    ', // +6
  '        S     PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP     S      z        ', // +7 total
  '              iiii    iiii    iiii    iiii    iiii    iiii                          ',
  '       gggggggddddggggddddggggddddggggddddggggddddggggddddgggggggggggggg           ',
  '      gdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddgg         ',
  '      ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd        ',
];

let level8 = [
  '                                                                                   ',
  '   z        c   c   c     c   c   c      c   c   c                     z            ', // +2
  '       PPPPPPPPPPPPPPP  PPPPPPPPPPPPPPPPPPPPPPPP  PPPPPPPPPPP                       ',
  '          z          S      S      S      S      S                 z                ', // +4
  '         iiii   iiii    iiii   iiii    iiii   iiii    iiii   iiii                   ',
  '   ggggggddddggggddddggggddddggggddddggggddddggggddddggggddddggggg                  ',
  '  gddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddgg               ',
  ' gddd   c   S   c   S   c   S   c   S   c   S   c   S   c   S   c    z              ', // +5
  ' gdd   PPPPP  PPPPP  PPPPP  PPPPP  PPPPP  PPPPP  PPPPP  PPPPP  PPPPP  dg           ',
  ' gdd z    iiii   iiii   iiii   iiii   iiii   iiii   iiii   iiii      dg     z      ', // +7
  ' gdd   c      c      c      c      c      c      c      c      c   F  dg      z    ', // +8 total
  ' gdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddg            ',
  ' ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd            ',
];

let level9 = [
  '                                                                                   ',
  '      z                        c        c        c                           z      ', // +2
  '                            PPPPP    PPPPP    PPPPP                                 ',
  '          z              S                                   z              S   z    ', // +5
  '                      PPPPP      PPPPPPPP         PPPPP                           F ',
  '                   iiii   iiii   iiii   iiii   iiii   iiii                         ',
  '        z       PPP       PPP       PPP       PPP       PPP          z              ', // +7
  '             c     c   c     c   c     c   c     c   c     c                        ',
  '          PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP                      ',
  '        gdddddddddddddddddddddddddddddddddddddddddddddddddddddddg                   ',
  '   z   gddd            S            S            S            S    dg      z        ', // +9 total
  '       gdd        PPPPPPPPP   PPPPPPPPP   PPPPPPPPP   PPPPPPPPP   dg                ',
  '       gdd    c      iiii       iiii         iiii       iiii      dg                ',
  '       gdd      PPPPP    PPPPP     PPPPP   PPPP    PPPPP     PPPPP dg               ',
  '       gddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddg               ',
  '       ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd              ',
];

let level10 = [
  '                                                                                   ',
  '     z             c   c   c   c       c   c   c   c                         z      ', // 2
  '            PPPPP  PPPPP  PPPPP  PPPPP  PPPPP  PPPPP  PPPPP                         ',
  '    z   S        S        S                 S        S        S          z          ', // +3 => 5
  '      iiii    iiii    iiii    iiiiiiiiiiii    iiii    iiii    iiii                  ',
  '   PPP   PPP   PPP   PPP   PPP   PPP   PPP   PPP   PPP   PPP   PPP                  ',
  ' z  c  S  c  S  c  S  c  S  c  S  c  S  c  S  c  S  c  S  c  S  c     z            ', // +2 => 7
  '   PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP                  ',
  '   z      iiii   iiii   iiii   iiii   iiii   iiii   iiii   iiii          z          ', // +2 => 9
  '   c   c       c      c       c      c       c      c       c      c     F     z    ', // +1 => 10
  ' gggggggggggggggggzgggggggggggggggzggggggggggggggzgggggggggggggggggggg             ',
  ' ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd            ',
];

let levels = [level1, level2, level3, level4, level5, level6, level7, level8, level9, level10];

/* ============================= ASSETS & AUDIO ============================= */

function preload() {
  playerImage = loadImage('assets/sprites/knight.png');
  worldImage = loadImage('assets/sprites/world_tileset.png');
  platformsImage = loadImage('assets/sprites/platforms.png');
  coinsImage = loadImage('assets/sprites/coin.png');
  slime_greenImage = loadImage('assets/sprites/slime_green.png');
  slime_purpleImage = loadImage('assets/sprites/slime_purple.png');

  jumpSound = loadSound('assets/sounds/jump.wav');
  coinSound = loadSound('assets/sounds/coin.wav');
  eatSound  = loadSound('assets/sounds/power_up.wav');

  // --- Musique & sons actions ---
  bgMusic   = loadSound('assets/sounds/music.mp3');
  tapSound  = loadSound('assets/sounds/tap.wav');
  bombSound = loadSound('assets/sounds/bomb.wav'); // son de bombe
  hitSound = loadSound('assets/sounds/hit.mp3');
}

// --- Audio globaux ---
let bgMusic, tapSound, coinSound, jumpSound, eatSound, bombSound, hitSound;
let musicVolume = 0.5;
let isMuted = false;

// === Nouvelle habileté : DOUBLE SAUT ===
let maxJumps = 2;
let jumpsLeft = maxJumps;

/* =============================== GAMEPAD PS4 =============================== */
// Indices standards Gamepad API (DualShock 4)
const PS4_BTN = {
  CROSS: 0,   // saut
  CIRCLE: 1,  // bombe
  SQUARE: 2,  // tir
  TRIANGLE: 3,// dash
  L1: 4, R1: 5,
  L2: 6, R2: 7,
  SHARE: 8, OPTIONS: 9,
  L3: 10, R3: 11,
  DPAD_UP: 12, DPAD_DOWN: 13, DPAD_LEFT: 14, DPAD_RIGHT: 15,
};
const DEADZONE = 0.2;

let gpIndex = null;
let gpConnected = false;
let prevButtons = [];

// Détection connexion/déconnexion
window.addEventListener('gamepadconnected', (e) => {
  gpIndex = e.gamepad.index;
  gpConnected = true;
  prevButtons = e.gamepad.buttons.map(b => (b.value || 0) > 0.5 || b.pressed);
});
window.addEventListener('gamepaddisconnected', (e) => {
  if (gpIndex === e.gamepad.index) {
    gpIndex = null;
    gpConnected = false;
    prevButtons = [];
  }
});

// Lecture normalisée du gamepad (retourne les "presses")
function pollGamepad() {
  const pads = navigator.getGamepads ? navigator.getGamepads() : [];
  const gp = (gpIndex != null) ? pads[gpIndex] : pads.find(p => p);
  if (!gp) return { moveX: 0, jumpPress: false, shootPress: false, dashPress: false, bombPress: false };

  const curButtons = gp.buttons.map(b => (b.value || 0) > 0.5 || b.pressed);
  const wasPressed = (i) => !!curButtons[i] && !prevButtons[i];

  const ax = gp.axes?.[0] || 0; // stick gauche X
  let moveX = Math.abs(ax) > DEADZONE ? ax : 0;

  // D-Pad override si pressé
  if (curButtons[PS4_BTN.DPAD_LEFT])  moveX = -1;
  if (curButtons[PS4_BTN.DPAD_RIGHT]) moveX =  1;

  const out = {
    moveX,
    jumpPress:  wasPressed(PS4_BTN.CROSS),
    shootPress: wasPressed(PS4_BTN.SQUARE) || wasPressed(PS4_BTN.R1), // bonus R1 = tir
    dashPress:  wasPressed(PS4_BTN.TRIANGLE),
    bombPress:  wasPressed(PS4_BTN.CIRCLE),
  };

  // mémoriser l'état pour les prochains "presses"
  prevButtons = curButtons;
  return out;
}

/* =============================== SETUP WORLD ============================== */

let slimes, shooters, enemyBullets, tiles, box, btn;
let bombs = 3; // Bombes disponibles au début de la partie

// --- ÉTAT DASH (correctif) ---
let isDashing = false;
let dashEnd = 0;
const DASH_SPEED = 6;
const DASH_DURATION_MS = 500;

function setup() {
  // Canvas p5play si dispo, sinon fallback p5
const w = Math.floor(innerWidth / 4);
const h = Math.floor(innerHeight / 4);

if (window.Canvas) {
  new Canvas(w, h, 'pixelated x4');                    // p5play v3 (Canvas global)
} else if (window.p5play && window.p5play.Canvas) {
  new window.p5play.Canvas(w, h, 'pixelated x4');       // certaines builds exposent via p5play.Canvas
} else {
  // Fallback p5 « pur » — rendu pixel-art
  const c = createCanvas(w, h);
  pixelDensity(1);
  noSmooth();
  if (c && c.elt) c.elt.style.imageRendering = 'pixelated';
}

  // Joueur
  box = new Sprite();
  box.x = 500;
  box.y = 10;
  box.rotationLock = true;
  box.color = 'red';
  box.width = 11;
  box.height = 12;
  box.anis.offset.y = -4;
  box.spriteSheet = playerImage;
  box.addAnis({
    idle: { w: 32, h: 32, col: 0, row: 0, frames: 4, framesDelay: 150 },
    run:  { w: 32, h: 32, col: 0, row: 2, frames: 16 },
    hit:  { w: 32, h: 32, col: 0, row: 6, frames: 4 },
    dash: { w: 32, h: 32, col: 0, row: 5, frames: 8, frameDelay: 2 },
  });
  box.debug = false;
  box.coins = 0;
  box.vies = 3;

  /* --- Slimes verts (melee) --- */
  slimes = new Group();
  slimes.x = 650;
  slimes.y = 10;
  slimes.w = 12;
  slimes.h = 14;
  slimes.tile = 'S';
  slimes.spriteSheet = slime_greenImage;
  slimes.anis.offset.y = -4;
  slimes.rotationLock = true;
  slimes.addAnis({
    idle:  { w: 24, h: 24, col: 0, row: 1, frames: 4 },
    spawn: { w: 24, h: 24, col: 0, row: 0, frames: 4 },
    hurt:  { w: 24, h: 24, col: 0, row: 2, frames: 4 },
  });

  /* --- Tireurs violets --- */
  shooters = new Group();
  shooters.w = 12;
  shooters.h = 14;
  shooters.tile = 'z';
  shooters.spriteSheet = slime_purpleImage;
  shooters.anis.offset.y = -4;
  shooters.rotationLock = true;
  shooters.addAnis({
    idle:  { w: 24, h: 24, col: 0, row: 1, frames: 4 },
    spawn: { w: 24, h: 24, col: 0, row: 0, frames: 4 },
    hurt:  { w: 24, h: 24, col: 0, row: 2, frames: 4 },
  });

  /* --- Sols / décor --- */
  grass = new Group();
  grass.collider = 'static';
  grass.w = 16; grass.h = 16;
  grass.spriteSheet = worldImage;
  grass.addAni({ col: 0, row: 0, w: 16, h: 16 });
  grass.tile = 'g';

  sand = new Group();
  sand.collider = 'static';
  sand.w = 16; sand.h = 16;
  sand.spriteSheet = worldImage;
  sand.addAni({ col: 4, row: 0, w: 16, h: 16 });
  sand.tile = 's';

  Sand = new Group();
  Sand.collider = 'static';
  Sand.w = 16; Sand.h = 16;
  Sand.spriteSheet = worldImage;
  Sand.addAni({ col: 4, row: 1, w: 16, h: 16 });
  Sand.tile = 'D';

  rock = new Group();
  rock.collider = 'static';
  rock.w = 16; rock.h = 16;
  rock.spriteSheet = worldImage;
  rock.addAni({ col: 2, row: 0, w: 16, h: 16 });
  rock.tile = 'r';

  Rock = new Group();
  Rock.collider = 'static';
  Rock.w = 16; Rock.h = 16;
  Rock.spriteSheet = worldImage;
  Rock.addAni({ col: 2, row: 1, w: 16, h: 16 });
  Rock.tile = 'R';

  dirt = new Group();
  dirt.collider = 'static';
  dirt.w = 16; dirt.h = 16;
  dirt.spriteSheet = worldImage;
  dirt.addAni({ col: 0, row: 1, w: 16, h: 16 });
  dirt.tile = 'd';
  dirt.friction = 1;

  sign = new Group();
  sign.collider = 'none';
  sign.w = 16; sign.h = 16;
  sign.spriteSheet = worldImage;
  sign.addAni({ col: 8, row: 3, w: 16, h: 16 });
  sign.tile = 'E';
  sign.message1 = 'RAMASSEZ TOUS LES COINS — DOUBLE SAUT (↑). M=Mute';

  bush = new Group();
  bush.collider = 'none';
  bush.w = 16; bush.h = 16;
  bush.spriteSheet = worldImage;
  bush.addAni({ col: 1, row: 3, w: 16, h: 16 });
  bush.tile = 'b';

  tree = new Group();
  tree.collider = 'none';
  tree.w = 16; tree.h = 16;
  tree.spriteSheet = worldImage;
  tree.addAni({ col: 0, row: 1, w: 16, h: 48 });
  tree.tile = 't';

  Bush = new Group();
  Bush.collider = 'none';
  Bush.w = 16; Bush.h = 16;
  Bush.spriteSheet = worldImage;
  Bush.addAni({ col: 5, row: 6, w: 16, h: 16 });
  Bush.tile = 'B';

  flower = new Group();
  flower.collider = 'none';
  flower.w = 16; flower.h = 16;
  flower.spriteSheet = worldImage;
  flower.addAni({ col: 1, row: 6, w: 16, h: 16 });
  flower.tile = 'f';

  palmtree = new Group();
  palmtree.collider = 'none';
  palmtree.w = 32; palmtree.h = 64;
  palmtree.spriteSheet = worldImage;
  palmtree.addAni({ col: 1.25, row: 1, w: 32, h: 64 });
  palmtree.tile = 'p';

  platforms = new Group();
  platforms.collider = 'static';
  platforms.w = 16; platforms.h = 16;
  platforms.spriteSheet = platformsImage;
  platforms.addAni({ col: 0, row: 0, w: 16, h: 16 });
  platforms.tile = 'P';
  platforms.friction = 1;

  coins = new Group();
  coins.collider = 'none';
  coins.w = 16; coins.h = 16;
  coins.spriteSheet = coinsImage;
  coins.addAni({ col: 0, row: 0, w: 16, h: 16, frames: 12 });
  coins.tile = 'c';

  fruits = new Group();
  fruits.collider = 'none';
  fruits.w = 16; fruits.h = 16;
  fruits.spriteSheet = worldImage;
  fruits.addAni({ col: 4, row: 8, w: 16, h: 16 });
  fruits.tile = 'F';

  ice = new Group();
  ice.collider = 'static';
  ice.w = 16; ice.h = 16;
  ice.spriteSheet = worldImage;
  ice.addAni({ col: 6, row: 2, w: 16, h: 16 });
  ice.tile = 'i';
  ice.friction = 0.01;

  Mushroom = new Group();
  Mushroom.collider = 'static';
  Mushroom.w = 16; Mushroom.h = 16;
  Mushroom.spriteSheet = worldImage;
  Mushroom.addAni({ col: 7, row: 8, w: 16, h: 16 });
  Mushroom.tile = 'M';

  // Projectiles ennemis : cinématiques, sans gravité
  enemyBullets = new Group();
  enemyBullets.collider = 'kinematic';
  enemyBullets.d = 3;
  enemyBullets.rotationLock = true;
  enemyBullets.gravityScale = 0;

  // Construire le premier niveau puis initialiser les acteurs dépendants
  tiles = new Tiles(levels[0], 0, 0, 16, 16);
  initActorsForLevel();

  world.gravity.y = 9.81;

  // Bouton PLAY (débloque l'audio)
  btn = createButton('PLAY');
  btn.position(innerWidth / 2 - 200 / 2, innerHeight / 2 - 100 / 2);
  btn.size(300, 150);
  btn.mousePressed(() => {
    if (typeof userStartAudio === 'function') userStartAudio();
    if (bgMusic && !bgMusic.isPlaying()) {
      bgMusic.setLoop(true);
      bgMusic.setVolume(isMuted ? 0 : musicVolume);
      bgMusic.play();
    }
    loop();
    btn.remove();
  });
  noLoop();
}

/* --- Initialise les slimes & shooters APRÈS new Tiles(...) --- */
function initActorsForLevel() {
  for (let s of slimes) s.changeAni('idle');

  for (let z of shooters) {
    z.changeAni('idle');
    z.shootCooldown = 1100 + random(-250, 250); // ms
    z.lastShot = 0;                              // timestamp ms
    // Portée d'engagement (distance à laquelle l'ennemi décide de tirer)
    z.range = ENEMY_BULLET_RANGE;                // cohérent avec la portée des balles
  }
}

/* ============================= ETATS & NIVEAUX ============================ */

let currentLevel = 0;
function changeLevel() {
  if (currentLevel >= levels.length - 1) {
    youWin();
  }
  currentLevel++;
  tiles.remove();
  tiles = new Tiles(levels[currentLevel], 0, 0, 16, 16);
  box.x = 500;
  box.y = 10;
  jumpsLeft = maxJumps;
  initActorsForLevel();
}

/* ================================ GAME LOOP =============================== */

function draw() {
  background(120, 200, 255);

  if (coins.length <= 0) changeLevel();

  // Reset double saut si au sol / champignon
  if (box.colliding(tiles) || box.colliding(Mushroom)) jumpsLeft = maxJumps;

  // --- Musique ---
  if (kb.presses('m')) { isMuted = !isMuted; if (bgMusic) bgMusic.setVolume(isMuted ? 0 : musicVolume, 0.1); }
  if (kb.presses(']')) { musicVolume = Math.min(1, musicVolume + 0.1); if (bgMusic && !isMuted) bgMusic.setVolume(musicVolume, 0.1); }
  if (kb.presses('[')) { musicVolume = Math.max(0, musicVolume - 0.1); if (bgMusic && !isMuted) bgMusic.setVolume(musicVolume, 0.1); }

  /* --- SLIMES (IA simple) --- */
  for (let slime of slimes) {
    if (!box.overlapping(bush)) slime.moveTowards(box.x, undefined, 0.01);
    if (slime.colliding(tiles) && random() < 0.008) slime.vel.y = -5.25;

    if (box.collides(slime)) {
      box.moveAway(slime, 0.5);
      slime.moveAway(box, 0.75);
      box.changeAni('hit');
	  hitSound.play();
      setTimeout(() => box.changeAni('idle'), 500);
      box.vies -= 1;
    }
  
  }

  /* --- TIREURS violets --- */
  let now = millis();
  for (let z of shooters) {
    z.mirror.x = (box.x < z.x);

    const dx = box.x - z.x;
    const dy = box.y - z.y;
    const dist = Math.hypot(dx, dy) || 1;

    if (dist <= z.range && now - z.lastShot >= z.shootCooldown) {
      // direction normalisée
      const nx = dx / dist, ny = dy / dist;

      // spawn 1 tuile devant (éviter murs/corps)
      const b = new enemyBullets.Sprite();
      b.x = z.x + nx * ENEMY_SPAWN_OFFSET;
      b.y = z.y + ny * ENEMY_SPAWN_OFFSET;

      // vitesse + durée de vie pour ~ENEMY_BULLET_RANGE
      b.vel.x = nx * ENEMY_BULLET_SPEED;
      b.vel.y = ny * ENEMY_BULLET_SPEED;
      b.life  = Math.ceil(ENEMY_BULLET_RANGE / ENEMY_BULLET_SPEED);

      // si spawn dans une tuile, pousse un peu
      for (let i = 0; i < 3 && b.overlapping(tiles); i++) {
        b.x += nx * 2;
        b.y += ny * 2;
      }

      // contacts
      b.overlaps(tiles, () => b.remove());
      b.overlaps(box, () => {
        if (!box.isDead) {
          box.vies -= 1;
          box.changeAni('hit');
		  hitSound.play();
          setTimeout(() => box.changeAni('idle'), 300);
        }
        b.remove();
      });

      z.lastShot = now;
    }
  }

  // --- BOMBE (clavier) ---
  if (kb.presses('z')) detonateBomb();

  // === GAMEPAD INPUT ===
  const gp = pollGamepad();

  // BOMBE (manette : Rond)
  if (gp.bombPress) detonateBomb();

  // Déplacement (priorité clavier; sinon manette) — ignoré pendant le dash
  const kbLeft  = kb.pressing('left');
  const kbRight = kb.pressing('right');

  if (!isDashing) {
    if (kbLeft || kbRight) {
      if (kbLeft)  { box.vel.x = -2; box.mirror.x = true;  box.changeAni('run'); }
      if (kbRight) { box.vel.x =  2; box.mirror.x = false; box.changeAni('run'); }
    } else if (Math.abs(gp.moveX) > 0) {
      box.vel.x = gp.moveX * 2; // vitesse comme clavier
      box.mirror.x = (gp.moveX < 0);
      box.changeAni('run');
    } else {
      if (box.ani.name != 'hit' && box.ani.name != 'dash') box.changeAni('idle');
      box.vel.x = 0; // repos horizontal quand pas d'input
    }
  }

  // DASH (clavier Y) ou (manette Triangle) — CORRECTIF: dash persistant
  if (kb.presses('y') || gp.dashPress) {
    // Choix de la direction au moment du dash
    let dir = 0;
    if (kbLeft || (Math.abs(gp.moveX) > 0 && gp.moveX < 0)) dir = -1;
    else if (kbRight || gp.moveX > 0) dir = 1;
    else dir = box.mirror.x ? -1 : 1;

    box.mirror.x = (dir < 0);
    box.vel.x = dir * DASH_SPEED;
    isDashing = true;
    dashEnd = millis() + DASH_DURATION_MS;

    box.changeAni('dash');
    setTimeout(() => box.changeAni('idle'), DASH_DURATION_MS);
  }

  // Maintien de la vitesse pendant le dash (jusqu'à expiration)
  if (isDashing) {
    // verrouille la vitesse horizontale du dash
    box.vel.x = (box.mirror.x ? -1 : 1) * DASH_SPEED;
    if (millis() > dashEnd) {
      isDashing = false;
    }
  }

  // TIR (clavier Espace) ou (manette Carré/R1)
  if (kb.presses('space') || gp.shootPress) shoot();

  // SAUT (clavier ↑) ou (manette Croix)
  if (kb.presses('up') || gp.jumpPress) {
    if (box.colliding(tiles) || jumpsLeft > 0) {
      box.vel.y = -4.5;
      if (jumpSound) jumpSound.play();
      if (!box.colliding(tiles)) jumpsLeft--;
    }
  }

  // Champignon rebond
  if (box.colliding(Mushroom)) {
    box.vel.y = -7;
    if (jumpSound) jumpSound.play();
  }

  // Collecte
  for (let fruit of fruits) if (box.overlaps(fruit)) { fruit.remove(); box.vies++; if (eatSound)  eatSound.play(); }
  for (let coin  of coins)  if (box.overlaps(coin))  { coin.remove(); box.coins++; if (coinSound) coinSound.play(); }

  // Caméra
  camera.x = box.x;
  camera.y = box.y;
  postProcess();
  // Conditions de fin
  if (box.y > 1000 || box.vies <= 0) gameOver();
}

/* ================================ HUD/POST ================================ */

function postProcess() {
  push();
  camera.off();          // ← désactive la transform de caméra pour dessiner en écran
  noStroke();
  fill(255);             // texte blanc
  textSize(12);

  // --- HUD haut droite ---
  textAlign(RIGHT, TOP);
  text('niveau ' + (currentLevel + 1) + '/' + levels.length, width - 5, 5);
  text('bombes: ' + bombs, width - 5, 22);

  // --- HUD haut gauche ---
  textAlign(LEFT, TOP);
  text('coins: ' + box.coins, 5, 5);
  text('vies: ' + box.vies, 5, 22);
  text('sauts: ' + Math.max(0, jumpsLeft), 5, 39);
  text('musique: ' + (isMuted ? 'OFF (M)' : (musicVolume.toFixed(1) + ' (M/[/])')), 5, 56);

  // Panneau d’infos centré (optionnel)
  if (box.overlapping(sign)) {
    textAlign(CENTER, CENTER);
    text(sign.message1, width / 2, height / 2 + 20);
  }

  pop();
}


/* ================================= BOMBE ================================= */

function detonateBomb() {
  if (bombs <= 0) return;
  bombs--;
  if (bombSound) bombSound.play(); // son de bombe

  // Rectangle visible (viewport) en coordonnées monde
  const halfW = width / 2;
  const halfH = height / 2;
  const left   = camera.x - halfW;
  const right  = camera.x + halfW;
  const top    = camera.y - halfH;
  const bottom = camera.y + halfH;

  const toKill = [];

  for (let s of slimes)   if (s.x >= left && s.x <= right && s.y >= top && s.y <= bottom) toKill.push(s);
  for (let z of shooters) if (z.x >= left && z.x <= right && z.y >= top && z.y <= bottom) toKill.push(z);

  for (let e of toKill) e.remove();
}

/* =============================== TIRS JOUEUR ============================== */

function shoot() {
  if (tapSound) tapSound.play();

  const p = new Sprite();
  p.x = box.x + (box.mirror.x ? -2 : 2);
  p.y = box.y;
  p.vel.x = box.mirror.x ? -8 : 8;
  p.d = 3;

  p.collides(tiles, () => setTimeout(() => p.remove(), 1000));

  for (let slime of slimes) {
    p.collides(slime, async () => {
      slime.moveAway(p, 1);
      await slime.changeAni('hurt');
      await delay(400);
      slime.remove();
    });
  }

  for (let z of shooters) {
    p.collides(z, async () => {
      z.moveAway(p, 1);
      await z.changeAni('hurt');
      await delay(400);
      z.remove();
    });
  }
}

/* ============================== FIN DE PARTIE ============================= */

function gameOver() {
  if (bgMusic && bgMusic.isPlaying()) { bgMusic.setVolume(0, 1.0); setTimeout(() => bgMusic.stop(), 1100); }

  push();
  camera.off();                // désactive la transform de caméra
  noStroke();
  fill(0);
  tiles.remove();
  slimes.removeAll?.();
  shooters.removeAll?.();
  enemyBullets.removeAll?.();
  box.remove();
  rect(0, 0, width, height);   // maintenant ça couvre bien tout l’écran
  fill(255, 100, 100);
  textSize(16);
  textAlign(CENTER);
  text('GAME OVER', width / 2, height / 2);
  pop();

  noLoop();
}

function youWin() {
  if (bgMusic && bgMusic.isPlaying()) { bgMusic.setVolume(0, 1.0); setTimeout(() => bgMusic.stop(), 1100); }
  fill(0); rect(0, 0, width, height);
  fill(100, 255, 100); textSize(16); textAlign(CENTER); text('YOU WIN', width / 2, height / 2);
  noLoop();
}
