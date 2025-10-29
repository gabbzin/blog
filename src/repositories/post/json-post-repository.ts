import { postModel } from "@/models/post/postModel";
import { PostRepository } from "./postRepository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd(); // Retorna o caminho da raiz do projeto
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  "src",
  "db",
  "posts.json"
);

export class JsonPostRepository implements PostRepository {
  private async readFromDisk(): Promise<postModel[]> {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;
    return posts;
  }

  async findAll(): Promise<postModel[]> {
    const posts = await this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<postModel> {
    const posts = await this.findAll();
    const post = posts.find((post) => post.id === id);

    if (!post) throw new Error("Post not found");

    return post;
  }
}