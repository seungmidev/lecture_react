import React, { useRef, useState } from 'react';

const Test14 = () => {
    const unameRef = useRef()

    // 상태초기값 => 숫자, 문자, [], {}, 논리
    // form.uname, form.pw, form.email
    const [form, setForm] = useState({
        uname: '',
        pw: '',
        email: ''
    })
    
    // 비구조할당
    const {uname, pw, email} = form

    const change = (e) => {
        const {value, name} = e.target
        // setForm({...form, uname: value})
        setForm({...form, [name]: value})
    }

    const onReset = () => {
        setForm({
            uname: '',
            pw: '',
            email: ''
        })
        unameRef.current.focus()
    }

    return (
        <div>
            <h2>input 여러개 관리</h2>
            <p>
                <input type="text" value={uname} name="uname" onChange={change} ref={unameRef} />
                <input type="text" value={pw} name="pw" onChange={change} />
                <input type="text" value={email} name="email" onChange={change} />
                <button onClick={onReset}>초기화</button>
            </p>
            <h4>이름: {uname}</h4>
            <h4>비번: {pw}</h4>
            <h4>이메일: {email}</h4>
        </div>
    );
};

export default Test14;