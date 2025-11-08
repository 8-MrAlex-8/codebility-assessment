// I used the PostCard component from DaisyUI to separate responsibility.

// including type declarations as practice
type PostCardProps = {
    title: string,
    excerpt: string
}

const PostCard = ({title, excerpt}: PostCardProps) => {
    return(
        <div className="card bg-base-100 w-96 h-[200px] shadow-sm">
            <div className="card-body flex flex-col justify-between">
                <h2 className="card-title">{title}</h2>
                <p className="grow text-ellipsis line-clamp-3 overflow-hidden">
                    {excerpt}
                </p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Read Post</button>
                </div>
            </div>
        </div>
    )
}

export default PostCard