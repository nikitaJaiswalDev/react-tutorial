import { useInsertionEffect, useState } from "react";


const UseInsertionEffectExample = () => {
    const [theme, setTheme] = useState<string>("dark")

    useInsertionEffect(() => {
        const styleRule: any = getStyleRule(theme)
        
        document.head.appendChild(styleRule)

        return () => document.head.removeChild(styleRule)

    }, [theme])

    return (
        <button onClick={() => setTheme(theme === 'dark' ? 'white' : 'dark')}>Change Theme</button>
    );
};

const getStyleRule = (theme: string) => {
    const tag = document.createElement('style')
    tag.innerHTML = `
        button {
            color: ${theme === 'dark' ? 'white': 'black'};
            background-color: ${theme === 'dark' ? 'black': 'white'};
        }
    `
    return tag
}

export default UseInsertionEffectExample;