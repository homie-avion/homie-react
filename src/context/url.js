let url;

if (process.env.NODE_ENV !== "production") {
    url = process.env.REACT_APP_ROUTE;
} else {
    url = process.env.REACT_APP_ROUTE;
}

export default url