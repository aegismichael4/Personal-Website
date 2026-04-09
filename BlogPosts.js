blogHoverCards.forEach((card) => {
    card.addEventListener("click", () => {
        window.location.href = "./blog-posts/blog.html"
    });
});

class BlogPostData {
    id;
    title;
    body = "";
}