import { StreamChat } from "stream-chat";

const apiKey = import.meta.env.VITE_STREAM_API_KEY;
// const secretKey = import.meta.env.VITE_STREAM_SECRET_KEY;

const client = StreamChat.getInstance(apiKey);

export default client;
