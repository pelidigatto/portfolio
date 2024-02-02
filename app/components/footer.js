import Link from 'next/link'

function footer(){
    var year = new Date().getFullYear();
    return(    
        <div className="row border-top text-center p-2 m-0">
            <div className="col-6">© {year} Florian Thönelt</div>
            <div className="col-6"><Link href="/impressum/">Impressum</Link> / <Link href="/datenschutz/">Datenschutz</Link></div>          
        </div>
    )
}
export default footer;