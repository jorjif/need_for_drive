import PageLoading from "./componentLoad";
import "./statusHandler.scss";
function StatusHandler({ isFetching, isError, error, children }) {
  if (isFetching) {
    return <PageLoading />;
  }
  if (isError) {
    return (
      <div className="page_error">{`Упс! Произошла ошибка 
      "${error.error}", вернитесь в начало!`}</div>
    );
  }
  return children;
}
export default StatusHandler;
