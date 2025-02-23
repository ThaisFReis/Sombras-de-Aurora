interface MessageProps {
    sender: string;
    text: string;
    timestamp: string;
  }
  
  const Message = ({ sender, text, timestamp }: MessageProps) => {
    return (
      <div className="mb-2">
        <strong>{sender}:</strong> <span>{text}</span>
        <small className="block text-gray-400 text-xs">{timestamp}</small>
      </div>
    );
  };
  
  export default Message;
  