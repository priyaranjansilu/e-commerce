function createConfetti() {
            const confettiContainer = document.getElementById('confetti');
            for (let i = 0; i < 100; i++) {
                const piece = document.createElement('div');
                piece.classList.add('confetti-piece');
                piece.style.left = Math.random() * 100 + '%';
                piece.style.animationDelay = Math.random() * 3 + 's';
                piece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                confettiContainer.appendChild(piece);
            }
        }

        createConfetti();
		setTimeout(() => {
			window.location.href = '/newpage';  // Redirect to the homepage or another page
		}, 6000);