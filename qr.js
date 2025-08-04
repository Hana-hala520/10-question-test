const questions = [
  "1. Anh có tin vào tình yêu không?",
  "2. Anh nhận ra mình yêu là từ lúc nào?",
  "3. Ở cạnh em anh có cảm giác như nào?",
  "4. Anh có cảm thấy mình được yêu không?",
  "5. Anh thích điểm gì ở em nếu không nói về ngoại hình?",
  "6. Anh nghĩ tình yêu là gì và gia đình là gì?",
  "7. Anh có từng nghĩ không gặp em anh sẽ yêu được người tốt hơn không?",
  "8. Anh có từng nghĩ nếu chúng mình phải xa nhau anh sẽ như nào chưa?",
  "9. Anh tin là mình sẽ hạnh phúc chứ?",
  "10. Có điều gì anh muốn nói với em không?",
];

questions.forEach((q, i) => {
  setTimeout(() => {
    const question = document.createElement("div");
    question.className = "question";
    question.innerText = q;
    document.body.appendChild(question);

    // Xóa câu hỏi sau 6 giây
    setTimeout(() => question.remove(), 8000);
  }, i * 8500);
});

// Tạo trái tim bay liên tục
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  heart.style.animationDuration = Math.random() * 3 + 5 + "s";
  heart.innerText = "💖";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 200);
