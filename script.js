const apiBase = "https://script.google.com/macros/s/AKfycbyg6tyFpoyqrnEZGczVInMyTt9FYg5kuPLx6K6sIF0BM-2QVF9fQFo8ZwUcgagNmk-5Yg/exec";

async function fetchSheet(sheetName) {
  const res = await fetch(`${apiBase}?sheet=${sheetName}`);
  return await res.json();
}

async function loadHeader() {
  const data = await fetchSheet("Header");
  const menu = document.getElementById("nav-menu");
  data.filter(e => e.status === "active").forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${item.link}">${item.ar_text}</a>`;
    menu.appendChild(li);
  });
}

async function loadHero() {
  const data = await fetchSheet("Hero Section");
  document.getElementById("hero-title").textContent = data.find(e => e.element === "hero_title").ar_text;
  document.getElementById("hero-subtitle").textContent = data.find(e => e.element === "hero_subtitle").ar_text;
  document.getElementById("cta-download").textContent = data.find(e => e.element === "cta_download").ar_text;
  document.getElementById("cta-contact").textContent = data.find(e => e.element === "cta_contact").ar_text;

  const slider = document.getElementById("hero-slider");
  data.filter(e => e.element.startsWith("slide")).forEach(slide => {
    const img = document.createElement("img");
    img.src = slide.image_url;
    slider.appendChild(img);
  });
}

async function loadTicker() {
  const data = await fetchSheet("TickerNews");
  const news = data.filter(n => n.status === "active").sort((a, b) => b.priority - a.priority);
  document.getElementById("ticker-news").textContent = news.map(n => n.news_text).join(" | ");
}

async function loadNews() {
  const data = await fetchSheet("News");
  const container = document.getElementById("news-container");
  data.filter(n => n.status === "published").forEach(post => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p><img src="${post.image_url}" alt="">`;
    container.appendChild(div);
  });
}

async function loadRates() {
  const data = await fetchSheet("ExchangeRates");
  const table = document.getElementById("rates-table");
  table.innerHTML = `<tr><th>العملة</th><th>شراء صنعاء</th><th>بيع صنعاء</th><th>شراء عدن</th><th>بيع عدن</th></tr>`;
  data.forEach(rate => {
    const row = `<tr><td>${rate.currency_name}</td><td>${rate.buy_price_sanaa}</td><td>${rate.sell_price_sanaa}</td><td>${rate.buy_price_aden}</td><td>${rate.sell_price_aden}</td></tr>`;
    table.innerHTML += row;
  });
}

loadHeader();
loadHero();
loadTicker();
loadNews();
loadRates();
