"use client"

const ActionButton = () => {
    const onClick = () => {
        fetch("/api", {method: "POST"}).then(r => r.json()).then(console.log)
    }

    return (<button style={{padding: 10}} onClick={onClick}>{"Action"}</button>)
}

export {
    ActionButton
}