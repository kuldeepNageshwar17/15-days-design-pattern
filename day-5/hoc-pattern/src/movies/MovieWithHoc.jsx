import { withDataFetching } from "../hoc/withDataFetching";
import MovieList from "./MovieList";
import MovieAnalytics from "./MoviesAnalytics";

const MovieListWithData = withDataFetching(MovieList);
const MovieAnalyticsWithData = withDataFetching(MovieAnalytics);

export default function MovieLWithData() {
  return (
    <div className="max-w-lg mx-auto mt-10">
      <MovieListWithData />
      <MovieAnalyticsWithData />
    </div>
  );
}
