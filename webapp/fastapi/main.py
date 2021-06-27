from fastapi import FastAPI
from fastapi.responses import HTMLResponse

from domain.models.post import Post

app = FastAPI()

blog_posts = []


@app.get("/", response_class=HTMLResponse)
def read_root():
    return """
    <html>
        <head>
            <title>FastAPI Demo</title>
        </head>
        <body>
            <h1>Look ma! HTML!</h1>
            <a href="/docs">API Docs</a>
        </body>
    </html>
    """


@app.get("/blog")
def get_posts():
    return blog_posts


@app.get("/blog/{post_id}")
def get_post(post_id: int):
    post = post_id - 1
    return blog_posts[post]


@app.post("/blog")
def add_post(post: Post):
    blog_posts.append(post.dict())
    return blog_posts[-1]


@app.put("/blog/{post_id}")
def update_post(post_id: int, post: Post):
    blog_posts[post_id] = post
    return {"message": "Post has been updated succesfully"}


@app.delete("/blog/{post_id}")
def delete_post(post_id: int):
    blog_posts.pop(post_id-1)
    return {"message": "Post has been deleted succesfully"}
