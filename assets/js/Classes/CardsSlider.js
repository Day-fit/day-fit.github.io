class CardsSlider
{
    targetElement

    cards;
    cardsNumber;
    cardsWrapper;

    currentCardIndex = 0;

    options =
        {
            createButtons: true,
        }

    constructor(targetElement, options)
    {
        this.targetElement = targetElement;
        this.cardsWrapper = targetElement.querySelector(".cards-wrapper");
        this.cards = targetElement.querySelectorAll(".card");
        this.cardsNumber = this.cards.length - 1;

        if(options !== undefined && options !== null)
        {
            for (const defaultOption of Object.entries(this.options))
            {
                this.options[defaultOption] = options[defaultOption] !== undefined? options[defaultOption] : this.options[defaultOption];
            }
        }

        if (this.options.createButtons === true)
        {
            this.addButtons();
        }

        this.cards[0].classList.add("active");
    }

    addButtons()
    {
        const leftButton = document.createElement("button");
        const rightButton = document.createElement("button");

        leftButton.textContent = '<'
        leftButton.classList.add("left-button");
        leftButton.classList.add("manage-button");
        leftButton.setAttribute("disabled", "");
        leftButton.setAttribute("data-direction", "left");

        rightButton.textContent = '>'
        rightButton.classList.add("right-button");
        rightButton.classList.add("manage-button");
        rightButton.setAttribute("data-direction", "right");

        leftButton.addEventListener("click", () =>
        {
            this.loadPrev();
            leftButton.disabled = this.currentCardIndex <= 0;
            rightButton.disabled = false;
        })

        rightButton.addEventListener("click", () =>
        {
            this.loadNext();
            rightButton.disabled = this.currentCardIndex >= this.cardsNumber;
            leftButton.disabled = false;
        })

        this.targetElement.appendChild(leftButton);
        this.targetElement.appendChild(rightButton);
    }

    loadNext()
    {
        if(this.cards[this.currentCardIndex])
        {
            this.cards[this.currentCardIndex].classList.remove("active");
        }

        this.currentCardIndex = Math.min(this.currentCardIndex+1, this.cardsNumber);
        this.cards[this.currentCardIndex].classList.add("active");

        this.updateSlider();
    }

    loadPrev()
    {
        if(this.cards[this.currentCardIndex])
        {
            this.cards[this.currentCardIndex].classList.remove("active");
        }
        this.currentCardIndex = Math.max(this.currentCardIndex-1, -1);
        this.cards[this.currentCardIndex].classList.add("active");

        this.updateSlider();
    }

    updateSlider() {
        const offset = -this.currentCardIndex * 100;
        this.cardsWrapper.querySelectorAll(".card").forEach(card => card.style.transform = `translateX(${offset}%)`);
    }
}