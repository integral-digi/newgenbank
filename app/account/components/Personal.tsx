"use client"
import { useState, ChangeEvent } from "react";
import { user } from "./UserData";  

interface UserSettings {
    username: string;
    firstName: string;
    lastName: string;
    address: string;
}

interface PersonalSettingsProps {
    user: UserSettings;
}

export const sectionStyle: string = "w-full space-y-7";
export const pStyle: string = "text-white text-base font-bold";
export const inputStyle: string = "w-full rounded-md border border-gray-300 border-slate-600 text-white bg-transparent h-12 font-medium pl-6";

const PersonalSettings: React.FC<PersonalSettingsProps> = ({ user }) => {
    const [userName, setUserName] = useState<string>(user.username);
    const handleUChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value)
    }
    const [firstName, setFirstName] = useState<string>(user.firstName);
    const handleFChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value)
    }
    const [lastName, setLastName] = useState<string>(user.lastName);
    const handleLChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value)
    }
    const [address, setAddress] = useState<string>(user.address);
    const handleAddChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value)
    }
    const [fileUpload, setFileUpload] = useState<File | null>(null);
    const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFileUpload(event.target.files[0]);
        }
    }

    const saveChanges = async () => {
        try {
            const response = await fetch('/updateUserSettings?userId=yourUserId', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: userName,
                    firstName: firstName,
                    lastName: lastName,
                    address: address
                })
            });
            if (!response.ok) {
                throw new Error('Failed to update user settings');
            }
            // Handle success
        } catch (error) {
            // Handle error
            console.error('Error updating user settings:', error);
        }
    };

    return (
        <section className="w-[60%] min-h-screen space-y-16 lg:w-full">
            <section className="space-y-8 w-full">
                <section className="w-24 h-24 relative">
                    <img src={user.avatar} alt={user.username} className="w-full h-full rounded-full object-cover" />
                    <section className="bg-slate-900 w-6 h-6 rounded-full flex items-center absolute bottom-0 right-0 cursor-pointer">
                        <label htmlFor="avatarUploader" className="mx-auto cursor-pointer">
                            <img src="/assets/camera.svg" alt="upload" className="w-4 h-4" />
                        </label>
                        <input type="file" accept="image" className="hidden" id="avatarUploader" onChange={handleFileUpload} />
                    </section>
                </section>
                <section className={sectionStyle}>
                    <p className={pStyle}>Username</p>
                    <section className="relative">
                        <input type="text" className={inputStyle} value={userName} onChange={handleUChange} />
                        <img src="/assets/username.svg" alt="User Icon" className="w-4 h-4 absolute right-4 top-4" />
                    </section>
                </section>
                <section className="flex flex-1 items-center space-x-16">
                    <section className="space-y-7 w-full">
                        <p className={pStyle}>First Name</p>
                        <input type="text" className={inputStyle} value={firstName} onChange={handleFChange} />
                    </section>
                    <section className="space-y-7 w-full">
                        <p className={`${pStyle} text-right`}>Last Name</p>
                        <input type="text" className={inputStyle} value={lastName} onChange={handleLChange} />
                    </section>
                </section>
                <section className={sectionStyle}>
                    <p className={pStyle}>Address</p>
                    <input type="text" className={inputStyle} value={address} onChange={handleAddChange} />
                </section>
            </section>
            <button className="text-white text-lg font-secondary bg-indigo-800 w-48 h-12 rounded-lg" onClick={saveChanges}>Save Changes</button>
        </section>
    )
}

export default PersonalSettings;
