
export const mainUrlParam = () => {
    return "?main=y";
}

export const mainUrlParamKey = () => {
    return "y";
}


export const getPostByid = (id) => {
    const array = id.filter(x => x.id === id);
    if (array.length === 1) {
        return array[0];
    }
    return null;
}
