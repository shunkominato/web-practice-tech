/**
 * Generated by orval v6.23.0 🍺
 * Do not edit manually.
 * Web Practice Tech API
 * Web Practice Tech API
 * OpenAPI spec version: 0.0.1
 */
export interface UserCompany {
  bs?: string;
  catchPhrase?: string;
  name?: string;
}

export interface UserAddressGeo {
  lat?: string;
  lon?: string;
}

export interface UserAddress {
  city?: string;
  geo?: UserAddressGeo;
  street?: string;
  suite?: string;
  zipcode?: string;
}

export interface CreateUserRequestBodyCompany {
  bs?: string | null;
  catchPhrase?: string | null;
  name?: string | null;
}

export interface CreateUserRequestBodyAddressGeo {
  lat?: string | null;
  lon?: string | null;
}

export interface CreateUserRequestBodyAddress {
  city?: string | null;
  geo?: CreateUserRequestBodyAddressGeo;
  street?: string | null;
  suite?: string | null;
  zipcode?: string | null;
}

export interface PostDetailCommentListResponseBodyInner {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

export type UserDetailCommentListResponseBody = PostDetailCommentListResponseBodyInner[];

export interface DeleteUserResponseBody { [key: string]: any }

export interface UpdateUserRequestBody {
  address?: CreateUserRequestBodyAddress;
  company?: CreateUserRequestBodyCompany;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  username?: string | null;
  website?: string | null;
}

export interface User {
  address: UserAddress;
  company?: UserCompany;
  email: string;
  id: number;
  name: string;
  phone?: string;
  username: string;
  website?: string;
}

export type UpdateUserResponseBody = User[];

export type UserResponseBody = User;

export interface CreateUserRequestBody {
  address?: CreateUserRequestBodyAddress;
  company?: CreateUserRequestBodyCompany;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  username?: string | null;
  website?: string | null;
}

export type CreateUserResponseBody = User[];

export type UserListResponseBody = User[];

export type PostDetailCommentListResponseBody = PostDetailCommentListResponseBodyInner[];

export interface DeletePostResponseBody { [key: string]: any }

export interface UpdatePostRequestBody {
  completed?: string;
  id?: number;
  title?: string;
  userId?: number;
}

export interface Post {
  completed: string;
  id: number;
  title: string;
  userId: number;
}

export type UpdatePostResponseBody = Post[];

export type PostResponseBody = Post;

export interface CreatePostRequestBody {
  completed?: string;
  id?: number;
  title?: string;
  userId?: number;
}

export type CreatePostResponseBody = Post[];

export type PostsListResponseBody = Post[];

