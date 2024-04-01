import UserInfo from "./components/UserInfo"

const AdminHome = () => {
    return (
        <section className="w-full bg-slate-950">
            <UserInfo users={userData} />
        </section>
    )
}

export default AdminHome;