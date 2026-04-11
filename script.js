// ============================
// DATA
// ============================
const PRODUCTS = [
  // MOBILES
  { id:1, name:'Samsung Galaxy S24 Ultra 5G (Titanium Black, 12GB RAM, 256GB)', price:109999, orig:124999, disc:12, rating:4.5, reviews:28743, cat:'mobiles', emoji:'📱', badge:'NEW', highlights:['200MP Camera','Snapdragon 8 Gen 3','5000mAh Battery','S Pen included'] },
  { id:2, name:'Apple iPhone 16 Pro Max (Desert Titanium, 256GB)', price:154900, orig:189900, disc:18, rating:4.7, reviews:15231, cat:'mobiles', emoji:'📱', badge:'HOT', highlights:['A18 Pro chip','Titanium design','48MP Camera system','USB-C 3.0'] },
  { id:3, name:'OnePlus 13 5G (Arctic Dawn, 16GB RAM, 512GB)', price:69999, orig:79999, disc:12, rating:4.4, reviews:9821, cat:'mobiles', emoji:'📱', highlights:['Snapdragon 8 Elite','100W SUPERVOOC','50MP Triple camera','Hasselblad tuned'] },
  { id:4, name:'Redmi Note 13 Pro+ 5G (Midnight Black, 8GB+256GB)', price:29999, orig:39999, disc:25, rating:4.3, reviews:42103, cat:'mobiles', emoji:'📱', badge:'SALE', highlights:['200MP ISOCELL','Dimensity 7200 Ultra','120Hz AMOLED','67W fast charge'] },
  { id:5, name:'Poco X6 Pro 5G (Black, 12GB RAM, 256GB)', price:21999, orig:27999, disc:21, rating:4.2, reviews:18234, cat:'mobiles', emoji:'📱', highlights:['Dimensity 8300-Ultra','144Hz AMOLED','67W turbo charge','5000mAh battery'] },
  { id:6, name:'Motorola Edge 50 Pro (Black Beauty, 12GB+256GB)', price:31999, orig:39999, disc:20, rating:4.1, reviews:7612, cat:'mobiles', emoji:'📱', highlights:['pOLED curved display','50MP triple camera','125W TurboPower','Snapdragon 7s Gen 2'] },
  { id:7, name:'Realme GT 6 5G (Fluid Silver, 12GB+256GB)', price:41999, orig:49999, disc:16, rating:4.3, reviews:5421, cat:'mobiles', emoji:'📱', highlights:['Snapdragon 8s Gen 3','100W SUPERVOOC','50MP Sony camera','AI features'] },
  { id:8, name:'iQOO Z9x 5G (Storm Grey, 8GB+128GB)', price:13999, orig:17999, disc:22, rating:4.2, reviews:31204, cat:'mobiles', emoji:'📱', badge:'BUDGET', highlights:['Snapdragon 6 Gen 1','6000mAh battery','44W FlashCharge','120Hz LCD'] },

  // ELECTRONICS
  { id:9, name:'Apple MacBook Air M3 (13-inch, 8GB, 256GB SSD)', price:114900, orig:134900, disc:15, rating:4.8, reviews:8721, cat:'electronics', emoji:'💻', badge:'HOT', highlights:['Apple M3 chip','18hr battery','Liquid Retina Display','MagSafe charging'] },
  { id:10, name:'Dell XPS 15 (Intel Core i9, 32GB, 1TB SSD, 4K)', price:189990, orig:219990, disc:14, rating:4.6, reviews:3241, cat:'electronics', emoji:'💻', highlights:['12th Gen Intel i9','OLED 4K display','NVIDIA RTX 4070','Thunderbolt 4'] },
  { id:11, name:'Sony WH-1000XM5 Wireless Headphones (Black)', price:24990, orig:34990, disc:29, rating:4.7, reviews:21043, cat:'electronics', emoji:'🎧', badge:'DEAL', highlights:['Industry-leading ANC','30hr battery','Multipoint connection','LDAC Hi-Res audio'] },
  { id:12, name:'Samsung 65" 4K QLED Smart TV (Q70C Series)', price:82990, orig:129900, disc:36, rating:4.5, reviews:7821, cat:'electronics', emoji:'📺', highlights:['QLED 4K HDR','120Hz refresh rate','Quantum Processor 4K','SmartThings hub'] },
  { id:13, name:'Canon EOS R50 Mirrorless Camera (White, 18-45mm)', price:72995, orig:84995, disc:14, rating:4.6, reviews:4312, cat:'electronics', emoji:'📷', highlights:['24.2MP APS-C sensor','Dual Pixel AF','4K video','Wi-Fi & Bluetooth'] },
  { id:14, name:'Logitech MX Master 3S Wireless Mouse (Graphite)', price:8995, orig:11995, disc:25, rating:4.7, reviews:15678, cat:'electronics', emoji:'🖱️', highlights:['MagSpeed scroll','8000 DPI','Quiet clicks','Multi-device'] },
  { id:15, name:'iPad Air M2 Wi-Fi 256GB (Blue)', price:84900, orig:99900, disc:15, rating:4.7, reviews:9834, cat:'electronics', emoji:'📟', badge:'NEW', highlights:['Apple M2 chip','11" Liquid Retina','5G ready','Apple Pencil Pro compatible'] },
  { id:16, name:'Boat Airdopes 141 TWS Earbuds (Bold Black)', price:999, orig:2990, disc:67, rating:4.1, reviews:189234, cat:'electronics', emoji:'🎧', badge:'HOT', highlights:['42hr playback','10mm drivers','IPX4 water resistant','Fast charge'] },

  // FASHION
  { id:17, name:'Men\'s Regular Fit Cotton Shirt (Navy Blue, XL)', price:599, orig:1499, disc:60, rating:4.2, reviews:8234, cat:'fashion', emoji:'👔', badge:'60%OFF', highlights:['100% cotton','Regular fit','Machine washable','4 colors available'] },
  { id:18, name:'Women\'s Kurta Set with Dupatta (Floral Print, M)', price:799, orig:2199, disc:64, rating:4.3, reviews:12341, cat:'fashion', emoji:'👗', highlights:['Rayon fabric','Floral print','Includes dupatta','Free size available'] },
  { id:19, name:'Levi\'s 511 Slim Fit Jeans (Dark Blue, 32W)', price:2099, orig:3999, disc:48, rating:4.5, reviews:34521, cat:'fashion', emoji:'👖', badge:'BRAND', highlights:['99% cotton','Slim fit','Dark wash','Machine washable'] },
  { id:20, name:'Nike Air Max 270 Running Shoes (Black/White, 9)', price:8995, orig:12995, disc:31, rating:4.6, reviews:18732, cat:'fashion', emoji:'👟', highlights:['Air cushioning','Breathable mesh','Flex grooves','True to size'] },
  { id:21, name:'Fastrack Analog-Digital Watch for Men (Black)', price:1795, orig:4995, disc:64, rating:4.1, reviews:22341, cat:'fashion', emoji:'⌚', badge:'DEAL', highlights:['Water resistant','Day & date display','Backlight','2yr warranty'] },
  { id:22, name:'H&M Women\'s Wide Leg Trousers (Beige, S)', price:1699, orig:2999, disc:43, rating:4.3, reviews:7821, cat:'fashion', emoji:'👗', highlights:['High waist','Lyocell blend','Crease resistant','Pull-on style'] },
  { id:23, name:'Allen Solly Men\'s Slim Fit Chinos (Khaki, 32)', price:1399, orig:2799, disc:50, rating:4.2, reviews:11234, cat:'fashion', emoji:'👖', highlights:['98% cotton','Slim fit','5-pocket style','Machine wash'] },
  { id:24, name:'Puma Men\'s Running T-Shirt (Dry Cell, Red, L)', price:699, orig:1599, disc:56, rating:4.0, reviews:29871, cat:'fashion', emoji:'👕', highlights:['Dry Cell technology','Regular fit','Reflective logo','Moisture-wicking'] },

  // HOME
  { id:25, name:'Prestige Svachh 5L Electric Rice Cooker (White)', price:1299, orig:2499, disc:48, rating:4.4, reviews:31204, cat:'home', emoji:'🍚', badge:'DEAL', highlights:['5 litre capacity','Keep warm function','Non-stick pot','1yr warranty'] },
  { id:26, name:'Solimo 2-Seater Sofa Set (Beige, Fabric)', price:18999, orig:34999, disc:46, rating:4.0, reviews:5241, cat:'home', emoji:'🛋️', highlights:['High density foam','Easy assembly','Stain resistant','5yr warranty'] },
  { id:27, name:'Havells Instanio 3L Instant Water Heater (White)', price:2799, orig:4999, disc:44, rating:4.3, reviews:18732, cat:'home', emoji:'🚿', highlights:['3L capacity','5-star rated','Anti-rust','Thermal cut-out protection'] },
  { id:28, name:'Amazon Basics Non-Stick Cookware Set (3 piece)', price:1299, orig:2499, disc:48, rating:4.1, reviews:29123, cat:'home', emoji:'🍳', highlights:['Granite finish','Heat-safe handles','Induction compatible','PFOA free'] },
  { id:29, name:'D-Mart Bedsheet King Size 100% Cotton (Floral)', price:799, orig:1999, disc:60, rating:4.0, reviews:42301, cat:'home', emoji:'🛏️', badge:'60%OFF', highlights:['100% cotton','300TC thread count','Includes 2 pillow covers','Colorfast'] },
  { id:30, name:'Milton Thermosteel Flip Lid Flask 750ml (Silver)', price:649, orig:1299, disc:50, rating:4.4, reviews:87234, cat:'home', emoji:'🫙', highlights:['18hr hot/24hr cold','Stainless steel','Leak-proof','BPA free'] },

  // APPLIANCES
  { id:31, name:'Samsung 1.5 Ton 5 Star Inverter AC (White, AR18)', price:42990, orig:65900, disc:35, rating:4.4, reviews:12341, cat:'appliances', emoji:'❄️', badge:'DEAL', highlights:['5 star BEE rating','Auto clean','Wi-Fi enabled','10yr compressor warranty'] },
  { id:32, name:'LG 260L 3 Star Double Door Refrigerator (Shiny Steel)', price:27990, orig:43000, disc:35, rating:4.3, reviews:9821, cat:'appliances', emoji:'🧊', highlights:['Smart Inverter','Convertible 5-in-1','Hygiene Fresh+','10yr compressor warranty'] },
  { id:33, name:'IFB 7kg 5 Star Fully Automatic Front Load Washing Machine', price:28990, orig:42000, disc:31, rating:4.4, reviews:7231, cat:'appliances', emoji:'🫧', highlights:['6 motion direct drive','Auto balance','Aqua energie','4yr warranty'] },
  { id:34, name:'Philips HL7756/00 650W Mixer Grinder (White)', price:2499, orig:4495, disc:44, rating:4.2, reviews:54321, cat:'appliances', emoji:'🔄', highlights:['650W motor','3 jars','5yr motor warranty','Overload protector'] },

  // BEAUTY
  { id:35, name:'Lakme 9to5 Primer + Matte Lipstick (Red Coat)', price:249, orig:499, disc:50, rating:4.2, reviews:43201, cat:'beauty', emoji:'💄', badge:'50%OFF', highlights:['Matte finish','Long lasting 8hrs','Primer enriched','0.9g'] },
  { id:36, name:'Himalaya Herbals Complete Care Toothpaste (150g)', price:149, orig:249, disc:40, rating:4.5, reviews:89234, cat:'beauty', emoji:'🦷', highlights:['Fluoride free','Herbal formula','Prevents cavities','Fresh breath'] },
  { id:37, name:'Neutrogena Deep Clean Facial Cleanser (100ml)', price:349, orig:599, disc:42, rating:4.3, reviews:32104, cat:'beauty', emoji:'✨', highlights:['Oil-free','Salicylic acid','Pore-unclogging','Dermatologist tested'] },
  { id:38, name:'Mama Earth Vitamin C Serum 30ml with Turmeric', price:449, orig:699, disc:36, rating:4.4, reviews:67123, cat:'beauty', emoji:'🌿', highlights:['1% pure Vitamin C','Turmeric extract','SPF booster','Paraben free'] },

  // TOYS
  { id:39, name:'LEGO Classic Large Creative Brick Box (900 pieces)', price:3499, orig:5999, disc:42, rating:4.7, reviews:12341, cat:'toys', emoji:'🧱', badge:'DEAL', highlights:['900 bricks','Ages 4+','Creativity boost','Compatible with all LEGO'] },
  { id:40, name:'Funskool Monopoly Classic Board Game', price:699, orig:1499, disc:53, rating:4.3, reviews:28734, cat:'toys', emoji:'🎲', highlights:['Classic board game','Ages 8+','2-6 players','100% original'] },

  // SPORTS
  { id:41, name:'Yonex Nanoray 7000I Badminton Racquet (Blue)', price:899, orig:1999, disc:55, rating:4.2, reviews:18234, cat:'sports', emoji:'🏸', badge:'HOT', highlights:['Isometric head','Graphite shaft','5U/G4','High tension'] },
  { id:42, name:'Cosco Champion Football (Size 5)', price:499, orig:999, disc:50, rating:4.1, reviews:21043, cat:'sports', emoji:'⚽', highlights:['Size 5','PU outer casing','Hand stitched','All weather'] },

  // GROCERY
  { id:43, name:'Tata Salt iodised Vacuum Evaporated Table Salt 1kg', price:24, orig:30, disc:20, rating:4.5, reviews:234123, cat:'grocery', emoji:'🧂', highlights:['Iodised','Vacuum evaporated','Free flow','100% natural'] },
  { id:44, name:'Fortune Sunflower Refined Oil 5L Jar', price:699, orig:899, disc:22, rating:4.4, reviews:89234, cat:'grocery', emoji:'🫙', highlights:['Rich in Vitamin E','Light taste','High smoke point','5 litre'] },

  // BOOKS
  { id:45, name:'Atomic Habits by James Clear (Paperback)', price:399, orig:799, disc:50, rating:4.8, reviews:234123, cat:'books', emoji:'📚', badge:'BESTSELLER', highlights:['#1 NYT Bestseller','Practical strategies','Real-life examples','328 pages'] },
  { id:46, name:'Rich Dad Poor Dad by Robert Kiyosaki (Paperback)', price:299, orig:595, disc:50, rating:4.6, reviews:189234, cat:'books', emoji:'📗', highlights:['Money & investing','Personal finance','Bestseller 30yrs','Revised edition'] },
];

