
import './Blog.css'

function Blog(props){

     const list = props.posts.map((post)=>(
        <div className="article">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <h3>{post.author}</h3>
        </div>
     ))

    return(
            <div className="blog">
                {list}
            </div>
    )
}

export default Blog