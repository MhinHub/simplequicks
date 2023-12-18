import { useEffect } from "react";
import useStore from "../store";
import { StreamChat, User } from "stream-chat";
import { apiKey } from "../data/myData";

export const useClient = (user: User): StreamChat | undefined => {
  const { chatClient, setChatClient } = useStore();

  useEffect(() => {
    const client = new StreamChat(apiKey);
    // prevents application from setting stale client (user changed, for example)
    let didUserConnectInterrupt = false;

    const connectionPromise = client
      .connectUser(user, client.devToken(user.id))
      .then(() => {
        if (!didUserConnectInterrupt) {
          setChatClient(client);
        }
      });

    return () => {
      didUserConnectInterrupt = true;
      setChatClient(undefined);
      // wait for connection to finish before initiating closing sequence
      connectionPromise
        .then(() => client.disconnectUser())
        .then(() => {
          console.info("connection closed");
        });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- should re-run only if user.id changes
  }, [user.id]);

  return chatClient;
};
