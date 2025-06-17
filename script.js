const text = "Welcome to our website!";
  const words = text.split(" "); // Split text into words
  let index = 0;

  function showNextWord() {
    if (index < words.length) {
      document.getElementById("word").textContent += words[index] + " ";
      index++;
    } else {
      alert("All words displayed!");
    }
  }