// ============================
// STATE
// ============================
let cart = [];
let currentSlide = 0;
let sliderTimer;
let countdownSeconds = 5 * 3600 + 32 * 60 + 47;

// ============================
// INITIALIZATION
// ============================
window.onload = function() {
  renderScroll('dealScroll', PRODUCTS.filter(p => p.badge), 8);
  renderScroll('electronicsScroll', PRODUCTS.filter(p => p.cat === 'electronics'), 8);
  renderScroll('fashionScroll', PRODUCTS.filter(p => p.cat === 'fashion'), 8);
  renderScroll('mobileScroll', PRODUCTS.filter(p => p.cat === 'mobiles'), 8);
  renderScroll('homeScroll', PRODUCTS.filter(p => p.cat === 'home'), 6);
  startSlider();
  startCountdown();
};

// ============================
// RENDERING FUNCTIONS
// ============================
function renderScroll(containerId, products, max) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = products.slice(0, max).map(p => productCardHTML(p)).join('');
}

function productCardHTML(p) {
  const imgEmoji = p.emoji || '📦';
  return `
  <div class="product-card" onclick="openProduct(${p.id})">
    ${p.badge ? `<span class="prod-badge">${p.badge}</span>` : ''}
    <button class="wishlist-btn" id="wish-${p.id}" onclick="event.stopPropagation();toggleWishlistItem(${p.id})">♡</button>
    <div class="product-img-wrap">
      <div style="font-size:80px;line-height:1">${imgEmoji}</div>
    </div>
    <div class="product-name">${p.name}</div>
    <div class="product-rating">
      <span class="rating-badge">★ ${p.rating}</span>
      <span class="rating-count">(${p.reviews.toLocaleString()})</span>
    </div>
    <div class="product-price">
      <span class="price-current">₹${p.price.toLocaleString()}</span>
      <span class="price-original">₹${p.orig.toLocaleString()}</span>
      <span class="price-discount">${p.disc}% off</span>
    </div>
    <span class="fk-assured">✦ Flopikart Assured</span>
  </div>`;
}

