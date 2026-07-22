const gatya = document.getElementById("gatya");
const result = document.getElementById("result");

const items = [
    { レア度: "SSR", 名前: "ピカチュウ", weight: 1 },
    { レア度: "SR", 名前: "イーブイ", weight: 4 },
    { レア度: "R", 名前: "コラッタ", weight: 10 },
    { レア度: "N", 名前: "キャタピー", weight: 20 },
];

function drawGatya() {
    const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);

    let random = Math.random() * totalWeight;

    for (const item of items) {
        if (random < item.weight) {
            return item;
        }
        random -= item.weight;
    }
}

gatya.addEventListener("click", () => {
    const item = drawGatya();
    result.textContent = `${item.レア度} ${item.名前} が出た!`;
});