function calculatePercentage() {
    var score = parseFloat(document.getElementById("score").value);
    var outOf = parseFloat(document.getElementById("outOf").value);

    if (isNaN(score) || isNaN(outOf) || outOf <= 0) {
        document.getElementById("result").textContent = "Please enter valid scores.";
        return;
    }

    var percentage = (score / outOf) * 100;
    document.getElementById("result").textContent = "The percentage is: " + percentage.toFixed(2) + "%";
}
