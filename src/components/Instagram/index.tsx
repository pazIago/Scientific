import Frame from "./Frame";
import type { Post } from "@/pages";

interface Props {
  posts: Post[];
}

export default function InstagramFeed({ posts }: Props) {
  return (
    <div className="flex flex-wrap justify-center w-full">
      {posts.length > 0 &&
        posts.map(({ id, permalink, media_url, thumbnail_url }) => (
          <Frame
            key={id}
            permalink={permalink}
            media_url={thumbnail_url ? thumbnail_url : media_url}
          />
        ))}
    </div>
  );
}
