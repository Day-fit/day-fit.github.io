class CardsSlider
{
    targetElement

    cards;
    cardsNumber;
    cardsWrapper;

    dots;

    currentCardIndex;

    options =
        {
            createButtons: true,
            createDots: true,

            position: "center",
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

        switch (this.options.position)
        {
            case "left":
                this.currentCardIndex = 0;
                break;

            case "center":
                this.currentCardIndex = parseInt(this.cardsNumber)/2;
                break;

            case "right":
                this.currentCardIndex = parseInt(this.cardsNumber);
                break;
        }

        if (this.options.createButtons === true)
        {
            this.addButtons();
        }

        this.cards[this.currentCardIndex].classList.add("active");
    }

    addButtons()
    {
        const leftButton = document.createElement("button");
        const rightButton = document.createElement("button");
        const dotsWrapper = document.createElement("div");
        const dots = [];

        leftButton.textContent = '<'
        leftButton.classList.add("left-button");
        leftButton.classList.add("manage-button");
        leftButton.setAttribute("disabled", "");
        leftButton.setAttribute("data-direction", "left");

        rightButton.textContent = '>'
        rightButton.classList.add("right-button");
        rightButton.classList.add("manage-button");
        rightButton.setAttribute("data-direction", "right");

        dotsWrapper.classList.add("dots-wrapper");
        this.targetElement.append(dotsWrapper);

        for (let i = 0; i <= this.cardsNumber; i++)
        {
            dots[i] = document.createElement("div");
            dots[i].classList.add("dot");
            dots[i].textContent = "."
            dots[i].style.cursor = "pointer";

            dots[i].addEventListener("click", () => {
                this.cleanClasses();
                this.currentCardIndex = i;

                leftButton.disabled = this.currentCardIndex <= 0;
                rightButton.disabled = this.currentCardIndex >= this.cardsNumber;

                this.cards[this.currentCardIndex].classList.add("active");
                this.dots[this.currentCardIndex].classList.add("active");
                this.updateSlider();
            });

            this.dots = dots;
            dotsWrapper.appendChild(dots[i]);
        }

        this.dots[this.currentCardIndex].classList.add("active");

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

        this.cleanClasses();

        this.cards[this.currentCardIndex].classList.add("active");
        this.dots[this.currentCardIndex].classList.add("active");

        this.updateSlider();
    }

    loadNext()
    {
        this.cleanClasses();

        this.currentCardIndex = Math.min(this.currentCardIndex+1, this.cardsNumber);
        this.cards[this.currentCardIndex].classList.add("active");
        this.dots[this.currentCardIndex].classList.add("active");

        this.updateSlider();
    }

    loadPrev()
    {
        this.cleanClasses();
        this.currentCardIndex = Math.max(this.currentCardIndex-1, -1);
        this.cards[this.currentCardIndex].classList.add("active");
        this.dots[this.currentCardIndex].classList.add("active");

        this.updateSlider();
    }

    cleanClasses()
    {
        if(this.cards[this.currentCardIndex])
        {
            this.cards[this.currentCardIndex].classList.remove("active");
        }

        if (this.dots[this.currentCardIndex])
        {
            this.dots[this.currentCardIndex].classList.remove("active");
        }
    }

    updateSlider() {
        const offset = -this.currentCardIndex * 100;
        this.cardsWrapper.querySelectorAll(".card").forEach(card => card.style.transform = `translateX(${offset}%)`);
    }
}