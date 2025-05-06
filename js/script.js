function runTypingEffect() {
  const text = 'Welcome to Design Factory.'
  const runTypingElement = document.getElementById('typing-text');
  const typingDelay = 100;

  typeText(text, runTypingElement, typingDelay);
}

function typeText(text, runTypingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => { 
      runTypingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}

document.addEventListener('DOMContentLoaded', runTypingEffect);