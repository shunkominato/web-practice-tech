/**
 * Generated by orval v6.23.0 🍺
 * Do not edit manually.
 * Web Practice Tech API
 * Web Practice Tech API
 * OpenAPI spec version: 0.0.1
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import axios from 'axios'
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import type {
  DeletePostResponseBody,
  Post,
  PostDetailCommentListResponseBody,
  PostsListResponseBody,
  UpdatePostRequestBody,
  UpdatePostResponseBody
} from '../backend.schemas'



/**
 * hogeに管理された投稿をすべて返却する.
ドメイン知識どうのこうの、あれこれ、それそれで、使われているので、
こうこうそれそれなので、このエンドポイントを削除することは、不可能.
 * @summary すべての投稿を返却する
 */
export const getPosts = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<PostsListResponseBody>> => {
    
    return axios.get(
      `/posts`,options
    );
  }


export const getGetPostsQueryKey = () => {
    return [`/posts`] as const;
    }

    
export const getGetPostsQueryOptions = <TData = Awaited<ReturnType<typeof getPosts>>, TError = AxiosError<unknown>>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getPosts>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetPostsQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getPosts>>> = ({ signal }) => getPosts({ signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getPosts>>, TError, TData> & { queryKey: QueryKey }
}

export type GetPostsQueryResult = NonNullable<Awaited<ReturnType<typeof getPosts>>>
export type GetPostsQueryError = AxiosError<unknown>

/**
 * @summary すべての投稿を返却する
 */
export const useGetPosts = <TData = Awaited<ReturnType<typeof getPosts>>, TError = AxiosError<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getPosts>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetPostsQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * N/A
 * @summary 指定されたIDの投稿を削除する.
 */
export const deletePost = (
    postId: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<DeletePostResponseBody>> => {
    
    return axios.delete(
      `/posts/${postId}`,options
    );
  }



export const getDeletePostMutationOptions = <TError = AxiosError<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deletePost>>, TError,{postId: string}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof deletePost>>, TError,{postId: string}, TContext> => {
 const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deletePost>>, {postId: string}> = (props) => {
          const {postId} = props ?? {};

          return  deletePost(postId,axiosOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type DeletePostMutationResult = NonNullable<Awaited<ReturnType<typeof deletePost>>>
    
    export type DeletePostMutationError = AxiosError<unknown>

    /**
 * @summary 指定されたIDの投稿を削除する.
 */
export const useDeletePost = <TError = AxiosError<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deletePost>>, TError,{postId: string}, TContext>, axios?: AxiosRequestConfig}
) => {

      const mutationOptions = getDeletePostMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * N/A
 * @summary 指定されたIDの投稿を取得する.
 */
export const getPostDetail = (
    postId: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Post>> => {
    
    return axios.get(
      `/posts/${postId}`,options
    );
  }


export const getGetPostDetailQueryKey = (postId: string,) => {
    return [`/posts/${postId}`] as const;
    }

    
export const getGetPostDetailQueryOptions = <TData = Awaited<ReturnType<typeof getPostDetail>>, TError = AxiosError<unknown>>(postId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getPostDetail>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetPostDetailQueryKey(postId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getPostDetail>>> = ({ signal }) => getPostDetail(postId, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(postId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getPostDetail>>, TError, TData> & { queryKey: QueryKey }
}

export type GetPostDetailQueryResult = NonNullable<Awaited<ReturnType<typeof getPostDetail>>>
export type GetPostDetailQueryError = AxiosError<unknown>

/**
 * @summary 指定されたIDの投稿を取得する.
 */
export const useGetPostDetail = <TData = Awaited<ReturnType<typeof getPostDetail>>, TError = AxiosError<unknown>>(
 postId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getPostDetail>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetPostDetailQueryOptions(postId,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * N/A
 * @summary 指定されたIDの投稿を更新する.
 */
export const updatePost = (
    postId: string,
    updatePostRequestBody: UpdatePostRequestBody, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<UpdatePostResponseBody>> => {
    
    return axios.put(
      `/posts/${postId}`,
      updatePostRequestBody,options
    );
  }



export const getUpdatePostMutationOptions = <TError = AxiosError<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updatePost>>, TError,{postId: string;data: UpdatePostRequestBody}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof updatePost>>, TError,{postId: string;data: UpdatePostRequestBody}, TContext> => {
 const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof updatePost>>, {postId: string;data: UpdatePostRequestBody}> = (props) => {
          const {postId,data} = props ?? {};

          return  updatePost(postId,data,axiosOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type UpdatePostMutationResult = NonNullable<Awaited<ReturnType<typeof updatePost>>>
    export type UpdatePostMutationBody = UpdatePostRequestBody
    export type UpdatePostMutationError = AxiosError<unknown>

    /**
 * @summary 指定されたIDの投稿を更新する.
 */
export const useUpdatePost = <TError = AxiosError<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updatePost>>, TError,{postId: string;data: UpdatePostRequestBody}, TContext>, axios?: AxiosRequestConfig}
) => {

      const mutationOptions = getUpdatePostMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * N/A
 * @summary 指定されたIDの投稿のコメントを取得する.
 */
export const getPostDetailCommentList = (
    postId: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<PostDetailCommentListResponseBody>> => {
    
    return axios.get(
      `/posts/${postId}/comments`,options
    );
  }


export const getGetPostDetailCommentListQueryKey = (postId: string,) => {
    return [`/posts/${postId}/comments`] as const;
    }

    
export const getGetPostDetailCommentListQueryOptions = <TData = Awaited<ReturnType<typeof getPostDetailCommentList>>, TError = AxiosError<unknown>>(postId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getPostDetailCommentList>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetPostDetailCommentListQueryKey(postId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getPostDetailCommentList>>> = ({ signal }) => getPostDetailCommentList(postId, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(postId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getPostDetailCommentList>>, TError, TData> & { queryKey: QueryKey }
}

export type GetPostDetailCommentListQueryResult = NonNullable<Awaited<ReturnType<typeof getPostDetailCommentList>>>
export type GetPostDetailCommentListQueryError = AxiosError<unknown>

/**
 * @summary 指定されたIDの投稿のコメントを取得する.
 */
export const useGetPostDetailCommentList = <TData = Awaited<ReturnType<typeof getPostDetailCommentList>>, TError = AxiosError<unknown>>(
 postId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getPostDetailCommentList>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetPostDetailCommentListQueryOptions(postId,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



