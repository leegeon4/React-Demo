import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState("idle");

    useEffect(() => {
        let doUpdate = true;
        setStatus("loading");
        setData(undefined);
        setError(null);

        fetch(url)
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error("There was a problem fetching data.");
                }
                return resp.json();
            })
            .then((data) => {
                if (doUpdate) {
                    setData(data);      // 상태값 변경함수 실행
                    setStatus("success");
                }
            })
            .catch(error => {
                if (doUpdate) {
                    setError(error);
                    setStatus("error");
                }
            });

        return () => {
            doUpdate = false;
        };
    }, []); // 의존성 배열이 비어있으면 url 전환하여 컴포넌트 처음 호출될 때만 실행.
    //  -> 다른 state 변수값 변화로 재렌더링 될 때 실행되지 않습니다.

    return { data, status, error }; // 3개의 프로퍼티 (값 포함 )를 갖는 객체 리턴
};  // {data:data, status:status, error:error}
    // 프로퍼티 이름과 변수명이 같을 때 한번만 작성.

/* 
*   비동기 작업(getBookings)이 완료되기 저에 컴포넌트가 언마운트될 경우, 더이상*/

