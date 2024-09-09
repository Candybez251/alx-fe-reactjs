import { useState } from "react";


const RegistrationForm = () => {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setErrors] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username) {
            alert('All Fields are required')
            setErrors('All Fields are required')
            return;
        }
        if (!email) {
            alert('All Fields are required')
            setErrors('All Fields are required')
            return;
        }
        if (!password) {
            alert('All Fields are required')
            setErrors('All Fields are required')
            return;
        }
        console.log('Form data sent', formData)
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserName((prev) => ({ ...prev, [name]: value }))
        setEmail((prev) => ({ ...prev, [name]: value }))
        setPassword((prev) => ({ ...prev, [name]: value }))
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}
                    placeholder="Enter your username"
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter your Email Address"
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="Enter your Password"
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;