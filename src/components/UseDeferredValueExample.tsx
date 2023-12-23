import { Suspense, memo, useDeferredValue, useEffect, useId, useState } from "react";

type ResultsProps = {
    query : string
}


const Results = memo((props: ResultsProps) => {
    const { query } = props;
    const [meals, setMeals] = useState<any[]>([]);

    const searchUsers = async() => {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
        );
        const data = await response.json();
        setMeals(data.meals || []);
    }

    useEffect(() => {
        searchUsers()
    }, [query])

    return (
        <>
        { Array.isArray(meals) ? 
            <ul>
                { meals.map(meal => {
                    const { idMeal, strMeal} = meal;
                    return <li key={idMeal}>{strMeal}</li>
                })}
            </ul>
            :null
        }
        </>
    )
})

const UseDeferredValueExample = () => {
    const uid = useId()
    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query);
    
    return (
        <div>
            <h2>useDeferredValue Example</h2>
            <div>
                <div>
                    <label htmlFor={uid}>Meal</label>
                    <input  id={uid} value={query} onChange={(e) => setQuery(e.target.value)} />
                </div>
            </div>
            <Suspense fallback={"Loading Result..."}>
                <Results query={deferredQuery}/>
            </Suspense>
        </div>
    );
};

export default UseDeferredValueExample;