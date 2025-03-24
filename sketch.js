let button1, button2;
let sprite1, sprite2;
let currentSprite = null;
let frame1 = 0, frame2 = 0;
let iframe; // 用於存放 iframe 元素

function preload() {
  // 載入圖片精靈
  sprite1 = loadImage('all.png');
  sprite2 = loadImage('all2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight); // 調整畫布高度以容納圖片

  // 建立第一個按鈕
  button1 = createButton('自我介紹');
  button1.position(50, 50);
  button1.size(100, 50);
  button1.style('font-size', '20px');
  button1.mousePressed(() => {
    currentSprite = 'sprite1'; // 設定顯示第一個圖片精靈
    showIframe('https://chu0520.github.io/202503171/'); // 顯示第一個 iframe
  });

  // 建立第二個按鈕
  button2 = createButton('作品介紹');
  button2.position(180, 50);
  button2.size(100, 50);
  button2.style('font-size', '20px');
  button2.mousePressed(() => {
    currentSprite = 'sprite2'; // 設定顯示第二個圖片精靈
    showIframe('https://chu0520.github.io/202503103/'); // 顯示第二個 iframe
  });
}

function draw() {
  background(220);

  // 如果 currentSprite 為 null，不顯示任何圖片
  if (!currentSprite) {
    return;
  }

  if (currentSprite === 'sprite1') {
    // 顯示第一個圖片精靈動畫
    let sx = (frame1 % 10) * 106; // 計算切割的 x 座標
    image(sprite1, 50, 120, 106, 46, sx, 0, 106, 46);
    frame1++;
  } else if (currentSprite === 'sprite2') {
    // 顯示第二個圖片精靈動畫
    let sx = (frame2 % 30) * 172; // 計算切割的 x 座標
    image(sprite2, 50, 120, 172, 72, sx, 0, 172, 72);
    frame2++;
  }
}

function showIframe(url) {
  // 如果已經有 iframe，先移除
  if (iframe) {
    iframe.remove();
  }

  // 建立新的 iframe
  iframe = createElement('iframe');
  iframe.attribute('src', url);
  iframe.style('position', 'absolute');
  iframe.style('top', '20%'); // 顯示在視窗中間
  iframe.style('left', '10%');
  iframe.style('width', '80%'); // 寬為視窗的 80%
  iframe.style('height', '60%'); // 高為視窗的 60%
  iframe.style('border', '2px solid black'); // 加上邊框
  iframe.style('z-index', '1000'); // 確保在最上層
}