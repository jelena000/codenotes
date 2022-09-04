import { useNavigate } from "react-router-dom";

const withRouter = (WrappedComponent) => props => {
    const navigate = useNavigate();
    // etc... other react-router-dom v6 hooks
  
    return (
        <WrappedComponent
            {...props}
            navigate={navigate}
        />
    );
};

export default withRouter;