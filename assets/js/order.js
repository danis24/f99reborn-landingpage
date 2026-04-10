var price_lists = [
    {
        'id': 'wolf_7',
        'product_name': '7 Day WOLF BOT License',
        'price': '30 doge',
        'active_for': '7 Hari',
        'bot_name': 'wolf'
    },
    {
        'id': 'wolf_30',
        'product_name': '30 Day WOLF BOT License',
        'price': '100 doge',
        'active_for': '30 Hari',
        'bot_name': 'wolf'
    },
    {
        'id': 'wolf_1y',
        'product_name': '1 Year WOLF BOT License',
        'price': '1100 doge',
        'active_for': '1 Tahun',
        'bot_name': 'wolf'
    },
    {
        'id': 'primedice_7',
        'product_name': '7 Day PRIMEDICE BOT License',
        'price': '30 doge',
        'active_for': '7 Hari',
        'bot_name': 'Primedice'
    },
    {
        'id': 'primedice_30',
        'product_name': '30 Day PRIMEDICE BOT License',
        'price': '100 doge',
        'active_for': '30 Hari',
        'bot_name': 'Primedice'
    },
    {
        'id': 'primedice_1y',
        'product_name': '1 YEAR PRIMEDICE BOT License',
        'price': '1100 doge',
        'active_for': '1 Tahun',
        'bot_name': 'Primedice'
    }
];

var setting = {
    'doge_address': 'DEortBzLazeBQczBF5aMiLSNcZgN1Qv4P5',
    'qr_address': 'https://api.qrserver.com/v1/create-qr-code/?data=DEortBzLazeBQczBF5aMiLSNcZgN1Qv4P5&amp;size=200x200',
    'whatsapp_order': '+6288809529977',
}

function orderLicense(service){
    localStorage.setItem('doge_address', setting.doge_address);
    localStorage.setItem('qr_address', setting.qr_address);
    localStorage.setItem('whatsapp_order', setting.whatsapp_order);

    price_lists.forEach(function (value, index) {
        if(value.id == service){
            localStorage.setItem('id', value.id);
            localStorage.setItem('product_name', value.product_name);
            localStorage.setItem('price', value.price);
            localStorage.setItem('active_for', value.active_for);
            localStorage.setItem('bot_name', value.bot_name);
        }
    });
    window.location.href = "/buy.html"
}