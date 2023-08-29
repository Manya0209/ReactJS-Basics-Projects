export const Message =({value,className,outputValue})=>{
    const myClass = `alert alert-${className} text-center`;
    return (
        <div className="col-md-6 offset-md-3">
    <h1 className = {myClass} >{value} {outputValue}</h1>
    </div>
    )
}