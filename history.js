const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, errorCount) {

    let wordlist = questionText.split(' ');
    let wordCount = parseInt((wordlist.length / timeTaken) * 60);

    // console.log(wordCount);

    const newRow = document.createElement("div");
    newRow.classList.add("card");

    newRow.innerHTML = `
  <h3>${questionText}</h3>
  <div>
  <h4> Your word count per min: <span class="blod green">${wordCount}</span> WPM </h4>
  <p>You took: <span class="bold">${timeTaken}</span> seconds</p>
  <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
  </div>
  `;

    histories.appendChild(newRow);

    let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
    previousTests.push({ questionText, wordCount, timeTaken, errorCount });
    localStorage.setItem("testHistory", JSON.stringify(previousTests));

    displayHistory(wordCount);
}

function displayHistory() {
    histories.innerHTML = "";
    const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];


    previousTests.forEach((test) => {
        const newRow = document.createElement("div");
        newRow.classList.add("card");
        newRow.classList.add("flex");

        newRow.innerHTML = `
  <h3>${test.questionText}</h3>
  <h4> Your word count per min: <span class="blod green">${test.wordCount}</span> WPM </h4>
  <p>You took: <span class="bold">${test.timeTaken}</span> seconds</p>
    <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p>
  `;

        histories.appendChild(newRow);
    });
}
