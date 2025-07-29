// Language toggle functionality
let isKorean = true;

const greetings = {
    korean: {
        text: '안녕하세요!',
        translation: 'Hello World! Norae in India'
    },
    english: {
        text: 'Hello World!',
        translation: '안녕하세요!'
    }
};

function toggleLanguage() {
    const greetingText = document.querySelector('.greeting-text');
    const translation = document.querySelector('.translation');
    
    // Add fade-out effect
    greetingText.style.opacity = '0';
    translation.style.opacity = '0';
    
    setTimeout(() => {
        if (isKorean) {
            greetingText.textContent = greetings.english.text;
            translation.textContent = greetings.english.translation;
        } else {
            greetingText.textContent = greetings.korean.text;
            translation.textContent = greetings.korean.translation;
        }
        
        // Add fade-in effect
        greetingText.style.opacity = '1';
        translation.style.opacity = '1';
        
        isKorean = !isKorean;
    }, 300);
}

// Initialize animation classes when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const greetingText = document.querySelector('.greeting-text');
    const translation = document.querySelector('.translation');
    
    // Reset animations
    greetingText.style.animation = 'none';
    translation.style.animation = 'none';
    
    setTimeout(() => {
        greetingText.style.animation = '';
        translation.style.animation = '';
    }, 10);
});