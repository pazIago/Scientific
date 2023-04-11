import Frame from "./Frame";

interface instagramPost {
  id: string;
  permalink: string;
  media_url: string;
  thumbnail_url?: string;
}

async function getData() {
  const res = await fetch(
    "https://graph.instagram.com/me/media?fields=id,permalink,media_url,thumbnail_url,caption&access_token=IGQVJVdWRxNFp3Y0JSbV83RVY1a3RwR3pjTEx6d0NIWGNQVTBleVpJclBXdk9GTW1oRzFiZAi1mTTFnS0JVQ0w2M1hvZA1NMcm1mLTJwLXZA0Y2RnYWh5UkN5TGJ6NElxZAlRSbXhZAbzdBckU3Y0tiSEtIagZDZD"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}



const InstagramFeed = async function InstagramFeed() {
  const { data } = await getData();
  console.log(data);

  return (
    <div className="flex flex-wrap justify-center w-full">
      {data
        .slice(0, 3)
        .map(({ id, permalink, media_url, thumbnail_url }: instagramPost) => (
          <Frame
            key={id}
            permalink={permalink}
            media_url={thumbnail_url ? thumbnail_url : media_url}
          />
        ))}
    </div>
  );
};

export default InstagramFeed;
