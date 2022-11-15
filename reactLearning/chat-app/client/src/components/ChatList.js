import styles from './styles.module.css'
import { useChat } from '../context/ChatContext';
import ChatItem from './ChatItem';

function ChatList() {
    const { message } = useChat();

    return (
        <div className={styles.chatlist}>
            <div>
                {message.map((item, key) => (
                    <ChatItem key={key} item={item} />
                ))}
            </div>
        </div>
    )
}

export default ChatList