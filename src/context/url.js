let url;

if (process.env.NODE_ENV !== "production") {
    url = 'http://127.0.0.1:5000';
} else {
    url = process.env.REACT_APP_ROUTE;
}

export default url