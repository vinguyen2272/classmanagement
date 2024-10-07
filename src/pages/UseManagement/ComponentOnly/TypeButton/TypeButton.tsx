interface TypeButton{
    children:React.ReactNode,
    color?: string,
}
function S_TypeButton({children, color}:TypeButton) {
    return ( 
        <button style={{backgroundColor: color, borderRadius:'20px', color:'white', padding:'5px 15px'}}>{children}</button>
     );
}

export default S_TypeButton;