import React from "react";
import { tinaField, useTina } from "tinacms/dist/react";
import type { BlogQuery, BlogQueryVariables } from "../__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import FormattedDate from "../../src/components/react/FormattedDate.tsx";

type Props = {
  variables: BlogQueryVariables;
  data: BlogQuery;
  query: string;
};

export default function AdminBlogPost(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const blog = data.blog;

  return (
    <article className="my-4 mx-4 md:mx-32">
      <div data-tina-field={tinaField(blog, "heroImage")} className="flex">
        {blog.heroImage && (
          <img
            width={1020}
            height={510}
            src={blog.heroImage}
            alt=""
            className="w-[100%] rounded-lg"
          />
        )}
      </div>
      <div className="prose">
        <div className="title">
          <div className="date" data-tina-field={tinaField(blog, "pubDate")}>
            <p className="mt-4 mb-2">
              <FormattedDate date={blog.pubDate ?? ""} />
            </p>
            {blog.updatedDate && (
              <div
                className="last-updated-on"
                data-tina-field={tinaField(blog, "updatedDate")}
              >
                Last updated on <FormattedDate date={blog.updatedDate} />
              </div>
            )}
          </div>
          <div className="metadata mb-4">
            <div
              className="category mb-2"
              data-tina-field={tinaField(blog, "category")}
            >
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                {((blog as any).category || "Uncategorized")
                  .charAt(0)
                  .toUpperCase() +
                  ((blog as any).category || "Uncategorized").slice(1)}
              </span>
            </div>
            <div className="author" data-tina-field={tinaField(blog, "author")}>
              <span className="text-gray-300">
                By {(blog as any).author || "Unknown Author"}
              </span>
            </div>
          </div>
          <h1 className="mb-4" data-tina-field={tinaField(blog, "title")}>
            {blog.title}
          </h1>
        </div>
        <div data-tina-field={tinaField(blog, "body")}>
          <TinaMarkdown content={blog.body} />
        </div>
      </div>
    </article>
  );
}
