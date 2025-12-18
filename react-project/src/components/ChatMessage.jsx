import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import './ChatMessage.css'
export function ChatMessage({ message, sender }) {
  return (
    <div className={sender === 'robot' ? 'robot-message' : 'user-message'}>
      {sender === 'robot' && (
        <img src={RobotProfileImage} className="profile" />
      )}
      <div className="message-text">
        {message}
      </div>
      {sender === 'user' && (
        <img src={UserProfileImage} className="profile" />
      )}
    </div>
  );
}
