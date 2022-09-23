import {useRouter} from "next/router";

const PortfolioDetailPage = () => {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);

    return (
        <div>
            <h1>The Portfolio Detail Page</h1>
        </div>
    )
};

export default PortfolioDetailPage;