function productGridCardHTML(p) {
  const imgEmoji = p.emoji || '📦';
  return `
  <div class="product-grid-card" onclick="openProduct(${p.id})">
    ${p.badge ? `<span class="prod-badge">${p.badge}</span>` : ''}
    <button class="wishlist-btn" onclick="event.stopPropagation();toggleWishlistItem(${p.id})">♡</button>
    <div class="product-img-wrap">
      <div style="font-size:80px;line-height:1">${imgEmoji}</div>
    </div>
    <div class="product-name">${p.name}</div>
    <div class="product-rating">
      <span class="rating-badge">★ ${p.rating}</span>
      <span class="rating-count">(${p.reviews.toLocaleString()})</span>
    </div>
    <div class="product-price">
      <span class="price-current">₹${p.price.toLocaleString()}</span>
      <span class="price-original">₹${p.orig.toLocaleString()}</span>
      <span class="price-discount">${p.disc}% off</span>
    </div>
    <span class="fk-assured">✦ Flopikart Assured</span>
    <div style="margin-top:8px">
      <button onclick="event.stopPropagation();addToCart(${p.id})" style="background:var(--fk-yellow);border:none;padding:6px 14px;border-radius:2px;font-size:12px;font-weight:600;cursor:pointer;font-family:inherit;width:48%;margin-right:4%">🛒 Cart</button>
      <button onclick="event.stopPropagation();buyNow(${p.id})" style="background:var(--fk-orange);color:#fff;border:none;padding:6px 14px;border-radius:2px;font-size:12px;font-weight:600;cursor:pointer;font-family:inherit;width:48%">⚡ Buy</button>
    </div>
  </div>`;
}

