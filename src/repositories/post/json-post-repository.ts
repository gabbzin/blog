import { postModel } from "@/models/post/postModel";
import { PostRepository } from "./postRepository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd(); // Retorna o caminho da raiz do projeto
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  "src",
  "db",
  "seed",
  "posts.json"
);

export class JsonPostRepository implements PostRepository {
  private async readFromDisk() {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
    const parsedJson = JSON.parse(jsonContent);
  }

  async findAll(): Promise<postModel[]> {}
}
