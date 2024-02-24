const dishes = [
    { name: "宫保鸡丁", mood: "开心" },
    { name: "鱼香肉丝", mood: "开心" },
    { name: "辣子鸡", mood: "难过" },
    { name: "糖醋排骨", mood: "难过" },
    { name: "蒜泥白肉", mood: "紧张" },
    { name: "麻婆豆腐", mood: "紧张" },
    { name: "清蒸鱼", mood: "放松" },
    { name: "炖排骨", mood: "放松" },
];

function getRecommendation() {
    const mood = document.getElementById("mood").value;
    const filteredDishes = dishes.filter(dish => dish.mood === mood);
    const randomIndex = Math.floor(Math.random() * filteredDishes.length);
    const recommendation = filteredDishes[randomIndex];

    document.getElementById("result").innerText = `推荐菜品：${recommendation.name}`;
}
