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
const cardsElements = document.querySelectorAll(".card");

const birthDate = new Date();

const options =
    {
        createButtons: true,
    }

birthDate.setFullYear(2008);
birthDate.setMonth(11);

fetch(`https://timeapi.io/api/time/current/zone?timeZone=Europe%2FAmsterdam`)
    .then(response => response.json())
    .then(data => {
        const serverDate = new Date(data.date);
        const diff = serverDate - birthDate;
        const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

        document.querySelector("#age").textContent = String(age)+" years-old";
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

document.addEventListener("DOMContentLoaded", () =>
{
    updateThemes(document.querySelector("#change-theme").classList.contains("active"));

    new CardsSlider(document.querySelector('#skills-slider'), options);
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

    for (const image of document.querySelectorAll("img.dark"))
    {
        image.style.filter = isActive ? "none" : "invert(1)";
    }
}