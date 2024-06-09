
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreatePostInput {
    content?: Nullable<string>;
    published?: Nullable<boolean>;
    title: string;
}

export interface UpdatePostInput {
    id: number;
}

export interface IMutation {
    createPost(createPostInput: CreatePostInput): Post | Promise<Post>;
    removePost(id: number): Nullable<Post> | Promise<Nullable<Post>>;
    updatePost(updatePostInput: UpdatePostInput): Post | Promise<Post>;
}

export interface Post {
    content?: Nullable<string>;
    id?: Nullable<number>;
    published: boolean;
    title: string;
}

export interface IQuery {
    getPost(id: number): Nullable<Post> | Promise<Nullable<Post>>;
    getPosts(): Nullable<Post>[] | Promise<Nullable<Post>[]>;
}

type Nullable<T> = T | null;
