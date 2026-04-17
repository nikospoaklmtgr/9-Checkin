const menuData = [
    {
        category_gr: "Σαλάτες", category_en: "Salads",
        items: [
            { name_gr: "Χωριάτικη", name_en: "Greek Salad", desc_gr: "Ντομάτα, κρεμμύδι, αγγούρι, φέτα, ελιά, ρίγανη.", desc_en: "Tomato, onion, cucumber, feta cheese, olives, oregano." },
            { name_gr: "Ντάκος", name_en: "Dakos", desc_gr: "Παξιμάδι, ντομάτα, φέτα και ρίγανη.", desc_en: "Barley rusk, tomato, feta cheese and oregano." },
            { name_gr: "Οέστε", name_en: "Oeste", desc_gr: "Ντομάτα, ψητές πιπεριές Φλωρίνης, κρεμμύδι, τριμένη φέτα.", desc_en: "Tomato, roasted peppers, onion, crumbled feta." },
            { name_gr: "Καίσαρα Με Κοτόπουλο", name_en: "Chicken Caesar", desc_gr: "Μαρούλι, κοτόπουλο, κρούτον και σος Καίσαρα.", desc_en: "Lettuce, chicken, croutons and Caesar sauce." },
            { name_gr: "Χόρτα", name_en: "Boiled Greens", desc_gr: "Βραστά χόρτα με λεμόνι και ελαιόλαδο.", desc_en: "Seasonal boiled greens with lemon and olive oil." }
        ]
    },
    {
        category_gr: "Αλοιφές", category_en: "Dips",
        items: [
            { name_gr: "Τυροκαυτερή", name_en: "Tyrokauteri", desc_gr: "Πικάντικη κρέμα με φέτα και καυτερή πιπεριά.", desc_en: "Spicy feta cheese spread." },
            { name_gr: "Τζατζίκι", name_en: "Tzatziki", desc_gr: "Γιαούρτι, αγγούρι και σκόρδο.", desc_en: "Yogurt, cucumber and garlic." },
            { name_gr: "Μελιτζανοσαλάτα", name_en: "Eggplant Dip", desc_gr: "Καπνιστή σαλάτα από ψητή μελιτζάνα.", desc_en: "Smoky roasted eggplant dip." }
        ]
    },
    {
        category_gr: "Ορεκτικά", category_en: "Appetizers",
        items: [
            { name_gr: "Πατάτες Τηγανητές", name_en: "French Fries", desc_gr: "Τραγανές τηγανητές πατάτες.", desc_en: "Crispy fried potatoes." },
            { name_gr: "Ρεβυθοκεφτέδες", name_en: "Chickpea Fritters", desc_gr: "Με σως τζατζίκι.", desc_en: "Served with tzatziki sauce." },
            { name_gr: "Κολοκυθοκεφτέδες", name_en: "Zucchini Fritters", desc_gr: "Με σως τζατζίκι.", desc_en: "Served with tzatziki sauce." },
            { name_gr: "Μελιτζάνες Τηγανητές", name_en: "Fried Eggplants", desc_gr: "Σε κουρκούτι μπύρας.", desc_en: "In beer batter." },
            { name_gr: "Κολοκυθάκια Τηγανητά", name_en: "Fried Zucchini", desc_gr: "Σε κουρκούτι μπύρας.", desc_en: "In beer batter." },
            { name_gr: "Κεφτεδάκια", name_en: "Meatballs", desc_gr: "Με πατάτες τηγανητές.", desc_en: "Served with French fries." }
        ]
    },
    {
        category_gr: "Τυριά", category_en: "Cheeses",
        items: [
            { name_gr: "Φέτα", name_en: "Feta Cheese", desc_gr: "Αυθεντική ελληνική φέτα.", desc_en: "Authentic Greek feta." },
            { name_gr: "Τυροκροκέτες", name_en: "Cheese Croquettes", desc_gr: "Με μαρμελάδα ντομάτας.", desc_en: "Served with tomato jam." },
            { name_gr: "Κεφαλοτύρι Σαγανάκι", name_en: "Kefalotyri Saganaki", desc_gr: "Τηγανισμένο σκληρό τυρί.", desc_en: "Fried hard cheese." },
            { name_gr: "Φέτα Σαγανάκι", name_en: "Feta Saganaki", desc_gr: "Με μέλι και σουσάμι.", desc_en: "With honey and sesame." }
        ]
    },
    {
        category_gr: "Θαλασσινά", category_en: "Seafood",
        items: [
            { name_gr: "Γαρίδες Σχάρας", name_en: "Grilled Shrimps", desc_gr: "8 τεμάχια.", desc_en: "8 pieces." },
            { name_gr: "Καλαμάρι Τηγανητό", name_en: "Fried Calamari", desc_gr: "Φρέσκο και τραγανό.", desc_en: "Fresh and crispy." },
            { name_gr: "Χταπόδι Ψητό", name_en: "Grilled Octopus", desc_gr: "Στα κάρβουνα.", desc_en: "On the grill." },
            { name_gr: "Χταπόδι Ξυδάτο", name_en: "Marinated Octopus", desc_gr: "Σε ξίδι και ελαιόλαδο.", desc_en: "In vinegar and olive oil." },
            { name_gr: "Μύδια Σχάρας", name_en: "Grilled Mussels", desc_gr: "Φρέσκα μύδια.", desc_en: "Fresh mussels." },
            { name_gr: "Γαύρος", name_en: "Anchovies", desc_gr: "Τηγανητός.", desc_en: "Fried." },
            { name_gr: "Σαρδέλα", name_en: "Sardines", desc_gr: "Ψητή ή τηγανητή.", desc_en: "Grilled or fried." }
        ]
    },
    {
        category_gr: "Κρεατικά", category_en: "Meat",
        items: [
            { name_gr: "Κοτόπουλο Φιλέτο", name_en: "Chicken Fillet", desc_gr: "Με πατάτες ή λαχανικά.", desc_en: "With fries or vegetables." },
            { name_gr: "Μπριζόλα Χοιρινή", name_en: "Pork Chop", desc_gr: "Στα κάρβουνα.", desc_en: "On the grill." },
            { name_gr: "Ψαρονέφρι", name_en: "Pork Tenderloin", desc_gr: "Με πατάτες.", desc_en: "With fries." },
            { name_gr: "Πανσετάκια", name_en: "Pork Belly", desc_gr: "Ζουμερά κομμάτια.", desc_en: "Juicy slices." },
            { name_gr: "Μπιφτέκι Μοσχαρίσιο", name_en: "Beef Burger", desc_gr: "100% μοσχάρι.", desc_en: "100% beef." },
            { name_gr: "Λουκάνικο Καλαμάτας", name_en: "Kalamata Sausage", desc_gr: "Με πορτοκάλι.", desc_en: "Local sausage with orange." },
            { name_gr: "Κοτόπουλο Σουβλάκι", name_en: "Chicken Souvlaki", desc_gr: "Με πατάτες.", desc_en: "With fries." }
        ]
    },
    {
        category_gr: "Ζυμαρικά", category_en: "Pasta",
        items: [
            { name_gr: "Γαριδομακαρονάδα", name_en: "Shrimp Pasta", desc_gr: "Σε πικάντικη σάλτσα ντομάτας.", desc_en: "In spicy tomato sauce." },
            { name_gr: "Κοτόπουλο Αλα Κρεμ", name_en: "Chicken A La Creme", desc_gr: "Με μανιτάρια.", desc_en: "With mushrooms." },
            { name_gr: "Καρμπονάρα", name_en: "Carbonara", desc_gr: "Με μπέικον και κρέμα.", desc_en: "With bacon and cream." },
            { name_gr: "Ναπολιτάν", name_en: "Napolitain", desc_gr: "Σάλτσα ντομάτας.", desc_en: "Tomato sauce." }
        ]
    },
    {
        category_gr: "Μεζέδες", category_en: "Platters",
        items: [
            { name_gr: "Mix Grill", name_en: "Mix Grill", desc_gr: "Ποικιλία κρεατικών.", desc_en: "Variety of meat." },
            { name_gr: "Ποικιλία Θαλασσινών", name_en: "Seafood Platter", desc_gr: "Ποικιλία θαλασσινών.", desc_en: "Variety of seafood." }
        ]
    }
];