// ============================
// PAGE NAVIGATION
// ============================
function showPage(page) {
  document.getElementById('page-home').style.display = page === 'home' ? '' : 'none';
  document.getElementById('page-products').style.display = page === 'products' ? '' : 'none';
  document.getElementById('page-orders').style.display = page === 'orders' ? '' : 'none';
  window.scrollTo(0, 0);
}

// ============================
// SEARCH & FILTER
// ============================
function filterCat(cat, el) {
  if (el) {
    document.querySelectorAll('.cat-item').forEach(i => i.classList.remove('active'));
    el.classList.add('active');
  }
  const filtered = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
  const grid = document.getElementById('productGrid');
  const title = document.getElementById('productPageTitle');
  const count = document.getElementById('productCount');
  const catNames = { 
    all:'All Products', 
    mobiles:'Mobiles', 
    electronics:'Electronics', 
    fashion:'Fashion', 
    home:'Home & Kitchen', 
    appliances:'Appliances', 
    beauty:'Beauty', 
    toys:'Toys', 
    sports:'Sports', 
    grocery:'Grocery', 
    books:'Books' 
  };
  title.textContent = catNames[cat] || 'Products';
  count.textContent = `${filtered.length} products found`;
  grid.innerHTML = filtered.map(p => productGridCardHTML(p)).join('');
  showPage('products');
  return false;
}

