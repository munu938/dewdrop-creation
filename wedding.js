const weddings = [
            {
                name: "Hindu Wedding",
                region: "Pan-Indian",
                category: "hindu",
                image:"",
                description: "Hindu weddings are elaborate celebrations filled with ancient Vedic rituals and customs that vary across different regions. The ceremonies typically span several days with pre-wedding, wedding, and post-wedding rituals.",
                traditions: [
                    "Kanyadaan - Giving away the bride",
                    "Saptapadi - Seven sacred steps around the fire",
                    "Mangalsutra - Sacred necklace ceremony",
                    "Sindoor - Vermillion application",
                    "Haldi and Mehendi ceremonies"
                ]
            },
            {
                name: "Gujarati Wedding",
                region: "Gujarat",
                category: "regional",
                image: "linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)",
                description: "Gujarati weddings are vibrant celebrations known for their Garba and Dandiya raas performances. The ceremonies are filled with joy, colorful attire, and delicious vegetarian cuisine.",
                traditions: [
                    "Pithi Dastoor - Turmeric ceremony",
                    "Garba and Dandiya celebrations",
                    "Madhuparka - Welcoming the groom",
                    "Jaan - Marriage ceremony around fire",
                    "Vidaai - Emotional farewell ritual"
                ]
            },
            {
                name: "Bengali Wedding",
                region: "West Bengal",
                category: "regional",
                image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
                description: "Bengali weddings are known for their traditional rituals like Shubho Drishti and unique customs. The bride traditionally wears a red Benarasi saree and adorns herself with traditional jewelry.",
                traditions: [
                    "Shubho Drishti - First glance ritual",
                    "Mala Badal - Exchange of garlands",
                    "Saat Paak - Seven circles around groom",
                    "Sindoor Daan - Vermillion offering",
                    "Bou Bhat - Reception dinner"
                ]
            },
            {
                name: "Malayali Wedding",
                region: "Kerala",
                category: "regional",
                image: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
                description: "Malayali weddings are simple yet elegant ceremonies often held in temples or homes. The bride wears a traditional kasavu saree with gold jewelry, embodying Kerala's rich cultural heritage.",
                traditions: [
                    "Talikettu Kalyanam - Tying the sacred thread",
                    "Kasavu Mundu - Traditional attire",
                    "Sadya - Grand vegetarian feast",
                    "Talambralu - Showering rice",
                    "Simple temple ceremonies"
                ]
            },
            {
                name: "Tamil Wedding",
                region: "Tamil Nadu",
                category: "regional",
                image: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
                description: "Tamil weddings follow ancient Vedic traditions with ceremonies like Oonjal and Saptapadi. The bride typically wears a vibrant Kanjivaram silk saree with traditional gold jewelry.",
                traditions: [
                    "Oonjal - Swing ceremony",
                    "Kashi Yatra - Mock pilgrimage",
                    "Jai Mala - Garland exchange",
                    "Mangalya Dharanam - Sacred thread tying",
                    "Nalangu - Playful games"
                ]
            },
            {
                name: "Odia Wedding",
                region: "Odisha",
                category: "regional",
                image: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
                description: "Odia weddings blend traditional Hindu rituals with unique regional customs. The ceremonies are known for their simplicity and the beautiful traditional attire of the bride and groom.",
                traditions: [
                    "Jurana Parichaya - First meeting ritual",
                    "Barajatri - Groom's procession",
                    "Kanya Daan - Gifting the bride",
                    "Saptapadi - Seven sacred steps",
                    "Graha Pravesh - Home entry ritual"
                ]
            },
            {
                name: "Christian Wedding",
                region: "Pan-Indian",
                category: "christian",
                image: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
                description: "Christian weddings in India blend Western traditions with Indian customs. The ceremony typically takes place in a church with the bride in a white gown and groom in a suit, followed by a grand reception.",
                traditions: [
                    "Exchange of vows and rings",
                    "White bridal gown tradition",
                    "Church ceremony with prayers",
                    "Signing of marriage register",
                    "Throwing of bouquet"
                ]
            },
            {
                name: "Punjabi Wedding",
                region: "Punjab",
                category: "regional",
                image: "linear-gradient(135deg, #ffc3a0 0%, #ffafbd 100%)",
                description: "Punjabi weddings are grand, energetic celebrations known for their bhangra, dhol beats, and lavish feasts. The ceremonies are filled with music, dance, and vibrant colors.",
                traditions: [
                    "Jago - Night ceremony with songs",
                    "Chooda and Kalire ceremony",
                    "Anand Karaj - Sikh wedding ceremony",
                    "Bhangra and Giddha performances",
                    "Lavish Punjabi cuisine"
                ]
            },
            {
                name: "Rajasthani Wedding",
                region: "Rajasthan",
                category: "regional",
                image: "linear-gradient(135deg, #ffd89b 0%, #19547b 100%)",
                description: "Rajasthani weddings are royal celebrations reflecting the state's rich heritage. The ceremonies feature elaborate decorations, traditional folk music, and regal attire.",
                traditions: [
                    "Pithi - Turmeric ceremony",
                    "Toran Bandana - Door decoration",
                    "Granthi Bandhan - Tying the knot",
                    "Traditional folk music and dance",
                    "Royal attire and jewelry"
                ]
            },
            {
                name: "Marwari Wedding",
                region: "Rajasthan/Northern India",
                category: "regional",
                image: "linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)",
                description: "Marwari weddings are known for their grandeur and adherence to traditional rituals. The celebrations include multiple pre-wedding and post-wedding ceremonies with elaborate decorations.",
                traditions: [
                    "Sagai - Engagement ceremony",
                    "Mehendi and Sangeet nights",
                    "Baraat - Groom's grand procession",
                    "Pheras - Circumambulation",
                    "Bidaai - Emotional send-off"
                ]
            },
            {
                name: "Muslim Wedding (Nikah)",
                region: "Pan-Indian",
                category: "muslim",
                image: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
                description: "Muslim weddings (Nikah) are solemn yet joyous occasions centered around the signing of the Nikahnama. The celebrations include Mehendi, Sangeet, and Walima reception.",
                traditions: [
                    "Nikah - Marriage contract signing",
                    "Mehr - Mandatory gift to bride",
                    "Ijab-e-Qubool - Acceptance of proposal",
                    "Walima - Reception feast",
                    "Rukhsati - Bride's departure"
                ]
            }
        ];

        function createWeddingCard(wedding) {
            return `
                <div class="wedding-card" data-category="${wedding.category}" onclick="openModal('${wedding.name}')">
                    <div class="card-image" style="background: ${wedding.image}">
                        <div class="card-badge">${wedding.category.toUpperCase()}</div>
                    </div>
                    <div class="card-content">
                        <h3>${wedding.name}</h3>
                        <div class="region">📍 ${wedding.region}</div>
                        <p>${wedding.description.substring(0, 120)}...</p>
                        <div class="traditions">
                            <h4>Key Traditions:</h4>
                            <ul>
                                ${wedding.traditions.slice(0, 3).map(t => `<li>${t}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        }

        function renderWeddings(filter = 'all') {
            const grid = document.getElementById('weddingGrid');
            const filtered = filter === 'all' 
                ? weddings 
                : weddings.filter(w => w.category === filter);
            
            grid.innerHTML = filtered.map(createWeddingCard).join('');
        }

        function openModal(weddingName) {
            const wedding = weddings.find(w => w.name === weddingName);
            const modal = document.getElementById('modal');
            const content = document.getElementById('modalContent');
            
            content.innerHTML = `
                <div class="modal-image" style="background: ${wedding.image}"></div>
                <div class="modal-body">
                    <h2>${wedding.name}</h2>
                    <div class="region">📍 ${wedding.region}</div>
                    <p>${wedding.description}</p>
                    <div class="traditions">
                        <h4>Traditional Ceremonies & Rituals:</h4>
                        <ul>
                            ${wedding.traditions.map(t => `<li>${t}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
            
            modal.style.display = 'block';
        }

        function closeModal() {
            document.getElementById('modal').style.display = 'none';
        }

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                renderWeddings(this.dataset.filter);
            });
        });

        // Close modal on outside click
        window.onclick = function(event) {
            const modal = document.getElementById('modal');
            if (event.target === modal) {
                closeModal();
            }
        }

        // Initialize
        renderWeddings();
