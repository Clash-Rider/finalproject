import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard(info) {
    return (
        <Link to={`/post/${info.$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    <img src={appwriteService.getFilePreview(info.featuredimage)} alt={info.title}
                        className='rounded-xl' />
                </div>
                <h2 className='text-xi font-bold'>{info.title}</h2>
            </div>
        </Link>
    )
}

export default PostCard