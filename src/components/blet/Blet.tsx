import { useGetProjectManagersQuery } from '../../generated/frontend/graphql';
import { queryParams } from '../../fetchParamsCodegen';

const Blet: React.FC = () => {
  console.log(queryParams);
  const { status, data, error, isLoading } = useGetProjectManagersQuery(queryParams);
   //const [mu,{status, data, error, isLoading}] = useInsertPayMethodMutation(queryParams, { type: "tryFromReact" });
  
  console.log(` status: ${status}\n data: ${data}\n error: ${error}\n isFetching: ${isLoading}`);
  if (error)
    return <div><h1>{`${error}`}</h1></div>;
  if (isLoading)
    return <div><h2>{status}</h2></div>;
  return (
    <div>
      error: {error},
      isFetching: {isLoading},
      stat: {status},
      {data?.project_managers.map((e) => JSON.stringify(e))}
    </div>
  );
};

export default Blet;