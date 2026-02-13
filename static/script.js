// Card Navigation
function nextCard(cardId) {
    // Hide all cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.remove('active');
    });

    // Show the target card
    const targetCard = document.getElementById(cardId);
    if (targetCard) {
        targetCard.classList.add('active');
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Handle Yes Response
function handleYes() {
    // Send response to server
    fetch('/api/response', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ response: 'yes' })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Create confetti
        createConfetti();
        // Show yes card
        nextCard('yesCard');
    });
}

// Handle No Response
function handleNo() {
    nextCard('noCard');
}

// Reset and start over
function resetCards() {
    nextCard('introCard');
}

// Confetti Animation
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti');
    if (!confettiContainer) return;

    const colors = ['#ff6b9d', '#667eea', '#764ba2', '#38ef7d', '#11998e', '#ffd89b'];
    
    for (let i = 0; i < 50; i++) {
        const confetto = document.createElement('div');
        confetto.style.position = 'absolute';
        confetto.style.width = '10px';
        confetto.style.height = '10px';
        confetto.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetto.style.left = Math.random() * 100 + '%';
        confetto.style.top = '-10px';
        confetto.style.borderRadius = '50%';
        confetto.style.animation = `fall ${2 + Math.random() * 1}s linear forwards`;
        
        confettiContainer.appendChild(confetto);
        
        setTimeout(() => {
            confetto.remove();
        }, 3000);
    }
}

// Add fall animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(500px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add moving button for No
document.addEventListener('DOMContentLoaded', function() {
    const noBtn = document.getElementById('noBtn');
    
    if (noBtn) {
        noBtn.addEventListener('mouseover', function() {
            const randomX = (Math.random() - 0.5) * 200;
            const randomY = (Math.random() - 0.5) * 200;
            noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
            noBtn.style.transition = 'transform 0.3s ease-out';
        });

        noBtn.addEventListener('click', function(e) {
            // Still allow click on the No button
            handleNo();
        });
    }
});
