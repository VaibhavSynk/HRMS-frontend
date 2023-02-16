import { useSelector } from "react-redux"

export const AppStringUtils: any = () => {
    const { appString } = useSelector((state:any) => state.language);

    return appString;
}

