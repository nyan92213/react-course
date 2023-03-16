import './app-filter.css'

const AppFilter = (props) => {

    const btnsData = [
        {name: 'all', label: 'Все сотрудники', colored: false},
        {name: 'rise', label: 'На повышение', colored: false},
        {name: 'moreThan1000', label: 'З/п больше 1000$', colored: true}
    ]

    const buttons = btnsData.map(({name, label, colored}) => {
        const active = props.filter === name
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        const style = colored ? {color: '#ffb266'} : null
        return (
            <button 
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}
                style={style}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter