const menuData = [
    {
        category_gr: "Σαλάτες", category_en: "Salads",
        items: [
            { name_gr: "Χωριάτικη", name_en: "Greek Salad", desc_gr: "Κλασική ελληνική σαλάτα με ντομάτα, κρεμμύδι, αγγούρι, φέτα, ελιά και ρίγανη.", desc_en: "Classic Greek salad with tomato, onion, cucumber, feta cheese, olives, and oregano." },
            { name_gr: "Ντάκος", name_en: "Dakos", desc_gr: "Παραδοσιακό κρητικό πιάτο με παξιμάδι, ντομάτα, φέτα και ρίγανη.", desc_en: "Traditional Cretan dish with barley rusk, tomato, feta cheese, and oregano." },
            { name_gr: "Οέστε", name_en: "Oeste", desc_gr: "Ντομάτα, ψητές πιπεριές Φλωρίνης, κρεμμύδι και τριμένη φέτα.", desc_en: "Tomato, roasted Florina peppers, onion, and crumbled feta cheese." },
            { name_gr: "Καίσαρα Με Κοτόπουλο", name_en: "Chicken Caesar", desc_gr: "Δροσερή σαλάτα με μαρούλι, κοτόπουλο, κρούτον και σος Καίσαρα.", desc_en: "Refreshing salad with lettuce, chicken, croutons, and Caesar sauce." },
            { name_gr: "Χόρτα", name_en: "Boiled Greens", desc_gr: "Βραστά χόρτα με λεμόνι και ελαιόλαδο.", desc_en: "Seasonal boiled greens with lemon and olive oil." }
        ]
    },
    {
        category_gr: "Αλοιφές", category_en: "Dips",
        items: [
            { name_gr: "Τυροκαυτερή", name_en: "Tyrokauteri", desc_gr: "Πικάντικη κρέμα με φέτα και καυτερή πιπεριά.", desc_en: "Spicy feta cheese spread with hot peppers." },
            { name_gr: "Τζατζίκι", name_en: "Tzatziki", desc_gr: "Δροσερή σάλτσα με γιαούρτι, αγγούρι και σκόρδο.", desc_en: "Cool yogurt sauce with cucumber and garlic." },
            { name_gr: "Μελιτζανοσαλάτα", name_en: "Eggplant Dip", desc_gr: "Καπνιστή σαλάτα από ψητή μελιτζάνα.", desc_en: "Smoky roasted eggplant dip." }
        ]
    },
    {
        category_gr: "Ορεκτικά", category_en: "Appetizers",
        items: [
            { name_gr: "Πατάτες Τηγανητές", name_en: "French Fries", desc_gr: "Τραγανές και νόστιμες τηγανητές πατάτες.", desc_en: "Crispy and delicious fried potatoes." },
            { name_gr: "Ρεβυθοκεφτέδες", name_en: "Chickpea Fritters", desc_gr: "Συνοδεύεται με σως τζατζίκι.", desc_en: "Chickpea fritters served with tzatziki sauce." },
            { name_gr: "Κολοκυθοκεφτέδες", name_en: "Zucchini Fritters", desc_gr: "Κεφτέδες από φρέσκο κολοκύθι. Με σως τζατζίκι.", desc_en: "Fresh zucchini fritters. Served with tzatziki sauce." },
            { name_gr: "Μελιτζάνες Τηγανητές", name_en: "Fried Eggplants", desc_gr: "Τραγανές σε κουρκούτι μπύρας.", desc_en: "Crispy fried eggplants in beer batter." },
            { name_gr: "Κολοκυθάκια Τηγανητά", name_en: "Fried Zucchini", desc_gr: "Τραγανές φέτες κολοκυθιού σε κουρκούτι μπύρας.", desc_en: "Crispy fried zucchini slices in beer batter." },
            { name_gr: "Κεφτεδάκια", name_en: "Meatballs", desc_gr: "Τραγανά εξωτερικά και ζουμερά εσωτερικά. Με πατάτες.", desc_en: "Crispy outside and juicy inside. Served with fries." }
        ]
    },
    {
        category_gr: "Τυριά", category_en: "Cheeses",
        items: [
            { name_gr: "Φέτα", name_en: "Feta Cheese", desc_gr: "Αυθεντική φέτα από πρόβειο γάλα.", desc_en: "Traditional sheep's milk feta cheese." },
            { name_gr: "Τυροκροκέτες", name_en: "Cheese Croquettes", desc_gr: "Με λιωμένο τυρί. Συνοδεύεται με μαρμελάδα ντομάτας.", desc_en: "Cheese croquettes served with tomato jam." },
            { name_gr: "Κεφαλοτύρι Σαγανάκι", name_en: "Kefalotyri Saganaki", desc_gr: "Τηγανισμένο κεφαλοτύρι, χρυσαφένιο και τραγανό.", desc_en: "Fried kefalotyri cheese, golden and crispy." },
            { name_gr: "Φέτα Σαγανάκι", name_en: "Feta Saganaki", desc_gr: "Σε τραγανό φύλλο, με μέλι και σουσάμι.", desc_en: "Feta wrapped in crispy phyllo with honey and sesame." }
        ]
    },
    {
        category_gr: "Θαλασσινά", category_en: "Seafood",
        items: [
            { name_gr: "Γαρίδες Σχάρας", name_en: "Grilled Shrimps", desc_gr: "8 Γαρίδες ψημένες στη σχάρα.", desc_en: "8 Grilled shrimps." },
            { name_gr: "Καλαμάρι Τηγανητό", name_en: "Fried Calamari", desc_gr: "Τραγανό και αφράτο καλαμάρι.", desc_en: "Crispy and tender fried calamari." },
            { name_gr: "Χταπόδι Ψητό", name_en: "Grilled Octopus", desc_gr: "Μαλακό και ζουμερό χταπόδι στα κάρβουνα.", desc_en: "Tender grilled octopus." },
            { name_gr: "Χταπόδι Ξυδάτο", name_en: "Marinated Octopus", desc_gr: "Μαριναρισμένο σε ξίδι και αρωματικά.", desc_en: "Octopus marinated in vinegar." },
            { name_gr: "Μύδια Σχάρας", name_en: "Grilled Mussels", desc_gr: "Μύδια ψημένα στη σχάρα.", desc_en: "Fresh grilled mussels." },
            { name_gr: "Γαύρος", name_en: "Fried Anchovies", desc_gr: "Φρέσκος και νόστιμος τηγανητός γαύρος.", desc_en: "Fresh fried anchovies." },
            { name_gr: "Γαύρος Μαρινάτος", name_en: "Marinated Anchovies", desc_gr: "Με ελαιόλαδο, ξίδι και αρωματικά.", desc_en: "Marinated anchovies." },
            { name_gr: "Σαρδέλα", name_en: "Sardines", desc_gr: "Φρέσκες σαρδέλες, τηγανητές ή ψητές.", desc_en: "Fresh sardines." },
            { name_gr: "Η Ψαριά Του Ψαρά", name_en: "Catch of the Day", desc_gr: "Φρέσκα ψάρια ημέρας. Ρωτήστε μας!", desc_en: "Fresh fish of the day." }
        ]
    },
    {
        category_gr: "Κρεατικά", category_en: "Meat Dishes",
        items: [
            { name_gr: "Κοτόπουλο Φιλέτο", name_en: "Chicken Fillet", desc_gr: "Ζουμερό φιλέτο με πατάτες ή λαχανικά.", desc_en: "Juicy chicken fillet with fries." },
            { name_gr: "Μπριζόλα Χοιρινή", name_en: "Pork Chop", desc_gr: "Καλοψημένη με πατάτες ή ψητά λαχανικά.", desc_en: "Grilled pork chop." },
            { name_gr: "Ψαρονέφρι", name_en: "Pork Tenderloin", desc_gr: "Στη σχάρα, με πατάτες ή ψητά λαχανικά.", desc_en: "Grilled pork tenderloin." },
            { name_gr: "Πανσετάκια", name_en: "Pork Belly Slices", desc_gr: "Τρυφερά και ζουμερά κομμάτια χοιρινού.", desc_en: "Tender and juicy pork belly slices." },
            { name_gr: "Μπιφτέκι Μοσχαρίσιο", name_en: "Beef Burger", desc_gr: "Αφράτο μπιφτέκι από 100% μοσχαρίσιο κιμά.", desc_en: "Fluffy 100% ground beef burger patty." },
            { name_gr: "Λουκάνικο Καλαμάτας", name_en: "Kalamata Sausage", desc_gr: "Με πορτοκάλι. Συνοδεύεται από πατάτες.", desc_en: "Traditional sausage with orange." },
            { name_gr: "Κοτόπουλο Σουβλάκι", name_en: "Chicken Souvlaki", desc_gr: "Μαριναρισμένο σε μυρωδικά. Με πατάτες.", desc_en: "Marinated chicken skewers." }
        ]
    },
    {
        category_gr: "Ζυμαρικά", category_en: "Pasta",
        items: [
            { name_gr: "Γαριδομακαρονάδα", name_en: "Shrimp Pasta", desc_gr: "Σπαγγέτι με 6 γαρίδες σε πικάντικη σάλτσα ντομάτας.", desc_en: "Spaghetti with 6 shrimps." },
            { name_gr: "Κοτόπουλο Αλα Κρεμ", name_en: "Chicken A La Creme", desc_gr: "Με κρεμώδη σάλτσα, μανιτάρια και παρμεζάνα.", desc_en: "Chicken in a creamy sauce." },
            { name_gr: "Καρμπονάρα", name_en: "Carbonara", desc_gr: "Με κρεμώδη σάλτσα, παρμεζάνα και μπέικον.", desc_en: "Creamy sauce with bacon." },
            { name_gr: "Ναπολιτάν", name_en: "Napolitain", desc_gr: "Σπαγγέτι με πλούσια σάλτσα ντομάτας.", desc_en: "Spaghetti with tomato sauce." }
        ]
    },
    {
        category_gr: "Μεζέδες", category_en: "Platters",
        items: [
            { name_gr: "Mix Grill", name_en: "Mix Grill Platter", desc_gr: "Μπιφτέκι, πανσέτα, λουκάνικο, κεμπάπ, κοτόπουλο και πατάτες.", desc_en: "Assorted meats platter." },
            { name_gr: "Ποικιλία Θαλασσινών", name_en: "Seafood Platter", desc_gr: "Γαρίδες, μύδια, καλαμαράκια, χταπόδι και πατάτες.", desc_en: "Seafood variety platter." }
        ]
    }
];

