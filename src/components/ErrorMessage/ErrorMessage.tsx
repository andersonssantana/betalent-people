import './ErrorMessage.css';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="error-message__container">
      ⚠️ Erro: {message}
    </div>
  );
};

export default ErrorMessage;
