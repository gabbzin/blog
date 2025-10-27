import { postModel } from "@/models/post/postModel";

export interface PostRepository {
    findAll(): Promise<postModel[]>
}