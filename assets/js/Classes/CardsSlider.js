/**
 * Class representing a slider for cards.
 */
class CardsSlider {
    /**
     * The target element where the slider is rendered.
     * @type {HTMLElement}
     */
    targetElement;

    /**
     * The list of card elements.
     * @type {NodeList}
     */
    cards;

    /**
     * The number of cards.
     * @type {number}
     */
    cardsNumber;

    /**
     * The wrapper element for the cards.
     * @type {HTMLElement}
     */
    cardsWrapper;

    /**
     * The list of dot elements for navigation.
     * @type {Array}
     */
    dots;

    /**
     * The index of the currently active card.
     * @type {number}
     */
    currentCardIndex;

    /**
     * The options for the slider.
     * @type {Object}
     */
    options = {
        createButtons: true,
        createDots: true,
        position: "center",
    };

    /**
     * Create a CardsSlider instance.
     * @param {HTMLElement} targetElement - The target element to append the slider to.
     * @param {Object} options - Additional options for the slider.
     */
    constructor(targetElement, options) {
        this.targetElement = targetElement;
        this.cardsWrapper = targetElement.querySelector(".cards-wrapper");
        this.cards = targetElement.querySelectorAll(".card");
        this.cardsNumber = this.cards.length - 1;

        if (options !== undefined && options !== null) {
            for (const defaultOption of Object.keys(this.options)) {
                this.options[defaultOption] = options[defaultOption] !== undefined ? options[defaultOption] : this.options[defaultOption];
            }
        }

        switch (this.options.position) {
            case "left":
                this.currentCardIndex = 0;
                break;
            case "center":
                this.currentCardIndex = Math.floor(this.cardsNumber / 2);
                break;
            case "right":
                this.currentCardIndex = this.cardsNumber;
                break;
        }

        if (this.options.createButtons) {
            this.addButtons();
        }

        if (this.options.createDots) {
            this.addDots();
            this.dots[this.currentCardIndex].classList.add("active");
        }

        this.cards[this.currentCardIndex].classList.add("active");
        this.updateSlider();
    }

    /**
     * Add dot elements for navigation.
     */
    addDots() {
        const rightButton = this.targetElement.querySelector("button.right-button");
        const leftButton = this.targetElement.querySelector("button.left-button");

        const dotsWrapper = document.createElement("div");
        const dots = [];

        dotsWrapper.classList.add("dots-wrapper");
        this.targetElement.append(dotsWrapper);

        for (let i = 0; i <= this.cardsNumber; i++) {
            dots[i] = document.createElement("div");
            dots[i].classList.add("dot");
            dots[i].textContent = ".";
            dots[i].style.cursor = "pointer";

            dots[i].addEventListener("click", () => {
                this.cleanClasses();
                this.currentCardIndex = i;

                if (this.options.createButtons) {
                    leftButton.disabled = this.currentCardIndex <= 0;
                    rightButton.disabled = this.currentCardIndex >= this.cardsNumber;
                }

                this.cards[this.currentCardIndex].classList.add("active");
                this.dots[this.currentCardIndex].classList.add("active");
                this.updateSlider();
            });

            this.dots = dots;
            dotsWrapper.appendChild(dots[i]);
        }

        this.dots[this.currentCardIndex].classList.add("active");
    }

    /**
     * Add button elements for navigation.
     */
    addButtons() {
        const leftButton = document.createElement("button");
        const rightButton = document.createElement("button");

        leftButton.textContent = "<";
        leftButton.classList.add("left-button");
        leftButton.classList.add("manage-button");
        leftButton.disabled = this.currentCardIndex <= 0;
        leftButton.setAttribute("data-direction", "left");

        rightButton.textContent = ">";
        rightButton.classList.add("right-button");
        rightButton.classList.add("manage-button");
        rightButton.disabled = this.currentCardIndex >= this.cardsNumber;
        rightButton.setAttribute("data-direction", "right");

        leftButton.addEventListener("click", () => {
            this.loadPrev();
            leftButton.disabled = this.currentCardIndex <= 0;
            rightButton.disabled = false;
        });

        rightButton.addEventListener("click", () => {
            this.loadNext();
            rightButton.disabled = this.currentCardIndex >= this.cardsNumber;
            leftButton.disabled = false;
        });

        this.targetElement.appendChild(leftButton);
        this.targetElement.appendChild(rightButton);
    }

    /**
     * Load the next card in the slider.
     */
    loadNext() {
        this.cleanClasses();
        this.currentCardIndex = Math.min(this.currentCardIndex + 1, this.cardsNumber);

        if (this.options.createButtons) {
            this.cards[this.currentCardIndex].classList.add("active");
        }

        if (this.options.createDots) {
            this.dots[this.currentCardIndex].classList.add("active");
        }

        this.updateSlider();
    }

    /**
     * Load the previous card in the slider.
     */
    loadPrev() {
        this.cleanClasses();
        this.currentCardIndex = Math.max(this.currentCardIndex - 1, -1);

        if (this.options.createButtons) {
            this.cards[this.currentCardIndex].classList.add("active");
        }

        if (this.options.createDots) {
            this.dots[this.currentCardIndex].classList.add("active");
        }

        this.updateSlider();
    }

    /**
     * Remove active classes from the current card and dot.
     */
    cleanClasses() {
        if (this.options.createButtons && this.cards[this.currentCardIndex]) {
            this.cards[this.currentCardIndex].classList.remove("active");
        }

        if (this.options.createDots && this.dots[this.currentCardIndex]) {
            this.dots[this.currentCardIndex].classList.remove("active");
        }
    }

    /**
     * Update the slider position based on the current card index.
     */
    updateSlider() {
        const offset = -this.currentCardIndex * 100;
        this.cardsWrapper.querySelectorAll(".card").forEach(card => card.style.transform = `translateX(${offset}%)`);
    }
}