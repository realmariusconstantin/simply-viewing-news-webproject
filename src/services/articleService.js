// Placeholder API service
export const createArticle = (article) => {
    console.log("Creating article:", article);
};

export const getArticles = () => {
    console.log("Fetching articles...");
    return [
        { id: 1, title: "Article 1", content: "Content of Article 1" },
        { id: 2, title: "Article 2", content: "Content of Article 2" },
    ];
};

export const updateArticle = (id, article) => {
    console.log(`Updating article with id ${id}:`, article);
};

export const deleteArticle = (id) => {
    console.log(`Deleting article with id ${id}`);
};
