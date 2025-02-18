import { Component, ComponentType, PropsWithChildren } from "react";
import { useAuthContext } from "../contexts/AuthContext";

export default function withAuth<T extends object>(Component: ComponentType<T>) {
    const ComponentWrapper = (props: PropsWithChildren<T>) => {
        const authContext = useAuthContext();

        return <Component {...props} auth={authContext}/>;
    }

    return ComponentWrapper;
}
