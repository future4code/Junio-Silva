export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }

export type Post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    author_id: string
 }


 export interface  PostInputDTO {
    photo:string, 
    description:string, 
    type: POST_TYPES,
    authorId: string
 }