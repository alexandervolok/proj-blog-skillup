import React from 'react'

import ArticlesOnMain from '../ArticlesOnMain/ArticlesOnMain'
import RightSidebar from '../RightSidebar/RightSidebar'

const MainPage = () => {
    return (
        <div className="main-grid">
            <ArticlesOnMain />
            <RightSidebar />
        </div>
    )
}

export default MainPage