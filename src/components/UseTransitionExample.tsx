import { useState, useTransition } from "react";

const UseTransitionExample = () => {
    const [isPending, startTransition] = useTransition()
    const [input, setInput] = useState<string>("")
    const [list, setList] = useState<any[]>([])

    const LIST_SIZE=20000

    const handleChange = (e: any) => {
        setInput(e.target.value)
        console.log({ isPending });
        startTransition(()=>{
            const item = []
            for (let i = 0; i < LIST_SIZE; i++) {
                item.push(e.target.value)
            }
            setList(item)
        })
    }

    return (
        <div>
            <input type="text" value={input} onChange={handleChange}/>
            { Array.isArray(list) &&
                list.map((item, index) => (
                    <div key={index}> {item} </div>
                ))
            }
        </div>
    );
};

export default UseTransitionExample;