import {router} from "next/client";

const ClientProjectsPage = () => {
    const loadProjectHandler=()=>{
        //load data...
        router.push({
            pathname: '/clients/[id]/[clientProjectId]',
            query: {id:'max',clientProjectId: 'projectA'}
        });
    };
    return (
        <div>
            <h1>The Projects of a Given Client</h1>
            <button onClick={loadProjectHandler}>Load Projects A</button>
        </div>
    )
        ;
};

export default ClientProjectsPage;