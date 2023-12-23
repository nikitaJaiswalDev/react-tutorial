import { useId } from "react";

const UseIdExample = () => {
    const uid = useId()
    console.log({ uid });
    

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">useId Example</h2>
            
            <label className="block mb-1" htmlFor={`${uid}-name`}>Name</label>
            <input
                className="shadow border border-slate-100 px-4 py-3 mb-3"
                id={`${uid}-name`}
            />

            <label className="block mb-1" htmlFor={`${uid}-age`}>Age</label>
            <input
                className="shadow border border-slate-100 px-4 py-3 mb-3"
                id={`${uid}-age`}
            />
        </div>
    );
};

export default UseIdExample;