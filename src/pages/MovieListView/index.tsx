interface IMovieListViewProps extends React.PropsWithChildren{}
const MovieListView: React.FunctionComponent<IMovieListViewProps> = (props):JSX.Element => {
    return (
        <div className="bg-dark-secondary h-[30px]">
            This is list view
        </div>
    );
};

export default MovieListView;