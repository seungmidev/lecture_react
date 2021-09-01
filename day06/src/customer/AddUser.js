import React, { useRef, useState } from 'react';

const AddUser = ({onAdd}) => {
    const nameRef = useRef()

    const [user, setUser] = useState({
        name: '', addr: ''
    })
    const {name, addr} = user

    const changeInput = (e) => {
        const {value, name} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name || !addr) return

        // 데이터 추가
        onAdd(user)

        // 폼 초기화
        setUser({
            name: '', addr: ''
        })

        // 첫번째 인풋 포커스
        nameRef.current.focus()
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>모범택시 고객 추가</h2>
            <p>
                <label>이름</label>
                <input type="text" value={name} name="name" onChange={changeInput} ref={nameRef} />
            </p>
            <p>
                <label>주소</label>
                <input type="text" value={addr} name="addr" onChange={changeInput} />
            </p>
            <p>
                <button type="submit">추가</button>
            </p>
        </form>
    );
};

export default AddUser;