import { useState, useEffect, useCallback } from "react";
import Frame from "./Frame";
import axios from "axios";

type Post = {
  id: string;
  permalink: string;
  media_url: string;
  thumbnail_url?: string;
};

interface InstagramPost {
  data: Post[];
}

export default function InstagramFeed() {
  const [data, setData] = useState<Post[]>([]);

  console.log(data);

  const getData = useCallback(async () => {
    try {
      const { data: response } = await axios.get<InstagramPost>(
        "https://graph.instagram.com/me/media?fields=id,permalink,media_url,thumbnail_url,caption&access_token=IGQVJVdWRxNFp3Y0JSbV83RVY1a3RwR3pjTEx6d0NIWGNQVTBleVpJclBXdk9GTW1oRzFiZAi1mTTFnS0JVQ0w2M1hvZA1NMcm1mLTJwLXZA0Y2RnYWh5UkN5TGJ6NElxZAlRSbXhZAbzdBckU3Y0tiSEtIagZDZD"
      );
      setData(response.data);
    } catch (err) {
      console.error(err, "Failed to fetch data");
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="flex flex-wrap justify-center w-full">
      {data.length > 0 &&
        data
          .slice(0, 3)
          .map(({ id, permalink, media_url, thumbnail_url }) => (
            <Frame
              key={id}
              permalink={permalink}
              media_url={thumbnail_url ? thumbnail_url : media_url}
            />
          ))}
    </div>
  );
}
