import { MessageType } from "@/types/Message";
  
  const Message = ({ from, content, timestamp }: MessageType) => {
    return (
      <div className="mb-2">
        <strong>{from}:</strong> <span>{content}</span>
        <p>{from}</p>
        <small className="block content-gray-400 content-xs">{timestamp}</small>
      </div>
    );
  };
  
  export default Message;
  