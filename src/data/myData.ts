import { StreamChat } from "stream-chat";

export const apiKey = import.meta.env.VITE_STREAM_API_KEY;

const client = StreamChat.getInstance(apiKey);

export const userId = "ali";
export const userName = "Ali";
export const userToken = client.devToken(userId);
export const image = `https://getstream.io/random_png/?id=${userId}&name=${userName}`;

// JSON
export const json = {
  userId,
  userName,
  userToken,
  apiKey,
  image,
};
