function generateAthleteStats() {
    let runScore = Math.ceil(Math.random() * 20);
    let cycleScore = Math.ceil(Math.random() * 20);
    let swimScore = Math.ceil(Math.random() * 20);
    let bestScore = Math.max(runScore, cycleScore, swimScore);

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let athleteInitial = alphabet[runScore % 26] || "A";
    let trainingTime = cycleScore * swimScore;
    let hours = Math.floor(trainingTime / 60);
    let minutes = trainingTime % 60;

    document.getElementById("results").innerHTML = `
        <p><strong>Running Score:</strong> ${runScore}</p>
        <p><strong>Cycling Score:</strong> ${cycleScore}</p>
        <p><strong>Swimming Score:</strong> ${swimScore}</p>
        <p><strong>Best Event Score:</strong> ${bestScore}</p>
        <p><strong>Athlete's Initial:</strong> ${athleteInitial}</p>
        <p><strong>Training Time:</strong> ${trainingTime} mins (${hours}h ${minutes}m)</p>
    `;
}