import React from "react";
import {useObserver} from "mobx-react";
import {StoreContext} from "../../providers/store";

export const useStoreData = <Selection, ContextData, Store>(
    context: React.Context<ContextData>,
    storeSelector: (contextData: ContextData) => Store,
    dataSelector: (store: Store) => Selection
) => {
    const value = React.useContext(context);
    if (!value) {
        throw new Error();
    }
    const store = storeSelector(value);
    return useObserver(() => {
        return dataSelector(store);
    });
};

export const useRootData = <Selection>(
    dataSelector: (store: any) => Selection
) => useStoreData(StoreContext, (contextData) => contextData!, dataSelector);