document.getElementById('clickMe').addEventListener('click', function() {
    const messages = [
        "Git is powerful!",
        "Version control is essential.",
        "GitHub makes collaboration easy.",
        "You're doing great on your DevOps journey!",
        "Keep learning and practicing!"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('message').innerText = randomMessage;
});