let currentLang = 'GR';

function renderMenu() {
    const container = document.getElementById('menu-container');
    const langBtn = document.getElementById('lang-switch');
    const callBtn = document.getElementById('call-btn');
    
    // Αλλαγή γλώσσας στο κουμπί και στο "Καλέστε μας"
    langBtn.innerText = currentLang === 'GR' ? 'EN' : 'GR';
    callBtn.innerText = currentLang === 'GR' ? 'Καλέστε μας' : 'Call Us';

    container.innerHTML = '';

    menuData.forEach(cat => {
        const title = currentLang === 'GR' ? cat.category_gr : cat.category_en;
        let html = `
            <div class="menu-category">
                <h2 class="cat-title">${title}</h2>
                <div class="menu-grid">
        `;
        
        cat.items.forEach(item => {
            const name = currentLang === 'GR' ? item.name_gr : item.name_en;
            const desc = currentLang === 'GR' ? item.desc_gr : item.desc_en;
            html += `
                <div class="menu-item">
                    <h3>${name}</h3>
                    <p>${desc}</p>
                </div>
            `;
        });
        
        html += `</div></div>`;
        container.innerHTML += html;
    });
}

// Language Switch Event
document.getElementById('lang-switch').addEventListener('click', () => {
    currentLang = currentLang === 'GR' ? 'EN' : 'GR';
    renderMenu();
});

// Slideshow Logic
const slides = document.querySelectorAll('.video-slide');
let currentSlide = 0;

function showSlide(n) {
    if (slides.length === 0) return;
    slides.forEach(s => s.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

document.querySelector('.next-btn').addEventListener('click', () => showSlide(currentSlide + 1));
document.querySelector('.prev-btn').addEventListener('click', () => showSlide(currentSlide - 1));

// Εκκίνηση
renderMenu();
