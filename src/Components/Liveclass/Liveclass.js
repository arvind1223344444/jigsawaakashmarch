import { useState } from "react";
import {
  AgoraRTCProvider,
  useJoin,
  useLocalCameraTrack,
  useLocalMicrophoneTrack,
  usePublish,
  useRTCClient,
  useRemoteAudioTracks,
  useRemoteUsers,
  RemoteUser,
  LocalVideoTrack,
  useClientEvent,
} from "agora-rtc-react";
import AgoraRTC, { ILocalAudioTrack, ILocalVideoTrack } from "agora-rtc-sdk-ng";


function Liveclass() {
  const client = useRTCClient(AgoraRTC.createClient({ codec: "vp8", mode: "rtc" }));
  const [channelName, setChannelName] = useState("test");
  const [AppID, setAppID] = useState("");
  const [token, setToken] = useState("");
  const [inCall, setInCall] = useState(false);

  return (
    <div >
      <h1> Join Live class </h1>
      {!inCall ? (
        <div >
        <Form
          AppID={AppID}
          setAppID={setAppID}
          channelName={channelName}
          setChannelName={setChannelName}
          token={token}
          setToken={setToken}
          setInCall={setInCall}
        />
        </div>
      ) : (
        <AgoraRTCProvider client={client}>
          <Videos channelName={channelName} AppID={AppID} token={token} />
          <br />
          <button onClick={() => setInCall(false)}>End Call</button>
        </AgoraRTCProvider>
      )}
    </div>
  );
}

function Videos(props: { channelName: string; AppID: string; token: string }) {
  const { AppID, channelName, token } = props;
  const { isLoading: isLoadingMic, localMicrophoneTrack } = useLocalMicrophoneTrack();
  const { isLoading: isLoadingCam, localCameraTrack } = useLocalCameraTrack();
  const remoteUsers = useRemoteUsers();
  const { audioTracks } = useRemoteAudioTracks(remoteUsers);

  const client = useRTCClient();
  useClientEvent(client, "user-published", (user) => {
    console.log(user);
  });

  usePublish([localMicrophoneTrack, localCameraTrack]);

  useJoin({
    appid: AppID,
    channel: channelName,
    token: token === "" ? null : token,
  });

  audioTracks.map((track) => track.play());

  const deviceLoading = isLoadingMic || isLoadingCam;
  if (deviceLoading) return <div>Loading devices...</div>;

  const deviceUnavailable = !localCameraTrack || !localMicrophoneTrack;
  if (deviceUnavailable) return <div>Please allow camera and microphone permissions</div>;

  return (
    <>
      <div>
        <LocalVideoTrack track={localCameraTrack} play={true}  />
        {remoteUsers.map((user) => (
          <RemoteUser user={user}  />
        ))}
      </div>
      <br />
      <Controls localMicrophoneTrack={localMicrophoneTrack} localCameraTrack={localCameraTrack} />
    </>
  );
}

const Controls = (props: { localMicrophoneTrack: ILocalAudioTrack; localCameraTrack: ILocalVideoTrack }) => {
  const { localMicrophoneTrack, localCameraTrack } = props;
  return (
    <div >
      <button onClick={() => void localMicrophoneTrack.setMuted(!localMicrophoneTrack.muted)}>Mute Mic</button>
      <button onClick={() => void localCameraTrack.setMuted(!localCameraTrack.muted)}>Mute Cam</button>
    </div>
  );
};

/* Standard form to enter AppID and Channel Name */
function Form(props: {
  AppID: string;
  setAppID: React.Dispatch<React.SetStateAction<string>>;
  channelName: string;
  setChannelName: React.Dispatch<React.SetStateAction<string>>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  setInCall: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { AppID, setAppID, channelName, setChannelName, token, setToken, setInCall } = props;
  return (
    <div>
      <p>Please enter your Class AppID and Channel Name</p>
      <label htmlFor="appid">Enter App ID: </label>
      <input id="appid" type="text" value={AppID} onChange={(e) => setAppID(e.target.value)} placeholder="required" />
      <br />
      <label htmlFor="channel">Class Name: </label>
      <input
        id="channel"
        type="text"
        value={channelName}
        onChange={(e) => setChannelName(e.target.value)}
        placeholder="required"
      />
      <br />
      <label htmlFor="token">Class Token: </label>
      <input id="token" type="text" value={token} onChange={(e) => setToken(e.target.value)} placeholder="optional" />
      <br />
      <button
        onClick={() => (AppID && channelName ? setInCall(true) : alert("Please enter Agora App ID and Channel Name"))}
      >
        Join
      </button>
    </div>
  );
}

export default Liveclass;


