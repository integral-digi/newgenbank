
import { inputStyle, pStyle, sectionStyle }  from "./Personal";

const SecurityInfo = () => {
    return (
        <section className="w-[60%] space-y-8 lg:w-full">
            <section className="space-y-8">
                <section className="space-y-7 w-full">
                    <p className={pStyle}>Old Password</p>
                    <input type="password" className={inputStyle}  />
                </section>
                <section className="space-y-7 w-full">
                    <p className={pStyle}>New Password</p>
                    <input type="password" className={inputStyle} />
                </section>
                <section className={sectionStyle}>
                    <p className={pStyle}>Confirm New Password</p>
                    <input type="password" className={inputStyle} />
                </section>
            </section>
            <button className="text-white text-lg font-bold bg-indigo-800 w-48 h-12 rounded-lg">Save Changes</button>
        </section>
    )
}

export default SecurityInfo;