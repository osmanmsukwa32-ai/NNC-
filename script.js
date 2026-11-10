
document.addEventListener("DOMContentLoaded", () => {

  // MOBILE NAVIGATION
  const menuToggle = document.getElementById("menuToggle");
  const navbar = document.getElementById("navbar");

  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  navbar.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });

  // MULTILINGUAL SYSTEM
  const translations = {

    en: {
      home: "Home",
      about: "About",
      education: "Education",
      science: "Science",
      technology: "Technology",
      astronomy: "Astronomy",
      culture: "Culture",
      business: "Business",
      library: "Digital Library",
      heroTitle: "Knowledge, Heritage & Global Unity",
      heroText: "Explore education, Rastafari Nyahbinghi heritage, science, technology, astronomy, business and innovation.",
      explore: "EXPLORE NNC",
      searchTitle: "Discover Knowledge",
      searchPlaceholder: "Search NNC...",
      aboutTitle: "Welcome to NNC",
      aboutText: "A platform for learning, cultural preservation, knowledge sharing and global development.",
      exploreTitle: "Explore Our Global Platform"
    },

    ny: {
      home: "Poyambira",
      about: "Za NNC",
      education: "Maphunziro",
      science: "Sayansi",
      technology: "Tekinoloji",
      astronomy: "Zakuthambo",
      culture: "Chikhalidwe",
      business: "Mabizinesi",
      library: "Laibulale",
      heroTitle: "Chidziwitso, Cholowa ndi Umodzi wa Dziko",
      heroText: "Phunzirani za maphunziro, cholowa cha Rastafari Nyahbinghi, sayansi, tekinoloji, zakuthambo ndi mabizinesi.",
      explore: "ONANI NNC",
      searchTitle: "Fufuzani Chidziwitso",
      searchPlaceholder: "Fufuzani mu NNC...",
      aboutTitle: "Takulandirani ku NNC",
      aboutText: "Malo ophunzirira, kusunga chikhalidwe, kugawana chidziwitso ndi chitukuko cha dziko.",
      exploreTitle: "Onani Zigawo za NNC"
    },

    sw: {
      home: "Mwanzo",
      about: "Kuhusu",
      education: "Elimu",
      science: "Sayansi",
      technology: "Teknolojia",
      astronomy: "Unajimu",
      culture: "Utamaduni",
      business: "Biashara",
      library: "Maktaba",
      heroTitle: "Maarifa, Urithi na Umoja wa Dunia",
      heroText: "Gundua elimu, urithi wa Rastafari Nyahbinghi, sayansi, teknolojia na biashara.",
      explore: "GUNDUA NNC",
      searchTitle: "Gundua Maarifa",
      searchPlaceholder: "Tafuta NNC...",
      aboutTitle: "Karibu NNC",
      aboutText: "Jukwaa la kujifunza, kuhifadhi utamaduni na kushiriki maarifa.",
      exploreTitle: "Gundua Jukwaa Letu"
    },

    fr: {
      home: "Accueil",
      about: "À propos",
      education: "Éducation",
      science: "Science",
      technology: "Technologie",
      astronomy: "Astronomie",
      culture: "Culture",
      business: "Commerce",
      library: "Bibliothèque",
      heroTitle: "Savoir, Patrimoine et Unité Mondiale",
      heroText: "Découvrez l'éducation, le patrimoine Rastafari Nyahbinghi, la science et la technologie.",
      explore: "EXPLORER NNC",
      searchTitle: "Découvrir le Savoir",
      searchPlaceholder: "Rechercher NNC...",
      aboutTitle: "Bienvenue à NNC",
      aboutText: "Une plateforme d'apprentissage, de préservation culturelle et de partage des connaissances.",
      exploreTitle: "Explorer Notre Plateforme"
    }

  };

  const languageSelect = document.getElementById("language");

  function changeLanguage(language) {

    const words = translations[language] || translations.en;

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.dataset.i18n;

      if (words[key]) {
        element.textContent = words[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
      const key = element.dataset.i18nPlaceholder;

      if (words[key]) {
        element.placeholder = words[key];
      }
    });

    localStorage.setItem("nnc-language", language);
  }

  const savedLanguage = localStorage.getItem("nnc-language") || "en";

  languageSelect.value = savedLanguage;
  changeLanguage(savedLanguage);

  languageSelect.addEventListener("change", () => {
    changeLanguage(languageSelect.value);
  });

  // SEARCH SYSTEM
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const searchMessage = document.getElementById("searchMessage");

  function searchNNC() {

    const query = searchInput.value.trim().toLowerCase();

    const cards = document.querySelectorAll(".card");

    let found = 0;

    cards.forEach(card => {

      const content = card.textContent.toLowerCase();

      if (query === "" || content.includes(query)) {
        card.style.display = "";
        found++;
      } else {
        card.style.display = "none";
      }

    });

    searchMessage.textContent =
      query === ""
        ? ""
        : found + " matching section(s) found.";

    document.getElementById("explore").scrollIntoView({
      behavior: "smooth"
    });

  }

  searchButton.addEventListener("click", searchNNC);

  searchInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      searchNNC();
    }
  });

  console.log("NNC Global Platform is ready!");

});
