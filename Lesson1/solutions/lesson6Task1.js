const lesson6Task1Html = `<div id="lesson6Task1">
                            <div id="drawBlock">
                            </div>
                            <div id="buttonsBlock">
                              <div id="fetchStatus">
                                <button id="fetch">Fetch posts</button>
                                <p>Status: <span id="status" class="empty">Empty</span></p>
                              </div>
                              <button id="list">List posts</button>
                              <div id="getPost">
                                <label for="getId">Input an id</label>
                                <input id="getId" type="number" required value="1" step="1" min="1" max="100">
                                <button id="get">Get post</button>
                              </div>
                              <button id="clear">Clear posts</button>
                            </div>
                          </div>`;

function lesson6Task1Logic() {
  class DataHandler {
    constructor() {
      this.url = "https:/jsonplaceholder.typicode.com/posts";
      this.data = new Map();
    }

    async fetchPosts() {
      try {
        let responce = await fetch(this.url);

        if (!responce.ok) {
          throw new Error("Network responce was not ok", responce.statusText);
        }

        let posts = await responce.json();
        posts.forEach((post) => this.data.set(post.id, post));
      } catch (error) {
        console.error("The was a problem with the fetch operation:", error);
      }
    }

    listPosts() {
      let entries = Array.from(this.data.entries());

      entries.sort((a, b) => a[1].title.localeCompare(b[1].title));

      this.data = new Map(entries);

      return this.data;
    }

    getPost(id) {
      for (let [key, value] of this.data) {
        if (value.id === id) return value;
      }
    }

    clearPosts() {
      this.data.clear();
    }
  }

  async function main() {
    const handler = new DataHandler();

    const fetchButton = document.getElementById("fetch");
    const fetchStatus = document.getElementById("status");
    fetchButton.addEventListener("click", function () {
      handler.fetchPosts();
      fetchStatus.innerText = `Fulfilled`;
      fetchStatus.classList.remove("empty");
      fetchStatus.classList.add("fulfilled");
    });

    const listButton = document.getElementById("list");
    const drawBlock = document.getElementById("drawBlock");
    listButton.addEventListener("click", function () {
      const sortedPosts = handler.listPosts();
      let postsHTML = "";
      sortedPosts.forEach((post) => {
        postsHTML += `<div id="post">
                          <h4>Id: ${post.id}</h4>
                          <p>${post.title}</p>
                        </div>`;
      });
      drawBlock.innerHTML = postsHTML;
    });

    const getPostButton = document.getElementById("get");
    const getPostInput = document.getElementById("getId");
    getPostButton.addEventListener("click", function () {
      const postId = Number(getPostInput.value);
      const post = handler.getPost(postId);
      drawBlock.innerHTML = `<div id="post">
                              <h4>Id: ${post.id}</h4>
                              <p>${post.title}</p>
                            </div>`;
    });

    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", function () {
      handler.clearPosts();
      drawBlock.innerHTML = "";
      fetchStatus.innerText = `Empty`;
      fetchStatus.classList.remove("fulfilled");
      fetchStatus.classList.add("empty");
    });
  }

  main();
}

export { lesson6Task1Html, lesson6Task1Logic };
