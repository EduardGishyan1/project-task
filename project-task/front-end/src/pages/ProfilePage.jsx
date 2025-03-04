import MenuList from "../components/MenuList"
import UserInfo from "../components/UserInfo"
import "../index.css"

const Profile = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <header>
                    <MenuList />
                </header>

                <main className="flex-grow flex items-center justify-center bg-gray-200">
                    <UserInfo />
                </main>

                <footer className="bg-gray-800 text-white p-4 text-center">
                    © 2025 Your Company
                </footer>
            </div>

        </>
    )
}

export default Profile