let currentLang = 'GR';

function renderMenu() {
    const langBtn = document.getElementById('lang-switch');
    const callBtn = document.getElementById('call-btn');
    const headerAddr = document.getElementById('header-address');
    const footerAddr = document.getElementById('footer-address');
    const footerMobileText = document.getElementById('footer-mobile-text');
    const container = document.getElementById('menu-container');

    langBtn.innerText = currentLang === 'GR' ? 'EN' : 'GR';
    callBtn.innerText = currentLang === 'GR' ? 'Καλέστε μας' : 'Call Us';
    headerAddr.innerText = currentLang === 'GR' ? 'Διεύθυνση' : 'Directions';
    footerAddr.innerText = currentLang === 'GR' ? 'Σαράντα Εκκλησιών 1, Καλαμάτα' : '1 Saranta Ekklisies str, Kalamata';
    footerMobileText.innerText = currentLang === 'GR' ? 'Κινητό:' : 'Mobile:';

    container.innerHTML = '';
    menuData.forEach(cat => {
        const title = currentLang === 'GR' ? cat.category_gr : cat.category_en;
        let html = `<div class="menu-category"><h2 class="cat-title">${title}</h2><div class="menu-grid">`;
        cat.items.forEach(item => {
            const name = currentLang === 'GR' ? item.name_gr : item.name_en;
            const desc = currentLang === 'GR' ? item.desc_gr : item.desc_en;
            html += `<div class="menu-item"><h3>${name}</h3><p>${desc}</p></div>`;
        });
        html += `</div></div>`;
        container.innerHTML += html;
    });
}

document.getElementById('lang-switch').addEventListener('click', () => {
    currentLang = currentLang === 'GR' ? 'EN' : 'GR';
    renderMenu();
});

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

renderMenu();
