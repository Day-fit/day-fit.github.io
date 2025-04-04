const rootStyles = getComputedStyle(document.documentElement);

const primaryColorDark = rootStyles.getPropertyValue('--color-primary-dark');
const primaryColorLight = rootStyles.getPropertyValue('--color-primary-light');

const secondaryColorDark = rootStyles.getPropertyValue('--color-secondary-dark');
const secondaryColorLight = rootStyles.getPropertyValue('--color-secondary-light');

const fontColorDark = rootStyles.getPropertyValue('--font-color-primary-dark');
const fontColorLight = rootStyles.getPropertyValue('--font-color-primary-light');

const secondaryFontColorDark = rootStyles.getPropertyValue('--font-color-secondary-dark');
const secondaryFontColorLight = rootStyles.getPropertyValue('--font-color-secondary-light');

const accentColorDark = rootStyles.getPropertyValue('--accent-color-dark');
const accentColorLight = rootStyles.getPropertyValue('--accent-color-light');

const themeChanger = document.querySelector("#change-theme")
let cardsElements = document.querySelectorAll(".card");

const birthDate = new Date();

const options =
    {
        createButtons: true,
        createDots: true,
        position: "left",
    }

const optionsPortfolio =
    {
        createButtons: true,
        createDots: true,
        position: "right",
    }

const imagePath =
    {
        webp: "assets/images/Cards-icons/webp/Github.webp",
        png: "assets/images/Cards-icons/Github.png",
        alt: "Github icon image",
        dark: "dark" //if the icon is not dark, put empty string
    }

birthDate.setFullYear(2008);
birthDate.setMonth(11);

fetch("https://aboutme.dayfit.pl/api/repos")
    .then(response => response.json())
    .then(repos =>
    {
        new DynamicCardsGen(repos, document.querySelector("#projects-text"), document.querySelector("#projects-slider"), imagePath);
        cardsElements = document.querySelectorAll(".card");
        updateThemes(document.querySelector("#change-theme").classList.contains("active"));
    })
    .then(()=>
    {
        new CardsSlider(document.querySelector("#projects-slider"), optionsPortfolio);
        document.querySelector("#hidden-triangle").style.display = document.querySelector("#projects-slider").querySelectorAll(".card").length > 0 ? "block" : "none";
    }
    )
    .catch(error => console.error(error));

fetch(`https://aboutme.dayfit.pl/api/age`)
    .then(response => response.json())
    .then(data => {
        document.querySelector("#age").textContent = String(data.age)+" years-old";
    })
    .catch((error) =>
    {
        console.error("Error fetching date:", error)
        document.querySelector("#age").textContent = "N/A";
    });

document.querySelectorAll(".copy-click").forEach(value => value.addEventListener("click", (e) => {
    const data = e.currentTarget.getAttribute("data-to-copy");
    const textElement = e.currentTarget.querySelector(".copied-text");
    const savedTextContent = textElement.textContent;

    navigator.clipboard.writeText(data);

    textElement.textContent = "Copied !";

    setTimeout(() =>
    {
        textElement.textContent = savedTextContent;
    }, 2000)
}))

themeChanger.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");

    updateThemes(e.currentTarget.classList.contains("active"))

    const primaryColorVariant = e.currentTarget.classList.contains("active") ? primaryColorLight : primaryColorDark;
    const secondaryColorVariant = e.currentTarget.classList.contains("active") ? secondaryColorLight : secondaryColorDark;
    const fontColorVariant = e.currentTarget.classList.contains("active") ? fontColorLight : fontColorDark;
    const secondaryFontColorVariant = e.currentTarget.classList.contains("active") ? secondaryFontColorLight : secondaryFontColorDark;
    const accentColorVariant = e.currentTarget.classList.contains("active") ? accentColorLight : accentColorDark;

    document.documentElement.style.setProperty("--color-primary", primaryColorVariant);
    document.documentElement.style.setProperty("--color-secondary", secondaryColorVariant);
    document.documentElement.style.setProperty("--font-color-primary", fontColorVariant);
    document.documentElement.style.setProperty("--font-color-secondary", secondaryFontColorVariant);
    document.documentElement.style.setProperty("--accent-color", accentColorVariant);
});

window.addEventListener("load", () =>
{
    updateThemes(document.querySelector("#change-theme").classList.contains("active"));
    new CardsSlider(document.querySelector('#skills-showcase'), options);

    setTimeout(() =>
    {
        for(const card of cardsElements)
        {
            card.classList.remove("loading");
        }
    }, 10);
})

function updateThemes(isActive)
{
    for (const card of cardsElements) {
        if (isActive)
        {
            card.classList.remove("dark");
            card.classList.add("light")
        }

        else
        {
            card.classList.remove("light");
            card.classList.add("dark");
        }
    }

    for (const image of document.querySelectorAll("picture.dark, img.dark"))
    {
        image.style.filter = isActive ? "none" : "invert(1)";
    }
}