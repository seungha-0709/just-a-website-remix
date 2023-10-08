import { getSinglePost } from "@/utils/posts.server";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useRouteLoaderData } from "@remix-run/react";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const post = await getSinglePost(params.id);

  return json({ id: params.id, post });
};

const SuccessItemPage = () => {
  const { id, post } = useLoaderData<typeof loader>();
  return (
    <div>
      성공사례 아이템 페이지
      <p>{id}</p>
      <p>{post.excerpt}</p>
    </div>
  );
};

export default SuccessItemPage;
