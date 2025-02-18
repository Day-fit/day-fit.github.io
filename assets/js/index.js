const rootStyles = getComputedStyle(document.documentElement);

const primaryColorDark = rootStyles.getPropertyValue('--color-primary-dark');
const primaryColorLight = rootStyles.getPropertyValue('--color-primary-light');

const secondaryColorDark = rootStyles.getPropertyValue('--color-secondary-dark');
const secondaryColorLight = rootStyles.getPropertyValue('--color-secondary-light');

const fontColorDark = rootStyles.getPropertyValue('--font-color-primary-dark');
const fontColorLight = rootStyles.getPropertyValue('--font-color-primary-light');

const secondaryFontColorDark = rootStyles.getPropertyValue('--font-color-secondary-dark');
const secondaryFontColorLight = rootStyles.getPropertyValue('--font-color-secondary-light');

const birthDate = new Date();
birthDate.setFullYear(2008);
birthDate.setMonth(11);

fetch(`https://timeapi.io/api/time/current/zone?timeZone=Europe%2FAmsterdam`)
    .then(response => response.json())
    .then(data => {
        const serverDate = new Date(data.date);
        const diff = serverDate - birthDate;
        const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)); // Uwzględnia lata przestępne

        document.querySelector("#age").textContent = String(age); // Display the correct age
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

document.querySelector("#change-theme").addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");

    const primaryColorVariant = e.currentTarget.classList.contains("active") ? primaryColorLight : primaryColorDark;
    const secondaryColorVariant = e.currentTarget.classList.contains("active") ? secondaryColorLight : secondaryColorDark;
    const fontColorVariant = e.currentTarget.classList.contains("active") ? fontColorLight : fontColorDark;
    const secondaryFontColorVariant = e.currentTarget.classList.contains("active") ? secondaryFontColorLight : secondaryFontColorDark;

    if (e.currentTarget.classList.contains("active")) {
        console.log("test");

        document.documentElement.style.setProperty("--color-primary", primaryColorVariant);
        document.documentElement.style.setProperty("--color-secondary", secondaryColorVariant);
        document.documentElement.style.setProperty("--font-color-primary", fontColorVariant);
        document.documentElement.style.setProperty("--font-color-secondary", secondaryFontColorVariant);
    } else {
        document.documentElement.style.setProperty("--color-primary", primaryColorDark);
        document.documentElement.style.setProperty("--color-secondary", secondaryColorDark);
        document.documentElement.style.setProperty("--font-color-primary", fontColorDark);
        document.documentElement.style.setProperty("--font-color-secondary", secondaryFontColorDark);
    }
});