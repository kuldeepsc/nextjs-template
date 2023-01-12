// debug.js

export function logRequest(req) {
    console.log(`${req.method} ${req.url}`);
    console.log(req.headers);
    console.log(req.body);
}

export function logResponse(res) {
    console.log(res.statusCode);
    console.log(res.headers);
    console.log(res.body);
}

export function logError(error) {
    console.error(error.message);
    console.error(error.stack);
}

export function logAction(action) {
    console.log(action.type, action.payload);
}

export function logState(state) {
    console.log(state);
}

export function logRenders(componentName) {
    let count = 0;
    return (BaseComponent) => {
        return (props) => {
            console.log(`${componentName} rendered ${++count} times`);
            return <BaseComponent {...props} />;
        };
    };
}
