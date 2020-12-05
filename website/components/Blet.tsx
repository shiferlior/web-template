import { useGetProjectManagersQuery } from '../generated/frontend/graphql';

const Blet: React.FC = () => {
  const { status, data, error, isFetching } = useGetProjectManagersQuery();
  console.log(` status: ${status}\n data: ${data}\n error: ${error}\n isFetching: ${isFetching}`);
  if (error)
    return <div><h1>{`${error}`}</h1></div>;
  if (isFetching)
    return <div><h2>{status}</h2></div>;
  return (
    <div>
      error: {error},
      isFetching: {isFetching},
      stat: {status},
      {data?.project_managers.map((e) => JSON.stringify(e))}
    </div>
  );
};

export default Blet;