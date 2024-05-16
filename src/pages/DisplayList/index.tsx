import "./styles.css"

const DisplayList = () => {
    const times = [
        "America-MG",
        "Athletico",
        "Atlético-GO",
        "Atlético-MG",
        "Avaí",
        "Botafogo",
        "Bragantino",
        "Ceará",
        "Corinthians",
        "Coritiba",
        "Cuiabá",
        "Flamengo",
        "Fluminense",
        "Fortaleza",
        "Goiás",
        "Internacional",
        "Juventude",
        "Palmeiras",
        "Santos",
        "São Paulo"
    ]

    return (
        <div className="display-list">
            <h1>Campeonato Brasileiro</h1>
            <ul>
                {times.map((item) =>
                    (<li>{item}</li>)
                )}
            </ul>
        </div>
    )
}

export default DisplayList