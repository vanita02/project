// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import BlogCard from "../components/BlogCard";
// const Blogs = () => {
//   const [blogs, setBlogs] = useState([]);
//   //get blogs
//   const getAllBlogs = async () => {
//     try {
//       const { data } = await axios.get("/api/v1/blog/all-blog");
//       if (data?.success) {
//         setBlogs(data?.blogs);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getAllBlogs();
//   }, []);
//   return (
//     <div>
//       {blogs &&
//         blogs.map((blog) => (
//           <BlogCard
//             id={blog?._id}
//             isUser={localStorage.getItem("userId") === blog?.user?._id}
//             title={blog?.title}
//             description={blog?.description}
//             image={blog?.image}
//             username={blog?.user?.username}
//             time={blog.createdAt}
//           />
//         ))}
//     </div>
//   );
// };

// export default Blogs;




import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Faculty(){

    const [data, setData] = useState([]);

    const apiUrl = "http://localhost:3000/login";

    useEffect(()=>{
        fetch(apiUrl, {method:"GET"})
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);

    const foramtedFaculty = data.map((fac)=>{
        return(
            <tr>
                <td>{fac.id}</td>
                <td>{fac.FacultyID}</td>
                <td>{fac.FacultyName}</td>
                <td><Link className="btn btn-primary" to={"/faculty/"+fac.id}>Read More</Link></td>
            </tr>
        );
    })

    return(<table className="table">{foramtedFaculty}</table>);
}

export default Faculty;
