import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>

            <ul>
                <li><a href="https://jsonplaceholder.typicode.com/">home</a></li>
                <li><Link to={'users'}>user page</Link></li>
                <li><Link to={'posts'}>posts page</Link></li>
                <li><Link to={'comments'}>comments page</Link></li>
                <li><Link to={'userPosts'}>users with posts page</Link></li>
                <li><Link to={'postComments'}>posts with comments page</Link></li>
            </ul>

        </div>
    );
};

export default HeaderComponent;
