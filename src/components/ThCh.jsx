import "./ThCh.css"

function ThemeChange({theme, themeChanger}) {



    return(
        <div className="theme-changer">
            <label className={`btn ${theme === "dark" ? "dark-btn" : "light-btn"}`}>
            <input type="checkbox" className="thch-box" onClick={themeChanger}></input>
            </label>
        </div>

    )
}

export default ThemeChange