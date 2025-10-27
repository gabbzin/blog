import { postModel } from "@/models/post/postModel";

export interface PostRepository {
  findAll(): Promise<postModel[]>;
  findById(id: string): Promise<postModel>;
}
