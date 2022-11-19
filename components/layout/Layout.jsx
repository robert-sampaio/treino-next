function Layout({children}) {
    return (
        <div>
            <head></head>
            <body>
                <header className="
                bg-amber-600 
                h-4
                "></header>
                <main>{children}</main>
                <footer className="
                bg-amber-600
                h-4
                "></footer>
            </body>
        </div>
    )
}

export default Layout