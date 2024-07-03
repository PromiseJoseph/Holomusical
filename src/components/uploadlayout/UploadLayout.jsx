import React, { useContext, useEffect, useState } from "react"
import UploadHeroes from "../Heroes/UploadHeroes"
import Uploads from "./Uploads"
import { Data } from "../Data/Data"
import { UploadContext } from "../context/UploadProvider"
import ReactPaginate from 'react-paginate';

const UploadLayout = () => {
    const { aos_init } = useContext(UploadContext)
    useEffect(() => {
        aos_init()
    }, [])
    return (
        <>
            <main id="main">
                <UploadHeroes section="Uploads" hero="uploadhero" />
               
                <div className="up-dark" >
                <UploadFormat itemsPerPage={9} />
                </div>

            </main>

        </>
    )
}
export default UploadLayout


export const UploadFormat = ({ itemsPerPage }) => {
    const [data,setData] = useState(Data())
    const [sWord,setSWord]=useState({value:""})
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    /* console.log(
    `Loading items from ${itemOffset} to ${endOffset}`
    );*/
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        // console.log(
        //     `User requested page number ${event.selected}, which is offset ${newOffset}`
        // );
        setItemOffset(newOffset);
    };

    // const searchData = (param,array) =>{
    //         for(let i=0;i<array.length;i++){
    //             if(array.find){
    //                 console.log(array[i])
    //             }
    //             console.log(false)
    //         }
    // }
    return (
        <>
         {/* <div class="sidebar-item search-form">
                <h3 class="sidebar-title">Search</h3>
                <form action="" class="mt-3">
                  <input onChange={e=>{
                    console.log(sWord)
                    setSWord({...sWord,value:e.target.value})
                    }} type="text"/>
                  <button type="submit" onClick={e=>{
                    e.preventDefault()
                    console.log(e)
                    searchData(sWord.value,data)
                    }}><i class="bi bi-search"></i></button>
                </form>
              </div> */}
            <div className="" >
                <section className="portfolio sections-bg">
                    <div className="container" data-aos="fade-up">
                        <div className="row gy-3 row-cols-2 row-cols-md-0 row-cols-xl-3" >

                            {
                                currentItems ?
                                    currentItems.map((item) => {
                                        return (
                                            <Uploads
                                                id={item.id}
                                                name={item.name}
                                                description={item.description}
                                                artist={item.artist}
                                                img_path={item.img_path}
                                                artist_image={item.artist_image}
                                                stream_path={item.stream_path}
                                                download_path={item.download_path}
                                            />
                                        )
                                    })
                                    : null
                            }

                        </div>
                        <div id="container" className="mt-3 mx-3 text-center">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=" >> "
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={7}
                        pageCount={pageCount}
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        previousLabel=" << "
                        renderOnZeroPageCount={null}
                    />
                </div>

                    </div>
                    
                </section>
               
            </div>
        </>

    )
}


