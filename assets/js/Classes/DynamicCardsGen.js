/**
 * Class representing a dynamic card generator.
 */
class DynamicCardsGen {
    /**
     * Create a DynamicCardsGen instance.
     * @param {Array} repositories - The list of repositories to display.
     * @param {HTMLElement} projectsText - The element to display project status text.
     * @param {HTMLElement} targetElement - The target element to append the cards to.
     * @param {Object} imagePaths - The paths for the images to be used in the cards.
     */
    constructor(repositories, projectsText, targetElement, imagePaths) {
        const PROJECTS_LANDER_TEXT = "Coming Soon!\nStay Tuned";
        const PROJECTS_ERROR_TEXT = "Something went wrong. Please refresh website and try again.";
        let errorHappened = false;

        this.targetElement = targetElement ? targetElement : document.body;
        this.imagePaths = imagePaths;
        this.repositories = repositories;

        if (!errorHappened && this.repositories.length > 0) {
            this.setup();
            projectsText.style.display = "none";
        } else {
            projectsText.textContent = errorHappened ? PROJECTS_ERROR_TEXT : PROJECTS_LANDER_TEXT;
        }
    }

    /**
     * Set up the card elements and append them to the target element.
     */
    setup() {
        const wrapper = document.createElement("div");
        wrapper.classList.add("cards-wrapper");
        this.targetElement.appendChild(wrapper);
        wrapper.style.transform = `translateX(calc(240px * ${(this.repositories.length-1)/2}))`;

        for (const repository of this.repositories) {
            const cardElement = document.createElement("div");
            cardElement.classList.add("card");
            cardElement.addEventListener("click", () =>
            {
                window.open(repository.html_url, "_blank");
            })

            const titleElement = document.createElement("h2");
            titleElement.classList.add("title");
            titleElement.textContent = repository.name;

            const pictureElement = document.createElement("picture");
            pictureElement.classList.add(this.imagePaths.dark);

            const sourceElement = document.createElement("source");
            sourceElement.srcset = this.imagePaths.webp;
            sourceElement.type = "image/webp";

            const imageElement = document.createElement("img");
            imageElement.src = this.imagePaths.png;
            imageElement.alt = this.imagePaths.alt;
            imageElement.loading = "lazy";

            const descriptionElement = document.createElement("h5");
            descriptionElement.classList.add("description");
            descriptionElement.textContent = repository.description;

            wrapper.appendChild(cardElement);
            cardElement.appendChild(titleElement);
            cardElement.appendChild(pictureElement);

            pictureElement.appendChild(sourceElement);
            pictureElement.appendChild(imageElement);

            cardElement.appendChild(descriptionElement);
        }
    }
}