import React from 'react'
import useDarkMode from 'use-dark-mode'
import Toggle from '../toggle/Toggle'

const DarkModeToggle = () => {
    const darkModeConfig = {
        classNameDark: 'dark',
        classNameLight: 'light',
    }
    const darkMode = useDarkMode(false, darkModeConfig)

    return (
        <div
            className="flex mt-0 ml-auto dark-mode-toggle"
            data-testid="dark-mode-toggle"
        >
            <button
                className="text-lg"
                type="button"
                onClick={darkMode.disable}
            >
                ☀
            </button>
            <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
            <button className="text-lg" type="button" onClick={darkMode.enable}>
                ☾
            </button>
        </div>
    )
}

export default DarkModeToggle
