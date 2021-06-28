import './Loader.css'
const Loader = ({isLoading,children}) => {
    if(isLoading) return (<div className="loading">Is loading...</div>)

    return children;
}

export default Loader;