import { createContext, useState } from "react";
const GlobalContext = createContext();
function GlobalStore(props) {
    const [globalState, setGlobalState] = useState(initialState);
    const updateData = (value, key) => setGlobalState(prev => ({ ...prev, [key]: value }));
    return <GlobalContext.Provider value={{ globalState, updateData }}>{props.children}</GlobalContext.Provider>;
}
export { GlobalStore, GlobalContext };
const initialState = {

};
export default initialState