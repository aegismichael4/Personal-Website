
blogHoverCards.forEach((card) => {
    card.addEventListener("click", () => {
        const blogID = card.parentElement.id;
        window.location.href = `./blog-posts/blog.html?blog=${blogID}`;
    });
});

const blogTitleButtons = blogHoverCardsContainer.querySelectorAll("h3");

blogTitleButtons.forEach((card) => {
    card.addEventListener("click", () => {
        const blogID = card.parentElement.id;
        window.location.href = `./blog-posts/blog.html?blog=${blogID}`;
    });
});