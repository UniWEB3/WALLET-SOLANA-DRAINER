// Get now this drainer > github.com/0x32Moon/Best-Solana-NFT-Drainer
const priceHtml = document.getElementById('lnprice');
let tempMaxSup = mintInfo.minUnits;

document.getElementById('plus').addEventListener('click', function () {
    let total = parseInt(priceHtml.innerText, 10);
    if (total >= mintInfo.maxUnits) total = mintInfo.maxUnits;
    else ++total;
    updatePrice(total)
});

document.getElementById('minus').addEventListener('click', function () {
    let total = parseInt(priceHtml.innerText, 10);
    if (total <= mintInfo.minUnits) total = mintInfo.minUnits;
    else --total;
    updatePrice(total)
});

document.getElementById('ape-max').addEventListener('click', function () {
    let nowSup = parseInt(priceHtml.innerText, 10)
    if (nowSup != mintInfo.maxUnits) {
        tempMaxSup = nowSup;
        updatePrice(mintInfo.maxUnits)
    } else updatePrice(tempMaxSup)
});

function updatePrice(total) {
    const totalPrice = (total * mintInfo.price).toFixed(mintInfo.toFixed);
    document.getElementById('lnprice').innerText = total;
    document.getElementById('price').innerText = totalPrice;
}
