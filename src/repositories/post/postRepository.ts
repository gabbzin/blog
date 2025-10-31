import { postModel } from "@/models/post/postModel";

export interface PostRepository {
  findAllPublic(): Promise<postModel[]>;
  findById(id: string): Promise<postModel>;
}
