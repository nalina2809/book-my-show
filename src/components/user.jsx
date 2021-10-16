const User = (props) => {
    return(
        <div>
            <h5>
            {props.name}
            </h5>
            <p>{props.description}</p>
        </div>
    );
};

export default User;