// Mock data for contributors
        const contributors = [
            { name: "Subhankar Sahoo", role: "Frontend Developer", img: "https://e-commerce-finalproject.s3.ap-south-1.amazonaws.com/profilesPics/subhankar.jpeg", link: "https://www.linkedin.com/in/subhankar-sahoo-01b93221b/" },
            { name: "Priyaranjan Sahoo", role: "Backend Developer", img: "https://e-commerce-finalproject.s3.ap-south-1.amazonaws.com/profilesPics/silu2.jpeg", link: "https://www.linkedin.com/in/priyaranjandev/" },
            { name: "Subrat K. Pradhan", role: "UI/UX Designer", img: "https://e-commerce-finalproject.s3.ap-south-1.amazonaws.com/profilesPics/subrat.jpeg", link: "https://www.linkedin.com/in/subrat-kumar-pradhan-8052731b4/" },
            { name: "Kunal Prasad", role: "Project Manager", img: "https://e-commerce-finalproject.s3.ap-south-1.amazonaws.com/profilesPics/kunal.jpeg", link: "https://www.linkedin.com/in/kunal-prasad-985b77194/" },
        ];

        // Populate contributors dynamically
        const contributorsContainer = document.getElementById('contributors');
        contributors.forEach(contributor => {
            const card = document.createElement('a');
            card.className = 'contributor-card';
            card.href = contributor.link;
            card.target = '_blank'; // Open link in a new tab
            card.innerHTML = `
                <img src="${contributor.img}" alt="${contributor.name}">
                <h3>${contributor.name}</h3>
                <p>${contributor.role}</p>
            `;
            contributorsContainer.appendChild(card);
        });