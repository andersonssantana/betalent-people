import './ErrorMessage.css';

interface ErrorMessageProps {
  message: string;
}

function ErrorMessage ({ message }: ErrorMessageProps) {
  return (
    <div className="error-message__container">
      ⚠️ Erro: {message}
    </div>
  );
};

export default ErrorMessage;
