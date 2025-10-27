import { JsonPostRepository } from "./json-post-repository";
import { PostRepository } from "./postRepository";

export const postRepository: PostRepository = new JsonPostRepository();
