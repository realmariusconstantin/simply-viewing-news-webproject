<template>
  <div class="admin-dashboard">
    <h1>Admin Dashboard</h1>
    <form @submit.prevent="handleCreate">
      <h2>Create New Article</h2>
      <input type="text" v-model="newArticle.title" placeholder="Title" required />
      <textarea v-model="newArticle.content" placeholder="Content" required></textarea>
      <button type="submit">Create Article</button>
    </form>

    <h2>Articles List</h2>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <strong>{{ article.title }}</strong>
        <p>{{ article.content }}</p>
        <button @click="editArticle(article)">Edit</button>
        <button @click="deleteArticle(article.id)">Delete</button>
      </li>
    </ul>

    <div v-if="editMode">
      <h2>Edit Article</h2>
      <form @submit.prevent="handleUpdate">
        <input type="text" v-model="editedArticle.title" placeholder="Title" required />
        <textarea v-model="editedArticle.content" placeholder="Content" required></textarea>
        <button type="submit">Update Article</button>
        <button type="button" @click="cancelEdit">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
import { createArticle, getArticles, updateArticle, deleteArticle } from "../services/articleService.js";

export default {
  data() {
    return {
      articles: [],
      newArticle: {
        title: "",
        content: "",
      },
      editMode: false,
      editedArticle: null,
    };
  },
  methods: {
    fetchArticles() {
      this.articles = getArticles();
    },
    handleCreate() {
      createArticle(this.newArticle);
      this.fetchArticles(); // Refresh the list
      this.newArticle = { title: "", content: "" }; // Reset form
    },
    editArticle(article) {
      this.editMode = true;
      this.editedArticle = { ...article };
    },
    handleUpdate() {
      updateArticle(this.editedArticle.id, this.editedArticle);
      this.fetchArticles();
      this.cancelEdit();
    },
    cancelEdit() {
      this.editMode = false;
      this.editedArticle = null;
    },
    deleteArticle(id) {
      deleteArticle(id);
      this.fetchArticles();
    },
  },

  mounted() {
    this.fetchArticles();
  },
};
</script>

<style>
.admin-dashboard {
  padding: 20px;
  background-color: black;
}

.admin-dashboard form{
  margin-bottom: 20px;
  background-color:black;
}

.admin-dashboard input, textarea, button {
  display: block;
  margin: 10px 0;
}



</style>
