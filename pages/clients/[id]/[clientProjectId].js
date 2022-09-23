import {useRouter} from "next/router";

const SelectedClientProjectPage = () => {
    const router = useRouter();
    console.log(router.query);
    console.log(router.pathname);
    return <div>
        <h1>The Project Page for a Specific Project for a Selected Client</h1>
        <h2>{router.query.id}</h2>
        <h2>{router.query.clientProjectId}</h2>
    </div>
};

export default SelectedClientProjectPage;