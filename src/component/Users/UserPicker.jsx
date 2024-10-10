import { useContext, useEffect } from "react";
import Spinner from "../UI/Spinner.jsx";
import UserContext from "./UserContext.js";
import useFetch from "../utils/useFetch.js";

export default function UserPicker() {
    // UserContext에서 user와 setUser 가져오기
    const { user, setUser } = useContext(UserContext);

    // fetch 훅을 이용해 users 데이터 가져오기
    const { data: users = [], status } = useFetch("http://localhost:3001/users");

    // users 데이터가 존재할 때만 setUser를 호출하도록 조건 추가
    useEffect(() => {
        if (users && users.length > 0) { // null 체크 후 length 접근
            setUser(users[0]); // users 배열의 첫 번째 사용자로 초기 설정
        }
    }, [users, setUser]);

    if (status === "loading") {
        return <Spinner />;
    }

    if (!users || users.length === 0) {
        return <p>No users available</p>; // users가 없는 경우 처리
    }

    function handleSelect(e) {
        const selectedId = e.target.value;
        const selectedUser = users.find((u) => u.id === parseInt(selectedId, 10)); // 선택된 유저 찾기
        console.log('-Picker select-', selectedUser);
        setUser(selectedUser);
    }

    return (
        <select
            className="user-picker"
            onChange={handleSelect}
            value={user?.id || ""} // user가 없을 경우 빈 값 설정
        >
            {users.map((u) => (
                <option key={u.id} value={u.id}>
                    {u.name}
                </option>
            ))}
        </select>
    );
}