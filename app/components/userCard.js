import Link from "next/link";
const userCard = (props) => { 
    var headline = props.headline;
    var description = props.description;
    var link_src = props.link;


    return(
        <div className='codeArea'> 
            <div className='row'>
                <div className='col-12 text-center'>
                    {headline}
                    <p className='fw-lighter fs-6'>{description}</p>
                </div>
                <div className='col-12 text-center'>
                    {
                       link_src ?(
                            <Link href={link_src} className='btn btn-danger'>Hier</Link>
                       ):(
                            <span></span>
                       )
                    }
                    
                </div>
            </div>
        </div>  
    )
}

export default userCard;