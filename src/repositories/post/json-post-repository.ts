import { postModel } from "@/models/post/postModel";
import { PostRepository } from "./postRepository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd(); // Retorna o caminho da raiz do projeto
const JSON_POSTS_FILE_PATH = resolve(ROOT_DIR, "src", "db", "posts.json");
const SIMULATE_WAIT_IN_MS = 0;

export class JsonPostRepository implements PostRepository {
  private async simulateWait() {
    return new Promise((resolve) => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }

  private async readFromDisk(): Promise<postModel[]> {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;
    return posts;
  }

  async findAllPublic(): Promise<postModel[]> {
    await this.simulateWait();
    const posts = await this.readFromDisk();
    return posts.filter((p) => p.published);
  }

  async findById(id: string): Promise<postModel> {
    const posts = await this.findAllPublic();
    const post = posts.find((post) => post.id === id);

    if (!post) throw new Error("Post not found for ID");

    return post;
  }

  async findBySlug(slug: string): Promise<postModel> {
    const posts = await this.findAllPublic();
    const post = posts.find((post) => post.slug === slug);

    if (!post) throw new Error("Post not found for SLUG");

    return post;
  }
}
