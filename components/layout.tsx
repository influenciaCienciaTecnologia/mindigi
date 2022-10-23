const Layout = (props: any) => {
    return (
        <div className="h-screen max-w-5xl w-full m-auto flex">
            <div className="max-w-fit m-auto p-10">
                {props.children}
            </div>
        </div>
        
    )
}

export default Layout