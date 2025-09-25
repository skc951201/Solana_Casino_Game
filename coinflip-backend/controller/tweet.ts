import { TwitterApi } from "twitter-api-v2";

const client = new TwitterApi({
  appKey: "",
  appSecret: "",
  accessToken: "",
  accessSecret: "",
});

// Function to tweet the coin flip result
export const tweetResult = async (tweetContent: string) => {
  //   const result = coinFlip();
  const tweet = "Hello fams, How are you today.😀";

  try {
    // Post the tweet to Twitter
    await client.v2.tweet(tweetContent);
    console.log(`Successfully tweeted: ${tweetContent}`);
  } catch (error) {
    console.error("Error posting tweet:", error);
  }
};