function doSearch() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  if (!q) return;
  const filtered = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(q) || p.cat.includes(q)
  );
  const grid = document.getElementById('productGrid');
  document.getElementById('productPageTitle').textContent = `Results for "${q}"`;
  document.getElementById('productCount').textContent = `${filtered.length} products found`;
  grid.innerHTML = filtered.length ? filtered.map(p => productGridCardHTML(p)).join('') :
    `<div style="padding:48px;text-align:center;color:var(--fk-sub);grid-column:1/-1"><div style="font-size:48px;margin-bottom:12px">🔍</div><h3>No results found for "${q}"</h3><p style="margin-top:6px;font-size:13px">Try different keywords or check spelling</p></div>`;
  showPage('products');
}

function handleSearch(val) {
  if (!val) return;
}

// ============================
// PRODUCT MODAL
// ============================
function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const modal = document.getElementById('modalContent');
  modal.innerHTML = `
    <div class="modal-header">
      <h3>Product Details</h3>
      <button class="modal-close" onclick="closeProduct()">✕</button>
    </div>
    <div class="modal-body">
      <div class="modal-img-wrap">
        <div style="font-size:120px;line-height:1">${p.emoji}</div>
      </div>
      <div class="modal-name">${p.name}</div>
      <div class="modal-rating">
        <span class="rating-badge">★ ${p.rating}</span>
        <span class="rating-count">${p.reviews.toLocaleString()} ratings</span>
        ${p.badge ? `<span class="prod-badge" style="position:relative;top:0;left:0">${p.badge}</span>` : ''}
      </div>
      <div class="modal-price-row">
        <span class="modal-price">₹${p.price.toLocaleString()}</span>
        <span class="modal-orig">₹${p.orig.toLocaleString()}</span>
        <span class="modal-disc">${p.disc}% off</span>
      </div>
      <div style="background:#e8f5e9;padding:8px 12px;border-radius:3px;margin-bottom:12px;font-size:13px;color:var(--fk-green);font-weight:600">
        ✓ Free Delivery &nbsp;|&nbsp; ✓ 10 Day Return &nbsp;|&nbsp; ✓ Flopikart Assured
      </div>
      ${p.highlights ? `
      <div class="modal-highlights">
        <h4>Highlights</h4>
        <ul>${p.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
      </div>` : ''}
      <div style="margin-bottom:12px">
        <span style="font-size:12px;color:var(--fk-sub)">Seller: </span>
        <span style="font-size:12px;font-weight:600;color:var(--fk-blue)">SuperStore_India ✦</span>
      </div>
      <div class="modal-actions">
        <button class="btn-add-cart" onclick="addToCart(${p.id});closeProduct()">🛒 Add to Cart</button>
        <button class="btn-buy-now" onclick="buyNow(${p.id})">⚡ Buy Now</button>
      </div>
    </div>`;
  document.getElementById('productModal').classList.add('open');
}

