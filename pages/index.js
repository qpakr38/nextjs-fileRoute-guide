import Link from "next/link";

const MainPage = () => {
    return (
        <div>
            <h1>The Main Page</h1>
            <ul>
                <li>
                    <Link href = '/portfolio'>Portfolio</Link>
                </li>
                <li>
                    <Link href = '/clients'>Clients</Link>
                </li>
            </ul>
        </div>
    )
};

export default MainPage;