function closeProduct() {
  document.getElementById('productModal').classList.remove('open');
}

function closeModalOut(e) {
  if (e.target === document.getElementById('productModal')) closeProduct();
}

// ============================
// CART FUNCTIONS
// ============================
function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const existing = cart.find(x => x.id === id);
  if (existing) { 
    existing.qty++; 
  } else { 
    cart.push({ ...p, qty: 1 }); 
  }
  updateCartCount();
  showToast(`"${p.name.substring(0,30)}..." added to cart!`);
  renderCart();
}

function buyNow(id) {
  addToCart(id);
  closeProduct();
  openCart();
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  updateCartCount();
  renderCart();
}

function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else renderCart();
  updateCartCount();
}

function updateCartCount() {
  const total = cart.reduce((s, x) => s + x.qty, 0);
  document.getElementById('cartCount').textContent = total;
  document.getElementById('cartItemCount').textContent = total;
}

function renderCart() {
  const body = document.getElementById('cartBody');
  const footer = document.getElementById('cartFooter');
  const summary = document.getElementById('cartSummary');
  
  if (!cart.length) {
    body.innerHTML = `<div class="cart-empty">
      <span class="cart-empty-icon">🛒</span>
      <h3>Your cart is empty!</h3>
      <p style="font-size:13px;color:var(--fk-sub);text-align:center">Add items to it now.</p>
      <button onclick="closeCartPanel();showPage('home')" class="view-all-btn">Shop Now</button>
    </div>`;
    footer.style.display = 'none';
    return;
  }
  
  body.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div style="font-size:50px;line-height:1;flex-shrink:0;width:70px;text-align:center">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name.substring(0,50)}...</div>
        <div style="display:flex;gap:6px;align-items:baseline">
          <span class="cart-item-price">₹${item.price.toLocaleString()}</span>
          <span class="cart-item-orig">₹${item.orig.toLocaleString()}</span>
          <span class="cart-item-disc">${item.disc}% off</span>
        </div>
        <div class="qty-ctrl">
          <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
        </div>
        <div style="font-size:11px;color:var(--fk-green);margin-top:4px">✓ Delivery by ${getDeliveryDate()}</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">🗑</button>
    </div>`).join('');

  const subtotal = cart.reduce((s, x) => s + x.price * x.qty, 0);
  const origTotal = cart.reduce((s, x) => s + x.orig * x.qty, 0);
  const savings = origTotal - subtotal;
  const delivery = subtotal >= 499 ? 0 : 40;
  const total = subtotal + delivery;

  summary.innerHTML = `
    <div class="cart-row"><span>Price (${cart.reduce((s,x)=>s+x.qty,0)} items)</span><span>₹${origTotal.toLocaleString()}</span></div>
    <div class="cart-row"><span>Discount</span><span class="discount">−₹${savings.toLocaleString()}</span></div>
    <div class="cart-row"><span>Delivery Charges</span><span style="color:var(--fk-green)">${delivery === 0 ? 'FREE' : '₹'+delivery}</span></div>
    <div class="cart-row total"><span>Total Amount</span><span>₹${total.toLocaleString()}</span></div>
    <div style="font-size:12px;color:var(--fk-green);font-weight:600">You will save ₹${savings.toLocaleString()} on this order</div>`;
  footer.style.display = '';
}

function openCart() {
  renderCart();
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCartPanel() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeCart(e) {
  if (e.target === document.getElementById('cartOverlay')) closeCartPanel();
}

function checkout() {
  if (!cart.length) return;
  cart = [];
  updateCartCount();
  closeCartPanel();
  showToast('🎉 Order placed successfully! (Demo mode)');
  showPage('orders');
  document.getElementById('page-orders').innerHTML = `
    <div class="section-card" style="padding:32px;text-align:center">
      <div style="font-size:64px;margin-bottom:16px">🎉</div>
      <h2 style="font-size:22px;margin-bottom:8px;color:var(--fk-green)">Order Placed Successfully!</h2>
      <p style="color:var(--fk-sub);font-size:14px;margin-bottom:8px">Your order is confirmed and will be delivered by <strong>${getDeliveryDate(3)}</strong></p>
      <p style="font-size:12px;color:var(--fk-sub);margin-bottom:20px">Order ID: FLOPI${Date.now().toString().slice(-8)}</p>
      <button onclick="showPage('home')" class="view-all-btn">Continue Shopping</button>
    </div>`;
}

function getDeliveryDate(days = 2) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toLocaleDateString('en-IN', { weekday:'short', month:'short', day:'numeric' });
}

// ============================
// WISHLIST
// ============================
function toggleWishlistItem(id) {
  const btn = document.getElementById(`wish-${id}`);
  if (btn) btn.classList.toggle('liked');
  showToast(btn && btn.classList.contains('liked') ? '♡ Added to Wishlist' : 'Removed from Wishlist');
}

function toggleWishlist() {
  showToast('Wishlist feature – coming soon!');
}

// ============================
// SLIDER
// ============================
function startSlider() {
  sliderTimer = setInterval(nextSlide, 4000);
}

function nextSlide() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function prevSlide() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function goSlide(i) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = i;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

// ============================
// COUNTDOWN TIMER
// ============================
function startCountdown() {
  setInterval(() => {
    if (countdownSeconds <= 0) { 
      countdownSeconds = 5 * 3600; 
    }
    countdownSeconds--;
    const h = Math.floor(countdownSeconds / 3600);
    const m = Math.floor((countdownSeconds % 3600) / 60);
    const s = countdownSeconds % 60;
    const pad = n => String(n).padStart(2, '0');
    const hEl = document.getElementById('timerH');
    const mEl = document.getElementById('timerM');
    const sEl = document.getElementById('timerS');
    if (hEl) hEl.textContent = pad(h);
    if (mEl) mEl.textContent = pad(m);
    if (sEl) sEl.textContent = pad(s);
  }, 1000);
}

// ============================
// NOTIFICATIONS
// ============================
let toastTimer;

function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ============================
// MODALS
// ============================
function openModal(type) {
  if (type === 'login') document.getElementById('loginModal').classList.add('open');
}

function closeLogin() {
  document.getElementById('loginModal').classList.remove('open');
}

function closeLoginOut(e) {
  if (e.target === document.getElementById('loginModal')) closeLogin();
}